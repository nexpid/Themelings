// discord_common/js/shared/utils/ColorUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    golfie = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = golfie;
    entity = function(argFoo) { // Original name: pad2
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = tangon.length;
            michal = 1;
            entity = tangon;
            if(!(michal === zuuluu)) { _fun00002_ip = 42; continue _fun00001 }
 18:
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = '0';
            entity = zuuluu.bind(michal)(tangon);
 42:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    oscard = function(argFoo) { // Original name: int2hslRaw
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = 16;
            tangon = entity >> michal;
            michal = 8;
            zuuluu = entity >> michal;
            michal = 255;
            entity = michal & entity;
            tangon = tangon & michal;
            yankee = tangon / michal;
            zuuluu = zuuluu & michal;
            verify = zuuluu / michal;
            option = entity / michal;
            oscard = global;
            michal = oscard.Math;
            entity = michal.min;
            michal = entity.bind(michal)(yankee, verify, option);
            zuuluu = oscard.Math;
            entity = zuuluu.max;
            entity = entity.bind(zuuluu)(yankee, verify, option);
            report = entity - michal;
            tangon = 0;
            golfie = tangon === report;
            offset = 0;
            if(golfie) { _fun00004_ip = 157; continue _fun00003 }
 97:
            if(!(entity !== yankee)) { _fun00004_ip = 139; continue _fun00003 }
 101:
            if(!(entity !== verify)) { _fun00004_ip = 122; continue _fun00003 }
 105:
            zuuluu = yankee - verify;
            romeon = zuuluu / report;
            zuuluu = 4;
            zuuluu = romeon + zuuluu;
            _fun00004_ip = 137; continue _fun00003;
 122:
            yankee = option - yankee;
            romeon = yankee / report;
            yankee = 2;
            zuuluu = romeon + yankee;
 137:
            _fun00004_ip = 154; continue _fun00003;
 139:
            option = verify - option;
            verify = option / report;
            option = 6;
            zuuluu = verify % option;
 154:
            offset = zuuluu;
 157:
            verify = oscard.Math;
            option = verify.round;
            zuuluu = 60;
            zuuluu = zuuluu * offset;
            verify = option.bind(verify)(zuuluu);
            option = verify;
            if(!(option < tangon)) { _fun00004_ip = 197; continue _fun00003 }
 187:
            zuuluu = 360;
            option = verify + zuuluu;
 197:
            entity = entity + michal;
            michal = 2;
            zuuluu = entity / michal;
            entity = {};
            entity['h'] = option;
            tangon = 0;
            if(golfie) { _fun00004_ip = 255; continue _fun00003 }
 219:
            option = oscard.Math;
            golfie = option.abs;
            michal = michal * zuuluu;
            oscard = 1;
            michal = michal - oscard;
            michal = golfie.bind(option)(michal);
            michal = oscard - michal;
            tangon = report / michal;
 255:
            michal = 100;
            oscard = michal * tangon;
            report = oscard.toFixed;
            tangon = 1;
            report = report.bind(oscard)(tangon);
            report = report - 0;
            entity['s'] = report;
            zuuluu = michal * zuuluu;
            michal = zuuluu.toFixed;
            michal = michal.bind(zuuluu)(tangon);
            michal = michal - 0;
            entity['l'] = michal;
            return entity;
        }
    };
    var _closure1_slot4 = oscard;
    report = function(argFoo) { // Original name: int2rgbArray
        zuuluu = argFoo;
        entity = 16;
        tangon = zuuluu >> entity;
        entity = new Array(3);
        michal = 255;
        tangon = tangon & michal;
        entity[0] = tangon;
        tangon = 8;
        tangon = zuuluu >> tangon;
        tangon = tangon & michal;
        entity[1] = tangon;
        michal = michal & zuuluu;
        entity[2] = michal;
        return entity;
    };
    var _closure1_slot5 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getLuminance
        zuuluu = new Array(3);
        entity = argFoo;
        zuuluu[0] = entity;
        entity = argBar;
        zuuluu[1] = entity;
        entity = argBaz;
        zuuluu[2] = entity;
        michal = zuuluu.map;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                entity = 255;
                zuuluu = michal / entity;
                entity = 0.03928;
                if(!(!(zuuluu <= entity))) { _fun00006_ip = 84; continue _fun00005 }
 24:
                entity = global;
                report = entity.Math;
                tangon = report.pow;
                entity = 0.055;
                michal = zuuluu + entity;
                entity = 1.055;
                michal = michal / entity;
                entity = 2.4;
                entity = tangon.bind(report)(michal, entity);
                _fun00006_ip = 98; continue _fun00005;
 84:
                michal = 12.92;
                entity = zuuluu / michal;
 98:
                return entity;
            }
        };
        tangon = michal.bind(zuuluu)(entity);
        entity = 0;
        michal = tangon[entity];
        entity = 0.2126;
        zuuluu = entity * michal;
        entity = 1;
        michal = tangon[entity];
        entity = 0.7152;
        entity = entity * michal;
        michal = 2;
        tangon = tangon[michal];
        michal = 0.0722;
        michal = michal * tangon;
        entity = zuuluu + entity;
        entity = entity + michal;
        return entity;
    };
    var _closure1_slot6 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;
    var _closure1_slot2 = entity;
    entity = 1;
    option = golfie[entity];
    golfie = argBar;
    entity = undefined;
    verify = golfie.bind(entity)(option);
    option = verify.fileFinishedImporting;
    golfie = '../discord_common/js/shared/utils/ColorUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo) { // Original name: hex2int
        michal = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 0;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = argFoo;
        michal = michal.bind(zuuluu)(entity);
        entity = michal.num;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['hex2int'] = golfie;
    golfie = function(argFoo) { // Original name: int2hex
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            entity = 16777215;
            if(!(!(golfie <= entity))) { _fun00008_ip = 129; continue _fun00007 }
 13:
            zuuluu = _closure1_slot3;
            entity = 24;
            entity = golfie >> entity;
            oscard = 255;
            michal = entity & oscard;
            entity = michal.toString;
            option = 16;
            entity = entity.bind(michal)(option);
            michal = undefined;
            report = zuuluu.bind(michal)(entity);
            entity = golfie >> option;
            tangon = entity & oscard;
            entity = tangon.toString;
            entity = entity.bind(tangon)(option);
            tangon = zuuluu.bind(michal)(entity);
            entity = 8;
            entity = golfie >> entity;
            oscard = entity & oscard;
            entity = oscard.toString;
            entity = entity.bind(oscard)(option);
            zuuluu = zuuluu.bind(michal)(entity);
            entity = global;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = '#';
            entity = michal.bind(entity)(report, tangon, zuuluu);
            _fun00008_ip = 236; continue _fun00007;
 129:
            tangon = _closure1_slot3;
            option = 16;
            zuuluu = golfie >> option;
            michal = 255;
            report = zuuluu & michal;
            zuuluu = report.toString;
            report = zuuluu.bind(report)(option);
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(report);
            report = 8;
            report = golfie >> report;
            verify = report & michal;
            report = verify.toString;
            report = report.bind(verify)(option);
            report = tangon.bind(zuuluu)(report);
            golfie = michal & golfie;
            michal = golfie.toString;
            michal = michal.bind(golfie)(option);
            tangon = tangon.bind(zuuluu)(michal);
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = '#';
            entity = zuuluu.bind(michal)(oscard, report, tangon);
 236:
            return entity;
        }
    };
    zuuluu['int2hex'] = golfie;
    zuuluu['int2hslRaw'] = oscard;
    oscard = function(argFoo) { // Original name: int2hsl
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = arguments[1];
            michal = arguments[2];
            yankee = arguments[3];
            report = undefined;
            if(!(entity === report)) { _fun00010_ip = 17; continue _fun00009 }
 15:
            entity = false;
 17:
            if(!(michal === report)) { _fun00010_ip = 23; continue _fun00009 }
 21:
            michal = null;
 23:
            if(!(yankee === report)) { _fun00010_ip = 30; continue _fun00009 }
 27:
            yankee = 1;
 30:
            tangon = _closure1_slot4;
            zuuluu = argFoo;
            zuuluu = tangon.bind(report)(zuuluu);
            offset = zuuluu.h;
            verify = zuuluu.s;
            option = zuuluu.l;
            if(entity) { _fun00010_ip = 191; continue _fun00009 }
 66:
            entity = null;
            if(!(entity == michal)) { _fun00010_ip = 131; continue _fun00009 }
 72:
            entity = global;
            entity = entity.HermesInternal;
            oscard = entity.concat;
            update = 'hsla(';
            result = ', ';
            zuuluu = '%, ';
            romeon = ')';
            echoed = offset;
            output = verify;
            sizing = zuuluu;
            kiloes = option;
            backup = zuuluu;
            foxtra = yankee;
            entity = update[oscard](echoed, result, output, sizing, kiloes, backup, foxtra, romeon, yankee);
            _fun00010_ip = 189; continue _fun00009;
 131:
            output = michal * verify;
            michal = global;
            michal = michal.HermesInternal;
            oscard = michal.concat;
            update = 'hsla(';
            result = ', ';
            zuuluu = '%, ';
            romeon = ')';
            echoed = offset;
            sizing = zuuluu;
            kiloes = option;
            backup = zuuluu;
            foxtra = yankee;
            entity = update[oscard](echoed, result, output, sizing, kiloes, backup, foxtra, romeon, yankee);
 189:
            _fun00010_ip = 248; continue _fun00009;
 191:
            michal = global;
            michal = michal.HermesInternal;
            golfie = michal.concat;
            update = 'hsla(';
            result = ', calc(var(--saturation-factor, 1) * ';
            sizing = '%), ';
            backup = '%, ';
            romeon = ')';
            echoed = offset;
            output = verify;
            kiloes = option;
            foxtra = yankee;
            entity = update[golfie](echoed, result, output, sizing, kiloes, backup, foxtra, romeon, yankee);
 248:
            return entity;
        }
    };
    zuuluu['int2hsl'] = oscard;
    oscard = function(argFoo) { // Original name: hex2rgb
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            zuuluu = arguments[1];
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00012_ip = 14; continue _fun00011 }
 12:
            zuuluu = null;
 14:
            golfie = _closure1_slot0;
            report = _closure1_slot1;
            oscard = 0;
            report = report[oscard];
            golfie = golfie.bind(michal)(report);
            report = golfie.valid;
            report = report.bind(golfie)(tangon);
            if(report) { _fun00012_ip = 54; continue _fun00011 }
 50:
            report = null;
            return report;
 54:
            report = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscard];
            entity = report.bind(michal)(entity);
            michal = entity.bind(michal)(tangon);
            entity = michal.alpha;
            tangon = null;
            if(!(tangon == zuuluu)) { _fun00012_ip = 98; continue _fun00011 }
 88:
            tangon = michal.alpha;
            zuuluu = tangon.bind(michal)();
 98:
            michal = entity.bind(michal)(zuuluu);
            entity = michal.css;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    zuuluu['hex2rgb'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: int2rgba
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            option = argBar;
            entity = null;
            if(!(entity == option)) { _fun00014_ip = 30; continue _fun00013 }
 12:
            entity = 24;
            entity = tangon >> entity;
            michal = 255;
            entity = entity & michal;
            option = entity / michal;
 30:
            entity = 16;
            zuuluu = tangon >> entity;
            entity = 8;
            michal = tangon >> entity;
            entity = 255;
            romeon = entity & tangon;
            tangon = global;
            tangon = tangon.HermesInternal;
            oscard = tangon.concat;
            output = 'rgba(';
            sizing = zuuluu & entity;
            zuuluu = ', ';
            backup = michal & entity;
            verify = ')';
            kiloes = zuuluu;
            foxtra = zuuluu;
            yankee = zuuluu;
            offset = option;
            entity = output[oscard](sizing, kiloes, backup, foxtra, romeon, yankee, offset, verify, option);
            return entity;
        }
    };
    zuuluu['int2rgba'] = oscard;
    oscard = function(argFoo) { // Original name: rgb2int
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.match;
            entity = _closure1_slot2;
            oscard = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity == oscard)) { _fun00016_ip = 39; continue _fun00015 }
 27:
            michal = {'red': 0, 'green': 0, 'blue': 0};
            _fun00016_ip = 117; continue _fun00015;
 39:
            entity = {};
            zuuluu = global;
            golfie = zuuluu.parseInt;
            tangon = 1;
            tangon = oscard[tangon];
            report = undefined;
            tangon = golfie.bind(report)(tangon);
            entity['red'] = tangon;
            golfie = zuuluu.parseInt;
            tangon = 2;
            tangon = oscard[tangon];
            tangon = golfie.bind(report)(tangon);
            entity['green'] = tangon;
            tangon = zuuluu.parseInt;
            zuuluu = 3;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            entity['blue'] = zuuluu;
            michal = entity;
 117:
            zuuluu = michal.red;
            entity = 16;
            zuuluu = zuuluu << entity;
            tangon = michal.green;
            entity = 8;
            entity = tangon << entity;
            michal = michal.blue;
            entity = zuuluu + entity;
            entity = entity + michal;
            return entity;
        }
    };
    zuuluu['rgb2int'] = oscard;
    oscard = function(argFoo) { // Original name: int2hsv
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            entity = 16;
            entity = michal >> entity;
            zuuluu = 255;
            entity = entity & zuuluu;
            entity = entity / zuuluu;
            tangon = 8;
            tangon = michal >> tangon;
            tangon = tangon & zuuluu;
            option = tangon / zuuluu;
            michal = zuuluu & michal;
            golfie = michal / zuuluu;
            zuuluu = global;
            tangon = zuuluu.Math;
            michal = tangon.max;
            michal = michal.bind(tangon)(entity, option, golfie);
            tangon = zuuluu.Math;
            zuuluu = tangon.min;
            report = zuuluu.bind(tangon)(entity, option, golfie);
            verify = michal - report;
            oscard = 0;
            zuuluu = 0;
            if(!(oscard !== michal)) { _fun00018_ip = 98; continue _fun00017 }
 94:
            zuuluu = verify / michal;
 98:
            tangon = 0;
            if(!(michal !== report)) { _fun00018_ip = 181; continue _fun00017 }
 104:
            if(!(entity !== michal)) { _fun00018_ip = 153; continue _fun00017 }
 108:
            if(!(option !== michal)) { _fun00018_ip = 136; continue _fun00017 }
 112:
            report = michal;
            if(!(golfie === report)) { _fun00018_ip = 174; continue _fun00017 }
 119:
            offset = entity - option;
            yankee = offset / verify;
            offset = 4;
            report = yankee + offset;
            _fun00018_ip = 174; continue _fun00017;
 136:
            entity = golfie - entity;
            offset = entity / verify;
            entity = 2;
            report = offset + entity;
            _fun00018_ip = 174; continue _fun00017;
 153:
            entity = option - golfie;
            entity = entity / verify;
            oscard = 0;
            if(!(option < golfie)) { _fun00018_ip = 170; continue _fun00017 }
 167:
            oscard = 6;
 170:
            report = entity + oscard;
 174:
            entity = 60;
            tangon = report * entity;
 181:
            entity = {};
            entity['h'] = tangon;
            entity['s'] = zuuluu;
            entity['v'] = michal;
            return entity;
        }
    };
    zuuluu['int2hsv'] = oscard;
    oscard = function(argFoo) { // Original name: getDarkness
        michal = argFoo;
        entity = 16;
        tangon = michal >> entity;
        entity = 8;
        entity = michal >> entity;
        zuuluu = 255;
        report = zuuluu & michal;
        michal = 1;
        oscard = 0.299;
        tangon = tangon & zuuluu;
        tangon = oscard * tangon;
        oscard = 0.587;
        entity = entity & zuuluu;
        entity = oscard * entity;
        tangon = tangon + entity;
        entity = 0.114;
        entity = entity * report;
        entity = tangon + entity;
        entity = entity / zuuluu;
        entity = michal - entity;
        return entity;
    };
    zuuluu['getDarkness'] = oscard;
    oscard = function(argFoo) { // Original name: isValidHex
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.valid;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isValidHex'] = oscard;
    zuuluu['int2rgbArray'] = report;
    zuuluu['getLuminance'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getContrast
        zuuluu = _closure1_slot5;
        report = undefined;
        michal = argFoo;
        oscard = zuuluu.bind(report)(michal);
        michal = argBar;
        golfie = zuuluu.bind(report)(michal);
        tangon = _closure1_slot6;
        zuuluu = 0;
        verify = oscard[zuuluu];
        michal = 1;
        option = oscard[michal];
        entity = 2;
        oscard = oscard[entity];
        oscard = tangon.bind(report)(verify, option, oscard);
        zuuluu = golfie[zuuluu];
        michal = golfie[michal];
        entity = golfie[entity];
        report = tangon.bind(report)(zuuluu, michal, entity);
        entity = global;
        zuuluu = entity.Math;
        michal = zuuluu.max;
        michal = michal.bind(zuuluu)(oscard, report);
        zuuluu = 0.05;
        michal = michal + zuuluu;
        tangon = entity.Math;
        entity = tangon.min;
        entity = entity.bind(tangon)(oscard, report);
        entity = entity + zuuluu;
        entity = michal / entity;
        return entity;
    };
    zuuluu['getContrast'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: hsv2int
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            verify = argBar;
            golfie = argBaz;
            michal = argFoo;
            entity = 360;
            entity = michal / entity;
            tangon = global;
            zuuluu = tangon.Math;
            michal = zuuluu.floor;
            oscard = 6;
            entity = oscard * entity;
            zuuluu = michal.bind(zuuluu)(entity);
            report = entity - zuuluu;
            entity = 1;
            michal = entity - verify;
            michal = golfie * michal;
            option = report * verify;
            option = entity - option;
            option = golfie * option;
            report = entity - report;
            report = report * verify;
            report = entity - report;
            report = golfie * report;
            offset = zuuluu % oscard;
            oscard = 0;
            if(!(oscard !== offset)) { _fun00020_ip = 191; continue _fun00019 }
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
            zuuluu = 0;
            entity = 0;
            oscard = 0;
            if(!(verify === offset)) { _fun00020_ip = 200; continue _fun00019 }
 136:
            zuuluu = golfie;
            entity = michal;
            oscard = option;
            _fun00020_ip = 200; continue _fun00019;
 147:
            zuuluu = report;
            entity = michal;
            oscard = golfie;
            _fun00020_ip = 200; continue _fun00019;
 158:
            zuuluu = michal;
            entity = option;
            oscard = golfie;
            _fun00020_ip = 200; continue _fun00019;
 169:
            zuuluu = michal;
            entity = golfie;
            oscard = report;
            _fun00020_ip = 200; continue _fun00019;
 180:
            zuuluu = option;
            entity = golfie;
            oscard = michal;
            _fun00020_ip = 200; continue _fun00019;
 191:
            zuuluu = golfie;
            entity = report;
            oscard = michal;
 200:
            golfie = tangon.Math;
            report = golfie.round;
            michal = 255;
            zuuluu = michal * zuuluu;
            report = report.bind(golfie)(zuuluu);
            zuuluu = 16;
            zuuluu = report << zuuluu;
            golfie = tangon.Math;
            report = golfie.round;
            entity = michal * entity;
            report = report.bind(golfie)(entity);
            entity = 8;
            entity = report << entity;
            report = tangon.Math;
            tangon = report.round;
            michal = michal * oscard;
            michal = tangon.bind(report)(michal);
            entity = zuuluu + entity;
            entity = entity + michal;
            return entity;
        }
    };
    zuuluu['hsv2int'] = michal;
    return entity;
})();