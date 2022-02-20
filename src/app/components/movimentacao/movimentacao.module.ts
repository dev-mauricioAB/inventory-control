import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimentacaoComponent } from './movimentacao.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MovimentacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MovimentacaoComponent
      }
    ])
  ],
  exports: [
    MovimentacaoComponent
  ]
})
export class MovimentacaoModule { }
