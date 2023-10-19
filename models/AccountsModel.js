import { DataTypes, Model } from 'sequelize'

export class Accounts extends Model{
  static init(sequelize){
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      status:{
        type:DataTypes.BOOLEAN,
        allowNull: false
      }

    }, {
      sequelize,
      tableName: 'accounts',
      timestamps: true
    })
  }
}