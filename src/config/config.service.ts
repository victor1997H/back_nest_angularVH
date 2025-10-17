import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envconfig: { [key: string]: string };

  constructor() {
    const isDevelopment = process.env.NODE_ENV !== 'production'; // nombre correcto

    if (isDevelopment) { // ✅ usar isDevelopment, no isDevelopmentEnv
      const envFilePath = __dirname + '/../../.env.development';
      const existsPath = fs.existsSync(envFilePath);
      if (!existsPath) {
        console.log('.env.development no existe DEVELOPMENT');
        process.exit(0)
      }
      this.envconfig = parse(fs.readFileSync(envFilePath));
    } else {
      const envFilePath = __dirname + '/../../.env.production';
      const existsPath = fs.existsSync(envFilePath);
      if (!existsPath) {
        console.log('.env.production no existe PRODUCTION');
        process.exit(0)
      }
      this.envconfig = parse(fs.readFileSync(envFilePath));
    }
  }

  get(key: string): string {
    return this.envconfig[key];
  }
}
