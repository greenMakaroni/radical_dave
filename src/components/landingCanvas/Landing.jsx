import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Portal from "./Portal"
import Spaceship from "./Spaceship"
import { OrbitControls, Stars, GizmoHelper, GizmoViewport } from '@react-three/drei';

const Landing = () => {

  return (
    <Canvas>
       <color attach="background" args={ ["black"] } />
      
        <pointLight
            color={"lightblue"}
            intensity={2}       
            position={ [ -5, 90, -5] } 
         />  
        <pointLight
            color={"lightblue"}
            intensity={1}       
            position={ [ -5, -90, -5] } 
         />  
 
      <Portal />
      <Spaceship />
      <Stars radius={200} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
    
      >
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        {/* alternative: <GizmoViewcube /> */}
      </GizmoHelper>
      <OrbitControls />
    </Canvas>

  )
}

export default Landing