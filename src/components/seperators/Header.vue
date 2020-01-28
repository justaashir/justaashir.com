<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 90px;
  h1 {
    margin-top: 10px;
    font-size: 1.7em;
  }
}

@media (min-width: 620px) {
  header {
    h1 {
      margin-top: 10px;
      font-size: 4em;
    }
  }
}
</style>