import { Injectable } from '@nestjs/common';
import { Drug } from './interfaces/drug.interface';

@Injectable()
export class DrugsService {
  private readonly drugs: Drug[] = [
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
      price: 15.50,
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

  getAllDrugs(): Drug[] {
    return this.drugs;
  }

  getDrugById(id: number): Drug | undefined {
    return this.drugs.find((drug) => drug.id === id);
  }
}
