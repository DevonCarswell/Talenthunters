const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/manager/get-users",
    "/manager/get-user",
    "/manager/add-user",
    "/manager/update-user-email",
    "/manager/delete-user"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7155',
        secure: false
    });

    app.use(appProxy);
};
