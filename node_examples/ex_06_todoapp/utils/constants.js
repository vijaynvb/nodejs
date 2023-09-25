const statusCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORISED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  };
  const statusMessages = {
    OK: "Success",
    CREATED: "Created",
    BAD_REQUEST: "Bad Request",
    UNAUTHORISED: "Unauthorised",
    FORBIDDEN: "Forbidden",
    NOT_FOUND: "Not Found",
    INTERNAL_SERVER_ERROR: "Internal Server Error",
  };

  module.exports= {statusMessages,statusCodes}