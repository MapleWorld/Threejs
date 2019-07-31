import * as THREE from "../build/three.module.js";
import { CSS3DObject } from '../jsm/renderers/CSS3DRenderer.js';

export function CreateTable(words) {
    let objectList = [];
    for ( var i = 0; i < words.length; i += 5 ) {
        var element = document.createElement( 'div' );
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

        var number = document.createElement( 'div' );
        number.className = 'number';
        number.textContent = ( i / 5 ) + 1;
        element.appendChild( number );

        var symbol = document.createElement( 'div' );
        symbol.className = 'symbol';
        symbol.textContent = words[ i ];
        element.appendChild( symbol );

        var details = document.createElement( 'div' );
        details.className = 'details';
        details.innerHTML = words[ i + 1 ] + '<br>' + words[ i + 2 ];
        element.appendChild( details );

        var object = new CSS3DObject( element );
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 5000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        objectList.push( object );
    }
    return objectList;
}

export function CreateTargetObject(words) {
    let targets = { table: [], helix: [], grid: [] };
    targets.table = createTargetTable(words, targets);
    targets.helix = createTargetHelix(words, targets);
    targets.grid = createTargetGrid(words, targets);
    return targets;
}
function createTargetTable(words, targets) {
    let targetTable = [];
    for ( var i = 0; i < words.length; i += 5 ) {
        var object = new THREE.Object3D();
        object.position.x = ( words[ i + 3 ] * 140 ) - 850;
        object.position.y = - ( words[ i + 4 ] * 180 ) + 2050;
        targetTable.push( object );
    }
    return targetTable;
}

function createTargetHelix(words, targets) {
    let targetHelix = [];
    var vector = new THREE.Vector3();
    for ( var i = 0, l = words.length; i < l; i ++ ) {
        var theta = i * 0.175 + Math.PI;
        var object = new THREE.Object3D();
        object.position.setFromCylindricalCoords( 900, theta + 2000, 1500 );
        vector.x = object.position.x * 3;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;
        object.lookAt( vector );
        targetHelix.push( object );
    }
    return targetHelix;
}

function createTargetGrid(words, targets) {
    let targetGrid = [];
    for ( var i = 0; i < words.length; i ++ ) {
        var object = new THREE.Object3D();
        object.position.x = ( ( i % 5 ) * 400 ) - 800;
        object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 1750;
        object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;
        targetGrid.push( object );
    }
    return targetGrid;
}


export function CreateButtons(targets, transform) {
    var button = document.getElementById( 'table' );
    button.addEventListener( 'click', () => {
        transform( targets.table, 2000 );
    }, false );

    var button = document.getElementById( 'helix' );
    button.addEventListener( 'click', () => {
        transform( targets.helix, 2000 );
    }, false );

    var button = document.getElementById( 'grid' );
    button.addEventListener( 'click', () => {
        transform( targets.grid, 2000 );
    }, false );
    transform( targets.table, 2000 );
}