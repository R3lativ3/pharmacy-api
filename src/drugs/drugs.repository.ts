import { Injectable, Optional } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { QueryTypes, Sequelize } from 'sequelize';
import { Drug } from './interfaces/drug.interface';
import { DrugModel } from './models/drug.model';

const MOCK_DRUGS: Drug[] = [
  {
    id: 1,
    name: 'Aspirin',
    description: 'Pain reliever and anti-inflammatory medication',
    price: 9.99,
    stock: 150,
    manufacturer: 'Bayer',
  },
  {
    id: 2,
    name: 'Amoxicillin',
    description: 'Antibiotic used to treat bacterial infections',
    price: 15.5,
    stock: 80,
    manufacturer: 'GlaxoSmithKline',
  },
  {
    id: 3,
    name: 'Lisinopril',
    description: 'Blood pressure medication',
    price: 12.75,
    stock: 120,
    manufacturer: 'AstraZeneca',
  },
  {
    id: 4,
    name: 'Metformin',
    description: 'Diabetes medication to control blood sugar',
    price: 18.25,
    stock: 95,
    manufacturer: 'Bristol-Myers Squibb',
  },
  {
    id: 5,
    name: 'Ibuprofen',
    description: 'Anti-inflammatory and pain relief medication',
    price: 8.99,
    stock: 200,
    manufacturer: 'Advil',
  },
];

@Injectable()
export class DrugsRepository {
  private readonly isDbConfigured = !!process.env.DB_HOST;

  constructor(
    @Optional() @InjectConnection() private readonly sequelize: Sequelize,
    @Optional()
    @InjectModel(DrugModel)
    private readonly drugModel: typeof DrugModel,
  ) {}

  // -------------------------------------------------------
  // RAW SQL approach — full control over the query
  // -------------------------------------------------------

  async findAll(): Promise<Drug[]> {
    if (!this.isDbConfigured) return MOCK_DRUGS;

    return this.sequelize.query<Drug>('SELECT * FROM drugs', {
      type: QueryTypes.SELECT,
    });
  }

  async findById(id: number): Promise<Drug | undefined> {
    if (!this.isDbConfigured) {
      return MOCK_DRUGS.find((drug) => drug.id === id);
    }

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
