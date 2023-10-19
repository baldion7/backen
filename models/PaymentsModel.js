import { Sequelize, Model, DataTypes } from 'sequelize';

export class Payments extends Model{
  static init(sequelize){
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ip:{
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
      location:{
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
      method:{
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
      status:{
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      value:{
        type: DataTypes.FLOAT,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'payments',
      timestamps: true
    })
  }
}