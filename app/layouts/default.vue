<script setup lang="ts">
const site = useSiteConfig();
</script>

<template>
  <AppLayout class="grid place-items-center">
    <AppBackdrop />

    <main
      class="p-block-12 p-inline-6 flex flex-col gap-8 max-w-2xl w-full sm:p-block-14 sm:p-inline-8 2xl:max-w-4xl sm:max-w-3xl"
    >
      <div class="flex grow flex-wrap gap-8 items-center justify-between">
        <NuxtLink
          :to="{ name: 'index' }"
          class="rounded-xl inline-flex transition-all active:scale-95"
        >
          <AppLogo class="text-7xl 2xl:text-9xl sm:text-8xl" />
          <span class="sr-only">{{ site.name }}</span>
        </NuxtLink>

        <nav aria-label="Main">
          <ul
            class="text-base font-bold tracking-wide flex flex-wrap gap-3 uppercase sm:text-lg"
          >
            <li>
              <NuxtLink
                :to="{ name: 'index' }"
                class="p-block-1 p-inline-2 flex gap-2 items-center"
                active-class="text-primary-gradient [&>i]:text-primary"
              >
                <i class="i-lucide-house" />
                <span>Home</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="{ name: 'articles' }"
                class="p-block-1 p-inline-2 flex gap-2 items-center"
                active-class="text-primary-gradient [&>i]:text-primary"
              >
                <i class="i-lucide-file-text" />
                <span>Articles</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <slot />
    </main>

    <footer
      class="text-neutral-400 p-2 flex gap-3 inset-inline-0 inset-bs-0 justify-between absolute"
    >
      <nav aria-label="Instances">
        <ul class="flex flex-wrap gap-3 items-center">
          <li v-for="instance in INSTANCES" :key="instance.url">
            <AppTooltip :content="instance.title">
              <AppIconLink
                :to="instance.url"
                :title="instance.title"
                :icon="instance.icon"
                class="text-sm focus:text-neutral-100 hover:text-neutral-100"
                :class="{
                  'text-primary focus:text-primary-200 hover:text-primary-200':
                    instance.key === $config.public.hostingProvider,
                }"
              />
            </AppTooltip>
          </li>
        </ul>
      </nav>

      <AppTooltip content="View Source Code" side="left">
        <AppIconLink
          to="https://github.com/danielwaltz/daniel-waltz"
          title="View Source Code"
          icon="i-lucide-code"
          class="text-xl focus:text-neutral-100 hover:text-neutral-100"
        />
      </AppTooltip>
    </footer>
  </AppLayout>
</template>
