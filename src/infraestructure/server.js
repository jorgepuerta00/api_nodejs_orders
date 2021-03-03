'use strict';

const Hapi = require('@hapi/hapi');
const authentication = require('./webserver/security/authentication');
const portServer = process.env.PORT || 3000;
const hostServer = '127.0.0.1';

const createServer = async () => {
    
    const server = Hapi.server({
        port: portServer,
       // host: hostServer,
        routes: {
            cors: {
                origin: ['*'],
                headers: ['Authorization', 'X-API-KEY', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Access-Control-Allow-Request-Method'],
                exposedHeaders: ['Accept'],
                additionalExposedHeaders: ['Accept'],
                maxAge: 60,
                credentials: true
            }
        }
    });

    await server.register([require('blipp')]);
    await server.register([require('hapi-auth-jwt2')]);
    server.auth.strategy('jwt', 'jwt',
        {
            key: authentication.secretkey,
            validate: authentication.validate,
            verifyOptions: {
                ignoreExpiration: true,
                algorithms: ['HS256']
            }
        });
    server.auth.default('jwt');
    server.route(require('./webserver/routes')); 

    return server;
};

module.exports = createServer;