"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Box, Sphere } from "@react-three/drei"
import type * as THREE from "three"

export function DataLabScene() {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // Create floating particles
  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    return positions
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f1f5f9" />

      {/* Floating Data Screens */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-8, 3, -5]} rotation={[0, 0.3, 0]}>
          <planeGeometry args={[4, 2.5]} />
          <meshStandardMaterial color="#1e293b" transparent opacity={0.8} emissive="#0f172a" emissiveIntensity={0.2} />
          <mesh position={[0, 0, 0.01]}>
            <planeGeometry args={[3.8, 2.3]} />
            <meshStandardMaterial
              color="#60a5fa"
              transparent
              opacity={0.1}
              emissive="#3b82f6"
              emissiveIntensity={0.3}
            />
          </mesh>
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.7}>
        <mesh position={[6, -2, -8]} rotation={[0, -0.5, 0]}>
          <planeGeometry args={[3, 4]} />
          <meshStandardMaterial color="#1e293b" transparent opacity={0.8} emissive="#0f172a" emissiveIntensity={0.2} />
          <mesh position={[0, 0, 0.01]}>
            <planeGeometry args={[2.8, 3.8]} />
            <meshStandardMaterial
              color="#f1f5f9"
              transparent
              opacity={0.1}
              emissive="#e2e8f0"
              emissiveIntensity={0.2}
            />
          </mesh>
        </mesh>
      </Float>

      {/* Floating Geometric Elements */}
      <Float speed={3} rotationIntensity={1} floatIntensity={0.3}>
        <Box position={[4, 4, -3]} args={[0.5, 0.5, 0.5]}>
          <meshStandardMaterial color="#60a5fa" transparent opacity={0.6} emissive="#3b82f6" emissiveIntensity={0.4} />
        </Box>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.4}>
        <Sphere position={[-5, -4, -6]} args={[0.3]}>
          <meshStandardMaterial color="#f1f5f9" transparent opacity={0.7} emissive="#e2e8f0" emissiveIntensity={0.3} />
        </Sphere>
      </Float>

      {/* Particle System */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#60a5fa" transparent opacity={0.6} sizeAttenuation />
      </points>

      {/* Grid Lines */}
      <gridHelper args={[30, 30, "#334155", "#1e293b"]} position={[0, -8, 0]} />
    </group>
  )
}
