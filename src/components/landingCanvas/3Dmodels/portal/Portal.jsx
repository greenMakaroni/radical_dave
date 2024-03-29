/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 radical_portal.glb
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import portalUrl from './radical_portal.glb'

export default function Portal(props) {
  const { nodes, materials } = useGLTF(portalUrl)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.portal.geometry} material={materials.megastructure} rotation={[Math.PI / 2, 0, 0]} scale={8} />
      <mesh geometry={nodes.emissiveCube.geometry} material={materials.planeMaterial} scale={[6.5, 6.6, 1.4]} />
    </group>
  )
}

useGLTF.preload('./src/assets/radical_portal.glb')
