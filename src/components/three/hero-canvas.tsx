"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import type { MotionValue } from "motion/react";
import { CleanScene } from "@/components/three/clean-scene";

export default function HeroCanvas({
  scrollProgress,
}: {
  scrollProgress?: MotionValue<number>;
}) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 1.4, 5.2], fov: 40, near: 0.1, far: 60 }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <CleanScene scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  );
}
