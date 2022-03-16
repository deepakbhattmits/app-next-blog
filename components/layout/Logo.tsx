import { FC } from 'react'
import styles from './Logo.module.css'
import BlogSVG from '../../assets/icons/icon-blog.svg'

const Logo: FC = (): JSX.Element => {
  return (
    <div className={styles.logo}>
      <BlogSVG className="icon icon-logo" />
    </div>
  )
}

export default Logo
