module.exports = {
  siteName: 'justaashir. - Aashir Aamir Khan, Front End Web Developer & Writer',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/posts/**/*.md',
        typeName: 'Post',
        remark: {},
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
    Post: '/:title',
    Tag: '/tag/:id'
  },

  transformers: {
    remark: {}
  }
}