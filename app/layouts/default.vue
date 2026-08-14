<script setup lang="ts">
defineSlots<{ default: () => unknown }>();

const runtimeConfig = useRuntimeConfig();
const site = useSiteConfig();

const routes = useRouteLinks([
  { name: "index" },
  { name: "projects" },
  { name: "articles" },
]);
</script>

<template>
  <AppLayout class="grid place-items-center">
    <AppBackdrop />

    <AppSkip />

    <div
      class="px-6 py-12 flex flex-col gap-8 max-w-2xl w-full sm:px-8 sm:py-14 2xl:max-w-4xl sm:max-w-3xl"
    >
      <Motion
        as="header"
        layout="position"
        :transition="DEFAULT_TRANSITION"
        class="flex grow flex-balance gap-8 items-center justify-between"
      >
        <NuxtLink to="/" class="rounded-xl inline-flex">
          <AppLogo class="text-7xl 2xl:text-9xl sm:text-8xl" />
          <span class="sr-only">{{ site.name }}</span>
        </NuxtLink>

        <NavigationMenuRoot as-child>
          <nav aria-label="Main">
            <NavigationMenuList
              class="text-lg flex flex-balance gap-3 sm:text-xl"
            >
              <NavigationMenuItem v-for="item in routes" :key="item.name">
                <NavigationMenuLink as-child>
                  <NuxtLink
                    v-bind="item.props"
                    class="app-link"
                    active-class="app-link-gradient"
                  >
                    <Icon :name="item.meta.icon" class="app-link-icon" />
                    <span>{{ item.meta.title }}</span>
                  </NuxtLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </nav>
        </NavigationMenuRoot>
      </Motion>

      <slot />
    </div>

    <footer
      class="text-neutral-400 p-2 flex gap-3 inset-x-0 inset-bs-0 justify-between absolute"
    >
      <NavigationMenuRoot as-child>
        <nav aria-label="Instances">
          <NavigationMenuList class="flex flex-balance gap-3 items-center">
            <NavigationMenuItem
              v-for="instance in INSTANCES"
              :key="instance.url"
            >
              <AppTooltip :content="instance.title">
                <NavigationMenuLink as-child>
                  <AppIconLink
                    :to="instance.url"
                    :label="instance.title"
                    :icon="instance.icon"
                    class="text-sm focus:text-neutral-100 hover:text-neutral-100"
                    :class="{
                      'text-primary focus:text-primary-200 hover:text-primary-200':
                        instance.key === runtimeConfig.public.hostingProvider,
                    }"
                  />
                </NavigationMenuLink>
              </AppTooltip>
            </NavigationMenuItem>
          </NavigationMenuList>
        </nav>
      </NavigationMenuRoot>

      <AppTooltip content="View Source Code" side="left">
        <AppIconLink
          :to="site.repository"
          label="View Source Code"
          icon="lucide:code"
          class="text-xl focus:text-neutral-100 hover:text-neutral-100"
        />
      </AppTooltip>
    </footer>
  </AppLayout>
</template>
