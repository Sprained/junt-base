import { NextFunction, Request, Response } from 'express'
import { Handler } from '../errors/Hander'

import { CreateUser } from '../services/user'

class UserController {
  createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body
    try {
      CreateUser({ email })

      return res.status(201).send()
    } catch (error) {
      if (error instanceof Handler) {
        res.status(error.statusCode).send({ message: error.error })
      } else {
        res.status(500).send({ message: error.message })
      }
    }
  }
}

export default new UserController()
