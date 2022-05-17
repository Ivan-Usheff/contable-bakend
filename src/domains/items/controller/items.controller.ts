import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ItemsChageCategoryInterface, ItemsInterface, ItemsUpdateInterface } from '../interface/items.interface';
import { ItemsService } from '../service/items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    /**
     * Get All Items
     * Return message and status
     * @return {Promise<ItemsInterface[]>}
     */
    @Post('/')
    async getAllItemsController(): Promise<ItemsInterface[]> {
        try {
            return await this.itemsService.getAllItemsService();
        } catch (error) {
            console.log("🚀 ~ file: items.controller.ts ~ line 19 ~ ItemsController ~ getAllItemsController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Create new Items
     * Return message and status
     * @param {string} Items
     * @return {Promise<ItemsInterface>}
     */
    @Post('/new/')
    async createItemsController(
        @Body() Items: string
    ): Promise<ItemsInterface> {
        try {
            return await this.itemsService.createItemsService(Items);
        } catch (error) {
            console.log("🚀 ~ file: items.controller.ts ~ line 37 ~ ItemsController ~ error", error)
            throw new BadRequestException('Error al crear la categorias');
        }
    }

    /**
     * Find One Item
     * Return message and status
     * @param { id: string } body
     * @return {Promise<ItemsInterface>}
     */
    @Post('/find-one/')
    async findOneItemsController(
        @Body() body: { id: string }
    ): Promise<ItemsInterface> {
        try {
            return await this.itemsService.getItemByIDService(body.id);
        } catch (error) {
            console.log("🚀 ~ file: items.controller.ts ~ line 55 ~ ItemsController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Update One Item
     * Return message and status
     * @param {ItemsUpdateInterface} body
     * @return {Promise<ItemsInterface>}
     */
    @Post('/update-one/')
    async updateOneItemsController(
        @Body() body: ItemsUpdateInterface
    ): Promise<ItemsInterface> {
        try {
            return await this.itemsService.editItemNameService(body);
        } catch (error) {
            console.log("🚀 ~ file: items.controller.ts ~ line 73 ~ ItemsController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }


    /**
     * Update One Item
     * Return message and status
     * @param {ItemsUpdateInterface} body
     * @return {Promise<ItemsInterface>}
     */
    @Post('/change-category/')
    async chageItemCategoryController(
        @Body() body: ItemsChageCategoryInterface
    ): Promise<ItemsInterface> {
        try {
            return await this.itemsService.chageItemCategoryService(body);
        } catch (error) {
            console.log("🚀 ~ file: items.controller.ts ~ line 92 ~ ItemsController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }
}
