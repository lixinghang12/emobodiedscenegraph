import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Embodied Semantic Scene Graph Generation</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Embodied Semantic Scene Graph Generation
        </h1>
        
        
        <h3 className={styles.description}>
          Anounymous Submision for CORL2021 (#136)
        </h3>
          
        <div className={styles.box}>
            <div className={styles.small_video}>
                <video poster="/back.png" controls className={styles.video}>
                  <source src="/background.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                </video>  
                <div className={styles.video_caption}>
                  Background
                </div>
            
            </div>
            <div className={styles.small_video}>

                <video poster="/demonstrate.png" controls className={styles.video}>
                  <source src="/demonstrate_v2.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                </video>  
                <div className={styles.video_caption}>
                  Problem Formulation
                </div>
    
            </div>
            <div className={styles.small_video}>
                <video poster="/navigate_v9.png" controls className={styles.video}>
                  //<source src="navigate.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                  <source src="navigate_v9.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                </video>
    
                <div className={styles.video_caption}>
                   Architecture
                </div>
                
            </div>
        </div> 
       
        <br></br>
    
        <div className={styles.box}>
            <div className={styles.small_video}>
                <video poster="/track_v4.png" controls className={styles.video}>
                  <source src="/demonstrate_track.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                </video>  
                <div className={styles.video_caption}>
                  Demonstration Path Generation
                </div>
            </div>
            <div className={styles.small_video}>

                <video poster="/FloorPlan228_v2.png" controls className={styles.video}>
                  <source src="/FloorPlan228_v2.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                </video>
    
                <div className={styles.video_caption}>
                   Result_1
                </div>
    
            </div>
            <div className={styles.small_video}>
                <video poster="/FloorPlan329.png" controls className={styles.video}>
                  <source src="/FloorPlan329_v2.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                </video>
    
                <div className={styles.video_caption}>
                  Result_2
                </div>
                
            </div>
        </div> 
    
        <br></br>
    
        <h3 className={styles.description}>
          Background
        </h3>
        
        <p className={styles.description}>
          &nbsp;&nbsp;&nbsp;&nbsp;Scene graphs used to be widely used in computer graphics to arrange spatial representations of a graphical scene. It is a
          collection of nodes in a graph structure where nodes usually represent scene entities and edges represent geometrical transformation between the nodes. The scene graph can provide a
          flexible way to track objects and their spatial relations within the scene. Recently, the concept of scene graph is successfully adapted in many applications in computer vision and robotics.
          Scene graph could bridge the gap between semantic and visual information, and could be utilized to promote the performance of the image and video captions, 
          navigate the agent to better explore the scene, help the agent with QA tasks and so on. Furthermore, 3D semantic scene graph is of great interest
          for robotic applications such as navigation, mapping, and interaction. There are many existing works for constructing 3D semantic scene graph, the construction
          of 3D scene graphs are based on 3D visual input including RGB-D frame, 3D mesh and instance point cloud.
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;Though great success has been achieved for semantic scene graph, all of the above work focuses on generating scene graph
          from the sensory information collected from a pre-defined path. To obtain a comprehensive and informative semantic scene graph, the environment should be exhaustively explored,
          which requires large time consumption. In many scenarios, the disconnection between the scene graph generation and the exploration path even results in unsatisfied results. Therefore,
          it is necessary for the agent to have the ability to autonomously explore the environment to generate a good semantic scene graph.
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;In this work, we adopt the embodied exploration framework
          to tackle this problem, which combines the action and perception abilities of the agent. The embodied agent can generate actions to autonomously explore the environment and thus
          incrementally construct a high-quality semantic scene graph using the detected object instances and contextual information. The collected sensor data is continuously processed and
          incorporated into the semantic scene graph model along with the exploration process. Therefore, we call the proposed task
          as Embodied Semantic Scene Graph Generation, which has never been addressed before. The illustration is demonstrated in video "Background".
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;Different from the existing work which focuses on generating scene graphs from acquired sensor information,
          this work introduces the embodiment of the agent to effectively combine the action, vision and language together for autonomous 3D semantic scene graph generation.
          
        </p>
        
        <h3 className={styles.description}>
          Problem Formulation
        </h3>
        
        <p className={styles.description}>
          
          &nbsp;&nbsp;&nbsp;&nbsp;Video "Problem Formulation" is an illustration for the Embodied Semantic Scene Graph Generation problem. The agent extracts semantic information
          from the visual input and utilize the semantic infomation to update the scene graph. Further, the agent exploits its embodied capacity to 
          select an appropriate action to obtain better semantic scene graph. Further, the obtained semantic scene graph can be helpful to generate the streaming video captioning.
          
        </p>
        
        <h3 className={styles.description}>
          Framework
        </h3>
        
//         <img src="/framework.png" className={styles.img} />
        <img src="/framework_v8.png" className={styles.img} />
    
        <p className={styles.caption}>
          Fig.1 The proposed framework of embodied semantic scene graph generation.
        </p>
    
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
        
        <img src="/GCN.png" className={styles.img} />
    
        <p className={styles.caption}>
          Fig.2 The architecture of Local Scene Graph Prediction Network.
        </p>
        
        <p className={styles.description}>
          &nbsp;&nbsp;&nbsp;&nbsp;As shown in fig.2, the Local Scene Graph Prediction Network consists of embedding module and Graph Convolutionary Network(GCN) module,
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
          &nbsp;&nbsp;&nbsp;&nbsp;Video "Architecture" is an illustration of the architecture of the navigation model. At each time step, the action feature, RGB feature and the local semantic scene graph feature 
          are firstly extracted and concatenated. The concatenated feature are then fed into a double-layer LSTM which outputs the hidden state feature. 
          The hidden state feature is then fed into an MLP network to generate an action for the next step. This process iterates until a ”STOP" 
          action is generated, which indicates that the environment is fully explored and a comprehensive global semantic scene graph is generated.
        </p>
        
        <h3 className={styles.description}>
          Demonstrating Track
        </h3>
        
        <p className={styles.description}>
          &nbsp;&nbsp;&nbsp;&nbsp;Video "Demonstration Path Generation" is an example for the generation of the demonstrating tracks. We generate the demonstrating track in two steps: 
          At the first step, we count the new object number for all neighbors that are k steps from current viewpoint, and randomly choose from the neighbor viewpoints with the maximum
          number of new objects to be the next key point. If there is no new object at all neighbors at k-distance, we add 1 to k and continue the search.
          For the second step, we use beam search to fulfill the track between the adjacent key point pairs in the key point list generated at step 1, and finally 
          get the full demonstrating tracks.
        </p>
        
        <h3 className={styles.description}>
          Representative Result
        </h3> 
        
        <p className={styles.description}>
          Video "Result_1" and "Result_2" are two representative results. From the videos we can directly see the aligning and adding of the nodes and edges in the 
          global semantic scene graph. At each step, the global scene graph constructor calculate the inside fraction between the semantic point cloud for each detected object 
          and each node in global scene graph to align the objects with nodes and update the category scores. The unaligned objects would be added to global scene graph 
          as new nodes. For the next step, the edges with same subject and object nodes would be aligned and updated. Please see the detail in video "Result_1" and "Result_2".
        </p>
      </main>
    

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
