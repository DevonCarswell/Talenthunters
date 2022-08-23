const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/employee/get-employees",
    "/employee/get-employee",
    "/employee/add-employee",
    "/employee/update-employee-email",
    "/employee/delete-employee"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7155',
        secure: false
    });

    app.use(appProxy);
};
