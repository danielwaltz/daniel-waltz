<template>
  <div>
    <ContentDoc>
      <template #default="{ doc }">
        <article>
          <p class="m-0 text-surface-400 text-p !leading-none">
            <time :datetime="doc.date">{{ formatDate(doc.date) }}</time>
          </p>

          <div class="app-prose">
            <ContentRenderer :value="doc" />
          </div>
        </article>
      </template>

      <template #not-found>
        <h1>Document Not Found</h1>
      </template>
    </ContentDoc>

    <NuxtLink href="/articles" class="max-w-fit text-primary-gradient text-p">
      &larr; Back to articles
    </NuxtLink>
  </div>
</template>
