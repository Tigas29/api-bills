module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',  // ou use uma versão específica como 2021
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        'newlines-between': 'always',
        'groups': [
          /^node:/,
          'module',
          [
            'parent',
            'sibling',
            'index'
          ]
        ],
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ]
  },
  ignores: [
    'build/',
    'node_modules/'
    // Adicione outros padrões de arquivos ou diretórios que você deseja ignorar
  ]
};
