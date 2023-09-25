const {createError} =require("./api");
const {statusCodes,statusMessages} = require("./constants");

// construct errors json object
const formatZodError = (errors) =>{
    let formattedErrors  = [];
    errors.forEach((error) => {
        let errorObj = {};
        errorObj[`${error.path[1]}`] = error.message;
        formattedErrors.push(errorObj);
    });
    return formattedErrors;
}

const validateRequest =
  (schema) =>
  async (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (err) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json(
          createError(statusMessages.BAD_REQUEST, formatZodError(err.errors))
        );
    }
  };

module.exports = {validateRequest, formatZodError}