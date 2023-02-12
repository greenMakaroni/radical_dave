import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Portal from "./Portal"
import Spaceship from "./Spaceship"
import { OrbitControls, Stars, GizmoHelper, GizmoViewport, GizmoViewcube } from '@react-three/drei';

// ************  Theatre.js ****************


// import { editable as e, SheetProvider } from "@theatre/r3f"




// ****************** Postprocessing ************
import {
  EffectComposer,
  Vignette,
  Noise,
  Bloom
} from "@react-three/postprocessing";

import { getProject } from '@theatre/core'
const sheet = getProject('Space Portal').sheet('Space Portal');

import studio from "@theatre/studio"
import extension from '@theatre/r3f/dist/extension'

studio.initialize();
studio.extend(extension);

import { editable, SheetProvider } from '@theatre/r3f'

const Landing = () => {

  return (
    <Canvas>
      <SheetProvider sheet={sheet}>
        {/* BG */}
        <color attach="background" args={["black"]} />

        {/* Lights */}
        <editable.pointLight
          theatreKey='upperPointLight'
          color={"blue"}
          intensity={0.1}
          position={[-5, 90, -5]}
        />
        {/* <pointLight
          color={"lightblue"}
          intensity={0.5}
          position={[-5, -90, -5]}
        /> */}

        {/* Models */}
        <Portal />
        <Spaceship />
        <Stars radius={250} depth={50} count={3000} factor={4} saturation={0} fade speed={3} />


        {/* Drei helpers */}

        <OrbitControls
          enablePan={false}
          minDistance={5}
          maxDistance={200}
        />

        {/* Postprocessing */}
        <EffectComposer multisampling={0} disableNormalPass={true}>
          <Noise opacity={0.06} />
          <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={2}
            height={300}
            opacity={3}
          />
        </EffectComposer>
      </SheetProvider>
    </Canvas>

  )
}

export default Landing