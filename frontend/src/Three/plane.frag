uniform float uTime;
uniform float uSpeed;
uniform float uZoom;

uniform vec2 uMeshSize;
uniform vec2 uImageSize;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

varying vec2 vUv;

vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec2 mod289(vec2 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec3 permute(vec3 x) {
    return mod289(((x*34.0)+10.0)*x);
}

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, // (3.0-sqrt(3.0))/6.0
    0.366025403784439, // 0.5*(sqrt(3.0)-1.0)
    -0.577350269189626, // -1.0 + 2.0 * C.x
    0.024390243902439); // 1.0 / 41.0
    
    // First corner
    vec2 i = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    
    // Other corners
    
    vec2 i1;
    //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
    
    //i1.y = 1.0 - i1.x;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    // x0 = x0 - 0.0 + 0.0 * C.xx ;
    
    // x1 = x0 - i1 + 1.0 * C.xx ;
    // x2 = x0 - 1.0 + 2.0 * C.xx ;
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    
    // Permutations
    
    i = mod289(i); // Avoid truncation effects in permutation
    
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    
    // Gradients: 41 points uniformly over a line, mapped onto a diamond.
    
    // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
    
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    
    // Normalise gradients implicitly by scaling m
    
    // Approximation of: m *= inversesqrt( a0*a0 + h*h );
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    
    // Compute final noise value at P
    
    vec3 g;
    g.x = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise(in vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  
  // Four corners in 2D of a tile
  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  
  // Smooth Interpolation
  
  
  // Cubic Hermine Curve.  Same as SmoothStep()
  vec2 u = f*f*(3.0-2.0*f);
  // u = smoothstep(0., 1., f);
  
  
  // Mix 4 coorners percentages
  return mix(a, b, u.x) +
  (c - a)* u.y * (1.0 - u.x) +
  (d - b) * u.x * u.y;
}

void main() {
    vec2 uv = vUv;
    float zoom = uZoom;
    //vec3 bgColor = vec3(0.98, 0.55, 0.16);
    //vec3 bgColor = vec3(1., 0.769, 0.071);
    vec3 bgColor = vec3(0.);

    vec3 color1 = uColor1;
    vec3 color2 = uColor2;
    vec3 color3 = uColor3;

    //float n = snoise(vec2(uv.x * zoom, uv.y * zoom) + uTime * uSpeed + 0.5) * 0.5;
    float noise = snoise(vec2(uv.x, -uv.y * zoom + uTime * uSpeed + 0.001)) * 0.8;
    vec2 noisedUv = vec2(uv.x, uv.y - noise);

    //float n1 = smoothstep(0.0, 0.0 + 0.05, n);
    //vec3 color = mix(bgColor, color1, n1);

    //float n2 = smoothstep(0.05, 0.1, n);
    //color = mix(color, color2, n2);

    //float n4 = smoothstep(0.1, 0.2, n);
    //color = mix(color, bgColor, n4);

    //noisedUv.x -= 0.5;
    //noisedUv.y -= 0.5;

    float noise1 = snoise(noisedUv * 0.9) * .5;
    float noise2 = snoise(noisedUv * -0.978) * 0.1;
    float noise3 = snoise(noisedUv * -0.217) * 1.04;

    vec3 noiseColor1 = color1 * noise1;
    vec3 noiseColor2 = color2 * noise2;
    vec3 noiseColor3 = color3 * noise3;

    //vec3 color = bgColor + noiseColor1 + noiseColor2;
    vec3 color = bgColor;

    float n1 = smoothstep(0.0, 0.2, noise);
    color = mix(bgColor, color1, n1);

    float n2 = smoothstep(0.2, 0.4, noise);
    color = mix(color, color2, n2);
    
    float n3 = smoothstep(0.4, 0.6, noise);
    color = mix(color, bgColor, n3);

    //color = pow(color, vec3(2.));

    vec2 grainedUv = uv + snoise(uv * 400.0);
    float grainSpeed = 20.0;
    float grain = snoise(grainedUv + uTime * random(grainedUv) * grainSpeed);
    vec3 bg = vec3(grain) * 0.1;

    gl_FragColor = vec4(color + bg, 1.);
}