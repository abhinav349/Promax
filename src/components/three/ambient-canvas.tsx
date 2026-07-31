"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import type { Group } from "three";

function DriftingRing() {
  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.05;
    ref.current.rotation.x = 0.6 + Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <group ref={ref} rotation={[0.6, 0, 0]}>
      <mesh>
        <torusGeometry args={[2.6, 0.008, 16, 120]} />
        <meshBasicMaterial color="#c9a24d" transparent opacity={0.35} />
      </mesh>
      <mesh>
        <torusGeometry args={[3.1, 0.005, 16, 120]} />
        <meshBasicMaterial color="#7a8699" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function AmbientCanvas({ className }: { className?: string }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      className={className}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <DriftingRing />
        <Sparkles
          count={35}
          scale={[8, 5, 4]}
          size={1.6}
          speed={0.2}
          opacity={0.4}
          color="#e8cf8f"
        />
      </Suspense>
    </Canvas>
  );
}
