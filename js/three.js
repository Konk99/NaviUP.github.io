import * as THREE from '../vendor/three/build/three.module.js';
import {OrbitControls} from '../vendor/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../vendor/three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,5000);
camera.position.y = 45/180*Math.Pi;
camera.position.x = 800;
camera.position.y = 100;
camera.position.z = 1000;

const loader = new GLTFLoader();
// For local work

loader.load('../vendor/paths/1_20.gltf',function(gltf){
    const model = gltf.scene.children[0];
    model.scale.set(0.1,0.1,0.1);
    model.color = new THREE.Color(0xC9B41B);
    scene.add(gltf.scene);
    console.log(gltf);
    animate();
    },
    function (xhr) {
        console.log((xhr.loaded/xhr.total * 100) + '% loaded');
    });
loader.load('../vendor/models/Schody.gltf',function(gltf){
    const model = gltf.scene;
    model.scale.set(0.1,0.1,0.1);
    scene.add(gltf.scene);
    console.log(gltf);
    animate();
    },
    function (xhr) {
        console.log((xhr.loaded/xhr.total * 100) + '% loaded');
    });
loader.load('../vendor/models/Winda.gltf',function(gltf){
    const model = gltf.scene;
    model.scale.set(0.1,0.1,0.1);
    scene.add(gltf.scene);
    console.log(gltf);
    animate();
    },
    function (xhr) {
        console.log((xhr.loaded/xhr.total * 100) + '% loaded');
    });
// For Server
/*loader.load('../../NaviUP.github.io/vendor/paths/1_2.gltf',function(gltf){
    const model = gltf.scene.children[0];
    model.scale.set(0.1,0.1,0.1);
    model.color = new THREE.Color(0xC9B41B);
    scene.add(gltf.scene);
    console.log(gltf);
    animate();
    },
    function (xhr) {
        console.log((xhr.loaded/xhr.total * 100) + '% loaded');
    });
loader.load('../../NaviUP.github.io/vendor/models/Schody.gltf',function(gltf){
    const model = gltf.scene;
    model.scale.set(0.1,0.1,0.1);
    scene.add(gltf.scene);
    console.log(gltf);
    animate();
    },
    function (xhr) {
        console.log((xhr.loaded/xhr.total * 100) + '% loaded');
    });
loader.load('../../NaviUP.github.io/vendor/models/Winda.gltf',function(gltf){
    const model = gltf.scene;
    model.scale.set(0.1,0.1,0.1);
    scene.add(gltf.scene);
    console.log(gltf);
    animate();
    },
    function (xhr) {
        console.log((xhr.loaded/xhr.total * 100) + '% loaded');
    });*/
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', renderer);

const hilight = new THREE.AmbientLight(0x404040,100);
scene.add(hilight);

const directionalLight = new THREE.DirectionalLight(0xffffff,100);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight)

const light = new THREE.PointLight(0xc4c4c4,10);
light.position.set(0,300,500);
scene.add(light);

const light2 = new THREE.PointLight(0xc4c4c4,10);
light2.position.set(500,100,0);
scene.add(light2);

const light3 = new THREE.PointLight(0xc4c4c4,10);
light3.position.set(0,100,-500);
scene.add(light3);

const light4 = new THREE.PointLight(0xc4c4c4,10);
light4.position.set(-500,300,0);
scene.add(light4);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}