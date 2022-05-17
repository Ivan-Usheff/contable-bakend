export interface IncomeTypeInterface {
    type: string,
    amount: number
}

export interface IncomesInterface {
    _id?: string,
    income: IncomeTypeInterface[];
    month: number;
    year: number;
    createAt?: string;
    update?: string;
}

export interface IncomesSearchDateInterface {
    month: number;
    year: number;
}
