import React, { useState, useEffect, Suspense, } from 'react'
import { Canvas } from '@react-three/fiber'
import Portal from "./Portal"
import Spaceship from "./Spaceship"
import { OrbitControls, Stars, GizmoHelper, GizmoViewport, GizmoViewcube, Html, useProgress } from '@react-three/drei';
import Postprocessing from './Postprocessing';
// ****************** Theatre.js ************
import { getProject } from '@theatre/core'
import craneShotAnimation from "./craneShot.json"
import { editable, SheetProvider, PerspectiveCamera } from '@theatre/r3f'

// css
import "./loader.css"

const LoadingTransition = () => {
  return (
    <div className="loader_bg">
      <p className="progress_transition"> 100% </p>
    </div>
  )
}

const sheet = getProject('Space Portal', { state: craneShotAnimation }).sheet('Space Portal');

const Landing = () => {
  const [isLoaded, setLoaded] = useState(false);

  function Loader() {
    const { progress } = useProgress();
    progress > 99 && setLoaded(true);

    return <Html center className="progress"> {Math.round(progress)}% </Html>
  }

  useEffect(() => {
    sheet.project.ready.then(() => sheet.sequence.play({ iterationCount: 1, range: [0, 12.3] }))
  }, [])

  return (
    <>
      {isLoaded && <LoadingTransition />}
      <Canvas>
        <Suspense fallback={<Loader />}>
          <SheetProvider sheet={sheet}>
            {/* BG */}
            <color attach="background" args={["black"]} />

            <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, -100, 0]} lookAt={[0, 0, 0]} fov={75} />

            {/* Lights */}
            <editable.pointLight
              theatreKey='upperPointLight'
              color={"blue"}
              intensity={2}
              position={[-5, 90, -5]}
            />

            {/* Models */}
            <Portal />
            {/* <Spaceship /> */}
            <Stars radius={250} depth={50} count={3000} factor={4} saturation={0} fade speed={3} />

            {/* Drei helpers */}

            <OrbitControls
              enablePan={false}
              minDistance={20}
              maxDistance={70}
            />

            <Postprocessing />

          </SheetProvider>
        </Suspense>
      </Canvas>
    </>
  )
}

export default Landing