module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options => Object.assign({}, options, { name: '[name].[ext]' }));
    },
    css: {
        extract: {
            filename: 'css/module.list.[name].css',
            chunkFilename: 'css/module.list.[name].css',
        },
    },
    configureWebpack: {
        output: {
            filename: 'js/module.list.[name].js',
            chunkFilename: 'js/module.list.[name].js',
        }
    }
};

/*module.exports = {
    configureWebpack: config => {
        config.output.filename = 'module.list.[name].js';

    },
    chainWebpack: config => {
        config.plugin('extract-css')
            .tap(([options]) => [
                Object.assign({}, options, { filename: 'css/module.list.[name].css' }),
            ])
    }
}
*/