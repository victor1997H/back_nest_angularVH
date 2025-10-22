import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService], // ✅ minúscula
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT_DB'), // el + convierte a número
        username: config.get('USERNAME')||'root',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE'), // ✅ corregido
      });

      return dataSource.initialize();
    },
  },
];
