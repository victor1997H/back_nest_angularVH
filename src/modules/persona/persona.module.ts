import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { Persona } from './entities/persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])], // 👈 AGREGA ESTA LÍNEA
  controllers: [PersonaController],
  providers: [PersonaService],
  exports: [TypeOrmModule], // 👈 AGREGA ESTO TAMBIÉN
})
export class PersonaModule {}
