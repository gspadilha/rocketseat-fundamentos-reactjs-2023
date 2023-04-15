import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'
import { Avatar } from '../Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/gspadilha.png" size="small" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Padilha</strong>
              <time dateTime="2022-04-15 07:17">Cerca a 1h atrás</time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Texto</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={15} />
            Aplaudir<span>10</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
