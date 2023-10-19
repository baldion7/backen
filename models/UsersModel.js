import { DataTypes, Model } from 'sequelize'

export class Users extends Model{
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
      },
      document:{
        type: DataTypes.TEXT('long'),
        allowNull:false,
      },
      phone:{
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: '_users',
      timestamps: true
    })
  }
}