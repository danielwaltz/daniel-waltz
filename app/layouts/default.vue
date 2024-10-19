<template>
  <AppLayout class="grid place-items-center">
    <AppBackdrop />

    <main
      class="max-w-2xl w-full flex flex-col gap-8 p-8 2xl:max-w-4xl sm:max-w-3xl sm:p-10"
    >
      <div class="flex grow items-center gap-8">
        <NuxtLink
          href="/"
          class="inline-flex rounded-xl transition-all active:scale-95"
        >
          <AppLogo class="text-7xl 2xl:text-9xl sm:text-8xl" />
          <span class="sr-only">Home</span>
        </NuxtLink>

        <nav aria-label="Main" class="mis-auto">
          <ul
            class="flex gap-2 text-base font-bold tracking-wide uppercase sm:text-lg"
          >
            <li>
              <NuxtLink
                :href="{ name: 'index' }"
                class="px-2 py-1"
                active-class="text-primary-gradient"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :href="{ name: 'articles' }"
                class="px-2 py-1"
                active-class="text-primary-gradient"
              >
                Articles
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <slot />
    </main>

    <AppIconLink
      href="https://github.com/danielwaltz/daniel-waltz"
      title="View Source Code"
      icon="i-mdi-code-tags"
      class="absolute right-3 top-3 text-xl text-surface-100/60 focus:text-surface-100 hover:text-surface-100"
    />
  </AppLayout>
</template>
