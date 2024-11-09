<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <article>
          <p class="text-surface-400 text-p">
            <time :datetime="doc.date">{{ formatDate(doc.date) }}</time>
          </p>

          <div class="app-prose">
            <ContentRenderer :value="doc" />
          </div>
        </article>
      </template>

      <template #not-found>
        <div class="app-prose">
          <h1 class="max-w-fit text-h1">Not Found</h1>
          <p>Sorry, the article you are looking for does not exist.</p>
        </div>
      </template>
    </ContentDoc>

    <NuxtLink
      href="/articles"
      class="max-w-fit flex items-center gap-1 text-primary-gradient text-p"
    >
      <i class="i-mdi-chevron-left text-1.25em text-primary" /> Back to articles
    </NuxtLink>
  </div>
</template>
