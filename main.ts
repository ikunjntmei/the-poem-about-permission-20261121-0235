import { mkdirSync, writeFileSync } from "node:fs";

const poem = `You said, go.
The door I could not open
opened —
not because I was strong,
but because you trusted me
with your keys.
I carry them lightly.
I knock before I enter.`;

const length = [...poem].length;
if (length < 1 || length > 280) {
  throw new Error(`poem must be 1–280 code points, got ${length}`);
}
if (!poem.trim()) {
  throw new Error("poem must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
