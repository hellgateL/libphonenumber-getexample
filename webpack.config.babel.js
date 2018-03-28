import path from 'path';

const library_name = 'libphonenumber-getexample';
const global_variable_name = 'libphonenumber';

export default {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: `${library_name}.min.js`,
        library: global_variable_name,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
