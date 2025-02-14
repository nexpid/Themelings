// app/modules/remixing/native/shaders/RainbowShader.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    golf = entity.Object;
    tango = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(golf)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.Skia;
    golf = mike.RuntimeEffect;
    tango = golf.Make;
    mike = '\nuniform float w;\nuniform float h;\n\nvec3 rainbow(float level)\n{\n\t/*\n\t\tTarget colors\n\t\t=============\n\t\t\n\t\tL  x   color\n\t\t0  0.0 vec4(1.0, 0.0, 0.0, 1.0);\n\t\t1  0.2 vec4(1.0, 0.5, 0.0, 1.0);\n\t\t2  0.4 vec4(1.0, 1.0, 0.0, 1.0);\n\t\t3  0.6 vec4(0.0, 0.5, 0.0, 1.0);\n\t\t4  0.8 vec4(0.0, 0.0, 1.0, 1.0);\n\t\t5  1.0 vec4(0.5, 0.0, 0.5, 1.0);\n\t*/\n\t\n\tfloat r = float(level <= 2.0) + float(level > 4.0) * 0.5;\n\tfloat g = max(1.0 - abs(level - 2.0) * 0.5, 0.0);\n\tfloat b = (1.0 - (level - 4.0) * 0.5) * float(level >= 4.0);\n\treturn vec3(r, g, b);\n}\n\nvec3 smoothRainbow (float x)\n{\n  float level1 = floor(x*6.0);\n  float level2 = min(6.0, floor(x*6.0) + 1.0);\n  \n  vec3 a = rainbow(level1);\n  vec3 b = rainbow(level2);\n  \n  return mix(a, b, fract(x*6.0));\n}\n\nvec4 main(vec2 fragCoord)\n{\n  vec2 iResolution = vec2(w, h);\n\tvec2 uv = fragCoord.xy / iResolution.xy;\n  vec3 color = smoothRainbow(uv.x);\n\treturn vec4(color,1.0);\n}\n';
    mike = tango.bind(golf)(mike);
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/shaders/RainbowShader.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();