import webpack from 'webpack';
import config from './webpack.config.babel';

const releaseConfig = Object.assign({}, config);

releaseConfig.devtool = 'none';
releaseConfig.plugins.push(
    new webpack.debug.ProfilingPlugin(),
);

export default releaseConfig;
