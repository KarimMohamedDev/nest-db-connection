import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveCreatedAtColumn1737659457950 implements MigrationInterface {
  name = 'RemoveCreatedAtColumn1737659457950';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "created_at" TIMESTAMP DEFAULT now()`,
    );
  }
}
