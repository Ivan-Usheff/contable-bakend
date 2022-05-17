import * as mongoose from 'mongoose';



export const CategoriesSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    createAt: { type: Date, default: Date.now() },
    update: { type: Date, default: Date.now() },
});