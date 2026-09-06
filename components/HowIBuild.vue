<template>
  <section id="how-i-build" class="mt-16 scroll-mt-24">
    <SectionHeading title="How I build with AI" />

    <p
      class="wrapper-small text-center text-sm text-gray-500 dark:text-gray-400 -mt-1 mb-6 max-w-2xl mx-auto"
    >
      Cursor isn’t autocomplete for me, it’s an orchestrated workflow
    </p>

    <div class="wrapper-small my-5 grid grid-cols-1 md:grid-cols-3 gap-6">
      <article
        v-for="(card, index) in cards"
        :key="index"
        class="bg-gray-50 dark:bg-gray-800 p-6 shadow rounded-lg flex flex-col"
      >
        <span
          class="inline-block self-start text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 text-primary dark:bg-purple-900/40 dark:text-purple-200"
        >
          {{ card.badge }}
        </span>
        <h3 class="mt-3 text-lg font-semibold text-gray-800 dark:text-gray-100">
          {{ card.title }}
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ card.description }}
        </p>
        <ul
          class="mt-3 space-y-1.5 text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 flex-1"
        >
          <li v-for="(point, i) in card.points" :key="i">{{ point }}</li>
        </ul>
        <a
          v-if="card.link"
          :href="card.link"
          target="_blank"
          rel="noreferrer"
          class="inline-block mt-4 text-sm font-medium text-primary hover:underline"
        >
          {{ card.linkLabel }} →
        </a>
        <div
          class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
        >
          <span
            v-for="(tag, i) in card.tags"
            :key="i"
            class="text-xs px-2.5 py-1 rounded-full bg-gray-200/80 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          badge: 'Daily driver',
          title: 'Agent Skills',
          description:
            'I develop against production-grade agent skills so coding agents follow senior engineering habits across every phase- define, plan, build, verify, ship.',
          points: [
            'Skill routing: pick the right workflow per task',
            'Non-negotiables: surface assumptions, manage confusion',
            'Verification is required — passing tests / runtime evidence',
            'MCPs for Jira, GitHub, Notion, and AWS when the task needs live systems context',
          ],
          link: 'https://github.com/addyosmani/agent-skills',
          linkLabel: 'addyosmani/agent-skills',
          tags: [
            'Agent Skills',
            'Spec-driven',
            'TDD',
            'Code Review',
            'Cursor Rules',
          ],
        }
      ],
    }
  },
}
</script>
