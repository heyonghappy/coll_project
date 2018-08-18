const path = require('path');

module.exports = {
    host: process.env.host || 'localhost',
    server_port: process.env.port || '3006',
    client_port: '8080',
    db: "coll_project",
    mysql_username: 'root',
    mysql_password: '123',
    mysql_host: '3306',
    cookie_namespace:'coll_project_token'
    
    
};
