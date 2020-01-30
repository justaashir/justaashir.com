<template>
  <Layout>
    <div class="j-page-container">
      <header>
        <h6 class="j-color-primary j-text-bold">{{$page.post.date}}</h6>
        <h1>{{$page.post.title}}</h1>
        <tags :tags="$page.post.tags" />
      </header>
      <section v-html="$page.post.content" class="post">
      </section>
    </div>
  </Layout>
</template>
<page-query>
query ($path: String!) {
  post: post (path: $path) {
    title
    url
    date(format: "D MMMM YYYY")
     tags {
      id
      title
      path
    }
    content
  }
}
</page-query>
<script>
import Tags from '~/components/PostTags'
export default {
  components: {
    Tags
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
<style scoped lang="scss">
.post{
  img{
    display:block;
    text-align:center;
    max-width:100%;
  }
}
</style>