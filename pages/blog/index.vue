<template>
  <div>
    <header class="pt-16 pb-9 sm:pb-16 sm:text-center">
      <h1
        class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"
      >
        Blog
      </h1>
      <p class="text-lg text-slate-700 dark:text-slate-400">
        Some projects and ideas that I am currently pursuing.
        <Wip />
      </p>
    </header>
    <div class="space-y-16 mx-auto max-w-7xl">
      <blog-item
        v-for="article in articles"
        :key="article.title"
        :title="article.title"
        :image="article.image"
        :description="article.description"
        :date="article.date"
        :tags="article.tags.split(',')"
        :slug="article.slug"
      ></blog-item>
      <!-- Add a link to download the resume -->
      <div class="text-center mt-10">
        <a
          href="/Resume.pdf"
          download="Resume.pdf"
          class="text-lg text-sky-500 hover:text-sky-600 dark:text-sky-400"
        >
          Download My Resume
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import siteMetaInfo from "~/data/sitemetainfo.js";
import Wip from "@/components/Wip.vue";
const { data: articles } = await useAsyncData('home', () =>
  queryContent("/articles")
    .only([
      "title",
      "description",
      "image",
      "img",
      "slug",
      "tags",
      "author",
      "date",
      "draft",
    ])
    .sort({ date: 1 })
    .find()
);
useSeoMeta({
  title: `${siteMetaInfo.title} | Blogs`,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Its Solaiman's Pen and Paper to write ",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>