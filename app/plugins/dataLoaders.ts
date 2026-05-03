import { DataLoaderPlugin } from "vue-router/experimental";

export default defineNuxtPlugin({
  name: "data-loaders",
  dependsOn: ["nuxt:router"],
  setup(nuxtApp) {
    nuxtApp.vueApp.use(DataLoaderPlugin, {
      router: nuxtApp.vueApp.config.globalProperties.$router,
      isSSR: import.meta.server,
    });
  },
});
