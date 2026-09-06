<template>
  <div class="flex text-center text-gray-700 dark:text-gray-200 py-10 md:py-16">
    <div class="m-auto max-w-3xl">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">
        <span class="font-normal dark:text-gray-300">Hey, I am</span>
        Nicole W.
      </h2>
      <h3
        class="font-bold text-primary dark:text-primary text-3xl md:text-4xl lg:text-5xl mt-2"
      >
        AI Product Engineer
      </h3>
      <p
        class="text-base md:text-lg text-gray-500 dark:text-gray-400 mt-4 leading-relaxed"
      >
        Automation & AI | Full-Stack &amp; Scalable Systems
      </p>

      <div class="flex flex-wrap justify-center gap-3 mt-8">
        <a
          href="/Nicole_Weatherburne_Resume.pdf"
          download
          class="inline-flex items-center px-6 py-2.5 rounded-md bg-primary text-white font-medium hover:opacity-90"
        >
          Download Resume
        </a>
        <a
          :href="$config.devGithubLink"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center px-6 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          GitHub
        </a>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mt-10">
        <span
          v-for="(skill, index) in skills"
          :key="index"
          class="text-sm px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        'React & Vite',
        'TypeScript',
        'Python',
        'LangChain',
        'LangGraph',
        'Vector Search',
        'RAG',
        'OpenAI / Claude',
        'Cursor',
        'Agent Skills',
        'English Writing',
        'GCP & AWS',
        'Docker',
      ],
    }
  },
}
</script>
