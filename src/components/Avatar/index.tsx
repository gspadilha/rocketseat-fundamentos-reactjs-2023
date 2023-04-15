import styles from './Avatar.module.css'

interface IAvatarProps {
  src: string
  size?: 'small' | 'normal'
}

export function Avatar({ src, size = 'normal' }: IAvatarProps) {
  const className = size === 'normal' ? styles.avatar : styles.commentAvatar

  return <img className={className} src={src} alt="" />
}
