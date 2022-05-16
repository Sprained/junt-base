import 'reflect-metadata'

import { DataSource } from 'typeorm'

class DatabaseS {
  appDataSource: DataSource

  constructor() {
    this.postgres()
  }

  async postgres() {
    this.appDataSource = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: ['src/entities/*.ts'],
      migrations: ['src/frameworks/migrations/*.ts'],
      logging: false,
      synchronize: false,
    })

    await this.appDataSource.initialize()
  }
}

const Database = new DatabaseS().appDataSource

export { Database }
