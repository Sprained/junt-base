import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
  })
  email: string

  constructor(props: Omit<User, 'id'>) {
    Object.assign(this, props)
  }
}
