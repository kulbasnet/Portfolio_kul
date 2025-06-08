// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import gsap from 'gsap';
// import Resources from './Resources';
// import Renderer from './Renderer';
// import Camera from './Camera';
// import World from './World';
// import store from './store';

// class ThreeApp {
//   constructor(container) {
//     store.w = {
//       w: container.clientWidth,
//       h: container.clientHeight,
//     };

//     this.renderer = new Renderer(container);
//     this.scene = new THREE.Scene();
//     this.camera = new Camera(this.scene);
//     this.resources = new Resources();

//     this.resources.load().then(() => {
//       this.world = new World(
//         this.renderer.instance,
//         this.camera.instance,
//         this.scene,
//         this.resources.sources
//       );
//     });

//     this.move = this.move.bind(this);
//     this.resize = this.resize.bind(this);
//     this.update = this.update.bind(this);

//     window.addEventListener("mousemove", this.move);
//     window.addEventListener("resize", this.resize);

//     this.animationId = requestAnimationFrame(this.update);
//   }

//   move(e) {
//     const x = e.clientX;
//     const y = e.clientY;

//     this.mouse = {
//       dom: {
//         x,
//         y,
//       },
//       normalized: {
//         x: x / store.w.w,
//         y: y / store.w.h,
//       },
//       gl: {
//         x: gsap.utils.mapRange(0, store.w.w, -1, 1, x),
//         y: gsap.utils.mapRange(0, store.w.h, -1, 1, y),
//       },
//     };

//     this.world && this.world.move(this.mouse);
//   }

//   resize() {
//     store.w = {
//       w: window.innerWidth,
//       h: window.innerHeight,
//     };

//     this.camera && this.camera.resize();
//     this.world && this.world.resize();
//     this.renderer && this.renderer.resize();
//   }

//   update() {
//     if (this.world) {
//       this.world.update();
//     }
//     this.animationId = requestAnimationFrame(this.update);
//   }

//   destroy() {
//     window.removeEventListener("mousemove", this.move);
//     window.removeEventListener("resize", this.resize);
//     cancelAnimationFrame(this.animationId);
//     this.renderer.instance.dispose();
//     this.scene.traverse(object => {
//       if (object.isMesh) {
//         object.geometry.dispose();
//         if (object.material) {
//           if (Array.isArray(object.material)) {
//             object.material.forEach(material => material.dispose());
//           } else {
//             object.material.dispose();
//           }
//         }
//       }
//     });
//   }
// }

// export default function ThreeBack() {
//   const containerRef = useRef();

//   useEffect(() => {
//     if (!containerRef.current) return;
    
//     const app = new ThreeApp(containerRef.current);
    
//     return () => app.destroy();
//   }, []);

//   return <div ref={containerRef} className="three-background" />;
// }