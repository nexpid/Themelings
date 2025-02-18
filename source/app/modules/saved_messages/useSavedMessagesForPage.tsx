// app/modules/saved_messages/useSavedMessagesForPage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
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
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
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
            verify = _closure1_slot6;
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
            golfie = _closure1_slot6;
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
 345:
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
    entity = function() { // Original name: getKeys
        michal = _closure1_slot4;
        entity = michal.getSavedMessages;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.saveData;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = report[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/saved_messages/useSavedMessagesForPage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useSavedMessagesForPage
        golfie = _closure1_slot3;
        zuuluu = golfie.useState;
        entity = _closure1_slot7;
        oscard = zuuluu.bind(golfie)(entity);
        report = _closure1_slot2;
        zuuluu = undefined;
        entity = 2;
        oscard = report.bind(zuuluu)(oscard, entity);
        entity = 0;
        entity = oscard[entity];
        report = 1;
        report = oscard[report];
        var _closure2_slot0 = report;
        oscard = golfie.useRef;
        option = _closure1_slot4;
        report = option.getIsStale;
        report = report.bind(option)();
        report = oscard.bind(golfie)(report);
        var _closure2_slot1 = report;
        oscard = golfie.useEffect;
        report = function() {
            tangon = function() { // Original name: handleChange
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure1_slot4;
                    entity = zuuluu.getLastChanged;
                    zuuluu = entity.bind(zuuluu)();
                    tangon = _closure3_slot0;
                    if(!(tangon !== zuuluu)) { _fun00008_ip = 119; continue _fun00007 }
 28:
                    _closure3_slot0 = zuuluu;
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.current;
                    if(!zuuluu) { _fun00008_ip = 99; continue _fun00007 }
 47:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getIsStale;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00008_ip = 99; continue _fun00007 }
 64:
                    tangon = _closure2_slot1;
                    zuuluu = false;
                    tangon['current'] = zuuluu;
                    tangon = _closure2_slot0;
                    michal = _closure1_slot7;
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)();
                    michal = tangon.bind(zuuluu)(michal);
                    michal = undefined;
                    return michal;
 99:
                    zuuluu = _closure2_slot0;
                    michal = undefined;
                    entity = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            oscard = argFoo;
                            entity = new Array(0);
                            yankee = 0;
                            foxtra = entity;
                            romeon = oscard;
                            michal = arraySpread(foxtra, romeon, yankee);
                            tangon = _closure1_slot4;
                            zuuluu = tangon.getSavedMessages;
                            golfie = zuuluu.bind(tangon)();
                            zuuluu = global;
                            report = zuuluu.Map;
                            tangon = golfie.map;
                            zuuluu = function(argFoo) {
                                michal = argFoo;
                                entity = michal.saveData;
                                zuuluu = entity.messageId;
                                entity = new Array(2);
                                entity[0] = zuuluu;
                                entity[1] = michal;
                                return entity;
                            };
                            foxtra = tangon.bind(golfie)(zuuluu);
                            tangon = report.prototype;
                            tangon = Object.create(tangon, {constructor: {value: report}});
                            backup = tangon;
                            zuuluu = new backup[report](foxtra, romeon);
                            tangon = zuuluu instanceof Object ? zuuluu : tangon;
                            zuuluu = _closure1_slot5;
                            report = undefined;
                            option = zuuluu.bind(report)(oscard);
                            oscard = option.bind(report)();
                            zuuluu = oscard.done;
                            golfie = 1;
                            if(zuuluu) { _fun00010_ip = 186; continue _fun00009 }
 109:
                            zuuluu = oscard.value;
                            offset = tangon.has;
                            verify = zuuluu.messageId;
                            verify = offset.bind(tangon)(verify);
                            if(verify) { _fun00010_ip = 156; continue _fun00009 }
 132:
                            offset = entity.splice;
                            verify = entity.indexOf;
                            verify = verify.bind(entity)(zuuluu);
                            verify = offset.bind(entity)(verify, golfie);
                            _fun00010_ip = 171; continue _fun00009;
 156:
                            verify = tangon.delete;
                            zuuluu = zuuluu.messageId;
                            zuuluu = verify.bind(tangon)(zuuluu);
 171:
                            verify = option.bind(report)();
                            zuuluu = verify.done;
                            oscard = verify;
                            if(!zuuluu) { _fun00010_ip = 109; continue _fun00009 }
 186:
                            zuuluu = _closure1_slot5;
                            michal = tangon.values;
                            michal = michal.bind(tangon)();
                            tangon = zuuluu.bind(report)(michal);
                            zuuluu = tangon.bind(report)();
                            michal = zuuluu.done;
                            if(michal) { _fun00010_ip = 252; continue _fun00009 }
 216:
                            michal = zuuluu.value;
                            oscard = entity.push;
                            michal = michal.saveData;
                            michal = oscard.bind(entity)(michal);
                            oscard = tangon.bind(report)();
                            michal = oscard.done;
                            zuuluu = oscard;
                            if(!michal) { _fun00010_ip = 216; continue _fun00009 }
 252:
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(michal)(entity);
 119:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot1 = tangon;
            report = _closure1_slot4;
            zuuluu = report.getLastChanged;
            zuuluu = zuuluu.bind(report)();
            var _closure3_slot0 = zuuluu;
            zuuluu = _closure1_slot4;
            michal = zuuluu.addChangeListener;
            michal = michal.bind(zuuluu)(tangon);
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.removeChangeListener;
                entity = _closure3_slot1;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        tangon = new Array(0);
        tangon = oscard.bind(golfie)(report, tangon);
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        michal = 3;
        michal = report[michal];
        michal = tangon.bind(zuuluu)(michal);
        michal = michal.bind(zuuluu)();
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();