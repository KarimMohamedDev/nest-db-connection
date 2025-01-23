import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot();

const configService = new ConfigService();
export const dataSourceOptions = (
  configService: ConfigService,
): DataSourceOptions => ({
  type: 'postgres',
  host: configService.get<string>('PG_HOST'),
  port: configService.get<number>('PG_PORT'),
  username: configService.get<string>('PG_USERNAME'),
  password: configService.get<string>('PG_PASSWORD'),
  database: configService.get<string>('PG_DATABASE'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migrations',
});

export const AppDataSource = new DataSource(dataSourceOptions(configService));
