import { Pedido } from './pedido.entity';
import { Producto } from '../../producto/entities/producto.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pedido_productos')
export class PedidoProducto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad: number;

  @Column()
  precio_unitario: number;

  // Muchos registros pertenecen a un solo pedido
  @ManyToOne(() => Pedido, pedido => pedido.pedidoProducto)
  pedido: Pedido;

  // Muchos registros pertenecen a un solo producto
  @ManyToOne(() => Producto, producto => producto.pedidoProducto)
  producto: Producto;
}
