<template>
  <div class="mb-6">
    <h2
      v-if="intro && intro.title"
      class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200"
    >
      {{ intro.title }}
    </h2>
    <Scroller class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200" />
    <ContentRenderer
      v-if="intro"
      class="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify"
      :value="intro"
    >
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
    <p v-else>No intro data available.</p>
  </div>
</template>

<script setup>
import Scroller from '@/components/Scroller.vue';

const {data: intro} = await useAsyncData('intro', async () => {
  const result = await queryContent("/author")
    .where({
      page: "intro"
    })
    .findOne();

  console.log("Intro data:", result); // Debugging log
  return result;
});
</script>