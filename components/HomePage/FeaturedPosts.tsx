import { FC } from 'react'
import PostsGrid from '../posts/PostsGrid'
import classes from './FeaturedPosts.module.css'
interface IProp {
  posts: any[]
}
const FeaturedPosts: FC<IProp> = ({ posts }) => (
  <section className={classes.latest}>
    <h2>Featured Posts</h2>
    <PostsGrid posts={posts} />
  </section>
)

export default FeaturedPosts
