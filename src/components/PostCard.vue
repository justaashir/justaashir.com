<template>
  <section id="post">
   <g-link :to="post.path">
    <h6 class="j-color-primary j-text-bold">{{post.date}}</h6>
    <h3>{{post.title}}</h3>
     </g-link>
     <tags :tags="post.tags" />
  </section>
</template>

<script>
import Tags from '~/components/PostTags'
export default {
  components: {
    Tags
  },
  props: {
   post: {
     required: true,
   }
  },
};
</script>

<style lang="scss" scoped>
section#post {
  border: 2px dashed #c2c7c4;
  padding: 1em;
}
</style>