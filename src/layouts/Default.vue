<template>
  <div>
    <div class="bg-background w-full min-h-screen pb-10">
      <!-- Sidebar -->
    <div class="fixed bg-primary md:bg-background md:min-h-screen md:left-0 top-0 w-full flex justify-around md:w-auto md:justify-start md:flex-col items-center z-10">
      <g-link
        to="/"
        class="md:text-xl bg-primary flex items-center md:block px-2 md:py-10 py-2 font-bold text-background md:dis-text rounded hover:bg-opacity-25"
      >
        <ion-icon name="planet" class="md:mb-1 mr-2 md:mr-0"></ion-icon> Home
      </g-link>

      <g-link
        to="/blog"
        class="md:text-xl bg-primary flex items-center md:block px-2 md:py-10 py-2 font-bold text-background md:dis-text rounded hover:bg-opacity-25 md:mt-4"
      >
        <ion-icon name="bookmarks" class="md:mb-1 mr-2 md:mr-0"></ion-icon> Blog
      </g-link>
    </div>

      <div
        class="w-full max-w-6xl mx-auto px-4 flex justify-between md:flex-no-wrap flex-wrap pt-20 md:pt-10"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
