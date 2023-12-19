import * as dotenv from 'dotenv';
import { env } from 'process';
import { DataSource } from 'typeorm';
dotenv.config();
export const typeormDataSource = new DataSource({
  type: 'mysql',
  host: env.DB_HOST,
  port: +env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  synchronize: false,
  dropSchema: false,
  timezone: 'Z',
});
