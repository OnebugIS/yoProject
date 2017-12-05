module.exports = {
    plugins: ['yo'],
    config: {
        // [配置] 项目资源入口
        export: ['./page/index.js'],
        // [配置] webpack
        modifyWebpackConfig: function (config) {
            // 向lib.js中添加最常用的基础组件，如果你的项目有其他大量使用的组件，请手动加入到vendors中
            // 注意，你不能将类似yo3/component/list/index.js这样的路径加入到vendor中，应该添加组件目录下的src/index.js，否则样式的构建会出现问题
            // sticky和lazyimage是两个例外
            config.getVendor = function (vendors) {
                return vendors.concat([
                    'yo3/component/list/src/index.js',
                    'yo3/component/scroller/src/index.js',
                    'yo3/component/modal/src/index.js',
                    'yo3/component/sticky/index.js',
                    'yo3/component/lazyimage/index.js',
                    'yo3/component/touchable/src/index.js'
                ]);
            };
            // [配置] chunk 的路径
            config.output.local.publicPath = '//127.0.0.1/yoProject/prd/';

            // [配置] 项目中的别名，推荐所有的别名都以 $ 开头，既能一眼识别出是别名，也能避免命名冲突
            config.resolve = {
                alias: {
                    '$yo': 'yo3',
                    '$yo-config': '/src/yo-config',
                    '$yo-component': 'yo3/component',
                    '$router': 'yo-router',
                    '$common': '/src/common',
                    '$component': '/src/component'
                }
            };

            // 配置chunkfile的publicPath，这里output后面的dev实际上是当前的编译环境
            // 分为local,dev,prd三种，分别对应本地，开发机和线上环境
            // config.output.dev.publicPath = '//q.qunarzz.com/yourproject/prd/';

            return config;
        }
    }
}
