export default defineEventHandler((event) => {
  setHeader(event, "Content-Type", "text/plain");

  return "did:plc:udqzp4akm6eeqslx55jgjcem";
});
