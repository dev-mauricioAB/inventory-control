import { Produto } from "./Produto.model";

export class Movimentacao {
  id: string;
  produto: Produto;
  tipoMovimentacao: 'entrada' | 'saida';
  valorDaMovimentacao: number;
  dataDaMovimentacao: string;
  quantidadeMovimentada: number;

  constructor(id: string, produto: Produto, tipoMovimentacao: 'entrada' | 'saida', valorDaMovimentacao: number, dataDaMovimentacao: string, quantidadeMovimentada: number) {
    this.id = id;
    this.produto = produto;
    this.tipoMovimentacao = tipoMovimentacao;
    this.valorDaMovimentacao = valorDaMovimentacao;
    this.dataDaMovimentacao = dataDaMovimentacao;
    this.quantidadeMovimentada = quantidadeMovimentada;
  }
}
