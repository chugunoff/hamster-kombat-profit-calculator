<template>
  <article>
    <div :class="$style.wrapper">
      <div :class="$style.tableWrapper">
        <table :class="$style.table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Tab</th>
              <th scope="col">Count</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in items"
              :key="item.name + item.tab"
              :style="{ backgroundColor: highlightedItemsColors[item.name] }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.tab }}</td>
              <td>
                <input v-model="item.count" />
              </td>
              <td>
                <input v-model="item.total" @keyup.enter="sort" />
              </td>
            </tr>
          </tbody>

          <tfoot></tfoot>
        </table>
      </div>

      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
        <button @click="sort">Sort</button>
      </div>

      <div :class="$style.tableWrapper">
        <table :class="$style.table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Tab</th>
              <th scope="col">Price</th>
              <th scope="col">Count</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in sortingItems"
              :key="item.name + item.tab"
              :style="{ backgroundColor: highlightedItemsColors[item.name] }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.tab }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.count }}</td>
              <td>{{ item.total }}</td>
            </tr>
          </tbody>

          <tfoot></tfoot>
        </table>
      </div>
    </div>

    <div :class="$style.wrapper">
      <textarea :value="jsonIn" rows="10" @input="updateFromIn" style="flex: 1"></textarea>
      <textarea v-model="jsonOut" rows="10" :disabled="true" style="flex: 1"></textarea>
    </div>
  </article>
</template>

<script lang="ts" setup>
type Item = {
  name: string;
  tab: 'Markets' | 'PR&Team' | 'Legal' | 'Specials' | '';
  count: string;
  total: string;
};

type ItemWithPrice = Item & { price: string };

const COLORS = [
  '#69bee9',
  '#c0417c',
  '#b89955',
  '#d8d924',
  '#683d3c',
  '#755ca1',
  '#92e620',
  '#e44af6',
  '#d09431',
  '#086c61',
];

const items = ref<Item[]>([]);
const sortingItems = ref<ItemWithPrice[]>([]);
const highlightedItems = computed<string[]>(() => {
  return sortingItems.value.slice(0, 10).map((item) => item.name);
});
const highlightedItemsColors = computed<Record<string, string>>(() => {
  const result: Record<string, string> = {};

  highlightedItems.value.forEach((item, index) => {
    result[item] = COLORS[index];
  });

  return result;
});

const jsonIn = ref<string>('');
const jsonOut = ref<string>('');

function sort(): void {
  sortingItems.value = [];

  for (let i = 0; i < items.value.length; i++) {
    const price =
      Number(items.value[i].total) / Number(items.value[i].count)
        ? Number(items.value[i].total) / Number(items.value[i].count)
        : Infinity;

    sortingItems.value.push({
      ...items.value[i],
      price: price.toFixed(2).toString(),
    });
  }

  sortingItems.value.sort((a, b) => {
    return Number(a.price) - Number(b.price);
  });

  jsonOut.value = JSON.stringify(items.value);
}

function updateFromIn(event: Event): void {
  const target = event.target as HTMLInputElement;

  jsonIn.value = target.value;

  items.value = [];
  sortingItems.value = [];
  jsonOut.value = '';

  const parsed = JSON.parse(target.value);

  try {
    if (!Array.isArray(parsed)) {
      throw Error('Not array');
    }

    for (let i = 0; i < parsed.length; i++) {
      const parsedItem = parsed[i];

      const item = parseItem(parsedItem);

      items.value.push(item);
    }
  } catch (error) {}

  jsonIn.value = '';

  sort();
}

function parseItem(item: unknown): Item {
  const valid =
    typeof item === 'object' &&
    item !== null &&
    'name' in item &&
    typeof item.name === 'string' &&
    'tab' in item &&
    typeof item.tab === 'string' &&
    (item.tab === 'Markets' || item.tab === 'PR&Team' || item.tab === 'Legal' || item.tab === 'Specials') &&
    'count' in item &&
    typeof item.count === 'string' &&
    'total' in item &&
    typeof item.total === 'string';

  if (!valid) {
    throw Error('Object not valid. Object :>> ' + item);
  }

  return {
    name: typeof item.name === 'string' ? item.name : '',
    // prettier-ignore
    tab: typeof item.tab === 'string' && (item.tab === 'Markets' || item.tab === 'PR&Team' || item.tab === 'Legal' || item.tab === 'Specials') ? item.tab : '',
    count: typeof item.count === 'string' ? item.count : '',
    total: typeof item.total === 'string' ? item.total : '',
  };
}
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  gap: 12px;
}

.tableWrapper {
  flex: 1;
}

.table {
  width: 100%;

  border-spacing: 4px;

  td {
    text-align: center;
  }
}
</style>

