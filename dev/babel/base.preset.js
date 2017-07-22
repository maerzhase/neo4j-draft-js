const plugins = [
  // Polyfills
  'transform-runtime',
  // export * as Todos from './todos.js'
  // We need to disable this plugin for now as it's transpiling imports and exports removing advantages of
  // ES6 export and imports transpiled by Webpack directly.
  // 'transform-export-extensions',
  // { ...todo, completed: true }
  'transform-object-rest-spread',
  // Decorator syntax
  'transform-decorators-legacy',
  // (Static) class properties
  'transform-class-properties',
  // Inlines invariant and warning calls from fbjs to simplify minification of errors and warnings.
  'babel-preset-fbjs/plugins/dev-expression',
  // Transpiles __DEV__ expressions to process.env.NODE_ENV !== 'production'
  'babel-preset-fbjs/plugins/dev-declaration',
];


module.exports = {
  presets: [
   ['env', {
     loose: true,
     target: {
       node: true,
     },
   }],
  ],
  plugins:   plugins,
};
