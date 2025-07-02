// app/modules/libdiscore/DispatcherBridge.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
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
            verify = _closure1_slot9;
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
            golfie = _closure1_slot9;
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
    var _closure1_slot8 = entity;
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
    var _closure1_slot9 = entity;
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
    option = verify.bind(entity)(tangon);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    golfie = verify.bind(entity)(tangon);
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    offset = tangon._privateSetDerivedDoNotUse;
    var _closure1_slot4 = offset;
    tangon = tangon._privateSetKvApiDoNotUse;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    offset = verify.bind(entity)(tangon);
    tangon = offset.prototype;
    verify = Object.create(tangon, {constructor: {value: offset}});
    foxtra = 'DispatcherBridge';
    backup = verify;
    tangon = new backup[offset](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : verify;
    var _closure1_slot6 = tangon;
    tangon = new Array(1);
    tangon[0] = golfie;
    golfie = {};
    verify = function() { // Original name: CONNECTION_OPEN
        entity = {};
        return entity;
    };
    golfie['CONNECTION_OPEN'] = verify;
    var _closure1_slot7 = golfie;
    golfie = function(argFoo) { // Original name: DispatcherBridge
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            romeon = this;
            var _closure2_slot0 = romeon;
            option = argFoo;
            entity = undefined;
            tangon = undefined;
            verify = undefined;
            oscard = undefined;
            offset = undefined;
            yankee = undefined;
            var _closure2_slot1 = romeon;
            golfie = _closure1_slot3;
            report = _closure1_slot10;
            report = golfie.bind(entity)(romeon, report);
            report = global;
            golfie = report.Map;
            foxtra = golfie.prototype;
            foxtra = Object.create(foxtra, {constructor: {value: golfie}});
            echoed = foxtra;
            golfie = new echoed[golfie](result);
            golfie = golfie instanceof Object ? golfie : foxtra;
            romeon['tokenToStore'] = golfie;
 79: // try_start_0
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            golfie = 5;
            golfie = foxtra[golfie];
            romeon = romeon.bind(entity)(golfie);
            golfie = romeon.getKvStoreApi;
            romeon = golfie.bind(romeon)();
            tangon = romeon;
            var _closure2_slot2 = romeon;
            golfie = null;
            if(!(golfie != romeon)) { _fun00008_ip = 470; continue _fun00007 }
 125:
            golfie = new Array(0);
            oscard = golfie;
            var _closure2_slot3 = golfie;
            offset = function(argFoo) { // Original name: _loop
                tangon = argFoo;
                var _closure3_slot0 = tangon;
                entity = tangon.getName;
                golfie = entity.bind(tangon)();
                oscard = _closure2_slot2;
                report = oscard.registerStore;
                zuuluu = function(argFoo, argBar) {
                    tangon = _closure3_slot0;
                    entity = _closure1_slot5;
                    zuuluu = tangon[entity];
                    michal = argFoo;
                    entity = argBar;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                michal = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    entity = _closure1_slot4;
                    michal = zuuluu[entity];
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = report.bind(oscard)(golfie, zuuluu, michal);
                oscard = michal.token;
                michal = _closure2_slot1;
                zuuluu = michal.tokenToStore;
                michal = zuuluu.set;
                michal = michal.bind(zuuluu)(oscard, tangon);
                zuuluu = _closure2_slot3;
                michal = zuuluu.push;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                tangon = '';
                entity = ' => ';
                entity = report.bind(tangon)(golfie, entity, oscard);
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            romeon = _closure1_slot8;
            golfie = option;
            golfie = romeon.bind(entity)(golfie);
            yankee = golfie;
            golfie = golfie.bind(entity)();
            verify = golfie;
            golfie = golfie.done;
            if(golfie) { _fun00008_ip = 207; continue _fun00007 }
 173:
            romeon = offset;
            golfie = verify;
            golfie = golfie.value;
            golfie = romeon.bind(entity)(golfie);
            golfie = yankee;
            golfie = golfie.bind(entity)();
            verify = golfie;
            golfie = golfie.done;
            if(!golfie) { _fun00008_ip = 173; continue _fun00007 }
 207:
            golfie = _closure1_slot6;
            verify = golfie.info;
            backup = option.length;
            offset = oscard;
            oscard = offset.join;
            option = ', ';
            sizing = oscard.bind(offset)(option);
            oscard = report.HermesInternal;
            yankee = oscard.concat;
            echoed = 'Registered ';
            output = ' store(s), mapping: ';
            foxtra = '.';
            result = backup;
            kiloes = foxtra;
            oscard = echoed[yankee](result, output, sizing, kiloes, backup);
            oscard = verify.bind(golfie)(oscard);
            oscard = tangon;
            tangon = oscard.getActions;
            romeon = tangon.bind(oscard)();
            oscard = golfie.info;
            yankee = romeon.length;
            tangon = romeon.join;
            sizing = tangon.bind(romeon)(option);
            tangon = report.HermesInternal;
            verify = tangon.concat;
            echoed = 'Registering ';
            output = ' bridged action(s): ';
            result = yankee;
            tangon = echoed[verify](result, output, sizing, kiloes, backup);
            tangon = oscard.bind(golfie)(tangon);
            tangon = function(argFoo) { // Original name: actionHandler
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    yankee = argFoo;
                    michal = _closure1_slot7;
                    entity = yankee.type;
                    oscard = michal[entity];
                    verify = null;
                    if(!(verify == oscard)) { _fun00010_ip = 46; continue _fun00009 }
 25:
                    entity = global;
                    michal = entity.JSON;
                    entity = michal.stringify;
                    zuuluu = entity.bind(michal)(yankee);
                    _fun00010_ip = 90; continue _fun00009;
 46:
                    entity = global;
                    tangon = entity.JSON;
                    michal = tangon.stringify;
                    entity = {};
                    report = yankee.type;
                    entity['type'] = report;
                    report = undefined;
                    result = oscard.bind(report)(yankee);
                    echoed = entity;
                    report = copyDataProperties(echoed, result);
                    zuuluu = michal.bind(tangon)(entity);
 90:
                    michal = _closure2_slot2;
                    entity = michal.dispatchAction;
                    entity = entity.bind(michal)(zuuluu);
                    if(!(verify == entity)) { _fun00010_ip = 151; continue _fun00009 }
 112:
                    oscard = _closure1_slot6;
                    report = oscard.info;
                    tangon = yankee.type;
                    zuuluu = 'When dispatching action';
                    michal = 'libdiscore returned a failure. Check native logs for more info.';
                    michal = report.bind(oscard)(zuuluu, tangon, michal);
                    _fun00010_ip = 290; continue _fun00009;
 151:
                    michal = _closure1_slot8;
                    entity = entity.storeTokens;
                    golfie = undefined;
                    oscard = michal.bind(golfie)(entity);
                    michal = oscard.bind(golfie)();
                    entity = michal.done;
                    report = 'When dispatching action';
                    tangon = 'we got a store token';
                    zuuluu = 'that is unknown';
                    if(entity) { _fun00010_ip = 290; continue _fun00009 }
 200:
                    backup = michal.value;
                    entity = _closure2_slot0;
                    romeon = entity.tokenToStore;
                    entity = romeon.get;
                    romeon = entity.bind(romeon)(backup);
                    if(!(verify != romeon)) { _fun00010_ip = 242; continue _fun00009 }
 229:
                    entity = romeon.doEmitChanges;
                    entity = entity.bind(romeon)(yankee);
                    _fun00010_ip = 275; continue _fun00009;
 242:
                    foxtra = _closure1_slot6;
                    romeon = foxtra.warn;
                    result = yankee.type;
                    update = foxtra;
                    echoed = report;
                    output = tangon;
                    sizing = backup;
                    kiloes = zuuluu;
                    entity = update[romeon](echoed, result, output, sizing, kiloes, backup);
 275:
                    romeon = oscard.bind(golfie)();
                    entity = romeon.done;
                    michal = romeon;
                    if(!entity) { _fun00010_ip = 200; continue _fun00009 }
 290:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot4 = tangon;
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 6;
            oscard = verify[tangon];
            option = golfie.bind(entity)(oscard);
            golfie = option.register;
            offset = report.Object;
            oscard = offset.fromEntries;
            yankee = romeon.map;
            report = function(argFoo) {
                entity = new Array(2);
                michal = argFoo;
                entity[0] = michal;
                michal = _closure2_slot4;
                entity[1] = michal;
                return entity;
            };
            report = yankee.bind(romeon)(report);
            output = oscard.bind(offset)(report);
            report = _closure1_slot0;
            tangon = verify[tangon];
            tangon = report.bind(entity)(tangon);
            tangon = tangon.DispatchBand;
            kiloes = tangon.Database;
            result = 'LibDiscoreDispatcherBridge';
            sizing = function() {
                entity = undefined;
                return entity;
            };
            echoed = option;
            zuuluu = echoed[golfie](result, output, sizing, kiloes, backup);
 468: // try_end0
            _fun00008_ip = 518; continue _fun00007;
 470: // try_start_1
            report = _closure1_slot6;
            tangon = report.info;
            zuuluu = 'Not initializing the action bridge, because discore kvStoreApi is unavailable.';
            zuuluu = tangon.bind(report)(zuuluu);
 491: // try_end1
            zuuluu = undefined;
            return zuuluu;
 495: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=4);
            tangon = _closure1_slot6;
            zuuluu = tangon.error;
            michal = 'Failed to initialize the dispatcher bridge';
            michal = zuuluu.bind(tangon)(michal, report);
 518:
            return entity;
        }
    };
    var _closure1_slot10 = golfie;
    golfie = option.bind(entity)(golfie);
    michal = function(argFoo) { // Original name: filterKvStores
        zuuluu = argFoo;
        michal = zuuluu.filter;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.actionsHandledByLibdiscore;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    foxtra = michal.bind(entity)(tangon);
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    backup = tangon;
    michal = new backup[golfie](foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/libdiscore/DispatcherBridge.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();