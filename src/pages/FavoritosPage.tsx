
import { useEffect, useState } from 'react';
import CardProduto from '../components/CardProduto';
import controller from '../controllers/controllerSingleton';
import { ProdutoMaquiagem } from '../models/ProdutoMaquiagem';

import styles from './FavoritosPage.module.css';

export default function FavoritosPage() {
  const [favoritos, setFavoritos] = useState<ProdutoMaquiagem[]>([]);

  useEffect(() => {
    const salvos = localStorage.getItem('favoritos');
    if (salvos) {
      const parsed = JSON.parse(salvos);
      const instancias = parsed.map((p: any) => new ProdutoMaquiagem(
        p.id, p.nome, p.marca, p.preco, p.descricao, p.tipo, p.imagem
      ));
      setFavoritos(instancias);
    } else {
      setFavoritos(controller.listarFavoritos());
    }
  }, []);

  
const remover = (produto: ProdutoMaquiagem) => {
  const atualizados = favoritos.filter((p) => p.id !== produto.id);
  setFavoritos(atualizados);
  localStorage.setItem('favoritos', JSON.stringify(atualizados));
  controller.removerFavorito(produto.id);
};


  
  return (
    <div className={styles.favoritosWrapper}>
      <div className={styles.favoritosContainer}>
        <h2>💖 Meus Favoritos</h2>
        {favoritos.length === 0 ? (
          <p>Nenhum produto foi favoritado ainda.</p>
        ) : (
          <div className={styles.grid}>
            {favoritos.map((produto) => (
              <CardProduto
                key={produto.id}
                produto={produto}
                aoRemover={() => remover(produto)}
                mostrarRemover={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

}
