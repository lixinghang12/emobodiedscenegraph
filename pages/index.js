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
          Anounymous Submision for RSS2021 (#140)
        </h3>
          
        <div className={styles.box}>
            <div className={styles.small_video}>
                <div className={styles.video_caption}>
                  Vid.1 Embodied Semantic Scene Graph Generation.
                </div>
                <video poster="/demonstrate.png" controls className={styles.video}>
                  <source src="/demonstrate_v2.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                </video>              
            </div>
            <div className={styles.small_video}>
                <div className={styles.video_caption}>
                   Vid.2 The architecture of the navigation model.
                </div>

                <video poster="/navigate.png" controls className={styles.video}>
                  <source src="navigate.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                  
                </video>
            </div>
            <div className={styles.small_video}>
                <div className={styles.video_caption}>
                  Vid.3 The illustration of the demonstration path generation.
                </div>
                <video poster="/track_v4.png" controls className={styles.video}>
                  <source src="demonstrate_track.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                  
                </video>
            </div>
        </div> 
       
        <br></br>
    
        <p className={styles.description}>
          
          Video 1 is an illustration for the Embodied Semantic Scene Graph Generation.
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
        
        <p className={styles.description}>
          Video 2 is an illustration of the architecture of the navigation model. At each time step, the action feature, RGB feature and the local semantic scene graph feature 
          are firstly extracted and concatenated. The concatenated feature are then fed into a double-layer LSTM which outputs the hidden state feature. 
          The hidden state feature is then fed into an MLP network to generate an action for the next step. This process iterates until a ”STOP" 
          action is generated, which indicates that the environment is fully explored and a comprehensive global semantic scene graph is generated.
        </p>
        
        <h3 className={styles.description}>
          Demonstrating Track
        </h3>
        
        <p className={styles.description}>
          Video 3 is an example for the generation of the demonstrating tracks. We generate the demonstrating track in two steps: 
          random greedy search to get key points and beam search to fulfill the mid points between the key point pairs.
        </p>
        
        <h3 className={styles.description}>
          Representative Result
        </h3>
        <video poster="/FloorPlan228.png" controls className={styles.video}>
          <source src="/FloorPlan228.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
        </video>  
        
      </main>
    

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
