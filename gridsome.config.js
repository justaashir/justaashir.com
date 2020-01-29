module.exports = {
  siteName: 'Justaashir - Aashir Aamir Khan Official Portfolio & Blog',
  siteDescription: 'Aashir Aamir Khan, Front End Web Developer & Writer. Designing perfect UI solutions with VueJS.',
  siteUrl: 'https://www.justaashir.com',
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
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, 
        // exclude: ['/exclude-me'], 404
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    }
 
  ],
  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:id'
  },

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}