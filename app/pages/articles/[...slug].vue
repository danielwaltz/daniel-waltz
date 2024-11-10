<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <article>
          <p class="m-be--6 m-is-1 text-surface-400 font-script text-p">
            <time :datetime="doc.date">{{ formatDate(doc.date) }}</time>
          </p>

          <div class="app-prose">
            <ContentRenderer :value="doc" />
          </div>
        </article>
      </template>

      <template #not-found>
        <article class="app-prose">
          <h1 class="max-w-fit text-h1">Not Found</h1>
          <p>Sorry, the article you are looking for does not exist.</p>
        </article>
      </template>
    </ContentDoc>

    <NuxtLink
      :to="{ name: 'articles' }"
      class="max-w-fit flex items-center text-primary-gradient font-semibold tracking-wide uppercase text-p"
    >
      <i class="i-mdi-chevron-left text-1.5em text-primary" /> Back to articles
    </NuxtLink>
  </div>
</template>
