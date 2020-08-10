// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '@/layouts/Default.vue'



// Components Global
import PostCard from '@/components/PostCard.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Ion Icon
  Vue.config.ignoredElements = ['ion-icon'];


  // OG-GRAPH TAGS

  head.meta.push({
    property: 'og:locale',
    content: 'en_US'
  })

  head.meta.push({
    property: 'og:type',
    content: 'website'
  })

  head.meta.push({
    property: 'og:title',
    content: 'en_US'
  })

  head.meta.push({
    property: 'site_name',
    content: 'Justaashir'
  })

  head.meta.push({
    property: 'og:image',
    content: 'https://justaashir.com/assets/meta-image.png'
  })


  // Twitter
  head.meta.push({
    name: 'twitter:card',
    content: 'summary'
  })

  head.meta.push({
    name: 'twitter:site',
    content: '@justaashir'
  })

  head.meta.push({
    name: 'twitter:image',
    content: 'https://justaashir.com/assets/meta-image.png'
  })







  // Global Components
  Vue.component('PostCard', PostCard)


}
