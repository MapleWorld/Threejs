import * as THREE from "../build/three.module.js";
import { CSS3DRenderer } from '../jsm/renderers/CSS3DRenderer.js';

export function CreateWebGLRenderer() {
    let renderer = new THREE.WebGLRenderer({ alpha:true, antialias: true });
    renderer.setClearColor( 0x000000, 0 ); // required
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);    
    renderer.domElement.style.position = 'absolute'; // required
    renderer.domElement.style.top = 0;
    return renderer;
}

export function CreateCss3DRenderer() {
    let css3DRenderer = new CSS3DRenderer();
    css3DRenderer.setSize( window.innerWidth, window.innerHeight );  
    css3DRenderer.domElement.style.position = 'absolute';
    css3DRenderer.domElement.style.top = 0;
    return css3DRenderer;      
}