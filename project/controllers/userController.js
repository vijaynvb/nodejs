require("dotenv/config");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_ROUND } = require("../utils/constants");
const { createError } = require("../utils/api");
const { statusCodes, statusMessages } = require("../utils/constants");

const JWT_SECRET = process.env.JWT_SECRET;
const USER_TOKEN_EXPIRY = process.env.USER_TOKEN_EXPIRY;

const getUsers = async (req, res) => {
    try {
          const users = await User.find({}, '-password'); // Exclude 'password' field
        res.status(statusCodes.OK).json({
            users,
        });
    } catch (error) {
        res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .json(createError(statusMessages.INTERNAL_SERVER_ERROR, error));
    }
};

const getUserById = async (req, res) => {
    try {
        const existingUser = await User.findById(req.params.id, '-password');
        if (!existingUser) {
            return res
                .status(statusCodes.NOT_FOUND)
                .json(createError("User not found"));
        }
        return res.status(statusCodes.OK).json({
            user: existingUser,
        });
    } catch (error) {
        res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .json(createError(statusMessages.INTERNAL_SERVER_ERROR, error));
    }
};

const updateUser = async (req, res) => {
    try {
        const existingUser = await User.findById(req.params.id);
        if (!existingUser) {
            return res
                .status(statusCodes.NOT_FOUND)
                .json(createError("User not found"));
        }
        const id = req.params.id;
        const updateUserRequest = req.body;
        await User.findByIdAndUpdate(
            id,
            {
                firstName: updateUserRequest.firstName,
                lastName: updateUserRequest.lastName,
            },
        );
        return res.status(statusCodes.OK).json({
            message: "User updated succesfully",
        });
    } catch (error) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message: statusMessages.INTERNAL_SERVER_ERROR,
            detail: error,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const existingUser = await User.findById(req.params.id);
        if (!existingUser) {
            return res
                .status(statusCodes.NOT_FOUND)
                .json(createError("User not found"));
        }
        const id = req.params.id;
        await User.findByIdAndDelete( id );
        return res.status(statusCodes.OK).json({
            message: "User deleted succesfully",
        });
    } catch (error) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message: statusMessages.INTERNAL_SERVER_ERROR,
            detail: error,
        });
    }
};

const signup = async (req, res) => {
    try {
        const user = req.body;
        let existingUser = await User.findOne({
             email: user.email
        });
        if (existingUser) {
            return res
                .status(statusCodes.BAD_REQUEST)
                .json(createError("This email is taken"));
        } else {
            const salt = await bcrypt.genSalt(SALT_ROUND);
            const hashedPassword = await bcrypt.hash(user.password, salt);
            let newUser = new User({
                ...user,
                password: hashedPassword,
            })
            newUser = await newUser.save();
            res.status(statusCodes.CREATED).json({
                user: {
                    id: newUser.id,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    email: newUser.email,
                    role: newUser.role,
                    createdAt: newUser.createdAt,
                    updatedAt: newUser.updatedAt,
                },
                message: "User created successfully",
            });
        }
    } catch (error) {
        res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .json(createError(statusMessages.INTERNAL_SERVER_ERROR, error));
    }
};

const login = async (req, res) => {
    try {
        const loginRequest = req.body;
        const existingUser = await User.findOne({
             email: loginRequest.email 
        });
        if (!existingUser) {
            return res.status(statusCodes.NOT_FOUND).json({
                error: "User not found",
                detail: "No user present with this email id",
            });
        }
        const validPassword = await bcrypt.compare(
            loginRequest.password,
            existingUser.password
        );
        if (!validPassword) {
            return res
                .status(statusCodes.UNAUTHORISED)
                .json(
                    createError(
                        statusMessages.UNAUTHORISED,
                        "Either the email/password is wrong"
                    )
                );
        }
        const token = jwt.sign(
            {
                id: existingUser.id,
                email: existingUser.email,
                role: existingUser.role,
            },
            JWT_SECRET,
            { expiresIn: parseInt(USER_TOKEN_EXPIRY) }
        );

        return res.status(statusCodes.OK).json({
            token,
            user: {
                email: existingUser.email,
                firstName: existingUser.firstName,
                lastName: existingUser.lastName,
            }
        });
    } catch (error) {
        res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .json(createError(statusMessages.INTERNAL_SERVER_ERROR));
    }
};

module.exports = { getUsers, getUserById, updateUser, login, signup, deleteUser };