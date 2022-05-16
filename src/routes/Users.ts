import { Router } from 'express'

import ValidationMiddleware from '../middlewares/ValidationMiddleware'
import UserController from '../controllers/UserController'
import { CreateUserValidation } from '../validations/user'

const routes = Router()

routes.route('/users').post(CreateUserValidation(), ValidationMiddleware, UserController.createUser)

export default routes
