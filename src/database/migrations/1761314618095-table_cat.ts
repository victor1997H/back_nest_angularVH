import { MigrationInterface, QueryRunner } from "typeorm";

export class TableCat1761314618095 implements MigrationInterface {
    name = 'TableCat1761314618095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "detalle" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "direccion" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "direccion"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
