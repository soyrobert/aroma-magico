import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListaCafesComponent } from './lista-cafes/lista-cafes.component';

@NgModule({
  declarations: [
    ListaCafesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListaCafesComponent
  ]
})
export class CafesModule { }
