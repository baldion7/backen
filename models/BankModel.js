import { DataTypes, Model } from 'sequelize'

export class Banks extends Model{
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
      nit:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
          notEmpty:true,
          len:[3,100]
        }
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      sequelize,
      tableName: 'Banks',
      timestamps: true
    })
  }
}