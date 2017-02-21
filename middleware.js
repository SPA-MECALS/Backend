const config = require('./config.json');

module.exports = {
  default : function(req, res) {
    console.log(config.SAFAPS);
    res.json({ message: ':)'});
  },
  login : function(req, res) {
    res.json({ message: 'login event'});
  },
  logout : function(req, res) {
    res.json({ message: 'logout event'});
  },
  roleChange : function(req, res) {
    res.json({ message: 'roleChange event'});
  }
};
