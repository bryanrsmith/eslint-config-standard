# eslint-config-standard
This is the standard eslint config that I use for personal projects.

`npm install --save-dev @bryanrsmith/eslint-config-standard`

example .eslintrc:

```json
{
    "extends": "@bryanrsmith/eslint-config-standard",
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "node": true
    },
    "ecmaFeatures": {
        "modules": true,
        "experimentalObjectRestSpread": true
    }
}
```
