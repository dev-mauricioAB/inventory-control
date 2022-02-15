import { Produto } from "./Produto.model";

export class Movimentacao {
  produto: Produto;
  tipoMovimentacao: 'entrada' | 'saida';
  valorDaMovimentacao: number;
  dataDaMovimentacao: string;
  quantidadeMovimentada: number;

  constructor(produto: Produto, tipoMovimentacao: 'entrada' | 'saida', valorDaMovimentacao: number, dataDaMovimentacao: string, quantidadeMovimentada: number) {
    this.produto = produto;
    this.tipoMovimentacao = tipoMovimentacao;
    this.valorDaMovimentacao = valorDaMovimentacao;
    this.dataDaMovimentacao = dataDaMovimentacao;
    this.quantidadeMovimentada = quantidadeMovimentada;
  }
}
