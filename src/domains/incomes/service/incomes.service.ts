import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IncomesInterface, IncomesSearchDateInterface } from '../interface/incomes.interface';


@Injectable()
export class IncomesService {
    constructor(
        @InjectModel('incomes')
        private readonly ImcomesModel: Model<IncomesInterface>,
    ) { }

    /**
     * Get All Imcomes
     * Return list of Imcomes
     * @return {Promise<IncomesInterface[]>}
     */
    async getAllIncomesService(): Promise<IncomesInterface[]> {
        try {
            return await this.ImcomesModel.find();
        } catch (error) {
            console.log("🚀 ~ file: imcomes.service.ts ~ line 23 ~ IncomesService ~ getAllIncomesService ~ error", error)
            throw new BadRequestException('Error al buscar los ingresos');
        }
    }

    /**
     * Create Incom
     * Return IncomesInterface
     * @param {string} name
     * @return {Promise<IncomesInterface>}
     */
    async createIncomesService(name: string): Promise<IncomesInterface> {
        try {
            return await new this.ImcomesModel(name).save();
        } catch (error) {
            console.log("🚀 ~ file: imcomes.service.ts ~ line 38 ~ IncomesService ~ createIncomesService ~ error", error)
            throw new BadRequestException('Error al ingresar ingreso');
        }
    }

    /**
     * Get Imcomes By tramit ID
     * Return IncomesInterface
     * @param {IncomesSearchDateInterface} data
     * @return {Promise<IncomesInterface>}
     */
    async getIncomByMontAndYearService(data: IncomesSearchDateInterface): Promise<IncomesInterface> {
        try {
            return await this.ImcomesModel.findOne({ year: data.year, month: data.month });
        } catch (error) {
            console.log("🚀 ~ file: imcomes.service.ts ~ line 53 ~ IncomesService ~ getTrmitByID ~ error", error)
            throw new BadRequestException('Error al buscar el ingreso');
        }
    }


    /**
     * Get Imcomes By Month
     * Return IncomesInterface
     * @param {number} month
     * @return {Promise<IncomesInterface>}
     */
    async getIncomByMontService(month: number): Promise<IncomesInterface | IncomesInterface[]> {
        try {
            return await this.findIncome({ month: month });
        } catch (error) {
            console.log("🚀 ~ file: incomes.service.ts ~ line 69 ~ IncomesService ~ getIncomByMontService ~ error", error)
            throw new BadRequestException('Error al buscar el ingreso');
        }
    }


    /**
     * Get Imcomes By Year
     * Return IncomesInterface
     * @param {number} year
     * @return {Promise<IncomesInterface>}
     */
    async getIncomByYearService(year: number): Promise<IncomesInterface | IncomesInterface[]> {
        try {
            return await this.findIncome({ year: year });
        } catch (error) {
            console.log("🚀 ~ file: incomes.service.ts ~ line 85 ~ IncomesService ~ getIncomByYearService ~ error", error)
            throw new BadRequestException('Error al buscar el ingreso');
        }
    }


    /**
     * Get Imcomes By Year
     * Return IncomesInterface
     * @param {string} id
     * @return {Promise<IncomesInterface>}
     */
     async getIncomByIdService(id: string): Promise<IncomesInterface> {
        try {
            return await this.ImcomesModel.findOne({ _id: id });
        } catch (error) {
            console.log("🚀 ~ file: incomes.service.ts ~ line 85 ~ IncomesService ~ getIncomByYearService ~ error", error)
            throw new BadRequestException('Error al buscar el ingreso');
        }
    }

    /**
     * Function to find Incom
     * Return IncomesInterface
     * @param {object} filtro
     * @return {Promise<IncomesInterface>}
     */
    private async findIncome(filtro: object): Promise<IncomesInterface | IncomesInterface[]> {
        try {
            return await this.ImcomesModel.find(filtro);
        } catch (error) {
            console.log("🚀 ~ file: incomes.service.ts ~ line 84 ~ IncomesService ~ findIncome ~ error", error)
            throw new BadRequestException('Error al buscar el ingreso');
        }
    }
}
