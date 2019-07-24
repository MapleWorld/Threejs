import * as THREE from "../build/three.module.js";

export function LoadPictureObject(filePath) {
    let spriteMap = new THREE.TextureLoader().load(filePath);
    let material = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
    let coverImage = new THREE.Sprite( material );
    coverImage.position.x = 8000;
    coverImage.position.y = 5000;
    coverImage.position.z = -25000;
    coverImage.scale.set(10000, 10000, 1);
    return coverImage;
}