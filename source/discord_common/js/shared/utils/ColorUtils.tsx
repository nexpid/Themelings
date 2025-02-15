// discord_common/js/shared/utils/ColorUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    golf = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golf;
    entity = function(argFoo) { // Original name: pad2
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            zulu = tango.length;
            mike = 1;
            entity = tango;
            if(!(mike === zulu)) { _fun00002_ip = 42; continue _fun00001 }
 18:
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = '0';
            entity = zulu.bind(mike)(tango);
 42:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    oscar = function(argFoo) { // Original name: int2hslRaw
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            mike = 16;
            tango = entity >> mike;
            mike = 8;
            zulu = entity >> mike;
            mike = 255;
            entity = mike & entity;
            tango = tango & mike;
            yankee = tango / mike;
            zulu = zulu & mike;
            verify = zulu / mike;
            options = entity / mike;
            oscar = global;
            mike = oscar.Math;
            entity = mike.min;
            mike = entity.bind(mike)(yankee, verify, options);
            zulu = oscar.Math;
            entity = zulu.max;
            entity = entity.bind(zulu)(yankee, verify, options);
            report = entity - mike;
            tango = 0;
            golf = tango === report;
            offset = 0;
            if(golf) { _fun00004_ip = 157; continue _fun00003 }
 97:
            if(!(entity !== yankee)) { _fun00004_ip = 139; continue _fun00003 }
 101:
            if(!(entity !== verify)) { _fun00004_ip = 122; continue _fun00003 }
 105:
            zulu = yankee - verify;
            romeo = zulu / report;
            zulu = 4;
            zulu = romeo + zulu;
            _fun00004_ip = 137; continue _fun00003;
 122:
            yankee = options - yankee;
            romeo = yankee / report;
            yankee = 2;
            zulu = romeo + yankee;
 137:
            _fun00004_ip = 154; continue _fun00003;
 139:
            options = verify - options;
            verify = options / report;
            options = 6;
            zulu = verify % options;
 154:
            offset = zulu;
 157:
            verify = oscar.Math;
            options = verify.round;
            zulu = 60;
            zulu = zulu * offset;
            verify = options.bind(verify)(zulu);
            options = verify;
            if(!(options < tango)) { _fun00004_ip = 197; continue _fun00003 }
 187:
            zulu = 360;
            options = verify + zulu;
 197:
            entity = entity + mike;
            mike = 2;
            zulu = entity / mike;
            entity = {};
            entity['h'] = options;
            tango = 0;
            if(golf) { _fun00004_ip = 255; continue _fun00003 }
 219:
            options = oscar.Math;
            golf = options.abs;
            mike = mike * zulu;
            oscar = 1;
            mike = mike - oscar;
            mike = golf.bind(options)(mike);
            mike = oscar - mike;
            tango = report / mike;
 255:
            mike = 100;
            oscar = mike * tango;
            report = oscar.toFixed;
            tango = 1;
            report = report.bind(oscar)(tango);
            report = report - 0;
            entity['s'] = report;
            zulu = mike * zulu;
            mike = zulu.toFixed;
            mike = mike.bind(zulu)(tango);
            mike = mike - 0;
            entity['l'] = mike;
            return entity;
        }
    };
    var _closure1_slot4 = oscar;
    report = function(argFoo) { // Original name: int2rgbArray
        zulu = argFoo;
        entity = 16;
        tango = zulu >> entity;
        entity = new Array(3);
        mike = 255;
        tango = tango & mike;
        entity[0] = tango;
        tango = 8;
        tango = zulu >> tango;
        tango = tango & mike;
        entity[1] = tango;
        mike = mike & zulu;
        entity[2] = mike;
        return entity;
    };
    var _closure1_slot5 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: getLuminance
        zulu = new Array(3);
        entity = argFoo;
        zulu[0] = entity;
        entity = argBar;
        zulu[1] = entity;
        entity = argBaz;
        zulu[2] = entity;
        mike = zulu.map;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = argFoo;
                entity = 255;
                zulu = mike / entity;
                entity = 0.03928;
                if(!(!(zulu <= entity))) { _fun00006_ip = 84; continue _fun00005 }
 24:
                entity = global;
                report = entity.Math;
                tango = report.pow;
                entity = 0.055;
                mike = zulu + entity;
                entity = 1.055;
                mike = mike / entity;
                entity = 2.4;
                entity = tango.bind(report)(mike, entity);
                _fun00006_ip = 98; continue _fun00005;
 84:
                mike = 12.92;
                entity = zulu / mike;
 98:
                return entity;
            }
        };
        tango = mike.bind(zulu)(entity);
        entity = 0;
        mike = tango[entity];
        entity = 0.2126;
        zulu = entity * mike;
        entity = 1;
        mike = tango[entity];
        entity = 0.7152;
        entity = entity * mike;
        mike = 2;
        tango = tango[mike];
        mike = 0.0722;
        mike = mike * tango;
        entity = zulu + entity;
        entity = entity + mike;
        return entity;
    };
    var _closure1_slot6 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;
    var _closure1_slot2 = entity;
    entity = 1;
    options = golf[entity];
    golf = argBar;
    entity = undefined;
    verify = golf.bind(entity)(options);
    options = verify.fileFinishedImporting;
    golf = '../discord_common/js/shared/utils/ColorUtils.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo) { // Original name: hex2int
        mike = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 0;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = argFoo;
        mike = mike.bind(zulu)(entity);
        entity = mike.num;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['hex2int'] = golf;
    golf = function(argFoo) { // Original name: int2hex
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golf = argFoo;
            entity = 16777215;
            if(!(!(golf <= entity))) { _fun00008_ip = 129; continue _fun00007 }
 13:
            zulu = _closure1_slot3;
            entity = 24;
            entity = golf >> entity;
            oscar = 255;
            mike = entity & oscar;
            entity = mike.toString;
            options = 16;
            entity = entity.bind(mike)(options);
            mike = undefined;
            report = zulu.bind(mike)(entity);
            entity = golf >> options;
            tango = entity & oscar;
            entity = tango.toString;
            entity = entity.bind(tango)(options);
            tango = zulu.bind(mike)(entity);
            entity = 8;
            entity = golf >> entity;
            oscar = entity & oscar;
            entity = oscar.toString;
            entity = entity.bind(oscar)(options);
            zulu = zulu.bind(mike)(entity);
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = '#';
            entity = mike.bind(entity)(report, tango, zulu);
            _fun00008_ip = 236; continue _fun00007;
 129:
            tango = _closure1_slot3;
            options = 16;
            zulu = golf >> options;
            mike = 255;
            report = zulu & mike;
            zulu = report.toString;
            report = zulu.bind(report)(options);
            zulu = undefined;
            oscar = tango.bind(zulu)(report);
            report = 8;
            report = golf >> report;
            verify = report & mike;
            report = verify.toString;
            report = report.bind(verify)(options);
            report = tango.bind(zulu)(report);
            golf = mike & golf;
            mike = golf.toString;
            mike = mike.bind(golf)(options);
            tango = tango.bind(zulu)(mike);
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = '#';
            entity = zulu.bind(mike)(oscar, report, tango);
 236:
            return entity;
        }
    };
    zulu['int2hex'] = golf;
    zulu['int2hslRaw'] = oscar;
    oscar = function(argFoo) { // Original name: int2hsl
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = arguments[1];
            mike = arguments[2];
            yankee = arguments[3];
            report = undefined;
            if(!(entity === report)) { _fun00010_ip = 17; continue _fun00009 }
 15:
            entity = false;
 17:
            if(!(mike === report)) { _fun00010_ip = 23; continue _fun00009 }
 21:
            mike = null;
 23:
            if(!(yankee === report)) { _fun00010_ip = 30; continue _fun00009 }
 27:
            yankee = 1;
 30:
            tango = _closure1_slot4;
            zulu = argFoo;
            zulu = tango.bind(report)(zulu);
            offset = zulu.h;
            verify = zulu.s;
            options = zulu.l;
            if(entity) { _fun00010_ip = 191; continue _fun00009 }
 66:
            entity = null;
            if(!(entity == mike)) { _fun00010_ip = 131; continue _fun00009 }
 72:
            entity = global;
            entity = entity.HermesInternal;
            oscar = entity.concat;
            update = 'hsla(';
            result = ', ';
            zulu = '%, ';
            romeo = ')';
            echo = offset;
            output = verify;
            sizing = zulu;
            kilo = options;
            backup = zulu;
            foxtrot = yankee;
            entity = update[oscar](echo, result, output, sizing, kilo, backup, foxtrot, romeo, yankee);
            _fun00010_ip = 189; continue _fun00009;
 131:
            output = mike * verify;
            mike = global;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            update = 'hsla(';
            result = ', ';
            zulu = '%, ';
            romeo = ')';
            echo = offset;
            sizing = zulu;
            kilo = options;
            backup = zulu;
            foxtrot = yankee;
            entity = update[oscar](echo, result, output, sizing, kilo, backup, foxtrot, romeo, yankee);
 189:
            _fun00010_ip = 248; continue _fun00009;
 191:
            mike = global;
            mike = mike.HermesInternal;
            golf = mike.concat;
            update = 'hsla(';
            result = ', calc(var(--saturation-factor, 1) * ';
            sizing = '%), ';
            backup = '%, ';
            romeo = ')';
            echo = offset;
            output = verify;
            kilo = options;
            foxtrot = yankee;
            entity = update[golf](echo, result, output, sizing, kilo, backup, foxtrot, romeo, yankee);
 248:
            return entity;
        }
    };
    zulu['int2hsl'] = oscar;
    oscar = function(argFoo) { // Original name: hex2rgb
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = argFoo;
            zulu = arguments[1];
            mike = undefined;
            if(!(zulu === mike)) { _fun00012_ip = 14; continue _fun00011 }
 12:
            zulu = null;
 14:
            golf = _closure1_slot0;
            report = _closure1_slot1;
            oscar = 0;
            report = report[oscar];
            golf = golf.bind(mike)(report);
            report = golf.valid;
            report = report.bind(golf)(tango);
            if(report) { _fun00012_ip = 54; continue _fun00011 }
 50:
            report = null;
            return report;
 54:
            report = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscar];
            entity = report.bind(mike)(entity);
            mike = entity.bind(mike)(tango);
            entity = mike.alpha;
            tango = null;
            if(!(tango == zulu)) { _fun00012_ip = 98; continue _fun00011 }
 88:
            tango = mike.alpha;
            zulu = tango.bind(mike)();
 98:
            mike = entity.bind(mike)(zulu);
            entity = mike.css;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    zulu['hex2rgb'] = oscar;
    oscar = function(argFoo, argBar) { // Original name: int2rgba
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tango = argFoo;
            options = argBar;
            entity = null;
            if(!(entity == options)) { _fun00014_ip = 30; continue _fun00013 }
 12:
            entity = 24;
            entity = tango >> entity;
            mike = 255;
            entity = entity & mike;
            options = entity / mike;
 30:
            entity = 16;
            zulu = tango >> entity;
            entity = 8;
            mike = tango >> entity;
            entity = 255;
            romeo = entity & tango;
            tango = global;
            tango = tango.HermesInternal;
            oscar = tango.concat;
            output = 'rgba(';
            sizing = zulu & entity;
            zulu = ', ';
            backup = mike & entity;
            verify = ')';
            kilo = zulu;
            foxtrot = zulu;
            yankee = zulu;
            offset = options;
            entity = output[oscar](sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify, options);
            return entity;
        }
    };
    zulu['int2rgba'] = oscar;
    oscar = function(argFoo) { // Original name: rgb2int
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zulu = argFoo;
            mike = zulu.match;
            entity = _closure1_slot2;
            oscar = mike.bind(zulu)(entity);
            entity = null;
            if(!(entity == oscar)) { _fun00016_ip = 39; continue _fun00015 }
 27:
            mike = {'red': 0, 'green': 0, 'blue': 0};
            _fun00016_ip = 117; continue _fun00015;
 39:
            entity = {};
            zulu = global;
            golf = zulu.parseInt;
            tango = 1;
            tango = oscar[tango];
            report = undefined;
            tango = golf.bind(report)(tango);
            entity['red'] = tango;
            golf = zulu.parseInt;
            tango = 2;
            tango = oscar[tango];
            tango = golf.bind(report)(tango);
            entity['green'] = tango;
            tango = zulu.parseInt;
            zulu = 3;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            entity['blue'] = zulu;
            mike = entity;
 117:
            zulu = mike.red;
            entity = 16;
            zulu = zulu << entity;
            tango = mike.green;
            entity = 8;
            entity = tango << entity;
            mike = mike.blue;
            entity = zulu + entity;
            entity = entity + mike;
            return entity;
        }
    };
    zulu['rgb2int'] = oscar;
    oscar = function(argFoo) { // Original name: int2hsv
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            mike = argFoo;
            entity = 16;
            entity = mike >> entity;
            zulu = 255;
            entity = entity & zulu;
            entity = entity / zulu;
            tango = 8;
            tango = mike >> tango;
            tango = tango & zulu;
            options = tango / zulu;
            mike = zulu & mike;
            golf = mike / zulu;
            zulu = global;
            tango = zulu.Math;
            mike = tango.max;
            mike = mike.bind(tango)(entity, options, golf);
            tango = zulu.Math;
            zulu = tango.min;
            report = zulu.bind(tango)(entity, options, golf);
            verify = mike - report;
            oscar = 0;
            zulu = 0;
            if(!(oscar !== mike)) { _fun00018_ip = 98; continue _fun00017 }
 94:
            zulu = verify / mike;
 98:
            tango = 0;
            if(!(mike !== report)) { _fun00018_ip = 181; continue _fun00017 }
 104:
            if(!(entity !== mike)) { _fun00018_ip = 153; continue _fun00017 }
 108:
            if(!(options !== mike)) { _fun00018_ip = 136; continue _fun00017 }
 112:
            report = mike;
            if(!(golf === report)) { _fun00018_ip = 174; continue _fun00017 }
 119:
            offset = entity - options;
            yankee = offset / verify;
            offset = 4;
            report = yankee + offset;
            _fun00018_ip = 174; continue _fun00017;
 136:
            entity = golf - entity;
            offset = entity / verify;
            entity = 2;
            report = offset + entity;
            _fun00018_ip = 174; continue _fun00017;
 153:
            entity = options - golf;
            entity = entity / verify;
            oscar = 0;
            if(!(options < golf)) { _fun00018_ip = 170; continue _fun00017 }
 167:
            oscar = 6;
 170:
            report = entity + oscar;
 174:
            entity = 60;
            tango = report * entity;
 181:
            entity = {};
            entity['h'] = tango;
            entity['s'] = zulu;
            entity['v'] = mike;
            return entity;
        }
    };
    zulu['int2hsv'] = oscar;
    oscar = function(argFoo) { // Original name: getDarkness
        mike = argFoo;
        entity = 16;
        tango = mike >> entity;
        entity = 8;
        entity = mike >> entity;
        zulu = 255;
        report = zulu & mike;
        mike = 1;
        oscar = 0.299;
        tango = tango & zulu;
        tango = oscar * tango;
        oscar = 0.587;
        entity = entity & zulu;
        entity = oscar * entity;
        tango = tango + entity;
        entity = 0.114;
        entity = entity * report;
        entity = tango + entity;
        entity = entity / zulu;
        entity = mike - entity;
        return entity;
    };
    zulu['getDarkness'] = oscar;
    oscar = function(argFoo) { // Original name: isValidHex
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.valid;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isValidHex'] = oscar;
    zulu['int2rgbArray'] = report;
    zulu['getLuminance'] = tango;
    tango = function(argFoo, argBar) { // Original name: getContrast
        zulu = _closure1_slot5;
        report = undefined;
        mike = argFoo;
        oscar = zulu.bind(report)(mike);
        mike = argBar;
        golf = zulu.bind(report)(mike);
        tango = _closure1_slot6;
        zulu = 0;
        verify = oscar[zulu];
        mike = 1;
        options = oscar[mike];
        entity = 2;
        oscar = oscar[entity];
        oscar = tango.bind(report)(verify, options, oscar);
        zulu = golf[zulu];
        mike = golf[mike];
        entity = golf[entity];
        report = tango.bind(report)(zulu, mike, entity);
        entity = global;
        zulu = entity.Math;
        mike = zulu.max;
        mike = mike.bind(zulu)(oscar, report);
        zulu = 0.05;
        mike = mike + zulu;
        tango = entity.Math;
        entity = tango.min;
        entity = entity.bind(tango)(oscar, report);
        entity = entity + zulu;
        entity = mike / entity;
        return entity;
    };
    zulu['getContrast'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: hsv2int
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            verify = argBar;
            golf = argBaz;
            mike = argFoo;
            entity = 360;
            entity = mike / entity;
            tango = global;
            zulu = tango.Math;
            mike = zulu.floor;
            oscar = 6;
            entity = oscar * entity;
            zulu = mike.bind(zulu)(entity);
            report = entity - zulu;
            entity = 1;
            mike = entity - verify;
            mike = golf * mike;
            options = report * verify;
            options = entity - options;
            options = golf * options;
            report = entity - report;
            report = report * verify;
            report = entity - report;
            report = golf * report;
            offset = zulu % oscar;
            oscar = 0;
            if(!(oscar !== offset)) { _fun00020_ip = 191; continue _fun00019 }
 98:
            if(!(entity !== offset)) { _fun00020_ip = 180; continue _fun00019 }
 102:
            entity = 2;
            if(!(entity !== offset)) { _fun00020_ip = 169; continue _fun00019 }
 109:
            entity = 3;
            if(!(entity !== offset)) { _fun00020_ip = 158; continue _fun00019 }
 116:
            entity = 4;
            if(!(entity !== offset)) { _fun00020_ip = 147; continue _fun00019 }
 123:
            verify = 5;
            zulu = 0;
            entity = 0;
            oscar = 0;
            if(!(verify === offset)) { _fun00020_ip = 200; continue _fun00019 }
 136:
            zulu = golf;
            entity = mike;
            oscar = options;
            _fun00020_ip = 200; continue _fun00019;
 147:
            zulu = report;
            entity = mike;
            oscar = golf;
            _fun00020_ip = 200; continue _fun00019;
 158:
            zulu = mike;
            entity = options;
            oscar = golf;
            _fun00020_ip = 200; continue _fun00019;
 169:
            zulu = mike;
            entity = golf;
            oscar = report;
            _fun00020_ip = 200; continue _fun00019;
 180:
            zulu = options;
            entity = golf;
            oscar = mike;
            _fun00020_ip = 200; continue _fun00019;
 191:
            zulu = golf;
            entity = report;
            oscar = mike;
 200:
            golf = tango.Math;
            report = golf.round;
            mike = 255;
            zulu = mike * zulu;
            report = report.bind(golf)(zulu);
            zulu = 16;
            zulu = report << zulu;
            golf = tango.Math;
            report = golf.round;
            entity = mike * entity;
            report = report.bind(golf)(entity);
            entity = 8;
            entity = report << entity;
            report = tango.Math;
            tango = report.round;
            mike = mike * oscar;
            mike = tango.bind(report)(mike);
            entity = zulu + entity;
            entity = entity + mike;
            return entity;
        }
    };
    zulu['hsv2int'] = mike;
    return entity;
})();