module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        "postcss-aspect-ratio-mini": {}, //主要用来处理元素容器宽高比
        "postcss-write-svg": { //主要用来处理移动端1px的解决方案。
            "utf8": false
        },
        "postcss-cssnext": {}, //该插件可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理。
        "postcss-px-to-viewport": { //http://npm.taobao.org/package/postcss-px-to-viewport
            viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
            viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
            unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
            selectorBlackList: ['.ignore', '.hairlines', ], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
            exclude: [/node_modules/, /pc/], //If value is regexp, will ignore the matches files.If value is array, the elements of the array are regexp.
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
            mediaQuery: false // 允许在媒体查询中转换`px`
        },
        "cssnano": { //主要用来压缩和清理CSS代码
            "cssnano-preset-advanced": {
                zindex: false,
                autoprefixer: false
            },
        }
    }
};