import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUpdatedAtColumn1737656486246 implements MigrationInterface {
  name = 'AddUpdatedAtColumn1737656486246';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "updated_at" TIMESTAMP DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_at"`);
  }
}
