import express from 'express'
import { GetTypesForms } from '../controller/TypesFormsController.js'


const router =express.Router()
router.get('/api/types-forms/', GetTypesForms)
export default router;