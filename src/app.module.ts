import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DrugsModule } from './modules/drugs/drugs.module';

@Module({
  imports: [DatabaseModule, DrugsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
