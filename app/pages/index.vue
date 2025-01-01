<script setup lang="ts">
const accounts = [
  {
    url: "https://bsky.app/profile/danielwaltz.me",
    title: "Bluesky",
    icon: "i-simple-icons-bluesky",
  },
  {
    url: "https://x.com/danielbwaltz",
    title: "X / Twitter",
    icon: "i-simple-icons-x",
  },
  {
    url: "https://mastodon.world/@danielwaltz",
    title: "Mastodon",
    icon: "i-simple-icons-mastodon",
  },
  {
    url: "https://www.threads.net/@danielbwaltz",
    title: "Threads",
    icon: "i-simple-icons-threads",
  },
  {
    url: "https://www.linkedin.com/in/danielbwaltz",
    title: "LinkedIn",
    icon: "i-simple-icons-linkedin",
  },
  {
    url: "https://github.com/danielwaltz",
    title: "GitHub",
    icon: "i-simple-icons-github",
  },
  {
    url: "https://gitlab.com/danielwaltz",
    title: "GitLab",
    icon: "i-simple-icons-gitlab",
  },
  {
    url: "https://bitbucket.org/danielwaltz",
    title: "BitBucket",
    icon: "i-simple-icons-bitbucket",
  },
  {
    url: "https://codeberg.org/danielwaltz",
    title: "Codeberg",
    icon: "i-simple-icons-codeberg",
  },
] as const;
</script>

<template>
  <div class="flex flex-col gap-8">
    <article class="flex flex-col gap-6 text-pretty">
      <h1 class="flex flex-col items-start">
        <span
          aria-hidden="true"
          class="m-be--2 m-is-1 rotate-3deg text-2xl text-neutral-400 tracking-wide font-script 2xl:text-4xl sm:text-3xl"
          >Hi, I'm</span
        >
        <span class="max-w-fit text-h1">Daniel Waltz</span>
      </h1>

      <p class="text-p">
        I'm a
        <strong class="uppercase">web developer</strong>
        with <strong>15+ years</strong> of experience and a deep passion for
        delivering the most <strong>usable</strong>,
        <strong>accessible</strong>, and <strong>beautiful</strong> interfaces
        imaginable. Together we can make the web a better place for
        <span class="text-primary-gradient font-bold">everyone!</span>
      </p>
    </article>

    <nav aria-label="Accounts">
      <ul
        class="flex flex-wrap items-center gap-0.75em text-2xl 2xl:text-4xl sm:text-3xl"
      >
        <li v-for="account in accounts" :key="account.url">
          <AppIconLink
            rel="me"
            :to="account.url"
            :title="account.title"
            :icon="account.icon"
            class="focus:text-primary hover:text-primary"
          />
        </li>
      </ul>
    </nav>

    <div
      class="animate-flip-in-x animate-delay-10s animate-backwards text-pretty text-sm text-neutral-400 2xl:text-lg sm:text-base"
    >
      Oh, and while I have you, here's a friendly reminder to be kind to
      yourself!
    </div>
  </div>
</template>
