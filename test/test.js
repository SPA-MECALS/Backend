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

describe('/logout/', () => {
  it('it should logout an employee', (done) => {
    chai.request(server)
        .post('/logout/')
        .send({
          user_id: "be7cf567591",
          workstation_id: "dd4850b04e3",
          facility_pub_id: "2464b839666"
        })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  });
});

describe('/workstations/', () => {
  it('it should GET all workstations', (done) => {
    chai.request(server)
        .get('/workstations/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  });
});
