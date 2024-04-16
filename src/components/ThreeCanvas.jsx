import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 100; // Adjust camera Z position if necessary

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
    pointLight.position.set(50, 50, 50);
    pointLight.castShadow = true;
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0); // Coming from the top
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x3498db,
      specular: 0x555555,
      shininess: 30
    });

    const nodes = createNodes(scene, geometry, material);
    createConnections(nodes, scene);

    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.x += 0.002;
      scene.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    return () => cleanup(renderer, mountRef);
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

function createNodes(scene, geometry, material) {
  return Array.from({ length: 300 }, () => {
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(
      THREE.MathUtils.randFloatSpread(200),
      THREE.MathUtils.randFloatSpread(200),
      THREE.MathUtils.randFloatSpread(200)
    );
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add(sphere);
    return sphere;
  });
}

function createConnections(nodes, scene) {
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0f1624 });
  nodes.forEach((node) => {
    const closeNodes = nodes.filter(
      (n) => n !== node && node.position.distanceTo(n.position) < 35
    );
    closeNodes.slice(0, 5).forEach((closeNode) => {
      const points = [node.position.clone(), closeNode.position.clone()];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
    });
  });
}

function cleanup(renderer, mountRef) {
  mountRef.current.removeChild(renderer.domElement);
  renderer.dispose();
}

export default ThreeCanvas;
