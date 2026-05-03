import type { NuxtLinkProps } from "#app";
import type { RouteLocationTyped } from "vue-router";
import type { RouteNamedMap } from "vue-router/auto-routes";

export type RouteLinkItem<TName extends keyof RouteNamedMap> = Omit<
  NuxtLinkProps,
  "to" | "href"
> & {
  name: TName;
  to?: Omit<Partial<RouteLocationTyped<RouteNamedMap, TName>>, "name">;
};

export function useRouteLinks<TItem extends RouteLinkItem<keyof RouteNamedMap>>(
  items: TItem[],
) {
  const router = useRouter();
  const route = useRoute();

  return computed(() => {
    return items.map((item) => {
      const { name: _name, ...props } = item;
      const name = _name as TItem["name"];
      const resolvedRoute = router.resolve({ name }, route);

      return {
        ...resolvedRoute,
        name,
        props: { ...props, to: { ...props.to, name } },
      };
    });
  });
}
