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
          
        </p>
        
        <img src="/framework.png" style="width: 100%"/>
        
      </main>
    

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
