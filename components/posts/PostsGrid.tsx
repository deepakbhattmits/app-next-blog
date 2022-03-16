import { FC } from 'react'
import PostItem from './PostItem'
import styles from './PostsGrid.module.css'
interface IProp {
  posts: any[]
}
const PostsGrid: FC<IProp> = ({ posts }): JSX.Element => (
  <ul className={styles.grid}>
    {posts.map(({ title, image, excerpt, date, slug }) => (
      <PostItem
        key={slug}
        title={title}
        image={image}
        excerpt={excerpt}
        date={date}
        slug={slug}
      />
    ))}
  </ul>
)

export default PostsGrid
