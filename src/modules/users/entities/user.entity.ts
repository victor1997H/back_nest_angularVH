import {Column, Entity, JoinColumn, OneToOne,PrimaryGeneratedColumn} from "typeorm";
import { Persona } from "../../persona/entities/persona.entity";

@Entity('app_user') 
export class User {
   @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;   // ← CAMBIA nombre → name

  @Column({type:'varchar', length:255, unique: true })
  email: string;

  @Column({type:'varchar', length:200})
  password: string;

@OneToOne(() => Persona, persona => persona.user, {cascade: true})
persona: Persona;
}
