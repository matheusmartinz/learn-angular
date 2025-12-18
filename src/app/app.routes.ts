import { Routes } from '@angular/router';
import { Consulta } from './consulta/consulta.component';
import { Cadastro } from './cadastro/cadastro.component';

export const routes: Routes = [
  { path: 'cadastro', component: Cadastro },
  { path: 'consulta', component: Consulta },
];
