import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from '../controller/items.controller';
import { ItemsSchema } from '../schema/items.schema';
import { ItemsService } from '../service/items.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'items', schema: ItemsSchema }])],
    controllers: [ItemsController],
    providers: [ItemsService],
    exports: [ItemsService],
})
export class ItemsModule {}
