'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedPoints() {
  const ref = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  const count = 5000
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10

    colors[i * 3] = Math.random() * 0.5 + 0.5 // Blue to purple range
    colors[i * 3 + 1] = Math.random() * 0.3 + 0.2 // Purple range
    colors[i * 3 + 2] = Math.random() * 0.5 + 0.5 // Pink range
  }

  return (
    <Points
      ref={ref}
      positions={positions}
      colors={colors}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

const HeroBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{ background: 'linear-gradient(to bottom, #000000, #1a1a2e, #16213e)' }}
    >
      <AnimatedPoints />
    </Canvas>
  )
}

export default HeroBackground 