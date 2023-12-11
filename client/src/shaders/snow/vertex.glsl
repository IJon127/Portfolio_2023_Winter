uniform float uPixelRatio;
uniform float uTime;
uniform float uBottomY;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    float initialHight = position.y - uBottomY;
    float speed = (uTime*0.7)-initialHight;
    modelPosition.y -= mod(speed, 40.0)-20.0;
    
    modelPosition.x += sin(uTime+position.y) * 0.1;
    modelPosition.z += sin(uTime+position.x) * 0.3;


    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    gl_PointSize = 40.0 * uPixelRatio;
    gl_PointSize *=(1.0/-viewPosition.z);
}