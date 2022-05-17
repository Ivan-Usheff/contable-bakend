import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { BudgetsInterface, BudgetsModelInterface, CategoriesBudgetsInterface, CategoriesModelInterface, ItemsBudgetsInterface } from '../interface/budgets.interface';
import { BudgetsService } from '../service/budgets.service';

import { CategoriesService } from 'src/domains/categories/service/categories.service';
import { CategoriesInterface } from 'src/domains/categories/interface/categories.interface';

import { IncomesService } from '../../incomes/service/incomes.service';
import { IncomesInterface } from 'src/domains/incomes/interface/incomes.interface';

import { ItemsService } from 'src/domains/items/service/items.service';

@Controller('budgets')
export class BudgetController {
    constructor(
        private readonly budgetsService: BudgetsService,
        private readonly categoriesService: CategoriesService,
        private readonly incomesService: IncomesService,
        private readonly itemService: ItemsService,

    ) { }


    /**
     * Get All Budgets
     * Return message and status
     * @return {Promise<BudgetsInterface[]>}
     */
    @Post('/')
    async getAllBudgetsController(): Promise<BudgetsInterface[]> {
        try {
            return await this.budgetsService.getAllBudgetsService();
        } catch (error) {
            console.log("🚀 ~ file: budget.controller.ts ~ line 39 ~ BudgetController ~ getAllBudgetsController ~ error", error);
            throw new BadRequestException('Error al buscar lso presupuestos');
        }
    }


    /**
     * Get Budget by ID
     * Return message and status
     * @param { id: string } body
     * @return {Promise<BudgetsInterface>}
     */
    @Post('/get-by-id/')
    async getBudgetsByIdController(
        @Body() body: { id: string },
    ): Promise<BudgetsInterface> {
        let budgetsFind = { categories: [], incomes: {} } as BudgetsInterface;
        let categoriesFind = { items: [] } as CategoriesBudgetsInterface;
        try {
            const budgetData = await this.budgetsService.findBudgetsByIdService(body.id);
            
            for (let i = 0; i < budgetData.categories.length; i++) {
                let c = budgetData.categories[i];
                const categoryData = await this.categoriesService.getCategoryByIDService(c.categoriesId);

                categoriesFind.name = categoryData.name;
                categoriesFind.categoriesId = categoryData.id;
                
                let itemsFind = {} as ItemsBudgetsInterface;
                for (let e = 0; e < c.items.length; e++) {
                    let it = c.items[e];
                    const itemData = await this.itemService.getItemByIDService(it.itemsId);
                    
                    itemsFind.itemsId = itemData.id;
                    itemsFind.name = itemData.name;
                    itemsFind.amount = it.amount;

                    const cloneItemFind = Object.assign({}, itemsFind);
                    categoriesFind.items.push(cloneItemFind);
                }
                
                budgetsFind.categories.push({ ...categoriesFind });
                categoriesFind = { items: [] } as CategoriesBudgetsInterface;
            }

            budgetsFind.incomes = await this.incomesService.getIncomByIdService(budgetData.incomesId)

            return budgetsFind;
        } catch (error) {
            console.log("🚀 ~ file: budget.controller.ts ~ line 57 ~ BudgetController ~ error", error);
            throw new BadRequestException('Error al buscar lso presupuestos');
        }
    }

    /**
     * Get Model Budgets
     * Return message and status
     * @return {Promise<BudgetsInterface[]>}
     */
    @Post('/get-model-budget/')
    async getModelBudgetsController(): Promise<BudgetsModelInterface> {

        let budgetsModel = { categories: [], incomes: {} } as BudgetsModelInterface;
        let categories = [{}] as CategoriesInterface[];
        let categoriesModel = {} as CategoriesModelInterface;
        let incomesModel = {} as IncomesInterface
        
        try {
            categories = await this.categoriesService.getAllCategoriesService();

            for (let i = 0; i < categories.length; i++) {
                let k = categories[i];

                categoriesModel.id = k.id;
                categoriesModel.name = k.name;
                categoriesModel.items = await this.itemService.getItemsByIDBelongsService(k.id);

                budgetsModel.categories.push({ ...categoriesModel });
            }

            incomesModel = await this.incomesService.getIncomByMontAndYearService({ year: 2022, month: 2 });
            budgetsModel.incomes = incomesModel;

            return budgetsModel;
        } catch (error) {
            console.log("🚀 ~ file: budget.controller.ts ~ line 87 ~ BudgetsController ~ getAllBudgetsController ~ error", error);
            throw new BadRequestException('Error al buscar el modelo de presupuestos');
        }
    }

    /**
     * Create Budgets
     * Return message and status
     * @param { BudgetsInterface } budget
     * @return {Promise<BudgetsInterface[]>}
     */
    @Post('/new/')
    async createNewBudgetsController(
        @Body() budget: BudgetsInterface
    ): Promise<BudgetsInterface> {
        try {
            return await this.budgetsService.createBudgetsService(budget);
        } catch (error) {
            console.log("🚀 ~ file: budget.controller.ts ~ line 105 ~ BudgetController ~ error", error);
            throw new BadRequestException('Error al buscar lso presupuestos');
        }
    }

}

