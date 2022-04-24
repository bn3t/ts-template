# TypeScript project template

## Features

- Babel based transpiling
- ESLint support
- Jest tests
- Coverage support for tests
- Prettier integration (+ ESLint)
- Gitlab CI
- Npm check update `npm run ncu`
- Conventional commits releasing (experimental)

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
