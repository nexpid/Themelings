// app/utils/ImageUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscar = function(argFoo) { // Original name: fit
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            tango = mike.width;
            backup = mike.height;
            oscar = mike.maxWidth;
            report = mike.maxHeight;
            verify = mike.minWidth;
            entity = undefined;
            if(!(verify === entity)) { _fun00002_ip = 39; continue _fun00001 }
 37:
            verify = 0;
 39:
            golf = mike.minHeight;
            if(!(golf === entity)) { _fun00002_ip = 51; continue _fun00001 }
 49:
            golf = 0;
 51:
            if(!(tango === oscar)) { _fun00002_ip = 68; continue _fun00001 }
 55:
            zulu = tango;
            mike = backup;
            if(!(mike !== report)) { _fun00002_ip = 246; continue _fun00001 }
 68:
            options = tango > oscar;
            offset = 1;
            entity = offset;
            if(!options) { _fun00002_ip = 85; continue _fun00001 }
 81:
            entity = oscar / tango;
 85:
            options = global;
            yankee = options.Math;
            oscar = yankee.max;
            foxtrot = options.Math;
            romeo = foxtrot.round;
            tango = tango * entity;
            tango = romeo.bind(foxtrot)(tango);
            tango = oscar.bind(yankee)(tango, verify);
            yankee = options.Math;
            oscar = yankee.max;
            foxtrot = options.Math;
            romeo = foxtrot.round;
            entity = backup * entity;
            entity = romeo.bind(foxtrot)(entity);
            entity = oscar.bind(yankee)(entity, golf);
            oscar = entity > report;
            if(!oscar) { _fun00002_ip = 172; continue _fun00001 }
 168:
            offset = report / entity;
 172:
            oscar = options.Math;
            report = oscar.max;
            romeo = options.Math;
            yankee = romeo.round;
            tango = tango * offset;
            tango = yankee.bind(romeo)(tango);
            zulu = report.bind(oscar)(tango, verify);
            oscar = options.Math;
            report = oscar.max;
            verify = options.Math;
            options = verify.round;
            entity = entity * offset;
            entity = options.bind(verify)(entity);
            mike = report.bind(oscar)(entity, golf);
 246:
            entity = {};
            entity['width'] = zulu;
            entity['height'] = mike;
            return entity;
        }
    };
    var _closure1_slot5 = oscar;
    report = function(argFoo, argBar, argBaz) { // Original name: getPalette
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            foxtrot = argBaz;
            entity = global;
            zulu = entity.document;
            mike = zulu.createElement;
            entity = 'canvas';
            zulu = mike.bind(zulu)(entity);
            mike = zulu.getContext;
            entity = '2d';
            tango = mike.bind(zulu)(entity);
            entity = null;
            if(!(entity != tango)) { _fun00004_ip = 352; continue _fun00003 }
 55:
            oscar = report.width;
            mike = 128;
            romeo = 0;
            entity = mike;
            if(!(romeo !== oscar)) { _fun00004_ip = 77; continue _fun00003 }
 72:
            entity = report.width;
 77:
            zulu['width'] = entity;
            oscar = report.height;
            if(!(romeo !== oscar)) { _fun00004_ip = 97; continue _fun00003 }
 92:
            mike = report.height;
 97:
            zulu['height'] = mike;
            zulu = tango.drawImage;
            config = tango;
            sequence = report;
            vacuum = 0;
            control = 0;
            source = entity;
            update = mike;
            zulu = config[zulu](sequence, vacuum, control, source, update, echo);
            zulu = tango.getImageData;
            config = tango;
            sequence = 0;
            control = entity;
            source = mike;
            zulu = config[zulu](sequence, vacuum, control, source, update);
            yankee = zulu.data;
            offset = entity * mike;
            report = new Array(0);
            verify = 250;
            options = 125;
            golf = 4;
            oscar = 1;
            zulu = 2;
            mike = 3;
            tango = undefined;
            entity = 0;
            if(!(entity < offset)) { _fun00004_ip = 294; continue _fun00003 }
 189:
            backup = golf * entity;
            kilo = romeo + backup;
            result = yankee[kilo];
            kilo = backup + oscar;
            output = yankee[kilo];
            kilo = backup + zulu;
            sizing = yankee[kilo];
            backup = backup + mike;
            kilo = yankee[backup];
            backup = tango === kilo;
            if(backup) { _fun00004_ip = 236; continue _fun00003 }
 232:
            backup = kilo >= options;
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
            kilo = report.push;
            backup = new Array(3);
            backup[0] = result;
            backup[1] = output;
            backup[2] = sizing;
            backup = kilo.bind(report)(backup);
 286:
            entity = entity + foxtrot;
            if(entity < offset) { _fun00004_ip = 189; continue _fun00003 }
 294:
            zulu = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[oscar];
            zulu = zulu.bind(tango)(entity);
            entity = argBar;
            zulu = zulu.bind(tango)(report, entity);
            tango = 'boolean';
            entity = typeof zulu;
            if(!(tango !== entity)) { _fun00004_ip = 346; continue _fun00003 }
 334:
            entity = zulu.palette;
            entity = entity.bind(zulu)();
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
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 104; continue _fun00005 }
 7:
                    tango = _closure1_slot8;
                    zulu = undefined;
                    mike = argFoo;
                    zulu = tango.bind(zulu)(mike);
                    mike = zulu.arrayBuffer;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=38);
 36:
                    return mike;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00006_ip = 101; continue _fun00005 }
 44:
                    zulu = global;
                    golf = zulu.File;
                    oscar = new Array(1);
                    oscar[0] = mike;
                    report = {};
                    zulu = argBaz;
                    report['type'] = zulu;
                    zulu = golf.prototype;
                    tango = Object.create(zulu, {constructor: {value: golf}});
                    verify = argBar;
                    yankee = tango;
                    offset = oscar;
                    options = report;
                    zulu = new yankee[golf](offset, verify, options, golf);
                    zulu = zulu instanceof Object ? zulu : tango;
                    return zulu;
 101:
                    return mike;
 104:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    tango = function(argFoo) { // Original name: dataUrlToBlob
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            entity = zulu.split;
            mike = ',';
            entity = entity.bind(zulu)(mike);
            oscar = 0;
            report = entity[oscar];
            tango = report.indexOf;
            entity = 'base64';
            entity = tango.bind(report)(entity);
            if(!(!(entity >= oscar))) { _fun00008_ip = 75; continue _fun00007 }
 41:
            entity = global;
            report = entity.btoa;
            entity = zulu.split;
            tango = entity.bind(zulu)(mike);
            entity = 1;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            _fun00008_ip = 107; continue _fun00007;
 75:
            entity = global;
            golf = entity.atob;
            entity = zulu.split;
            tango = entity.bind(zulu)(mike);
            entity = 1;
            tango = tango[entity];
            entity = undefined;
            report = golf.bind(entity)(tango);
 107:
            entity = zulu.split;
            entity = entity.bind(zulu)(mike);
            zulu = entity[oscar];
            mike = zulu.split;
            entity = ':';
            mike = mike.bind(zulu)(entity);
            entity = 1;
            zulu = mike[entity];
            mike = zulu.split;
            entity = ';';
            entity = mike.bind(zulu)(entity);
            mike = entity[oscar];
            zulu = global;
            golf = zulu.Uint8Array;
            verify = report.length;
            tango = golf.prototype;
            tango = Object.create(tango, {constructor: {value: golf}});
            offset = tango;
            entity = new offset[golf](verify, options);
            entity = entity instanceof Object ? entity : tango;
            tango = report.length;
            tango = oscar < tango;
            oscar = 0;
            if(!tango) { _fun00008_ip = 234; continue _fun00007 }
 207:
            tango = report.charCodeAt;
            tango = tango.bind(report)(oscar);
            entity[oscar] = tango;
            oscar = oscar + 1;
            tango = report.length;
            if(oscar < tango) { _fun00008_ip = 207; continue _fun00007 }
 234:
            tango = zulu.Blob;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = {};
            entity['type'] = mike;
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            offset = mike;
            verify = zulu;
            options = entity;
            entity = new offset[tango](verify, options, golf);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = function() { // Original name: _isPNGAnimated
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    zulu = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 183; continue _fun00009 }
 13:
                    oscar = zulu.type;
                    mike = null;
                    mike = mike == oscar;
                    tango = undefined;
                    if(mike) { _fun00010_ip = 49; continue _fun00009 }
 29:
                    report = oscar.split;
                    mike = ';';
                    report = report.bind(oscar)(mike);
                    mike = 0;
                    tango = report[mike];
 49:
                    mike = 'image/png';
                    if(!(mike === tango)) { _fun00010_ip = 147; continue _fun00009 }
 59:
                    mike = zulu.text;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=72);
 70:
                    return mike;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 144; continue _fun00009 }
 78:
                    tango = mike.indexOf;
                    zulu = 'IDAT';
                    oscar = tango.bind(mike)(zulu);
                    report = 0;
                    zulu = oscar > report;
                    if(!zulu) { _fun00010_ip = 141; continue _fun00009 }
 103:
                    tango = mike.substring;
                    oscar = tango.bind(mike)(report, oscar);
                    report = oscar.indexOf;
                    tango = 'acTL';
                    report = report.bind(oscar)(tango);
                    tango = -1;
                    zulu = tango !== report;
 141:
                    return zulu;
 144:
                    return mike;
 147:
                    mike = global;
                    tango = mike.Error;
                    mike = tango.prototype;
                    zulu = Object.create(mike, {constructor: {value: tango}});
                    options = 'File is not a PNG';
                    verify = zulu;
                    mike = new verify[tango](options, golf);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 183:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = new Array(1);
    yankee = [0, 0, 0];
    golf[0] = yankee;
    var _closure1_slot4 = golf;
    golf = 3;
    golf = verify[golf];
    yankee = offset.bind(entity)(golf);
    offset = yankee.memoize;
    golf = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo, argBar) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            mike = global;
            mike = mike.Image;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            tango = zulu;
            mike = new tango[mike](zulu);
            zulu = mike instanceof Object ? mike : zulu;
            var _closure3_slot2 = zulu;
            mike = 'Anonymous';
            zulu['crossOrigin'] = mike;
            mike = function(argFoo) {
                tango = _closure3_slot1;
                entity = undefined;
                mike = argFoo;
                mike = tango.bind(entity)(mike);
                tango = _closure3_slot2;
                mike = null;
                tango['onload'] = mike;
                tango['onerror'] = mike;
                _closure3_slot2 = mike;
                return entity;
            };
            zulu['onerror'] = mike;
            zulu = _closure3_slot2;
            mike = function() {
                tango = _closure3_slot0;
                golf = _closure1_slot6;
                oscar = _closure3_slot2;
                entity = undefined;
                report = 5;
                mike = 10;
                mike = golf.bind(entity)(oscar, report, mike);
                mike = tango.bind(entity)(mike);
                tango = _closure3_slot2;
                mike = null;
                tango['onload'] = mike;
                tango['onerror'] = mike;
                _closure3_slot2 = mike;
                return entity;
            };
            zulu['onload'] = mike;
            mike = _closure3_slot2;
            entity = _closure2_slot0;
            mike['src'] = entity;
            entity = undefined;
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    golf = offset.bind(yankee)(golf);
    golf = 5;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'utils/ImageUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['fit'] = oscar;
    oscar = 2000;
    zulu['IMAGE_MAX_ZOOM'] = oscar;
    oscar = function(argFoo, argBar) { // Original name: zoomFit
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = arguments[2];
            zulu = undefined;
            if(!(entity === zulu)) { _fun00012_ip = 19; continue _fun00011 }
 9:
            entity = {'vertical': 0, 'horizontal': 0};
 19:
            report = global;
            golf = report.Math;
            oscar = golf.min;
            options = report.Math;
            tango = options.round;
            mike = report.window;
            verify = mike.innerHeight;
            mike = 0.65;
            mike = mike * verify;
            tango = tango.bind(options)(mike);
            verify = report.Math;
            options = verify.round;
            mike = report.window;
            offset = mike.innerHeight;
            mike = entity.vertical;
            mike = offset - mike;
            mike = options.bind(verify)(mike);
            tango = oscar.bind(golf)(tango, mike);
            golf = report.Math;
            oscar = golf.min;
            verify = report.Math;
            options = verify.round;
            mike = report.window;
            offset = mike.innerWidth;
            mike = 0.75;
            mike = mike * offset;
            mike = options.bind(verify)(mike);
            verify = report.Math;
            options = verify.round;
            offset = report.window;
            offset = offset.innerWidth;
            entity = entity.horizontal;
            entity = offset - entity;
            entity = options.bind(verify)(entity);
            options = oscar.bind(golf)(mike, entity);
            mike = report.Math;
            entity = mike.min;
            golf = 2000;
            tango = entity.bind(mike)(tango, golf);
            mike = _closure1_slot5;
            entity = {};
            oscar = argFoo;
            entity['width'] = oscar;
            oscar = argBar;
            entity['height'] = oscar;
            oscar = report.Math;
            report = oscar.min;
            report = report.bind(oscar)(options, golf);
            entity['maxWidth'] = report;
            entity['maxHeight'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['zoomFit'] = oscar;
    oscar = function(argFoo, argBar, argBaz, argCorge) { // Original name: zoomScale
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = argFoo;
            verify = argBar;
            options = argBaz;
            oscar = argCorge;
            entity = global;
            golf = entity.Math;
            report = golf.max;
            mike = null;
            yankee = mike != zulu;
            offset = 0;
            tango = 0;
            if(!yankee) { _fun00014_ip = 63; continue _fun00013 }
 38:
            tango = 0;
            if(!(offset !== zulu)) { _fun00014_ip = 63; continue _fun00013 }
 44:
            yankee = mike != verify;
            tango = 0;
            if(!yankee) { _fun00014_ip = 63; continue _fun00013 }
 53:
            tango = 0;
            if(!(tango !== verify)) { _fun00014_ip = 63; continue _fun00013 }
 59:
            tango = zulu / options;
 63:
            zulu = 2;
            report = report.bind(golf)(zulu, tango);
            golf = mike != options;
            if(!golf) { _fun00014_ip = 113; continue _fun00013 }
 79:
            verify = options * report;
            tango = entity.window;
            offset = tango.innerWidth;
            tango = 1.3;
            tango = offset * tango;
            golf = verify > tango;
 113:
            tango = zulu;
            if(!golf) { _fun00014_ip = 149; continue _fun00013 }
 119:
            golf = entity.window;
            verify = golf.innerWidth;
            golf = 1.3;
            golf = verify * golf;
            tango = golf / options;
 149:
            mike = mike != oscar;
            if(!mike) { _fun00014_ip = 190; continue _fun00013 }
 156:
            options = oscar * report;
            golf = entity.window;
            verify = golf.innerHeight;
            golf = 1.3;
            golf = verify * golf;
            mike = options > golf;
 190:
            if(!mike) { _fun00014_ip = 223; continue _fun00013 }
 193:
            mike = entity.window;
            golf = mike.innerHeight;
            mike = 1.3;
            mike = golf * mike;
            zulu = mike / oscar;
 223:
            mike = entity.Math;
            entity = mike.min;
            entity = entity.bind(mike)(report, tango, zulu);
            return entity;
        }
    };
    zulu['zoomScale'] = oscar;
    oscar = function(argFoo) { // Original name: getRatio
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tango = argFoo;
            zulu = tango.width;
            entity = tango.height;
            mike = tango.maxWidth;
            oscar = tango.maxHeight;
            golf = zulu > mike;
            tango = 1;
            report = tango;
            if(!golf) { _fun00016_ip = 42; continue _fun00015 }
 38:
            report = mike / zulu;
 42:
            mike = global;
            options = mike.Math;
            golf = options.round;
            zulu = zulu * report;
            zulu = golf.bind(options)(zulu);
            golf = mike.Math;
            zulu = golf.round;
            entity = entity * report;
            zulu = zulu.bind(golf)(entity);
            golf = zulu > oscar;
            entity = tango;
            if(!golf) { _fun00016_ip = 98; continue _fun00015 }
 94:
            entity = oscar / zulu;
 98:
            zulu = mike.Math;
            mike = zulu.min;
            entity = report * entity;
            entity = mike.bind(zulu)(entity, tango);
            return entity;
        }
    };
    zulu['getRatio'] = oscar;
    oscar = function(argFoo) { // Original name: getCoverRatio
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            golf = entity.width;
            oscar = entity.height;
            zulu = entity.maxWidth;
            mike = entity.maxHeight;
            if(!(golf !== oscar)) { _fun00018_ip = 78; continue _fun00017 }
 29:
            entity = global;
            report = entity.Math;
            tango = report.max;
            zulu = zulu / golf;
            mike = mike / oscar;
            tango = tango.bind(report)(zulu, mike);
            zulu = entity.Math;
            mike = zulu.min;
            entity = 1;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
 78:
            entity = 1;
            return entity;
        }
    };
    zulu['getCoverRatio'] = oscar;
    oscar = function(argFoo) { // Original name: makeCssUrlString
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argFoo;
            entity = null;
            mike = entity == report;
            zulu = 'none';
            entity = zulu;
            if(mike) { _fun00020_ip = 59; continue _fun00019 }
 19:
            mike = '';
            entity = zulu;
            if(!(mike !== report)) { _fun00020_ip = 59; continue _fun00019 }
 30:
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = 'url(';
            mike = ')';
            entity = tango.bind(zulu)(report, mike);
 59:
            return entity;
        }
    };
    zulu['makeCssUrlString'] = oscar;
    zulu['getPalette'] = report;
    report = function(argFoo) {
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.default;
        mike = zulu.getPaletteForAvatarMobile;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getPaletteForAvatar'] = report;
    report = function(argFoo) { // Original name: readFileAsBase64
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo, argBar) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            mike = global;
            mike = mike.FileReader;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            oscar = zulu;
            mike = new oscar[mike](report);
            mike = mike instanceof Object ? mike : zulu;
            var _closure3_slot2 = mike;
            tango = mike.readAsDataURL;
            zulu = _closure2_slot0;
            zulu = tango.bind(mike)(zulu);
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                mike = _closure3_slot2;
                tango = mike.result;
                report = 'string';
                tango = typeof tango;
                report = report === tango;
                tango = 'Result must be a string';
                tango = oscar.bind(entity)(report, tango);
                zulu = _closure3_slot0;
                mike = mike.result;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike['onload'] = zulu;
            entity = function(argFoo) {
                zulu = _closure3_slot1;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            mike['onerror'] = entity;
            entity = undefined;
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['readFileAsBase64'] = report;
    report = function(argFoo) { // Original name: dataUriFileSize
        zulu = argFoo;
        mike = zulu.split;
        entity = ';base64,';
        tango = mike.bind(zulu)(entity);
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        entity = zulu[entity];
        zulu = undefined;
        report = mike.bind(zulu)(entity);
        mike = tango.length;
        entity = 2;
        mike = entity === mike;
        entity = 'Input data is not a valid image.';
        entity = report.bind(zulu)(mike, entity);
        entity = global;
        mike = entity.atob;
        entity = 1;
        entity = tango[entity];
        entity = mike.bind(zulu)(entity);
        entity = entity.length;
        return entity;
    };
    zulu['dataUriFileSize'] = report;
    report = function() { // Original name: dataUrlToFile
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['dataUrlToFile'] = report;
    zulu['dataUrlToBlob'] = tango;
    mike = function() { // Original name: isPNGAnimated
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['isPNGAnimated'] = mike;
    return entity;
})();