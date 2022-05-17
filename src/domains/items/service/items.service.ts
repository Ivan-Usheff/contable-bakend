import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemsChageCategoryInterface, ItemsInterface, ItemsUpdateInterface } from '../interface/items.interface';


@Injectable()
export class ItemsService {
    constructor(
        @InjectModel('items')
        private readonly ItemsModel: Model<ItemsInterface>,
    ) { }

    /**
     * Get All Items
     * Return list of Items
     * @return {Promise<ItemsInterface[]>}
     */
    async getAllItemsService(): Promise<ItemsInterface[]> {
        try {
            return await this.ItemsModel.find();
        } catch (error) {
            console.log("🚀 ~ file: Items.service.ts ~ line 23 ~ ItemsService ~ getAllItemsService ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Create Item
     * Return message and status
     * @param {ItemsInterface} data
     * @return {Promise<ItemsInterface>}
     */
    async createItemsService(name: string): Promise<ItemsInterface> {
        try {
            return await new this.ItemsModel(name).save();
        } catch (error) {
            console.log("🚀 ~ file: Items.service.ts ~ line 38 ~ ItemsService ~ createItemsService ~ error", error)
            throw new BadRequestException('Error al ingresar categoria');
        }
    }

    /**
     * Get Items By tramit ID
     * Return ItemsInterface
     * @param {string} id
     * @return {Promise<ItemsInterface>}
     */
    async getItemByIDService(id: string): Promise<ItemsInterface> {
        try {
            return await this.ItemsModel.findOne({ _id: id });
        } catch (error) {
            console.log("🚀 ~ file: Items.service.ts ~ line 53 ~ ItemsService ~ getTrmitByID ~ error", error)
            throw new BadRequestException('Error al buscar la categoria');
        }
    }
    
    /**
     * Get Items By tramit ID
     * Return ItemsInterface
     * @param {string} belongsToId
     * @return {Promise<ItemsInterface>}
     */
     async getItemsByIDBelongsService(belongsToId: string): Promise<ItemsInterface[]> {
        try {
            return await this.ItemsModel.find({ belongsTo: belongsToId });
        } catch (error) {
            console.log("🚀 ~ file: items.service.ts ~ line 68 ~ ItemsService ~ getItemsByIDBelongsService ~ error", error)
            throw new BadRequestException('Error al buscar la categoria');
        }
    }

    /**
     * Get Items By tramit ID
     * Return ItemsInterface
     * @param {ItemsUpdateInterface} id
     * @return {Promise<ItemsInterface>}
     */
     async editItemNameService(Item: ItemsUpdateInterface): Promise<ItemsInterface> {
        try {
            return await this.ItemsModel.findOneAndUpdate({ _id: Item.id }, { name: Item.name, update: Date.now() }, { new: true });
        } catch (error) {
            console.log("🚀 ~ file: Items.service.ts ~ line 69 ~ ItemsService ~ editItemNameService ~ error", error)
            throw new BadRequestException('Error al editar la categoria');
        }
    }
    
    /**
     * Get Items By tramit ID
     * Return ItemsInterface
     * @param {ItemsChageCategoryInterface} Item
     * @return {Promise<ItemsInterface>}
     */
     async chageItemCategoryService(Item: ItemsChageCategoryInterface): Promise<ItemsInterface> {
        try {
            return await this.ItemsModel.findOneAndUpdate({ _id: Item.id }, { belongsTo: Item.belongsTo, update: Date.now() }, { new: true });
        } catch (error) {
            console.log("🚀 ~ file: items.service.ts ~ line 84 ~ ItemsService ~ chageItemCategoryService ~ error", error)
            throw new BadRequestException('Error al editar la categoria');
        }
    }
}
