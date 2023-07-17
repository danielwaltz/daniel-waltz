<template>
  <div
    class="pointer-events-none fixed inset-0 left-50% top-50% z-0 max-w-3xl translate--50% opacity-5"
  >
    <div
      v-for="num in 6"
      :key="num"
      class="absolute inset-0"
      :style="{ scale: `${num * 0.25}` }"
    >
      <div
        class="rotate--1 shadow-box animate-alternate-reverse rounded-3xl"
        :class="{
          ['shadow-primary']: num % 2 === 0,
          ['shadow-secondary']: num % 2 !== 0,
        }"
      />
      <div
        class="rotate-1 shadow-box animate-alternate rounded-3xl"
        :class="{
          ['shadow-secondary']: num % 2 === 0,
          ['shadow-primary']: num % 2 !== 0,
        }"
      />
      <div
        class="rotate--1 shadow-box animate-alternate-reverse rounded-3xl"
        :class="{
          ['shadow-secondary']: num % 2 === 0,
          ['shadow-primary']: num % 2 !== 0,
        }"
      />
      <div
        class="rotate-1 shadow-box animate-alternate rounded-3xl"
        :class="{
          ['shadow-primary']: num % 2 === 0,
          ['shadow-secondary']: num % 2 !== 0,
        }"
      />
    </div>
  </div>
</template>
