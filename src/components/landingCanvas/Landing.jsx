import { useState, useEffect, Suspense, useRef } from 'react'
import useOnScreen from "../../useOnScreen"
import { Canvas } from '@react-three/fiber'
// models ************************************  
import Portal from "./3Dmodels/portal/Portal"
import SpaceshipHighway from './3Dmodels/spaceshipHighway/SpaceshipHighway';
// drei helpers ************************************  
import { OrbitControls, Stars } from '@react-three/drei';
// ****************** Theatre.js ****************************** 
import { getProject } from '@theatre/core'
import craneShotAnimation from "./craneShot.json"
import { SheetProvider, PerspectiveCamera } from '@theatre/r3f'
import LoadingTransition from './LoadingTransition';
import Loader from './Loader';
// postprocessing****************** ****************** 
import Postprocessing from './Postprocessing';
// css****************** ****************** 
import "./loader.css"


const sheet = getProject('Space Portal', { state: craneShotAnimation }).sheet('Space Portal');

const Landing = () => {
  const [isLoaded, setLoaded] = useState(false);

  const expensive = useRef()
  const isVisible = useOnScreen(expensive)

  useEffect(() => {
    sheet.project.ready.then(() => sheet.sequence.play({ iterationCount: 1, range: [0, 12.3] }))
  }, [])

  return (
    <div className="canvas" ref={expensive}>
      {isLoaded && <LoadingTransition />}
      <Canvas>
        <Suspense fallback={<Loader setLoaded={setLoaded} />}>
          <SheetProvider sheet={sheet}>
            {/* BG */}
            <color attach="background" args={["black"]} />

            <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, -100, 0]} lookAt={[0, 0, 0]} fov={75} />

            {/* Lights */}
            <pointLight
              color={"white"}
              intensity={2}
              position={[-5, 90, -5]}
            />

            {/* Models */}
            { isVisible && 
            <>
              <Stars radius={400} depth={50} count={2000} factor={7} saturation={0} fade speed={1} />
              <Portal />
              <SpaceshipHighway />
            </>
            }
            {/* Drei helpers */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minDistance={0}
              maxDistance={70}
            />
            {/* Postprocessing */}
            <Postprocessing />

          </SheetProvider>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Landing