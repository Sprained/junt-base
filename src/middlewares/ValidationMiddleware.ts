import { ValidationError, validationResult } from 'express-validator'
import { NextFunction, Request, Response } from 'express'

import { ValidationErrorHandler } from '../errors/ValidationErrorHandler'

class ValidationMiddleware {
  execute = (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors: ValidationError[] = validationResult(req).array()

      const parseError = this.parseErrors(errors)
      if (errors.length > 0) {
        throw new ValidationErrorHandler(parseError.statusCode, parseError.errors)
      }

      next()
    } catch (error) {
      if (error instanceof ValidationErrorHandler) {
        res.status(error.statusCode).send({ message: error.error })
      } else {
        res.status(500).send({ message: error.message })
      }
    }
  }

  parseErrors = (errors: ValidationError[]) => {
    const err = []
    const statusCode = 422

    errors.forEach((e) => {
      err.push(e.msg.id)
    })

    return {
      errors: err,
      statusCode,
    }
  }
}

export default new ValidationMiddleware().execute
