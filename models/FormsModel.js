import { Sequelize, Model, DataTypes } from 'sequelize';

export class Forms extends Model {
  static init(sequelize){
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'forms',
      timestamps: true
    })
  }
}