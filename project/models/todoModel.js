const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema(
    {
        task: {
            type: String,
            required: true
        },
        isComplete: {
            type: Boolean,
            required: true,
            default: false
        },
        user : { type: Schema.Types.ObjectId, ref: 'User' }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('Todo', todoSchema);
