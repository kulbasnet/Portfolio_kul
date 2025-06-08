// import * as THREE from "three";
// import store from "./store";

// export default class Camera {
//   constructor(scene) {
//     this.scene = scene;
//     this.init();
//   }

//   init() {
//     this.instance = new THREE.PerspectiveCamera(
//       35,
//       store.w.w / store.w.h,
//       0.1,
//       1000
//     );
//     this.instance.position.set(0, 0, 5);
//     this.scene.add(this.instance);
//   }

//   resize() {
//     this.instance.aspect = store.w.w / store.w.h;
//     this.instance.updateProjectionMatrix();
//   }
// }