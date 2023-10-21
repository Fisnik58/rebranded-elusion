// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const ThreeDScene = () => {
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//   const renderer = new THREE.WebGLRenderer();
  
//   // Increase the size of the triangle
//   const geometry = new THREE.ConeGeometry(2, 4, 3); // Adjust the parameters as needed

//   // Use neon colors for the lines
//   const material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00, // Base color (green)
//     wireframe: true, // Render lines only
//     emissive: 0xff00ff, // Neon pink
//   });

//   const cone = new THREE.Mesh(geometry, material);

//   const scrollPosition = useRef(0);

//   const handleScroll = () => {
//     // You can update the rotation or position of the 3D object based on the scroll position here
//     const rotationSpeed = 0.005;
//     cone.rotation.x += rotationSpeed;
//     cone.rotation.y += rotationSpeed;

//     // Update the scroll position
//     scrollPosition.current = window.scrollY;

//     // Render the scene
//     renderer.render(scene, camera);
//   };

//   useEffect(() => {
//     camera.position.z = 5;

//     scene.add(cone);
//     renderer.setSize(window.innerWidth, 500); // Adjust the height as needed

//     // Add the WebGL canvas to your component
//     document.getElementById("3d-canvas").appendChild(renderer.domElement);

//     // Listen for scroll events and update the scene accordingly
//     window.addEventListener("scroll", handleScroll);

//     // Clean up event listener on unmount
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return <div id="3d-canvas" />;
// };

// export default ThreeDScene;
