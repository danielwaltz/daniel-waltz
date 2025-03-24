<template>
  <AppLayout class="grid place-items-center">
    <AppBackdrop />

    <main
      class="max-w-2xl w-full flex flex-col gap-8 p-block-12 p-inline-6 2xl:max-w-4xl sm:max-w-3xl sm:p-block-14 sm:p-inline-8"
    >
      <div class="flex grow flex-wrap items-center justify-between gap-8">
        <NuxtLink
          :to="{ name: 'index' }"
          class="inline-flex rounded-xl transition-all active:scale-95"
        >
          <AppLogo class="text-7xl 2xl:text-9xl sm:text-8xl" />
          <span class="sr-only">Home</span>
        </NuxtLink>

        <nav aria-label="Main">
          <ul
            class="flex flex-wrap gap-3 text-base font-bold tracking-wide uppercase sm:text-lg"
          >
            <li>
              <NuxtLink
                :to="{ name: 'index' }"
                class="flex items-center gap-2 p-block-1 p-inline-2"
                active-class="text-primary-gradient [&>i]:text-primary"
              >
                <i class="i-lucide-house" />
                <span>Home</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="{ name: 'articles' }"
                class="flex items-center gap-2 p-block-1 p-inline-2"
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
      class="absolute inset-inline-0 inset-bs-0 flex justify-between gap-3 p-2 text-neutral-400"
    >
      <nav aria-label="Instances">
        <ul class="flex flex-wrap items-center gap-3">
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
