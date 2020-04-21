module.exports = {
  env: {
    "browser": true,
    "node": true
  },
  extends: [
      "airbnb",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript"
    ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "prettier",
    "react-hooks"
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    'import/resolver': {
      parcel: {
        extensions: ['.ts', '.tsx'],
        // rootDir: 'src' // wherever your entrypoints are located
      }
    }
  },
  rules: {
    "import/no-unresolved": "off",
    "linebreak-style": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "scss": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".ts", ".tsx"] },
    ],
    "import/no-extraneous-dependencies": [
      2,
      { devDependencies: ["**/test.tsx", "**/test.ts"] },
    ],
    "@typescript-eslint/indent": [2, 2],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  }
};
