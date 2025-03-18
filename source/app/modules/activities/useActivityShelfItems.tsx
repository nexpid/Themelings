// app/modules/activities/useActivityShelfItems.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
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
 344:
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
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useActivityShelfItems.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useActivityShelfItems
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            yankee = michal.guildId;
            golfie = michal.enableFilter;
            option = undefined;
            if(!(golfie === option)) { _fun00008_ip = 26; continue _fun00007 }
 24:
            golfie = false;
 26:
            var _closure2_slot0 = golfie;
            offset = michal.context;
            var _closure2_slot1 = option;
            var _closure2_slot2 = option;
            var _closure2_slot3 = option;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 2;
            zuuluu = verify[zuuluu];
            romeon = tangon.bind(option)(zuuluu);
            oscard = romeon.useStateFromStoresObject;
            zuuluu = _closure1_slot4;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                entity = {};
                zuuluu = _closure1_slot4;
                michal = zuuluu.getFilter;
                michal = michal.bind(zuuluu)();
                entity['filter'] = michal;
                return entity;
            };
            zuuluu = oscard.bind(romeon)(report, zuuluu);
            oscard = zuuluu.filter;
            _closure2_slot1 = oscard;
            zuuluu = 3;
            zuuluu = verify[zuuluu];
            report = tangon.bind(option)(zuuluu);
            zuuluu = report.useActivityShelfData;
            report = zuuluu.bind(report)(yankee, offset);
            offset = _closure1_slot1;
            zuuluu = 4;
            zuuluu = verify[zuuluu];
            zuuluu = offset.bind(option)(zuuluu);
            report = zuuluu.bind(option)(report);
            _closure2_slot2 = report;
            zuuluu = 5;
            zuuluu = verify[zuuluu];
            tangon = tangon.bind(option)(zuuluu);
            zuuluu = tangon.useDeveloperActivityShelfItems;
            option = zuuluu.bind(tangon)();
            _closure2_slot3 = option;
            tangon = _closure1_slot3;
            zuuluu = tangon.useMemo;
            michal = new Array(4);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            michal[3] = report;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    golfie = function(argFoo) { // Original name: shouldKeepShelfItem
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = _closure2_slot0;
                            entity = !entity;
                            if(entity) { _fun00012_ip = 84; continue _fun00011 }
 13:
                            tangon = _closure2_slot1;
                            michal = '';
                            michal = michal === tangon;
                            if(michal) { _fun00012_ip = 81; continue _fun00011 }
 28:
                            tangon = argFoo;
                            tangon = tangon.application;
                            report = tangon.name;
                            tangon = report.toLowerCase;
                            report = tangon.bind(report)();
                            tangon = report.includes;
                            oscard = _closure2_slot1;
                            zuuluu = oscard.toLowerCase;
                            zuuluu = zuuluu.bind(oscard)();
                            zuuluu = tangon.bind(report)(zuuluu);
                            zuuluu = !zuuluu;
                            michal = !zuuluu;
 81:
                            entity = michal;
 84:
                            return entity;
                        }
                    };
                    yankee = _closure2_slot3;
                    tangon = new Array(0);
                    offset = 0;
                    romeon = tangon;
                    entity = arraySpread(romeon, yankee, offset);
                    entity = tangon.filter;
                    entity = entity.bind(tangon)(golfie);
                    tangon = global;
                    report = tangon.Set;
                    tangon = entity.map;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.application;
                        entity = entity.id;
                        return entity;
                    };
                    romeon = tangon.bind(entity)(zuuluu);
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    foxtra = tangon;
                    zuuluu = new foxtra[report](romeon, yankee);
                    oscard = zuuluu instanceof Object ? zuuluu : tangon;
                    zuuluu = _closure1_slot5;
                    michal = _closure2_slot2;
                    report = undefined;
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.bind(report)();
                    michal = zuuluu.done;
                    if(michal) { _fun00010_ip = 178; continue _fun00009 }
 114:
                    option = zuuluu.value;
                    verify = oscard.has;
                    michal = option.application;
                    michal = michal.id;
                    michal = verify.bind(oscard)(michal);
                    michal = !michal;
                    if(!michal) { _fun00010_ip = 150; continue _fun00009 }
 145:
                    michal = golfie.bind(report)(option);
 150:
                    if(!michal) { _fun00010_ip = 163; continue _fun00009 }
 153:
                    michal = entity.push;
                    michal = michal.bind(entity)(option);
 163:
                    option = tangon.bind(report)();
                    michal = option.done;
                    zuuluu = option;
                    if(!michal) { _fun00010_ip = 114; continue _fun00009 }
 178:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();