// app/lib/Histogram.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
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
            verify = _closure1_slot5;
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
            golfie = _closure1_slot5;
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
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: Histogram
            zuuluu = this;
            report = _closure1_slot2;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 2;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.Digest;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['digest'] = michal;
            michal = 0;
            zuuluu['total'] = michal;
            zuuluu['samples'] = michal;
            zuuluu['totalWeight'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'addSample';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                golfie = argFoo;
                oscard = arguments[1];
                michal = this;
                entity = undefined;
                if(!(oscard === entity)) { _fun00008_ip = 18; continue _fun00007 }
 15:
                oscard = 1;
 18:
                tangon = michal.total;
                zuuluu = golfie * oscard;
                zuuluu = tangon + zuuluu;
                michal['total'] = zuuluu;
                zuuluu = michal.totalWeight;
                zuuluu = zuuluu + oscard;
                michal['totalWeight'] = zuuluu;
                zuuluu = michal.samples;
                zuuluu = zuuluu + 1;
                michal['samples'] = zuuluu;
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 2;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.TDigest;
                zuuluu = zuuluu.prototype;
                report = zuuluu.push;
                tangon = report.call;
                zuuluu = michal.digest;
                zuuluu = tangon.bind(report)(zuuluu, golfie, oscard);
                zuuluu = michal.digest;
                michal = zuuluu.check_continuous;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'getReport';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = arguments[0];
                michal = this;
                verify = undefined;
                if(!(zuuluu === verify)) { _fun00010_ip = 22; continue _fun00009 }
 12:
                zuuluu = [25, 50, 75, 90, 95];
 22:
                tangon = {};
                entity = _closure1_slot4;
                option = entity.bind(verify)(zuuluu);
                oscard = option.bind(verify)();
                entity = oscard.done;
                golfie = 100;
                report = null;
                zuuluu = 0;
                if(entity) { _fun00010_ip = 112; continue _fun00009 }
 55:
                offset = oscard.value;
                romeon = michal.digest;
                yankee = romeon.percentile;
                entity = offset / golfie;
                yankee = yankee.bind(romeon)(entity);
                romeon = report != yankee;
                entity = 0;
                if(!romeon) { _fun00010_ip = 93; continue _fun00009 }
 90:
                entity = yankee;
 93:
                tangon[offset] = entity;
                offset = option.bind(verify)();
                entity = offset.done;
                oscard = offset;
                if(!entity) { _fun00010_ip = 55; continue _fun00009 }
 112:
                entity = {};
                golfie = michal.digest;
                oscard = golfie.percentile;
                golfie = oscard.bind(golfie)(zuuluu);
                option = report != golfie;
                oscard = 0;
                if(!option) { _fun00010_ip = 143; continue _fun00009 }
 140:
                oscard = golfie;
 143:
                entity['min'] = oscard;
                option = michal.digest;
                golfie = option.percentile;
                oscard = 1;
                golfie = golfie.bind(option)(oscard);
                option = report != golfie;
                oscard = 0;
                if(!option) { _fun00010_ip = 179; continue _fun00009 }
 176:
                oscard = golfie;
 179:
                entity['max'] = oscard;
                golfie = michal.digest;
                oscard = golfie.size;
                oscard = oscard.bind(golfie)();
                golfie = report != oscard;
                report = 0;
                if(!golfie) { _fun00010_ip = 210; continue _fun00009 }
 207:
                report = oscard;
 210:
                entity['count'] = report;
                entity['percentiles'] = tangon;
                tangon = michal.totalWeight;
                tangon = tangon > zuuluu;
                zuuluu = 0;
                if(!tangon) { _fun00010_ip = 250; continue _fun00009 }
 234:
                report = michal.total;
                tangon = michal.totalWeight;
                zuuluu = report / tangon;
 250:
                entity['mean'] = zuuluu;
                michal = michal.samples;
                entity['samples'] = michal;
                return entity;
            }
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/Histogram.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['Histogram'] = michal;
    return entity;
})();