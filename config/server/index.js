const express = require('express');
const server = express();
require('dotenv').config();

server.use(express.json());

const port = (process.env.PORT) ? process.env.PORT : 8000;
server.listen(port, () => {
    console.log(`Api connected to port ${port}.`)
})

const routes = require('../../src/routes');
server.use('/', routes);
