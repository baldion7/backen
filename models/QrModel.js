import { Sequelize, Model, DataTypes } from 'sequelize';

export class Qr extends Model{
  static init(sequelize){
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      image:{
        type: DataTypes.TEXT('long'),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'qr',
      timestamps: true
    })
  }
}