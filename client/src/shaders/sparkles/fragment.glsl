uniform vec3 uColorCyan;
uniform vec3 uColorBlue;

varying vec2 vUv;
varying float vNormalX;

void main()
{
    float distToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = clamp(0.04 / distToCenter - 0.1, 0.0, 1.0);

    vec3 color = mix(uColorCyan, uColorBlue, vNormalX);
    color += vec3(0.15);

    gl_FragColor = vec4(color, strength);
    #include <colorspace_fragment>
}