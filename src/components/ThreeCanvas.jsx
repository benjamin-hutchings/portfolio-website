import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene and Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting (basic for now)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Geometry and material for nodes
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x3498db });

    // Create nodes
    const nodes = Array.from({ length: 250 }, () => {
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        THREE.MathUtils.randFloatSpread(200),
        THREE.MathUtils.randFloatSpread(200),
        THREE.MathUtils.randFloatSpread(200)
      );
      scene.add(sphere);
      return sphere;
    });

    // Create connections (simplified)
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0f1624 });
    nodes.forEach(node => {
      const closeNodes = nodes.filter(n => n !== node && node.position.distanceTo(n.position) < 30);
      closeNodes.slice(0, 5).forEach(closeNode => {
        const points = [node.position.clone(), closeNode.position.clone()];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
      });
    });

    // Animation function with rotation
    const animate = () => {
      requestAnimationFrame(animate);

      // Update scene rotation
      scene.rotation.x += 0.002;
      scene.rotation.y += 0.002;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeCanvas;
