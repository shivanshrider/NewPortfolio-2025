'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import styles from './DynamicBackground.module.css'

const CodeElement = ({ position, text, color, speed = 1 }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y -= speed * 0.025
      meshRef.current.rotation.z = 0
      if (meshRef.current.position.y < -7) {
        meshRef.current.position.y = 7
      }
    }
  })

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={0.7}
      color={color}
      font="/fonts/JetBrainsMono-Regular.ttf"
      anchorX="center"
      anchorY="middle"
      opacity={0.95}
      outlineWidth={0.03}
      outlineColor={color}
      outlineOpacity={0.7}
    >
      {text}
    </Text>
  )
}

const MatrixRain = () => {
  const codeElements = [
    'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'function', '=>', '[]', '{}', '()', 'import', 'export', 'class', 'extends', 'super', 'this', 'new', 'try', 'catch', 'async', 'await', 'switch', 'case', 'default', 'break', 'continue', 'throw', 'finally', 'null', 'true', 'false', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ]
  const colors = ['#00ff99', '#00e6e6', '#3b82f6', '#39ff14', '#00ffcc', '#00bfff']
  return (
    <group>
      {Array.from({ length: 80 }, (_, i) => (
        <CodeElement
          key={i}
          position={[
            (Math.random() - 0.5) * 18,
            Math.random() * 14 - 7,
            (Math.random() - 0.5) * 2
          ]}
          text={codeElements[Math.floor(Math.random() * codeElements.length)]}
          color={colors[Math.floor(Math.random() * colors.length)]}
          speed={Math.random() * 1.5 + 0.8}
        />
      ))}
    </group>
  )
}

function SpinningBox() {
  const meshRef = useRef()
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'#00ff99'} />
    </mesh>
  )
}

const DynamicBackground3D = () => {
  return (
    <div className={styles.container}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className={styles.canvas}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <SpinningBox />
      </Canvas>
      <div className={styles.scanlines} />
      <div className={styles.overlay} />
    </div>
  )
}

export default DynamicBackground3D 