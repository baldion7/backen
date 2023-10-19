import express from 'express'
import { GetAllPayments,GetPaymentsById } from '../controller/PaymentsController.js'

const router =express.Router()
router.get('/api/payments/:id',GetPaymentsById)
router.get('/api/payments',GetAllPayments)
export default router;