await Bun.write(
  "zipped.js",
  Bun.gzipSync(await Bun.file("main/tmp/code.js").arrayBuffer(), { level: 9 })
);
