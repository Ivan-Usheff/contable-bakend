import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from 'src/domains/categories/module/categories.module';
import { IncomesModule } from 'src/domains/incomes/module/incomes.module';
import { ItemsModule } from 'src/domains/items/module/items.module';
import { BudgetController } from '../controller/budget.controller';
import { BudgetsSchema } from '../schema/budgets.schema';
import { BudgetsService } from '../service/budgets.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'budgets', schema: BudgetsSchema }]), 
        CategoriesModule, 
        IncomesModule, 
        ItemsModule
    ],
    controllers: [
        BudgetController
    ],
    providers: [
        BudgetsService
    ],
    exports: [
        BudgetsService
    ],
})
export class BudgetsModule { }
