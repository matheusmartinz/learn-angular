import { Injectable } from '@angular/core';
import { Cliente } from '../cadastro/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  static repository_clientes = 'repo_clientes';

  postCliente(cliente: Cliente) {
    const storage = this.getAllClientes();
    storage.push(cliente);

    localStorage.setItem(ClienteService.repository_clientes, JSON.stringify(storage));
  }

  getAllClientes(): Array<Cliente> {
    const repositoryClientes = localStorage.getItem(ClienteService.repository_clientes);

    if (repositoryClientes) {
      const clientes: Array<Cliente> = JSON.parse(repositoryClientes);
      return clientes;
    }

    const clientes: Array<Cliente> = [];
    localStorage.setItem(ClienteService.repository_clientes, JSON.stringify(clientes));

    return clientes;
  }

  searchCliente(nomeBusca?: string): Array<Cliente> {
    const clientes = this.getAllClientes();

    if (!nomeBusca) {
      return this.getAllClientes();
    }

    return clientes.filter((cliente) => cliente.nome?.indexOf(nomeBusca) !== -1);
  }

  deleteCliente() {
    localStorage.removeItem;
  }
}
