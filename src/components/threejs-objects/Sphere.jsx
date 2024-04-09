// Sphere.jsx
import React, { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { OrbitControls } from '@react-three/drei';
extend({ OrbitControls });

const Sphere = () => {
  const meshRef = useRef();
  const controlsRef = useRef();
  const [spring, set] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  }));

  // Rotate mesh every frame, this is outside of the spring physics
  useFrame(() => {
    if (meshRef.current) {
      // Constant rotation for demonstration
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <a.mesh
        ref={meshRef}
        onClick={() => set({ scale: [1.5, 1.5, 1.5] })}
        onPointerOver={() => set({ scale: [1.2, 1.2, 1.2] })}
        onPointerOut={() => set({ scale: [1, 1, 1] })}
        scale={spring.scale}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
      </a.mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <orbitControls ref={controlsRef} args={[meshRef.current]} />
    </>
  );
};

export default Sphere;
