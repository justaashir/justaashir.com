<template>
  <article class="mb-12 md:mb-20 ">
    <g-link :to="post.path">
      <h6 class="text-primary font-mono mb-2 md:text-xl">{{ post.date }}</h6>
      <h3 class="text-white font-bold text-xl md:text-5xl">{{ post.title }}</h3>
    </g-link>
    <tags :tags="post.tags" class="md:mt-4" />
  </article>
</template>

<script>
import tags from "@/components/PostTags";
export default {
  components: {
    tags,
  },
  props: {
    post: {
      required: true,
    },
  },
};
</script>
