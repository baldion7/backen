import express from 'express'
import { GetQr } from '../controller/QrController.js'

const router =express.Router()
router.get('/api/generete/qr/:id',GetQr)

export default router;