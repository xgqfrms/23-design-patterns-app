const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const proConfig = require('./webpack.prod.config');

const log = console.log;

// log(`process.env =\n`, process.env)
// log(`process.argv =\n`, process.argv)

module.exports = (env, args) => {
  // log(`process.env.NODE_ENV =`, process.env.NODE_ENV)
  // log(`env =`, env)
  // log(`args =\n`, args)
  const config = args.mode === 'development' ? devConfig : proConfig;
  return merge(baseConfig, config);
};
