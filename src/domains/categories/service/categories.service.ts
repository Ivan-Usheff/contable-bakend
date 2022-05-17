import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoriesInterface, CategoriesUpdateInterface } from '../interface/categories.interface';


@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel('categories')
        private readonly CategoriesModel: Model<CategoriesInterface>,
    ) { }

    /**
     * Get All Categories
     * Return list of Categories
     * @return {Promise<CategoriesInterface[]>}
     */
    async getAllCategoriesService(): Promise<CategoriesInterface[]> {
        try {
            return await this.CategoriesModel.find();
        } catch (error) {
            console.log("🚀 ~ file: categories.service.ts ~ line 23 ~ CategoriesService ~ getAllCategoriesService ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Create Category
     * Return message and status
     * @param {string} name
     * @return {Promise<CategoriesInterface>}
     */
    async createCategoriesService(name: string): Promise<CategoriesInterface> {
        try {
            return await new this.CategoriesModel(name).save();
        } catch (error) {
            console.log("🚀 ~ file: categories.service.ts ~ line 38 ~ CategoriesService ~ createCategoriesService ~ error", error)
            throw new BadRequestException('Error al ingresar categoria');
        }
    }

    /**
     * Get Categories By tramit ID
     * Return CategoriesInterface
     * @param {string} id
     * @return {Promise<TramitInterface>}
     */
    async getCategoryByIDService(id: string): Promise<CategoriesInterface> {
        try {
            return await this.CategoriesModel.findOne({ _id: id });
        } catch (error) {
            console.log("🚀 ~ file: categories.service.ts ~ line 53 ~ CategoriesService ~ getTrmitByID ~ error", error)
            throw new BadRequestException('Error al buscar la categoria');
        }
    }
    
    /**
     * Get many Categories By ID
     * Return CategoriesInterface
     * @param {string[]} id
     * @return {Promise<TramitInterface[]>}
     */
     async getManyCategoryByIDService(id: string[]): Promise<CategoriesInterface[]> {
        try {
            return await this.CategoriesModel.findOne({ _id:  { $in: [id]} });
        } catch (error) {
            console.log("🚀 ~ file: categories.service.ts ~ line 53 ~ CategoriesService ~ getTrmitByID ~ error", error)
            throw new BadRequestException('Error al buscar la categoria');
        }
    }
    

    /**
     * Get Categories By tramit ID
     * Return CategoriesInterface
     * @param {CategoriesUpdateInterface} id
     * @return {Promise<TramitInterface>}
     */
     async editCategoryNameService(category: CategoriesUpdateInterface): Promise<CategoriesInterface> {
        try {
            return await this.CategoriesModel.findOneAndUpdate({ _id: category.id }, { name: category.name, update: Date.now() }, { new: true });
        } catch (error) {
            console.log("🚀 ~ file: categories.service.ts ~ line 69 ~ CategoriesService ~ editCategoryNameService ~ error", error)
            throw new BadRequestException('Error al editar la categoria');
        }
    }
}
