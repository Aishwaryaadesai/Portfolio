"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, PerspectiveCamera } from "@react-three/drei"
import { CinematicDataLabScene } from "@/components/cinematic-data-lab-scene"
import { CinematicHeroSection } from "@/components/cinematic-hero-section"
import { CinematicAboutSection } from "@/components/cinematic-about-section"
import { EducationSection } from "@/components/education-section"
import { CinematicProjectsSection } from "@/components/cinematic-projects-section"
import { CinematicContactSection } from "@/components/cinematic-contact-section"
import { CinematicNavigation } from "@/components/cinematic-navigation"
import { LoadingScreen } from "@/components/loading-screen"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 overflow-hidden">
      {/* Premium 3D Background Scene */}
      <div className="fixed inset-0 z-0">
        <Canvas shadows shadowMap={{ enabled: true, type: 2 }}>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={60} />
            <Environment preset="night" />
            {/* Deep space fog for premium depth */}
            <fog attach="fog" args={["#000000", 40, 120]} />
            <CinematicDataLabScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Navigation */}
      <CinematicNavigation />

      {/* Content Sections */}
      <div className="relative z-10">
        <CinematicHeroSection />
        <CinematicAboutSection />
        <EducationSection />
        <CinematicProjectsSection />
        <CinematicContactSection />
      </div>

      {/* Loading Screen */}
      <Suspense fallback={<LoadingScreen />}>
        <div />
      </Suspense>
    </div>
  )
}
