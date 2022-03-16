import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './PostItem.module.css'

interface IProp {
  title: string
  image: string
  excerpt: string
  date: string
  slug: string
}
const PostItem: FC<IProp> = ({
  title,
  image,
  excerpt,
  date,
  slug,
}): JSX.Element => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`
  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem
