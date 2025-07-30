
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardProduto from '../components/CardProduto';
import controller from '../controllers/controllerSingleton';
import { ProdutoMaquiagem } from '../models/ProdutoMaquiagem';
import './ProdutosPage.css';

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<ProdutoMaquiagem[]>([]);
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('todos');

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const [res1, res2] = await Promise.all([
          fetch("https://fakestoreapi.com/products"),
          fetch("https://dummyjson.com/products")
        ]);

        const fakeStore = await res1.json();
        const dummyJson = await res2.json();

        const lista1 = fakeStore.map((item: any) => (
          new ProdutoMaquiagem(
            Number(item.id),
            item.title || 'Sem nome',
            'FakeStore',
            parseFloat(item.price) || 0,
            item.description || 'Sem descrição',
            item.category || 'Outro',
            item.image || 'https://via.placeholder.com/150'
          )
        ));

        const lista2 = (dummyJson.products || []).map((item: any) => (
          new ProdutoMaquiagem(
            Number(item.id + 1000),
            item.title || 'Sem nome',
            'DummyJSON',
            parseFloat(item.price) || 0,
            item.description || 'Sem descrição',
            item.category || 'Outro',
            (item.thumbnail || item.images?.[0]) || 'https://via.placeholder.com/150'
          )
        ));

        setProdutos([...lista1, ...lista2]);
      } catch (error) {
        toast.error("Erro ao carregar produtos.");
      }
    };

    carregarProdutos();
  }, []);

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) &&
    (categoria === 'todos' || p.categoria?.toLowerCase().includes(categoria.toLowerCase()))
  );

  return (
    <div className="pagina-produtos">
      <h2>Produtos</h2>

      <div className="busca-container">
        <div className="search-wrapper">
          <span className="lupa">🔍</span>
          <input
            className="search-bar"
            type="text"
            placeholder="Buscar por nome, tipo ou marca..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <select className="filtro-categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="todos">Todas as categorias</option>
          <option value="beauty">Maquiagem</option>
          <option value="electronics">Eletrônicos</option>
          <option value="men's clothing">Moda Masculina</option>
          <option value="women's clothing">Moda Feminina</option>
        </select>
      </div>

      <div className="grid-produtos">
        {produtosFiltrados.length === 0 ? (
          <p className="mensagem-vazia">Nenhum produto foi encontrado. 😢</p>
        ) : (
          produtosFiltrados.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))
        )}
      </div>

      <ToastContainer />
    </div>
  );
}
