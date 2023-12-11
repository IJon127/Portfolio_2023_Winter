void main()
{
    float distToCenter = distance(gl_PointCoord, vec2(0.5));
    float strength = clamp(0.2 / distToCenter - 0.5, 0.0, 1.0);
    gl_FragColor = vec4(0.75, 0.75, 0.75, strength);
}