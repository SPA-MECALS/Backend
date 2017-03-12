const chai = require('chai');
const chaiHTTP = require('chai-http');
const assert = require('assert');
const server = require('../server.js');
const should = chai.should();

chai.use(chaiHTTP);

describe('/login/', () => {
      it('it should login as an employee', (done) => {
        chai.request(server)
            .post('/login/')
            .send({
              email: 'jdeuf@gmail.com',
              password: 'jdeuf'
            })
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });
