// app/modules/remixing/native/shaders/RainbowShader.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    golfie = entity.Object;
    tangon = golfie.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(golfie)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    michal = michal.Skia;
    golfie = michal.RuntimeEffect;
    tangon = golfie.Make;
    michal = '\nuniform float w;\nuniform float h;\n\nvec3 rainbow(float level)\n{\n\t/*\n\t\tTarget colors\n\t\t=============\n\t\t\n\t\tL  x   color\n\t\t0  0.0 vec4(1.0, 0.0, 0.0, 1.0);\n\t\t1  0.2 vec4(1.0, 0.5, 0.0, 1.0);\n\t\t2  0.4 vec4(1.0, 1.0, 0.0, 1.0);\n\t\t3  0.6 vec4(0.0, 0.5, 0.0, 1.0);\n\t\t4  0.8 vec4(0.0, 0.0, 1.0, 1.0);\n\t\t5  1.0 vec4(0.5, 0.0, 0.5, 1.0);\n\t*/\n\t\n\tfloat r = float(level <= 2.0) + float(level > 4.0) * 0.5;\n\tfloat g = max(1.0 - abs(level - 2.0) * 0.5, 0.0);\n\tfloat b = (1.0 - (level - 4.0) * 0.5) * float(level >= 4.0);\n\treturn vec3(r, g, b);\n}\n\nvec3 smoothRainbow (float x)\n{\n  float level1 = floor(x*6.0);\n  float level2 = min(6.0, floor(x*6.0) + 1.0);\n  \n  vec3 a = rainbow(level1);\n  vec3 b = rainbow(level2);\n  \n  return mix(a, b, fract(x*6.0));\n}\n\nvec4 main(vec2 fragCoord)\n{\n  vec2 iResolution = vec2(w, h);\n\tvec2 uv = fragCoord.xy / iResolution.xy;\n  vec3 color = smoothRainbow(uv.x);\n\treturn vec4(color,1.0);\n}\n';
    michal = tangon.bind(golfie)(michal);
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/remixing/native/shaders/RainbowShader.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();