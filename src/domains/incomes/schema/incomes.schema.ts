import * as mongoose from 'mongoose';



export const IncomesSchema = new mongoose.Schema({
    income: { type: Object, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    createAt: { type: Date, default: Date.now() },
    update: { type: Date, default: Date.now() },
});