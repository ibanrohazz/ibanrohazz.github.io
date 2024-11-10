<template>
  <div class="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10">
    <p class="text-center font-bold my-5 text-indigo-500">
      {{ formatDate(article?.date) }}
    </p>
    <h1 class="text-4xl text-gray-700 font-extrabold mb-10 text-center">
      {{ article?.title }}
    </h1>
    <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
      <nuxt-img
        :src="author.author_image"
        loading="lazy"
        alt=""
        class="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"
      />
      <div>
        <div class="text-slate-900 dark:text-slate-200">
          {{ author.name }}
        </div>
        <a
          target="_blank"
          :href="`https://twitter.com/${author.socials.twitter}`"
          class="text-sky-500 hover:text-sky-600 dark:text-sky-400"
        >
          @{{ author.socials.twitter }}
        </a>
      </div>
    </div>
    <img
      class="mx-auto w-4/5 my-10 rounded-md drop-shadow-sm"
      :src="article?.image"
    />
    <ContentRenderer class="prose min-w-full p-10 mx-auto" :value="article">
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </div>
</template>
<script setup>
// import Prism from "@/plugins/prism";
import siteMetaInfo from "@/data/sitemetainfo";
import author from "@/data/author.js";

const route = useRoute();

const {data: article} = await useAsyncData('home', () => queryContent("/articles")
    .where({
      slug: route.params.slug
    })
    .findOne()
);

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};

useSeoMeta({
  title: article?.value?.title ?? "",
  meta: [
    {
      hid: "description",
      name: "description",
      content: article?.value?.description,
    },
  ],
});
</script>
<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
