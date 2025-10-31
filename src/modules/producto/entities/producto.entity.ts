import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { PedidoProducto } from '../../pedido/entities/pedidoproducto.entity';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  precio: number;

  @Column()
  stock: number;

  // Muchos productos pertenecen a una sola categoría
  @ManyToOne(() => Categoria, categoria => categoria.productos)
  categoria: Categoria;

  // Un producto puede estar en muchos pedidos
  @OneToMany(() => PedidoProducto, pedprod => pedprod.producto)
  pedidoProducto: PedidoProducto[];
}
