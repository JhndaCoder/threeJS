import React from 'react';
import * as THREE from 'three';
function Line () {
  // Setting up screen, camera and renderer
  const renderer = new THREE.WebGLRenderer ();
  renderer.setSize (window.innerWidth, window.innerHeight);
  document.body.appendChild (renderer.domElement);

  const camera = new THREE.PerspectiveCamera (
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
  );
  camera.position.set (0, 0, 100);
  camera.lookAt (0, 0, 0);

  const scene = new THREE.Scene ();

  //  Defining material
  const material = new THREE.LineBasicMaterial ({color: 0x0000ff});

  // Defining geometry and vertices
  const points = [];
  points.push (new THREE.Vector3 (-10, 0, 0));
  points.push (new THREE.Vector3 (0, 10, 0));
  points.push (new THREE.Vector3 (10, 0, 0));

  const geometry = new THREE.BufferGeometry ().setFromPoints (points);

  // Now that we have points for two lines and a material, we can put them together to form a line.
  const line = new THREE.Line (geometry, material);

  // All that's left is to add it to the scene and call render.
  scene.add (line);
  renderer.render (scene, camera);

  return <div />;
}

export default Line;
