import { ClienteService } from './../services/cliente.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './cliente';
import { FormsModule } from '@angular/forms';
import { ValidateUser } from '../validateUser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilsGlobal } from '../utils/utils';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro {
  constructor(
    private services: ClienteService,
    private validator: ValidateUser,
    private snackBar: MatSnackBar,
    public utils: UtilsGlobal
  ) {}

  cliente: Cliente = Cliente.newCliente();

  private limparForm() {
    this.cliente.nome = '';
    this.cliente.email = '';
    this.cliente.cpf = '';
    this.cliente.dataNascimento = undefined;
  }

  camposVazios(): boolean {
    return (
      !this.cliente.nome || !this.cliente.email || !this.cliente.cpf || !this.cliente.dataNascimento
    );
  }

  validateAllInputs() {
    if (this.camposVazios()) {
      return this.snackBar.open('Preencha todos os campos obrigatórios', '', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['snackError'],
      });
    }

    if (this.validator.validateCpf(this.cliente.cpf))
      return this.snackBar.open('CPF já utilizado', '', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['snackError'],
      });
    if (this.validator.validateEmail(this.cliente.email)) {
      return this.snackBar.open('Email já utilizado', '', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['snackError'],
      });
    }
    return;
  }

  cadastrar() {
    if (this.validateAllInputs()) {
      return;
    }
    this.services.postCliente(this.cliente);
    this.snackBar.open('Cadastro realizado', '', {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['snackInfo'],
    });
    return this.limparForm();
  }
}
