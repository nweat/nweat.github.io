<template>
  <div class="wrapper-small md:px-10 py-10">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-8">
      <nuxt-link
        to="/#resume"
        class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary"
      >
        ← Back
      </nuxt-link>
      <a
        href="/Nicole_Weatherburne_Resume.pdf"
        download
        class="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:opacity-90"
      >
        Download Resume
      </a>
    </div>

    <article class="max-w-3xl mx-auto text-gray-700 dark:text-gray-200">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          Nicole Weatherburne
        </h1>
        <p class="text-primary font-semibold text-lg mt-1">
          AI Product Engineer | Full-Stack LLM Systems
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
          California (Remote) ·
          <a class="underline" href="https://nweat.github.io/">nweat.github.io</a>
          ·
          <a class="underline" :href="$config.devGithubLink">GitHub</a>
          ·
          <a class="underline" :href="$config.devLinkedinLink">LinkedIn</a>
        </p>
      </header>

      <p class="leading-relaxed mb-8">
        I design and ship production AI features end-to-end: RAG chatbots
        grounded in private docs, LLM pipelines with reliable structured
        outputs, and the React/API surfaces users actually talk to. Comfortable
        owning prompt design, retrieval quality, cost control, and the
        full-stack glue that turns a prototype into a product.
      </p>

      <section class="mb-8">
        <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
          What I build for clients
        </h2>
        <ul class="list-disc pl-5 space-y-1 text-sm leading-relaxed">
          <li>
            RAG chatbots — embeddings + retrieval over FAQs/SOPs/policies,
            prompt instructions, chat UIs, accuracy testing
          </li>
          <li>
            LLM workflows &amp; agents — Claude / OpenAI / Bedrock, structured
            JSON, tool calling, webhook-driven pipelines
          </li>
          <li>
            AI SaaS features — React + FastAPI/Nest + Postgres, Stripe, admin
            dashboards
          </li>
          <li>
            Cost &amp; reliability — token reduction via retrieval filters,
            retries/idempotency, logging, SOC 2–minded security
          </li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
          Experience
        </h2>

        <div v-for="(job, index) in jobs" :key="index" class="mb-6">
          <div class="flex flex-col sm:flex-row sm:justify-between gap-1">
            <h3 class="font-semibold text-gray-900 dark:text-white">
              {{ job.company }} —
              <span class="font-medium">{{ job.role }}</span>
            </h3>
            <span class="text-sm text-gray-500 whitespace-nowrap">{{
              job.dates
            }}</span>
          </div>
          <p
            v-if="job.blurb"
            class="text-sm text-gray-500 dark:text-gray-400 mt-1 italic"
          >
            {{ job.blurb }}
          </p>
          <ul class="mt-2 list-disc pl-5 space-y-1 text-sm leading-relaxed">
            <li v-for="(b, i) in job.bullets" :key="i">{{ b }}</li>
          </ul>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
          Education
        </h2>
        <p class="text-sm">
          <strong>M.S., Information Systems and Applications</strong> — National
          Tsing Hua University (2015–2017). Thesis: bipolar disorder behavior
          signals on Twitter (NLP).
        </p>
        <p class="text-sm mt-2">
          <strong>B.S., Information Technology</strong> — University of Belize
          (2007–2011), Cum Laude.
        </p>
      </section>

      <section>
        <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
          Core stack
        </h2>
        <p class="text-sm leading-relaxed">
          React, TypeScript, Vite, Tailwind · Python, FastAPI, Node, NestJS ·
          PostgreSQL, vector search · LangChain, LangGraph, LangSmith · OpenAI,
          Claude, Bedrock · AWS, GCP, Docker · Stripe, Redis, GitHub Actions
        </p>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Resume — Nicole Weatherburne',
  },
  data() {
    return {
      jobs: [
        {
          company: 'Dozuki',
          role: 'Senior Software Engineer, AI Integrations',
          dates: 'Oct 2025 – Present',
          blurb: 'Manufacturing knowledge platform · Creator Pro AI',
          bullets: [
            'Built LLM pipelines (video/doc → guide, content → quiz) with SQS workers, Bedrock, and webhook delivery',
            'Implemented FastAPI RAG chat grounded in tenant content',
            'Designed prompt + structured-output flows (LangSmith) for reliable guide/quiz JSON',
            'Full-stack delivery across React, NestJS genai API, Python workers, Postgres, AWS ECS/S3',
          ],
        },
        {
          company: 'HeyNunchi',
          role: 'AI / Full-Stack Contractor',
          dates: 'Apr 2024 – Oct 2025',
          blurb: null,
          bullets: [
            'LLM workflows that raised engagement ~40% while cutting input token usage',
            'Vector similarity search + metadata filters to reduce context-window cost',
            'Secure AI-centric APIs, Stripe payments, feature flags, GCP logging',
            'Supported SOC 2 Type II preparation with zero major findings',
          ],
        },
        {
          company: 'Wysk.ai',
          role: 'Software Engineer (Contractor)',
          dates: 'Jul 2023 – Jan 2024',
          blurb: null,
          bullets: [
            'Led social/live-interaction POC improving retention ~15%',
            'React + Mux streaming, ArangoDB, Algolia, GitHub Actions CI/CD',
          ],
        },
        {
          company: 'DeepHow',
          role: 'Software Engineer (Contractor)',
          dates: 'Nov 2020 – May 2023',
          blurb: 'Enterprise manufacturing training SaaS',
          bullets: [
            'Nuxt/Vue UI and API work for multi-region enterprise clients',
            'Optimized signed media delivery APIs for streaming training content',
          ],
        },
        {
          company: 'GeoThings',
          role: 'Full Stack Developer',
          dates: 'Aug 2020 – Aug 2022',
          blurb: null,
          bullets: [
            'Real-time monitoring UIs (Angular + Mapbox)',
            'Geofencing alerts and LINE chatbot notifications on AWS',
          ],
        },
        {
          company: 'Dialog Semiconductor',
          role: 'Senior Software Engineer',
          dates: 'Sep 2017 – Aug 2020',
          blurb: null,
          bullets: [
            'Frontend modernization and microservices (~4× response-time improvement)',
            'Python/Celery/Redis data services; Jenkins CI/CD (~40% faster releases)',
          ],
        },
      ],
    }
  },
}
</script>
