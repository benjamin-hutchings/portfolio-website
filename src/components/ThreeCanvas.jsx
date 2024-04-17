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
    camera.position.z = 110;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x3498db,
      specular: 0x555555,
      shininess: 30,
    });

    const nodes = createNodes(scene, geometry, material);
    createConnections(nodes, scene);

    const animate = () => {
      requestAnimationFrame(animate);
      updateNodeColors(nodes);
      scene.rotation.x += 0.0005;
      scene.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    return () => cleanup(renderer, mountRef);
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

function createNodes(scene, geometry, material) {
  return Array.from({ length: 300 }, () => {
    // Clone the material and set a random color for each node
    const randomColor = new THREE.Color(Math.random() * 0xffffff);
    const nodeMaterial = material.clone();
    nodeMaterial.color = randomColor;

    const sphere = new THREE.Mesh(geometry, nodeMaterial);
    sphere.position.set(
      THREE.MathUtils.randFloatSpread(200),
      THREE.MathUtils.randFloatSpread(200),
      THREE.MathUtils.randFloatSpread(200)
    );
    scene.add(sphere);

    // Store the initial random color in userData for potential future reference
    sphere.userData = {
      targetColor: new THREE.Color(randomColor), // Store the random color as the target color initially
      colorChangeProgress: 0,
    };
    return sphere;
  });
}

function createConnections(nodes, scene) {
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0f1624 });
  nodes.forEach((node) => {
    nodes
      .filter((n) => n !== node && node.position.distanceTo(n.position) < 35)
      .slice(0, 3)
      .forEach((closeNode) => {
        const points = [node.position.clone(), closeNode.position.clone()];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
      });
  });
}

function updateNodeColors(nodes) {
  nodes.forEach((node) => {
    if (node.userData.colorChangeProgress <= 0) {
      if (Math.random() < 0.002) {
        // chance to initiate color change
        node.userData.targetColor.setHex(Math.random() * 0xffffff);
        node.userData.colorChangeProgress = 1;
      }
    } else {
      node.material.color.lerp(node.userData.targetColor, 0.1);
      node.userData.colorChangeProgress -= 0.1;
    }
  });
}

function cleanup(renderer, mountRef) {
  mountRef.current.removeChild(renderer.domElement);
  renderer.dispose();
}

export default ThreeCanvas;
