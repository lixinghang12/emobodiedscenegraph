import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Embodied Semantic Scene Graph Generation
        </h1>

        <p className={styles.description}>
          Semantic scene graph provides an effective way for
          intelligent agents to better understand the environment and it
          has been extensively used in many robotic applications. However,
          existing work mainly focuses on generating the scene graph from
          the sensory information collected from a pre-defined path. To
          obtain a comprehensive semantic scene graph efficiently, the
          environment should be exhaustively explored with a carefully
          designed path. In this paper, we propose a new task of Embodied
          Semantic Scene Graph, which exploits the embodiment of the
          intelligent agent to autonomously generate a best path to explore
          the environment for scene graph generation. To this end, a
          learning framework with the paradigms of imitation learning
          and reinforcement learning is proposed to help the agent generate
          proper actions to explore the environment and the scene graph is
          incrementally constructed. The proposed method is evaluated on
          the AI2Thor dataset using both the quantitative and qualitative
          performance indexes. Additionally, we implement the proposed
          method on a streaming video captioning task and promising
          experimental results are achieved.
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
