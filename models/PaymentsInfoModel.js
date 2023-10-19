import { Sequelize, Model, DataTypes } from 'sequelize';

export class PaymentsInfo extends Model{
  static init(sequelize){
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    }, {
      sequelize,
      tableName: 'payments_info',
      timestamps: true
    })
  }
}