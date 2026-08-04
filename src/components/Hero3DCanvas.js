import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const Hero3DCanvas = () => {
  const containerRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer = null;
    let animationFrameId = null;
    let scene = null;
    let camera = null;
    let geometryCore = null;
    let materialCore = null;
    let geometryInner = null;
    let materialInner = null;
    let particlesGeometry = null;
    let particlesMaterial = null;

    try {
      // 1. Safe WebGL Context Test
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }

      // 2. Scene, Camera, Renderer
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 4.5;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Handle Context Loss
      renderer.domElement.addEventListener(
        "webglcontextlost",
        (event) => {
          event.preventDefault();
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
        },
        false
      );

      // Group for 3D objects
      const group = new THREE.Group();
      scene.add(group);

      // 1. Cyber Core (Icosahedron Wireframe)
      geometryCore = new THREE.IcosahedronGeometry(1.6, 2);
      materialCore = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const coreMesh = new THREE.Mesh(geometryCore, materialCore);
      group.add(coreMesh);

      // 2. Inner Glowing Core
      geometryInner = new THREE.IcosahedronGeometry(0.9, 1);
      materialInner = new THREE.MeshPhongMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
        shininess: 100,
      });
      const innerMesh = new THREE.Mesh(geometryInner, materialInner);
      group.add(innerMesh);

      // 3. Particle Starfield Cloud
      const particlesCount = 450;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 12;
        posArray[i + 1] = (Math.random() - 0.5) * 12;
        posArray[i + 2] = (Math.random() - 0.5) * 10;
      }

      particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      particlesMaterial = new THREE.PointsMaterial({
        size: 0.035,
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });

      const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );
      scene.add(particlesMesh);

      // 4. Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const pointLight1 = new THREE.PointLight(0x38bdf8, 2, 20);
      pointLight1.position.set(5, 5, 5);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0xf59e0b, 1.5, 20);
      pointLight2.position.set(-5, -5, 2);
      scene.add(pointLight2);

      // Mouse Parallax Interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event) => {
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        mouseX = (event.clientX - windowHalfX) * 0.0008;
        mouseY = (event.clientY - windowHalfY) * 0.0008;
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Resize Handler
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener("resize", handleResize);

      // Animation Loop
      const clock = new THREE.Clock();

      const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        group.rotation.x = elapsedTime * 0.15 + targetY;
        group.rotation.y = elapsedTime * 0.2 + targetX;

        innerMesh.rotation.x = -elapsedTime * 0.3;
        innerMesh.rotation.y = -elapsedTime * 0.25;

        particlesMesh.rotation.y = elapsedTime * 0.04;
        particlesMesh.rotation.x = elapsedTime * 0.02;

        const scale = 1 + Math.sin(elapsedTime * 2) * 0.04;
        coreMesh.scale.set(scale, scale, scale);

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        if (container && renderer && renderer.domElement) {
          try {
            container.removeChild(renderer.domElement);
          } catch (e) {}
        }
        if (geometryCore) geometryCore.dispose();
        if (materialCore) materialCore.dispose();
        if (geometryInner) geometryInner.dispose();
        if (materialInner) materialInner.dispose();
        if (particlesGeometry) particlesGeometry.dispose();
        if (particlesMaterial) particlesMaterial.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (err) {
      console.warn("WebGL initialization failed, falling back to CSS background:", err);
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(circle at 70% 30%, rgba(56, 189, 248, 0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.12), transparent 50%)",
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
};
