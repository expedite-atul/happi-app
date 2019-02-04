`use strict`;
//connect to hapi server localhost:3000
const Hapi = require('hapi')
const server = Hapi.server
({
    port:3000,
    host:'localhost'
});

require('./routes/routes')(server);
const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
init();