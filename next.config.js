const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({

  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
    config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
    //config.module.rules.push({test: /\.json$/, use: 'raw-loader'})
    return config
  }
});