import {
    Mesh,
    Shape,
    ShapeGeometry,
    MeshBasicMaterial
} from "../build/three.module.js";

export function HeartShapeMesh() {
    let x = 0, y = 0;
    let heartShape = new Shape();

    heartShape.moveTo( x + 5, y + 5 );
    heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
    let geometry = new ShapeGeometry( heartShape );
    let material = new MeshBasicMaterial( { color: 'hotpink' } );
    return new Mesh( geometry, material ) ;
};
