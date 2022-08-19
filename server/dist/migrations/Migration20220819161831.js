"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220819161831 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220819161831 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
            this.addSql('drop table if exists "user" cascade;');
        });
    }
    down() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "user" ("id" serial, "firstName" varchar not null default null, "lastName" varchar not null default null, "age" int4 not null default null, constraint "PK_cace4a159ff9f2512dd42373760" primary key ("id"));');
            this.addSql('drop table if exists "post" cascade;');
        });
    }
}
exports.Migration20220819161831 = Migration20220819161831;
//# sourceMappingURL=Migration20220819161831.js.map