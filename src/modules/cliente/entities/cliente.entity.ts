import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_completo: string;

  @Column()
  dni: string;

  @Column()
  telefono: string;

  // Relación inversa: un cliente puede tener varios pedidos
  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];
}
