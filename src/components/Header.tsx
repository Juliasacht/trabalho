
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>✨ Vitrine Geral</h1>
      <nav className={styles.nav}>
        <Link to="/" className={location.pathname === '/' ? styles.active : ''}>🏡 Início</Link>
        <Link to="/produtos" className={location.pathname === '/produtos' ? styles.active : ''}>🛍️ Produtos</Link>
        <Link to="/favoritos" className={location.pathname === '/favoritos' ? styles.active : ''}>⭐ Favoritos</Link>
      </nav>
    </header>
  );
}
