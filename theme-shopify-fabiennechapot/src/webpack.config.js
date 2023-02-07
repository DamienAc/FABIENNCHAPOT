const path = require('path');
const glob = require('glob');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DisableOutputWebpackPlugin = require('./webpack/DisableOutputWebpackPlugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const css = {
    entry: './css/theme.scss',
    output: {path: path.resolve(__dirname, '../assets/'),},
    plugins: [new MiniCssExtractPlugin(), new DisableOutputWebpackPlugin({test: /\.js$/})],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: './'
                        }
                    },
                    'extract-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer'
                                    ],
                                ],
                            },
                        },
                    },
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ],
    },
};

const js = {
    performance: { hints: false },
    entry: './js/theme.js',
    plugins: [new MiniCssExtractPlugin()],
    output: {
        path: path.resolve(__dirname, '../assets/'),
        filename: 'theme.js'
    },
    module: {
        rules:[
            {
                test: /\.?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "useBuiltIns": "usage", // alternative mode: "entry"
                                    "corejs": 3, // default would be 2
                                    "targets": "> 0.25%, not dead"
                                    // set your own target environment here (see Browserslist)
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader'
                }
            }
        ]
    }
};

const reprise = {
    entry: './vue/vue.js',
    output: {
        path: path.resolve(__dirname, '../assets/'),
        filename: 'vue.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                resourceQuery: /blockType=i18n/,
                type: 'javascript/auto',
                loader: '@kazupon/vue-i18n-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new VueLoaderPlugin()]
};

const account = {
    entry: './account.js',
    output: {
        path: path.resolve(__dirname, '../assets/'),
        filename: 'account.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                resourceQuery: /blockType=i18n/,
                type: 'javascript/auto',
                loader: '@kazupon/vue-i18n-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new VueLoaderPlugin()]
};

module.exports = [css, js, reprise, account];
