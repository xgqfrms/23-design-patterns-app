# webpack merge

```js
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const devConfig = require('./webpack.dev.config');
const proConfig = require('./webpack.prod.config');

const log = console.log;

module.exports = (env, args) => {
  log(`env =\n`, env)
  log(`args =\n`, args)
  const config = args.mode === 'development' ? devConfig : proConfig;
  return merge(baseConfig, config);
};

```
