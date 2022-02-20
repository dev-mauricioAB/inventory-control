import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ProdutoService } from 'src/app/services/produto.service';
import { UtilsService } from 'src/app/services/utils.service';

import { Produto } from './../../../models/Produto.model';

import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.scss']
})
export class ProdutoDeleteComponent implements OnInit {

  produto!: Produto;

  constructor(
    private api: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private utils: UtilsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.api.getProduto(id).subscribe((product) => {
      this.produto = product;
    });
  }

  removerUmProduto(): void {
    this.produto.quantidadeEmEstoque -= 1;
    this.api.update(this.produto).subscribe(produto => {
      this.utils.showMessage(`Produto ${this.produto.descricao} excluído com sucesso. Quantide atual: ${produto.quantidadeEmEstoque}`, true);
      this.router.navigate(["/produtos"]);
    });
  }

  removerProdutoDoEstoque(): void {
    // const dialogRef = this.dialog.open(DialogComponent);

    // dialogRef.afterClosed().subscribe(data => {
    //   debugger
    // })

    this.api.delete(this.produto.id).subscribe(produto => {
      this.utils.showMessage(`Produto ${this.produto.descricao} removido do estoque.`, true);
      this.router.navigate(["/produtos"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/produtos"]);
  }

}
