const Todo = require("../models/todoModel");
const { createError } = require("../utils/api");
const { statusCodes, statusMessages } = require("../utils/constants");

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).populate("user", "-password").exec();
        res.status(statusCodes.OK).json({
            todos,
        });
    } catch (error) {
        res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .json(createError(statusMessages.INTERNAL_SERVER_ERROR, error));
    }
};

const getTodoById = async (req, res) => {
    try {
        const existingTodo = await Todo.findById(req.params.id);
        if (!existingTodo) {
            return res
                .status(statusCodes.NOT_FOUND)
                .json(createError("Todo not found"));
        }
        return res.status(statusCodes.OK).json({
            user: existingTodo,
        });
    } catch (error) {
        res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .json(createError(statusMessages.INTERNAL_SERVER_ERROR, error));
    }
};

const updateTodo = async (req, res) => {
    try {
        const existingTodo = await Todo.findById(req.params.id);
        if (!existingTodo) {
            return res
                .status(statusCodes.NOT_FOUND)
                .json(createError("Todo not found"));
        }
        const id = req.params.id;
        const updateTodoRequest = req.body;
        await Todo.findByIdAndUpdate(
            id,
            {
                task: updateTodoRequest.task,
                isComplete: updateTodoRequest.isComplete,
            },
        );
        return res.status(statusCodes.OK).json({
            message: "Todo updated succesfully",
        });
    } catch (error) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message: statusMessages.INTERNAL_SERVER_ERROR,
            detail: error,
        });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const existingTodo = await Todo.findById(req.params.id);
        if (!existingTodo) {
            return res
                .status(statusCodes.NOT_FOUND)
                .json(createError("Todo not found"));
        }
        const id = req.params.id;
        await Todo.findByIdAndDelete(id);
        return res.status(statusCodes.OK).json({
            message: "Todo deleted succesfully",
        });
    } catch (error) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message: statusMessages.INTERNAL_SERVER_ERROR,
            detail: error,
        });
    }
};

const createTodo = async (req, res) => {
    try {
        const todoRequest = req.body;
        let newTodo = new Todo({...todoRequest, user: res.locals.userId});
        newTodo = await newTodo.save();
        res.status(statusCodes.CREATED).json({
            todo: newTodo,
            message: "Todo created successfully",
        });
    } catch (error) {
        res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .json(createError(statusMessages.INTERNAL_SERVER_ERROR, error));
    }
};

module.exports = {getTodos, getTodoById, createTodo, updateTodo, deleteTodo};