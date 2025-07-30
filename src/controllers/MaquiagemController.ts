import { ProdutoMaquiagem } from '../models/ProdutoMaquiagem';

export class MaquiagemController {
  private produtos: ProdutoMaquiagem[] = [];
  private favoritos: ProdutoMaquiagem[] = [];

  adicionarProdutos(lista: ProdutoMaquiagem[]) {
    this.produtos = lista;
  }

  listarProdutos(): ProdutoMaquiagem[] {
    return this.produtos;
  }

  pesquisarProdutos(criterio: string): ProdutoMaquiagem[] {
    return this.produtos.filter(p => p.pesquisarPorCriterio(criterio));
  }

  adicionarFavorito(produto: ProdutoMaquiagem) {
    if (!this.favoritos.find(p => p.id === produto.id)) {
      this.favoritos.push(produto);
    }
  }

  listarFavoritos(): ProdutoMaquiagem[] {
    return this.favoritos;
  }

  removerFavorito(id: number) {
    this.favoritos = this.favoritos.filter(p => p.id !== id);
  }
}
