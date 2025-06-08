// import * as THREE from "three";
// import fragmentShader from "./gradient.frag";
// import vertexShader from "./plane.vert";
// import store from "./store";
// import { CursorTexture } from "./CursorTexture";

// export default class World {
//   constructor(renderer, camera, scene, sources) {
//     this.renderer = renderer;
//     this.camera = camera;
//     this.scene = scene;
//     this.sources = sources;

//     this.planes = [];
//     this.cursorTexture = new CursorTexture({ debug: false });

//     this.createPlane();
//   }

//   createPlane() {
//     const uniforms = {
//       uTime: { value: 0 },
//       uColor1: { value: new THREE.Color("#060d73") },
//       uColor2: { value: new THREE.Color("#f98d28") },
//       uColor3: { value: new THREE.Color("#e81eb9") },
//       uNoise: { value: this.sources.noise },
//       uGradient: { value: this.sources.gradient },
//       uSpeed: { value: 0.5 },
//       uZoom: { value: 0.5 },
//       uGrainAmount: { value: 0.07 },
//       uGrainSpeed: { value: 5 },
//       uCursorTexture: { value: this.cursorTexture.texture },
//       uResolution: { value: new THREE.Vector2(store.w.w, store.w.h) },
//     };

//     const geometry = new THREE.PlaneGeometry(1, 1);
//     const material = new THREE.ShaderMaterial({
//       uniforms,
//       vertexShader,
//       fragmentShader,
//       transparent: true,
//     });

//     const plane = new THREE.Mesh(geometry, material);
//     plane.scale.set(store.w.w, store.w.h, 1);
//     this.planes.push(plane);
//     this.scene.add(plane);
//   }

//   move(mouse) {
//     this.cursorTexture && this.cursorTexture.addPoint(mouse.normalized);
//   }

//   resize() {
//     for (let i = 0; i < this.planes.length; i++) {
//       this.planes[i].scale.set(store.w.w, store.w.h, 1);
//       this.planes[i].material.uniforms.uResolution.value = new THREE.Vector2(
//         store.w.w,
//         store.w.h
//       );
//     }
//   }

//   update() {
//     this.cursorTexture && this.cursorTexture.update();

//     for (let i = 0; i < this.planes.length; i++) {
//       this.planes[i].material.uniforms.uTime.value += 0.01;
//     }

//     this.renderer.render(this.scene, this.camera);
//   }
// }