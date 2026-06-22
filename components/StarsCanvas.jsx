"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function StarsCanvas() {
  return (
    <Canvas>
      <Stars radius={100} count={1000} factor={4} fade speed={2} />
    </Canvas>
  );
}
