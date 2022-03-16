import { FC } from 'react'
import styles from './AllPosts.module.css'
import PostsGrid from './PostsGrid'
interface IProp {
  posts: any[]
}
const AllPosts: FC<IProp> = ({ posts }): JSX.Element => (
  <section className={styles.posts}>
    <h1>All Posts</h1>
    <PostsGrid posts={posts} />
  </section>
)

export default AllPosts
