import { ProdutoMaquiagem } from './ProdutoMaquiagem';

export class Batom extends ProdutoMaquiagem {
  constructor(
    id: number,
    nome: string,
    marca: string,
    preco: number,
    descricao: string,
    imagem: string
  ) {
    super(id, nome, marca, preco, descricao, 'Batom', imagem);
  }
}
