/* eslint-disable  */
// .eslintrc.js
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true
    }
  },
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended', 'vue-global-api', './.eslintrc-auto-import.json'],
  rules: {
    /**
     * 官方规则: https://eslint.bootcss.com/docs/rules/
     */
    'vue/multi-word-component-names': 'off',
    'vue/no-mutating-props': 'off',
    'vue/require-valid-default-prop': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/no-dupe-keys': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-undef': 2, // 禁止使用未定义的变量
    //quotes: [1, 'double'], // 引号类型 `` "" ''
    semi: ['off', 'always'], // 语句强制分号结尾
    'semi-spacing': [0, { before: false, after: true }], // 分号前后空格
    'getter-return': ['error', { allowImplicit: true }], // 强制 getter 函数中出现 return 语句
    'no-control-regex': 'error', // 禁止在正则表达式中出现控制字符
    'no-dupe-args': 'error', // 禁止在函数定义或表达中出现重名参数
    'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
    'no-empty': 'error', // 禁止出现空语句块
    'no-empty-character-class': 'error', // 禁止在正则表达式中使用空字符集
    'no-ex-assign': 'error', // 禁止对 catch 子句中的异常重新赋值
    'no-extra-semi': 'error', // 禁用不必要的分号
    'no-func-assign': 'error', // 禁止对 function 声明重新赋值
    'no-inner-declarations': 'error', // 要求函数声明和变量声明（可选的）在程序或函数体的顶部
    'no-irregular-whitespace': 'error', // 禁止不规则的空白
    'no-obj-calls': 'error', // 禁止将 Math、JSON 和 Reflect 对象当作函数进行调用
    'no-unsafe-negation': 'error', // 禁止对关系运算符的左操作数使用否定操作符
    'require-atomic-updates': 'error', // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'valid-typeof': ['error', { requireStringLiterals: true }], // 强制 typeof 表达式与有效的字符串进行比较
    'array-callback-return': 'error', // 强制数组方法的回调函数中有 return 语句
    'block-scoped-var': 'error', // 强制把变量的使用限制在其定义的作用域范围内
    curly: 'error', // 强制所有控制语句使用一致的括号风格
    'default-case': 'error', // 要求 switch 语句中有 default 分支
    'dot-location': ['error', 'property'], // 强制要求点操作符和属性放在同一行
    'dot-notation': ['error'], // 强制尽可能地使用点号
    eqeqeq: ['error', 'always'], // 要求使用 === 和 !==
    'max-classes-per-file': 'error', // 制每个文件只能包含一个特定数量的类，没有更多
    'no-case-declarations': 'error', // 不允许在 case 子句中使用词法声明, 可以用大括号
    'no-else-return': 'error', // 禁止 if 语句中 return 语句之后有 else 块
    'no-fallthrough': ['error', { commentPattern: 'break[\\s\\w]*omitted' }], // 禁止 case 语句落空, 如果结尾有注释满足break[\\s\\w]*omitted，则忽略
    'no-floating-decimal': 'error', // 禁止数字字面量中使用前导和末尾小数点
    'no-global-assign': 'error', // 禁止对原生对象或只读的全局对象进行赋值
    'no-multi-spaces': ['error', { ignoreEOLComments: true }], // 禁止在逻辑表达式、条件表达式、声明、数组元素、对象属性、序列和函数参数周围使用多个空格
    'no-octal': 'error', // 禁用八进制字面量
    'no-redeclare': 'error', // 禁止多次声明同一变量
    'no-self-assign': 'error', // 禁止自我赋值
    'no-with': 'error', // 禁用 with 语句
    'require-await': 'error', // 禁止使用不带 await 表达式的 async 函数
    'no-shadow-restricted-names': 'error', // 禁止将标识符定义为受限的名字
    'array-bracket-newline': ['error', { multiline: true }],
    indent: ['error', 2, { SwitchCase: 1 }], // 缩进风格, 2空格
    'jsx-quotes': ['error', 'prefer-double'], // 强制所有不包含双引号的 JSX 属性值使用双引号
    'key-spacing': ['error', { beforeColon: false }], // 禁止在对象字面量的键和冒号之间存在空格
    'keyword-spacing': ['error', { before: true }], // 要求在关键字之前至少有一个空格
    'line-comment-position': ['error', { position: 'above' }], // 强制行注释只在代码上方
    // "lines-between-class-members": ["error", "always"], // 要求类成员之间出现空行
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }], // 要求在方法链中, 允许在同一行成链的最大深度
    'no-lonely-if': 'error', // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // 强制最大连续空行数(1), 强制文件末尾的没有连续空行数
    'no-whitespace-before-property': 'error', // 禁止属性前有空白
    // "object-curly-newline": ["error", { multiline: true }], // 强制花括号内使用换行符的一致性, 如果在属性内部或属性之间有换行符，就要求有换行符
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ], // 要求或禁止在语句间填充空行, 该配置要求变量声明之后都有空行
    'space-infix-ops': 'error', // 要求操作符周围有空格
    'spaced-comment': ['error', 'always'], // 强制在注释中前后添加空格
    'arrow-spacing': 'error', // 强制箭头函数的箭头前后使用一致的空格
    'no-class-assign': 'error', // 禁止修改类声明的变量
    'no-const-assign': 'error', // 禁止修改用const声明的变量
    'no-dupe-class-members': 'error', // 禁止类成员中出现重复的名称
    'no-duplicate-imports': 'error', // 禁止重复模块导入
    'no-new-symbol': 'error', // 禁止 Symbolnew 操作符和 new 一起使用
    // "no-var": "error", // 要求使用 let 或 const 而不是 var
    'require-yield': 'error', // 要求 generator 函数内有 yield
    'rest-spread-spacing': ['error', 'never'] // 扩展运算符及其表达式之间不允许有空格
  },
  env: {
    // The Follow config only works with eslint-plugin-vue v8.0.0+
    'vue/setup-compiler-macros': true,
    node: true
  }
};
