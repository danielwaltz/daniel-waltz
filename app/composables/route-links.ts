import type {
  RouteLocationAsRelative,
  RouteLocationResolved,
} from "vue-router";
import type { RouteNamedMap } from "vue-router/auto-routes";

export function useRouteLinks<
  TItem extends RouteLocationAsRelative<keyof RouteNamedMap>,
>(items: TItem[]) {
  const router = useRouter();
  const route = useRoute();

  return computed(() => {
    return items.map((item) => {
      type Name = NonNullable<TItem["name"]>;
      const name = item.name as Name;
      const _resolvedRoute = router.resolve({ name }, route);
      const resolvedRoute = _resolvedRoute as RouteLocationResolved<Name>;
      return { ...resolvedRoute, props: { to: item } } as const;
    });
  });
}
