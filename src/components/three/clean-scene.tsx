"use client";
/* eslint-disable react-hooks/immutability -- react-three-fiber's useFrame is an
   imperative render-loop escape hatch: mutating camera/object3D properties per
   frame (instead of via setState) is the documented, performant way to drive
   animation and is unrelated to React's render purity rules. */

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import type { MotionValue } from "motion/react";
import "./aura-material";

type AuraMaterialImpl = THREE.ShaderMaterial & {
  uTime: number;
  uElevation: number;
  uOpacity: number;
};

const FLAT_ROTATION_X = -Math.PI / 2;

export function CleanScene({
  scrollProgress,
}: {
  scrollProgress?: MotionValue<number>;
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const { camera } = useThree() as { camera: THREE.PerspectiveCamera };

  const geometry = useMemo(
    () => new THREE.PlaneGeometry(44, 58, 120, 160),
    []
  );

  useFrame((state, delta) => {
    const material = materialRef.current as AuraMaterialImpl | null;
    if (material) {
      material.uTime += delta;
    }

    pointer.current.x += (state.pointer.x - pointer.current.x) * 0.03;
    pointer.current.y += (state.pointer.y - pointer.current.y) * 0.03;

    if (groupRef.current) {
      groupRef.current.rotation.x = FLAT_ROTATION_X + pointer.current.y * 0.02;
      groupRef.current.rotation.z = pointer.current.x * 0.015;
    }

    const progress = scrollProgress?.get() ?? 0;
    camera.position.y = 1.4 - progress * 0.6;
    camera.position.z = 5.2 - progress * 2.5;
    camera.fov = 40 + progress * 6;
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0.3, -14);

    if (material) {
      material.uOpacity = THREE.MathUtils.lerp(1, 0.35, progress);
    }
  });

  return (
    <>
      <color attach="background" args={["#0a0806"]} />
      <fog attach="fog" args={["#0a0806", 8, 30]} />

      <group ref={groupRef} position={[0, -0.6, -7]} rotation={[FLAT_ROTATION_X, 0, 0]}>
        <mesh geometry={geometry}>
          <auraMaterial
            ref={materialRef}
            uElevation={1}
            transparent
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      <Sparkles
        count={60}
        scale={[18, 5, 22]}
        position={[0, 1.4, -9]}
        size={1.4}
        speed={0.15}
        opacity={0.35}
        color="#e8cf8f"
      />
    </>
  );
}
