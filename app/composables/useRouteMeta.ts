import type { RouteNamedMap } from "vue-router/auto-routes";

export interface AppRouteMeta {
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

export function useRouteMeta<T extends keyof RouteNamedMap>(
  item: MaybeRefOrGetter<T>,
) {
  const router = useRouter();
  const route = useRoute();

  return computed(() => {
    const name = toValue(item);
    const resolvedRoute = router.resolve({ name }, route);
    const meta = resolvedRoute.meta;
    return { ...meta, name };
  });
}
