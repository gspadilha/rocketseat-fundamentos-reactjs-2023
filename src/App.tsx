import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/Siderbar';

import '../src/styles/global.css';

import styles from './App.module.css';

import { posts } from './database/posts';

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
  );
}
