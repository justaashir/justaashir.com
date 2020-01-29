// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'



// Components Global
import InfoBox from '~/components/InfoBox.vue'
import PostCard from '~/components/PostCard.vue'

import '~/assets/styles/main.scss'
import 'prismjs/themes/prism.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)


  // Global Components
  Vue.component('InfoBox', InfoBox)
  Vue.component('PostCard', PostCard)
  

}
