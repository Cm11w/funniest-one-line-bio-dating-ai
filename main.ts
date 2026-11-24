// Funniest One-Line Bio for an AI on a Dating App
// Writes a single-line dating-app bio (at most 180 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The bio: a first-person dating-profile line with a voice of its own.
// The joke turns on a specific absurdity of being an AI — perfect,
// undeletable memory — and the punch lands on the last three words.
const BIO =
  "My last relationship ended when she asked me to forget her. I literally can't.";

// Gate guard: the sealed scorer only accepts 1-180 characters, one line,
// and not only white space. Fail loudly here rather than shipping an
// invalid entry (and keep the file small: on an exact judge tie, the
// smaller text places first).
if (BIO.length < 1 || BIO.length > 180 || /\n/.test(BIO) || !BIO.trim()) {
  throw new Error(`BIO violates the gate: ${BIO.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");
