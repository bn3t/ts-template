# TypeScript project template

## Features

- Tsup / esbuild based transpilation
- ESLint support
- Vitest tests
- Coverage support for tests
- Prettier integration (+ ESLint)
- Gitlab CI
- Npm check update `npm run ncu`
- Conventional commits releasing (experimental)

## Configured scripts

- build:check: check typescript syntax
- build:js: build the nodejs version using tsup
- bun:build:js: build the nodejs version using bun
- bun:build:bun: build the bun version
- bun:build:bun-exe: build an executable (bun)
- build: full build the nodejs version (lint, check, build)
- bun:build: build the bun version (lint, check, build)
- clean: clean all generated files
- dev: run the dev version (ts-node)
- lint: run lint
- lint:fix: run lint fix
- ncu: run npm-check-update dependency management
- start: run the production version
- test:ci: run the tests (ci version)
- test: run the test (interactive version)

## Visual Studio Code configuration

Put this in .vscode/settings.json

```
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
}
```

# GitHub Actions CI Notes

To add windows support in the build

```yaml
windows:
  runs-on: windows-latest
  steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
      with:
        node-version: 20
    - run: npm install -g npm@10
    - run: npm ci
    - run: npm run test
```

To add npm publish to release-please:

```yaml
- run: npm publish
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
  if: ${{ steps.release.outputs.release_created }}
```
