// discord_common/js/packages/media-engine/native/renderingContextWebGL.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Logger;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'RenderingContextWebGL';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot2 = tango;
    tango = function() {
        report = function(argFoo) { // Original name: RenderingContext
            entity = argFoo;
            zulu = this;
            offset = entity.gl;
            verify = entity.program;
            options = entity.positionLoc;
            golf = entity.texcoordLoc;
            oscar = entity.transformLoc;
            report = entity.textureLoc;
            tango = entity.vertexBuffer;
            mike = entity.texture;
            romeo = _closure1_slot0;
            yankee = _closure2_slot0;
            entity = undefined;
            yankee = romeo.bind(entity)(zulu, yankee);
            yankee = global;
            foxtrot = yankee.Float32Array;
            yankee = [2, 0, 0, 0, 0];
            romeo = -2;
            yankee[5] = romeo;
            backup = 0;
            yankee[6] = backup;
            yankee[7] = backup;
            yankee[8] = backup;
            yankee[9] = backup;
            romeo = 1;
            yankee[10] = romeo;
            yankee[11] = backup;
            kilo = -1;
            yankee[12] = kilo;
            yankee[13] = romeo;
            yankee[14] = backup;
            yankee[15] = romeo;
            romeo = foxtrot.prototype;
            romeo = Object.create(romeo, {constructor: {value: foxtrot}});
            result = romeo;
            output = yankee;
            yankee = new result[foxtrot](output, sizing);
            yankee = yankee instanceof Object ? yankee : romeo;
            zulu['transform'] = yankee;
            zulu['gl'] = offset;
            zulu['program'] = verify;
            zulu['positionLoc'] = options;
            zulu['texcoordLoc'] = golf;
            zulu['transformLoc'] = oscar;
            zulu['textureLoc'] = report;
            zulu['vertexBuffer'] = tango;
            zulu['texture'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot1;
        entity = {};
        mike = 'render';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = null;
                if(!(zulu != mike)) { _fun00002_ip = 487; continue _fun00001 }
 15:
                oscar = mike.width;
                zulu = mike.height;
                report = entity.gl;
                options = report.bindTexture;
                golf = report.TEXTURE_2D;
                tango = entity.texture;
                tango = options.bind(report)(golf, tango);
                yankee = report.texImage2D;
                update = report.TEXTURE_2D;
                result = report.RGBA;
                backup = report.RGBA;
                foxtrot = report.UNSIGNED_BYTE;
                romeo = mike.data;
                tango = 0;
                source = report;
                echo = 0;
                output = oscar;
                sizing = zulu;
                kilo = 0;
                mike = source[yankee](update, echo, result, output, sizing, kilo, backup, foxtrot, romeo, yankee);
                verify = report.texParameteri;
                options = report.TEXTURE_2D;
                golf = report.TEXTURE_WRAP_S;
                mike = report.CLAMP_TO_EDGE;
                mike = verify.bind(report)(options, golf, mike);
                verify = report.texParameteri;
                options = report.TEXTURE_2D;
                golf = report.TEXTURE_WRAP_T;
                mike = report.CLAMP_TO_EDGE;
                mike = verify.bind(report)(options, golf, mike);
                verify = report.texParameteri;
                options = report.TEXTURE_2D;
                golf = report.TEXTURE_MIN_FILTER;
                mike = report.LINEAR;
                mike = verify.bind(report)(options, golf, mike);
                mike = report.viewport;
                source = report;
                update = 0;
                echo = 0;
                result = oscar;
                output = zulu;
                mike = source[mike](update, echo, result, output, sizing);
                zulu = report.clearColor;
                output = 1;
                source = report;
                result = 0;
                mike = source[zulu](update, echo, result, output, sizing);
                zulu = report.clear;
                mike = report.COLOR_BUFFER_BIT;
                mike = zulu.bind(report)(mike);
                zulu = report.useProgram;
                mike = entity.program;
                mike = zulu.bind(report)(mike);
                oscar = report.bindBuffer;
                zulu = report.ARRAY_BUFFER;
                mike = entity.vertexBuffer;
                mike = oscar.bind(report)(zulu, mike);
                zulu = report.enableVertexAttribArray;
                mike = entity.positionLoc;
                mike = zulu.bind(report)(mike);
                oscar = report.vertexAttribPointer;
                update = entity.positionLoc;
                result = report.FLOAT;
                options = 2;
                golf = false;
                source = report;
                echo = options;
                output = false;
                sizing = 0;
                mike = source[oscar](update, echo, result, output, sizing, kilo, backup);
                zulu = report.enableVertexAttribArray;
                mike = entity.texcoordLoc;
                mike = zulu.bind(report)(mike);
                oscar = report.vertexAttribPointer;
                update = entity.texcoordLoc;
                result = report.FLOAT;
                source = report;
                mike = source[oscar](update, echo, result, output, sizing, kilo, backup);
                oscar = report.uniformMatrix4fv;
                zulu = entity.transformLoc;
                mike = entity.transform;
                mike = oscar.bind(report)(zulu, golf, mike);
                mike = report.uniform1i;
                entity = entity.textureLoc;
                entity = mike.bind(report)(entity, tango);
                zulu = report.drawArrays;
                mike = report.TRIANGLES;
                entity = 6;
                entity = zulu.bind(report)(mike, tango, entity);
 487:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        zulu = new Array(1);
        zulu[0] = entity;
        entity = {};
        mike = 'create';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                romeo = argFoo;
                report = this;
                entity = null;
                if(!(entity != romeo)) { _fun00004_ip = 412; continue _fun00003 }
 15:
                tango = report.createShader;
                zulu = romeo.VERTEX_SHADER;
                mike = '\nattribute vec4 position;\nattribute vec2 texcoord;\nuniform mat4 transform;\nvarying vec2 out_texcoord;\n\nvoid main() {\n   gl_Position = transform * position;\n   out_texcoord = texcoord;\n}\n';
                tango = tango.bind(report)(romeo, zulu, mike);
                oscar = report.createShader;
                zulu = romeo.FRAGMENT_SHADER;
                mike = '\nprecision mediump float;\n\nvarying vec2 out_texcoord;\nuniform sampler2D texture;\n\nvoid main() {\n   gl_FragColor = texture2D(texture, out_texcoord);\n}\n';
                zulu = oscar.bind(report)(romeo, zulu, mike);
                if(!(entity != tango)) { _fun00004_ip = 410; continue _fun00003 }
 76:
                if(!(entity != zulu)) { _fun00004_ip = 410; continue _fun00003 }
 83:
                mike = report.createProgram;
                yankee = mike.bind(report)(romeo, tango, zulu);
                if(!(entity != yankee)) { _fun00004_ip = 408; continue _fun00003 }
 103:
                zulu = romeo.getAttribLocation;
                mike = 'position';
                offset = zulu.bind(romeo)(yankee, mike);
                zulu = romeo.getAttribLocation;
                mike = 'texcoord';
                verify = zulu.bind(romeo)(yankee, mike);
                mike = -1;
                if(!(mike !== offset)) { _fun00004_ip = 406; continue _fun00003 }
 150:
                if(!(mike !== verify)) { _fun00004_ip = 406; continue _fun00003 }
 157:
                zulu = romeo.getUniformLocation;
                mike = 'transform';
                options = zulu.bind(romeo)(yankee, mike);
                zulu = romeo.getUniformLocation;
                mike = 'texture';
                golf = zulu.bind(romeo)(yankee, mike);
                if(!(entity != options)) { _fun00004_ip = 404; continue _fun00003 }
 196:
                if(!(entity != golf)) { _fun00004_ip = 404; continue _fun00003 }
 203:
                mike = romeo.createBuffer;
                oscar = mike.bind(romeo)();
                if(!(entity != oscar)) { _fun00004_ip = 402; continue _fun00003 }
 222:
                zulu = romeo.bindBuffer;
                mike = romeo.ARRAY_BUFFER;
                mike = zulu.bind(romeo)(mike, oscar);
                report = romeo.bufferData;
                tango = romeo.ARRAY_BUFFER;
                mike = global;
                foxtrot = mike.Float32Array;
                mike = foxtrot.prototype;
                zulu = Object.create(mike, {constructor: {value: foxtrot}});
                sizing = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];
                output = zulu;
                mike = new output[foxtrot](sizing, kilo);
                zulu = mike instanceof Object ? mike : zulu;
                mike = romeo.STATIC_DRAW;
                mike = report.bind(romeo)(tango, zulu, mike);
                mike = romeo.createTexture;
                tango = mike.bind(romeo)();
                zulu = entity == tango;
                mike = null;
                if(zulu) { _fun00004_ip = 400; continue _fun00003 }
 328:
                report = _closure2_slot0;
                zulu = {};
                zulu['gl'] = romeo;
                zulu['program'] = yankee;
                zulu['positionLoc'] = offset;
                zulu['texcoordLoc'] = verify;
                zulu['transformLoc'] = options;
                zulu['textureLoc'] = golf;
                zulu['vertexBuffer'] = oscar;
                zulu['texture'] = tango;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                output = tango;
                sizing = zulu;
                zulu = new output[report](sizing, kilo);
                mike = zulu instanceof Object ? zulu : tango;
 400:
                return mike;
 402:
                return entity;
 404:
                return entity;
 406:
                return entity;
 408:
                return entity;
 410:
                return entity;
 412:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        golf = 'createShader';
        entity['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = argFoo;
                mike = tango.createShader;
                entity = argBar;
                mike = mike.bind(tango)(entity);
                entity = null;
                if(!(entity != mike)) { _fun00006_ip = 153; continue _fun00005 }
 26:
                report = tango.shaderSource;
                zulu = argBaz;
                zulu = report.bind(tango)(mike, zulu);
                zulu = tango.compileShader;
                zulu = zulu.bind(tango)(mike);
                report = tango.getShaderParameter;
                zulu = tango.COMPILE_STATUS;
                zulu = report.bind(tango)(mike, zulu);
                if(zulu) { _fun00006_ip = 151; continue _fun00005 }
 81:
                golf = _closure1_slot2;
                oscar = golf.warn;
                report = 'Failed to compile shader!';
                report = oscar.bind(golf)(report);
                report = tango.getShaderInfoLog;
                oscar = report.bind(tango)(mike);
                if(!(entity != oscar)) { _fun00006_ip = 136; continue _fun00005 }
 121:
                report = _closure1_slot2;
                zulu = report.log;
                zulu = zulu.bind(report)(oscar);
 136:
                zulu = tango.deleteShader;
                zulu = zulu.bind(tango)(mike);
                return entity;
 151:
                return mike;
 153:
                return entity;
            }
        };
        entity['value'] = golf;
        mike[1] = entity;
        entity = {};
        golf = 'createProgram';
        entity['key'] = golf;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = argFoo;
                oscar = argBar;
                report = argBaz;
                entity = null;
                if(!(entity != oscar)) { _fun00008_ip = 178; continue _fun00007 }
 18:
                if(!(entity != report)) { _fun00008_ip = 178; continue _fun00007 }
 25:
                mike = tango.createProgram;
                mike = mike.bind(tango)();
                if(!(entity != mike)) { _fun00008_ip = 176; continue _fun00007 }
 42:
                zulu = tango.attachShader;
                zulu = zulu.bind(tango)(mike, oscar);
                zulu = tango.attachShader;
                zulu = zulu.bind(tango)(mike, report);
                zulu = tango.linkProgram;
                zulu = zulu.bind(tango)(mike);
                report = tango.getProgramParameter;
                zulu = tango.LINK_STATUS;
                zulu = report.bind(tango)(mike, zulu);
                if(zulu) { _fun00008_ip = 174; continue _fun00007 }
 104:
                golf = _closure1_slot2;
                oscar = golf.warn;
                report = 'Failed to link program!';
                report = oscar.bind(golf)(report);
                report = tango.getProgramInfoLog;
                oscar = report.bind(tango)(mike);
                if(!(entity != oscar)) { _fun00008_ip = 159; continue _fun00007 }
 144:
                report = _closure1_slot2;
                zulu = report.log;
                zulu = zulu.bind(report)(oscar);
 159:
                zulu = tango.deleteProgram;
                zulu = zulu.bind(tango)(mike);
                return entity;
 174:
                return mike;
 176:
                return entity;
 178:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(report, zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/native/renderingContextWebGL.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: initRenderingContextWebGL
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            mike = zulu.getContext;
            entity = 'webgl2';
            tango = mike.bind(zulu)(entity);
            entity = null;
            mike = entity == tango;
            if(mike) { _fun00010_ip = 46; continue _fun00009 }
 29:
            zulu = _closure1_slot3;
            mike = zulu.create;
            entity = mike.bind(zulu)(tango);
 46:
            return entity;
        }
    };
    zulu['initRenderingContextWebGL'] = mike;
    return entity;
})();