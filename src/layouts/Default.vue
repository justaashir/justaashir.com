<template>
  <div>
    <div class="bg-background w-full min-h-screen">
      <!-- Sidebar -->
  <div class="fixed min-h-screen left-0 flex flex-col items-center z-10">
    <g-link
      to="/"
      class="md:text-xl bg-primary text-black px-2 md:py-10 py-6 font-bold text-background dis-text rounded hover:bg-opacity-25"
    >
      <ion-icon name="planet" class="mb-1"></ion-icon> Home
    </g-link>

    <g-link
      to="/blog"
      class="md:text-xl bg-primary text-black px-2 md:py-10 py-6 font-bold text-background dis-text rounded hover:bg-opacity-25 mt-4"
    >
      <ion-icon name="bookmarks" class="mb-1"></ion-icon> Blog
    </g-link>
  </div>

      <div
        class="w-full max-w-6xl mx-auto px-4 py-8 flex justify-between md:flex-no-wrap flex-wrap pl-16 lg:pl-4"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<style src="../assets/css/global.css" />
