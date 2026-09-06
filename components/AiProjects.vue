<template>
  <section id="ai-projects" class="mt-16 scroll-mt-24">
    <SectionHeading title="AI Projects" />

    <div class="wrapper-small my-5 grid grid-cols-1 md:grid-cols-2 gap-6">
      <article
        v-for="(project, index) in projects"
        :key="index"
        class="bg-gray-50 dark:bg-gray-800 p-6 shadow rounded-lg flex flex-col"
      >
        <div>
          <span
            class="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 text-primary dark:bg-purple-900/40 dark:text-purple-200"
          >
            {{ project.badge }}
          </span>
          <h3 class="mt-3 text-lg font-semibold text-gray-800 dark:text-gray-100">
            {{ project.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ project.description }}
          </p>
          <ul
            class="mt-3 space-y-1.5 text-sm text-gray-600 dark:text-gray-300 list-disc pl-5"
          >
            <li v-for="(point, i) in project.points" :key="i">{{ point }}</li>
          </ul>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noreferrer"
            class="inline-block mt-3 text-sm font-medium text-primary hover:underline"
          >
            {{ project.linkLabel || 'Learn more' }} →
          </a>
        </div>
        <div
          class="flex flex-wrap gap-2 mt-5 pt-4 border-t border-gray-200 dark:border-gray-700"
        >
          <span
            v-for="(tag, i) in project.tags"
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
      projects: [
        {
          badge: 'Production',
          title: 'AI Release Notes Generator',
          description:
            'FastAPI service that drafts editor-ready release notes when a manufacturing guide is released - comparing the draft to the latest published revision and generating structured notes with Claude Haiku via Bedrock.',
          points: [
            'Schema-constrained JSON',
            'LangSmith managed prompts for iteration',
          ],
          tags: [
            'FastAPI',
            'Bedrock',
            'Claude Haiku',
            'Structured Outputs',
            'NestJS',
            'AWS ECS',
            'Cost-aware prompts',
            'Datadog',
          ],
        },
        {
          badge: 'AI engineering toolkit',
          title: 'Engineering Brag Pack Skill',
          description:
            'A reusable agent skill that turns real work evidence into a performance-review talk track. Built as part of an AI engineering toolkit.',
          points: [
            'Pulls from Jira, GitHub, Notion (+ optional peer shoutouts) via MCP',
            'Human confirm-gate so noise never becomes false brags',
            'Impact + Signal + Story format → interactive Canvas for 1:1s',
          ],
          tags: [
            'Agent Skills',
            'MCP',
            'Cursor Canvas',
            'Prompt Design'
          ],
        },
        {
          badge: 'Freelance · Eval-first',
          title: 'RAG Chatbot Prototypes & Evals',
          description:
            'Scoped RAG FAQ/SOP chatbots with an evaluation harness',
          points: [
            'Golden question sets with expected citations / “I don’t know” cases',
            'Score retrieval hit-rate and answer faithfulness before shipping prompt tweaks',
            'Offline eval scripts + traces so regressions show up before customers do',
          ],
          tags: [
            'RAG',
            'Evals',
            'Golden Fixtures',
            'Embeddings',
          ],
        },
      ],
    }
  },
}
</script>
