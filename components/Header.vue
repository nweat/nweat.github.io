<template>
  <div>
    <nav class="wrapper py-6 dark:bg-gray-900">
      <div class="px-6 md:px-10 flex justify-between items-center gap-4">
        <div class="logo">
          <nuxt-link to="/">
            <h1 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
              {{ $config.devLogo }}
            </h1>
          </nuxt-link>
        </div>

        <div class="hidden md:flex flex-row items-center">
          <a class="nav-link" href="#ai-projects">AI Projects</a>
          <a class="nav-link" href="#how-i-build">How I build</a>
          <a class="nav-link" href="#architecture">Architecture</a>
          <nuxt-link class="nav-link" to="/posts">Blog</nuxt-link>
          <a
            class="nav-link"
            :href="$config.devGithubLink"
            target="_blank"
            rel="noreferrer"
            >GitHub</a
          >
          <ColorSwitcher />
        </div>

        <div class="flex md:hidden items-center gap-3">
          <a
            class="text-sm font-medium text-primary"
            href="/Nicole_Weatherburne_Resume.pdf"
            download
            >Resume</a
          >
          <ColorSwitcher />
          <button
            type="button"
            class="text-gray-700 dark:text-gray-200 text-sm font-medium"
            aria-label="Toggle menu"
            @click="toggle"
          >
            {{ isOpen ? 'Close' : 'Menu' }}
          </button>
        </div>
      </div>

      <div
        v-if="isOpen"
        class="md:hidden px-6 pb-4 flex flex-col space-y-3 border-t border-gray-100 dark:border-gray-800 mt-4 pt-4"
      >
        <a class="mobile-nav" href="#ai-projects" @click="toggle">AI Projects</a>
        <a class="mobile-nav" href="#how-i-build" @click="toggle">How I build</a>
        <a class="mobile-nav" href="#architecture" @click="toggle"
          >Architecture</a
        >
        <nuxt-link class="mobile-nav" to="/posts" @click.native="toggle"
          >Blog</nuxt-link
        >
        <a
          class="mobile-nav"
          :href="$config.devGithubLink"
          target="_blank"
          rel="noreferrer"
          @click="toggle"
          >GitHub</a
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style>
.nav-link {
  @apply ml-5 font-medium text-center text-base text-gray-700 dark:text-gray-200 dark:hover:text-primary hover:text-primary m-auto;
}

.mobile-nav {
  @apply text-base font-medium text-gray-700 dark:text-gray-200;
}
</style>
