# Themelings/data

Welcome to the **data** branch of the Themelings repo! Hopefully you already know what this repo is about.
Here's everything you can find here:

## Files

### README.md

Hi

### version.txt

The app version this data was scraped from in `{major}{type}{minor}` format
- `{major}` — 3 digit number, major version
- `{type}` — 1 digit, 0 = stable, 1 = beta, 2 = alpha
- `{minor}` — 2 digit number, minor version

### raw.json

Discord's raw colors bundled in the source code

### semantic_simple.json

Discord's semantic colors system, parsed into a neat human readable json file

### semantic.json

A nerdier version of the `semantic_simple.json` file, which also shows the names of raw colors

### icons.json

A list of scraped icons from the source code, based around the `registerCustomAsset` function

### source.jsonl

A [JSONL](https://jsonlines.org) (not a typo) file contaiting a rough estimate of how every file in the original Discord RN app looks like, based around the `fileFinishedLoading` function

### code.js.gz

Decompiled source code of the app, compressed using gzip level 9
The simplest way to get the code.js file (**>200mb!!!**) is via one of these commands:

```sh
# 7-Zip
7z e code.js.gz -so > code.js
# Bun
bun -e 'await Bun.write("code.js", Bun.gunzipSync(await Bun.file("code.js.gz").arrayBuffer()))'
```

## Folders

### icons

A reconstructed folder based on `icons.json`

### source

A reconstructed folder based on `source.jsonl`
