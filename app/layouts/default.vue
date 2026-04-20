<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const site = useSiteConfig();

const routes = useRoutes(["index", "articles"]);
</script>

<template>
  <AppLayout class="grid place-items-center">
    <AppBackdrop />

    <AppSkip />

    <div
      class="px-6 py-12 flex flex-col gap-8 max-w-2xl w-full sm:px-8 sm:py-14 2xl:max-w-4xl sm:max-w-3xl"
    >
      <div class="flex grow flex-wrap gap-8 items-center justify-between">
        <NuxtLink to="/" class="rounded-xl inline-flex">
          <AppLogo class="text-7xl 2xl:text-9xl sm:text-8xl" />
          <span class="sr-only">{{ site.name }}</span>
        </NuxtLink>

        <nav aria-label="Main">
          <ul class="text-lg flex flex-wrap gap-3 sm:text-xl">
            <li v-for="item in routes" :key="item.name">
              <NuxtLink
                :to="item.path"
                class="app-link"
                active-class="text-primary-gradient [&>i]:text-primary"
              >
                <i :class="item.meta.icon" class="app-link-icon" />
                <span>{{ item.meta.title }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <slot />
    </div>

    <footer
      class="text-neutral-400 p-2 flex gap-3 inset-x-0 inset-bs-0 justify-between absolute"
    >
      <nav aria-label="Instances">
        <ul class="flex flex-wrap gap-3 items-center">
          <li v-for="instance in INSTANCES" :key="instance.url">
            <AppTooltip :content="instance.title">
              <AppIconLink
                :to="instance.url"
                :label="instance.title"
                :icon="instance.icon"
                class="text-sm focus:text-neutral-100 hover:text-neutral-100"
                :class="{
                  'text-primary focus:text-primary-200 hover:text-primary-200':
                    instance.key === runtimeConfig.public.hostingProvider,
                }"
              />
            </AppTooltip>
          </li>
        </ul>
      </nav>

      <AppTooltip content="View Source Code" side="left">
        <AppIconLink
          :to="site.repository"
          label="View Source Code"
          icon="i-lucide-code"
          class="text-xl focus:text-neutral-100 hover:text-neutral-100"
        />
      </AppTooltip>
    </footer>
  </AppLayout>
</template>
