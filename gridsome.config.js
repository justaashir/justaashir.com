module.exports = {
  siteName: 'Justaashir.com',
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