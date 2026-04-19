import type { NuxtLinkProps } from "#app";
import type { RouteNamedMap } from "vue-router/auto-routes";

export interface RouteNavItem extends AppRouteMeta {
  key: keyof RouteNamedMap;
  props: NuxtLinkProps;
}

export function useRouteNav<T extends Readonly<(keyof RouteNamedMap)[]>>(
  items: MaybeRefOrGetter<T>,
) {
  const router = useRouter();
  const route = useRoute();

  return computed(() => {
    const names = toValue(items);
    const resolvedRoutes = names.map((name) => router.resolve({ name }, route));

    return resolvedRoutes.map((route) => ({
      ...route.meta,
      key: route.name,
      props: { to: route.path },
    })) satisfies RouteNavItem[];
  });
}
