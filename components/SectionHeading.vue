<template>
  <div
    class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300"
  >
    <h2 class="text-center">{{ title }}</h2>
    <IconDoubleDown class="h-4 w-4" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
