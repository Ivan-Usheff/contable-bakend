import { CategoriesUpdateInterface } from 'src/domains/categories/interface/categories.interface';
import { ItemsInterface } from 'src/domains/items/interface/items.interface';
import { IncomesInterface } from '../../incomes/interface/incomes.interface';

export interface ItemsBudgetsInterface {
    itemsId: string,
    name?: string
    amount: number
}
export interface CategoriesBudgetsInterface {
    categoriesId: string,
    name?: string
    items: ItemsBudgetsInterface[]
}

//Interface to create a new Budget
export interface BudgetsInterface {
    id?: string,
    categories: CategoriesBudgetsInterface[];
    incomesId?: string; 
    incomes: IncomesInterface;
    createdAt?: string,
    updatedAt?: string
}


export interface CategoriesModelInterface extends CategoriesUpdateInterface{
    items: ItemsInterface[]
}

//Interface to get a Budget Model
export interface BudgetsModelInterface{
    categories: CategoriesModelInterface[],
    incomes: IncomesInterface
}





