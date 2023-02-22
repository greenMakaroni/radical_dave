/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Portal(props) {
  const { nodes, materials } = useGLTF('./src/assets/radical_portal.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.portal.geometry} material={materials.megastructure} rotation={[Math.PI / 2, 0, 0]} scale={7} />
      <mesh geometry={nodes.Cube.geometry} material={materials.planeMaterial} scale={[5.8, 5.8, 1]} />
    </group>
  )
}

useGLTF.preload('./src/assets/radical_portal.glb')
