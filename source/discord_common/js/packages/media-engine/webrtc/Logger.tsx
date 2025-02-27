// discord_common/js/packages/media-engine/webrtc/Logger.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot4;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot4;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo, argBar) { // Original name: report
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            output = 1;
            zuuluu = copyRestArgs(output);
            michal = _closure1_slot2;
            tangon = michal.length;
            michal = 5000;
            if(!(!(tangon > michal))) { _fun00008_ip = 255; continue _fun00007 }
 32:
            michal = _closure1_slot3;
            foxtra = undefined;
            romeon = michal.bind(foxtra)(zuuluu);
            zuuluu = romeon.bind(foxtra)();
            michal = zuuluu.done;
            tangon = '';
            yankee = ' ';
            offset = '\n';
            report = global;
            verify = 'boolean';
            option = 'number';
            golfie = 'string';
            oscard = zuuluu;
            zuuluu = tangon;
            tangon = zuuluu;
            if(michal) { _fun00008_ip = 208; continue _fun00007 }
 90:
            michal = oscard.value;
            backup = typeof michal;
            if(!(golfie !== backup)) { _fun00008_ip = 179; continue _fun00007 }
 102:
            if(!(option !== backup)) { _fun00008_ip = 179; continue _fun00007 }
 106:
            if(!(verify !== backup)) { _fun00008_ip = 179; continue _fun00007 }
 110:
            backup = report.Error;
            backup = michal instanceof backup;
            if(backup) { _fun00008_ip = 150; continue _fun00007 }
 123:
            kiloes = report.JSON;
            backup = kiloes.stringify;
            backup = backup.bind(kiloes)(michal);
            backup = backup + yankee;
            backup = zuuluu + backup;
            _fun00008_ip = 187; continue _fun00007;
 150:
            kiloes = michal.message;
            sizing = kiloes + offset;
            kiloes = michal.stack;
            kiloes = sizing + kiloes;
            kiloes = kiloes + yankee;
            backup = zuuluu + kiloes;
            _fun00008_ip = 187; continue _fun00007;
 179:
            michal = michal + yankee;
            backup = zuuluu + michal;
 187:
            kiloes = romeon.bind(foxtra)();
            michal = kiloes.done;
            zuuluu = backup;
            oscard = kiloes;
            tangon = zuuluu;
            if(!michal) { _fun00008_ip = 90; continue _fun00007 }
 208:
            zuuluu = _closure1_slot2;
            michal = zuuluu.push;
            entity = {};
            oscard = report.Date;
            report = oscard.now;
            report = report.bind(oscard)();
            entity['time'] = report;
            report = argFoo;
            entity['category'] = report;
            entity['message'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 255:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = new Array(0);
    var _closure1_slot2 = tangon;
    tangon = function() {
        tangon = _closure1_slot1;
        zuuluu = function() { // Original name: Logger
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = arguments[0];
                tangon = this;
                var _closure3_slot0 = tangon;
                entity = undefined;
                if(!(zuuluu === entity)) { _fun00010_ip = 22; continue _fun00009 }
 18:
                zuuluu = 'default';
 22:
                golfie = _closure1_slot0;
                oscard = _closure2_slot0;
                oscard = golfie.bind(entity)(tangon, oscard);
                oscard = function(argFoo, argBar) {
                    michal = 1;
                    entity = copyRestArgs(michal);
                    entity = undefined;
                    return entity;
                };
                tangon['verbose'] = oscard;
                oscard = function(argFoo, argBar) {
                    golfie = 1;
                    oscard = copyRestArgs(golfie);
                    zuuluu = _closure1_slot5;
                    entity = _closure3_slot0;
                    entity = entity.name;
                    michal = new Array(2);
                    michal[0] = entity;
                    entity = argFoo;
                    michal[1] = entity;
                    report = 2;
                    golfie = michal;
                    entity = arraySpread(golfie, oscard, report);
                    entity = undefined;
                    golfie = zuuluu;
                    oscard = michal;
                    report = undefined;
                    michal = apply(golfie, oscard, report);
                    return entity;
                };
                tangon['info'] = oscard;
                oscard = function(argFoo, argBar) {
                    golfie = 1;
                    oscard = copyRestArgs(golfie);
                    zuuluu = _closure1_slot5;
                    entity = _closure3_slot0;
                    entity = entity.name;
                    michal = new Array(2);
                    michal[0] = entity;
                    entity = argFoo;
                    michal[1] = entity;
                    report = 2;
                    golfie = michal;
                    entity = arraySpread(golfie, oscard, report);
                    entity = undefined;
                    golfie = zuuluu;
                    oscard = michal;
                    report = undefined;
                    michal = apply(golfie, oscard, report);
                    return entity;
                };
                tangon['warn'] = oscard;
                oscard = function(argFoo, argBar) {
                    golfie = 1;
                    oscard = copyRestArgs(golfie);
                    zuuluu = _closure1_slot5;
                    entity = _closure3_slot0;
                    entity = entity.name;
                    michal = new Array(2);
                    michal[0] = entity;
                    entity = argFoo;
                    michal[1] = entity;
                    report = 2;
                    golfie = michal;
                    entity = arraySpread(golfie, oscard, report);
                    entity = undefined;
                    golfie = zuuluu;
                    oscard = michal;
                    report = undefined;
                    michal = apply(golfie, oscard, report);
                    return entity;
                };
                tangon['error'] = oscard;
                oscard = function(argFoo, argBar) {
                    michal = 1;
                    entity = copyRestArgs(michal);
                    entity = undefined;
                    return entity;
                };
                tangon['logDangerously'] = oscard;
                oscard = function(argFoo, argBar) {
                    michal = 1;
                    entity = copyRestArgs(michal);
                    entity = undefined;
                    return entity;
                };
                tangon['log'] = oscard;
                oscard = function(argFoo, argBar) {
                    michal = 1;
                    entity = copyRestArgs(michal);
                    entity = undefined;
                    return entity;
                };
                tangon['verboseDangerously'] = oscard;
                oscard = function(argFoo, argBar) {
                    michal = 1;
                    entity = copyRestArgs(michal);
                    entity = undefined;
                    return entity;
                };
                tangon['trace'] = oscard;
                oscard = function(argFoo, argBar) {
                    michal = argBar;
                    entity = undefined;
                    entity = michal.bind(entity)();
                    return entity;
                };
                tangon['time'] = oscard;
                report = function(argFoo, argBar) {
                    michal = 1;
                    entity = copyRestArgs(michal);
                    entity = undefined;
                    return entity;
                };
                tangon['fileOnly'] = report;
                tangon['name'] = zuuluu;
                zuuluu = false;
                tangon['nativeLoggerEnabled'] = zuuluu;
                zuuluu = _closure1_slot2;
                michal = 0;
                zuuluu['length'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        report = 'enableNativeLogger';
        entity['key'] = report;
        michal = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = 2;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = '../discord_common/js/packages/media-engine/webrtc/Logger.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['Logger'] = tangon;
    michal = function() { // Original name: getLogs
        entity = _closure1_slot2;
        return entity;
    };
    zuuluu['getLogs'] = michal;
    return entity;
})();