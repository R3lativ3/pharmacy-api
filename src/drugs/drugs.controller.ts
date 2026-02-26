import { Controller, Get, Param } from '@nestjs/common';
import { DrugsService } from './drugs.service';
import { Drug } from './interfaces/drug.interface';

@Controller('drugs')
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  @Get()
  getAllDrugs(): Drug[] {
    return this.drugsService.getAllDrugs();
  }

  @Get(':id')
  getDrugById(@Param('id') id: string): Drug | undefined {
    return this.drugsService.getDrugById(Number(id));
  }
}
