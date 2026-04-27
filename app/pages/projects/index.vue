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
        class="text-sm flex flex-col gap-4 sm:text-lg"
      >
        <h2 class="flex gap-4 items-center self-start">
          <Icon name="simple-icons:github" class="text-p min-w-1em" />

          <NuxtLink
            :to="project.url"
            target="_blank"
            class="text-h5 text-primary-gradient text-a"
          >
            {{ project.name }}
            <Icon
              name="lucide:external-link"
              class="text-0.5em text-secondary align-middle"
            />
          </NuxtLink>
        </h2>

        <p class="text-p">{{ project.description }}</p>
      </div>
    </div>
  </AppMain>
</template>
