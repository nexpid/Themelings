// app/utils/ImageUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscard = function(argFoo) { // Original name: fit
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = michal.width;
            backup = michal.height;
            oscard = michal.maxWidth;
            report = michal.maxHeight;
            verify = michal.minWidth;
            entity = undefined;
            if(!(verify === entity)) { _fun00002_ip = 39; continue _fun00001 }
 37:
            verify = 0;
 39:
            golfie = michal.minHeight;
            if(!(golfie === entity)) { _fun00002_ip = 51; continue _fun00001 }
 49:
            golfie = 0;
 51:
            if(!(tangon === oscard)) { _fun00002_ip = 68; continue _fun00001 }
 55:
            zuuluu = tangon;
            michal = backup;
            if(!(michal !== report)) { _fun00002_ip = 246; continue _fun00001 }
 68:
            option = tangon > oscard;
            offset = 1;
            entity = offset;
            if(!option) { _fun00002_ip = 85; continue _fun00001 }
 81:
            entity = oscard / tangon;
 85:
            option = global;
            yankee = option.Math;
            oscard = yankee.max;
            foxtra = option.Math;
            romeon = foxtra.round;
            tangon = tangon * entity;
            tangon = romeon.bind(foxtra)(tangon);
            tangon = oscard.bind(yankee)(tangon, verify);
            yankee = option.Math;
            oscard = yankee.max;
            foxtra = option.Math;
            romeon = foxtra.round;
            entity = backup * entity;
            entity = romeon.bind(foxtra)(entity);
            entity = oscard.bind(yankee)(entity, golfie);
            oscard = entity > report;
            if(!oscard) { _fun00002_ip = 172; continue _fun00001 }
 168:
            offset = report / entity;
 172:
            oscard = option.Math;
            report = oscard.max;
            romeon = option.Math;
            yankee = romeon.round;
            tangon = tangon * offset;
            tangon = yankee.bind(romeon)(tangon);
            zuuluu = report.bind(oscard)(tangon, verify);
            oscard = option.Math;
            report = oscard.max;
            verify = option.Math;
            option = verify.round;
            entity = entity * offset;
            entity = option.bind(verify)(entity);
            michal = report.bind(oscard)(entity, golfie);
 246:
            entity = {};
            entity['width'] = zuuluu;
            entity['height'] = michal;
            return entity;
        }
    };
    var _closure1_slot5 = oscard;
    report = function(argFoo, argBar, argBaz) { // Original name: getPalette
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            foxtra = argBaz;
            entity = global;
            zuuluu = entity.document;
            michal = zuuluu.createElement;
            entity = 'canvas';
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.getContext;
            entity = '2d';
            tangon = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity != tangon)) { _fun00004_ip = 352; continue _fun00003 }
 55:
            oscard = report.width;
            michal = 128;
            romeon = 0;
            entity = michal;
            if(!(romeon !== oscard)) { _fun00004_ip = 77; continue _fun00003 }
 72:
            entity = report.width;
 77:
            zuuluu['width'] = entity;
            oscard = report.height;
            if(!(romeon !== oscard)) { _fun00004_ip = 97; continue _fun00003 }
 92:
            michal = report.height;
 97:
            zuuluu['height'] = michal;
            zuuluu = tangon.drawImage;
            config = tangon;
            sequen = report;
            vacuum = 0;
            ctrled = 0;
            source = entity;
            update = michal;
            zuuluu = config[zuuluu](sequen, vacuum, ctrled, source, update, echoed);
            zuuluu = tangon.getImageData;
            config = tangon;
            sequen = 0;
            ctrled = entity;
            source = michal;
            zuuluu = config[zuuluu](sequen, vacuum, ctrled, source, update);
            yankee = zuuluu.data;
            offset = entity * michal;
            report = new Array(0);
            verify = 250;
            option = 125;
            golfie = 4;
            oscard = 1;
            zuuluu = 2;
            michal = 3;
            tangon = undefined;
            entity = 0;
            if(!(entity < offset)) { _fun00004_ip = 294; continue _fun00003 }
 189:
            backup = golfie * entity;
            kiloes = romeon + backup;
            result = yankee[kiloes];
            kiloes = backup + oscard;
            output = yankee[kiloes];
            kiloes = backup + zuuluu;
            sizing = yankee[kiloes];
            backup = backup + michal;
            kiloes = yankee[backup];
            backup = tangon === kiloes;
            if(backup) { _fun00004_ip = 236; continue _fun00003 }
 232:
            backup = kiloes >= option;
 236:
            if(!backup) { _fun00004_ip = 286; continue _fun00003 }
 239:
            backup = result > verify;
            if(!backup) { _fun00004_ip = 250; continue _fun00003 }
 246:
            backup = output > verify;
 250:
            if(!backup) { _fun00004_ip = 257; continue _fun00003 }
 253:
            backup = sizing > verify;
 257:
            if(backup) { _fun00004_ip = 286; continue _fun00003 }
 260:
            kiloes = report.push;
            backup = new Array(3);
            backup[0] = result;
            backup[1] = output;
            backup[2] = sizing;
            backup = kiloes.bind(report)(backup);
 286:
            entity = entity + foxtra;
            if(entity < offset) { _fun00004_ip = 189; continue _fun00003 }
 294:
            zuuluu = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[oscard];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = argBar;
            zuuluu = zuuluu.bind(tangon)(report, entity);
            tangon = 'boolean';
            entity = typeof zuuluu;
            if(!(tangon !== entity)) { _fun00004_ip = 346; continue _fun00003 }
 334:
            entity = zuuluu.palette;
            entity = entity.bind(zuuluu)();
            _fun00004_ip = 350; continue _fun00003;
 346:
            entity = _closure1_slot4;
 350:
            return entity;
 352:
            entity = _closure1_slot4;
            return entity;
        }
    };
    var _closure1_slot6 = report;
    entity = function() { // Original name: _dataUrlToFile
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 104; continue _fun00005 }
 7:
                    tangon = _closure1_slot8;
                    zuuluu = undefined;
                    michal = argFoo;
                    zuuluu = tangon.bind(zuuluu)(michal);
                    michal = zuuluu.arrayBuffer;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=38);
 36:
                    return michal;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 101; continue _fun00005 }
 44:
                    zuuluu = global;
                    golfie = zuuluu.File;
                    oscard = new Array(1);
                    oscard[0] = michal;
                    report = {};
                    zuuluu = argBaz;
                    report['type'] = zuuluu;
                    zuuluu = golfie.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: golfie}});
                    verify = argBar;
                    yankee = tangon;
                    offset = oscard;
                    option = report;
                    zuuluu = new yankee[golfie](offset, verify, option, golfie);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    return zuuluu;
 101:
                    return michal;
 104:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    tangon = function(argFoo) { // Original name: dataUrlToBlob
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.split;
            michal = ',';
            entity = entity.bind(zuuluu)(michal);
            oscard = 0;
            report = entity[oscard];
            tangon = report.indexOf;
            entity = 'base64';
            entity = tangon.bind(report)(entity);
            if(!(!(entity >= oscard))) { _fun00008_ip = 75; continue _fun00007 }
 41:
            entity = global;
            report = entity.btoa;
            entity = zuuluu.split;
            tangon = entity.bind(zuuluu)(michal);
            entity = 1;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            _fun00008_ip = 107; continue _fun00007;
 75:
            entity = global;
            golfie = entity.atob;
            entity = zuuluu.split;
            tangon = entity.bind(zuuluu)(michal);
            entity = 1;
            tangon = tangon[entity];
            entity = undefined;
            report = golfie.bind(entity)(tangon);
 107:
            entity = zuuluu.split;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = entity[oscard];
            michal = zuuluu.split;
            entity = ':';
            michal = michal.bind(zuuluu)(entity);
            entity = 1;
            zuuluu = michal[entity];
            michal = zuuluu.split;
            entity = ';';
            entity = michal.bind(zuuluu)(entity);
            michal = entity[oscard];
            zuuluu = global;
            golfie = zuuluu.Uint8Array;
            verify = report.length;
            tangon = golfie.prototype;
            tangon = Object.create(tangon, {constructor: {value: golfie}});
            offset = tangon;
            entity = new offset[golfie](verify, option);
            entity = entity instanceof Object ? entity : tangon;
            tangon = report.length;
            tangon = oscard < tangon;
            oscard = 0;
            if(!tangon) { _fun00008_ip = 234; continue _fun00007 }
 207:
            tangon = report.charCodeAt;
            tangon = tangon.bind(report)(oscard);
            entity[oscard] = tangon;
            oscard = oscard + 1;
            tangon = report.length;
            if(oscard < tangon) { _fun00008_ip = 207; continue _fun00007 }
 234:
            tangon = zuuluu.Blob;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = {};
            entity['type'] = michal;
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            offset = michal;
            verify = zuuluu;
            option = entity;
            entity = new offset[tangon](verify, option, golfie);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = function() { // Original name: _isPNGAnimated
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 181; continue _fun00009 }
 13:
                    oscard = zuuluu.type;
                    michal = null;
                    michal = michal == oscard;
                    tangon = undefined;
                    if(michal) { _fun00010_ip = 49; continue _fun00009 }
 29:
                    report = oscard.split;
                    michal = ';';
                    report = report.bind(oscard)(michal);
                    michal = 0;
                    tangon = report[michal];
 49:
                    michal = 'image/png';
                    if(!(michal === tangon)) { _fun00010_ip = 145; continue _fun00009 }
 57:
                    michal = zuuluu.text;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=70);
 68:
                    return michal;
 70:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 142; continue _fun00009 }
 76:
                    tangon = michal.indexOf;
                    zuuluu = 'IDAT';
                    oscard = tangon.bind(michal)(zuuluu);
                    report = 0;
                    zuuluu = oscard > report;
                    if(!zuuluu) { _fun00010_ip = 139; continue _fun00009 }
 101:
                    tangon = michal.substring;
                    oscard = tangon.bind(michal)(report, oscard);
                    report = oscard.indexOf;
                    tangon = 'acTL';
                    report = report.bind(oscard)(tangon);
                    tangon = -1;
                    zuuluu = tangon !== report;
 139:
                    return zuuluu;
 142:
                    return michal;
 145:
                    michal = global;
                    tangon = michal.Error;
                    michal = tangon.prototype;
                    zuuluu = Object.create(michal, {constructor: {value: tangon}});
                    option = 'File is not a PNG';
                    verify = zuuluu;
                    michal = new verify[tangon](option, golfie);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 181:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = new Array(1);
    yankee = [0, 0, 0];
    golfie[0] = yankee;
    var _closure1_slot4 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    yankee = offset.bind(entity)(golfie);
    offset = yankee.memoize;
    golfie = function(argFoo) {
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo, argBar) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            michal = global;
            michal = michal.Image;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            tangon = zuuluu;
            michal = new tangon[michal](zuuluu);
            zuuluu = michal instanceof Object ? michal : zuuluu;
            var _closure3_slot2 = zuuluu;
            michal = 'Anonymous';
            zuuluu['crossOrigin'] = michal;
            michal = function(argFoo) {
                tangon = _closure3_slot1;
                entity = undefined;
                michal = argFoo;
                michal = tangon.bind(entity)(michal);
                tangon = _closure3_slot2;
                michal = null;
                tangon['onload'] = michal;
                tangon['onerror'] = michal;
                _closure3_slot2 = michal;
                return entity;
            };
            zuuluu['onerror'] = michal;
            zuuluu = _closure3_slot2;
            michal = function() {
                tangon = _closure3_slot0;
                golfie = _closure1_slot6;
                oscard = _closure3_slot2;
                entity = undefined;
                report = 5;
                michal = 10;
                michal = golfie.bind(entity)(oscard, report, michal);
                michal = tangon.bind(entity)(michal);
                tangon = _closure3_slot2;
                michal = null;
                tangon['onload'] = michal;
                tangon['onerror'] = michal;
                _closure3_slot2 = michal;
                return entity;
            };
            zuuluu['onload'] = michal;
            michal = _closure3_slot2;
            entity = _closure2_slot0;
            michal['src'] = entity;
            entity = undefined;
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    golfie = offset.bind(yankee)(golfie);
    golfie = 5;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'utils/ImageUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['fit'] = oscard;
    oscard = 2000;
    zuuluu['IMAGE_MAX_ZOOM'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: zoomFit
        tangon = global;
        report = tangon.Math;
        zuuluu = report.min;
        oscard = tangon.Math;
        michal = oscard.round;
        entity = tangon.window;
        golfie = entity.innerHeight;
        entity = 0.65;
        entity = entity * golfie;
        michal = michal.bind(oscard)(entity);
        golfie = tangon.Math;
        oscard = golfie.round;
        entity = tangon.window;
        entity = entity.innerHeight;
        entity = oscard.bind(golfie)(entity);
        zuuluu = zuuluu.bind(report)(michal, entity);
        oscard = tangon.Math;
        report = oscard.min;
        golfie = tangon.Math;
        michal = golfie.round;
        entity = tangon.window;
        option = entity.innerWidth;
        entity = 0.75;
        entity = entity * option;
        michal = michal.bind(golfie)(entity);
        option = tangon.Math;
        golfie = option.round;
        entity = tangon.window;
        entity = entity.innerWidth;
        entity = golfie.bind(option)(entity);
        golfie = report.bind(oscard)(michal, entity);
        michal = tangon.Math;
        entity = michal.min;
        oscard = 2000;
        entity = entity.bind(michal)(zuuluu, oscard);
        zuuluu = _closure1_slot5;
        michal = {};
        report = argFoo;
        michal['width'] = report;
        report = argBar;
        michal['height'] = report;
        report = tangon.Math;
        tangon = report.min;
        tangon = tangon.bind(report)(golfie, oscard);
        michal['maxWidth'] = tangon;
        michal['maxHeight'] = entity;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['zoomFit'] = oscard;
    oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: zoomScale
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            verify = argBar;
            option = argBaz;
            oscard = argCor;
            entity = global;
            golfie = entity.Math;
            report = golfie.max;
            michal = null;
            yankee = michal != zuuluu;
            offset = 0;
            tangon = 0;
            if(!yankee) { _fun00012_ip = 63; continue _fun00011 }
 38:
            tangon = 0;
            if(!(offset !== zuuluu)) { _fun00012_ip = 63; continue _fun00011 }
 44:
            yankee = michal != verify;
            tangon = 0;
            if(!yankee) { _fun00012_ip = 63; continue _fun00011 }
 53:
            tangon = 0;
            if(!(tangon !== verify)) { _fun00012_ip = 63; continue _fun00011 }
 59:
            tangon = zuuluu / option;
 63:
            zuuluu = 2;
            report = report.bind(golfie)(zuuluu, tangon);
            golfie = michal != option;
            if(!golfie) { _fun00012_ip = 113; continue _fun00011 }
 79:
            verify = option * report;
            tangon = entity.window;
            offset = tangon.innerWidth;
            tangon = 1.6;
            tangon = offset * tangon;
            golfie = verify > tangon;
 113:
            tangon = zuuluu;
            if(!golfie) { _fun00012_ip = 149; continue _fun00011 }
 119:
            golfie = entity.window;
            verify = golfie.innerWidth;
            golfie = 1.6;
            golfie = verify * golfie;
            tangon = golfie / option;
 149:
            michal = michal != oscard;
            if(!michal) { _fun00012_ip = 190; continue _fun00011 }
 156:
            option = oscard * report;
            golfie = entity.window;
            verify = golfie.innerHeight;
            golfie = 1.6;
            golfie = verify * golfie;
            michal = option > golfie;
 190:
            if(!michal) { _fun00012_ip = 223; continue _fun00011 }
 193:
            michal = entity.window;
            golfie = michal.innerHeight;
            michal = 1.6;
            michal = golfie * michal;
            zuuluu = michal / oscard;
 223:
            michal = entity.Math;
            entity = michal.min;
            entity = entity.bind(michal)(report, tangon, zuuluu);
            return entity;
        }
    };
    zuuluu['zoomScale'] = oscard;
    oscard = function(argFoo) { // Original name: getRatio
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            zuuluu = tangon.width;
            entity = tangon.height;
            michal = tangon.maxWidth;
            oscard = tangon.maxHeight;
            golfie = zuuluu > michal;
            tangon = 1;
            report = tangon;
            if(!golfie) { _fun00014_ip = 42; continue _fun00013 }
 38:
            report = michal / zuuluu;
 42:
            michal = global;
            option = michal.Math;
            golfie = option.round;
            zuuluu = zuuluu * report;
            zuuluu = golfie.bind(option)(zuuluu);
            golfie = michal.Math;
            zuuluu = golfie.round;
            entity = entity * report;
            zuuluu = zuuluu.bind(golfie)(entity);
            golfie = zuuluu > oscard;
            entity = tangon;
            if(!golfie) { _fun00014_ip = 98; continue _fun00013 }
 94:
            entity = oscard / zuuluu;
 98:
            zuuluu = michal.Math;
            michal = zuuluu.min;
            entity = report * entity;
            entity = michal.bind(zuuluu)(entity, tangon);
            return entity;
        }
    };
    zuuluu['getRatio'] = oscard;
    oscard = function(argFoo) { // Original name: getCoverRatio
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            golfie = entity.width;
            oscard = entity.height;
            zuuluu = entity.maxWidth;
            michal = entity.maxHeight;
            if(!(golfie !== oscard)) { _fun00016_ip = 78; continue _fun00015 }
 29:
            entity = global;
            report = entity.Math;
            tangon = report.max;
            zuuluu = zuuluu / golfie;
            michal = michal / oscard;
            tangon = tangon.bind(report)(zuuluu, michal);
            zuuluu = entity.Math;
            michal = zuuluu.min;
            entity = 1;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
 78:
            entity = 1;
            return entity;
        }
    };
    zuuluu['getCoverRatio'] = oscard;
    oscard = function(argFoo) { // Original name: hasDimensions
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = entity.width;
            zuuluu = entity.height;
            michal = null;
            entity = michal != report;
            if(!entity) { _fun00018_ip = 28; continue _fun00017 }
 22:
            tangon = 0;
            entity = tangon !== report;
 28:
            if(!entity) { _fun00018_ip = 35; continue _fun00017 }
 31:
            entity = michal != zuuluu;
 35:
            if(!entity) { _fun00018_ip = 44; continue _fun00017 }
 38:
            michal = 0;
            entity = michal !== zuuluu;
 44:
            return entity;
        }
    };
    zuuluu['hasDimensions'] = oscard;
    oscard = function(argFoo) { // Original name: makeCssUrlString
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argFoo;
            entity = null;
            michal = entity == report;
            zuuluu = 'none';
            entity = zuuluu;
            if(michal) { _fun00020_ip = 59; continue _fun00019 }
 19:
            michal = '';
            entity = zuuluu;
            if(!(michal !== report)) { _fun00020_ip = 59; continue _fun00019 }
 30:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = 'url(';
            michal = ')';
            entity = tangon.bind(zuuluu)(report, michal);
 59:
            return entity;
        }
    };
    zuuluu['makeCssUrlString'] = oscard;
    zuuluu['getPalette'] = report;
    report = function(argFoo) {
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.default;
        michal = zuuluu.getPaletteForAvatarMobile;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getPaletteForAvatar'] = report;
    report = function(argFoo) { // Original name: readFileAsBase64
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        tangon = function(argFoo, argBar) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            michal = global;
            michal = michal.FileReader;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            oscard = zuuluu;
            michal = new oscard[michal](report);
            michal = michal instanceof Object ? michal : zuuluu;
            var _closure3_slot2 = michal;
            tangon = michal.readAsDataURL;
            zuuluu = _closure2_slot0;
            zuuluu = tangon.bind(michal)(zuuluu);
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                michal = _closure3_slot2;
                tangon = michal.result;
                report = 'string';
                tangon = typeof tangon;
                report = report === tangon;
                tangon = 'Result must be a string';
                tangon = oscard.bind(entity)(report, tangon);
                zuuluu = _closure3_slot0;
                michal = michal.result;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal['onload'] = zuuluu;
            entity = function(argFoo) {
                zuuluu = _closure3_slot1;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            michal['onerror'] = entity;
            entity = undefined;
            return entity;
        };
        report = michal;
        entity = new report[zuuluu](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['readFileAsBase64'] = report;
    report = function(argFoo) { // Original name: dataUriFileSize
        zuuluu = argFoo;
        michal = zuuluu.split;
        entity = ';base64,';
        tangon = michal.bind(zuuluu)(entity);
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        entity = zuuluu[entity];
        zuuluu = undefined;
        report = michal.bind(zuuluu)(entity);
        michal = tangon.length;
        entity = 2;
        michal = entity === michal;
        entity = 'Input data is not a valid image.';
        entity = report.bind(zuuluu)(michal, entity);
        entity = global;
        michal = entity.atob;
        entity = 1;
        entity = tangon[entity];
        entity = michal.bind(zuuluu)(entity);
        entity = entity.length;
        return entity;
    };
    zuuluu['dataUriFileSize'] = report;
    report = function() { // Original name: dataUrlToFile
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['dataUrlToFile'] = report;
    zuuluu['dataUrlToBlob'] = tangon;
    michal = function() { // Original name: isPNGAnimated
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['isPNGAnimated'] = michal;
    return entity;
})();