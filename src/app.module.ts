import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './domains/items/module/items.module';
import { IncomesModule } from './domains/incomes/module/incomes.module';
import { CategoriesModule } from './domains/categories/module/categories.module';
import { AuthModule } from './domains/auth/module/auth.module';
import { BudgetsModule } from './domains/budget/module/budgets.module';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB),
    AuthModule,
    BudgetsModule,
    CategoriesModule,
    IncomesModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
