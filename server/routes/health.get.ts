const START_TIME = new Date();

export default defineEventHandler(() => ({
  status: "success",
  uptime: Math.floor((Date.now() - START_TIME.getTime()) / 1000),
}));
