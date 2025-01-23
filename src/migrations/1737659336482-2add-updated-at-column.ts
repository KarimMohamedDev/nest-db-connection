import { MigrationInterface, QueryRunner } from 'typeorm';

export class add2UpdatedAtColumn1737659336482 implements MigrationInterface {
  name = 'add2UpdatedAtColumn1737659336482';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "updated_at" TIMESTAMP DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_at"`);
  }
}
