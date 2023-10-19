import { Sequelize, Model, DataTypes } from 'sequelize';

export class UsersAccounts extends Model{
  static init(sequelize){
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      balance:{
        type: DataTypes.FLOAT,
        allowNull:false,
        validate:{
          notEmpty:true,
          len:[1,100]
        },
      },
      max_qr:{
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
          notEmpty:true,
          len:[1,100]
        },
      }
    }, {
      sequelize,
      tableName: 'users_accounts',
      timestamps: true
    })
  }
}