export function RandomizeObjectPosition(obj) {
    obj.position.x = 2000 * ( 0.5 - Math.random() );
    obj.position.y = 300 * ( 0.5 - Math.random() ) + 300;
    obj.position.z = 1500 * ( 0.5 - Math.random() );
    obj.rotation.y = 3.14 * ( 0.5 - Math.random() );
    obj.rotation.x = 3.14 * ( 0.5 - Math.random() );
    obj.matrixAutoUpdate = false;
    obj.updateMatrix();
    return obj;
}

export function GetRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}