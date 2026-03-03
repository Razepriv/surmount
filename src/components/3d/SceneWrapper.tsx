"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

interface SceneProps {
  children?: React.ReactNode;
  className?: string;
  zoom?: boolean;
}

export function SceneWrapper({ children, className, zoom = false }: SceneProps) {
  return (
    <div className={`relative w-full h-full min-h-[400px] ${className}`}>
      <Suspense 
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-cloud-white)]/50">
            <Loader2 className="w-8 h-8 animate-spin text-[var(--color-surmount-red)]" />
          </div>
        }
      >
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
          
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          
          {children}
          
          <Environment preset="city" />
          <OrbitControls enableZoom={zoom} autoRotate={true} autoRotateSpeed={0.5} />
        </Canvas>
      </Suspense>
    </div>
  );
}

// Fallback sphere geometry until actual GLTF models are available
export function PlaceholderGeo() {
  return (
    <mesh castShadow receiveShadow>
      <icosahedronGeometry args={[2, 2]} />
      <meshStandardMaterial 
        color="#C8B99A" 
        wireframe={true}
        metalness={0.5}
        roughness={0.2} 
      />
    </mesh>
  );
}