<script setup lang="ts">
const [DefineSocialLinkTemplate, ReuseSocialLinkTemplate] =
  createReusableTemplate<{ link: string; name: string; icon: string }>();
</script>

<template>
  <Html lang="en" class="h-viewport">
    <Head>
      <Title>Daniel Waltz - UI Engineer</Title>
      <Meta
        name="description"
        content="UI Engineer with a passion for delivering the most usable, accessible, and beautiful interfaces imaginable!"
      />
    </Head>

    <Body
      class="h-viewport bg-[#191919] bg-gradient-[circle_at_top_right,#222222_0%,#191919,#121212_100%] bg-gradient-radial font-sans text-[#f1f1f1]"
    >
      <div class="grid h-viewport place-items-center">
        <main class="max-w-2xl flex flex-col gap-8 p-8">
          <h1 class="flex flex-col items-start text-6xl sm:text-8xl">
            <span
              class="translate-y-2 rotate--3deg text-2xl font-script sm:text-3xl"
              >Hi, I'm</span
            >
            <span class="text-gradient-primary font-display uppercase"
              >Daniel Waltz</span
            >
          </h1>

          <p class="text-lg lh-8 sm:text-2xl sm:lh-10">
            I'm a
            <span class="text-gradient-primary font-700 uppercase"
              >UI Engineer</span
            >
            with a <strong>passion</strong> for delivering the most usable,
            accessible, and beautiful interfaces <em>imaginable</em>. Together
            we can make the web a better place for <strong>everyone</strong>!
          </p>

          <nav class="flex flex-wrap items-center self-start gap-6 text-4xl">
            <DefineSocialLinkTemplate v-slot="{ link, name, icon }">
              <NuxtLink :href="link" class="transition-200 hover:text-primary">
                <i :class="icon" />
                <span class="sr-only">{{ name }}</span>
              </NuxtLink>
            </DefineSocialLinkTemplate>

            <ReuseSocialLinkTemplate
              link="https://twitter.com/danielbwaltz"
              name="Twitter"
              icon="i-mdi-twitter"
            />

            <ReuseSocialLinkTemplate
              link="https://www.linkedin.com/in/danielbwaltz"
              name="LinkedIn"
              icon="i-mdi-linkedin"
            />

            <ReuseSocialLinkTemplate
              link="https://github.com/danielwaltz"
              name="GitHub"
              icon="i-mdi-github"
            />

            <ReuseSocialLinkTemplate
              link="https://gitlab.com/danielwaltz"
              name="GitLab"
              icon="i-mdi-gitlab"
            />

            <ReuseSocialLinkTemplate
              link="https://bitbucket.org/danielwaltz"
              name="BitBucket"
              icon="i-mdi-bitbucket"
            />
          </nav>
        </main>
      </div>
    </Body>
  </Html>
</template>
