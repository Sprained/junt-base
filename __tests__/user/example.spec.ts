import 'dotenv/config'
import request from 'supertest'

import app from '../../src/App'
import { Database } from '../../src/frameworks/Database'

describe('Create', () => {
  beforeEach(async () => {
    // Database
  })
  const bodySend: any = {
    email: 'teste@email.com',
  }

  it('Success', async () => {
    await request(app).post('/v1/users').send(bodySend).expect(201)
    console.log(process.env.DB_HOST)
  })
})
