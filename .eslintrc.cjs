module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
  plugins: ['react-refresh', 'import'],
  rules: {
    "import/extensions": [ "error", "ignorePackages", { "js": "never", "jsx": "never", "ts": "never", "tsx": "never" } ],
    "react/jsx-filename-extension": ['off', { "extensions": [".js", ".ts", ".tsx"] }],}
}
