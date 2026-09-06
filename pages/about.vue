<template>
  <div class="wrapper-small md:px-10 py-16 text-center">
    <p class="text-gray-600 dark:text-gray-300 mb-6">
      Looking for the full story? See the resume.
    </p>
    <div class="flex flex-wrap justify-center gap-3">
      <a
        href="/Nicole_Weatherburne_Resume.pdf"
        download
        class="inline-flex px-5 py-2.5 rounded-md bg-primary text-white font-medium"
      >
        Download Resume
      </a>
      <nuxt-link
        to="/#ai-projects"
        class="inline-flex px-5 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 font-medium text-gray-700 dark:text-gray-200"
      >
        AI Projects
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'About',
  },
}
</script>
