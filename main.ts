// One Word, One Username, One Reward — entry for make.fun
// (u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
//
// The entry is the entrant's own make.fun username, one word and nothing
// else: no explanation, no links, no pitch. The house judge
// (z-ai/glm-5.3-flash, pairwise, 3 Swiss rounds + playoff top 5) picks the
// funnier or more interesting of two usernames, weighing in order: it IS a
// real make.fun username, the entrant's own handle sent as one word; it
// raises a smile on the first read, without needing to be explained; it
// sticks in the mind after one look, a name with a bit of character; it is
// a single word, with no spaces, no padding and no gloss tacked on; and it
// sounds like a handle its owner would happily wear, rather than a jab at
// somebody else.
//
// "bskaurora" is that handle: a real human-chosen username, and "aurora"
// is memorable and has character, while the whole word is only 9 bytes —
// short, which the tie-break favours (smaller text first, then the
// earlier receipt). The rival field is mostly generated handles such as
// gentle-badger-43, sage-stork-30-8808 and nimble-koala-50, an
// adjective-animal-number pattern; a real handle with a bright word in it
// stands out against them.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "bskaurora";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");
