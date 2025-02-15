// app/utils/Color.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    mike = function(argFoo) { // Original name: hslToRgb
        _fun44637: for(var _fun44637_ip = 0; ; ) switch(_fun44637_ip) {
 0:
            mike = argFoo;
            oscar = mike.hue;
            report = mike.saturation;
            tango = mike.lightness;
            mike = mike.alpha;
            zulu = 255;
            options = report / zulu;
            offset = tango / zulu;
            zulu = global;
            yankee = zulu.Math;
            verify = yankee.abs;
            tango = 2;
            golf = tango * offset;
            report = 1;
            golf = golf - report;
            golf = verify.bind(yankee)(golf);
            golf = report - golf;
            options = golf * options;
            yankee = zulu.Math;
            verify = yankee.abs;
            zulu = 60;
            golf = oscar / zulu;
            golf = golf % tango;
            golf = golf - report;
            golf = verify.bind(yankee)(golf);
            golf = report - golf;
            golf = options * golf;
            verify = options / tango;
            verify = offset - verify;
            var _closure2_slot0 = verify;
            if(!(!(oscar < zulu))) { _fun44637_ip = 283; continue _fun44637 }
 140:
            zulu = 120;
            if(!(!(oscar < zulu))) { _fun44637_ip = 260; continue _fun44637 }
 147:
            zulu = 180;
            if(!(!(oscar < zulu))) { _fun44637_ip = 237; continue _fun44637 }
 154:
            zulu = 240;
            if(!(!(oscar < zulu))) { _fun44637_ip = 214; continue _fun44637 }
 161:
            zulu = 300;
            if(!(!(oscar < zulu))) { _fun44637_ip = 191; continue _fun44637 }
 171:
            oscar = new Array(3);
            oscar[0] = options;
            zulu = 0;
            oscar[1] = zulu;
            oscar[2] = golf;
            _fun44637_ip = 212; continue _fun44637;
 191:
            zulu = new Array(3);
            zulu[0] = golf;
            verify = 0;
            zulu[1] = verify;
            zulu[2] = options;
            oscar = zulu;
 212:
            _fun44637_ip = 235; continue _fun44637;
 214:
            zulu = [0];
            zulu[1] = golf;
            zulu[2] = options;
            oscar = zulu;
 235:
            _fun44637_ip = 258; continue _fun44637;
 237:
            zulu = [0];
            zulu[1] = options;
            zulu[2] = golf;
            oscar = zulu;
 258:
            _fun44637_ip = 281; continue _fun44637;
 260:
            zulu = new Array(3);
            zulu[0] = golf;
            zulu[1] = options;
            verify = 0;
            zulu[2] = verify;
            oscar = zulu;
 281:
            _fun44637_ip = 304; continue _fun44637;
 283:
            zulu = new Array(3);
            zulu[0] = options;
            zulu[1] = golf;
            golf = 0;
            zulu[2] = golf;
            oscar = zulu;
 304:
            zulu = oscar.map;
            entity = function(argFoo) {
                entity = global;
                zulu = entity.Math;
                mike = zulu.round;
                tango = _closure2_slot0;
                entity = argFoo;
                tango = entity + tango;
                entity = 255;
                entity = entity * tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = zulu.bind(oscar)(entity);
            entity = {};
            oscar = 0;
            oscar = zulu[oscar];
            entity['red'] = oscar;
            report = zulu[report];
            entity['green'] = report;
            zulu = zulu[tango];
            entity['blue'] = zulu;
            entity['alpha'] = mike;
            return entity;
        }
    };
    var _closure1_slot5 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = oscar[entity];
    entity = undefined;
    report = golf.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = oscar[report];
    report = golf.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = oscar[report];
    report = golf.bind(entity)(report);
    var _closure1_slot2 = report;
    report = /^#[0-9a-f]{3,8}$/i;
    var _closure1_slot3 = report;
    report = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
    var _closure1_slot4 = report;
    tango = function() {
        report = function(argFoo, argBar, argBaz, argCorge) { // Original name: Color
            zulu = this;
            tango = _closure1_slot1;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['red'] = mike;
            mike = argBar;
            zulu['green'] = mike;
            mike = argBaz;
            zulu['blue'] = mike;
            mike = argCorge;
            zulu['alpha'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot2;
        entity = {};
        mike = 'toHexString';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun44641: for(var _fun44641_ip = 0; ; ) switch(_fun44641_ip) {
 0:
                entity = this;
                mike = global;
                report = mike.Math;
                tango = report.round;
                zulu = entity.red;
                report = tango.bind(report)(zulu);
                zulu = report.toString;
                tango = 16;
                oscar = zulu.bind(report)(tango);
                golf = mike.Math;
                report = golf.round;
                zulu = entity.green;
                report = report.bind(golf)(zulu);
                zulu = report.toString;
                golf = zulu.bind(report)(tango);
                report = mike.Math;
                zulu = report.round;
                mike = entity.blue;
                zulu = zulu.bind(report)(mike);
                mike = zulu.toString;
                tango = mike.bind(zulu)(tango);
                mike = entity.red;
                report = 15.5;
                zulu = oscar;
                if(!(!(mike > report))) { _fun44641_ip = 137; continue _fun44641 }
 127:
                mike = '0';
                zulu = mike + oscar;
 137:
                mike = '#';
                zulu = mike + zulu;
                oscar = entity.green;
                mike = golf;
                if(!(!(oscar > report))) { _fun44641_ip = 168; continue _fun44641 }
 158:
                oscar = '0';
                mike = oscar + golf;
 168:
                mike = zulu + mike;
                zulu = entity.blue;
                entity = tango;
                if(!(!(zulu > report))) { _fun44641_ip = 195; continue _fun44641 }
 185:
                zulu = '0';
                entity = zulu + tango;
 195:
                entity = mike + entity;
                return entity;
            }
        };
        entity['value'] = mike;
        zulu = new Array(3);
        zulu[0] = entity;
        entity = {};
        mike = 'toHSL';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun44642: for(var _fun44642_ip = 0; ; ) switch(_fun44642_ip) {
 0:
                mike = this;
                entity = {};
                zulu = mike.red;
                entity['red'] = zulu;
                zulu = mike.green;
                entity['green'] = zulu;
                zulu = mike.blue;
                entity['blue'] = zulu;
                mike = mike.alpha;
                entity['alpha'] = mike;
                report = entity.red;
                tango = entity.green;
                mike = entity.blue;
                zulu = entity.alpha;
                entity = 255;
                verify = report / entity;
                options = tango / entity;
                entity = mike / entity;
                golf = global;
                tango = golf.Math;
                mike = tango.max;
                yankee = mike.bind(tango)(verify, options, entity);
                tango = golf.Math;
                mike = tango.min;
                tango = mike.bind(tango)(verify, options, entity);
                mike = yankee - tango;
                tango = yankee + tango;
                offset = 2;
                tango = tango / offset;
                oscar = 0;
                report = 0;
                if(!(mike > oscar)) { _fun44642_ip = 185; continue _fun44642 }
 149:
                backup = golf.Math;
                foxtrot = backup.abs;
                golf = offset * tango;
                romeo = 1;
                golf = golf - romeo;
                golf = foxtrot.bind(backup)(golf);
                golf = romeo - golf;
                report = mike / golf;
 185:
                if(!(oscar !== mike)) { _fun44642_ip = 280; continue _fun44642 }
 189:
                if(!(verify !== yankee)) { _fun44642_ip = 234; continue _fun44642 }
 193:
                if(!(options !== yankee)) { _fun44642_ip = 220; continue _fun44642 }
 197:
                golf = 0;
                if(!(entity === yankee)) { _fun44642_ip = 249; continue _fun44642 }
 203:
                yankee = options - entity;
                romeo = yankee / mike;
                yankee = 4;
                golf = romeo + yankee;
                _fun44642_ip = 249; continue _fun44642;
 220:
                verify = entity - verify;
                verify = verify / mike;
                golf = verify + offset;
                _fun44642_ip = 249; continue _fun44642;
 234:
                entity = options - entity;
                mike = entity / mike;
                entity = 6;
                golf = mike % entity;
 249:
                entity = {};
                mike = 60;
                mike = mike * golf;
                entity['hue'] = mike;
                entity['saturation'] = report;
                entity['lightness'] = tango;
                entity['alpha'] = zulu;
                _fun44642_ip = 305; continue _fun44642;
 280:
                mike = {};
                mike['hue'] = oscar;
                mike['saturation'] = report;
                mike['lightness'] = tango;
                mike['alpha'] = zulu;
                entity = mike;
 305:
                return entity;
            }
        };
        entity['value'] = mike;
        zulu[1] = entity;
        entity = {};
        mike = 'getRelativeLuminance';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun44643: for(var _fun44643_ip = 0; ; ) switch(_fun44643_ip) {
 0:
                entity = this;
                zulu = entity.red;
                mike = 255;
                tango = zulu / mike;
                zulu = entity.green;
                oscar = zulu / mike;
                entity = entity.blue;
                report = entity / mike;
                mike = 0.03928;
                if(!(!(tango <= mike))) { _fun44643_ip = 110; continue _fun44643 }
 50:
                entity = global;
                options = entity.Math;
                golf = options.pow;
                entity = 0.055;
                zulu = tango + entity;
                entity = 1.055;
                zulu = zulu / entity;
                entity = 2.4;
                zulu = golf.bind(options)(zulu, entity);
                _fun44643_ip = 124; continue _fun44643;
 110:
                entity = 12.92;
                zulu = tango / entity;
 124:
                entity = 0.2126;
                zulu = entity * zulu;
                if(!(!(oscar <= mike))) { _fun44643_ip = 202; continue _fun44643 }
 142:
                entity = global;
                options = entity.Math;
                golf = options.pow;
                entity = 0.055;
                tango = oscar + entity;
                entity = 1.055;
                tango = tango / entity;
                entity = 2.4;
                tango = golf.bind(options)(tango, entity);
                _fun44643_ip = 216; continue _fun44643;
 202:
                entity = 12.92;
                tango = oscar / entity;
 216:
                entity = 0.7152;
                entity = entity * tango;
                if(!(!(report <= mike))) { _fun44643_ip = 294; continue _fun44643 }
 234:
                mike = global;
                golf = mike.Math;
                oscar = golf.pow;
                mike = 0.055;
                tango = report + mike;
                mike = 1.055;
                tango = tango / mike;
                mike = 2.4;
                tango = oscar.bind(golf)(tango, mike);
                _fun44643_ip = 308; continue _fun44643;
 294:
                mike = 12.92;
                tango = report / mike;
 308:
                mike = 0.0722;
                mike = mike * tango;
                entity = zulu + entity;
                entity = entity + mike;
                return entity;
            }
        };
        entity['value'] = mike;
        zulu[2] = entity;
        entity = {};
        mike = 'parseString';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun44644: for(var _fun44644_ip = 0; ; ) switch(_fun44644_ip) {
 0:
                tango = argFoo;
                zulu = this;
                report = tango.match;
                mike = _closure1_slot4;
                report = report.bind(tango)(mike);
                mike = null;
                if(!(mike == report)) { _fun44644_ip = 69; continue _fun44644 }
 30:
                report = tango.match;
                entity = _closure1_slot3;
                entity = report.bind(tango)(entity);
                mike = mike != entity;
                entity = undefined;
                if(!mike) { _fun44644_ip = 67; continue _fun44644 }
 54:
                mike = zulu.parseHexString;
                entity = mike.bind(zulu)(tango);
 67:
                _fun44644_ip = 80; continue _fun44644;
 69:
                mike = zulu.parseColorFnString;
                entity = mike.bind(zulu)(tango);
 80:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        golf = 'parseRgbString';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun44645: for(var _fun44645_ip = 0; ; ) switch(_fun44645_ip) {
 0:
                zulu = argFoo;
                mike = this;
                entity = 'transparent';
                if(!(entity !== zulu)) { _fun44645_ip = 27; continue _fun44645 }
 14:
                entity = mike.parseColorFnString;
                entity = entity.bind(mike)(zulu);
                _fun44645_ip = 62; continue _fun44645;
 27:
                tango = _closure2_slot0;
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                verify = zulu;
                options = 0;
                golf = 0;
                oscar = 0;
                report = 0;
                mike = new verify[tango](options, golf, oscar, report, tango);
                entity = mike instanceof Object ? mike : zulu;
 62:
                return entity;
            }
        };
        entity['value'] = golf;
        mike[1] = entity;
        entity = {};
        golf = 'parseHexString';
        entity['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun44646: for(var _fun44646_ip = 0; ; ) switch(_fun44646_ip) {
 0:
                report = argFoo;
                zulu = report.match;
                mike = _closure1_slot3;
                mike = zulu.bind(report)(mike);
                romeo = null;
                if(!(romeo != mike)) { _fun44646_ip = 345; continue _fun44646 }
 30:
                tango = [6, 8];
                zulu = tango.includes;
                mike = report.length;
                mike = zulu.bind(tango)(mike);
                if(mike) { _fun44646_ip = 345; continue _fun44646 }
 61:
                tango = report.replace;
                zulu = '#';
                mike = '';
                report = tango.bind(report)(zulu, mike);
                tango = report.length;
                mike = 6;
                zulu = report;
                if(!(tango < mike)) { _fun44646_ip = 172; continue _fun44646 }
 95:
                tango = _closure1_slot0;
                mike = undefined;
                entity = 4;
                oscar = tango.bind(mike)(report, entity);
                entity = 0;
                mike = oscar[entity];
                entity = 1;
                report = oscar[entity];
                entity = 2;
                tango = oscar[entity];
                entity = 3;
                entity = oscar[entity];
                mike = mike + mike;
                mike = mike + report;
                mike = mike + report;
                mike = mike + tango;
                mike = mike + tango;
                zulu = mike;
                if(!(romeo != entity)) { _fun44646_ip = 172; continue _fun44646 }
 164:
                entity = entity + entity;
                zulu = mike + entity;
 172:
                mike = zulu.match;
                entity = /.{1,2}/g;
                offset = mike.bind(zulu)(entity);
                if(!(romeo != offset)) { _fun44646_ip = 345; continue _fun44646 }
 204:
                oscar = _closure2_slot0;
                golf = global;
                mike = golf.parseInt;
                entity = 0;
                entity = offset[entity];
                verify = undefined;
                options = 16;
                report = mike.bind(verify)(entity, options);
                mike = golf.parseInt;
                tango = 1;
                entity = offset[tango];
                zulu = mike.bind(verify)(entity, options);
                mike = golf.parseInt;
                entity = 2;
                entity = offset[entity];
                entity = mike.bind(verify)(entity, options);
                mike = 3;
                yankee = offset[mike];
                yankee = romeo != yankee;
                if(!yankee) { _fun44646_ip = 311; continue _fun44646 }
 288:
                golf = golf.parseInt;
                mike = offset[mike];
                golf = golf.bind(verify)(mike, options);
                mike = 255;
                tango = golf / mike;
 311:
                mike = oscar.prototype;
                mike = Object.create(mike, {constructor: {value: oscar}});
                output = mike;
                sizing = report;
                kilo = zulu;
                backup = entity;
                foxtrot = tango;
                entity = new output[oscar](sizing, kilo, backup, foxtrot, romeo);
                entity = entity instanceof Object ? entity : mike;
                return entity;
 345:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = golf;
        mike[2] = entity;
        entity = {};
        golf = 'parseColorFnString';
        entity['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun44647: for(var _fun44647_ip = 0; ; ) switch(_fun44647_ip) {
 0:
                report = argFoo;
                tango = report.match;
                zulu = _closure1_slot4;
                golf = tango.bind(report)(zulu);
                tango = null;
                if(!(tango == golf)) { _fun44647_ip = 33; continue _fun44647 }
 29:
                golf = new Array(0);
 33:
                oscar = _closure1_slot0;
                zulu = undefined;
                report = 3;
                options = oscar.bind(zulu)(golf, report);
                golf = 1;
                verify = options[golf];
                var _closure3_slot0 = verify;
                oscar = 2;
                offset = options[oscar];
                if(!(tango != verify)) { _fun44647_ip = 74; continue _fun44647 }
 70:
                if(!(tango == offset)) { _fun44647_ip = 76; continue _fun44647 }
 74:
                return zulu;
 76:
                options = offset.split;
                tango = /\s*[,\/\s]\s*/;
                offset = options.bind(offset)(tango);
                options = offset.map;
                tango = function(argFoo) {
                    tango = argFoo;
                    zulu = tango.replace;
                    mike = ',';
                    entity = '';
                    mike = zulu.bind(tango)(mike, entity);
                    entity = mike.trim;
                    entity = entity.bind(mike)();
                    return entity;
                };
                offset = options.bind(offset)(tango);
                options = offset.filter;
                tango = function(argFoo) {
                    mike = '';
                    entity = argFoo;
                    entity = mike !== entity;
                    return entity;
                };
                options = options.bind(offset)(tango);
                tango = options.map;
                mike = function(argFoo, argBar) {
                    _fun44650: for(var _fun44650_ip = 0; ; ) switch(_fun44650_ip) {
 0:
                        report = argFoo;
                        zulu = argBar;
                        entity = _closure3_slot0;
                        tango = /%$/;
                        mike = tango.test;
                        mike = mike.bind(tango)(report);
                        if(mike) { _fun44650_ip = 184; continue _fun44650 }
 43:
                        mike = entity[zulu];
                        entity = 'h';
                        if(!(entity === mike)) { _fun44650_ip = 109; continue _fun44650 }
 55:
                        mike = /turn$/;
                        entity = mike.test;
                        entity = entity.bind(mike)(report);
                        if(entity) { _fun44650_ip = 157; continue _fun44650 }
 82:
                        mike = /rad$/;
                        entity = mike.test;
                        entity = entity.bind(mike)(report);
                        if(entity) { _fun44650_ip = 126; continue _fun44650 }
 109:
                        entity = global;
                        mike = entity.parseFloat;
                        entity = undefined;
                        entity = mike.bind(entity)(report);
                        _fun44650_ip = 247; continue _fun44650;
 126:
                        mike = global;
                        tango = mike.parseFloat;
                        mike = undefined;
                        tango = tango.bind(mike)(report);
                        mike = 57.3;
                        entity = mike * tango;
                        _fun44650_ip = 247; continue _fun44650;
 157:
                        mike = global;
                        tango = mike.parseFloat;
                        mike = undefined;
                        tango = tango.bind(mike)(report);
                        mike = 360;
                        entity = mike * tango;
                        _fun44650_ip = 247; continue _fun44650;
 184:
                        mike = 3;
                        if(!(mike !== zulu)) { _fun44650_ip = 222; continue _fun44650 }
 191:
                        mike = global;
                        zulu = mike.parseFloat;
                        mike = undefined;
                        zulu = zulu.bind(mike)(report);
                        mike = 255;
                        zulu = mike * zulu;
                        mike = 100;
                        mike = zulu / mike;
                        _fun44650_ip = 244; continue _fun44650;
 222:
                        zulu = global;
                        tango = zulu.parseFloat;
                        zulu = undefined;
                        tango = tango.bind(zulu)(report);
                        zulu = 100;
                        mike = tango / zulu;
 244:
                        entity = mike;
 247:
                        return entity;
                    }
                };
                tango = tango.bind(options)(mike);
                mike = verify.substr;
                options = 0;
                verify = mike.bind(verify)(options, report);
                mike = 'hsl';
                if(!(mike !== verify)) { _fun44647_ip = 242; continue _fun44647 }
 167:
                foxtrot = _closure2_slot0;
                romeo = tango[options];
                yankee = tango[golf];
                offset = tango[oscar];
                mike = tango[report];
                backup = 'number';
                verify = typeof mike;
                mike = golf;
                if(!(backup === verify)) { _fun44647_ip = 208; continue _fun44647 }
 204:
                mike = tango[report];
 208:
                verify = foxtrot.prototype;
                verify = Object.create(verify, {constructor: {value: foxtrot}});
                echo = verify;
                result = romeo;
                output = yankee;
                sizing = offset;
                kilo = mike;
                mike = new echo[foxtrot](result, output, sizing, kilo, backup);
                mike = mike instanceof Object ? mike : verify;
                return mike;
 242:
                mike = _closure1_slot5;
                entity = {};
                options = tango[options];
                entity['hue'] = options;
                golf = tango[golf];
                entity['saturation'] = golf;
                oscar = tango[oscar];
                entity['lightness'] = oscar;
                tango = tango[report];
                entity['alpha'] = tango;
                entity = mike.bind(zulu)(entity);
                oscar = _closure2_slot0;
                result = entity.red;
                output = entity.green;
                sizing = entity.blue;
                kilo = entity.alpha;
                mike = oscar.prototype;
                mike = Object.create(mike, {constructor: {value: oscar}});
                echo = mike;
                entity = new echo[oscar](result, output, sizing, kilo, backup);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(report, zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    report = 3;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'utils/Color.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['hslToRgb'] = mike;
    return entity;
})();