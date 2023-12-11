uniform float uPixelRatio;

//from original drei parkles helper
uniform float time; 
attribute float size;  
attribute float speed;  
attribute float opacity;
attribute vec3 noise;

varying vec2 vUv;
varying float vNormalX;



void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
    modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
    modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPostion = projectionMatrix * viewPosition;
    gl_Position = projectionPostion;
    gl_PointSize = size * 50.0 * uPixelRatio;
    gl_PointSize *= (1.0 / - viewPosition.z);

    vUv = uv;
    vNormalX = (position.x-2.0) / 8.0 + 0.5;
}