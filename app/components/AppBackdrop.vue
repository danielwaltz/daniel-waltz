<template>
  <div
    class="opacity-10 max-w-3xl pointer-events-none translate--50% inset-0 left-50% top-50% fixed z-0"
  >
    <div
      v-for="num in 6"
      :key="num"
      class="inset-0 absolute"
      :style="{ scale: `${num * 0.25}` }"
    >
      <div
        class="rounded-3xl shadow-box shadow-primary"
        :class="{ 'rotate--1': num % 2 === 0, 'rotate-1': num % 2 !== 0 }"
      />
      <div
        class="rounded-3xl shadow-box shadow-secondary"
        :class="{ 'rotate-1': num % 2 === 0, 'rotate--1': num % 2 !== 0 }"
      />
      <div
        class="rounded-3xl shadow-box shadow-primary"
        :class="{ 'rotate--1': num % 2 === 0, 'rotate-1': num % 2 !== 0 }"
      />
      <div
        class="rounded-3xl shadow-box shadow-secondary"
        :class="{ 'rotate-1': num % 2 === 0, 'rotate--1': num % 2 !== 0 }"
      />
    </div>
  </div>
</template>
