const scene = new THREE.Scene();
const cameraLeft = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);
const cameraRight = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function render() {
  renderer.setScissorTest(true);
  
  // Renderizar para o olho esquerdo
  renderer.setScissor(0, 0, window.innerWidth / 2, window.innerHeight);
  renderer.setViewport(0, 0, window.innerWidth / 2, window.innerHeight);
  renderer.render(scene, cameraLeft);
  
  // Renderizar para o olho direito
  renderer.setScissor(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
  renderer.setViewport(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
  renderer.render(scene, cameraRight);
  
  renderer.setScissorTest(false);
  
  requestAnimationFrame(render);
}
render();
