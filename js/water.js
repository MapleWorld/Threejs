import { Water } from '../jsm/objects/Water.js';
import * as THREE from "../build/three.module.js";

export function CreateWater(dirLight) {
    let waterGeometry = new THREE.PlaneBufferGeometry(100000, 100000);
    let water = new Water(
        waterGeometry, {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load('textures/waternormals.jpg', (texture) => {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            }),
            alpha: 1.0,
            sunDirection: dirLight.position.clone().normalize(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7
        }
    );
    water.rotation.x = -Math.PI / 2;
    return water;
}