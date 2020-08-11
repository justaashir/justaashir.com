<template>
  <section class="flex flex-wrap">
    <g-link v-for="tag in tags" :key="tag.id" :to="tag.path" class="md:mt-0 mt-6  mr-2 block">
      <span class="md:px-6 px-2 text-xs md:text-base py-2 border-2 border-primary text-white hover:bg-primary"># {{ tag.title }}</span>
    </g-link>
  </section>
</template>

<script>
export default {
  props: ["tags"],
};
</script>
