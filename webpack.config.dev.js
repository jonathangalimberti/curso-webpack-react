const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports={
    entry :"./src/index.js",
    output:{
        path : path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        

    },
    mode :'development',
    
    resolve:{
        extensions: ['.js','.jsx'],
        
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
        ],
        devServer:{
            static: {directory:path.join(__dirname,'dist/'),},
            compress: true,
            port: 3006,
            open: true,
            client:{
                overlay: {
                  warnings: false,
                  errors: true
                }
              }
          
          
          }
        ,
}