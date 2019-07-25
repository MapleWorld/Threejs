import { GetRandomNum } from "./utility.js";
import * as THREE from "../build/three.module.js";
import { GLTFLoader } from '../jsm/loaders/GLTFLoader.js';

export function CreateBird(scene, mixers) {
    let loader = new GLTFLoader();
    loader.load('models/gltf/Flamingo.glb', (gltf) => {
        let mesh = createBirdMesh(gltf);
        scene.add(mesh);
        let mixer = new THREE.AnimationMixer(mesh);
        mixer.clipAction(gltf.animations[0]).setDuration(1).play();
        mixers.push(mixer);
    });
}

function createBirdMesh(gltf, position = 0) {
    const s = 0.35;
    let birdMesh = gltf.scene.children[position];
    birdMesh.scale.set(s, s, s);
    birdMesh.position.x = GetRandomNum(0, 1000); // 
    birdMesh.position.y = GetRandomNum(500, 1000); // Height
    birdMesh.rotation.y = 0;
    birdMesh.castShadow = true;
    birdMesh.receiveShadow = true;
    return birdMesh;

}