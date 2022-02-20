import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid';

import { ProdutoService } from 'src/app/services/produto.service';

import { Produto } from './../../../models/Produto.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.scss']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    id: v4(),
    descricao: '',
    tipoProduto: 'movel',
    quantidadeEmEstoque: 0,
    valorNoFornecedor: 0
  }

  constructor(
    private api: ProdutoService,
    private utils: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.api.create(this.produto).subscribe(() => {
      this.utils.showMessage('Produto criado!')
      this.router.navigate(['/produtos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/produtos'])
  }

}
