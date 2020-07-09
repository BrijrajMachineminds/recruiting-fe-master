module.exports = {
    devServer: {
        proxy: {
            [`^${process.env.VUE_APP_API_BASE_URL}`]: {
                target: process.env.VUE_APP_API_ENV,
                changeOrigin: false,
            },
        },
    }
};