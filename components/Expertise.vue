<template>
  <div class="mt-8">
    <div v-for="key in Object.keys(expertises)" class="mt-2">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        {{ key }}
      </h2>
      <ul class="flex flex-wrap gap-4 items-center">
        <li v-for="expertise in expertises[key]" class="flex items-center">
          <component :is="expertise.icon" class="h-10 w-10"></component>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import author from "@/data/author.js";
const expertises = author.expertises;
</script>
