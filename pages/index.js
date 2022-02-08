import {Head} from '../components/Head';
import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer'
import {Hero} from '../components/Hero';
import styles from '../styles/Home.module.css'
import { getHomeHero } from "../lib/Hero";


export default function Home({ hero }) {

  return (
    <div className={styles.container}>
      <Head description="here my description" >
        Create Next App
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Hero hero={hero} />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const hero = (await getHomeHero()) || {};
  return {
    props: { hero },
  };
}
