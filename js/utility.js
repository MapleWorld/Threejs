export function RandomizeObjectPosition(obj) {
    obj.position.x = 10000 * (0.5 - Math.random());
    obj.position.y = 10000 * (0.5 - Math.random()) + 1000;
    obj.position.z = 10000 * (0.5 - Math.random());
    obj.rotation.y = 3.14 * (0.5 - Math.random());
    obj.rotation.x = 3.14 * (0.5 - Math.random());
    obj.matrixAutoUpdate = false;
    obj.updateMatrix();
    return obj;
}

export function GetRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

export function RandomizeObjectionRotation(obj) {
    obj.rotation.y = 3.14 * (0.5 - Math.random());
    obj.rotation.x = 3.14 * (0.5 - Math.random());
    obj.matrixAutoUpdate = false;
    obj.updateMatrix();
    return obj;
}