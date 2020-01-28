<template>
  <Layout>
    <div class="j-page-container">
      <h1># {{ $page.tag.title }}</h1>
        <post-card v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {}
};
</script>

<style lang="scss">
</style>