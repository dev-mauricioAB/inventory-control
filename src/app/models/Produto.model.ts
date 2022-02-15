export class Produto {
  codigo: number;
  descricao: string;
  tipoProduto: 'eletronico' | 'eltrodomestico' | 'movel';
  valorNoFornecedor: number;
  quantidadeEmEstoque: number;

  constructor(codigo: number, descricao: string, tipoProduto: 'eletronico' | 'eltrodomestico' | 'movel', valorNoFornecedor: number, quantidadeEmEstoque: number) {
    this.codigo = codigo
    this.descricao = descricao
    this.tipoProduto = tipoProduto
    this.valorNoFornecedor = valorNoFornecedor
    this.quantidadeEmEstoque = quantidadeEmEstoque
  }
}
