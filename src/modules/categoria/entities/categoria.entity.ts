import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity() 
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

    @Column()
    detalle: string;
}