console.log("Loaded!")

var scene, camera, renderer, container, containerWidth, containerHeight;
var geometry, material, gameBox, light;

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


  geometry = new THREE.Geometry();
  geometry.colorsNeedUpdate = true;
  // Making geometry of gamebox, which will be a column with a floor and no ceiling
  // 8 Vertices of Rectangular Prism
  geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  geometry.vertices.push(new THREE.Vector3(300, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 0, 300));
  geometry.vertices.push(new THREE.Vector3(300, 0, 300));
  geometry.vertices.push(new THREE.Vector3(0, 1000, 0));
  geometry.vertices.push(new THREE.Vector3(300, 1000, 0));
  geometry.vertices.push(new THREE.Vector3(0, 1000, 300));
  geometry.vertices.push(new THREE.Vector3(300, 1000, 300));
  
  // Floor
  geometry.faces.push(new THREE.Face3(0, 1, 2));
  geometry.faces.push(new THREE.Face3(3, 2, 1));
  // Four Sides
  geometry.faces.push(new THREE.Face3(0, 1, 4));
  geometry.faces.push(new THREE.Face3(1, 4, 5));
  geometry.faces.push(new THREE.Face3(0, 2, 4));
  geometry.faces.push(new THREE.Face3(2, 4, 6));
  geometry.faces.push(new THREE.Face3(2, 3, 6));
  geometry.faces.push(new THREE.Face3(3, 6, 7));
  geometry.faces.push(new THREE.Face3(3, 7, 1));
  geometry.faces.push(new THREE.Face3(1, 5, 7));
  geometry.faces[4].color.setHex('#F7AF14');



  material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5
  });



  gameBox = new THREE.Mesh(geometry, material);
  gameBox.position.set(0, 0, 0);
  scene.add(gameBox);

  camera = new THREE.PerspectiveCamera(75, (containerWidth / containerHeight), 1, 1000);
  camera.position.set(600, 500, 800);
  camera.lookAt(new THREE.Vector3(0, 500, 0));




  renderer = new THREE.WebGLRenderer();
  renderer.setSize( containerWidth, containerHeight);

  container.appendChild(renderer.domElement);
}

function animate() {
  render();
  requestAnimationFrame( animate);

}

function render() {
  renderer.setClearColor("#6CB2F0");
  renderer.render(scene, camera);
  

}