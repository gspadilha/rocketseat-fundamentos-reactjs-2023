import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <span>X</span>
      <strong>Feed</strong>
    </header>
  );
}
