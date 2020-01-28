<template>
<div>
  <j-navigation-bar/>
  <div class="j-body-container"> 
    <slot/>
  </div>
  <j-footer>

     </j-footer>
</div>

</template>

<script>
import jNavigationBar from "~/components/seperators/NavigationBar.vue"
import jFooter from '~/components/seperators/Footer'
export default {
  components: {
    jNavigationBar,
    jFooter
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
