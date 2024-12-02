export default defineEventHandler(() => ({
  status: "success",
  uptime: Math.floor(process.uptime()),
}));
