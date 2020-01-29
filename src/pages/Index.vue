<template>
  <Layout>
   <div class="j-page-container">
     <!-- Header -->
       <j-header>
       <h1>Writer<b class="j-color-primary">.</b></h1>
       <h1>Problem Solver<b class="j-color-primary">.</b></h1>
       <h1>Front End Web Developer<b class="j-color-primary">.</b></h1>
        <!-- <section>
           <a href=""><i class="fab fa-twitter"></i></a>
        <a href=""><i class="fab fa-github"></i></a>
         <a href=""><i class="fab fa-dev"></i></a>
        </section> -->
      </j-header> 
      
      <!-- InfoBox -->
       <info-box>
        <h6>Hi, I'm Aashir Aamir Khan</h6>
        <p>I'm a front-end web developer, I design perfect UI solutions with <a href="#">VueJS</a>. Passionate writer and a very like-able human being. <b class="j-text-bold">Feel free to contact me on <a href="#" class="dashed-border">hello@justaashir.com</a>, It would be a great expereince to work with you.</b></p>
       </info-box>

       <!-- BLOG List -->
      <section style="margin-top:80px;">
        <h4>Latest posts</h4>
          <post-card :post="edge.node"   v-for="edge in $page.posts.edges" :key="edge.node.id" />
        
      </section>
     </div>
  </Layout>
</template>
<page-query>
query {
  posts: allPost(limit:5,sortBy: "date") {
    edges {
      node {
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
import jHeader from '~/components/seperators/Header'
export default {
  metaInfo: {
    title: "Aashir Aamir Khan - Front End Web Developer & Technical Writer | justaashir.com"
  },
  components:{
    jHeader
  }
};
</script>
<style scoped>
section a{
  font-size:70px;
  color:#4d4646;
  margin-left: 30px;
  display: inline-block;
}
</style>