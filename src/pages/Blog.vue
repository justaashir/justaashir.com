<template>
<div>
  <Layout>
    <section class="mx-auto">
      <post-card :post="edge.node" v-for="edge in $page.posts.edges" :key="edge.node.id" />
      <tags :tags="$page.posts.tags" />
    </section>
  </Layout>
</div>
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
import tags from "@/components/PostTags";
export default {
  components: {
    tags,
  },
  metaInfo: {
    title: "Blog | VueJS, Node, TailwindCSS and career development",
    meta: [
      {
        name: "description",
        content:
          "I write awesome content on some trending topics + some cool tips and tricks and tutorials on everything related to Web, Design and Mobile",
      },
      {
        name: "author",
        content: "Justaashir",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://justaashir.com/blog",
      },
    ],
  },
};
</script>
