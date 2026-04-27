export const ACCOUNTS = [
  {
    url: "https://bsky.app/profile/danielwaltz.me",
    title: "Bluesky",
    icon: "simple-icons:bluesky",
  },
  {
    url: "https://mastodon.world/@danielwaltz",
    title: "Mastodon",
    icon: "simple-icons:mastodon",
  },
  {
    url: "https://x.com/danielbwaltz",
    title: "X",
    icon: "simple-icons:x",
  },
  {
    url: "https://www.threads.net/@danielbwaltz",
    title: "Threads",
    icon: "simple-icons:threads",
  },
  {
    url: "https://www.linkedin.com/in/danielbwaltz",
    title: "LinkedIn",
    icon: "simple-icons:linkedin",
  },
  {
    url: "https://github.com/danielwaltz",
    title: "GitHub",
    icon: "simple-icons:github",
  },
  {
    url: "https://gitlab.com/danielwaltz",
    title: "GitLab",
    icon: "simple-icons:gitlab",
  },
  {
    url: "https://tangled.org/danielwaltz.me",
    title: "Tangled",
    icon: "simple-icons:git",
  },
  {
    url: "https://codeberg.org/danielwaltz",
    title: "Codeberg",
    icon: "simple-icons:codeberg",
  },
  {
    url: "https://bitbucket.org/danielwaltz",
    title: "BitBucket",
    icon: "simple-icons:bitbucket",
  },
] as const;

export const INSTANCES = [
  {
    key: "cloudflare",
    url: "https://cloudflare.danielwaltz.me",
    title: "Cloudflare",
    icon: "simple-icons:cloudflare",
  },
  {
    key: "sevalla",
    url: "https://sevalla.danielwaltz.me",
    title: "Sevalla",
    icon: "simple-icons:kinsta",
  },
  {
    key: "netlify",
    url: "https://netlify.danielwaltz.me",
    title: "Netlify",
    icon: "simple-icons:netlify",
  },
  {
    key: "render",
    url: "https://render.danielwaltz.me",
    title: "Render",
    icon: "simple-icons:render",
  },
  {
    key: "self",
    url: "https://self.danielwaltz.me",
    title: "Self Hosted",
    icon: "lucide:server",
  },
  {
    key: "vercel",
    url: "https://vercel.danielwaltz.me",
    title: "Vercel",
    icon: "simple-icons:vercel",
  },
] as const;

export const PROJECTS = [
  {
    name: "Vite Plugin GraphQL Codegen",
    description:
      "Zero-config vite plugin that uses the vite file watcher to run graphql codegen programmatically without needing to start a separate watcher",
    url: "https://github.com/danielwaltz/vite-plugin-graphql-codegen",
  },
  {
    name: "Adhesive.js",
    description:
      "A modern, performant, lightweight, dependency free, cross platform solution for flexible sticky positioned elements",
    url: "https://github.com/adhesivejs/adhesive",
  },
  {
    name: "UnoCSS Preset Prime",
    description: "UnoCSS preset for supporting Prime UI theme colors",
    url: "https://github.com/danielwaltz/unocss-preset-prime",
  },
] as const;
