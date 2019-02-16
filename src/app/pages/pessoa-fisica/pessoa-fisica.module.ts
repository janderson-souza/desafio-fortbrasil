import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaFisicaRoutingModule } from './pessoa-fisica-routing.module';
import { FormPessoaFisicaComponent } from './form-pessoa-fisica/form-pessoa-fisica.component';
import { FindPessoaFisicaComponent } from './find-pessoa-fisica/find-pessoa-fisica.component';
import { FindPageModule } from 'src/app/core/components/find-page/find-page.module';
import { MatGridListModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [FormPessoaFisicaComponent,  FindPessoaFisicaComponent],
  imports: [
    CommonModule,
    PessoaFisicaRoutingModule,
    FindPageModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    NgxMaskModule.forRoot()

  ]
})
export class PessoaFisicaModule { }
