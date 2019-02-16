import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
