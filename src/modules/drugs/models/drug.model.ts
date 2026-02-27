import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'drugs' })
export class DrugModel extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.DECIMAL(10, 2))
  price: number;

  @Column(DataType.INTEGER)
  stock: number;

  @Column(DataType.STRING)
  manufacturer: string;
}
