module.exports = {
  reactStrictMode: true,
 
}


const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

const withImages = require('next-images')
module.exports = withImages()

//module.exports = {
 //reactStrictMode: images: {
    //disableStaticImages: true
 // }
 //},

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },

};
module.exports = {
  experimental: {
    esmExternals: false
  }
}
