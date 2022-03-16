import Image from 'next/image'

import styles from './Hero.module.css'

const Hero = (): JSX.Element => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/deepakbhatt.jpg"
          alt="An image showing  Deepak"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Deepak</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  )
}

export default Hero
