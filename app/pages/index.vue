<script setup lang="ts">
const site = useSiteConfig();
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-6 text-pretty">
      <h1 class="flex flex-col items-start">
        <span
          aria-hidden="true"
          class="text-2xl text-neutral-400 tracking-wide font-script m-be--2 m-is-1 rotate-3deg 2xl:text-4xl sm:text-3xl !leading-none"
          >Hi, I'm</span
        >
        <span class="max-w-fit text-h1">Daniel Waltz</span>
      </h1>

      <p class="text-p">
        I'm a
        <strong class="uppercase">{{ site.jobTitle }}</strong>
        with <strong>15+ years</strong> of experience and a deep passion for
        delivering the most <strong>usable</strong>,
        <strong>accessible</strong>, and <strong>beautiful</strong> interfaces
        imaginable. Together we can make the web a better place for
        <span class="text-primary-gradient font-bold">everyone!</span>
      </p>
    </div>

    <nav aria-label="Accounts">
      <ul
        class="text-2xl flex flex-wrap gap-0.75em items-center 2xl:text-4xl sm:text-3xl"
      >
        <li v-for="account in ACCOUNTS" :key="account.url">
          <AppTooltip :content="account.title" side="bottom">
            <AppIconLink
              rel="me"
              :to="account.url"
              :title="account.title"
              :icon="account.icon"
              class="focus:text-primary hover:text-primary"
            />
          </AppTooltip>
        </li>
      </ul>
    </nav>

    <div
      class="text-sm text-neutral-400 text-pretty animate-flip-in-x animate-delay-10s animate-backwards 2xl:text-lg sm:text-base"
    >
      Oh, and while I have you, here's a friendly reminder to be kind to
      yourself!
    </div>
  </div>
</template>
