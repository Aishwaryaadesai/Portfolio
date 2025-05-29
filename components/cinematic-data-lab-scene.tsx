"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Cylinder } from "@react-three/drei"
import * as THREE from "three"

// Realistic DNA Helix Component
function RealisticDNAHelix({ position, scale = 1 }: any) {
  const groupRef = useRef<THREE.Group>(null)
  const helixRef = useRef<THREE.Group>(null)
  const particleTrailRef = useRef<THREE.Points>(null)

  // Create realistic DNA structure
  const dnaGeometry = useMemo(() => {
    const length = 40 // Longer DNA strand
    const segments = 120 // More segments for smoother helix
    const radius = 3.5 // Larger radius
    const basePairs = []

    for (let i = 0; i < segments; i++) {
      const x = (i / segments) * length - length / 2
      const angle = (i / segments) * Math.PI * 8 // 4 full rotations

      // First strand (sugar-phosphate backbone)
      const y1 = Math.cos(angle) * radius
      const z1 = Math.sin(angle) * radius

      // Second strand (complementary)
      const y2 = Math.cos(angle + Math.PI) * radius
      const z2 = Math.sin(angle + Math.PI) * radius

      // Base pairs (A-T, G-C)
      const baseType = Math.floor(Math.random() * 4) // 0: A-T, 1: T-A, 2: G-C, 3: C-G
      const baseColors = [
        { base1: "#FF6B6B", base2: "#4ECDC4" }, // A-T (red-cyan)
        { base1: "#4ECDC4", base2: "#FF6B6B" }, // T-A (cyan-red)
        { base1: "#45B7D1", base2: "#FFA07A" }, // G-C (blue-orange)
        { base1: "#FFA07A", base2: "#45B7D1" }, // C-G (orange-blue)
      ]

      basePairs.push({
        strand1: { x, y: y1, z: z1 },
        strand2: { x, y: y2, z: z2 },
        connector: { x, y: (y1 + y2) / 2, z: (z1 + z2) / 2 },
        angle: angle,
        baseType: baseType,
        colors: baseColors[baseType],
        distance: Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2)),
      })
    }

    return { basePairs }
  }, [])

  // Enhanced flowing particles
  const flowingParticles = useMemo(() => {
    const count = 100
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const t = i / count
      const angle = t * Math.PI * 8
      const radius = 3.5
      const x = (t - 0.5) * 40

      if (i % 2 === 0) {
        positions[i * 3] = x
        positions[i * 3 + 1] = Math.cos(angle) * radius
        positions[i * 3 + 2] = Math.sin(angle) * radius

        // DNA strand colors
        colors[i * 3] = 0.2 + Math.sin(t * Math.PI * 4) * 0.3
        colors[i * 3 + 1] = 0.6 + Math.cos(t * Math.PI * 3) * 0.4
        colors[i * 3 + 2] = 0.9
      } else {
        positions[i * 3] = x
        positions[i * 3 + 1] = Math.cos(angle + Math.PI) * radius
        positions[i * 3 + 2] = Math.sin(angle + Math.PI) * radius

        colors[i * 3] = 0.9
        colors[i * 3 + 1] = 0.4 + Math.sin(t * Math.PI * 2) * 0.3
        colors[i * 3 + 2] = 0.6 + Math.cos(t * Math.PI * 5) * 0.4
      }

      sizes[i] = 0.15 + Math.sin(t * Math.PI * 6) * 0.1
    }

    return { positions, colors, sizes }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      // Slow horizontal rotation
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
    if (helixRef.current) {
      // Gentle floating motion
      helixRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }

    // Animate flowing particles
    if (particleTrailRef.current && particleTrailRef.current.geometry.attributes.position) {
      const positions = particleTrailRef.current.geometry.attributes.position.array as Float32Array
      const time = state.clock.elapsedTime

      for (let i = 0; i < positions.length / 3; i++) {
        const t = (i / (positions.length / 3) + time * 0.05) % 1
        const angle = t * Math.PI * 8
        const radius = 3.5
        const x = (t - 0.5) * 40

        if (i % 2 === 0) {
          positions[i * 3] = x
          positions[i * 3 + 1] = Math.cos(angle) * radius
          positions[i * 3 + 2] = Math.sin(angle) * radius
        } else {
          positions[i * 3] = x
          positions[i * 3 + 1] = Math.cos(angle + Math.PI) * radius
          positions[i * 3 + 2] = Math.sin(angle + Math.PI) * radius
        }
      }
      particleTrailRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <group ref={helixRef}>
        {/* DNA Base Pairs with Realistic Colors */}
        {dnaGeometry.basePairs.map((basePair, index) => (
          <group key={index}>
            {/* Sugar-phosphate backbone spheres */}
            <Sphere position={[basePair.strand1.x, basePair.strand1.y, basePair.strand1.z]} args={[0.15]}>
              <meshStandardMaterial
                color="#E6E6FA"
                metalness={0.3}
                roughness={0.7}
                emissive="#E6E6FA"
                emissiveIntensity={0.1}
                transparent
                opacity={0.9}
              />
            </Sphere>

            <Sphere position={[basePair.strand2.x, basePair.strand2.y, basePair.strand2.z]} args={[0.15]}>
              <meshStandardMaterial
                color="#E6E6FA"
                metalness={0.3}
                roughness={0.7}
                emissive="#E6E6FA"
                emissiveIntensity={0.1}
                transparent
                opacity={0.9}
              />
            </Sphere>

            {/* Base pairs - only every 3rd for cleaner look */}
            {index % 3 === 0 && (
              <>
                {/* Base 1 */}
                <Sphere
                  position={[
                    basePair.strand1.x + (basePair.strand2.x - basePair.strand1.x) * 0.3,
                    basePair.strand1.y + (basePair.strand2.y - basePair.strand1.y) * 0.3,
                    basePair.strand1.z + (basePair.strand2.z - basePair.strand1.z) * 0.3,
                  ]}
                  args={[0.12]}
                >
                  <meshStandardMaterial
                    color={basePair.colors.base1}
                    metalness={0.4}
                    roughness={0.6}
                    emissive={basePair.colors.base1}
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.8}
                  />
                </Sphere>

                {/* Base 2 */}
                <Sphere
                  position={[
                    basePair.strand2.x + (basePair.strand1.x - basePair.strand2.x) * 0.3,
                    basePair.strand2.y + (basePair.strand1.y - basePair.strand2.y) * 0.3,
                    basePair.strand2.z + (basePair.strand1.z - basePair.strand2.z) * 0.3,
                  ]}
                  args={[0.12]}
                >
                  <meshStandardMaterial
                    color={basePair.colors.base2}
                    metalness={0.4}
                    roughness={0.6}
                    emissive={basePair.colors.base2}
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.8}
                  />
                </Sphere>

                {/* Hydrogen bonds between bases */}
                <Cylinder
                  position={[basePair.connector.x, basePair.connector.y, basePair.connector.z]}
                  args={[0.02, 0.02, basePair.distance * 0.4]}
                  rotation={[
                    Math.atan2(basePair.strand2.z - basePair.strand1.z, basePair.strand2.y - basePair.strand1.y),
                    0,
                    Math.PI / 2,
                  ]}
                >
                  <meshStandardMaterial
                    color="#FFFFFF"
                    metalness={0.1}
                    roughness={0.9}
                    transparent
                    opacity={0.6}
                    emissive="#FFFFFF"
                    emissiveIntensity={0.05}
                  />
                </Cylinder>
              </>
            )}

            {/* Phosphate backbone connections */}
            {index < dnaGeometry.basePairs.length - 1 && index % 2 === 0 && (
              <>
                <Cylinder
                  position={[
                    (basePair.strand1.x + dnaGeometry.basePairs[index + 1].strand1.x) / 2,
                    (basePair.strand1.y + dnaGeometry.basePairs[index + 1].strand1.y) / 2,
                    (basePair.strand1.z + dnaGeometry.basePairs[index + 1].strand1.z) / 2,
                  ]}
                  args={[0.05, 0.05, 0.3]}
                  rotation={[0, Math.PI / 2, basePair.angle]}
                >
                  <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} transparent opacity={0.7} />
                </Cylinder>

                <Cylinder
                  position={[
                    (basePair.strand2.x + dnaGeometry.basePairs[index + 1].strand2.x) / 2,
                    (basePair.strand2.y + dnaGeometry.basePairs[index + 1].strand2.y) / 2,
                    (basePair.strand2.z + dnaGeometry.basePairs[index + 1].strand2.z) / 2,
                  ]}
                  args={[0.05, 0.05, 0.3]}
                  rotation={[0, Math.PI / 2, basePair.angle]}
                >
                  <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} transparent opacity={0.7} />
                </Cylinder>
              </>
            )}
          </group>
        ))}

        {/* Enhanced particle trail */}
        <points ref={particleTrailRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={flowingParticles.positions.length / 3}
              array={flowingParticles.positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              count={flowingParticles.colors.length / 3}
              array={flowingParticles.colors}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-size"
              count={flowingParticles.sizes.length}
              array={flowingParticles.sizes}
              itemSize={1}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.1}
            vertexColors
            transparent
            opacity={0.8}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>
    </group>
  )
}

export function CinematicDataLabScene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.005) * 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {/* Enhanced Lighting for DNA */}
      <ambientLight intensity={0.4} color="#E6E6FA" />
      <directionalLight
        position={[20, 30, 20]}
        intensity={3.0}
        color="#F8F8FF"
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={200}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />

      {/* Accent lighting for DNA */}
      <pointLight position={[0, 0, 30]} intensity={2.0} color="#3b82f6" />
      <pointLight position={[0, 0, -30]} intensity={1.8} color="#8b5cf6" />
      <spotLight position={[30, 30, 0]} intensity={2.5} color="#60a5fa" angle={0.4} penumbra={0.8} castShadow />
      <spotLight position={[-30, 30, 0]} intensity={2.2} color="#a78bfa" angle={0.4} penumbra={0.9} />
      <pointLight position={[20, 15, 20]} intensity={1.5} color="#10b981" />
      <pointLight position={[-20, 15, -20]} intensity={1.3} color="#f59e0b" />

      {/* Central Realistic DNA Helix - Now the sole focus */}
      <RealisticDNAHelix position={[0, 0, -15]} scale={1.2} />
    </group>
  )
}
