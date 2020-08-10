<template>
<div>
  <Layout>
    <div>
      <h1 class="text-white font-bold text-3xl md:text-5xl mb-4"># {{ $page.tag.title }}</h1>
      <post-card v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</div>
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
            tags {
              id
              title
              path
            }
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
