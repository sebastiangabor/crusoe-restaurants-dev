var configValues = require ('./config');

module.exports = {

  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds111461.mlab.com:11461/crusoe-dev'
  }
}
