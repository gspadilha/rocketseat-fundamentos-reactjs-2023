import { dateFormatted, relativeDateFormatted } from '../../util/date'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

interface IContentProps {
  id: number
  type: string
  content: string
}

interface IPostProps {
  id: number
  author: {
    name: string
    role: string
    avatarUrl: string
  }
  content: Array<IContentProps>
  publishAt: Date
}

export function Post({ id, author, content, publishAt }: IPostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={dateFormatted(publishAt)}
          dateTime={publishAt.toISOString()}
        >
          Publicado {relativeDateFormatted(publishAt)}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(info => {
          switch (info.type) {
            case 'link':
              return (
                <a href="#">
                  <p key={info.id}>{info.content}</p>
                </a>
              )

            case 'paragraph':
              return <p key={info.id}>{info.content}</p>

            default:
              return <p key={info.id}>{info.content}</p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <button type="submit">Comentar</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
