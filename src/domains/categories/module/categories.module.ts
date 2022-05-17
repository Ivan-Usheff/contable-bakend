import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from '../controller/categories.controller';
import { CategoriesSchema } from '../schema/categories.schema';
import { CategoriesService } from '../service/categories.service';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'categories', schema: CategoriesSchema }])],
    controllers: [CategoriesController],
    providers: [CategoriesService],
    exports: [CategoriesService],
})
export class CategoriesModule {}
