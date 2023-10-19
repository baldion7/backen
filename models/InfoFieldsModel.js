import { Sequelize, Model, DataTypes } from 'sequelize';
export class InfosFields extends Model{
  static init(sequelize){
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      value:{
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'infos_fields',
      timestamps: true
    })
  }
}