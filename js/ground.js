import * as THREE from "../build/three.module.js";

export function CreateGround() {
    var groundMat = new THREE.MeshLambertMaterial( { color: 0xffffff } );
    var groundGeo = new THREE.PlaneBufferGeometry( 10000, 10000 );
    groundMat.color.setHSL( 0.095, 1, 0.75 );
    var ground = new THREE.Mesh( groundGeo, groundMat );
    ground.position.y = - 33;
    ground.rotation.x = - Math.PI / 2;
    ground.receiveShadow = true;
    return ground;
};