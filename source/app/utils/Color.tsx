// app/utils/Color.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    michal = function(argFoo) { // Original name: hslToRgb
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = michal.hue;
            report = michal.saturation;
            tangon = michal.lightness;
            michal = michal.alpha;
            zuuluu = 255;
            option = report / zuuluu;
            offset = tangon / zuuluu;
            zuuluu = global;
            yankee = zuuluu.Math;
            verify = yankee.abs;
            tangon = 2;
            golfie = tangon * offset;
            report = 1;
            golfie = golfie - report;
            golfie = verify.bind(yankee)(golfie);
            golfie = report - golfie;
            option = golfie * option;
            yankee = zuuluu.Math;
            verify = yankee.abs;
            zuuluu = 60;
            golfie = oscard / zuuluu;
            golfie = golfie % tangon;
            golfie = golfie - report;
            golfie = verify.bind(yankee)(golfie);
            golfie = report - golfie;
            golfie = option * golfie;
            verify = option / tangon;
            verify = offset - verify;
            var _closure2_slot0 = verify;
            if(!(!(oscard < zuuluu))) { _fun00002_ip = 283; continue _fun00001 }
 140:
            zuuluu = 120;
            if(!(!(oscard < zuuluu))) { _fun00002_ip = 260; continue _fun00001 }
 147:
            zuuluu = 180;
            if(!(!(oscard < zuuluu))) { _fun00002_ip = 237; continue _fun00001 }
 154:
            zuuluu = 240;
            if(!(!(oscard < zuuluu))) { _fun00002_ip = 214; continue _fun00001 }
 161:
            zuuluu = 300;
            if(!(!(oscard < zuuluu))) { _fun00002_ip = 191; continue _fun00001 }
 171:
            oscard = new Array(3);
            oscard[0] = option;
            zuuluu = 0;
            oscard[1] = zuuluu;
            oscard[2] = golfie;
            _fun00002_ip = 212; continue _fun00001;
 191:
            zuuluu = new Array(3);
            zuuluu[0] = golfie;
            verify = 0;
            zuuluu[1] = verify;
            zuuluu[2] = option;
            oscard = zuuluu;
 212:
            _fun00002_ip = 235; continue _fun00001;
 214:
            zuuluu = [0];
            zuuluu[1] = golfie;
            zuuluu[2] = option;
            oscard = zuuluu;
 235:
            _fun00002_ip = 258; continue _fun00001;
 237:
            zuuluu = [0];
            zuuluu[1] = option;
            zuuluu[2] = golfie;
            oscard = zuuluu;
 258:
            _fun00002_ip = 281; continue _fun00001;
 260:
            zuuluu = new Array(3);
            zuuluu[0] = golfie;
            zuuluu[1] = option;
            verify = 0;
            zuuluu[2] = verify;
            oscard = zuuluu;
 281:
            _fun00002_ip = 304; continue _fun00001;
 283:
            zuuluu = new Array(3);
            zuuluu[0] = option;
            zuuluu[1] = golfie;
            golfie = 0;
            zuuluu[2] = golfie;
            oscard = zuuluu;
 304:
            zuuluu = oscard.map;
            entity = function(argFoo) {
                entity = global;
                zuuluu = entity.Math;
                michal = zuuluu.round;
                tangon = _closure2_slot0;
                entity = argFoo;
                tangon = entity + tangon;
                entity = 255;
                entity = entity * tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = {};
            oscard = 0;
            oscard = zuuluu[oscard];
            entity['red'] = oscard;
            report = zuuluu[report];
            entity['green'] = report;
            zuuluu = zuuluu[tangon];
            entity['blue'] = zuuluu;
            entity['alpha'] = michal;
            return entity;
        }
    };
    var _closure1_slot5 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = oscard[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = oscard[report];
    report = golfie.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = oscard[report];
    report = golfie.bind(entity)(report);
    var _closure1_slot2 = report;
    report = /^#[0-9a-f]{3,8}$/i;
    var _closure1_slot3 = report;
    report = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
    var _closure1_slot4 = report;
    tangon = function() {
        report = function(argFoo, argBar, argBaz, argCor) { // Original name: Color
            zuuluu = this;
            tangon = _closure1_slot1;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argFoo;
            zuuluu['red'] = michal;
            michal = argBar;
            zuuluu['green'] = michal;
            michal = argBaz;
            zuuluu['blue'] = michal;
            michal = argCor;
            zuuluu['alpha'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot2;
        entity = {};
        michal = 'toHexString';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = this;
                michal = global;
                report = michal.Math;
                tangon = report.round;
                zuuluu = entity.red;
                report = tangon.bind(report)(zuuluu);
                zuuluu = report.toString;
                tangon = 16;
                oscard = zuuluu.bind(report)(tangon);
                golfie = michal.Math;
                report = golfie.round;
                zuuluu = entity.green;
                report = report.bind(golfie)(zuuluu);
                zuuluu = report.toString;
                golfie = zuuluu.bind(report)(tangon);
                report = michal.Math;
                zuuluu = report.round;
                michal = entity.blue;
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.toString;
                tangon = michal.bind(zuuluu)(tangon);
                michal = entity.red;
                report = 15.5;
                zuuluu = oscard;
                if(!(!(michal > report))) { _fun00004_ip = 137; continue _fun00003 }
 127:
                michal = '0';
                zuuluu = michal + oscard;
 137:
                michal = '#';
                zuuluu = michal + zuuluu;
                oscard = entity.green;
                michal = golfie;
                if(!(!(oscard > report))) { _fun00004_ip = 168; continue _fun00003 }
 158:
                oscard = '0';
                michal = oscard + golfie;
 168:
                michal = zuuluu + michal;
                zuuluu = entity.blue;
                entity = tangon;
                if(!(!(zuuluu > report))) { _fun00004_ip = 195; continue _fun00003 }
 185:
                zuuluu = '0';
                entity = zuuluu + tangon;
 195:
                entity = michal + entity;
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu = new Array(3);
        zuuluu[0] = entity;
        entity = {};
        michal = 'toHSL';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                entity = {};
                zuuluu = michal.red;
                entity['red'] = zuuluu;
                zuuluu = michal.green;
                entity['green'] = zuuluu;
                zuuluu = michal.blue;
                entity['blue'] = zuuluu;
                michal = michal.alpha;
                entity['alpha'] = michal;
                report = entity.red;
                tangon = entity.green;
                michal = entity.blue;
                zuuluu = entity.alpha;
                entity = 255;
                verify = report / entity;
                option = tangon / entity;
                entity = michal / entity;
                golfie = global;
                tangon = golfie.Math;
                michal = tangon.max;
                yankee = michal.bind(tangon)(verify, option, entity);
                tangon = golfie.Math;
                michal = tangon.min;
                tangon = michal.bind(tangon)(verify, option, entity);
                michal = yankee - tangon;
                tangon = yankee + tangon;
                offset = 2;
                tangon = tangon / offset;
                oscard = 0;
                report = 0;
                if(!(michal > oscard)) { _fun00006_ip = 185; continue _fun00005 }
 149:
                backup = golfie.Math;
                foxtra = backup.abs;
                golfie = offset * tangon;
                romeon = 1;
                golfie = golfie - romeon;
                golfie = foxtra.bind(backup)(golfie);
                golfie = romeon - golfie;
                report = michal / golfie;
 185:
                if(!(oscard !== michal)) { _fun00006_ip = 280; continue _fun00005 }
 189:
                if(!(verify !== yankee)) { _fun00006_ip = 234; continue _fun00005 }
 193:
                if(!(option !== yankee)) { _fun00006_ip = 220; continue _fun00005 }
 197:
                golfie = 0;
                if(!(entity === yankee)) { _fun00006_ip = 249; continue _fun00005 }
 203:
                yankee = option - entity;
                romeon = yankee / michal;
                yankee = 4;
                golfie = romeon + yankee;
                _fun00006_ip = 249; continue _fun00005;
 220:
                verify = entity - verify;
                verify = verify / michal;
                golfie = verify + offset;
                _fun00006_ip = 249; continue _fun00005;
 234:
                entity = option - entity;
                michal = entity / michal;
                entity = 6;
                golfie = michal % entity;
 249:
                entity = {};
                michal = 60;
                michal = michal * golfie;
                entity['hue'] = michal;
                entity['saturation'] = report;
                entity['lightness'] = tangon;
                entity['alpha'] = zuuluu;
                _fun00006_ip = 305; continue _fun00005;
 280:
                michal = {};
                michal['hue'] = oscard;
                michal['saturation'] = report;
                michal['lightness'] = tangon;
                michal['alpha'] = zuuluu;
                entity = michal;
 305:
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu[1] = entity;
        entity = {};
        michal = 'getRelativeLuminance';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = this;
                zuuluu = entity.red;
                michal = 255;
                tangon = zuuluu / michal;
                zuuluu = entity.green;
                oscard = zuuluu / michal;
                entity = entity.blue;
                report = entity / michal;
                michal = 0.03928;
                if(!(!(tangon <= michal))) { _fun00008_ip = 110; continue _fun00007 }
 50:
                entity = global;
                option = entity.Math;
                golfie = option.pow;
                entity = 0.055;
                zuuluu = tangon + entity;
                entity = 1.055;
                zuuluu = zuuluu / entity;
                entity = 2.4;
                zuuluu = golfie.bind(option)(zuuluu, entity);
                _fun00008_ip = 124; continue _fun00007;
 110:
                entity = 12.92;
                zuuluu = tangon / entity;
 124:
                entity = 0.2126;
                zuuluu = entity * zuuluu;
                if(!(!(oscard <= michal))) { _fun00008_ip = 202; continue _fun00007 }
 142:
                entity = global;
                option = entity.Math;
                golfie = option.pow;
                entity = 0.055;
                tangon = oscard + entity;
                entity = 1.055;
                tangon = tangon / entity;
                entity = 2.4;
                tangon = golfie.bind(option)(tangon, entity);
                _fun00008_ip = 216; continue _fun00007;
 202:
                entity = 12.92;
                tangon = oscard / entity;
 216:
                entity = 0.7152;
                entity = entity * tangon;
                if(!(!(report <= michal))) { _fun00008_ip = 294; continue _fun00007 }
 234:
                michal = global;
                golfie = michal.Math;
                oscard = golfie.pow;
                michal = 0.055;
                tangon = report + michal;
                michal = 1.055;
                tangon = tangon / michal;
                michal = 2.4;
                tangon = oscard.bind(golfie)(tangon, michal);
                _fun00008_ip = 308; continue _fun00007;
 294:
                michal = 12.92;
                tangon = report / michal;
 308:
                michal = 0.0722;
                michal = michal * tangon;
                entity = zuuluu + entity;
                entity = entity + michal;
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu[2] = entity;
        entity = {};
        michal = 'parseString';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                report = tangon.match;
                michal = _closure1_slot4;
                report = report.bind(tangon)(michal);
                michal = null;
                if(!(michal == report)) { _fun00010_ip = 69; continue _fun00009 }
 30:
                report = tangon.match;
                entity = _closure1_slot3;
                entity = report.bind(tangon)(entity);
                michal = michal != entity;
                entity = undefined;
                if(!michal) { _fun00010_ip = 67; continue _fun00009 }
 54:
                michal = zuuluu.parseHexString;
                entity = michal.bind(zuuluu)(tangon);
 67:
                _fun00010_ip = 80; continue _fun00009;
 69:
                michal = zuuluu.parseColorFnString;
                entity = michal.bind(zuuluu)(tangon);
 80:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        golfie = 'parseRgbString';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                entity = 'transparent';
                if(!(entity !== zuuluu)) { _fun00012_ip = 27; continue _fun00011 }
 14:
                entity = michal.parseColorFnString;
                entity = entity.bind(michal)(zuuluu);
                _fun00012_ip = 62; continue _fun00011;
 27:
                tangon = _closure2_slot0;
                michal = tangon.prototype;
                zuuluu = Object.create(michal, {constructor: {value: tangon}});
                verify = zuuluu;
                option = 0;
                golfie = 0;
                oscard = 0;
                report = 0;
                michal = new verify[tangon](option, golfie, oscard, report, tangon);
                entity = michal instanceof Object ? michal : zuuluu;
 62:
                return entity;
            }
        };
        entity['value'] = golfie;
        michal[1] = entity;
        entity = {};
        golfie = 'parseHexString';
        entity['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                zuuluu = report.match;
                michal = _closure1_slot3;
                michal = zuuluu.bind(report)(michal);
                romeon = null;
                if(!(romeon != michal)) { _fun00014_ip = 345; continue _fun00013 }
 30:
                tangon = [6, 8];
                zuuluu = tangon.includes;
                michal = report.length;
                michal = zuuluu.bind(tangon)(michal);
                if(michal) { _fun00014_ip = 345; continue _fun00013 }
 61:
                tangon = report.replace;
                zuuluu = '#';
                michal = '';
                report = tangon.bind(report)(zuuluu, michal);
                tangon = report.length;
                michal = 6;
                zuuluu = report;
                if(!(tangon < michal)) { _fun00014_ip = 172; continue _fun00013 }
 95:
                tangon = _closure1_slot0;
                michal = undefined;
                entity = 4;
                oscard = tangon.bind(michal)(report, entity);
                entity = 0;
                michal = oscard[entity];
                entity = 1;
                report = oscard[entity];
                entity = 2;
                tangon = oscard[entity];
                entity = 3;
                entity = oscard[entity];
                michal = michal + michal;
                michal = michal + report;
                michal = michal + report;
                michal = michal + tangon;
                michal = michal + tangon;
                zuuluu = michal;
                if(!(romeon != entity)) { _fun00014_ip = 172; continue _fun00013 }
 164:
                entity = entity + entity;
                zuuluu = michal + entity;
 172:
                michal = zuuluu.match;
                entity = /.{1,2}/g;
                offset = michal.bind(zuuluu)(entity);
                if(!(romeon != offset)) { _fun00014_ip = 345; continue _fun00013 }
 204:
                oscard = _closure2_slot0;
                golfie = global;
                michal = golfie.parseInt;
                entity = 0;
                entity = offset[entity];
                verify = undefined;
                option = 16;
                report = michal.bind(verify)(entity, option);
                michal = golfie.parseInt;
                tangon = 1;
                entity = offset[tangon];
                zuuluu = michal.bind(verify)(entity, option);
                michal = golfie.parseInt;
                entity = 2;
                entity = offset[entity];
                entity = michal.bind(verify)(entity, option);
                michal = 3;
                yankee = offset[michal];
                yankee = romeon != yankee;
                if(!yankee) { _fun00014_ip = 311; continue _fun00013 }
 288:
                golfie = golfie.parseInt;
                michal = offset[michal];
                golfie = golfie.bind(verify)(michal, option);
                michal = 255;
                tangon = golfie / michal;
 311:
                michal = oscard.prototype;
                michal = Object.create(michal, {constructor: {value: oscard}});
                output = michal;
                sizing = report;
                kiloes = zuuluu;
                backup = entity;
                foxtra = tangon;
                entity = new output[oscard](sizing, kiloes, backup, foxtra, romeon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
 345:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = golfie;
        michal[2] = entity;
        entity = {};
        golfie = 'parseColorFnString';
        entity['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = argFoo;
                tangon = report.match;
                zuuluu = _closure1_slot4;
                golfie = tangon.bind(report)(zuuluu);
                tangon = null;
                if(!(tangon == golfie)) { _fun00016_ip = 33; continue _fun00015 }
 29:
                golfie = new Array(0);
 33:
                oscard = _closure1_slot0;
                zuuluu = undefined;
                report = 3;
                option = oscard.bind(zuuluu)(golfie, report);
                golfie = 1;
                verify = option[golfie];
                var _closure3_slot0 = verify;
                oscard = 2;
                offset = option[oscard];
                if(!(tangon != verify)) { _fun00016_ip = 74; continue _fun00015 }
 70:
                if(!(tangon == offset)) { _fun00016_ip = 76; continue _fun00015 }
 74:
                return zuuluu;
 76:
                option = offset.split;
                tangon = /\s*[,\/\s]\s*/;
                offset = option.bind(offset)(tangon);
                option = offset.map;
                tangon = function(argFoo) {
                    tangon = argFoo;
                    zuuluu = tangon.replace;
                    michal = ',';
                    entity = '';
                    michal = zuuluu.bind(tangon)(michal, entity);
                    entity = michal.trim;
                    entity = entity.bind(michal)();
                    return entity;
                };
                offset = option.bind(offset)(tangon);
                option = offset.filter;
                tangon = function(argFoo) {
                    michal = '';
                    entity = argFoo;
                    entity = michal !== entity;
                    return entity;
                };
                option = option.bind(offset)(tangon);
                tangon = option.map;
                michal = function(argFoo, argBar) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        report = argFoo;
                        zuuluu = argBar;
                        entity = _closure3_slot0;
                        tangon = /%$/;
                        michal = tangon.test;
                        michal = michal.bind(tangon)(report);
                        if(michal) { _fun00018_ip = 184; continue _fun00017 }
 43:
                        michal = entity[zuuluu];
                        entity = 'h';
                        if(!(entity === michal)) { _fun00018_ip = 109; continue _fun00017 }
 55:
                        michal = /turn$/;
                        entity = michal.test;
                        entity = entity.bind(michal)(report);
                        if(entity) { _fun00018_ip = 157; continue _fun00017 }
 82:
                        michal = /rad$/;
                        entity = michal.test;
                        entity = entity.bind(michal)(report);
                        if(entity) { _fun00018_ip = 126; continue _fun00017 }
 109:
                        entity = global;
                        michal = entity.parseFloat;
                        entity = undefined;
                        entity = michal.bind(entity)(report);
                        _fun00018_ip = 247; continue _fun00017;
 126:
                        michal = global;
                        tangon = michal.parseFloat;
                        michal = undefined;
                        tangon = tangon.bind(michal)(report);
                        michal = 57.3;
                        entity = michal * tangon;
                        _fun00018_ip = 247; continue _fun00017;
 157:
                        michal = global;
                        tangon = michal.parseFloat;
                        michal = undefined;
                        tangon = tangon.bind(michal)(report);
                        michal = 360;
                        entity = michal * tangon;
                        _fun00018_ip = 247; continue _fun00017;
 184:
                        michal = 3;
                        if(!(michal !== zuuluu)) { _fun00018_ip = 222; continue _fun00017 }
 191:
                        michal = global;
                        zuuluu = michal.parseFloat;
                        michal = undefined;
                        zuuluu = zuuluu.bind(michal)(report);
                        michal = 255;
                        zuuluu = michal * zuuluu;
                        michal = 100;
                        michal = zuuluu / michal;
                        _fun00018_ip = 244; continue _fun00017;
 222:
                        zuuluu = global;
                        tangon = zuuluu.parseFloat;
                        zuuluu = undefined;
                        tangon = tangon.bind(zuuluu)(report);
                        zuuluu = 100;
                        michal = tangon / zuuluu;
 244:
                        entity = michal;
 247:
                        return entity;
                    }
                };
                tangon = tangon.bind(option)(michal);
                michal = verify.substr;
                option = 0;
                verify = michal.bind(verify)(option, report);
                michal = 'hsl';
                if(!(michal !== verify)) { _fun00016_ip = 242; continue _fun00015 }
 167:
                foxtra = _closure2_slot0;
                romeon = tangon[option];
                yankee = tangon[golfie];
                offset = tangon[oscard];
                michal = tangon[report];
                backup = 'number';
                verify = typeof michal;
                michal = golfie;
                if(!(backup === verify)) { _fun00016_ip = 208; continue _fun00015 }
 204:
                michal = tangon[report];
 208:
                verify = foxtra.prototype;
                verify = Object.create(verify, {constructor: {value: foxtra}});
                echoed = verify;
                result = romeon;
                output = yankee;
                sizing = offset;
                kiloes = michal;
                michal = new echoed[foxtra](result, output, sizing, kiloes, backup);
                michal = michal instanceof Object ? michal : verify;
                return michal;
 242:
                michal = _closure1_slot5;
                entity = {};
                option = tangon[option];
                entity['hue'] = option;
                golfie = tangon[golfie];
                entity['saturation'] = golfie;
                oscard = tangon[oscard];
                entity['lightness'] = oscard;
                tangon = tangon[report];
                entity['alpha'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                oscard = _closure2_slot0;
                result = entity.red;
                output = entity.green;
                sizing = entity.blue;
                kiloes = entity.alpha;
                michal = oscard.prototype;
                michal = Object.create(michal, {constructor: {value: oscard}});
                echoed = michal;
                entity = new echoed[oscard](result, output, sizing, kiloes, backup);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(report, zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = 3;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/Color.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['hslToRgb'] = michal;
    return entity;
})();