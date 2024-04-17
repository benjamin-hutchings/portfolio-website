import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ThreeCanvas component creates a 3D canvas using THREE.js
const ThreeCanvas = () => {
  const mountRef = useRef(null); // Ref to the mount point for the renderer

  useEffect(() => {
    // Initialize the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = setupCamera();
    const renderer = setupRenderer();
    mountRef.current.appendChild(renderer.domElement); // Attach the renderer to the DOM

    // Lighting and material setup
    addLighting(scene);
    const { geometry, material } = setupMaterials();
    const nodes = createNodes(scene, geometry, material);

    // Connect nodes and animate the scene
    createConnections(nodes, scene);
    animate(scene, camera, renderer, nodes);

    // Cleanup on component unmount
    return () => cleanup(renderer, mountRef);
  }, []);

  // Render the container that will hold the canvas
  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

// Setup the camera for the scene
const setupCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 100; // Position the camera
  return camera;
};

// Configure the renderer
const setupRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the rendering window
  return renderer;
};

// Add lighting to the scene
const addLighting = (scene) => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Soft white light
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1, 1000); // Brighter point light
  pointLight.position.set(50, 50, 50);
  scene.add(pointLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Directional light from above
  directionalLight.position.set(0, 1, 0);
  scene.add(directionalLight);
};

// Set up materials and geometry for the nodes
const setupMaterials = () => {
  const geometry = new THREE.SphereGeometry(0.5, 32, 32); // Define sphere geometry
  const material = new THREE.MeshPhongMaterial({
    color: 0x3498db, // Base color blue
    specular: 0x555555, // Grey specular highlights
    shininess: 30, // Shininess of the material
  });
  return { geometry, material };
};

// Create node meshes and place them randomly within the scene
const createNodes = (scene, geometry, material) => {
  return Array.from({ length: 300 }, () => {
    const randomColor = new THREE.Color(Math.random() * 0xffffff);
    const nodeMaterial = material.clone(); // Clone the base material
    nodeMaterial.color = randomColor; // Assign a random color

    const sphere = new THREE.Mesh(geometry, nodeMaterial);
    sphere.position.set(
      THREE.MathUtils.randFloatSpread(200), // Random position within a range
      THREE.MathUtils.randFloatSpread(200),
      THREE.MathUtils.randFloatSpread(200)
    );
    scene.add(sphere); // Add sphere to the scene

    sphere.userData = {
      targetColor: new THREE.Color(randomColor), // Target color for future reference
      colorChangeProgress: 0, // Initialize progress for color change animation
    };
    return sphere;
  });
};

// Create connections between nodes if they are within a certain distance
const createConnections = (nodes, scene) => {
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0f1624 });
  nodes.forEach((node) => {
    nodes.filter(n => n !== node && node.position.distanceTo(n.position) < 35)
         .slice(0, 4)
         .forEach((closeNode) => {
            const points = [node.position.clone(), closeNode.position.clone()];
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(lineGeometry, lineMaterial.clone());
            line.userData = {
              originalColor: new THREE.Color(0x0f1624),
              targetColor: new THREE.Color(0x0f1624),
              colorChangeProgress: 0,
              pulseChance: 0.27 // Chance for a pulse to start
            };
            scene.add(line);
         });
  });
};

// Function to update colors of lines dynamically based on their state and chance
const updateLineColors = (scene) => {
  scene.traverse((object) => {
    if (object instanceof THREE.Line) {
      if (object.userData.colorChangeProgress <= 0) {
        if (Math.random() < object.userData.pulseChance) {
          // Set a new random target color
          const hsl = object.userData.originalColor.getHSL({ h: 0, s: 0, l: 0 });
          hsl.h += (Math.random() - 0.5) * 0.1; // Small hue variation
          hsl.s = Math.min(hsl.s + 0.1, 0.3);  // Limited saturation
          hsl.l += (Math.random() - 0.5) * 0.1; // Small lightness variation
          object.userData.targetColor.setHSL(hsl.h, hsl.s, hsl.l);
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
        object.userData.colorChangeProgress -= 0.02; // Decrease progress smoothly
      }
    }
  });
};

// Main animation loop
const animate = (scene, camera, renderer, nodes) => {
  const animationLoop = () => {
    requestAnimationFrame(animationLoop);
    updateNodeColors(nodes); // Update node colors
    updateLineColors(scene); // Update line colors
    scene.rotation.x += 0.0005; // Slowly rotate the scene
    scene.rotation.y += 0.0002;
    renderer.render(scene, camera); // Render the scene from the perspective of the camera
  };
  animationLoop();
};

// Function to update node colors based on random triggers
const updateNodeColors = (nodes) => {
  nodes.forEach(node => {
    if (node.userData.colorChangeProgress <= 0) {
      if (Math.random() < 0.03) { // Chance for change
        node.userData.targetColor.setHex(Math.random() * 0xffffff);
        node.userData.colorChangeProgress = 1; // Initiate the color change
      }
    } else {
      node.material.color.lerp(node.userData.targetColor, 0.1);
      node.userData.colorChangeProgress -= 0.1;
    }
  });
};

// Cleanup function to remove the renderer and clean up resources
const cleanup = (renderer, mountRef) => {
  mountRef.current.removeChild(renderer.domElement);
  renderer.dispose();
};

export default ThreeCanvas;
