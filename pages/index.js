import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Embodied Semantic Scene Graph Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Embodied Semantic Scene Graph Generation
        </h1>
        
        <h3 className={styles.description}>
          Abstract
        </h3>
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
    
        <p className={styles.caption}>
          Vid.1 The introduction video of the generation of demonstrating tracks.
        </p>
        
        <video poster="/demonstrate.png" controls className={styles.img}>
          <source src="demon.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
          <p>This is fallback content</p>
        </video>
    
    
        <p className={styles.description}>
          
          The above video is an illustration for the Embodied Semantic Scene Graph Generation.
          The agent starts to move and always selects an appropriate action to obtain better semantic scene graph. Further, the obtained semantic scene graph can
          be helpful to generate the streaming video captioning.
          
        </p>
        <h3 className={styles.description}>
          Framework
        </h3>
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
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;At each step, LSGPN predicts a local semantic scene graph from the current observation of the agent, Global Semantic Scene Graph Constructor updates the global
          scene graph which contains all the detected objects and the semantic relations between them, and update the nodes and edges in the global semantic scene graph.
        </p>
        
        
        <h3 className={styles.description}>
          Local Scene Graph Prediction Network
        </h3>
        
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
        
        <h3 className={styles.description}>
          Navigation Model
        </h3>
        <p className={styles.caption}>
          Vid.2 The architecture of Navigation Model.
        </p>
        
        <video poster="/navigate.png" controls className={styles.img}>
          <source src="navigate.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
          <p>This is fallback content</p>
        </video>
        
        <p className={styles.description}>
          Fig.3 is the architecture of the navigation model. At each time step, the action feature, RGB feature and the local semantic scene graph feature 
          are firstly extracted and concatenated. The concatenated feature are then fed into a double-layer LSTM which outputs the hidden state feature. 
          The hidden state feature is then fed into an MLP network to generate an action for the next step. This process iterates until a ”STOP" 
          action is generated, which indicates that the environment is fully explored and a comprehensive global semantic scene graph is generated.
        </p>
        
        <h3 className={styles.description}>
          Demonstrating Track
        </h3>
        <p className={styles.caption}>
          Vid.2 The introduction video of the generation of demonstrating tracks.
        </p>
        <video poster="/track_v4.png" controls className={styles.img}>
          <source src="demonstrate_track.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
          <p>This is fallback content</p>
        </video>
        
        <p className={styles.description}>
          The above video is an example for the generation of the demonstrating tracks. We generate the demonstrating track in two steps: 
          random greedy search to get key points and beam search to fulfill the mid points between the key point pairs.
        </p>
        
        <h3 className={styles.description}>
          Representative Result
        </h3>
        
      </main>
    

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
