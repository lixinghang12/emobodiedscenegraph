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
        
        <h2 className={styles.description}>
          Abstract
        </h2>
        <p className={styles.description}>
          &nbsp;&nbsp;&nbsp;&nbsp;Semantic scene graph provides an effective way for
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
        
        <h2 className={styles.description}>
          Framework
        </h2>
        <p className={styles.caption}>
          Fig.1 The proposed framework of embodied semantic scene graph generation.
        </p>
        
        <img src="/framework.png" className={styles.img} />
        <p className={styles.description}>
          
          &nbsp;&nbsp;&nbsp;&nbsp;As shown in fig.1, At time instant t, after taking one action, the agent comes to a new viewpoint and the
          RGB and depth frames are captured. With the RGB and depth frames, the corresponding semantic point cloud is generated, which is then used to update the
          global point cloud and global semantic scene graph at time instant t. With the current observed RGB frame, current local semantic scene graph and action
          type at time instant t, a new action is generated for the agent to further explore the environment. This process iterates until a stop action is obtained.
          Our framework consists of three essential parts: Global Semantic Scene Graph Constructor, Local Scene Graph Prediction Network and Navigation Model.
          <br>
          &nbsp;&nbsp;&nbsp;&nbsp;At each step, LSGPN predicts a local semantic scene graph from the current observation of the agent, Global Semantic Scene Graph Constructor updates the global
          scene graph which contains all the detected objects and the semantic relations between them, and update the nodes and edges in the global semantic scene graph.
        </p>
        
        <p className={styles.caption}>
          Fig.2 The architecture of Local Scene Graph Prediction Network.
        </p>
        
        <img src="/GCN.png" className={styles.img} />
        
        <p className={styles.description}>
          As shown in fig.2, the Local Scene Graph Prediction Network consists of embedding module and Graph Convolutionary Network(GCN) module,
          The generated local semantic scene graph includes the current in-sight objects and their relations with each other. 
          The embedding module utilizes two PointNet models to deal with the object and relationships, respectively, and separately
          combines them with the category information using the Multiple Layer Perception (MLP) to get the corresponding feature
          vectors, which can be arranged as a set of triples (subject, predicate, object) to form the dense graph.
          We further employ the GCN module to process the instances and proposed edges in the triples. The GCN projects each
          triple for information propagation, and the features of neighbors are averaged as the new feature for each node.
        </p>
        <p className={styles.caption}>
          Vid.1 The introduction video of the generation of demonstrating tracks.
        </p>
        
        <video poster="/track_v4.png" controls className={styles.img}>
          <source src="demonstrate_track.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
          <p>This is fallback content</p>
        </video>
        
        
        
      </main>
    

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
