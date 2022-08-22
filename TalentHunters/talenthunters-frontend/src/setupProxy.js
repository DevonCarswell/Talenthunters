const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/manager/get-employees",
    "/manager/get-employee",
    "/manager/add-employee",
    "/manager/update-employee-email",
    "/manager/delete-employee"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7155',
        secure: false
    });

    app.use(appProxy);
};
