import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } from './constants';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [__dirname + '/entities/*{.ts,.js}'],
  migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: false,
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/database/migrations',
  },
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export = typeOrmConfig;
