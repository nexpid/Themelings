// app/modules/app_analytics/clickstream/Clickstream.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
            verify = _closure1_slot6;
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
            golfie = _closure1_slot6;
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
    var _closure1_slot5 = entity;
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
    var _closure1_slot6 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = tangon.Map;
    golfie = tangon.prototype;
    golfie = Object.create(golfie, {constructor: {value: tangon}});
    backup = golfie;
    tangon = new backup[tangon](foxtra);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_analytics/clickstream/Clickstream.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: trackClickstream
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            michal = _closure1_slot4;
            entity = michal.has;
            entity = entity.bind(michal)(oscard);
            if(entity) { _fun00008_ip = 42; continue _fun00007 }
 23:
            tangon = _closure1_slot4;
            michal = tangon.set;
            entity = new Array(0);
            entity = michal.bind(tangon)(oscard, entity);
 42:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            tangon = michal.default;
            michal = argBar;
            tangon = tangon.bind(entity)(oscard, michal);
            michal = null;
            if(!(michal != tangon)) { _fun00008_ip = 112; continue _fun00007 }
 84:
            report = _closure1_slot4;
            zuuluu = report.get;
            zuuluu = zuuluu.bind(report)(oscard);
            if(!(michal != zuuluu)) { _fun00008_ip = 112; continue _fun00007 }
 102:
            michal = zuuluu.push;
            michal = michal.bind(zuuluu)(tangon);
 112:
            return entity;
        }
    };
    zuuluu['trackClickstream'] = tangon;
    michal = function() { // Original name: drainClickstream
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            offset = 2;
            zuuluu = entity[offset];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.clickstreamExperimentEnabled;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00010_ip = 57; continue _fun00009 }
 38:
            tangon = _closure1_slot4;
            zuuluu = tangon.clear;
            zuuluu = zuuluu.bind(tangon)();
            _fun00010_ip = 201; continue _fun00009;
 57:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            verify = zuuluu.default;
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot4;
            option = tangon.bind(entity)(zuuluu);
            tangon = option.bind(entity)();
            zuuluu = tangon.done;
            golfie = 0;
            oscard = 1;
            report = 4;
            if(zuuluu) { _fun00010_ip = 187; continue _fun00009 }
 115:
            yankee = tangon.value;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.bind(entity)(yankee, offset);
            foxtra = zuuluu[golfie];
            zuuluu = zuuluu[oscard];
            romeon = _closure1_slot1;
            yankee = _closure1_slot2;
            yankee = yankee[report];
            romeon = romeon.bind(entity)(yankee);
            yankee = romeon.track;
            zuuluu = verify.bind(entity)(foxtra, zuuluu);
            zuuluu = yankee.bind(romeon)(foxtra, zuuluu);
            yankee = option.bind(entity)();
            zuuluu = yankee.done;
            tangon = yankee;
            if(!zuuluu) { _fun00010_ip = 115; continue _fun00009 }
 187:
            zuuluu = _closure1_slot4;
            michal = zuuluu.clear;
            michal = michal.bind(zuuluu)();
 201:
            return entity;
        }
    };
    zuuluu['drainClickstream'] = michal;
    return entity;
})();