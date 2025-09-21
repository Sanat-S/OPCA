module.exports = (asyncErrorsFunc) => (req, res, next) => {
  Promise.resolve(asyncErrorsFunc(req, res, next)).catch(next);
};
