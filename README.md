# <<PROJECT_NAME>>

![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

---

A modern, batteries-included TypeScript project template with automated
workflows and strict code quality.

---

## Features

- **TypeScript-first:** Strict, modern TS config for robust type safety.
  - Configurations:
    - [base](tsconfig.base.json) contains the rules shared for all ts files.
    - [main](tsconfig.json) targets src files
    - [config](tsconfig.config.json) targets root level configuration and
      development files.
    - [test](tsconfig.test.json) targets test files with relaxed rules.
- **Automated CI/CD:**
  - [GitHub Actions](.github/workflows/) for prerelease (test, lint, build,
    dry-run publish) and release (publish to npm).
- **Code Quality:**
  - [ESLint](eslint.config.ts) with strict and relaxed rulesets.
  - [Prettier](prettier.config.cjs) for consistent formatting.
  - [lint-staged](package.json) and [Husky](.husky/) for pre-commit and pre-push
    checks.
- **Testing:**
  - [Vitest](vitest.config.ts) with 100% coverage enforced.
  - [In-memory fs/path/prompts mocking utilities](.dev/__mocks__/README.md) for
    fast, isolated tests.
- **Conventional Commits:**
  - [Commitizen](https://commitizen.github.io/cz-cli/) and
    [Commitlint](commitlint.config.ts) for standardized commit messages.
- **Automated Releases:**
  - [Changesets](https://github.com/changesets/changesets) for versioning and
    changelogs.
- **Dependency Validation:**
  - [dependency-cruiser](.dep-cruiser.cjs) for enforcing healthy dependency
    graphs.
- **Documentation:**
  - [PlantUML workflow diagram](docs/workflow.puml) for process transparency.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PNPM](https://pnpm.io/)

### Setup

<details><summary>Diagram</summary>

[![](https://img.plantuml.biz/plantuml/svg/TPFRJjj048Rl_HI_gDGcej1xmWLMC8S2IPI4LWYXP6CFzfRrhhK78dZwpje99Iszc_MCPxv_3YVE2-j3hV3JsAT7PTP9ugLNX3dLZHAUC2CVcYGfhGaDpic_UP9FIfQLBosHFi9aDBd1PunCGRZKd5OfAWQRc9KAT8IXalaJbhUEu2lfu3U9bZ0Qvz9VX1LwusaVor9wvCfeTcs3OAanWuHqWHPbIpGXwumMIhuI9jRyejpl58tLVimmPAul3djdaXEaIksXD_HMxSyg-UZtp_hm1ew4pIiy6elbyV4IWaEvgX8vWUMWjIgZ2Yw9jVGLNaomQBggACWBgTmWqIRYHeJaKkSg5EIE4k00wUtyOZnTZDAR3Bsx-Ez8rDH_xxkTNgF7ygkmEinD_IrMM0H7LlyTUNw1tl-zsKrwUTq5W6hcwhoJwVXxDfmlPgFqAjkuj_n_SjnbwHIzF5XBskE5sz9l6n-59JlTdGHNnTOPbYirk916S5ANk7TFia4k7y2VM4dD8wt9EL7IxbRmVdLzZ0DsqXlx0jwbnNnybOtQOOZSIwFT1yEVnUt5AJsJCatDi3kPnmrf26XQOsM5pgl1Fvl1sfzbGGLSRcNZNLjFIUrPmjVug8NlR4-kC-9Mh89K1RyEcPvmVrzq16GFrfipEcpYKPrklx-TryF31pA6YeJcvtkwq1Hnwncd84K-dWp5yuiGdUv8JMrhOelR5awpz9HtAoB6yEtj7BXumnrI8KLfHRr3SS8s-vBaDm00)](https://editor.plantuml.com/uml/TPFRJjj048Rl_HI_gDGcej1xmWLMC8S2IPI4LWYXP6CFzfRrhhK78dZwpje99Iszc_MCPxv_3YVE2-j3hV3JsAT7PTP9ugLNX3dLZHAUC2CVcYGfhGaDpic_UP9FIfQLBosHFi9aDBd1PunCGRZKd5OfAWQRc9KAT8IXalaJbhUEu2lfu3U9bZ0Qvz9VX1LwusaVor9wvCfeTcs3OAanWuHqWHPbIpGXwumMIhuI9jRyejpl58tLVimmPAul3djdaXEaIksXD_HMxSyg-UZtp_hm1ew4pIiy6elbyV4IWaEvgX8vWUMWjIgZ2Yw9jVGLNaomQBggACWBgTmWqIRYHeJaKkSg5EIE4k00wUtyOZnTZDAR3Bsx-Ez8rDH_xxkTNgF7ygkmEinD_IrMM0H7LlyTUNw1tl-zsKrwUTq5W6hcwhoJwVXxDfmlPgFqAjkuj_n_SjnbwHIzF5XBskE5sz9l6n-59JlTdGHNnTOPbYirk916S5ANk7TFia4k7y2VM4dD8wt9EL7IxbRmVdLzZ0DsqXlx0jwbnNnybOtQOOZSIwFT1yEVnUt5AJsJCatDi3kPnmrf26XQOsM5pgl1Fvl1sfzbGGLSRcNZNLjFIUrPmjVug8NlR4-kC-9Mh89K1RyEcPvmVrzq16GFrfipEcpYKPrklx-TryF31pA6YeJcvtkwq1Hnwncd84K-dWp5yuiGdUv8JMrhOelR5awpz9HtAoB6yEtj7BXumnrI8KLfHRr3SS8s-vBaDm00)

</details>

---

**1. Create a new project from this template:**

- Click the **"Use this template"** button on Github and generate a new
  repository.

OR

- Manually clone and link to Github

  ```sh
  git clone https://github.com/<<AUTHOR_GH>>/<<PROJECT_NAME>>.git
  cd <<PROJECT_NAME>>
  git remote add origin git@github.com:<<AUTHOR_GH>>/<<PROJECT_NAME>>.git
  git branch -M main
  git push -u origin main
  ```

**2. Personalize your project:**

> **Important:** _When pushing your personalization changes to main, you must
> include **[skip ci]** in the commit message to prevent prerelease and release
> workflows._

- Use VS Code's "Find All" (Ctrl+Shift+F) to search for << and replace all
  placeholders with your project details:
  - AUTHOR_NAME (Your Name)
  - AUTHOR_URL (github.com/your_username)
  - AUTHOR_GH (your_username)
  - AUTHOR_EMAIL (your email)
  - PROJECT_NAME (your project name)
  - YEAR (current year)
- Push to origin main using [skip ci] in commit message.
- Set your repository NPM_TOKEN for actions:
  - [Copy your npm access token for publishing.](https://docs.npmjs.com/creating-and-viewing-access-tokens)
  - Go to your project Github repository and click `settings` click
    **`Secrets and Variables`** under the `security` section then click
    `Actions`
  - Click the green `New repository secret`
  - Name it `NPM_TOKEN` and copy the access token under Secret.

**3. Install dependencies:**

`pnpm install`

**4. Start developing:**

- Open a new branch for development.
- Use the provided scripts for linting, formatting, testing, and building. (See
  the [Developer Workflow](#developer-workflow) section for best practices.)

**5. Remove or update this section:** Once setup is complete, update or delete
the Getting Started section in your README and the
[template-setup.puml](docs/template-setup.puml) diagram

## Committing Code

This template provides a powerful, interactive commit script to automate and
enforce best practices for every commit.

> _**Tip:** direct commits to main are prevented to ensure you're always working
> on a clean branch_

### Commit Script (`pnpm cm`)

The [`pnpm cm`](bin/commit.ts) command wraps all the steps needed for a
high-quality commit:

- **Typechecks** your code before committing.
- **Stages** specified files (or all staged files if none specified).
- **Optionally creates a changeset** for versioning (`--changeset`).
- **Supports amending** the last commit (`--amend`).
- **Runs Commitizen** for conventional commit messages (unless amending).
- **Triggers pre-commit hooks** (lint-staged, commitlint) for code quality and
  commit message validation.

#### Usage

```sh
pnpm cm [files...] [--changeset] [--amend]

  files...: List of files to commit. If omitted, all staged files are committed.
  --changeset: Prompt to create a changeset for versioning (required if no files are specified).
  --amend: Amend the last commit instead of creating a new one. Skips commitizen.

```

> _**Tip**: Pre-commit and pre-push hooks will automatically lint, format,
> typecheck, and test your code before allowing a commit or push._

### Releasing

- Push to `main` triggers the
  [prerelease workflow](.github/workflows/prerelease.yml) (test, lint, build,
  dry-run publish).
- Merging a "Version Packages" PR to `main` triggers the
  [release workflow](.github/workflows/release.yml) and publishes to npm.

---

## Scripts

A set of convenient scripts are provided to automate common development,
quality, and release tasks:

| Script                       | Description                                                             |
| ---------------------------- | ----------------------------------------------------------------------- |
| `pnpm build`                 | Compile TypeScript source files to `dist/`                              |
| `pnpm test`                  | Run all tests using Vitest                                              |
| `pnpm lint`                  | Lint codebase with ESLint                                               |
| `pnpm format`                | Format codebase with Prettier                                           |
| `pnpm typecheck`             | Run TypeScript type checking (no emit)                                  |
| `pnpm clean`                 | Auto-fix lint and formatting issues                                     |
| `pnpm check`                 | Typecheck, validate dependencies, and run tests                         |
| `pnpm cruise:validate`       | Validate dependency graph with dependency-cruiser                       |
| `pnpm write:coverage-report` | Generate HTML coverage report in `docs/coverage`                        |
| `pnpm write:docs`            | Generate coverage report and dependency graph documentation             |
| `pnpm lint-staged`           | Run lint-staged (used by Husky pre-commit hook)                         |
| `pnpm prepare`               | Install Husky git hooks                                                 |
| `pnpm cm`                    | Run interactive commit script (see [Committing Code](#committing-code)) |
| `pnpm cm:cs`                 | Run commit script with changeset prompt                                 |
| `pnpm cm:a`                  | Amend the last commit using the commit script                           |

> **Tip:** Most scripts are used automatically by git hooks and CI so removing
> commands can disrupt the workflow.

---

## Developer Workflow

<details><summary>Diagram</summary>

[![workflow diagram](https://img.plantuml.biz/plantuml/svg/fLRRRk8m47tFLyngfGgq0jwXwfRIlJsqHRJQVIKaayJ2YIFRQRSL7x_ZE24NXx9Iym2v-9oPENEnhvNsfIvI3d-4t4TSl7WUnnYp4BJ8WMEalGDSVkOiJlIE5tW50CS7AAy3F6e_2tqPGeZFu0UQYGogRoNw5Jan6wYzWzPrW2V9uXYb0kUoQ27zB2uDsxikUYMoa1cB3lxGU1vBnEpeUlbKULu40Ie5ej21I57Dbc7ACdZ8s-Y0xF8Zkdoow6zI2gbcaSzu8L4vjdDUf0Pd_XtlO5beaVejiLfeam2R1u-kHlxvDcOQWWI3FRaCanrSakQp27qzsP4wGNArNNWl2UC8erLYv5AmBdQSgGJ3hsDW2aQP67i0BT8xVuzGhLvqFstpB4yXIE4o8ivPo2JKDzFfz0f6o_lRsSDc39D9O0bGjr_wASMmBKbjxkSZ5KYMwp5CPpkMpKZsbEcfjePjXkSi6jLM54IY83M6354yEg5KZbvHcP0Q8oo2qRiBQQd9IkDD5MYDA5qkbpLQh4IQSzJOh89SqZlh-n2dIPOVXZ3jyv8eBFBUWmphNS5REbKIkqeCy5gjEraXLxZ2kYPEw_8s94Xm5AGaPc_aGKSH9yoaKFlNUIvnOY5ZwgbCJsWAnHWkEYcirjfrarJ5uygCGJWoADl8KS47Sztq_RpkYbL9fckp7RQgOrWMmyK5V3fJIHrDJXPITzNvMkhdfT6omsJocXSgeU78OXfTpZmuXjVLrUJ0u9hAfvco7T1YPJx0RvypjyZwsguBCsPewpZhZIlv1ZRupF05bZafyLnEgm5phj4xbBGfh3UB_XfRSZ-O_bdiO5bkIseCQmfyWnnzahVUzE1NHkNhjuhX3Cdgc3NxwWC4DwKmy8KYW9N4GGudsZxyFwr-EEwgCKo6xzTt3gX9PstfyTs-70wnxeq-VRyZ-kXoPvu_IK5Eeag4q0w3wQ7sYyxtK_njTfEb43DsAacskx-plt13uOT0fM7BUj6prUfcrsxRuYtkYdZX305dRBSWzOYx5xe_vgm2NX_VHflkOo7vRZOU1HcHb5km8R3swTSUCRnssbf5UG6cvsVcE6ZxdZGp6IMEyaXpJRzqwFIyVm00)](https://editor.plantuml.com/uml/fLRRRk8m47tFLyngfGgq0jwXwfRIlJsqHRJQVIKaayJ2YIFRQRSL7x_ZE24NXx9Iym2v-9oPENEnhvNsfIvI3d-4t4TSl7WUnnYp4BJ8WMEalGDSVkOiJlIE5tW50CS7AAy3F6e_2tqPGeZFu0UQYGogRoNw5Jan6wYzWzPrW2V9uXYb0kUoQ27zB2uDsxikUYMoa1cB3lxGU1vBnEpeUlbKULu40Ie5ej21I57Dbc7ACdZ8s-Y0xF8Zkdoow6zI2gbcaSzu8L4vjdDUf0Pd_XtlO5beaVejiLfeam2R1u-kHlxvDcOQWWI3FRaCanrSakQp27qzsP4wGNArNNWl2UC8erLYv5AmBdQSgGJ3hsDW2aQP67i0BT8xVuzGhLvqFstpB4yXIE4o8ivPo2JKDzFfz0f6o_lRsSDc39D9O0bGjr_wASMmBKbjxkSZ5KYMwp5CPpkMpKZsbEcfjePjXkSi6jLM54IY83M6354yEg5KZbvHcP0Q8oo2qRiBQQd9IkDD5MYDA5qkbpLQh4IQSzJOh89SqZlh-n2dIPOVXZ3jyv8eBFBUWmphNS5REbKIkqeCy5gjEraXLxZ2kYPEw_8s94Xm5AGaPc_aGKSH9yoaKFlNUIvnOY5ZwgbCJsWAnHWkEYcirjfrarJ5uygCGJWoADl8KS47Sztq_RpkYbL9fckp7RQgOrWMmyK5V3fJIHrDJXPITzNvMkhdfT6omsJocXSgeU78OXfTpZmuXjVLrUJ0u9hAfvco7T1YPJx0RvypjyZwsguBCsPewpZhZIlv1ZRupF05bZafyLnEgm5phj4xbBGfh3UB_XfRSZ-O_bdiO5bkIseCQmfyWnnzahVUzE1NHkNhjuhX3Cdgc3NxwWC4DwKmy8KYW9N4GGudsZxyFwr-EEwgCKo6xzTt3gX9PstfyTs-70wnxeq-VRyZ-kXoPvu_IK5Eeag4q0w3wQ7sYyxtK_njTfEb43DsAacskx-plt13uOT0fM7BUj6prUfcrsxRuYtkYdZX305dRBSWzOYx5xe_vgm2NX_VHflkOo7vRZOU1HcHb5km8R3swTSUCRnssbf5UG6cvsVcE6ZxdZGp6IMEyaXpJRzqwFIyVm00)

</details>

---

1. **Create a feature branch:**

   ```sh
   git checkout -b my-feature
   ```

2. **Make changes and stage files:**
   - Edit code as needed.
   - Use `pnpm cm <file/dir...> [--changeset] [--amend]` to stage and commit
     changes:
     - If you use `--changeset`, you'll be prompted to create a changeset for
       versioning.
     - If you use `--amend`, the last commit will be amended.
   - The commit script will:
     - Typecheck your code.
     - Stage files and changesets.
     - Run Commitizen for conventional commits (unless amending).
     - Run pre-commit hooks (`lint-staged`), and commit message linting.

3. **Push your branch:**

   ```sh
   git push origin my-feature
   ```

   - Pre-push hook runs `pnpm check` (typecheck, lint, test, dependency
     validation).
   - If checks fail, fix issues and recommit.

4. **Open a Pull Request:**
   - CI runs all checks on your PR.
   - If publishing and no changeset was included, you'll be prompted to add one.
   - If PR is denied, address review feedback and repeat the process.

5. **Merge PR:**
   - Once approved, merge your PR.
   - GitHub Actions will:
     - Run the pre-release workflow (test, lint, build, dry-run publish).
     - If a changeset PR is created, merge it to trigger the release workflow.
     - Release workflow publishes to npm.

6. **Cleanup:**
   - Feature and changeset branches are deleted after merge.

**[PUML diagram link](docs/developer-workflow.puml)**

---

## Contributing

- Follow [Conventional Commits](https://www.conventionalcommits.org/).
- Use feature branches and open PRs for all changes.
- Ensure all checks pass before merging.

---

## License

MIT – © <<YEAR>> [<<AUTHOR_NAME>>](<<AUTHOR_URL>>)

- [NPM](https://www.npmjs.com/)
- [GitHub](https://github.com/)

---
