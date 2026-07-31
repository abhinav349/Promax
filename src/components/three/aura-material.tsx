"use client";

import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uElevation;
  varying float vElevation;
  varying vec2 vUv;

  float ripple(vec2 pos, float freq, float speed, float amp, vec2 dir) {
    return sin(dot(pos, dir) * freq + uTime * speed) * amp;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;

    float e = 0.0;
    e += ripple(pos.xy, 0.16, 0.22, 0.12, normalize(vec2(1.0, 0.2)));
    e += ripple(pos.xy, 0.4, 0.15, 0.05, normalize(vec2(-0.4, 1.0)));
    e += ripple(pos.xy, 0.9, 0.35, 0.02, normalize(vec2(0.7, -0.4)));

    pos.z += e * uElevation;
    vElevation = e;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uFloorColor;
  uniform vec3 uGlowColor;
  uniform float uOpacity;
  uniform float uTime;
  varying float vElevation;
  varying vec2 vUv;

  void main() {
    float depth = clamp(vUv.y, 0.0, 1.0);

    vec3 color = mix(uFloorColor, uFloorColor * 1.3, smoothstep(0.0, 0.7, depth));

    float horizonBand = smoothstep(0.85, 0.95, depth) * (1.0 - smoothstep(0.96, 1.0, depth));
    color = mix(color, uGlowColor, horizonBand * 0.65);

    float sweepX = (vUv.x - 0.5);
    float drift = sin(uTime * 0.18) * 0.35;
    float sheen = exp(-pow((sweepX - drift) * 3.2, 2.0));
    color += uGlowColor * sheen * (0.12 + depth * 0.18);

    float glints = smoothstep(0.06, 0.1, vElevation) * smoothstep(0.1, 0.7, depth);
    color = mix(color, uGlowColor, glints * 0.35);

    float nearFade = smoothstep(0.0, 0.1, depth);

    gl_FragColor = vec4(color, uOpacity * nearFade);
  }
`;

export const AuraMaterial = shaderMaterial(
  {
    uTime: 0,
    uElevation: 1,
    uOpacity: 1,
    uFloorColor: new THREE.Color("#0c0a07"),
    uGlowColor: new THREE.Color("#d8b878"),
  },
  vertexShader,
  fragmentShader
);

extend({ AuraMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    auraMaterial: {
      ref?: React.Ref<THREE.ShaderMaterial>;
      transparent?: boolean;
      depthWrite?: boolean;
      side?: THREE.Side;
      uTime?: number;
      uElevation?: number;
      uOpacity?: number;
    };
  }
}
