import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css';

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'small' | 'normal';
}

export function Avatar({ size = 'normal', ...props }: IAvatarProps) {
  const className = size === 'normal' ? styles.avatar : styles.commentAvatar;

  return <img className={className} {...props} />;
}
