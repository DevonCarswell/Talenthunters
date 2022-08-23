const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/employee/get-employees",
    "/employee/get-employee",
    "/employee/add-employee",
    "/employee/update-employee-email",
    "/employee/delete-employee",
    "/division/get-divisions",
    "/division/get-division",
    "/division/add-division",
    "/division/delete-division",
    "/division/get-employees-by-division"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7155',
        secure: false
    });

    app.use(appProxy);
};
