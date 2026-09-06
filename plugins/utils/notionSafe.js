/**
 * Notion helpers.
 * Table API (list) is often down; page API (/v1/page/:id) still works.
 * Newer API payloads nest blocks as { spaceId, value: { value: block } };
 * vue-notion expects { value: block }.
 */

const NOTION_PAGE_APIS = [
  'https://api.vue-notion.workers.dev/v1',
  'https://notion-api.splitbee.io/v1',
]

export async function safeGetPageTable($notion, tableId) {
  if (!tableId || !$notion) return []
  try {
    const pageTable = await $notion.getPageTable(tableId)
    return Array.isArray(pageTable) ? pageTable : []
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[notion] getPageTable failed:', err && err.message)
    return []
  }
}

/** Unwrap nested Notion worker payloads for vue-notion NotionRenderer. */
export function normalizeBlockMap(raw) {
  if (!raw || typeof raw !== 'object' || raw.error) return null
  const out = {}
  let hasBlock = false
  Object.keys(raw).forEach((id) => {
    const entry = raw[id]
    if (!entry || typeof entry !== 'object') return
    let value = entry.value
    // { spaceId, value: { value: block } }
    if (
      value &&
      typeof value === 'object' &&
      value.value &&
      typeof value.value === 'object' &&
      value.value.type
    ) {
      value = value.value
    }
    if (value && value.type) {
      out[id] = { value }
      hasBlock = true
    }
  })
  return hasBlock ? out : null
}

export async function fetchPageBlocks(pageId) {
  if (!pageId) return null
  const id = String(pageId).replace(/-/g, '')
  for (const base of NOTION_PAGE_APIS) {
    try {
      const res = await fetch(`${base}/page/${id}`)
      if (!res.ok) continue
      const raw = await res.json()
      const normalized = normalizeBlockMap(raw)
      if (normalized) return normalized
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('[notion] page fetch failed:', base, err && err.message)
    }
  }
  return null
}

export async function safeGetPageBlocks($notion, pageId) {
  // Prefer direct page API (more reliable than table; normalize nested payload)
  const direct = await fetchPageBlocks(pageId)
  if (direct) return direct

  if (!pageId || !$notion) return null
  try {
    const blockMap = await $notion.getPageBlocks(pageId)
    return normalizeBlockMap(blockMap)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[notion] getPageBlocks failed:', err && err.message)
    return null
  }
}
