# Vitest Mocking Utilities

This module provides a set of utilities and mocks for testing Node.js file
system, path, and prompt interactions using [Vitest](https://vitest.dev/) and
[memfs](https://github.com/streamich/memfs). It is designed to simplify writing
isolated, deterministic tests for code that interacts with the filesystem or
uses interactive prompts.

---

## Features

- **In-memory file system** via `memfs` for fast, side-effect-free tests.
- **Mocked `fs`, `path`, and `prompts` modules** using Vitest's mocking system.
- **Utility functions** for creating, reading, and resetting files/directories
  in tests.
- **Helpers for mocking prompt responses** and module imports.
- **Easy setup/teardown** for test suites.

---

## Usage

### Import

```ts
import { fs, path, prompts, utils } from './.dev/__mocks__/index';
```

### Mocking in Your Tests

The module automatically mocks `fs`, `path`, `prompts`, and `node:module` when
imported.

#### Example: Setting Up Files and Prompts

```ts
utils.reset.fs({ '/foo.txt': 'hello', '/bar/baz.txt': 'world' });

utils.setup.prompts({ answer: 'yes' });
```

#### Example: Creating Files/Directories

```ts
utils.create.file('/mydir/file.txt', 'content');
utils.create.dir('/anotherdir');
```

#### Example: Reading Files

```ts
const content = utils.read.sync.file('/foo.txt');
const files = utils.read.sync.dir('/bar');
```

#### Example: Checking File Existence

```ts
const exists = utils.does.fileExists('/foo.txt');
```

#### Example: Resetting State Before/After Each Test

```ts
utils.beforeAfterEach();
```

---

## API Reference

### Exports

- **fs**: Mocked `fs` module (from memfs)
- **path**: Mocked `path` module
- **prompts**: Mocked `prompts` module
- **utils**: Utility object containing:
  - `create.dir(path)`, `create.file(path, content)`
  - `read.sync.file(path)`, `read.sync.dir(path)`
  - `read.async.file(path)`, `read.async.dir(path)`
  - `does.fileExists(path)`
  - `reset.fs(structure)`, `reset.all(structure)`
  - `setup.prompts(response)`, `setup.test(files, promptsResponse)`
  - `mockImport(modulePath, moduleExports)`
  - `beforeAfterEach()`

---

## Example Test

```ts
import { utils, fs, prompts } from './.dev/__mocks__/index';

describe('my module', () => {
  utils.beforeAfterEach();

  it('reads a file', () => {
    utils.create.file('/test.txt', 'data');
    expect(fs.readFileSync('/test.txt', 'utf-8')).toBe('data');
  });

  it('mocks prompts', async () => {
    utils.setup.prompts({ answer: 42 });
    const result = await prompts();
    expect(result).toEqual({ answer: 42 });
  });
});
```

---

## License

MIT

---

**Tip:**  
Use this module to keep your tests fast, isolated, and free from side effects on
the real filesystem or user input.
