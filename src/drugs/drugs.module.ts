import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DrugsController } from './drugs.controller';
import { DrugsRepository } from './drugs.repository';
import { DrugsService } from './drugs.service';
import { DrugModel } from './models/drug.model';

@Module({
  imports: [SequelizeModule.forFeature([DrugModel])],
  controllers: [DrugsController],
  providers: [DrugsService, DrugsRepository],
})
export class DrugsModule {}
