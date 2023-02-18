/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Spaceship_1(props) {
  const { nodes, materials } = useGLTF('./src/assets/radical_spaceship_1.glb')

  const spaceship_1 = useRef()

  useFrame((state, delta) => {
    if (spaceship_1.current.position.z > 0) {
      spaceship_1.current.position.z -= 0.04
    } else {
      spaceship_1.current.position.z = 75
    }
  })

  return (
    <group ref={spaceship_1} {...props} dispose={null} position={[0, 0, props.posZ]} scale={0.05} >
      <mesh geometry={nodes.body.geometry} material={materials.body} position={[-3.51, 1.61, -2.01]} />
      <mesh geometry={nodes.windows.geometry} material={materials.windows} position={[-3.51, 1.61, -2.01]} />
      <mesh geometry={nodes.thrusters.geometry} material={materials.thrust} position={[-3.51, 1.61, -2.01]} />
    </group>
  )
}

useGLTF.preload('./src/assets/radical_spaceship_1.glb')