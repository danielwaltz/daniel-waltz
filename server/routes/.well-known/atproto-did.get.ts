import { defineEventHandler } from "nuxt/server";

export default defineEventHandler((event) => {
  event.req.headers.set("Content-Type", "text/plain");

  return "did:plc:udqzp4akm6eeqslx55jgjcem";
});
