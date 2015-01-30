console.log("Loaded!")

var scene, camera1, camera2, renderer, container, containerWidth, containerHeight;
var geometry, geometry2, material, material2, mesh, light;

window.onload = function(){
  init();
  animate();
}

function init() {
  scene = new THREE.Scene();

  container = document.getElementsByClassName("container")[0];
  var containerStyles = window.getComputedStyle(container);
  containerWidth = parseInt(containerStyles.getPropertyValue("width"));
  containerHeight = parseInt(containerStyles.getPropertyValue("height"));

  camera1 = new THREE.PerspectiveCamera(75, (containerWidth / 2) / (containerHeight / 2), 1, 10000);
  camera1.position.z = 500;
  camera1.up.set(0, 1, 0);

  
  camera2 = new THREE.PerspectiveCamera(75, (containerWidth / 2) / (containerHeight / 2), 1, 10000);
  camera2.position.x = 800;
  camera2.up.set(0, 1, 0);

  geometry = new THREE.BoxGeometry(200, 200, 200);
  material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
  });

  geometry2 = new THREE.BoxGeometry(300, 300, 300);
  material2 = new THREE.MeshBasicMaterial({
    color: 0xAFC916,
    wireframe: true
  });



  cube1 = new THREE.Mesh(geometry, material);
  cube1.position.set(0, 100, 0);
  scene.add(cube1);

  cube2 = new THREE.Mesh(geometry2, material2);
  cube2.position.set(400, 100, 0);
  scene.add(cube2);

  light = new THREE.DirectionalLight(0xFFFFFF, 1);
  light.position.set(0, 350, 0);
  scene.add(light);



  renderer = new THREE.WebGLRenderer();
  renderer.setSize( containerWidth, containerHeight);

  container.appendChild(renderer.domElement);
}

function animate() {
  render();
  requestAnimationFrame( animate);

}

function render() {
  renderer.setViewport(0, 0, (containerWidth / 2), containerHeight);
  renderer.setScissor(0, 0, (containerWidth / 2), containerHeight);
  renderer.enableScissorTest(true);
  camera1.aspect = (containerWidth / 2) /containerHeight;
  renderer.render(scene, camera1);

  renderer.setViewport((0.5 * containerWidth), 0, (containerWidth / 2), containerHeight);
  renderer.setScissor((0.5 * containerWidth), 0, (containerWidth / 2), containerHeight);
  renderer.enableScissorTest(true);
  camera1.aspect = (containerWidth / 2) /containerHeight;
  renderer.render(scene, camera2);

}