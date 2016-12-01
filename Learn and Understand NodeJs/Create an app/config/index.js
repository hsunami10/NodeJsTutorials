var configValues = require("./config");

// Object that returns the connection string to the database
module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds111718.mlab.com:11718/nodetodosample'
    }
}