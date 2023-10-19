import { Forms } from '../models/FormsModel.js'
import { TypesForms } from '../models/TypesFormsModel.js'
import { FormsFields } from '../models/FormsFieldsModel.js'
import { InfosFields } from '../models/InfoFieldsModel.js'
import { Fields } from '../models/FieldsModel.js'
import { Users } from '../models/UsersModel.js'
import { UsersAccounts } from '../models/UsersAccountsModel.js'
import { Accounts } from '../models/AccountsModel.js'
import { TypesAccounts } from '../models/TypesAccountsModel.js'

export const GetFormsById = async (req, res) => {
    const {id}=req.params
    try{
        const forms = await Forms.findOne({
            where: {
                id: id
            },  include: [{
                model: TypesForms,
                include: [{
                    model: FormsFields,
                    include: [{
                        model: Fields,
                        include: [{
                            model: InfosFields
                        }]
                    }]
                }]
            },
                {
                    model:UsersAccounts,
                    include: [{
                      model:Users
                    },
                        {
                            model:Accounts,
                            include: [{
                                model:TypesAccounts
                            }]
                        }
                    ]
                }

            ]
        });
        res.status(200).json(forms);
    }catch (error){
        res.status(500).json({msg: error.message});
    }
}