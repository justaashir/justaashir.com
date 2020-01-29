module.exports = {
  siteName: 'justaashir. - Aashir Aamir Khan, Front End Web Developer & Writer',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ],
        },
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        
      },
      
    },
  ],
  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:id'
  },

  transformers: {
    remark: {}
  }
}