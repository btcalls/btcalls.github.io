module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    'indent': ['error', 2],
    curly: ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    eqeqeq: ['warn', 'smart'],
    semi: ['warn', 'always'],
    'max-len': ['error', { code: 120 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'object-curly-spacing': ['warn', 'always'],
    'keyword-spacing': ['warn'],
    'space-before-blocks': ['warn'],
    'react/jsx-max-props-per-line': [1, { maximum: 3 }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-tag-spacing': ['error'],
    'react/display-name': 0, // We disable react display name checking since we use a lot of tables here
    'react/jsx-closing-bracket-location': ['error'],
    'jsx-quotes': ['error'],
    'space-infix-ops': ['error'],
    'comma-spacing': ['warn'],
    'arrow-spacing': ['warn'],
    quotes: ['warn', 'single'],
    'object-property-newline': ['warn', {
      'allowAllPropertiesOnSameLine': false,
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        // paths: ['src'],
        'moduleDirectory': ['node_modules', 'src/'],
      },
    },
  },
};
