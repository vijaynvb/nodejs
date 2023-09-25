require("dotenv/config");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const { createError } = require("./api");
const { statusCodes, statusMessages } = require("./constants");

const verifyToken =
  (role) => (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(statusCodes.UNAUTHORISED).json({
        error: createError(
          statusMessages.UNAUTHORISED,
          "Token missing in the header"
        ),
      });
    }
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      if (role) {
        if (role !== decoded.role)
          return res
            .status(statusCodes.UNAUTHORISED)
            .json(
              createError(
                statusMessages.UNAUTHORISED,
                "You dont have enough permission to perform this action"
              )
            );
      }
      res.locals.role = decoded.role;
      res.locals.userId = decoded.id;
      next();
    } catch (error) {
      return res.status(statusCodes.UNAUTHORISED).json({
        error: createError(statusMessages.UNAUTHORISED, "Invalid token"),
      });
    }
  };

module.exports = verifyToken;