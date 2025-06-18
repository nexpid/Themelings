// app/modules/devtools/native/useSortedDevToolsScreens.tsx
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
    entity = function() { // Original name: getSortedDevToolsScreens
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = arguments[0];
            oscard = undefined;
            if(!(michal === oscard)) { _fun00008_ip = 24; continue _fun00007 }
 11:
            zuuluu = _closure1_slot3;
            michal = zuuluu.sortedScreenKeys;
 24:
            var _closure2_slot0 = michal;
            michal = global;
            tangon = michal.Object;
            zuuluu = tangon.entries;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 2;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.DevToolsScreens;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.sort;
            entity = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    entity = michal[Symbol.iterator];
                    michal = entity().next;
                    report = michal().value;
                    michal = entity;
                    zuuluu = undefined;
                    michal = michal === zuuluu;
                    tangon = undefined;
                    if(michal) { _fun00010_ip = 27; continue _fun00009 }
 24:
                    tangon = report;
 27:
                    if(michal) { _fun00010_ip = 33; continue _fun00009 }
 30:
                    entity.return();
 33:
                    michal = argBar;
                    entity = michal[Symbol.iterator];
                    michal = entity().next;
                    report = michal().value;
                    michal = entity;
                    michal = michal === zuuluu;
                    zuuluu = undefined;
                    if(michal) { _fun00010_ip = 58; continue _fun00009 }
 55:
                    zuuluu = report;
 58:
                    if(michal) { _fun00010_ip = 64; continue _fun00009 }
 61:
                    entity.return();
 64:
                    michal = _closure2_slot0;
                    entity = michal.indexOf;
                    report = entity.bind(michal)(tangon);
                    entity = michal.indexOf;
                    tangon = entity.bind(michal)(zuuluu);
                    oscard = -1;
                    zuuluu = oscard === report;
                    if(!zuuluu) { _fun00010_ip = 112; continue _fun00009 }
 106:
                    entity = 0;
                    if(!(oscard !== tangon)) { _fun00010_ip = 135; continue _fun00009 }
 112:
                    michal = oscard;
                    if(zuuluu) { _fun00010_ip = 132; continue _fun00009 }
 118:
                    zuuluu = 1;
                    if(!(oscard !== tangon)) { _fun00010_ip = 129; continue _fun00009 }
 125:
                    zuuluu = report - tangon;
 129:
                    michal = zuuluu;
 132:
                    entity = michal;
 135:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/devtools/native/useSortedDevToolsScreens.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useSortedDevToolsScreens
        zuuluu = _closure1_slot6;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        michal = 4;
        tangon = tangon[michal];
        michal = undefined;
        oscard = report.bind(michal)(tangon);
        report = oscard.useStateFromStores;
        entity = _closure1_slot3;
        tangon = new Array(1);
        tangon[0] = entity;
        entity = function() {
            entity = _closure1_slot3;
            entity = entity.sortedScreenKeys;
            return entity;
        };
        entity = report.bind(oscard)(tangon, entity);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: updateSortOrder
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argBar;
            entity = _closure1_slot3;
            romeon = entity.sortedScreenKeys;
            report = new Array(0);
            verify = 0;
            foxtra = report;
            yankee = 0;
            entity = arraySpread(foxtra, romeon, yankee);
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot6;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)();
            option = tangon.bind(entity)(zuuluu);
            tangon = option.bind(entity)();
            zuuluu = tangon.done;
            oscard = 1;
            if(zuuluu) { _fun00012_ip = 122; continue _fun00011 }
 65:
            offset = tangon.value;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.bind(entity)(offset, oscard);
            offset = zuuluu[verify];
            zuuluu = report.includes;
            zuuluu = zuuluu.bind(report)(offset);
            if(zuuluu) { _fun00012_ip = 107; continue _fun00011 }
 97:
            zuuluu = report.push;
            zuuluu = zuuluu.bind(report)(offset);
 107:
            offset = option.bind(entity)();
            zuuluu = offset.done;
            tangon = offset;
            if(!zuuluu) { _fun00012_ip = 65; continue _fun00011 }
 122:
            tangon = report.indexOf;
            zuuluu = argFoo;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = 'up';
            if(!(tangon !== golfie)) { _fun00012_ip = 178; continue _fun00011 }
 144:
            tangon = 'down';
            if(!(tangon === golfie)) { _fun00012_ip = 202; continue _fun00011 }
 152:
            golfie = report[zuuluu];
            tangon = zuuluu + oscard;
            tangon = report[tangon];
            report[zuuluu] = tangon;
            tangon = zuuluu + oscard;
            report[tangon] = golfie;
            _fun00012_ip = 202; continue _fun00011;
 178:
            tangon = report[zuuluu];
            golfie = zuuluu - oscard;
            golfie = report[golfie];
            report[zuuluu] = golfie;
            zuuluu = zuuluu - oscard;
            report[zuuluu] = tangon;
 202:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 3;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.updateDevToolsSettings;
            michal = {};
            michal['sortedScreenKeys'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['updateSortOrder'] = michal;
    return entity;
})();