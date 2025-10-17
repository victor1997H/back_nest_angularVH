import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers'; // ✅ nombre correcto
import { ConfigService } from 'src/config/config.service'; // si usas tu propio ConfigService

@Module({
  providers: [...databaseProviders, ConfigService],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
