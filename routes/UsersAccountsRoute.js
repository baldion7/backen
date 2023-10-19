import express from 'express'
import { UpdateUsersAccounts } from '../controller/UsersAccounts.js'

const router =express.Router()
router.put('/api/useraccounts/:id',UpdateUsersAccounts)
export default router;