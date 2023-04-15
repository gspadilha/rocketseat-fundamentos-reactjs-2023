import styles from './Post.module.css'

interface IPostProps {
  text: string
}

export function Post({ text }: IPostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/gspadilha.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme Padilha</strong>
            <span>Developer</span>
          </div>
        </div>

        <time dateTime="2022-04-15 07:17">Publicado a 1h</time>
      </header>

      <div className={styles.content}>
        <p>Bom dia!</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          molestias sunt placeat delectus, modi repellendus est facere atque
          numquam fugit minima at quod sit vero cupiditate laborum assumenda
          nesciunt omnis!
        </p>
        <p>
          <a href="#">Teste</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <button type="submit">Comentar</button>
      </form>
    </article>
  )
}
