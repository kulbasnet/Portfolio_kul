// import * as THREE from "three";
// import store from "./store";

// export default class Renderer {
//   constructor(container) {
//     this.container = container;
//     this.init();
//   }

//   init() {
//     this.instance = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: true,
//     });

//     this.instance.setPixelRatio(window.devicePixelRatio);
//     this.instance.setSize(this.container.clientWidth, this.container.clientHeight);
//     this.container.appendChild(this.instance.domElement);
//   }

//   resize() {
//     this.instance.setSize(store.w.w, store.w.h);
//   }
// }