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
    `Provide files to stage and commit AND/OR the --changeset arg. If no files are provided, the --changeset arg is required.`,
  );
};
if (
  HELP.some((arg) => args.includes(arg)) ||
  (files.length < 1 && !args.includes("--changeset"))
) {
  help();
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
  let commitCmd = "git commit";
  if (AMEND.some((arg) => args.includes(arg))) commitCmd += " --amend";
  execSync(commitCmd, { stdio: "inherit" });
} catch (error) {
  console.error("[❌] during commit:", error.message);
  process.exit(1);
}
