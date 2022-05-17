import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomesController } from '../controller/incomes.controller';
import { IncomesSchema } from '../schema/incomes.schema';
import { IncomesService } from '../service/incomes.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'incomes', schema: IncomesSchema }])],
    controllers: [IncomesController],
    providers: [IncomesService],
    exports: [IncomesService],
})
export class IncomesModule {}
