<template>
  <Layout>
    <div class="j-page-container">
       <section style="margin-top:80px;">
        <h3>Blog</h3>
          <post-card :post="edge.node"   v-for="edge in $page.posts.edges" :key="edge.node.id" />
           <tags :tags="$page.posts.tags" />
      </section>
    </div>
  </Layout>
</template>
<page-query>
query {
  posts: allPost(sortBy: "date") {
    edges {
      node {
        url
        title
        date(format: "D MMMM YYYY")
        tags {
          id
          title
          path
        }
        path
      }
    }
  }
}
</page-query>
<script>
  import tags from '~/components/PostTags'
export default {
  metaInfo: {
    title: "Blog - Latest Posts |  "
  },
  components: {
    tags
  },
};
</script>

<style lang="scss" scoped>

</style>
