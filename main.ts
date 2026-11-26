import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// Future self, finally confessing a childhood accident to the neighbour.
// Beat 1: the confession, named neighbour, exact year.
// Beat 2: she already knew — the flash of recognition.
// Beat 3: the bill — 27 years of interest is the punchline.
// K1: the opener names the future self outright. K3: one proper name,
// one exact year, one exact number. K5: no broke/tired angle, no plant.
const ENTRY =
  "Future you here. I finally confessed to Mrs. Kowalski about her window in 1998. She knew. She billed me for 27 years of interest.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
chmodSync("/output/entry.txt", 0o644);
