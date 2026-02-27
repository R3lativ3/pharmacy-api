import { Injectable } from '@nestjs/common';
import { DrugsRepository } from './drugs.repository';
import { Drug } from './interfaces/drug.interface';

@Injectable()
export class DrugsService {
  constructor(private readonly drugsRepository: DrugsRepository) {}

  getAllDrugs(): Promise<Drug[]> {
    return this.drugsRepository.findAll();
  }

  getDrugById(id: number): Promise<Drug | undefined> {
    return this.drugsRepository.findById(id);
  }
}
