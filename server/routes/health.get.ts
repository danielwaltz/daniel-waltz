export default defineEventHandler(() => ({
  status: "ok",
  uptime: Math.floor(process.uptime()),
  timestamp: new Date(),
}));
