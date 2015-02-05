console.log("Loaded!");

var scene, camera, renderer, container, containerWidth, containerHeight;
var geometry, material, floor, moves, light;

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

  moves = [];

  // Making geometry of floor
  geometry = new THREE.Geometry();
  // 4 Vertices of Rectangle
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(300, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, 300));
  geometry.vertices.push(new THREE.Vector3(300, 0, 300));
  
  
  // Floor
  geometry.faces.push(new THREE.Face3(0, 1, 2));
  geometry.faces.push(new THREE.Face3(3, 2, 1));
 



  material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide
  });



  floor = new THREE.Mesh(geometry, material);
  floor.position.set(0, 0, 0);
  scene.add(floor);

  camera = new THREE.PerspectiveCamera(75, (containerWidth / containerHeight), 1, 1000);
  camera.position.set(444, 444, 444);
  camera.lookAt(new THREE.Vector3(0, 0, 0));




  renderer = new THREE.WebGLRenderer();
  renderer.setSize( containerWidth, containerHeight);

  container.appendChild(renderer.domElement);
}

function animate() {
  render();
  requestAnimationFrame( animate);

}

function render() {
  renderer.setClearColor("#FA9A1B");
  renderer.render(scene, camera);
  
}

function newMove(){
  var invisiBoxGeo = new THREE.BoxGeometry(100, 100, 100);
  var invisiBoxMat = new THREE.MeshBasicMaterial({transparent: true, opacity: 0});
  var invisiBox = new THREE.Mesh(invisiBoxGeo, invisiBoxMat);
  var visiBoxGeo = new THREE.BoxGeometry(70, 70, 70);
  var visiBoxMat = new THREE.MeshBasicMaterial({color: 0xC429B5});
  var visiBox = new THREE.Mesh(visiBoxGeo, visiBoxMat);
  invisiBox.position.set(0, 100, 0);
  invisiBox.add(visiBox);
  moves.push(invisiBox);
  moves.push(visiBox);
  scene.add(invisiBox);
  // scene.add(visiBox);
}









