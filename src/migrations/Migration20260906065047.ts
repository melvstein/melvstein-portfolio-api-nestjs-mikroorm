import { Migration } from '@mikro-orm/migrations';

export class Migration20260906065047 extends Migration {
  override name = 'Migration20260906065047';

  override up(): void | Promise<void> {
    this.addSql(
      `create table "roles" ("id" uuid not null, "name" varchar(25) not null, "description" varchar(255) null, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`,
    );
    this.addSql(
      `alter table "roles" add constraint "roles_name_unique" unique ("name");`,
    );
  }
}
