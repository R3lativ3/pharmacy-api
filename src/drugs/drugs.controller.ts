import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { DrugsService } from './drugs.service';
import { Drug } from './interfaces/drug.interface';

@ApiTags('drugs')
@Controller('drugs')
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all drugs' })
  getAllDrugs(): Promise<Drug[]> {
    return this.drugsService.getAllDrugs();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a drug by ID' })
  @ApiParam({ name: 'id', description: 'Drug ID', type: Number })
  getDrugById(@Param('id') id: string): Promise<Drug | undefined> {
    return this.drugsService.getDrugById(Number(id));
  }
}
