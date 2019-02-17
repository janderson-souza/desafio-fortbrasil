import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
import { MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FormPageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    FormPageComponent
  ]
})
export class FormPageModule { }
