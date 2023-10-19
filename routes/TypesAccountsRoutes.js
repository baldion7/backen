import express from 'express'
import { GetTypesAccounts } from '../controller/TypesAccountsController.js'


const router =express.Router()
router.get('/api/types-accounts/', GetTypesAccounts)
export default router;