import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const Router = express.Router()

// Auth and Registration
Router.post('/login', authUser)
Router.post('/', registerUser)

// User Profile
Router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

// User Management
Router.route('/')
  .get(protect, admin, getUsers)

Router.route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default Router
