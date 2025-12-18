import { Component, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../cadastro/cliente';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '../utils/dialog/dialog/dialog';

@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatAnchor,
    MatButtonModule,
    MatTableModule,
    Dialog,
  ],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss',
})
export class Consulta {
  listaClientes: Array<Cliente> = [];
  colunasTable: Array<string> = ['id', 'nome', 'cpf', 'dataNascimento', 'email', 'acoes'];
  searchNome: string = '';

  constructor(private service: ClienteService) {}
  readonly dialog = inject(MatDialog);

  ngOnInit() {
    this.listaClientes = this.service.searchCliente('');
  }

  pesquisaCliente() {
    this.listaClientes = this.service.searchCliente(this.searchNome);
  }

  editar(id?: string) {
    console.log(id);
  }

  openDialog(): void {
    this.dialog.open(Dialog);
  }
}
