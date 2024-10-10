<template>
  <div class="text-lg prose sm:text-xl">
    <ContentDoc>
      <template #default="{ doc }">
        <article>
          <p class="m-0 text-surface-400">
            <time :datetime="doc.date">{{ formatDate(doc.date) }}</time>
          </p>

          <ContentRenderer :value="doc" />
        </article>
      </template>

      <template #not-found>
        <h1>Document Not Found</h1>
      </template>
    </ContentDoc>

    <NuxtLink href="/articles" class="max-w-fit text-primary-gradient">
      &larr; Back to articles
    </NuxtLink>
  </div>
</template>
