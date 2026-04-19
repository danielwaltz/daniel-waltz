import type { RouteNamedMap } from "vue-router/auto-routes";

export function useRouteMeta<TItem extends keyof RouteNamedMap>(
  item: MaybeRefOrGetter<TItem>,
) {
  const router = useRouter();
  const route = useRoute();

  return computed(() => {
    const name = toValue(item);
    const resolvedRoute = router.resolve({ name }, route);
    return { ...resolvedRoute.meta, name };
  });
}
