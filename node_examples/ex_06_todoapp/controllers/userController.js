
// db activites 

const { statusCodes } = require("../utils/constants");

const getUsers = async (req,res) => {
    res.send("get all users");
}

const getById = async (req,res) => {
    res.send("get a single user");
}

const signup = async (req,res) => {
    res.status(statusCodes.CREATED).json({
        user: "user created",
        message: "user created successfully"
    });
}
module.exports = {getUsers, getById, signup}