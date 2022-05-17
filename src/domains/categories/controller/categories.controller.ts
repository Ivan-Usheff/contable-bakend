import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CategoriesInterface, CategoriesUpdateInterface } from '../interface/categories.interface';
import { CategoriesService } from '../service/categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    /**
     * Get All Categories
     * Return message and status
     * @return {Promise<CategoriesInterface[]>}
     */
    @Post('/')
    async getAllCategoriesController(): Promise<CategoriesInterface[]> {
        try {
            return await this.categoriesService.getAllCategoriesService();
        } catch (error) {
            console.log("🚀 ~ file: categories.controller.ts ~ line 19 ~ CategoriesController ~ getAllCategoriesController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Create new Category
     * Return message and status
     * @param {string} category
     * @return {Promise<CategoriesInterface>}
     */
    @Post('/new/')
    async createCategoriesController(
        @Body() category: string
    ): Promise<CategoriesInterface> {
        try {
            return await this.categoriesService.createCategoriesService(category);
        } catch (error) {
            console.log("🚀 ~ file: categories.controller.ts ~ line 37 ~ CategoriesController ~ error", error)
            throw new BadRequestException('Error al crear la categorias');
        }
    }

    /**
     * Find One Category
     * Return message and status
     * @param { id: string } body
     * @return {Promise<CategoriesInterface>}
     */
    @Post('/find-one/')
    async findOneCategoryController(
        @Body() body: { id: string }
    ): Promise<CategoriesInterface> {
        try {
            return await this.categoriesService.getCategoryByIDService(body.id);
        } catch (error) {
            console.log("🚀 ~ file: categories.controller.ts ~ line 55 ~ CategoriesController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Update One Category
     * Return message and status
     * @param {CategoriesUpdateInterface} body
     * @return {Promise<CategoriesInterface>}
     */
    @Post('/update-one/')
    async updateOneCategoryController(
        @Body() body: CategoriesUpdateInterface
    ): Promise<CategoriesInterface> {
        try {
            return await this.categoriesService.editCategoryNameService(body);
        } catch (error) {
            console.log("🚀 ~ file: categories.controller.ts ~ line 73 ~ CategoriesController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }
}
