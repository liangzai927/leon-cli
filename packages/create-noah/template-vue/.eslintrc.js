module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  // @vue/prettier引入覆盖eslint规则
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-multiple-template-root': 'off',
    'prettier/prettier': 1,
    'vue/multi-word-component-names': 'off' //关闭命名规则校验
  }
};
