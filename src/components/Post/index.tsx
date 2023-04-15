import { dateFormatted, relativeDateFormatted } from '../../util/date'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import { SubmitEvent } from '../../interfaces/global'

import styles from './Post.module.css'
import { useState } from 'react'

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
  const [comments, setComments] = useState<Array<string>>([''])
  const [commentText, setCommentText] = useState<string>('')

  function enviarComentario(event: SubmitEvent) {
    event.preventDefault()

    setComments([...comments, commentText])

    setCommentText('')
  }

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
                <a key={info.id} href="#">
                  <p>{info.content}</p>
                </a>
              )

            case 'paragraph':
              return <p key={info.id}>{info.content}</p>

            default:
              return <p key={info.id}>{info.content}</p>
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={enviarComentario}>
        <strong>Deixe seu feedback!</strong>
        <textarea
          name="comentario"
          placeholder="Deixe um comentário"
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        />
        <button type="submit">Comentar</button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          const hasComment = comment !== ''

          return hasComment ? <Comment key={comment} comment={comment} /> : null
        })}
      </div>
    </article>
  )
}
