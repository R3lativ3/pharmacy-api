import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { QueryTypes, Sequelize } from 'sequelize';
import { Drug } from './interfaces/drug.interface';

@Injectable()
export class DrugsRepository {
  constructor(@InjectConnection() private readonly sequelize: Sequelize) {}

  async findAll(): Promise<Drug[]> {
    return this.sequelize.query<Drug>('SELECT * FROM drugs', {
      type: QueryTypes.SELECT,
    });
  }

  async findById(id: number): Promise<Drug | undefined> {
    const results = await this.sequelize.query<Drug>(
      'SELECT * FROM drugs WHERE id = :id',
      {
        replacements: { id },
        type: QueryTypes.SELECT,
      },
    );
    return results[0];
  }
}
