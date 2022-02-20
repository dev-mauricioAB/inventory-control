import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () => import('./components/produto/produto.module').then(m => m.ProdutoModule)
  },
  {
    path: 'movimentacao',
    loadChildren: () => import('./components/movimentacao/movimentacao.module').then(m => m.MovimentacaoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
