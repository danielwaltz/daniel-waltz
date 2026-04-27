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
      <div
        v-for="project in PROJECTS"
        :key="project.url"
        class="text-sm flex gap-6 sm:text-lg"
      >
        <Icon
          name="simple-icons:github"
          class="text-4xl text-neutral-100 min-w-1em"
        />

        <div class="flex flex-col gap-3">
          <h2 class="self-start">
            <NuxtLink
              :to="project.url"
              target="_blank"
              class="text-3xl text-primary-gradient font-bold font-mono text-a uppercase"
            >
              {{ project.name }}
              <Icon
                name="lucide:external-link"
                class="text-0.75em text-secondary"
              />
            </NuxtLink>
          </h2>

          <p class="text-xl font-serif">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </AppMain>
</template>
