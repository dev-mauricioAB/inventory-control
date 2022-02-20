export class Produto {
  id: string;
  descricao: string;
  tipoProduto: 'eletronico' | 'eltrodomestico' | 'movel';
  valorNoFornecedor: number;
  quantidadeEmEstoque: number;

  constructor(id: string, descricao: string, tipoProduto: 'eletronico' | 'eltrodomestico' | 'movel', valorNoFornecedor: number, quantidadeEmEstoque: number) {
    this.id = id;
    this.descricao = descricao
    this.tipoProduto = tipoProduto
    this.valorNoFornecedor = valorNoFornecedor
    this.quantidadeEmEstoque = quantidadeEmEstoque
  }
}
