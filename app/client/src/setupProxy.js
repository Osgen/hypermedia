const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy(['/auth/google', '/auth/google/callback','/api/logout','/api/current_user'],{target:'http://localhost:5000'}));   
}