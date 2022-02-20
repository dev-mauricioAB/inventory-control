import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

import { Produto } from './../../models/Produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns = ['id', 'descricao', 'tipoProduto', 'valorNoFornecedor', 'quantidadeEmEstoque', 'action']

  constructor(
    private api: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.getAllProdutos().subscribe(produtos => this.produtos = produtos);
  }
}
