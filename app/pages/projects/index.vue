<script setup lang="ts">
definePageMeta({
  title: "Projects",
  description: "A collection of projects I've worked on.",
  icon: "lucide:briefcase",
});

const route = useRoute();
</script>

<template>
  <AppMain class="flex flex-col gap-10">
    <AppMainHeader :title="route.meta.title" intro="I work on" />

    <div class="flex flex-col gap-10">
      <div v-for="project in PROJECTS" :key="project.url" class="flex gap-6">
        <Icon
          name="simple-icons:github"
          class="text-3xl text-neutral-100 min-w-1em"
        />

        <div class="flex flex-col gap-3">
          <h2 class="self-start">
            <NuxtLink
              :to="project.url"
              target="_blank"
              class="text-2xl app-link-gradient app-link font-bold font-mono p-0 uppercase"
            >
              <span>{{ project.name }}</span>
              <Icon name="lucide:external-link" class="text-0.75em" />
            </NuxtLink>
          </h2>

          <p class="text-lg font-serif">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </AppMain>
</template>
