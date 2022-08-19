import { Migration } from '@mikro-orm/migrations';

export class Migration20220819161831 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');

    this.addSql('drop table if exists "user" cascade;');
  }

  async down(): Promise<void> {
    this.addSql('create table "user" ("id" serial, "firstName" varchar not null default null, "lastName" varchar not null default null, "age" int4 not null default null, constraint "PK_cace4a159ff9f2512dd42373760" primary key ("id"));');

    this.addSql('drop table if exists "post" cascade;');
  }

}
