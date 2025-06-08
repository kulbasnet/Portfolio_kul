precision mediump float;

varying vec2 vUv;
uniform float uTime;
uniform float uSpeed;
uniform float uZoom;
uniform float uGrainAmount;
uniform float uGrainSpeed;
uniform vec2 uResolution;
uniform sampler2D uNoise;
uniform sampler2D uGradient;
uniform sampler2D uCursorTexture;

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

vec2 rotateUV(vec2 uv, float rotation) {
    float mid = 0.5;
    return vec2(
        cos(rotation)*(uv.x-mid)+sin(rotation)*(uv.y-mid)+mid,
        cos(rotation)*(uv.y-mid)-sin(rotation)*(uv.x-mid)+mid
    );
}

vec3 mod289(vec3 x) {
    return x-floor(x*(1.0/289.0))*289.0;
}

vec2 mod289(vec2 x) {
    return x-floor(x*(1.0/289.0))*289.0;
}

vec3 permute(vec3 x) {
    return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v+dot(v, C.yy));
    vec2 x0 = v-i+dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float gradientShaderFbm(vec2 pos, float time, float speed) {
    float a = sin(time * speed);
    float b = cos(time * speed);
    mat2 m = mat2(-0.80, 0.36, -0.60, -0.48);
    float total = 0.0;
    total += 0.2500 * snoise(pos) * b;
    return total;
}

vec4 gradientShader(vec2 uv, float time, float speed, float multiplier) {
    vec2 pos = uv.xy * 0.05;
    vec2 q = vec2(
        gradientShaderFbm(pos + vec2(0.0), 
        gradientShaderFbm(pos + vec2(0.0))
    );
    float c = gradientShaderFbm(pos + sin(time * speed) * multiplier * q, time, speed);
    return vec4(vec3(c), 1.0);
}

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453;
}

vec3 contrast(vec3 color, float value) {
    return 0.5 + value * (color - 0.5);
}

void main() {
    vec2 uv = vUv;
    vec3 color = vec3(0.2);

    vec4 noiseTex = texture2D(uNoise, uv);
    vec4 mouseTex = texture2D(uCursorTexture, uv);
    float amplitude = 0.3;

    // Convert normalized values
    float vx = -(mouseTex.r * 2.0 - 1.0);
    float vy = (mouseTex.g * 2.0 - 1.0);

    uv.x += noiseTex.r * vx * amplitude * mouseTex.b;
    uv.y += noiseTex.r * vy * amplitude * mouseTex.b;

    vec2 gradientUV = uv;
    vec2 gradientShaderUv2 = uv * uZoom;

    gradientShaderUv2.xy *= (uResolution.x / uResolution.y) * 10.0;
    gradientShaderUv2.y *= uResolution.y / uResolution.x;
    gradientShaderUv2.xy += uTime * 0.05;
    gradientShaderUv2 = rotateUV(gradientShaderUv2, uTime * 0.05);

    vec4 gradientShader2 = gradientShader(gradientShaderUv2, uTime, 0.0, 1.0);
    gradientShader2 /= 0.25;

    gradientUV = rotateUV(gradientUV, uTime * uSpeed);
    gradientUV.xy -= 0.5;
    gradientUV.y *= uResolution.y / uResolution.x;
    gradientUV.xy += 0.5;
    gradientUV.xy -= 0.5;
    gradientUV.y *= gradientShader2.r * 4.0;
    gradientUV.xy += 0.5;

    vec4 gradientTexture = texture2D(uGradient, gradientUV);

    vec2 grainedUv = uv + vec2(snoise(uv * 400.0));
    float grainSpeed = uGrainSpeed;
    float grain = snoise(grainedUv + uTime * random(grainedUv) * grainSpeed);
    vec3 bg = vec3(grain) * uGrainAmount;

    gl_FragColor = vec4(gradientTexture.rgb + bg, 1.0);
}