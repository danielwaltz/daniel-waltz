<template>
  <div class="flex flex-col gap-8">
    <article class="flex flex-col gap-6 text-pretty">
      <h1 class="flex flex-col items-start">
        <span
          aria-hidden="true"
          class="mbe--2 mis-1 rotate-3deg text-2xl tracking-wide font-script 2xl:text-4xl sm:text-3xl"
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
        <li class="inline-flex">
          <AppIconLink
            rel="me"
            to="https://x.com/danielbwaltz"
            title="X / Twitter"
            icon="i-fa6-brands-x-twitter"
            class="focus:text-primary hover:text-primary"
          />
        </li>

        <li class="inline-flex">
          <AppIconLink
            rel="me"
            to="https://mastodon.world/@danielwaltz"
            title="Mastodon"
            icon="i-fa6-brands-mastodon"
            class="focus:text-primary hover:text-primary"
          />
        </li>

        <li class="inline-flex">
          <AppIconLink
            rel="me"
            to="https://bsky.app/profile/danielwaltz.dev"
            title="Bluesky"
            icon="i-fa6-brands-bluesky"
            class="scale-88 focus:text-primary hover:text-primary"
          />
        </li>

        <li class="inline-flex">
          <AppIconLink
            rel="me"
            to="https://www.threads.net/@danielbwaltz"
            title="Threads"
            icon="i-fa6-brands-threads"
            class="focus:text-primary hover:text-primary"
          />
        </li>

        <li class="inline-flex">
          <AppIconLink
            rel="me"
            to="https://www.linkedin.com/in/danielbwaltz"
            title="LinkedIn"
            icon="i-fa6-brands-linkedin"
            class="focus:text-primary hover:text-primary"
          />
        </li>

        <li class="inline-flex">
          <AppIconLink
            rel="me"
            to="https://github.com/danielwaltz"
            title="GitHub"
            icon="i-fa6-brands-github"
            class="focus:text-primary hover:text-primary"
          />
        </li>

        <li class="inline-flex">
          <AppIconLink
            rel="me"
            to="https://gitlab.com/danielwaltz"
            title="GitLab"
            icon="i-fa6-brands-gitlab"
            class="focus:text-primary hover:text-primary"
          />
        </li>

        <li class="inline-flex">
          <AppIconLink
            rel="me"
            to="https://bitbucket.org/danielwaltz"
            title="BitBucket"
            icon="i-fa6-brands-bitbucket"
            class="focus:text-primary hover:text-primary"
          />
        </li>
      </ul>
    </nav>

    <div
      class="animate-flip-in-x animate-delay-10s animate-backwards text-sm text-surface-100/50 2xl:text-lg sm:text-base"
    >
      Oh, and while I have you, here's a friendly reminder to be kind to
      yourself!
    </div>
  </div>
</template>
