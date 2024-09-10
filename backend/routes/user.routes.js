import express from 'express'
import { authUser , getUserProfile,registerUser ,updateUserProfile} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const Router = express.Router()



Router.post('/login',authUser)
Router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
Router.post('/', registerUser)

export default Router