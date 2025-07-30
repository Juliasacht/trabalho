
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        <h1 style={{ fontSize: '3rem', color: '#ffc107' }}>🌟 Vitrine Geral</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '1rem auto', whiteSpace: 'pre-line' }}>
          Bem-vindo à Vitrine Geral! Aqui, seu gosto encontra tudo que precisa — e até o que nem sabia que queria.
          🥑 Tem fome? Temos delícias para todos os paladares: lanches rápidos, ingredientes especiais, sobremesas que arrancam suspiros.
          📱 Curte tecnologia? Nós temos diversos e desejados acessórios que fazem seu dia render.
          👗 Estilo é seu sobrenome? Roupas que combinam com você, seu mood e até seu próximo post no feed.
          🕶️ Precisa renovar a casa, presentear alguém ou só se dar aquele mimo? A gente entende!

          Vitrine Geral: sua loja, seu rolê, seu momento. Entre, explore, descubra — aqui, cada clique é uma descoberta que vale a pena.
        </p>

        <ul className={styles.highlights}>
          <li>🍔 Lanches incríveis para qualquer fome</li>
          <li>💄 Maquiagens e cuidados com a beleza</li>
          <li>📱 Acessórios e gadgets tecnológicos</li>
          <li>👚 Moda e estilo com sua cara</li>
          <li>🛋️ Itens para transformar sua casa</li>
        </ul>
      </main>
    </div>
  );
}
