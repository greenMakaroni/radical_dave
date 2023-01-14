import React from 'react'
import Box from "./Box"
import { Canvas, useFrame } from '@react-three/fiber'
import Portal from "./Portal"
import { OrbitControls } from '@react-three/drei';

const Landing = () => {
  return (
    <Canvas>
      
       <ambientLight intensity={ 0.6 } />

        <pointLight
          intensity={0.5}       
          position={ [-25, 35, -12] } 
        />           
      <Portal />
      <OrbitControls />
    </Canvas>

  )
}

export default Landing