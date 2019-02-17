import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindPageComponent } from './find-page.component';
import { MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [FindPageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    FindPageComponent,
  ]
})
export class FindPageModule { }
