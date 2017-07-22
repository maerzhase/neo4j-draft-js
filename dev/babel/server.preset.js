const base = require('./base.preset');

module.exports = {
  presets: [
    ['env', {
      loose: true,
      target: {
        node: true,
      },
    }],
    ...base.presets,
  ],
  plugins: base.plugins,
};
