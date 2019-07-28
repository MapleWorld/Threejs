import {
    Mesh,
    Shape,
    ShapeGeometry,
    MeshBasicMaterial
} from "../build/three.module.js";

export function HeartShapeMesh() {
    let x = 0,
        y = 0;
    let heartShape = new Shape();
    heartShape.moveTo(x + 5, y + 5);
    heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
    let geometry = new ShapeGeometry(heartShape);
    let material = new MeshBasicMaterial({ color: 'hotpink' });
    return new Mesh(geometry, material);
};

export function HeartShape2DEquationPositive(x) {
    return x ** (9 / 10) + Math.sqrt(10000 - x ** 2);
};

export function HeartShape2DEquationNegative(x) {
    return x ** (9 / 10) - Math.sqrt(10000 - x ** 2);
};


export function CreateHeartShape(size) {
    let heartList = [];
    for (let i = 0; i < size; i++) {
        let leftUpperHalfHeartMesh = HeartShapeMesh();
        let leftLowerHalfHeartMesh = HeartShapeMesh();
        let rightUpperHalfHeartMesh = HeartShapeMesh();
        let rightLowerHalfHeartMesh = HeartShapeMesh();

        leftUpperHalfHeartMesh.position.x = i * -10;
        leftUpperHalfHeartMesh.position.y = HeartShape2DEquationPositive(i) * 10 + 1000;
        leftLowerHalfHeartMesh.position.x = i * -10;
        leftLowerHalfHeartMesh.position.y = HeartShape2DEquationNegative(i) * 10 + 1000;

        rightUpperHalfHeartMesh.position.x = i * 10;
        rightUpperHalfHeartMesh.position.y = HeartShape2DEquationPositive(i) * 10 + 1000;
        rightLowerHalfHeartMesh.position.x = i * 10;
        rightLowerHalfHeartMesh.position.y = HeartShape2DEquationNegative(i) * 10 + 1000;

        leftUpperHalfHeartMesh.updateMatrix();
        leftLowerHalfHeartMesh.updateMatrix();
        rightUpperHalfHeartMesh.updateMatrix();
        rightLowerHalfHeartMesh.updateMatrix();

        heartList.push(leftUpperHalfHeartMesh);
        heartList.push(leftLowerHalfHeartMesh);
        heartList.push(rightUpperHalfHeartMesh);
        heartList.push(rightLowerHalfHeartMesh);
    }
    return heartList;
};












