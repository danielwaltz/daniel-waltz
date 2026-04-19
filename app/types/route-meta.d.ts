interface AppRouteMeta {
  title: string;
  description: string;
  icon: string;
}

declare module "#app" {
  interface PageMeta extends AppRouteMeta {}
}

declare module "vue-router" {
  interface RouteMeta extends AppRouteMeta {}
}

export {};
