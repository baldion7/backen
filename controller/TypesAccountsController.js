import { TypesAccounts } from '../models/TypesAccountsModel.js'

export const GetTypesAccounts = async (req, res) => {
  try{
    const typesAccounts = await TypesAccounts.findAll();
    res.status(200).json(typesAccounts);
  }catch (error){
    res.status(500).json({msg: error.message});
  }
}