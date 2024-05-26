<template>
  <article>
    <div :class="$style.actions">
      <button @click="updateFromEmpty">Fill empty</button>
    </div>

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
              :class="[
                {
                  [$style.empty]: item.count === '0' || item.total === '0',
                },
              ]"
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
      <div style="flex: 1">Import from text</div>
      <div style="flex: 1">Export to text</div>
    </div>

    <div :class="$style.wrapper">
      <textarea :value="jsonIn" rows="10" @input="updateFromIn" style="flex: 1"></textarea>
      <textarea v-model="jsonOut" rows="10" :disabled="true" style="flex: 1"></textarea>
    </div>
  </article>
</template>

<script lang="ts" setup>
type HamsterKombatUpgradeWithPrice = HamsterKombatUpgrade & { price: string };

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

const items = ref<HamsterKombatUpgrade[]>([]);
const sortingItems = ref<HamsterKombatUpgradeWithPrice[]>([]);
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

  const parsedUpgrades: HamsterKombatUpgrade[] = parseItems(target.value);

  fill(parsedUpgrades);

  jsonIn.value = '';

  sort();
}

function parseItems(json: string): HamsterKombatUpgrade[] {
  let parsedItems: HamsterKombatUpgrade[] = [];

  try {
    const parsedJson = JSON.parse(json);

    if (!Array.isArray(parsedJson)) {
      throw Error('Not array');
    }

    for (let i = 0; i < parsedJson.length; i++) {
      const parsedItem = parsedJson[i];

      const item = parseItem(parsedItem);

      parsedItems.push(item);
    }
  } catch (error) {
    parsedItems = [];
  }

  return parsedItems;
}

function parseItem(item: unknown): HamsterKombatUpgrade {
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

function updateFromEmpty(): void {
  items.value = [];
  sortingItems.value = [];
  jsonOut.value = '';

  fill([]);
}

function fill(parsedUpgrades: HamsterKombatUpgrade[]): void {
  for (let i = 0; i < HAMSTER_KOMBAT_UPGRADES.length; i++) {
    const upgrade = HAMSTER_KOMBAT_UPGRADES[i];

    const parsedUpgrade = parsedUpgrades.find((item) => item.name === upgrade.name && item.tab === upgrade.tab);

    if (parsedUpgrade) {
      items.value.push(parsedUpgrade);
    } else {
      items.value.push({
        name: upgrade.name,
        tab: upgrade.tab,
        count: '0',
        total: '0',
      });
    }
  }
}
</script>

<style lang="scss" module>
.actions {
  display: flex;
  flex-direction: column;
}
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

.empty {
  background-color: lightgray;
}
</style>

