const morgan = require("morgan");

const morganMiddleware = morgan("dev");

module.exports = morganMiddleware;
