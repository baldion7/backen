import { TypesForms } from '../models/TypesFormsModel.js'

export const GetTypesForms = async (req, res) => {
  try{
    const typesForms = await TypesForms.findAll();
    res.status(200).json(typesForms);
  }catch (error){
    res.status(500).json({msg: error.message});
  }
}