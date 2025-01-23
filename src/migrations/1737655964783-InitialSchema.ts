import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1737655964783 implements MigrationInterface {
    name = 'InitialSchema1737655964783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "created_at" TIMESTAMP DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`);
    }

}
