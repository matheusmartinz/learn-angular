import { Injectable } from '@angular/core';
import { ClienteService } from './services/cliente.service';

@Injectable({
  providedIn: 'root',
})
export class ValidateUser {
  constructor(private services: ClienteService) {}

  static repository = 'repo_clientes';

  validateEmail(email?: string): boolean {
    const emailLowerCase = (email ?? '').trim().toLowerCase();
    return this.services
      .getAllClientes()
      .some((emailInput) => (emailInput.email ?? '').trim().toLocaleLowerCase() === emailLowerCase);
  }

  validateCpf(cpf?: string): boolean {
    return this.services.getAllClientes().some((cpfInput) => cpfInput.cpf === cpf);
  }
}
