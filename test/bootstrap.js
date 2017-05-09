require('dotenv').config({silent: true});
process.env.NODE_ENV = 'test';

const chai = require('chai');
chai.use(require('chai-http'));
chai.use(require('chai-as-promised'));

const server = require('../server/app');

global.expect = chai.expect;
global.testHelpers = {
    server,
    request: () => chai.request(server)
};

console.log('==========> tests bootstrap');
