// const historyApiFallback = require('connect-history-api-fallback');

module.exports = {
    port: 8080,
    proxy: 'localhost:3000',
    // server: 'public',
    files: [
        'public/js/*.js',
        'public/css/*.css',
        'server/views/*.ejs',
        'server/routes/*.js'
    ],
    ui: false,
    notify: false,
    // middleware: [historyApiFallback()],
    reloadDelay: 500,
    reloadDebounce: 200
};
