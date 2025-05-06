<template>
  <div
    class="opacity-5 max-w-3xl pointer-events-none translate--50% inset-0 left-50% top-50% fixed z-0"
  >
    <div
      v-for="num in 6"
      :key="num"
      class="inset-0 absolute"
      :style="{ scale: `${num * 0.25}` }"
    >
      <div
        class="rounded-3xl shadow-box animate-alternate-reverse"
        :class="{
          'shadow-primary rotate--1': num % 2 === 0,
          'shadow-secondary rotate-1': num % 2 !== 0,
        }"
      />
      <div
        class="rounded-3xl shadow-box animate-alternate"
        :class="{
          'shadow-secondary rotate-1': num % 2 === 0,
          'shadow-primary rotate--1': num % 2 !== 0,
        }"
      />
      <div
        class="rounded-3xl shadow-box animate-alternate-reverse"
        :class="{
          'shadow-secondary rotate--1': num % 2 === 0,
          'shadow-primary rotate-1': num % 2 !== 0,
        }"
      />
      <div
        class="rounded-3xl shadow-box animate-alternate"
        :class="{
          'shadow-primary rotate-1': num % 2 === 0,
          'shadow-secondary rotate--1': num % 2 !== 0,
        }"
      />
    </div>
  </div>
</template>
