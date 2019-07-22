import { GetRandomNum } from "./helper.js";
import * as THREE from "../build/three.module.js";
import { GLTFLoader } from '../jsm/loaders/GLTFLoader.js';

export function CreateBird(scene, mixers) {
    let loader = new GLTFLoader();
    loader.load( 'models/gltf/Flamingo.glb', ( gltf ) => {
        let mesh = createBirdMesh(gltf);
        let s = 0.35;
        scene.add( mesh );
        let mixer = new THREE.AnimationMixer( mesh );
        mixer.clipAction( gltf.animations[ 0 ] ).setDuration( 1 ).play();
        mixers.push( mixer );
    } );
}

function createBirdMesh(gltf) {
    let birdMesh = gltf.scene.children[ 0 ];
    let s = 0.35;
    birdMesh.scale.set( s, s, s );
    birdMesh.position.y = 150;
    birdMesh.rotation.y = 3.45;
    birdMesh.castShadow = true;
    birdMesh.receiveShadow = true;
    return birdMesh;

}