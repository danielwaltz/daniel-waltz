import type { RouteNamedMap } from "vue-router/auto-routes";

export function useRoutes<TItem extends Readonly<(keyof RouteNamedMap)[]>>(
  items: MaybeRefOrGetter<TItem>,
) {
  const router = useRouter();
  const route = useRoute();

  return computed(() => {
    const names = toValue(items);
    const resolvedRoutes = names.map((name) => router.resolve({ name }, route));

    return resolvedRoutes.map((resolvedRoute) => ({
      ...resolvedRoute,
      name: resolvedRoute.name as TItem[number],
    }));
  });
}
