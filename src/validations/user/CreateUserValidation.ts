import { body, ValidationChain } from 'express-validator'

class CreateUserValidation {
  execute(): ValidationChain[] {
    return [
      body('email')
        .exists()
        .withMessage({ id: 'EMAIL_REQUIRED' })
        .bail()
        .isEmail()
        .withMessage({ id: 'EMAIL_INVALID' }),
    ]
  }
}

export default new CreateUserValidation().execute
