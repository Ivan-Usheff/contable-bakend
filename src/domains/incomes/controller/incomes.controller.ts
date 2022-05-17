import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { IncomesInterface, IncomesSearchDateInterface } from '../interface/incomes.interface';
import { IncomesService } from '../service/incomes.service';

@Controller('incomes')
export class IncomesController {
    constructor(private readonly incomesService: IncomesService) { }

    /**
     * Get All Incomes
     * Return message and status
     * @return {Promise<IncomesInterface[]>}
     */
    @Post('/')
    async getAllIncomesController(): Promise<IncomesInterface[]> {
        try {
            return await this.incomesService.getAllIncomesService();
        } catch (error) {
            console.log("🚀 ~ file: incomes.controller.ts ~ line 19 ~ IncomesController ~ getAllIncomesController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Create new Incom
     * Return message and status
     * @param {string} category
     * @return {Promise<IncomesInterface>}
     */
    @Post('/new/')
    async createIncomesController(
        @Body() category: string
    ): Promise<IncomesInterface> {
        try {
            return await this.incomesService.createIncomesService(category);
        } catch (error) {
            console.log("🚀 ~ file: incomes.controller.ts ~ line 37 ~ IncomesController ~ error", error)
            throw new BadRequestException('Error al crear la categorias');
        }
    }

    /**
     * Find One Incom
     * Return message and status
     * @param {IncomesSearchDateInterface} body
     * @return {Promise<IncomesInterface>}
     */
    @Post('/find-one/')
    async findOneIncomController(
        @Body() body: IncomesSearchDateInterface
    ): Promise<IncomesInterface> {
        try {
            return await this.incomesService.getIncomByMontAndYearService(body);
        } catch (error) {
            console.log("🚀 ~ file: incomes.controller.ts ~ line 55 ~ IncomesController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Find One Incom
     * Return message and status
     * @param {month: number} body
     * @return {Promise<IncomesInterface>}
     */
    @Post('/find-by-month/')
    async findByMontIncomController(
        @Body() body: {month: number}
    ): Promise<IncomesInterface | IncomesInterface[]> {
        try {
            return await this.incomesService.getIncomByMontService(body.month);
        } catch (error) {
            console.log("🚀 ~ file: incomes.controller.ts ~ line 73 ~ IncomesController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }

    /**
     * Find One Incom
     * Return message and status
     * @param {year: number} body
     * @return {Promise<IncomesInterface>}
     */
    @Post('/find-by-year/')
    async findByYearIncomController(
        @Body() body: {year: number}
    ): Promise<IncomesInterface | IncomesInterface[]> {
        try {
            return await this.incomesService.getIncomByYearService(body.year);
        } catch (error) {
            console.log("🚀 ~ file: incomes.controller.ts ~ line 91 ~ IncomesController ~ error", error)
            throw new BadRequestException('Error al buscar las categorias');
        }
    }
}
