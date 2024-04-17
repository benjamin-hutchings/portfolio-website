import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = setupCamera();
    const renderer = setupRenderer();
    mountRef.current.appendChild(renderer.domElement);

    addLighting(scene);
    const { geometry, material } = setupMaterials();
    const nodes = createNodes(scene, geometry, material);

    createConnections(nodes, scene);
    animate(scene, camera, renderer, nodes);

    return () => cleanup(renderer, mountRef);
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

const setupCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 110;
  return camera;
};

const setupRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
};

const addLighting = (scene) => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
  pointLight.position.set(50, 50, 50);
  scene.add(pointLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(0, 1, 0);
  scene.add(directionalLight);
};

const setupMaterials = () => {
  const geometry = new THREE.SphereGeometry(0.5, 32, 32);
  const material = new THREE.MeshPhongMaterial({
    color: 0x3498db,
    specular: 0x555555,
    shininess: 30,
  });
  return { geometry, material };
};

const createNodes = (scene, geometry, material) => {
  return Array.from({ length: 300 }, () => {
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

    sphere.userData = {
      targetColor: new THREE.Color(randomColor),
      colorChangeProgress: 0,
    };
    return sphere;
  });
};

const createConnections = (nodes, scene) => {
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0f1624 });
  nodes.forEach((node) => {
    nodes.filter(n => n !== node && node.position.distanceTo(n.position) < 35)
         .slice(0, 3)
         .forEach((closeNode) => {
            const points = [node.position.clone(), closeNode.position.clone()];
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(lineGeometry, lineMaterial.clone());
            line.userData = {
              originalColor: new THREE.Color(0x0f1624),
              targetColor: new THREE.Color(0x0f1624),
              colorChangeProgress: 0,
              pulseChance: 0.001 // Adjust pulse chance as needed
            };
            scene.add(line);
         });
  });
};

const updateLineColors = (scene) => {
  scene.traverse((object) => {
    if (object instanceof THREE.Line) {
      if (object.userData.colorChangeProgress <= 0) {
        if (Math.random() < object.userData.pulseChance) {
          // Set a new random target color
          const hsl = object.userData.originalColor.getHSL({ h: 0, s: 0, l: 0 });
          hsl.h += (Math.random() - 0.5) * 0.1; // Small hue variation
          hsl.s = Math.min(hsl.s + 0.1, 0.3);  // Limited saturation
          hsl.l += (Math.random() - 0.5) * 0.1; // Small lightness variation within a safe range
          object.userData.targetColor.setHSL(hsl.h, hsl.s, hsl.l);
          object.userData.targetColor.setHex(Math.random() * 0xffffff);
          object.userData.colorChangeProgress = 1; // Start the pulse
        }
      } else {
        if (object.userData.colorChangeProgress > 0.5) {
          // Fade towards the target color
          object.material.color.lerp(object.userData.targetColor, 0.1);
        } else {
          // Begin fading back to the original color
          object.material.color.lerp(object.userData.originalColor, 0.1);
        }
        object.userData.colorChangeProgress -= 0.02; // Decrease progress more smoothly
      }
    }
  });
};



const animate = (scene, camera, renderer, nodes) => {
  const animationLoop = () => {
    requestAnimationFrame(animationLoop);
    updateNodeColors(nodes);
    updateLineColors(scene);
    scene.rotation.x += 0.0005;
    scene.rotation.y += 0.0002;
    renderer.render(scene, camera);
  };
  animationLoop();
};

const updateNodeColors = (nodes) => {
  nodes.forEach(node => {
    if (node.userData.colorChangeProgress <= 0) {
      if (Math.random() < 0.002) {
        node.userData.targetColor.setHex(Math.random() * 0xffffff);
        node.userData.colorChangeProgress = 1;
      }
    } else {
      node.material.color.lerp(node.userData.targetColor, 0.1);
      node.userData.colorChangeProgress -= 0.1;
    }
  });
};

const cleanup = (renderer, mountRef) => {
  mountRef.current.removeChild(renderer.domElement);
  renderer.dispose();
};

export default ThreeCanvas;
