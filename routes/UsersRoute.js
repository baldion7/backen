import express from 'express'
import { GetUsersById, GetUsers } from '../controller/UsersController.js'

const router =express.Router()
router.get('/api/users/:id',GetUsersById)
router.get('/api/users',GetUsers)
export default router;