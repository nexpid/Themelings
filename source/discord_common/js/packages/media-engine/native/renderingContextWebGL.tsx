// discord_common/js/packages/media-engine/native/renderingContextWebGL.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Logger;
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'RenderingContextWebGL';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot2 = tangon;
    tangon = function() {
        report = function(argFoo) { // Original name: RenderingContext
            entity = argFoo;
            zuuluu = this;
            offset = entity.gl;
            verify = entity.program;
            option = entity.positionLoc;
            golfie = entity.texcoordLoc;
            oscard = entity.transformLoc;
            report = entity.textureLoc;
            tangon = entity.vertexBuffer;
            michal = entity.texture;
            romeon = _closure1_slot0;
            yankee = _closure2_slot0;
            entity = undefined;
            yankee = romeon.bind(entity)(zuuluu, yankee);
            yankee = global;
            foxtra = yankee.Float32Array;
            yankee = [2, 0, 0, 0, 0];
            romeon = -2;
            yankee[5] = romeon;
            backup = 0;
            yankee[6] = backup;
            yankee[7] = backup;
            yankee[8] = backup;
            yankee[9] = backup;
            romeon = 1;
            yankee[10] = romeon;
            yankee[11] = backup;
            kiloes = -1;
            yankee[12] = kiloes;
            yankee[13] = romeon;
            yankee[14] = backup;
            yankee[15] = romeon;
            romeon = foxtra.prototype;
            romeon = Object.create(romeon, {constructor: {value: foxtra}});
            result = romeon;
            output = yankee;
            yankee = new result[foxtra](output, sizing);
            yankee = yankee instanceof Object ? yankee : romeon;
            zuuluu['transform'] = yankee;
            zuuluu['gl'] = offset;
            zuuluu['program'] = verify;
            zuuluu['positionLoc'] = option;
            zuuluu['texcoordLoc'] = golfie;
            zuuluu['transformLoc'] = oscard;
            zuuluu['textureLoc'] = report;
            zuuluu['vertexBuffer'] = tangon;
            zuuluu['texture'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot1;
        entity = {};
        michal = 'render';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                entity = this;
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00002_ip = 461; continue _fun00001 }
 15:
                oscard = michal.width;
                zuuluu = michal.height;
                report = entity.gl;
                option = report.bindTexture;
                golfie = report.TEXTURE_2D;
                tangon = entity.texture;
                tangon = option.bind(report)(golfie, tangon);
                yankee = report.texImage2D;
                update = report.TEXTURE_2D;
                result = report.RGBA;
                backup = report.RGBA;
                foxtra = report.UNSIGNED_BYTE;
                romeon = michal.data;
                tangon = 0;
                source = report;
                echoed = 0;
                output = oscard;
                sizing = zuuluu;
                kiloes = 0;
                michal = source[yankee](update, echoed, result, output, sizing, kiloes, backup, foxtra, romeon, yankee);
                verify = report.texParameteri;
                option = report.TEXTURE_2D;
                golfie = report.TEXTURE_WRAP_S;
                michal = report.CLAMP_TO_EDGE;
                michal = verify.bind(report)(option, golfie, michal);
                verify = report.texParameteri;
                option = report.TEXTURE_2D;
                golfie = report.TEXTURE_WRAP_T;
                michal = report.CLAMP_TO_EDGE;
                michal = verify.bind(report)(option, golfie, michal);
                verify = report.texParameteri;
                option = report.TEXTURE_2D;
                golfie = report.TEXTURE_MIN_FILTER;
                michal = report.LINEAR;
                michal = verify.bind(report)(option, golfie, michal);
                michal = report.viewport;
                source = report;
                update = 0;
                echoed = 0;
                result = oscard;
                output = zuuluu;
                michal = source[michal](update, echoed, result, output, sizing);
                zuuluu = report.clearColor;
                output = 1;
                source = report;
                result = 0;
                michal = source[zuuluu](update, echoed, result, output, sizing);
                zuuluu = report.clear;
                michal = report.COLOR_BUFFER_BIT;
                michal = zuuluu.bind(report)(michal);
                zuuluu = report.useProgram;
                michal = entity.program;
                michal = zuuluu.bind(report)(michal);
                oscard = report.bindBuffer;
                zuuluu = report.ARRAY_BUFFER;
                michal = entity.vertexBuffer;
                michal = oscard.bind(report)(zuuluu, michal);
                zuuluu = report.enableVertexAttribArray;
                michal = entity.positionLoc;
                michal = zuuluu.bind(report)(michal);
                oscard = report.vertexAttribPointer;
                update = entity.positionLoc;
                result = report.FLOAT;
                option = 2;
                golfie = false;
                source = report;
                echoed = option;
                output = false;
                sizing = 0;
                michal = source[oscard](update, echoed, result, output, sizing, kiloes, backup);
                zuuluu = report.enableVertexAttribArray;
                michal = entity.texcoordLoc;
                michal = zuuluu.bind(report)(michal);
                oscard = report.vertexAttribPointer;
                update = entity.texcoordLoc;
                result = report.FLOAT;
                source = report;
                michal = source[oscard](update, echoed, result, output, sizing, kiloes, backup);
                oscard = report.uniformMatrix4fv;
                zuuluu = entity.transformLoc;
                michal = entity.transform;
                michal = oscard.bind(report)(zuuluu, golfie, michal);
                michal = report.uniform1i;
                entity = entity.textureLoc;
                entity = michal.bind(report)(entity, tangon);
                zuuluu = report.drawArrays;
                michal = report.TRIANGLES;
                entity = 6;
                entity = zuuluu.bind(report)(michal, tangon, entity);
 461:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        entity = {};
        michal = 'create';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                romeon = argFoo;
                report = this;
                entity = null;
                if(!(entity != romeon)) { _fun00004_ip = 400; continue _fun00003 }
 15:
                tangon = report.createShader;
                zuuluu = romeon.VERTEX_SHADER;
                michal = '\nattribute vec4 position;\nattribute vec2 texcoord;\nuniform mat4 transform;\nvarying vec2 out_texcoord;\n\nvoid main() {\n   gl_Position = transform * position;\n   out_texcoord = texcoord;\n}\n';
                tangon = tangon.bind(report)(romeon, zuuluu, michal);
                oscard = report.createShader;
                zuuluu = romeon.FRAGMENT_SHADER;
                michal = '\nprecision mediump float;\n\nvarying vec2 out_texcoord;\nuniform sampler2D texture;\n\nvoid main() {\n   gl_FragColor = texture2D(texture, out_texcoord);\n}\n';
                zuuluu = oscard.bind(report)(romeon, zuuluu, michal);
                if(!(entity != tangon)) { _fun00004_ip = 398; continue _fun00003 }
 72:
                if(!(entity != zuuluu)) { _fun00004_ip = 398; continue _fun00003 }
 79:
                michal = report.createProgram;
                yankee = michal.bind(report)(romeon, tangon, zuuluu);
                if(!(entity != yankee)) { _fun00004_ip = 396; continue _fun00003 }
 99:
                zuuluu = romeon.getAttribLocation;
                michal = 'position';
                offset = zuuluu.bind(romeon)(yankee, michal);
                zuuluu = romeon.getAttribLocation;
                michal = 'texcoord';
                verify = zuuluu.bind(romeon)(yankee, michal);
                michal = -1;
                if(!(michal !== offset)) { _fun00004_ip = 394; continue _fun00003 }
 146:
                if(!(michal !== verify)) { _fun00004_ip = 394; continue _fun00003 }
 153:
                zuuluu = romeon.getUniformLocation;
                michal = 'transform';
                option = zuuluu.bind(romeon)(yankee, michal);
                zuuluu = romeon.getUniformLocation;
                michal = 'texture';
                golfie = zuuluu.bind(romeon)(yankee, michal);
                if(!(entity != option)) { _fun00004_ip = 392; continue _fun00003 }
 192:
                if(!(entity != golfie)) { _fun00004_ip = 392; continue _fun00003 }
 199:
                michal = romeon.createBuffer;
                oscard = michal.bind(romeon)();
                if(!(entity != oscard)) { _fun00004_ip = 390; continue _fun00003 }
 216:
                zuuluu = romeon.bindBuffer;
                michal = romeon.ARRAY_BUFFER;
                michal = zuuluu.bind(romeon)(michal, oscard);
                report = romeon.bufferData;
                tangon = romeon.ARRAY_BUFFER;
                michal = global;
                foxtra = michal.Float32Array;
                michal = foxtra.prototype;
                zuuluu = Object.create(michal, {constructor: {value: foxtra}});
                sizing = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];
                output = zuuluu;
                michal = new output[foxtra](sizing, kiloes);
                zuuluu = michal instanceof Object ? michal : zuuluu;
                michal = romeon.STATIC_DRAW;
                michal = report.bind(romeon)(tangon, zuuluu, michal);
                michal = romeon.createTexture;
                tangon = michal.bind(romeon)();
                zuuluu = entity == tangon;
                michal = null;
                if(zuuluu) { _fun00004_ip = 388; continue _fun00003 }
 316:
                report = _closure2_slot0;
                zuuluu = {};
                zuuluu['gl'] = romeon;
                zuuluu['program'] = yankee;
                zuuluu['positionLoc'] = offset;
                zuuluu['texcoordLoc'] = verify;
                zuuluu['transformLoc'] = option;
                zuuluu['textureLoc'] = golfie;
                zuuluu['vertexBuffer'] = oscard;
                zuuluu['texture'] = tangon;
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                output = tangon;
                sizing = zuuluu;
                zuuluu = new output[report](sizing, kiloes);
                michal = zuuluu instanceof Object ? zuuluu : tangon;
 388:
                return michal;
 390:
                return entity;
 392:
                return entity;
 394:
                return entity;
 396:
                return entity;
 398:
                return entity;
 400:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        golfie = 'createShader';
        entity['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                michal = tangon.createShader;
                entity = argBar;
                michal = michal.bind(tangon)(entity);
                entity = null;
                if(!(entity != michal)) { _fun00006_ip = 138; continue _fun00005 }
 23:
                report = tangon.shaderSource;
                zuuluu = argBaz;
                zuuluu = report.bind(tangon)(michal, zuuluu);
                zuuluu = tangon.compileShader;
                zuuluu = zuuluu.bind(tangon)(michal);
                report = tangon.getShaderParameter;
                zuuluu = tangon.COMPILE_STATUS;
                zuuluu = report.bind(tangon)(michal, zuuluu);
                if(zuuluu) { _fun00006_ip = 136; continue _fun00005 }
 70:
                golfie = _closure1_slot2;
                oscard = golfie.warn;
                report = 'Failed to compile shader!';
                report = oscard.bind(golfie)(report);
                report = tangon.getShaderInfoLog;
                oscard = report.bind(tangon)(michal);
                if(!(entity != oscard)) { _fun00006_ip = 123; continue _fun00005 }
 108:
                report = _closure1_slot2;
                zuuluu = report.log;
                zuuluu = zuuluu.bind(report)(oscard);
 123:
                zuuluu = tangon.deleteShader;
                zuuluu = zuuluu.bind(tangon)(michal);
                return entity;
 136:
                return michal;
 138:
                return entity;
            }
        };
        entity['value'] = golfie;
        michal[1] = entity;
        entity = {};
        golfie = 'createProgram';
        entity['key'] = golfie;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                oscard = argBar;
                report = argBaz;
                entity = null;
                if(!(entity != oscard)) { _fun00008_ip = 168; continue _fun00007 }
 18:
                if(!(entity != report)) { _fun00008_ip = 168; continue _fun00007 }
 25:
                michal = tangon.createProgram;
                michal = michal.bind(tangon)();
                if(!(entity != michal)) { _fun00008_ip = 166; continue _fun00007 }
 42:
                zuuluu = tangon.attachShader;
                zuuluu = zuuluu.bind(tangon)(michal, oscard);
                zuuluu = tangon.attachShader;
                zuuluu = zuuluu.bind(tangon)(michal, report);
                zuuluu = tangon.linkProgram;
                zuuluu = zuuluu.bind(tangon)(michal);
                report = tangon.getProgramParameter;
                zuuluu = tangon.LINK_STATUS;
                zuuluu = report.bind(tangon)(michal, zuuluu);
                if(zuuluu) { _fun00008_ip = 164; continue _fun00007 }
 98:
                golfie = _closure1_slot2;
                oscard = golfie.warn;
                report = 'Failed to link program!';
                report = oscard.bind(golfie)(report);
                report = tangon.getProgramInfoLog;
                oscard = report.bind(tangon)(michal);
                if(!(entity != oscard)) { _fun00008_ip = 151; continue _fun00007 }
 136:
                report = _closure1_slot2;
                zuuluu = report.log;
                zuuluu = zuuluu.bind(report)(oscard);
 151:
                zuuluu = tangon.deleteProgram;
                zuuluu = zuuluu.bind(tangon)(michal);
                return entity;
 164:
                return michal;
 166:
                return entity;
 168:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(report, zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/native/renderingContextWebGL.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: initRenderingContextWebGL
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.getContext;
            entity = 'webgl2';
            tangon = michal.bind(zuuluu)(entity);
            entity = null;
            michal = entity == tangon;
            if(michal) { _fun00010_ip = 46; continue _fun00009 }
 29:
            zuuluu = _closure1_slot3;
            michal = zuuluu.create;
            entity = michal.bind(zuuluu)(tangon);
 46:
            return entity;
        }
    };
    zuuluu['initRenderingContextWebGL'] = michal;
    return entity;
})();