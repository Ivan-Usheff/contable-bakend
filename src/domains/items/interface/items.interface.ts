export interface ItemsInterface {
    id?: string;
    belongsTo: string;
    name: string;
    createAt?: string;
    update: string;
}


export interface ItemsUpdateInterface {
    id: string;
    name: string;
}


export interface ItemsChageCategoryInterface {
    belongsTo: string;
    id: string;
}