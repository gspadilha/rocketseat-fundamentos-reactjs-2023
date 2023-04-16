import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from '../Avatar';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
        alt=''
      />

      <div className={styles.profile}>
        <Avatar src='https://github.com/gspadilha.png' />
        <strong>Guilherme Padilha</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar Seu Perfil
        </a>
      </footer>
    </aside>
  );
}
