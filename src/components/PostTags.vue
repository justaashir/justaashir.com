<template>
   <section>
   		<g-link v-for="tag in tags" :key="tag.id" :to="tag.path">
   			<span class="j-tag"># {{ tag.title }}</span> 
   		</g-link>
    </section>
</template>

<script>
export default {
  props: ['tags']
}
</script>
