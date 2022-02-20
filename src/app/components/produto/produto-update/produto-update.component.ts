import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutoService } from 'src/app/services/produto.service';
import { UtilsService } from 'src/app/services/utils.service';

import { Produto } from './../../../models/Produto.model';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.scss']
})
export class ProdutoUpdateComponent implements OnInit {

  produto!: Produto;

  constructor(
    private api: ProdutoService,
    private utils: UtilsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id") as string;

    this.api.getProduto(id).subscribe(produto => this.produto = produto);
  }

  updateProduct(): void {
    this.api.update(this.produto).subscribe(() => {
      this.utils.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/produtos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/produtos"]);
  }

}
