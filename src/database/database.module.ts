import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { databaseProviders } from './database.providers';

@Module({
  imports: [
    ConfigModule, // 👈 Debe importarse aquí también
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // 👈 para acceder al ConfigService
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT_DB') || 5432,
        username: config.get('USERNAME'),
        password: config.get('PASSWORD'),
        database: config.get('DATABASE'),
        autoLoadEntities: true, // 👈 más simple y automático
        synchronize: true,
      }),
    }),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
