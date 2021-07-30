const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@src:pages': path.resolve(__dirname, 'src/pages/'),
      '@src:routes': path.resolve(__dirname, 'src/routes/'),
      '@src:graphql': path.resolve(__dirname, 'src/graphql/'),
      '@src:components': path.resolve(__dirname, 'src/components/'),
      '@src:api': path.resolve(__dirname, 'src/api/'),
      '@src:utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};
