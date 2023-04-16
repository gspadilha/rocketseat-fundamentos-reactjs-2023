import { MouseEvent, useState } from 'react';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './Comment.module.css';

interface IContentProps {
  id: number;
  type: string;
  content: string;
}

interface IPostProps {
  id: number;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  content: Array<IContentProps>;
  publishAt: Date;
}

interface ICommentProps {
  comment: IPostProps;
  deleteComment: (id: number) => void;
}

export function Comment({ comment, deleteComment }: ICommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className={styles.comment}>
      <Avatar src='https://github.com/gspadilha.png' size='small' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Padilha</strong>
              <time dateTime='2022-04-15 07:17'>Cerca a 1h atrás</time>
            </div>
            <button
              title='Deletar Comentário'
              onClick={e => deleteComment(comment.id)}
            >
              <Trash size={24} />
            </button>
          </header>

          <div className={styles.content}>
            {comment.content.map(info => {
              switch (info.type) {
                case 'link':
                  return (
                    <a key={info.id} href='#'>
                      <p>{info.content}</p>
                    </a>
                  );

                case 'paragraph':
                default:
                  return <p key={info.id}>{info.content}</p>;
              }
            })}
          </div>
        </div>

        <footer>
          <button onClick={e => setLikeCount(likeCount + 1)}>
            <ThumbsUp size={15} />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
