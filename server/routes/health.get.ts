import process from "node:process";
import { defineEventHandler } from "nuxt/server";

export default defineEventHandler(() => ({
  status: "ok",
  uptime: Math.floor(process.uptime()),
  timestamp: new Date(),
}));
