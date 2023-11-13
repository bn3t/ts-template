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

## Use with bun

### Bun based scripts

- npm run bun:dev # Run the dev version (ts) in bun
- 

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
