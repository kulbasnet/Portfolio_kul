// import { TextureLoader } from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// export default class Resources {
//   constructor() {
//     this.gltfLoader = new GLTFLoader();
//     this.textureLoader = new TextureLoader();

//     this.loaded = 0;
//     this.path = "/";
//     this.toLoad = [
//       {
//         name: "noise",
//         file: "perlin.png",
//         loader: "textureLoader",
//       },
//       {
//         name: "gradient",
//         file: "gradient.jpg",
//         loader: "textureLoader",
//       },
//     ];

//     this.sources = {};
//   }

//   load() {
//     return new Promise((resolve) => {
//       for (let i = 0; i < this.toLoad.length; i++) {
//         const { name, file, loader } = this.toLoad[i];

//         if (loader === "gltfLoader") {
//           this.gltfLoader.load(this.path + file, (object) => {
//             this.sources[name] = object;
//             this.loaded++;

//             this.loaded === this.toLoad.length && resolve();
//           });
//         } else if (loader === "textureLoader") {
//           this.textureLoader.load(this.path + file, (texture) => {
//             this.sources[name] = texture;
//             this.loaded++;

//             this.loaded === this.toLoad.length && resolve();
//           });
//         }
//       }
//     });
//   }
// }