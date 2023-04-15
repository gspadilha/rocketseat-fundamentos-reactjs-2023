interface IPostProps {
  text: string
}

export function Post({ text }: IPostProps) {
  return <p>{text}</p>
}
