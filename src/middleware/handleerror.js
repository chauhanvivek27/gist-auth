const logger = require('../helpers/logger');
const { GeneralError } = require('../util/error');

const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message
    });
  }
  logger.error(err.message);
  return res.status(500).json({
    status: 'error',
    message: err.message
  });
}


module.exports = handleErrors;