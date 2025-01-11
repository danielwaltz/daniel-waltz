// @unocss-include

export const ACCOUNTS = [
  {
    url: "https://bsky.app/profile/danielwaltz.me",
    title: "Bluesky",
    icon: "i-simple-icons-bluesky",
  },
  {
    url: "https://x.com/danielbwaltz",
    title: "X / Twitter",
    icon: "i-simple-icons-x",
  },
  {
    url: "https://mastodon.world/@danielwaltz",
    title: "Mastodon",
    icon: "i-simple-icons-mastodon",
  },
  {
    url: "https://www.threads.net/@danielbwaltz",
    title: "Threads",
    icon: "i-simple-icons-threads",
  },
  {
    url: "https://www.linkedin.com/in/danielbwaltz",
    title: "LinkedIn",
    icon: "i-simple-icons-linkedin",
  },
  {
    url: "https://github.com/danielwaltz",
    title: "GitHub",
    icon: "i-simple-icons-github",
  },
  {
    url: "https://gitlab.com/danielwaltz",
    title: "GitLab",
    icon: "i-simple-icons-gitlab",
  },
  {
    url: "https://bitbucket.org/danielwaltz",
    title: "BitBucket",
    icon: "i-simple-icons-bitbucket",
  },
  {
    url: "https://codeberg.org/danielwaltz",
    title: "Codeberg",
    icon: "i-simple-icons-codeberg",
  },
] as const;

export const INSTANCES = [
  {
    url: "https://amplify.danielwaltz.me",
    title: "Amplify",
    icon: "i-simple-icons-awsamplify",
    active: import.meta.url.includes("//amplify."),
  },
  {
    url: "https://cloudflare.danielwaltz.me",
    title: "Cloudflare",
    icon: "i-simple-icons-cloudflare",
    active: import.meta.url.includes("//cloudflare."),
  },
  {
    url: "https://kinsta.danielwaltz.me",
    title: "Kinsta",
    icon: "i-simple-icons-kinsta",
    active: import.meta.url.includes("//kinsta."),
  },
  {
    url: "https://netlify.danielwaltz.me",
    title: "Netlify",
    icon: "i-simple-icons-netlify",
    active: import.meta.url.includes("//netlify."),
  },
  {
    url: "https://render.danielwaltz.me",
    title: "Render",
    icon: "i-simple-icons-render",
    active: import.meta.url.includes("//render."),
  },
  {
    url: "https://vercel.danielwaltz.me",
    title: "Vercel",
    icon: "i-simple-icons-vercel",
    active: import.meta.url.includes("//vercel."),
  },
] as const;
