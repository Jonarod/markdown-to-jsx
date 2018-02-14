import config from './webpack.config.babel';

const releaseConfig = Object.assign({}, config);

releaseConfig.mode = 'production';

export default releaseConfig;
