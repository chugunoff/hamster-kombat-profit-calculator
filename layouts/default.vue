<template>
  <div :class="$style.defaultLayout">
    <main>
      <slot name="default"></slot>
    </main>

    <footer :class="$style.footer">
      <div>Donate</div>

      <div :class="$style.wallets">
        <div>Etherium EVM: 0x1ce9a5ca23a0af17fedf79d2bb953451c5834160</div>
        <div>BTC: bc1qwjfuau8d29h482sc4kf5jzxq962p7nncegjdug</div>
        <div>Solana: 9rhLhwnj2RWveEFeufGkNbhJDsnTiTVUnVwRzvvFxZqt</div>
        <div>Sui: 0x6bfcfdba4d5e7a52fa49bfb2579ceb109cff61cad907bf810efe324e8a458d6c</div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" module>
.defaultLayout {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.wallets {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
</style>

