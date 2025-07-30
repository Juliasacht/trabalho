import { IPesquisavel } from '../interfaces/IPesquisavel';

export class ProdutoMaquiagem implements IPesquisavel {
  constructor(
    public id: number,
    public nome: string,
    public marca: string,
    public preco: number,
    public descricao: string,
    public categoria: string,
    public imagem: string
  ) {}

  pesquisarPorCriterio(criterio: string): boolean {
    return this.nome.toLowerCase().includes(criterio.toLowerCase()) ||
           this.marca.toLowerCase().includes(criterio.toLowerCase());
  }
}
