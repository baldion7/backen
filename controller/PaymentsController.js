import { Payments } from '../models/PaymentsModel.js'
import { InfosFields } from '../models/InfoFieldsModel.js'
import { PaymentsInfo } from '../models/PaymentsInfoModel.js'
import { Qr } from '../models/QrModel.js'


export const GetPaymentsById = async (req, res) => {
  const {id}=req.params
  try{
    const payments = await Payments.findOne({
      where: {
        id: id
      },
        include: [{
            model: PaymentsInfo,
            include: [{
                model: InfosFields
            }]
        },{
           model: Qr
        }]
    });
    res.status(200).json(payments);
  }catch (error){
    res.status(500).json({msg: error.message});
  }
}

export const GetAllPayments = async (req, res) => {
  try {
    const payments = await Payments.findAll({

      include: [{
        model: PaymentsInfo,
        include: [{
          model: InfosFields
        }]
      },{
          model: Qr
      }]
    })
    res.status(200).json(payments)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }};

export const CreatePayment = async (req, res) => {
  const { ip, location, method, status, value, qrid } = req.body;
  try {
    const payment = await Payments.create({
      ip: ip,
      location: location,
      method: method,
      status: status,
      value: value,
      QrId: qrid
    });
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}