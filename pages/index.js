import Head from 'next/head'
import Image from 'next/image'
import doggo from '../public/pexels-lumn-406014.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Image className={styles.picture} src={doggo} alt='picture of dog showing half face'/>
      <div>hej lille hund</div>

  <footer className={styles.footer}>Hejdå</footer>
    </div>
  )
}
