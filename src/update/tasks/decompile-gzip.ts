// prevents TS errors
declare var self: Worker;

self.addEventListener("message", async ({ data: { path, target } }) => {
  await Bun.write(
    target,
    Bun.gzipSync(await Bun.file(path).arrayBuffer(), { level: 9 }) // slowest speed, best compression
  );
  self.postMessage(true);
});
