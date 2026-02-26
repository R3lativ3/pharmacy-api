import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DrugModel } from '../drugs/models/drug.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT ?? '3306'),
      username: process.env.DB_USER ?? 'root',
      password: process.env.DB_PASSWORD ?? '',
      database: process.env.DB_NAME ?? 'pharmacy',
      models: [DrugModel],
      autoLoadModels: false,
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
