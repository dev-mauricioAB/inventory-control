import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { v4 } from 'uuid';

import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { UtilsService } from 'src/app/services/utils.service';

import { Movimentacao } from './../../models/Movimentacao.model';
import { Produto } from 'src/app/models/Produto.model';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent implements OnInit {

  movimentacao!: Movimentacao;
  movimentacoes: Movimentacao[] = [];
  produtos!: Produto[];

  movimentacaoFormGroup!: FormGroup;

  displayedColumns = [
    'id',
    'descricao',
    'tipoMovimentacao',
    'valorDaMovimentacao',
    'dataDaMovimentacao',
    'quantidadeMovimentada'
  ];
  tipoMovimentacaoTxt = [
    'entrada',
    'saida'
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private movimentacaoService: MovimentacaoService,
    private produtoService: ProdutoService,
    private utils: UtilsService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('pt-br')
    this.iniciarValidacoesDoFormulario();
  }

  ngOnInit(): void {
    this.getAllMovimentacoes();
    this.getAllProdutos();
  }

  getAllMovimentacoes() {
    this.movimentacaoService.getAllMovimentacoes()
      .subscribe(movimentacao => this.movimentacoes = movimentacao);
  }

  getAllProdutos() {
    this.produtoService.getAllProdutos()
      .subscribe(produtos => this.produtos = produtos);
  }

  iniciarValidacoesDoFormulario() {
    this.movimentacaoFormGroup = this.formBuilder.group({
      produto: new FormControl(null, Validators.required),
      tipoMovimentacao: new FormControl(null, Validators.required),
      valorDaMovimentacao: new FormControl(null, Validators.required),
      dataDaMovimentacao: new FormControl(null, Validators.required),
      quantidadeMovimentada: new FormControl(null, Validators.required),
    })
  }

  finalizarMovimentacao() {
    if (this.movimentacaoFormGroup.valid) {
      this.verificarTipoMovimentacao();
    }
    else {
      this.utils.showMessage('Preencha todas informações obrigatórias antes de prosseguir.', true);
    }
  }

  verificarTipoMovimentacao() {
    const tipoMovimentacao = this.movimentacaoFormGroup.controls['tipoMovimentacao'].value;

    tipoMovimentacao === 'entrada'
      ? this.acaoDeEntrada()
      : this.acaoDeSaida();
  }

  acaoDeEntrada(): void {
    this.criarObjMovimentacao();

    this.movimentacaoService.create(this.movimentacao).subscribe(() => {
      this.utils.showMessage('Movimentação de entrada finalizada!')
      this.atualizaQuantidadeProduto(this.movimentacao.quantidadeMovimentada, this.movimentacao.tipoMovimentacao);
      this.getAllMovimentacoes();
    })
  }

  acaoDeSaida() {
    this.criarObjMovimentacao();

    this.produtoService.getProduto(this.movimentacao.produto.id).subscribe(produto => {
      debugger
      if (produto.quantidadeEmEstoque >= this.movimentacao.quantidadeMovimentada) {
        this.movimentacaoFormGroup.controls['quantidadeMovimentada'].setErrors(null);
        this.atualizaQuantidadeProduto(this.movimentacao.quantidadeMovimentada, this.movimentacao.tipoMovimentacao);
        this.utils.showMessage('Movimentação de saída finalizada!')
      }
      else {
        this.utils.showMessage('Quantidade indisponível!', true)
        this.movimentacaoFormGroup.controls['quantidadeMovimentada'].setErrors({ qtdInvalida: true });
      }
    })
  }

  criarObjMovimentacao() {
    this.movimentacao = {
      id: v4(),
      produto: this.getProdutoSelecionado(),
      dataDaMovimentacao: this.movimentacaoFormGroup.controls['dataDaMovimentacao'].value,
      quantidadeMovimentada: parseInt(this.movimentacaoFormGroup.controls['quantidadeMovimentada'].value),
      tipoMovimentacao: this.movimentacaoFormGroup.controls['tipoMovimentacao'].value,
      valorDaMovimentacao: this.movimentacaoFormGroup.controls['valorDaMovimentacao'].value,
    }
  }

  atualizaQuantidadeProduto(quantidadeMovimentada: number, tipoMovimentacao: string) {
    var produto = this.getProdutoSelecionado();
    debugger

    tipoMovimentacao === 'saida'
      ? produto.quantidadeEmEstoque -= quantidadeMovimentada
      : produto.quantidadeEmEstoque += quantidadeMovimentada;

    debugger
    this.produtoService.update(produto).subscribe(() => this.getAllProdutos());
  }

  getProdutoSelecionado(): Produto {
    return this.produtos.find(produto => this.movimentacaoFormGroup.controls['produto'].value === produto.id) as Produto;
  }

  cancel(): void {
    this.router.navigate(['/produtos'])
  }

}
