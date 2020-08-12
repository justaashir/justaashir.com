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
  data() {
    return {
      title: "Blog | VueJS, Node, TailwindCSS and career development",
      description:  "I write awesome content on some trending topics + some cool tips and tricks and tutorials on everything related to Web, Design and Mobile",
    }
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          name: "description",
          content: this.description,
        },
        {
          property: "og:title",
          content: this.title,
        },
        {
          property: "og:description",
          content: this.description,
        },
        {
          name: "twitter:title",
          content: this.title,
        },
        {
          name: "twitter:description",
          content: this.description,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://justaashir.com/blog",
        },
      ],
    };
  },
};
</script>
