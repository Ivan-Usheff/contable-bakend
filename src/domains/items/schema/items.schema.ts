import * as mongoose from 'mongoose';



export const ItemsSchema = new mongoose.Schema({
    belongsTo: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    createAt: { type: Date, default: Date.now() },
    update: { type: Date, default: Date.now() },
});