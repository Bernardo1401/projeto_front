// Header.jsx
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image 
            src="/images/logo.png" 
            alt="UFC Logo" 
            width={50} 
            height={50}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>UFC</span>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="/">Home</a></li>
            <li><a href="/lutadores">Lutadores</a></li>
            <li><a href="/sobre">Sobre-mim</a></li>
            <li><a href="#rankings">Rankings</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}