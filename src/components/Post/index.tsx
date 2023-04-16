import { FormEvent, useState } from 'react'

import { dateFormatted, relativeDateFormatted } from '../../util/date'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import { SubmitEvent } from '../../interfaces/global'

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

type ICommentsProps = IPostProps

export function Post({ id, author, content, publishAt }: IPostProps) {
  const [comments, setComments] = useState<Array<ICommentsProps>>([])
  const [commentText, setCommentText] = useState<string>('')

  function enviarComentario(event: SubmitEvent) {
    event.preventDefault()

    let maior = 0
    comments.forEach(comment => {
      if (comment.id > maior) {
        maior = comment.id
      }
    })
    maior++

    const newComment = {
      id: maior,
      author: {
        name: 'string',
        role: 'string',
        avatarUrl: 'string',
      },
      content: [{ id: 1, type: 'paragraph', content: commentText }],
      publishAt: new Date(),
    }

    setComments([...comments, newComment])

    setCommentText('')
  }

  function deletarComentario(id: number) {
    const oldComments = comments.filter(comment => comment.id !== id)

    setComments([...oldComments])
  }

  function validarComentario(event: FormEvent<HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity('Este campo deve ser informado')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>any
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
          onChange={e => {
            e.currentTarget.setCustomValidity('')
            setCommentText(e.target.value)
          }}
          onInvalid={validarComentario}
          required
        />
        <button type="submit" disabled={commentText.length === 0}>
          Comentar
        </button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          const hasComment = comment.content.length > 0

          return hasComment ? (
            <Comment
              key={comment.id}
              comment={comment}
              deleteComment={id => deletarComentario(id)}
            />
          ) : null
        })}
      </div>
    </article>
  )
}
