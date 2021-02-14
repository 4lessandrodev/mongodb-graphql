import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  password: 'mongo',
  username: 'mongo',
  database: 'test',
  authSource: 'admin',
  useNewUrlParser: true,
  loggerLevel: 'info',
  logging: true,
  synchronize: true,
  useUnifiedTopology: true,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/**/migrations/**/*.{ts,js}'],
  subscribers: ['dist/**/*.subscriber.{ts,js}'],
};
