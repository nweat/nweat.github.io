<template>
  <Blogs :posts="posts" title="Blogs" />
</template>

<script>
import { safeGetPageTable } from '~/plugins/utils/notionSafe'
import { STATIC_BLOG_POSTS } from '~/plugins/utils/staticBlogPosts'

export default {
  async asyncData({ $notion, $config: { notionTableId } }) {
    const pageTable = await safeGetPageTable($notion, notionTableId)
    let posts = pageTable
      .filter((page) => page.public)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

    if (!posts.length) {
      posts = STATIC_BLOG_POSTS
    }

    return { posts }
  },
  head: {
    title: (process.env.GHUB_USERNAME || 'nweat') + "'s Blog",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: process.env.DEV_DESCRIPTION,
      },
    ],
  },
}
</script>
