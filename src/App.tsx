import { Header } from './components/Header'
import { Post } from './components/Post'
import { SideBar } from './components/Siderbar'

import '../src/styles/global.css'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Guilherme Padilha',
      role: 'Developer',
      avatarUrl: 'https://github.com/gspadilha.png',
    },
    content: [
      { id: 1, type: 'paragraph', content: 'This is a paragraph' },
      { id: 2, type: 'paragraph', content: 'Lorem' },
      { id: 3, type: 'link', content: 'teste.com.br' },
    ],
    publishAt: new Date('2023-04-09 10:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Mayk Brito',
      role: 'Developer',
      avatarUrl: 'https://github.com/maykbrito.png',
    },
    content: [
      { id: 1, type: 'paragraph', content: 'This is a paragraph' },
      { id: 2, type: 'paragraph', content: 'Lorem' },
      { id: 3, type: 'link', content: 'teste.com.br' },
    ],
    publishAt: new Date('2023-04-10 10:00:00'),
  },
  {
    id: 3,
    author: {
      name: 'Diego Fernandes',
      role: 'Developer',
      avatarUrl: 'https://github.com/diego3g.png',
    },
    content: [
      { id: 1, type: 'paragraph', content: 'This is a paragraph' },
      { id: 2, type: 'paragraph', content: 'Lorem' },
      { id: 3, type: 'link', content: 'teste.com.br' },
    ],
    publishAt: new Date('2023-04-11 10:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </>
  )
}
