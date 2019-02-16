import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindPessoaFisicaComponent } from './find-pessoa-fisica/find-pessoa-fisica.component';
import { FormPessoaFisicaComponent } from './form-pessoa-fisica/form-pessoa-fisica.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/find-pessoa-fisica',
    pathMatch: 'full'
  }
  , {
    path: 'find-pessoa-fisica',
    component: FindPessoaFisicaComponent,
  }
  , {
    path: 'form-pessoa-fisica',
    component: FormPessoaFisicaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaFisicaRoutingModule { }
