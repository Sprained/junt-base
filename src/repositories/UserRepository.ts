import { CreateUserBody } from '../interfaces/UserInterface'
import { Database } from '../frameworks/Database'
import { User } from '../entities/User'

class UserRepository {
  userRepository = Database.getRepository(User)

  async create(body: CreateUserBody): Promise<void> {
    const user = new User(body)

    await this.userRepository.save(user)
  }
}

export default new UserRepository()
