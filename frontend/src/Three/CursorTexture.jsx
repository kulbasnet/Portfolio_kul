// import * as THREE from "three";

// export class CursorTexture {
//   constructor(options) {
//     this.options = options || {};
//     this.size = 64;
//     this.radius = this.size * 0.1;
//     this.points = [];

//     this.init();
//   }

//   init() {
//     this.canvas = document.createElement("canvas");
//     this.canvas.width = this.size;
//     this.canvas.height = this.size;

//     this.ctx = this.canvas.getContext("2d");
//     this.ctx.fillStyle = "black";
//     this.ctx.fillRect(0, 0, this.size, this.size);

//     this.texture = new THREE.CanvasTexture(this.canvas);
//   }

//   addPoint(point) {
//     this.points.push({
//       x: point.x,
//       y: point.y,
//     });

//     if (this.points.length > 20) {
//       this.points.shift();
//     }
//   }

//   update() {
//     this.ctx.fillStyle = "black";
//     this.ctx.fillRect(0, 0, this.size, this.size);

//     for (let i = 0; i < this.points.length; i++) {
//       const point = this.points[i];
//       const x = point.x * this.size;
//       const y = (1 - point.y) * this.size;

//       this.ctx.beginPath();
//       this.ctx.arc(x, y, this.radius, 0, Math.PI * 2);
//       this.ctx.fillStyle = "white";
//       this.ctx.fill();
//     }

//     this.texture.needsUpdate = true;
//   }
// }