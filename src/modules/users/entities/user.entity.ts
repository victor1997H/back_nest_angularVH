import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity() 
export class user {
  @PrimaryGeneratedColumn()
  id: number;
}