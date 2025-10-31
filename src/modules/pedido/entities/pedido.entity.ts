import { Cliente } from '../../cliente/entities/cliente.entity';
import { PedidoProducto } from './pedidoproducto.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @Column()
  estado: number;

  @Column()
  observaciones: string;

  // Un pedido pertenece a un cliente
  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;

  // Un pedido puede tener muchos productos (relación con la tabla intermedia)
  @OneToMany(() => PedidoProducto, pedprod => pedprod.pedido)
  pedidoProducto: PedidoProducto[];
}
