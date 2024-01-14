import { ClienteDTO } from 'src/adapters/inbound/rest/v1/presenters/cliente.dto';
import { ClienteModel } from 'src/adapters/outbound/models/cliente.model';

export interface IClienteDTOFactory {
  criarClienteDTO(cliente: ClienteModel): Promise<ClienteDTO>;
  criarListaClienteDTO(clientes: ClienteModel[]): Promise<ClienteDTO[] | []>;
}

export const IClienteDTOFactory = Symbol('IClienteDTOFactory');