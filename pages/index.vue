<template>
  <div class="wrapper-small md:px-10 pb-16">
    <Hero />
    <AiProjects />
    <HowIBuild />
    <Architecture />
    <Blogs :posts="posts" title="Featured blogs" />
    <Projects :projects="projects" />
  </div>
</template>

<script>
import { safeGetPageTable } from '~/plugins/utils/notionSafe'
import { STATIC_BLOG_POSTS } from '~/plugins/utils/staticBlogPosts'

export default {
  async asyncData({
    $axios,
    $notion,
    $config: { githubUsername, notionTableId },
  }) {
    let projects = []
    try {
      const res = await $axios.get(
        'https://api.github.com/search/repositories?q=user:' +
          githubUsername +
          '+portfolio+:in:description&sort=updated&per_page=3'
      )
      projects = (res && res.data && res.data.items) || []
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('[github] projects fetch failed:', err && err.message)
    }

    const pageTable = await safeGetPageTable($notion, notionTableId)
    let posts = pageTable
      .filter((page) => page.public)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

    // Public Notion table API is often down — fall back to curated static posts
    if (!posts.length) {
      posts = STATIC_BLOG_POSTS.slice(0, 4)
    }

    return {
      posts,
      projects,
    }
  },
}
</script>
