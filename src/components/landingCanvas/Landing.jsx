import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Portal from "./Portal"
import Spaceship from "./Spaceship"
import { OrbitControls, Stars, GizmoHelper, GizmoViewport } from '@react-three/drei';

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
      <color attach="background" args={["black"]} />

      <pointLight
        color={"lightblue"}
        intensity={2}
        position={[-5, 90, -5]}
      />
      <pointLight
        color={"lightblue"}
        intensity={1}
        position={[-5, -90, -5]}
      />

      <Portal />
      <Spaceship />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        {/* alternative: <GizmoViewcube /> */}
      </GizmoHelper>
      <OrbitControls />

      {/* Postprocessing */}
      <EffectComposer multisampling={0} disableNormalPass={true}>
        <Noise opacity={0.075} />
        <Bloom
          luminanceThreshold={0.1}
          luminanceSmoothing={1.5}
          height={300}
          opacity={3}
        />
      </EffectComposer>

    </Canvas>

  )
}

export default Landing