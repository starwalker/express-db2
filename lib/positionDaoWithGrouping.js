var dbConfig = require('./dbConfig.json');

var sql = 'SELECT ACC_NUM from ' +
  dbConfig.schema + '.VWDSC_ACC_SEC_PSN';

var cn = 'DATABASE=' + dbConfig.database + ';HOSTNAME=' + dbConfig.host +
  ';PORT=' + dbConfig.port + ';PROTOCOL=TCPIP;UID=' + dbConfig.userId +
  ';PWD=' + dbConfig.passwd + ';';

var ibmdb = require("ibm_db"), Pool = ibmdb.Pool, pool = new Pool();
var options = {};

module.exports = exports = function (req, res) {

  ibmdb.open(cn, options, function (err, connection) {
    try {
      if (err) {
        console.log(err);
        return;
      }
      connection.query(sql, function (err1, rows) {
        if (err1) {
          console.log(err1);
          return;
        }
        connection.close(function(err2) {
          if (err2) {
            console.log(err2);
          }
        });
        res.send(rows);
      });
    } catch (error) {
      console.log(error);
    }
  });
};
