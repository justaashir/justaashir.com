module.exports = {
  siteName: 'Justaashir',
  siteDescription: "Writing about everything intresting in web development: Vue, TailwindCSS, Node, MongoDB and lot more... Making digital content everyday.",
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
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-157279377-1'
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
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
    Post: '/blog/:url',
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
