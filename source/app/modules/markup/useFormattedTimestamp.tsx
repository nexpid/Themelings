// app/modules/markup/useFormattedTimestamp.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
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
            verify = _closure1_slot8;
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
            golfie = _closure1_slot8;
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
    var _closure1_slot7 = entity;
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
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    golfie = 2;
    tangon = oscard[golfie];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.Seconds;
    tangon = tangon.MINUTE;
    tangon = golfie * tangon;
    verify = new Array(2);
    verify[0] = tangon;
    tangon = oscard[golfie];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.Seconds;
    tangon = tangon.SECOND;
    verify[1] = tangon;
    tangon = new Array(4);
    tangon[0] = verify;
    verify = oscard[golfie];
    verify = option.bind(entity)(verify);
    verify = verify.Seconds;
    verify = verify.MINUTE;
    yankee = 5;
    offset = yankee * verify;
    verify = new Array(2);
    verify[0] = offset;
    offset = oscard[golfie];
    offset = option.bind(entity)(offset);
    offset = offset.Seconds;
    offset = offset.MINUTE;
    verify[1] = offset;
    tangon[1] = verify;
    verify = oscard[golfie];
    verify = option.bind(entity)(verify);
    verify = verify.Seconds;
    offset = verify.MINUTE;
    verify = 45;
    offset = verify * offset;
    verify = new Array(2);
    verify[0] = offset;
    offset = oscard[golfie];
    offset = option.bind(entity)(offset);
    offset = offset.Seconds;
    offset = offset.MINUTE;
    offset = golfie * offset;
    verify[1] = offset;
    tangon[2] = verify;
    verify = oscard[golfie];
    verify = option.bind(entity)(verify);
    verify = verify.Seconds;
    offset = verify.HOUR;
    verify = 21;
    offset = verify * offset;
    verify = new Array(2);
    verify[0] = offset;
    offset = oscard[golfie];
    offset = option.bind(entity)(offset);
    offset = offset.Seconds;
    offset = offset.MINUTE;
    offset = yankee * offset;
    verify[1] = offset;
    tangon[3] = verify;
    var _closure1_slot5 = tangon;
    tangon = oscard[golfie];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.Seconds;
    tangon = tangon.HOUR;
    tangon = golfie * tangon;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/markup/useFormattedTimestamp.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useFormattedTimestamp
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 3;
            tangon = report[tangon];
            report = undefined;
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.useForceUpdate;
            option = tangon.bind(oscard)();
            var _closure2_slot1 = option;
            golfie = _closure1_slot4;
            oscard = golfie.useEffect;
            tangon = new Array(3);
            tangon[0] = option;
            option = michal.format;
            tangon[1] = option;
            option = michal.parsed;
            tangon[2] = option;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot0;
                    tangon = michal.format;
                    michal = 'R';
                    if(!(michal !== tangon)) { _fun00010_ip = 26; continue _fun00009 }
 22:
                    michal = undefined;
                    return michal;
 26:
                    michal = _closure1_slot6;
                    oscard = 1000;
                    backup = oscard * michal;
                    michal = global;
                    golfie = michal.Math;
                    tangon = golfie.abs;
                    zuuluu = _closure2_slot0;
                    verify = zuuluu.parsed;
                    option = verify.diff;
                    offset = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = report[zuuluu];
                    report = undefined;
                    zuuluu = offset.bind(report)(zuuluu);
                    zuuluu = zuuluu.bind(report)();
                    zuuluu = option.bind(verify)(zuuluu);
                    foxtra = tangon.bind(golfie)(zuuluu);
                    tangon = _closure1_slot7;
                    zuuluu = _closure1_slot5;
                    romeon = tangon.bind(report)(zuuluu);
                    tangon = romeon.bind(report)();
                    zuuluu = tangon.done;
                    yankee = 2;
                    offset = 0;
                    verify = 1;
                    option = tangon;
                    tangon = backup;
                    if(zuuluu) { _fun00010_ip = 203; continue _fun00009 }
 148:
                    golfie = option.value;
                    zuuluu = _closure1_slot3;
                    zuuluu = zuuluu.bind(report)(golfie, yankee);
                    golfie = zuuluu[offset];
                    zuuluu = zuuluu[verify];
                    golfie = oscard * golfie;
                    if(!(!(foxtra < golfie))) { _fun00010_ip = 199; continue _fun00009 }
 179:
                    sizing = romeon.bind(report)();
                    golfie = sizing.done;
                    option = sizing;
                    tangon = backup;
                    if(golfie) { _fun00010_ip = 203; continue _fun00009 }
 197:
                    _fun00010_ip = 148; continue _fun00009;
 199:
                    tangon = oscard * zuuluu;
 203:
                    zuuluu = michal.setInterval;
                    michal = function() {
                        michal = _closure2_slot1;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    michal = zuuluu.bind(report)(michal, tangon);
                    var _closure3_slot0 = michal;
                    entity = function() {
                        entity = global;
                        zuuluu = entity.clearInterval;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(entity, tangon);
            tangon = michal.format;
            entity = 'R';
            if(!(entity !== tangon)) { _fun00008_ip = 116; continue _fun00007 }
 108:
            entity = michal.formatted;
            _fun00008_ip = 159; continue _fun00007;
 116:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 5;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.TIMESTAMP_FORMATS;
            zuuluu = tangon.R;
            michal = michal.parsed;
            entity = zuuluu.bind(tangon)(michal);
 159:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();