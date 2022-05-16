import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUser1652653143528 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
