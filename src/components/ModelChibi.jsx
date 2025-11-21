// src/components/ModelChibi.jsx

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model(props) {
  const { scene } = useGLTF('/model.glb');
  return <primitive object={scene} {...props} />;
}

export default function ModelChibi() {
  return (
    <Canvas 
      shadows
      camera={{ position: [0, 0.8, 5], fov: 35 }} 
    >
      <Suspense fallback={null}>
        
        <ambientLight intensity={2.5} /> 
        
        {/* --- LAMPU UTAMA DARI ATAS/BELAKANG (CASTS SHADOW) --- */}
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={4} 
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}        
          shadow-camera-near={0.5}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* --- TAMBAHAN: LAMPU DARI DEPAN (TIDAK CAST SHADOW) --- */}
        {/* Ini akan menerangi wajah dan area depan tanpa membuat bayangan baru */}
        <directionalLight 
            position={[0, 1, 5]} // Posisikan di depan kamera
            intensity={2.0} 
            castShadow={false} // MATIKAN castShadow di sini
        />
        
        <directionalLight 
          position={[-5, 0, -5]} 
          intensity={3.0} // <-- Saya naikin dari 0.5 jadi 2.0
        />
        <directionalLight 
            position={[5, 0, 5]} // Posisikan di depan kamera
            intensity={3.0} 
            castShadow={false} // MATIKAN castShadow di sini
        />
        
        <Model scale={1.5} position={[0, 0, 0]} castShadow />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.7} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 3} 
        />
        
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.3} />
        </mesh>

      </Suspense>
    </Canvas>
  );
}