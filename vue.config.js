const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,// 禁用 ESLint,
    devServer: {
        open: true,
        port: 8088,
        host: "localhost",
    },
    // 无效
    // css: {
    //     loaderOptions: {
    //         scss: {
    //             additionalData: `@import "~@/styles/index.scss";`
    //         },
    //     },
    // },
});
