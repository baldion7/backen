import { UsersAccounts } from '../models/UsersAccountsModel.js'

export const UpdateUsersAccounts = async (req, res) => {
  const UserAccounts = await UsersAccounts.findOne({
    where: {
      id: req.params.id
    }
  });
  if (!UserAccounts) return res.status(404).json({msg: "Datos no encontrados"});
  const { balances } = req.body;
    const balan = parseFloat(UserAccounts.balance) + parseFloat(balances);
    try {
     await UsersAccounts.update({
      balance: balan
    }, {
      where: {
        id: UserAccounts.id
      }
    });
    res.status(200).json({msg: "User Update"});
  }catch (error){
    res.status(500).json({msg: error.message});
  }
}