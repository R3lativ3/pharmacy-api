import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { QueryTypes, Sequelize } from 'sequelize';
import { Drug } from './interfaces/drug.interface';
import { DrugModel } from './models/drug.model';

@Injectable()
export class DrugsRepository {
  constructor(
    @InjectConnection() private readonly sequelize: Sequelize,
    @InjectModel(DrugModel) private readonly drugModel: typeof DrugModel,
  ) {}

  // -------------------------------------------------------
  // RAW SQL approach — full control over the query
  // -------------------------------------------------------

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

  // -------------------------------------------------------
  // MODEL (object) approach — Sequelize handles the SQL
  // -------------------------------------------------------

  async findAllWithModel(): Promise<DrugModel[]> {
    return this.drugModel.findAll();
  }

  async findByIdWithModel(id: number): Promise<DrugModel | null> {
    return this.drugModel.findByPk(id);
  }
}
