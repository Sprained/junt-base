import { CreateUserBody } from '../../interfaces/UserInterface'
import UserRepository from '../../repositories/UserRepository'

class CreateUser {
  async execute(body: CreateUserBody): Promise<void> {
    await UserRepository.create(body)
  }
}

export default new CreateUser().execute
