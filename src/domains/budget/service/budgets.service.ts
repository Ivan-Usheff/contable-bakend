import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BudgetsInterface } from '../interface/budgets.interface';

@Injectable()
export class BudgetsService {
    constructor(
        @InjectModel('budgets')
        private readonly BudgetsModel: Model<BudgetsInterface>,
    ) { }

    /**
     * Get All Budgets
     * Return list of Budgets
     * @return {Promise<BudgetsInterface[]>}
     */
    async getAllBudgetsService(): Promise<BudgetsInterface[]> {
        try {
            return await this.BudgetsModel.find();
        } catch (error) {
            console.log("🚀 ~ file: budgets.service.ts ~ line 22 ~ BudgetsService ~ getAllBudgetsService ~ error", error);
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Create new Report
     * Return new Report
     * @param {BudgetsInterface} budget
     * @return {Promise<BudgetsInterface[]>}
     */
    async createBudgetsService(budget: BudgetsInterface): Promise<BudgetsInterface> {
        try {
            return await new this.BudgetsModel(budget).save();
        } catch (error) {
            console.log("🚀 ~ file: budgets.service.ts ~ line 37 ~ BudgetsService ~ createBudgetsService ~ error", error);
            throw new BadRequestException('Error al buscar las categorias');
        }
    }
    /**
     * Update Report
     * Return new Report
     * @param {string} id
     * @return {Promise<BudgetsInterface[]>}
     */
    async findBudgetsByIdService(id: string): Promise<BudgetsInterface> {
        try {
            return await this.BudgetsModel.findOne({ _id: id });
        } catch (error) {
            console.log("🚀 ~ file: budgets.service.ts ~ line 54 ~ BudgetsService ~ updateBudgetsService ~ error", error);
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Update Report
     * Return new Report
     * @param {BudgetsInterface} budget
     * @return {Promise<BudgetsInterface[]>}
     */
    async updateBudgetsService(budget: BudgetsInterface): Promise<BudgetsInterface> {
        try {
            const budgetObject = await this.BudgetsModel.findOne({ _id: budget.id });
            budgetObject.update( {"$set": budget}, { returnNewDocument: true } );
            return budgetObject;
        } catch (error) {
            console.log("🚀 ~ file: budgets.service.ts ~ line 54 ~ BudgetsService ~ updateBudgetsService ~ error", error);
            throw new BadRequestException('Error al buscar las categorias');
        }
    }




}
