<template>
  <Layout>
    <div class="j-page-container">
      <header>
        <h6 class="j-color-primary j-text-bold">{{$page.post.date}}</h6>
        <h1>{{$page.post.title}}</h1>
        <tags :tags="$page.post.tags" />
      </header>
      <section v-html="$page.post.content" class="post"></section>
    </div>
  </Layout>
</template>
<page-query>
query ($path: String!) {
  post: post (path: $path) {
    title
    url
    carn
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
import tags from "~/components/PostTags";
export default {
  components: {
    tags
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      link: [
        { rel: "canonical", href: this.$page.post.carn  }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
.post {
  img {
    display: block;
    text-align: center;
    max-width: 100%;
  }
}
</style>
