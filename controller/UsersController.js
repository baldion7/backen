import { Users } from '../models/UsersModel.js'
import { UsersAccounts } from '../models/UsersAccountsModel.js'
import { Accounts } from '../models/AccountsModel.js'
import { TypesAccounts } from '../models/TypesAccountsModel.js'
import { Forms } from '../models/FormsModel.js'
import { Qr } from '../models/QrModel.js'

export const GetUsersById = async (req, res) => {
    const { id } = req.params;
    try {
        const users = await Users.findOne({
           
            where: {
                id: id
            },
            include: [
                {
                    model: UsersAccounts,
                    include: [
                        {
                            model: Accounts,
                            include: [
                                {
                                    model: TypesAccounts
                                }
                            ]
                        },
                        {
                            model: Forms,
                            include: [
                                {
                                    model: Qr
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
export const GetUsers = async (req, res) => {
    try {
        const users = await Users.findAll({

        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}