import { Migrator } from '@mikro-orm/migrations';
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Role } from './src/modules/role/entities/role.entity.js';
import { config } from 'dotenv';

config({
  path: '.env' + (process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''),
});

export default defineConfig({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  dbName: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,

  entities: [Role],

  migrations: {
    path: './dist/migrations',
    pathTs: './src/migrations',
  },

  driver: PostgreSqlDriver,
  extensions: [Migrator],
});
