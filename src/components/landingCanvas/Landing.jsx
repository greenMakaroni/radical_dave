import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Portal from "./Portal"
import Spaceship from "./Spaceship"
import { OrbitControls, Stars, GizmoHelper, GizmoViewport, GizmoViewcube } from '@react-three/drei';

// ************  Theatre.js ****************
// import { getProject } from '@theatre/core'
// import studio from "@theatre/studio"
// import { editable as e, SheetProvider } from "@theatre/r3f"
// import extension from '@theatre/r3f/dist/extension'
// studio.initialize();
// studio.extend(extension);
// const sheet = getProject('Space Portal').sheet('Space Portal');

// ****************** Postprocessing ************
import {
  EffectComposer,
  Vignette,
  Noise,
  Bloom
} from "@react-three/postprocessing";

const Landing = () => {

  return (
    <Canvas>
      {/* BG */}
      <color attach="background" args={["black"]} />

      {/* Lights */}
      <pointLight
        color={"lightblue"}
        intensity={3}
        position={[-5, 90, -5]}
      />
      <pointLight
        color={"lightblue"}
        intensity={0.5}
        position={[-5, -90, -5]}
      />

      {/* Models */}
      <Portal />
      <Spaceship />
      <Stars radius={250} depth={50} count={3000} factor={4} saturation={0} fade speed={3} />


      {/* Drei helpers */}
      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        <GizmoViewcube />
      </GizmoHelper>

      <OrbitControls
        enablePan={false}
        minDistance={5}
        maxDistance={200}
      />

      {/* Postprocessing */}
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <Noise opacity={0.06} />
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={1.8}
          height={300}
          opacity={3}
        />
      </EffectComposer>
    </Canvas>

  )
}

export default Landing