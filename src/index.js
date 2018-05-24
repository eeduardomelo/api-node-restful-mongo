const server = require('./api/config/server')
require('./api/config/database')
require('./api/routes/api')(server)