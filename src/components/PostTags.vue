<template>
   <section>
   		<g-link v-for="tag in tags" :key="tag.id" :to="tag.path">
   			<span class="tag"># {{ tag.title }}</span> 
   		</g-link>
    </section>
</template>

<script>
export default {
  props: ['tags']
}
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;
  &__link {
  	margin-right: .7em;
  	font-size: .8em;
  	color: currentColor;
  	text-decoration: none;
  	background-color: var(--bg-color);
  	color: currentColor!important; //Todo: remove important;
  	padding: .5em;
  	border-radius: var(--radius);
  }
}
</style>