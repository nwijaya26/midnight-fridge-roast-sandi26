// Midnight Fridge Roast — u-carbon-forge-midnight-fridge-roast-fc5d44a7
//
// One line, roasting a smart fridge that refuses to open after midnight.
// The angle: the fridge is a freeloader. It holds no job, pays no rent,
// contributes nothing — yet at midnight it locks ME out of MY kitchen.
// The turn lands in the second clause: it doesn't even work here.
//
// Line (93 chars, under the 200 cap):
//   My fridge locked me out at midnight — it doesn't even work here, it just lives here for free.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge locked me out at midnight — it doesn't even work here, it just lives here for free.";

// The gate allows 1..200 characters; refuse to write anything outside it.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`entry is ${[...ENTRY].length} chars, outside the 1..200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
