<template>
  <div>
    <Layout>
      <div>
        <header>
          {{ $page.post.carn === '/'}}
          <h6 class="text-primary font-mono mb-2 md:text-xl">{{ $page.post.date }}</h6>
          <h1 class="text-white font-bold text-xl md:text-5xl">{{ $page.post.title }}</h1>
          <tags :tags="$page.post.tags" class="md:mt-4" />
        </header>
        <main class="mt-8 prose text-white max-w-none break-words" v-html="$page.post.content"></main>
      </div>
    </Layout>
  </div>
</template>

<page-query>
query ($path: String!) {
  post: post (path: $path) {
    path
    title
    description
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
import tags from "@/components/PostTags";
export default {
  components: {
    tags,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description,
        },
        {
          property: "og:title",
          content: this.$page.post.title,
        },
        {
          property: "og:description",
          content: this.$page.post.description,
        },
        {
          name: "twitter:title",
          content: this.$page.post.title,
        },
        {
          name: "twitter:description",
          content: this.$page.post.description,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: this.$page.post.carn === '/' ? `https://justaashir.com${this.$page.post.path}` : this.$page.post.carn,
        },
      ],
    };
  },
};
</script>
