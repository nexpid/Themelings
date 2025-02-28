// app/modules/debug/LogAggregator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
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
            verify = _closure1_slot2;
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
            golfie = _closure1_slot2;
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
    var _closure1_slot1 = entity;
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
    var _closure1_slot2 = entity;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argBaz;
    entity = undefined;
    golfie = tangon.bind(entity)(oscard);
    tangon = golfie.prototype;
    oscard = Object.create(tangon, {constructor: {value: golfie}});
    offset = 5000;
    yankee = oscard;
    tangon = new yankee[golfie](offset, verify);
    tangon = tangon instanceof Object ? tangon : oscard;
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/debug/LogAggregator.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: report
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            result = 1;
            zuuluu = copyRestArgs(result);
            michal = _closure1_slot1;
            entity = undefined;
            backup = michal.bind(entity)(zuuluu);
            report = backup.bind(entity)();
            michal = report.done;
            oscard = '';
            foxtra = ' ';
            romeon = '\n';
            option = global;
            yankee = 'boolean';
            offset = 'number';
            zuuluu = 'string';
            verify = report;
            report = oscard;
            oscard = report;
            if(michal) { _fun00008_ip = 189; continue _fun00007 }
 71:
            michal = verify.value;
            kiloes = typeof michal;
            if(!(zuuluu !== kiloes)) { _fun00008_ip = 160; continue _fun00007 }
 83:
            if(!(offset !== kiloes)) { _fun00008_ip = 160; continue _fun00007 }
 87:
            if(!(yankee !== kiloes)) { _fun00008_ip = 160; continue _fun00007 }
 91:
            kiloes = option.Error;
            kiloes = michal instanceof kiloes;
            if(kiloes) { _fun00008_ip = 131; continue _fun00007 }
 104:
            sizing = option.JSON;
            kiloes = sizing.stringify;
            kiloes = kiloes.bind(sizing)(michal);
            kiloes = kiloes + foxtra;
            kiloes = report + kiloes;
            _fun00008_ip = 168; continue _fun00007;
 131:
            sizing = michal.message;
            output = sizing + romeon;
            sizing = michal.stack;
            sizing = output + sizing;
            sizing = sizing + foxtra;
            kiloes = report + sizing;
            _fun00008_ip = 168; continue _fun00007;
 160:
            michal = michal + foxtra;
            kiloes = report + michal;
 168:
            sizing = backup.bind(entity)();
            michal = sizing.done;
            report = kiloes;
            verify = sizing;
            oscard = report;
            if(!michal) { _fun00008_ip = 71; continue _fun00007 }
 189:
            michal = typeof golfie;
            if(!(zuuluu !== michal)) { _fun00008_ip = 258; continue _fun00007 }
 196:
            report = _closure1_slot0;
            zuuluu = report.push;
            michal = {};
            offset = option.Date;
            verify = offset.now;
            verify = verify.bind(offset)();
            michal['time'] = verify;
            verify = golfie.name;
            michal['category'] = verify;
            verify = golfie.timing;
            michal['timing'] = verify;
            michal['message'] = oscard;
            michal = zuuluu.bind(report)(michal);
            _fun00008_ip = 302; continue _fun00007;
 258:
            report = _closure1_slot0;
            zuuluu = report.push;
            michal = {};
            verify = option.Date;
            option = verify.now;
            option = option.bind(verify)();
            michal['time'] = option;
            michal['category'] = golfie;
            michal['message'] = oscard;
            michal = zuuluu.bind(report)(michal);
 302:
            michal = _closure1_slot0;
            michal = michal.length;
            zuuluu = 5000;
            if(!(michal > zuuluu)) { _fun00008_ip = 344; continue _fun00007 }
 321:
            michal = _closure1_slot0;
            report = michal.shift;
            report = report.bind(michal)();
            michal = michal.length;
            if(michal > zuuluu) { _fun00008_ip = 321; continue _fun00007 }
 344:
            return entity;
        }
    };
    zuuluu['report'] = tangon;
    tangon = function() { // Original name: clear
        michal = _closure1_slot0;
        entity = michal.clear;
        entity = entity.bind(michal)();
        entity = undefined;
        return entity;
    };
    zuuluu['clear'] = tangon;
    tangon = function(argFoo) { // Original name: stringify
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot0;
        michal = zuuluu.toArray;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.filter;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                entity = entity == zuuluu;
                if(entity) { _fun00010_ip = 38; continue _fun00009 }
 16:
                tangon = _closure2_slot0;
                zuuluu = tangon.includes;
                michal = argFoo;
                michal = michal.category;
                entity = zuuluu.bind(tangon)(michal);
 38:
                return entity;
            }
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.map;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                zuuluu = new Array(0);
                tangon = zuuluu.push;
                michal = global;
                oscard = michal.Date;
                option = entity.time;
                report = oscard.prototype;
                report = Object.create(report, {constructor: {value: oscard}});
                verify = report;
                michal = new verify[oscard](option, golfie);
                report = michal instanceof Object ? michal : report;
                michal = report.toISOString;
                michal = michal.bind(report)();
                michal = tangon.bind(zuuluu)(michal);
                tangon = entity.timing;
                michal = null;
                if(!(michal != tangon)) { _fun00012_ip = 89; continue _fun00011 }
 73:
                tangon = zuuluu.push;
                michal = entity.timing;
                michal = tangon.bind(zuuluu)(michal);
 89:
                tangon = zuuluu.push;
                michal = entity.category;
                entity = entity.message;
                entity = tangon.bind(zuuluu)(michal, entity);
                michal = zuuluu.join;
                entity = ' -> ';
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.join;
        entity = '\n';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['stringify'] = tangon;
    michal = function() { // Original name: getAllForDebugPanel
        michal = _closure1_slot0;
        entity = michal.toArray;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['getAllForDebugPanel'] = michal;
    return entity;
})();