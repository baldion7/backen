import { Sequelize, Model, DataTypes } from 'sequelize';

export class FormsFields extends Model{
  static init(sequelize){
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    }, {
      sequelize,
      tableName: 'forms_fields',
      timestamps: true
    })
  }
}