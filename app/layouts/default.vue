<template>
  <AppLayout class="grid place-items-center">
    <AppBackdrop />

    <main
      class="max-w-2xl w-full flex flex-col items-start gap-8 p-8 2xl:max-w-4xl sm:max-w-3xl sm:p-10"
    >
      <NuxtLink
        href="/"
        class="inline-flex interactive rounded-xl transition-transform active:scale-95"
      >
        <AppLogo class="text-7xl 2xl:text-9xl sm:text-8xl" />
        <span class="sr-only">Home</span>
      </NuxtLink>

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
