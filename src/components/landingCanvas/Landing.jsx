import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Portal from "./Portal"
import Spaceship from "./Spaceship"
import { OrbitControls, Stars, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import { editable as e, SheetProvider } from '@theatre/r3f'

const Landing = () => {
  studio.initialize()
  // nope this doesn't work
  const editableSpaceship = e(Spaceship, "ship");
  const editablePortal = e(Portal, "portal");
  return (
    <Canvas>
      <SheetProvider sheet={getProject('Demo Project').sheet('Demo Sheet')}>
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

        <Stars radius={200} depth={50} count={200} factor={4} saturation={0} fade speed={1} />
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)

        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
          {/* alternative: <GizmoViewcube /> */}
        </GizmoHelper>
        <OrbitControls />
      </SheetProvider>
    </Canvas>

  )
}

export default Landing