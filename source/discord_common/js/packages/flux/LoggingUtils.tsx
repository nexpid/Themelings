// discord_common/js/packages/flux/LoggingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    entity = argFoo;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = golfie;
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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot12;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot12;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot14;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00008_ip = 48; continue _fun00007 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00008_ip = 86; continue _fun00007;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    tangon = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(verify)(zuuluu, entity, michal);
    michal = 0;
    tangon = golfie[michal];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.Logger;
    tangon = verify.prototype;
    option = Object.create(tangon, {constructor: {value: verify}});
    romeon = 'Flux';
    foxtra = option;
    tangon = new foxtra[verify](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.EventEmitter;
    tangon = function(argFoo) {
        tangon = function() { // Original name: ActionLogger
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = arguments[0];
                report = this;
                tangon = undefined;
                if(!(entity === tangon)) { _fun00012_ip = 14; continue _fun00011 }
 12:
                entity = {};
 14:
                michal = entity.persist;
                if(!(michal === tangon)) { _fun00012_ip = 26; continue _fun00011 }
 24:
                michal = false;
 26:
                oscard = _closure1_slot3;
                zuuluu = _closure2_slot0;
                oscard = oscard.bind(tangon)(report, zuuluu);
                entity = _closure1_slot13;
                entity = entity.bind(tangon)(report, zuuluu);
                zuuluu = new Array(0);
                entity['logs'] = zuuluu;
                entity['persist'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'log';
        report['key'] = entity;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                offset = argFoo;
                report = this;
                var _closure3_slot0 = report;
                michal = offset;
                var _closure3_slot1 = offset;
                oscard = argBar;
                option = undefined;
                zuuluu = undefined;
                golfie = _closure1_slot10;
                verify = golfie.prototype;
                verify = Object.create(verify, {constructor: {value: golfie}});
                backup = verify;
                foxtra = offset;
                golfie = new backup[golfie](foxtra, romeon);
                offset = golfie instanceof Object ? golfie : verify;
                zuuluu = offset;
                var _closure3_slot2 = offset;
                yankee = _closure1_slot1;
                golfie = _closure1_slot2;
                verify = 6;
                golfie = golfie[verify];
                golfie = yankee.bind(option)(golfie);
                yankee = golfie.performance;
                golfie = yankee.now;
                golfie = golfie.bind(yankee)();
                offset['startTime'] = golfie;
 104: // try_start_0 // try_start_1
                entity = function(argFoo, argBar) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        golfie = argFoo;
                        zuuluu = golfie;
                        report = argBar;
                        option = undefined;
                        entity = undefined;
                        michal = undefined;
                        tangon = undefined;
                        oscard = {};
                        oscard['name'] = golfie;
                        golfie = -1;
                        oscard['time'] = golfie;
                        michal = oscard;
                        offset = _closure1_slot1;
                        golfie = _closure1_slot2;
                        verify = 6;
                        golfie = golfie[verify];
                        golfie = offset.bind(option)(golfie);
                        offset = golfie.performance;
                        golfie = offset.now;
                        tangon = golfie.bind(offset)();
 75: // try_start_0
                        entity = report.bind(option)();
 79: // try_end0
                        golfie = michal;
                        offset = _closure1_slot1;
                        report = _closure1_slot2;
                        report = report[verify];
                        report = offset.bind(option)(report);
                        offset = report.performance;
                        report = offset.now;
                        offset = report.bind(offset)();
                        report = tangon;
                        report = offset - report;
                        golfie['time'] = report;
                        golfie = _closure3_slot0;
                        golfie = golfie.persist;
                        if(!golfie) { _fun00016_ip = 166; continue _fun00015 }
 143:
                        golfie = _closure3_slot2;
                        yankee = golfie.traces;
                        offset = yankee.push;
                        golfie = michal;
                        golfie = offset.bind(yankee)(golfie);
 166:
                        foxtra = _closure3_slot0;
                        romeon = foxtra.emit;
                        report = _closure3_slot1;
                        sizing = report.type;
                        kiloes = zuuluu;
                        report = michal;
                        backup = report.time;
                        output = 'trace';
                        result = foxtra;
                        report = result[romeon](output, sizing, kiloes, backup, foxtra);
                        return entity;
 210: // catch_target0
                        CatchBlockStart(arg_register=0);
                        report = michal;
                        golfie = _closure1_slot1;
                        oscard = _closure1_slot2;
                        oscard = oscard[verify];
                        oscard = golfie.bind(option)(oscard);
                        golfie = oscard.performance;
                        oscard = golfie.now;
                        oscard = oscard.bind(golfie)();
                        tangon = oscard - tangon;
                        report['time'] = tangon;
                        report = _closure3_slot0;
                        report = report.persist;
                        if(!report) { _fun00016_ip = 296; continue _fun00015 }
 273:
                        report = _closure3_slot2;
                        golfie = report.traces;
                        oscard = golfie.push;
                        report = michal;
                        report = oscard.bind(golfie)(report);
 296:
                        golfie = _closure3_slot0;
                        oscard = golfie.emit;
                        tangon = _closure3_slot1;
                        sizing = tangon.type;
                        kiloes = zuuluu;
                        backup = michal.time;
                        output = 'trace';
                        result = golfie;
                        michal = result[oscard](output, sizing, kiloes, backup, foxtra);
                        throw entity;
                    }
                };
                entity = oscard.bind(option)(entity);
 114: // try_end0 // try_end1
                oscard = zuuluu;
                golfie = _closure1_slot1;
                entity = _closure1_slot2;
                entity = entity[verify];
                entity = golfie.bind(option)(entity);
                golfie = entity.performance;
                entity = golfie.now;
                golfie = entity.bind(golfie)();
                entity = oscard.startTime;
                entity = golfie - entity;
                oscard['totalTime'] = entity;
                oscard = report.persist;
                entity = oscard;
                if(!oscard) { _fun00014_ip = 192; continue _fun00013 }
 177:
                oscard = zuuluu;
                golfie = oscard.totalTime;
                oscard = 0;
                entity = golfie > oscard;
 192:
                if(!entity) { _fun00014_ip = 214; continue _fun00013 }
 195:
                golfie = report.logs;
                oscard = golfie.push;
                entity = zuuluu;
                entity = oscard.bind(golfie)(entity);
 214:
                entity = report.logs;
                oscard = entity.length;
                entity = 1000;
                if(!(oscard > entity)) { _fun00014_ip = 251; continue _fun00013 }
 235:
                oscard = report.logs;
                entity = oscard.shift;
                entity = entity.bind(oscard)();
 251:
                golfie = report.emit;
                oscard = michal;
                entity = 'log';
                entity = golfie.bind(report)(entity, oscard);
                entity = zuuluu;
                return entity;
 275: // try_start_2 // catch_target0
                CatchBlockStart(arg_register=0);
                oscard = zuuluu;
                oscard['error'] = entity;
                throw entity;
 288: // try_end2 // catch_target1 // catch_target2
                CatchBlockStart(arg_register=0);
                oscard = zuuluu;
                golfie = _closure1_slot1;
                tangon = _closure1_slot2;
                tangon = tangon[verify];
                tangon = golfie.bind(option)(tangon);
                golfie = tangon.performance;
                tangon = golfie.now;
                golfie = tangon.bind(golfie)();
                tangon = oscard.startTime;
                tangon = golfie - tangon;
                oscard['totalTime'] = tangon;
                oscard = report.persist;
                tangon = oscard;
                if(!oscard) { _fun00014_ip = 368; continue _fun00013 }
 353:
                oscard = zuuluu;
                golfie = oscard.totalTime;
                oscard = 0;
                tangon = golfie > oscard;
 368:
                if(!tangon) { _fun00014_ip = 387; continue _fun00013 }
 371:
                oscard = report.logs;
                tangon = oscard.push;
                zuuluu = tangon.bind(oscard)(zuuluu);
 387:
                zuuluu = report.logs;
                tangon = zuuluu.length;
                zuuluu = 1000;
                if(!(tangon > zuuluu)) { _fun00014_ip = 424; continue _fun00013 }
 408:
                tangon = report.logs;
                zuuluu = tangon.shift;
                zuuluu = zuuluu.bind(tangon)();
 424:
                tangon = report.emit;
                zuuluu = michal;
                michal = 'log';
                michal = tangon.bind(report)(michal, zuuluu);
                throw entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'getSlowestActions';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                foxtra = argFoo;
                tangon = arguments[1];
                var _closure3_slot0 = foxtra;
                verify = undefined;
                if(!(tangon === verify)) { _fun00018_ip = 21; continue _fun00017 }
 18:
                tangon = 20;
 21:
                var _closure3_slot1 = verify;
                var _closure3_slot2 = verify;
                entity = new Array(0);
                oscard = _closure1_slot11;
                michal = this;
                michal = michal.logs;
                yankee = oscard.bind(verify)(michal);
                golfie = yankee.bind(verify)();
                oscard = golfie.done;
                michal = null;
                offset = golfie;
                option = undefined;
                golfie = undefined;
                if(oscard) { _fun00018_ip = 218; continue _fun00017 }
 78:
                kiloes = offset.value;
                if(!(michal != foxtra)) { _fun00018_ip = 96; continue _fun00017 }
 87:
                oscard = kiloes.name;
                if(!(oscard === foxtra)) { _fun00018_ip = 200; continue _fun00017 }
 96:
                romeon = _closure1_slot11;
                oscard = kiloes.traces;
                backup = romeon.bind(verify)(oscard);
                sizing = backup.bind(verify)();
                oscard = sizing.done;
                romeon = sizing;
                option = romeon;
                golfie = backup;
                if(oscard) { _fun00018_ip = 200; continue _fun00017 }
 132:
                output = romeon.value;
                sizing = entity.push;
                result = output.name;
                oscard = new Array(3);
                oscard[0] = result;
                result = kiloes.name;
                oscard[1] = result;
                output = output.time;
                oscard[2] = output;
                oscard = sizing.bind(entity)(oscard);
                sizing = backup.bind(verify)();
                oscard = sizing.done;
                romeon = sizing;
                option = romeon;
                golfie = backup;
                if(!oscard) { _fun00018_ip = 132; continue _fun00017 }
 200:
                romeon = yankee.bind(verify)();
                oscard = romeon.done;
                offset = romeon;
                if(!oscard) { _fun00018_ip = 78; continue _fun00017 }
 218:
                golfie = entity.sort;
                oscard = function(argFoo, argBar) {
                    entity = argBar;
                    zuuluu = 2;
                    michal = entity[zuuluu];
                    entity = argFoo;
                    entity = entity[zuuluu];
                    entity = michal - entity;
                    return entity;
                };
                oscard = golfie.bind(entity)(oscard);
                oscard = entity.length;
                if(!(oscard > tangon)) { _fun00018_ip = 249; continue _fun00017 }
 243:
                entity['length'] = tangon;
 249:
                oscard = 0;
                _closure3_slot1 = oscard;
                _closure3_slot2 = oscard;
                golfie = entity.map;
                tangon = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        tangon = argFoo;
                        entity = tangon[Symbol.iterator];
                        tangon = entity().next;
                        michal = tangon().value;
                        zuuluu = entity;
                        golfie = undefined;
                        zuuluu = zuuluu === golfie;
                        report = undefined;
                        if(zuuluu) { _fun00020_ip = 27; continue _fun00019 }
 24:
                        report = michal;
 27:
                        verify = undefined;
                        if(zuuluu) { _fun00020_ip = 57; continue _fun00019 }
 32:
                        oscard = tangon().value;
                        michal = entity;
                        michal = michal === golfie;
                        verify = undefined;
                        zuuluu = michal;
                        if(michal) { _fun00020_ip = 57; continue _fun00019 }
 51:
                        verify = oscard;
                        zuuluu = michal;
 57:
                        michal = undefined;
                        if(zuuluu) { _fun00020_ip = 87; continue _fun00019 }
 62:
                        oscard = tangon().value;
                        tangon = entity;
                        tangon = tangon === golfie;
                        michal = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00020_ip = 87; continue _fun00019 }
 81:
                        michal = oscard;
                        zuuluu = tangon;
 87:
                        if(zuuluu) { _fun00020_ip = 93; continue _fun00019 }
 90:
                        entity.return();
 93:
                        entity = global;
                        zuuluu = entity.HermesInternal;
                        tangon = zuuluu.concat;
                        zuuluu = '';
                        oscard = tangon.bind(zuuluu)(report);
                        golfie = _closure3_slot0;
                        report = null;
                        zuuluu = oscard;
                        if(!(report == golfie)) { _fun00020_ip = 160; continue _fun00019 }
 131:
                        report = entity.HermesInternal;
                        option = report.concat;
                        golfie = '<';
                        report = '>';
                        report = option.bind(golfie)(verify, report);
                        zuuluu = oscard + report;
 160:
                        golfie = entity.Math;
                        oscard = golfie.max;
                        report = zuuluu.length;
                        entity = _closure3_slot1;
                        entity = oscard.bind(golfie)(report, entity);
                        _closure3_slot1 = entity;
                        entity = new Array(2);
                        entity[0] = zuuluu;
                        entity[1] = michal;
                        return entity;
                    }
                };
                option = golfie.bind(entity)(tangon);
                golfie = option.map;
                tangon = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        zuuluu = argFoo;
                        entity = zuuluu[Symbol.iterator];
                        zuuluu = entity().next;
                        report = zuuluu().value;
                        michal = entity;
                        golfie = undefined;
                        michal = michal === golfie;
                        tangon = undefined;
                        if(michal) { _fun00022_ip = 27; continue _fun00021 }
 24:
                        tangon = report;
 27:
                        oscard = undefined;
                        if(michal) { _fun00022_ip = 57; continue _fun00021 }
 32:
                        report = zuuluu().value;
                        zuuluu = entity;
                        zuuluu = zuuluu === golfie;
                        oscard = undefined;
                        michal = zuuluu;
                        if(zuuluu) { _fun00022_ip = 57; continue _fun00021 }
 51:
                        oscard = report;
                        michal = zuuluu;
 57:
                        if(michal) { _fun00022_ip = 63; continue _fun00021 }
 60:
                        entity.return();
 63:
                        michal = _closure3_slot2;
                        michal = michal + oscard;
                        _closure3_slot2 = michal;
                        zuuluu = tangon.padEnd;
                        michal = _closure3_slot1;
                        entity = 1;
                        michal = michal + entity;
                        entity = ' ';
                        yankee = zuuluu.bind(tangon)(michal, entity);
                        entity = global;
                        entity = entity.HermesInternal;
                        tangon = entity.concat;
                        romeon = '';
                        offset = ' - ';
                        option = 'ms';
                        verify = oscard;
                        entity = romeon[tangon](yankee, offset, verify, option, golfie);
                        return entity;
                    }
                };
                golfie = golfie.bind(option)(tangon);
                tangon = golfie.join;
                yankee = '\n';
                offset = tangon.bind(golfie)(yankee);
                tangon = entity.length;
                tangon = oscard === tangon;
                if(tangon) { _fun00018_ip = 333; continue _fun00017 }
 315:
                golfie = entity[oscard];
                oscard = 2;
                golfie = golfie[oscard];
                oscard = 10;
                tangon = golfie < oscard;
 333:
                if(tangon) { _fun00018_ip = 347; continue _fun00017 }
 336:
                golfie = _closure3_slot2;
                oscard = 20;
                tangon = golfie < oscard;
 347:
                if(tangon) { _fun00018_ip = 538; continue _fun00017 }
 353:
                option = _closure1_slot8;
                golfie = option.log;
                oscard = _closure1_slot0;
                romeon = michal == oscard;
                tangon = undefined;
                if(romeon) { _fun00018_ip = 381; continue _fun00017 }
 376:
                tangon = oscard.HermesInternal;
 381:
                oscard = 'Using Hermes:';
                tangon = verify === tangon;
                tangon = !tangon;
                tangon = golfie.bind(option)(oscard, tangon);
                golfie = _closure1_slot8;
                oscard = golfie.log;
                michal = michal != foxtra;
                verify = '';
                option = verify;
                if(!michal) { _fun00018_ip = 455; continue _fun00017 }
 424:
                michal = global;
                michal = michal.HermesInternal;
                romeon = michal.concat;
                tangon = '\n\n=== ';
                michal = ' ===';
                option = romeon.bind(tangon)(foxtra, michal);
 455:
                michal = global;
                tangon = michal.HermesInternal;
                tangon = tangon.concat;
                vacuum = verify;
                ctrled = option;
                source = yankee;
                update = offset;
                echoed = yankee;
                tangon = vacuum[tangon](ctrled, source, update, echoed, result);
                tangon = oscard.bind(golfie)(tangon);
                tangon = _closure1_slot8;
                zuuluu = tangon.log;
                golfie = _closure3_slot2;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                report = 'Total Time: ';
                michal = 'ms';
                michal = oscard.bind(report)(golfie, michal);
                michal = zuuluu.bind(tangon)(michal);
 538:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getLastActionMetrics';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                tangon = arguments[1];
                verify = undefined;
                if(!(tangon === verify)) { _fun00024_ip = 14; continue _fun00023 }
 11:
                tangon = 20;
 14:
                var _closure3_slot0 = verify;
                var _closure3_slot1 = verify;
                oscard = {};
                michal = _closure1_slot11;
                entity = this;
                entity = entity.logs;
                report = michal.bind(verify)(entity);
                michal = report.bind(verify)();
                entity = michal.done;
                if(entity) { _fun00024_ip = 165; continue _fun00023 }
 57:
                yankee = michal.value;
                option = _closure1_slot11;
                entity = yankee.traces;
                offset = option.bind(verify)(entity);
                option = offset.bind(verify)();
                entity = option.done;
                if(entity) { _fun00024_ip = 150; continue _fun00023 }
 89:
                foxtra = option.value;
                romeon = foxtra.name;
                backup = foxtra.name;
                entity = new Array(3);
                entity[0] = backup;
                backup = yankee.name;
                entity[1] = backup;
                foxtra = foxtra.time;
                entity[2] = foxtra;
                oscard[romeon] = entity;
                romeon = offset.bind(verify)();
                entity = romeon.done;
                option = romeon;
                if(!entity) { _fun00024_ip = 89; continue _fun00023 }
 150:
                option = report.bind(verify)();
                entity = option.done;
                michal = option;
                if(!entity) { _fun00024_ip = 57; continue _fun00023 }
 165:
                michal = global;
                report = michal.Object;
                entity = report.values;
                entity = entity.bind(report)(oscard);
                oscard = entity.sort;
                report = function(argFoo, argBar) {
                    entity = argBar;
                    zuuluu = 2;
                    michal = entity[zuuluu];
                    entity = argFoo;
                    entity = entity[zuuluu];
                    entity = michal - entity;
                    return entity;
                };
                report = oscard.bind(entity)(report);
                report = entity.length;
                if(!(report > tangon)) { _fun00024_ip = 214; continue _fun00023 }
 208:
                entity['length'] = tangon;
 214:
                report = 0;
                _closure3_slot0 = report;
                _closure3_slot1 = report;
                oscard = entity.map;
                tangon = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        report = argFoo;
                        entity = report[Symbol.iterator];
                        report = entity().next;
                        michal = report().value;
                        zuuluu = entity;
                        golfie = undefined;
                        tangon = zuuluu === golfie;
                        zuuluu = undefined;
                        if(tangon) { _fun00026_ip = 27; continue _fun00025 }
 24:
                        zuuluu = michal;
 27:
                        if(tangon) { _fun00026_ip = 41; continue _fun00025 }
 30:
                        michal = report().value;
                        michal = entity;
                        tangon = michal === golfie;
 41:
                        michal = undefined;
                        if(tangon) { _fun00026_ip = 71; continue _fun00025 }
 46:
                        oscard = report().value;
                        report = entity;
                        report = report === golfie;
                        michal = undefined;
                        tangon = report;
                        if(report) { _fun00026_ip = 71; continue _fun00025 }
 65:
                        michal = oscard;
                        tangon = report;
 71:
                        if(tangon) { _fun00026_ip = 77; continue _fun00025 }
 74:
                        entity.return();
 77:
                        entity = global;
                        golfie = entity.Math;
                        oscard = golfie.max;
                        report = zuuluu.length;
                        entity = _closure3_slot0;
                        entity = oscard.bind(golfie)(report, entity);
                        _closure3_slot0 = entity;
                        entity = new Array(2);
                        entity[0] = zuuluu;
                        entity[1] = michal;
                        return entity;
                    }
                };
                option = oscard.bind(entity)(tangon);
                oscard = option.map;
                tangon = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        zuuluu = argFoo;
                        entity = zuuluu[Symbol.iterator];
                        zuuluu = entity().next;
                        report = zuuluu().value;
                        michal = entity;
                        golfie = undefined;
                        michal = michal === golfie;
                        tangon = undefined;
                        if(michal) { _fun00028_ip = 27; continue _fun00027 }
 24:
                        tangon = report;
 27:
                        oscard = undefined;
                        if(michal) { _fun00028_ip = 57; continue _fun00027 }
 32:
                        report = zuuluu().value;
                        zuuluu = entity;
                        zuuluu = zuuluu === golfie;
                        oscard = undefined;
                        michal = zuuluu;
                        if(zuuluu) { _fun00028_ip = 57; continue _fun00027 }
 51:
                        oscard = report;
                        michal = zuuluu;
 57:
                        if(michal) { _fun00028_ip = 63; continue _fun00027 }
 60:
                        entity.return();
 63:
                        michal = _closure3_slot1;
                        michal = michal + oscard;
                        _closure3_slot1 = michal;
                        zuuluu = tangon.padEnd;
                        michal = _closure3_slot0;
                        entity = 1;
                        michal = michal + entity;
                        entity = ' ';
                        yankee = zuuluu.bind(tangon)(michal, entity);
                        entity = global;
                        entity = entity.HermesInternal;
                        tangon = entity.concat;
                        romeon = '';
                        offset = ' - ';
                        option = 'ms';
                        verify = oscard;
                        entity = romeon[tangon](yankee, offset, verify, option, golfie);
                        return entity;
                    }
                };
                option = oscard.bind(option)(tangon);
                oscard = option.join;
                tangon = '\n';
                yankee = oscard.bind(option)(tangon);
                tangon = entity.length;
                tangon = report === tangon;
                if(tangon) { _fun00024_ip = 291; continue _fun00023 }
 280:
                oscard = _closure3_slot1;
                report = 8;
                tangon = oscard < report;
 291:
                if(tangon) { _fun00024_ip = 429; continue _fun00023 }
 297:
                oscard = _closure1_slot8;
                report = oscard.log;
                tangon = _closure1_slot0;
                zuuluu = null;
                option = zuuluu == tangon;
                zuuluu = undefined;
                if(option) { _fun00024_ip = 327; continue _fun00023 }
 322:
                zuuluu = tangon.HermesInternal;
 327:
                tangon = michal.HermesInternal;
                option = tangon.concat;
                tangon = '\nUsing Hermes: ';
                zuuluu = verify === zuuluu;
                zuuluu = !zuuluu;
                tangon = option.bind(tangon)(zuuluu);
                zuuluu = michal.HermesInternal;
                offset = zuuluu.concat;
                verify = '\n\n=== ';
                option = argFoo;
                zuuluu = ' ===\n';
                zuuluu = offset.bind(verify)(option, zuuluu, yankee);
                verify = _closure3_slot1;
                michal = michal.HermesInternal;
                option = michal.concat;
                golfie = '\nTotal Time: ';
                michal = 'ms\n\n';
                michal = option.bind(golfie)(verify, michal);
                michal = report.bind(oscard)(tangon, zuuluu, michal);
 429:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(option);
    var _closure1_slot9 = michal;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: ActionLog
            zuuluu = this;
            tangon = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = 0;
            zuuluu['startTime'] = michal;
            zuuluu['totalTime'] = michal;
            michal = new Array(0);
            zuuluu['traces'] = michal;
            michal = _closure1_slot9;
            michal = parseFloat(michal);
            tangon = michal + 1;
            _closure1_slot9 = tangon;
            zuuluu['id'] = michal;
            michal = argFoo;
            zuuluu['action'] = michal;
            michal = global;
            michal = michal.Date;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['createdAt'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'name';
        entity['key'] = michal;
        michal = function() { // Original name: get
            entity = this;
            entity = entity.action;
            entity = entity.type;
            return entity;
        };
        entity['get'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'toJSON';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                michal = this;
                zuuluu = michal.createdAt;
                entity = null;
                if(!(entity != zuuluu)) { _fun00030_ip = 67; continue _fun00029 }
 15:
                entity = {};
                zuuluu = michal.action;
                zuuluu = zuuluu.type;
                entity['actionType'] = zuuluu;
                zuuluu = michal.createdAt;
                entity['created_at'] = zuuluu;
                zuuluu = michal.totalTime;
                entity['totalTime'] = zuuluu;
                michal = michal.traces;
                entity['traces'] = michal;
                return entity;
 67:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                tangon = 'ActionLog.toJSON: You must complete your logging before calling toJSON';
                report = michal;
                entity = new report[zuuluu](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    var _closure1_slot10 = michal;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = '../discord_common/js/packages/flux/LoggingUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['ActionLogger'] = tangon;
    zuuluu['ActionLog'] = michal;
    return entity;
})();