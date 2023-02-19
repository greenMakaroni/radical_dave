import { useFrame } from '@react-three/fiber'

export default function fly(ref, direction) {
    if (direction == "in") {
        useFrame((state, delta) => {
            if (ref.current.position.z > 0) {
                ref.current.position.z -= 0.02
            } else {
                ref.current.position.z = 100
            }
        })
    }
    if (direction == "out") {
        useFrame((state, delta) => {
            if (ref.current.position.z < 100) {
                ref.current.position.z += 0.02
            } else {
                ref.current.position.z = 0
            }
        })
    }

}