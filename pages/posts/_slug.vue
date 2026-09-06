<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-shell-session'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-javascript'
import { safeGetPageBlocks, safeGetPageTable } from '~/plugins/utils/notionSafe'
import { findStaticPostBySlug } from '~/plugins/utils/staticBlogPosts'

export default {
  async asyncData({ $notion, params, error, $config: { notionTableId } }) {
    const pageTable = await safeGetPageTable($notion, notionTableId)
    const page =
      pageTable.find((item) => item.public && item.slug === params.slug) ||
      findStaticPostBySlug(params.slug)

    if (!page) {
      return error({ statusCode: 404, message: 'Post not found' })
    }

    // Static fallback uses `id`; live Notion table may use `id` too
    const pageId = page.id
    const blockMap = await safeGetPageBlocks($notion, pageId)
    if (!blockMap) {
      return error({
        statusCode: 503,
        message: 'Could not load this post from Notion right now.',
      })
    }
    return { blockMap, page }
  },
  data() {
    return {
      pageLinkOptions: { component: 'NuxtLink', href: 'to' },
    }
  },
  head() {
    const post = this.page
    if (!post) {
      return { title: 'Post' }
    }
    const title = post.title
    const description = post.description || process.env.DEV_DESCRIPTION
    const image =
      post.thumbnail && post.thumbnail[0] ? post.thumbnail[0].url : null
    const tags = post.tags || title
    const href = process.env.BASE_URL + `/posts/${post.slug}`
    const meta = this.$prepareMeta(
      { title, description, image, keywords: `${tags}`, url: href },
      [
        {
          name: 'article:published-time',
          content: post.created_at || null,
        },
      ]
    )
    return {
      title,
      link: [{ rel: 'canonical', href }],
      meta,
    }
  },
}
</script>

<template>
  <div class="wrapper-small md:px-10 py-8">
    <nuxt-link
      to="/posts"
      class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary"
    >
      ← All posts
    </nuxt-link>
    <div class="mt-6">
      <NotionRenderer
        :block-map="blockMap"
        :page-link-options="pageLinkOptions"
        full-page
        prism
      />
    </div>
  </div>
</template>

<style>
@import 'vue-notion/src/styles.css';
.notion-title,
.notion-text,
.notion-list,
.notion-callout-text,
p,
h1,
h2,
h3,
h4,
span {
  @apply dark:text-white;
}
.notion-link {
  @apply dark:hover:bg-red-500;
}
</style>
