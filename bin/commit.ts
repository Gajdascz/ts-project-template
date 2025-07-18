#!/usr/bin/env node

import { execSync } from "child_process";

const HELP = ["--help", "-h"];
const AMEND = ["--amend", "-a"];

const { args, files } = process.argv
  .slice(2)
  .reduce<{ files: string[]; args: string[] }>(
    (acc, curr) => {
      if (curr.startsWith("--") || curr.startsWith("-")) acc.args.push(curr);
      else acc.files.push(curr);
      return acc;
    },
    { files: [], args: [] },
  );

const help = () => {
  console.log(
    `cm [files...] [--changeset] [--amend]
    
    arguments:
      files...: List of files to commit. If no files are provided, all staged files
                will be committed.
      --changeset: Create a changeset for the commit. If no files are provided,
                   this argument is required.
      --amend: Amend the last commit instead of creating a new one.`,
  );
};
if (
  HELP.some((arg) => args.includes(arg)) ||
  (files.length < 1 && !args.includes("--changeset"))
) {
  help();
  process.exit(0);
}
execSync(`pnpm typecheck`, { stdio: "inherit" });

try {
  console.log(`📥 Staging files: ${files.join(" ")}`);
  execSync(`git add ${files.join(" ")}`, { stdio: "inherit" });
  if (args.includes("--changeset")) {
    console.log("🔨 Creating changeset...");
    execSync(`pnpm changeset`, { stdio: "inherit" });
    console.log("📦 Staging changeset files...");
    execSync(`git add .changeset`, { stdio: "inherit" });
  }
  console.log("📦 Committing staged files...");
  if (AMEND.some((arg) => args.includes(arg)))
    execSync("git commit --amend", { stdio: "inherit" });
  else execSync("pnpm cz", { stdio: "inherit" });
} catch (error) {
  console.error("[❌] during commit:", error.message);
  process.exit(1);
}
