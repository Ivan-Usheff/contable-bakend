import * as mongoose from 'mongoose';
import { IncomesSchema } from '../../incomes/schema/incomes.schema';


export const ItemsBudgetsSchema = new mongoose.Schema({
    itemsId: { type: String, required: true },
    amount: { type: Number, required: true }
},{ _id : false });

export const CategoriesBudgetsSchema = new mongoose.Schema({
    categoriesId: { type: String, required: true },
    items: { type: [ItemsBudgetsSchema], required: true }
},{ _id : false });

export const BudgetsSchema = new mongoose.Schema({
    categories: { type: [CategoriesBudgetsSchema], required: true },
    incomesId: { type: String, required: true },
    createAt: { type: Date, default: Date.now() },
    update: { type: Date, default: Date.now() }
});