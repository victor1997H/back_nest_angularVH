import { DataSource } from 'typeorm';
import { ConfigService } from '../config/config.service'; // 👈 Usa tu propio servicio, no @nestjs/config

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION_POSTGRES',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get('HOST') || 'localhost',
        port: +configService.get('PORT_DB') || 5432,
        username: configService.get('USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
