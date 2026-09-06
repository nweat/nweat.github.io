<template>
  <section id="architecture" class="mt-16 scroll-mt-24">
    <SectionHeading title="Architecture Diagrams" />

    <div class="wrapper-small my-5 space-y-6">
      <article
        v-for="(item, index) in diagrams"
        :key="index"
        class="bg-gray-50 dark:bg-gray-800 p-6 shadow rounded-lg"
      >
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {{ item.title }}
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ item.description }}
        </p>

        <div
          class="mt-5 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 p-4 md:p-6 overflow-x-auto"
        >
          <pre
            class="text-xs md:text-sm text-left text-gray-700 dark:text-gray-300 font-mono leading-relaxed whitespace-pre"
          >{{ item.diagram }}</pre>
        </div>

        <div class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="(tag, i) in item.tags"
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
      diagrams: [
        {
          title: 'LLM RAG Pipeline with Vector Search',
          description:
            'Architecture for reducing LLM context costs by retrieving relevant documents via vector similarity search with metadata filters before prompt assembly.',
          diagram: `User Question
     │
     ▼
┌─────────────┐     ┌──────────────────┐
│  Embed query │────▶│  Vector search   │
└─────────────┘     │  + metadata      │
                    │  filters         │
                    └────────┬─────────┘
                             │ top-k chunks
                             ▼
                    ┌──────────────────┐
                    │ Prompt assembly  │
                    │ (system + ctx)   │
                    └────────┬─────────┘
                             ▼
                    ┌──────────────────┐
                    │ LLM (Claude /    │
                    │ OpenAI / Bedrock)│
                    └────────┬─────────┘
                             ▼
                        Grounded answer`,
          tags: ['Vector DB', 'Metadata Filters', 'LLM API'],
        },
        {
          title: 'AI Release Notes Generator',
          description:
            'Compare draft vs latest released revision, summarize changes, and return editor-ready notes via Claude Haiku on Bedrock. The API is designed in way to be registered as a tool via MCP for the AI Assistant.',
          diagram: `User request
         │ 
         ▼
   ┌───────────┐      ┌──────────────────┐
   │ proxy     │─────▶│ release-notes-api│
   │           │      │  (FastAPI / ECS) │
   └───────────┘      └────────┬─────────┘
                               │ 
                               ▼
                      ┌──────────────────┐
                      │ guides           │
                      │ draft + release  │
                      └────────┬─────────┘
                               │ diff summary
                               ▼
                      ┌──────────────────┐
                      │ Bedrock Haiku    │
                      │ (schema JSON)    │
                      └────────┬─────────┘
                               ▼
                   Editor-ready release notes`,
          tags: ['FastAPI', 'Bedrock', 'Claude Haiku', 'ECS'],
        },
      ],
    }
  },
}
</script>
