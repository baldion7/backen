import express from 'express'
import { GetFormsById } from '../controller/FormsController.js'

const router =express.Router()
router.get('/api/forms/:id', GetFormsById)
export default router;