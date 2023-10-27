import { ProdutoEntity } from './produto.entity';
import { ClienteEntity } from './cliente.entity';
import { StatusPedido } from 'src/utils/pedido.enum';

export class PedidoEntity {
  itensPedido: ProdutoEntity[];
  statusPedido?: StatusPedido;
  cliente?: ClienteEntity;
  id?: string;

  constructor(
    itensPedido: ProdutoEntity[],
    statusPedido?: StatusPedido,
    cliente?: ClienteEntity,
    id?: string,
  ) {
    this.id = id;
    this.itensPedido = itensPedido;
    this.cliente = cliente;
    this.statusPedido = statusPedido;
  }
}
