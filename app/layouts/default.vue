<template>
  <AppLayout class="grid place-items-center">
    <AppBackdrop />

    <main
      class="max-w-2xl w-full flex flex-col gap-8 p-6 2xl:max-w-4xl sm:max-w-3xl sm:p-8"
    >
      <div class="flex grow items-center gap-8">
        <NuxtLink
          :to="{ name: 'index' }"
          class="inline-flex rounded-xl transition-all active:scale-95"
        >
          <AppLogo class="text-7xl 2xl:text-9xl sm:text-8xl" />
          <span class="sr-only">Home</span>
        </NuxtLink>

        <nav aria-label="Main" class="m-is-auto">
          <ul
            class="flex gap-2 text-base font-bold tracking-wide uppercase sm:text-lg"
          >
            <li>
              <NuxtLink
                :to="{ name: 'index' }"
                class="p-block-1 p-inline-2"
                active-class="text-primary-gradient"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="{ name: 'articles' }"
                class="p-block-1 p-inline-2"
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
      to="https://github.com/danielwaltz/daniel-waltz"
      title="View Source Code"
      icon="i-mdi-code-tags"
      class="absolute inset-bs-3 inset-ie-3 text-xl text-surface-400 focus:text-surface-100 hover:text-surface-100"
    />
  </AppLayout>
</template>
