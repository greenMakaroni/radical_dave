import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Portal from "./Portal"
import Spaceship from "./Spaceship"
import { OrbitControls, Stars, GizmoHelper, GizmoViewport, GizmoViewcube } from '@react-three/drei';

// ****************** Postprocessing ************
import {
  EffectComposer,
  Vignette,
  Noise,
  Bloom
} from "@react-three/postprocessing";

// ****************** Theatre.js ************
import { getProject } from '@theatre/core'
import craneShotAnimation from "./craneShot.json"

const sheet = getProject('Space Portal', { state: craneShotAnimation }).sheet('Space Portal');

// import studio from "@theatre/studio"
// import extension from '@theatre/r3f/dist/extension'

// studio.initialize();
// studio.extend(extension);

import { editable, SheetProvider, PerspectiveCamera } from '@theatre/r3f'

const Landing = () => {

  useEffect(() => {
    sheet.project.ready.then(() => sheet.sequence.play({ iterationCount: 1, range: [0, 12.3] }))
  }, [])

  return (
    <Canvas>
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
        {/* <pointLight
          color={"lightblue"}
          intensity={2}
          position={[-5, -90, -5]}
        /> */}

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

        {/* Postprocessing */}
        <EffectComposer multisampling={0} disableNormalPass={true}>
          <Noise opacity={0.05} />
          <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={2}
            height={300}
            opacity={3}
          />
        </EffectComposer>

        {/* <GizmoHelper
          alignment="center" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />

        </GizmoHelper>
        <gridHelper scale={10} /> */}

      </SheetProvider>
    </Canvas>

  )
}

export default Landing