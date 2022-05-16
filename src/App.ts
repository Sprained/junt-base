import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import { Database } from './frameworks/Database'
import routes from './routes'

class App {
  server: any

  constructor() {
    // Database

    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.json())
  }

  routes() {
    this.server.use('/v1', routes)
  }
}

export default new App().server
