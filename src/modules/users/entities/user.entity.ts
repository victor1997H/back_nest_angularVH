import { Persona } from '../../persona/entities/persona.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  password: string;

  @OneToOne(()=>Persona,persona=>persona.user,{cascade:true})
  persona:Persona
}