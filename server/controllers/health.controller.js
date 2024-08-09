const httpStatus = require('http-status')

const healthcheck = async (req, res, next) => {
  try {
    const result = 'I am alive'

    return res.status(httpStatus.OK).json({
      success: true,
      status: httpStatus.OK,
      data: result
    })
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  healthcheck
}
