import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaFisicaRoutingModule } from './pessoa-fisica-routing.module';
import { FormPessoaFisicaComponent } from './form-pessoa-fisica/form-pessoa-fisica.component';
import { FindPessoaFisicaComponent } from './find-pessoa-fisica/find-pessoa-fisica.component';

@NgModule({
  declarations: [FormPessoaFisicaComponent,  FindPessoaFisicaComponent],
  imports: [
    CommonModule,
    PessoaFisicaRoutingModule
  ]
})
export class PessoaFisicaModule { }
