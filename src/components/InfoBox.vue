<template>
  <div class="j-bg-secondary">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid #c2c7c4;
  border-radius: 4px;
  margin: 10px 0;
  padding: 0.75rem;
  font-size: 0.9em;
  line-height: 1.25;
  font-weight: 400;
}
@media only screen and (min-width: 620px) {
  div {
    border: 1px solid #c2c7c4;
    border-radius: 4px;
    margin: 20px 0px 20px 0;
    padding: 0.75rem;
    line-height: 1.65;
    font-size: 1.1em;
  }
}
</style>