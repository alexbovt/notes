import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    title: String,
    isDone: Boolean,
    author: String,
    date: String
});
