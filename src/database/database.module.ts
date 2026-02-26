import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DrugModel } from '../drugs/models/drug.model';

const isDatabaseConfigured = !!process.env.DB_HOST;

@Module({
  imports: isDatabaseConfigured
    ? [
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT ?? '3306'),
          username: process.env.DB_USER ?? 'root',
          password: process.env.DB_PASSWORD ?? '',
          database: process.env.DB_NAME ?? 'pharmacy',
          models: [DrugModel],
          autoLoadModels: false,
          synchronize: false,
        }),
      ]
    : [],
  exports: isDatabaseConfigured ? [SequelizeModule] : [],
})
export class DatabaseModule {}
