module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.(scss|sass)$/,
          use: [
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true,
                keepQuery: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  includePaths: ['node_modules']
                }
              }
            }
          ]
        }
      ]
    }
  };
  