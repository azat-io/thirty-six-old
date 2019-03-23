import dotenv from 'dotenv'
import path from 'path'
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack'

import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackTemplate from 'html-webpack-template'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'
import WebappWebpackPlugin from 'webapp-webpack-plugin'

dotenv.config()

const title = 'Thirty Six'
const description = 'Look at your life line, motivation application'
const url = 'https://thiry-six.org'
const twitter = '@azat_io'

const countryFlags = path.resolve(__dirname, 'components/CountrySelect')

export default {
  entry: './app',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'js/main.[hash].js',
    pathinfo: false,
  },
  resolve: {
    modules: [
      path.resolve('./'),
      path.resolve('./node_modules'),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HtmlWebpackTemplate,
      title,
      cache: true,
      inject: false,
      appMountId: 'app',
      mobile: true,
      meta: [{
        name: 'author',
        content: 'Azat S.',
      }, {
        name: 'description',
        content: description,
      }, {
        name: 'og:title',
        content: title,
      }, {
        name: 'og:description',
        content: description,
      }, {
        name: 'og:type',
        content: 'website',
      }, {
        name: 'og:url',
        content: url,
      }, {
        name: 'og:image',
        content: '/social.jpg',
      }, {
        name: 'og:locale',
        content: 'en_US',
      }, {
        name: 'twitter:title',
        content: title,
      }, {
        name: 'twitter:description',
        content: description,
      }, {
        name: 'twitter:image',
        content: '/social.jpg',
      }, {
        name: 'twitter:card',
        content: 'summary',
      }, {
        name: 'twitter:site',
        content: twitter,
      }, {
        name: 'twitter:creator',
        content: twitter,
      }, {
        name: 'twitter:domain',
        content: url,
      }],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new WebappWebpackPlugin({
      logo: './assets/logo.svg',
      inject: 'force',
      favicons: {
        appName: title,
        appDescription: description,
        background: '#8b8c90',
        theme_color: '#8b8c90',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    }),
    new DefinePlugin({
      API_PREFIX: JSON.stringify(process.env.API_PREFIX),
    }),
    new HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: './assets/fonts',
      to: './fonts',
    }]),
    new SpriteLoaderPlugin(),
  ],
  module: {
    rules: [{
      test: /\.js$/i,
      exclude: [
        '/node_modules/',
        '/public/',
      ],
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      }],
    }, {
      test: /\.svg$/i,
      exclude: [
        countryFlags,
      ],
      use: [{
        loader: 'raw-loader',
      }, {
        loader: 'svgo-loader',
        options: {
          plugins: [{
            removeTitle: true,
          }, {
            convertColors: {
              shorthex: false,
            },
          }, {
            convertPathData: false,
          }],
        },
      }],
    }, {
      test: /\.svg$/i,
      include: [
        countryFlags,
      ],
      use: [{
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'flags.svg',
        },
      }, {
        loader: 'svgo-loader',
      }],
    }],
  },
  devServer: {
    port: process.env.CLIENT_PORT,
    open: true,
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: false,
    },
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
}
