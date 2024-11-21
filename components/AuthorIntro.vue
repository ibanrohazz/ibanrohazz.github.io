<template>
  <div class="mb-6">
    <h2
      class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200"
    >
      {{ intro.title }}
    </h2>
    <Scroller class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200" />
    <ContentRenderer class="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify" :value="intro">
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </div>
</template>

<script setup>
import Scroller from '@/components/Scroller.vue';

const {data: intro} = await useAsyncData('intro', () => queryContent("/author")
    .where({
      page: "intro"
    })
    .findOne()
);
</script>