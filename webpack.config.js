const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports={
    entry :"./src/index.js",
    output:{
        path : path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath:"/",


    },
    mode :'production',
    
    resolve:{
        extensions: ['.js','.jsx'],
        alias:{
            '@components': path.resolve(__dirname, 'src/components/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
        }
    },
    module:{
        rules:[
            {
                test:/\.js|jsx$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                
                    use: 
                        'html-loader',
                
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    },
                    // [sass-loader](/loaders/sass-loader)
                    { loader: 'sass-loader' },
        ]}
        ],
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template: '/public/index.html',
                filename:'./index.html',
            }
            ),
            new MiniCssExtractPlugin(
                {
                    filename: '[name].css',
                }
            ),
            new CleanWebpackPlugin(),
            
        ],
        optimization:{
            minimize: true,
            minimizer:[
                new TerserPlugin(),
                new CssMinimizerPlugin(),

            ]
        }
}