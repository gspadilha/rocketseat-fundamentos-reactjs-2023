import { Header } from './components/Header'
import { Post } from './components/Post'
import { SideBar } from './components/Siderbar'

import '../src/styles/global.css'

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post text="1" />
        </main>
      </div>
    </>
  )
}
