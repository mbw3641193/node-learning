console.log(arguments);


//'0':exports   :   

    //模块化： 1.闭包 2.单例(在当前作用于下，有且只有一个 :缺点：不能保证一定不冲突)
    //模块化优势：低耦合，高内聚，方便维护，防止代码冲突(命名冲突)
    //CMD : seajs (浏览器端模块化)
    //AMD : requirejs (浏览器端模块化)

    //node模块化 不基于框架，而是基于一个规范：commonjs 。天生自带模块化
    //commonjs: 
        //1.定义了如何创建模块：一个js文件就是一个模块 
        //2.如何使用一个模块 ：require一个文件
        //3.如何导出一个模块 ：exports/module.exports

//'1':require
//'2':module
//'3':__filename
//'4':__dirname


// [Arguments] {
//     '0': {},
//     '1':
//      { [Function: require]
//        resolve: { [Function: resolve] paths: [Function: paths] },
//        main:
//         Module {
//           id: '.',
//           exports: {},
//           parent: null,
//           filename: 'c:\\workspace\\node\\module_arguments.js',
//           loaded: false,
//           children: [],
//           paths: [Array] },
//        extensions:
//         [Object: null prototype] { '.js': [Function], '.json': [Function], '.node': [Function] },
//        cache:
//         [Object: null prototype] { 'c:\\workspace\\node\\module_arguments.js': [Module] } },
//     '2':
//      Module {
//        id: '.',
//        exports: {},
//        parent: null,
//        filename: 'c:\\workspace\\node\\module_arguments.js',
//        loaded: false,
//        children: [],
//        paths:
//         [ 'c:\\workspace\\node\\node_modules',
//           'c:\\workspace\\node_modules',
//           'c:\\node_modules' ] },
//     '3': 'c:\\workspace\\node\\module_arguments.js',
//     '4': 'c:\\workspace\\node' }