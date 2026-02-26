import { Module } from '@nestjs/common';
import { DrugsController } from './drugs.controller';
import { DrugsRepository } from './drugs.repository';
import { DrugsService } from './drugs.service';

@Module({
  controllers: [DrugsController],
  providers: [DrugsService, DrugsRepository],
})
export class DrugsModule {}
