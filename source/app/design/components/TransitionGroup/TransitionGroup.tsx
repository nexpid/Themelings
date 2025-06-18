// app/design/components/TransitionGroup/TransitionGroup.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
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
    entity = function(argFoo) { // Original name: wrapChildrenDefault
        entity = argFoo;
        return entity;
    };
    var _closure1_slot7 = entity;
    tangon = function(argFoo) { // Original name: TransitionGroup
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.items;
            var _closure2_slot0 = report;
            foxtra = entity.renderItem;
            var _closure2_slot1 = foxtra;
            backup = entity.getItemKey;
            var _closure2_slot2 = backup;
            tangon = entity.wrapChildren;
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00008_ip = 54; continue _fun00007 }
 47:
            tangon = _closure1_slot7;
 54:
            oscard = entity.lazyCleanUpDelay;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = zuuluu;
            var _closure2_slot5 = zuuluu;
            var _closure2_slot6 = zuuluu;
            var _closure2_slot7 = zuuluu;
            option = _closure1_slot1;
            golfie = option.useRef;
            entity = -1;
            entity = golfie.bind(option)(entity);
            _closure2_slot4 = entity;
            verify = _closure1_slot1;
            option = verify.useLayoutEffect;
            golfie = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot4;
                    zuuluu = michal.current;
                    michal = -1;
                    if(!(michal !== zuuluu)) { _fun00010_ip = 46; continue _fun00009 }
 22:
                    michal = global;
                    zuuluu = michal.clearTimeout;
                    entity = _closure2_slot4;
                    michal = entity.current;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 46:
                    entity = undefined;
                    return entity;
                }
            };
            entity = new Array(0);
            entity = option.bind(verify)(golfie, entity);
            option = _closure1_slot1;
            golfie = option.useState;
            entity = _closure1_slot4;
            golfie = golfie.bind(option)(entity);
            entity = _closure1_slot0;
            offset = 2;
            entity = entity.bind(zuuluu)(golfie, offset);
            verify = 1;
            entity = entity[verify];
            _closure2_slot5 = entity;
            option = _closure1_slot1;
            golfie = option.useRef;
            entity = null;
            golfie = golfie.bind(option)(entity);
            _closure2_slot6 = golfie;
            romeon = _closure1_slot1;
            option = romeon.useMemo;
            golfie = new Array(4);
            golfie[0] = report;
            golfie[1] = backup;
            golfie[2] = foxtra;
            golfie[3] = oscard;
            oscard = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = global;
                    tangon = entity.Set;
                    michal = _closure2_slot6;
                    report = michal.current;
                    golfie = null;
                    zuuluu = golfie == report;
                    oscard = undefined;
                    michal = undefined;
                    if(zuuluu) { _fun00012_ip = 44; continue _fun00011 }
 35:
                    zuuluu = report.keys;
                    michal = zuuluu.bind(report)();
 44:
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    echoed = zuuluu;
                    result = michal;
                    michal = new echoed[tangon](result, output);
                    zuuluu = michal instanceof Object ? michal : zuuluu;
                    var _closure3_slot0 = zuuluu;
                    tangon = entity.Map;
                    entity = _closure2_slot6;
                    result = entity.current;
                    michal = tangon.prototype;
                    michal = Object.create(michal, {constructor: {value: tangon}});
                    echoed = michal;
                    entity = new echoed[tangon](result, output);
                    entity = entity instanceof Object ? entity : michal;
                    var _closure3_slot1 = entity;
                    offset = function() { // Original name: _loop
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            oscard = _closure2_slot2;
                            tangon = _closure3_slot2;
                            entity = undefined;
                            tangon = oscard.bind(entity)(tangon);
                            var _closure4_slot0 = tangon;
                            golfie = _closure3_slot1;
                            oscard = golfie.get;
                            golfie = oscard.bind(golfie)(tangon);
                            option = null;
                            if(!(option != golfie)) { _fun00014_ip = 209; continue _fun00013 }
 50:
                            verify = golfie.item;
                            oscard = _closure3_slot2;
                            if(!(verify === oscard)) { _fun00014_ip = 105; continue _fun00013 }
 63:
                            verify = golfie.renderItem;
                            oscard = _closure2_slot1;
                            if(!(verify === oscard)) { _fun00014_ip = 105; continue _fun00013 }
 77:
                            offset = golfie.state;
                            oscard = _closure1_slot3;
                            verify = oscard.YEETED;
                            oscard = golfie;
                            if(!(offset === verify)) { _fun00014_ip = 309; continue _fun00013 }
 105:
                            offset = golfie.cleanUp;
                            romeon = golfie.state;
                            yankee = _closure1_slot3;
                            yankee = yankee.YEETED;
                            if(!(romeon !== yankee)) { _fun00014_ip = 140; continue _fun00013 }
 133:
                            yankee = golfie.state;
                            _fun00014_ip = 150; continue _fun00013;
 140:
                            verify = _closure1_slot3;
                            yankee = verify.ENTERED;
 150:
                            verify = _closure2_slot1;
                            sizing = _closure3_slot2;
                            backup = golfie.cleanUp;
                            result = undefined;
                            output = tangon;
                            kiloes = yankee;
                            romeon = result[verify](output, sizing, kiloes, backup, foxtra);
                            golfie = {};
                            foxtra = _closure3_slot2;
                            golfie['item'] = foxtra;
                            golfie['children'] = romeon;
                            golfie['state'] = yankee;
                            golfie['cleanUp'] = offset;
                            golfie['renderItem'] = verify;
                            oscard = golfie;
                            _fun00014_ip = 309; continue _fun00013;
 209:
                            golfie = _closure2_slot6;
                            golfie = golfie.current;
                            if(!(option == golfie)) { _fun00014_ip = 237; continue _fun00013 }
 222:
                            golfie = _closure1_slot3;
                            option = golfie.MOUNTED;
                            _fun00014_ip = 250; continue _fun00013;
 237:
                            golfie = _closure1_slot3;
                            option = golfie.ENTERED;
 250:
                            golfie = function() { // Original name: _cleanUp
                                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                    entity = _closure2_slot6;
                                    golfie = entity.current;
                                    tangon = null;
                                    report = tangon == golfie;
                                    entity = undefined;
                                    zuuluu = undefined;
                                    if(report) { _fun00016_ip = 42; continue _fun00015 }
 25:
                                    oscard = golfie.get;
                                    report = _closure4_slot0;
                                    zuuluu = oscard.bind(golfie)(report);
 42:
                                    if(!(tangon != zuuluu)) { _fun00016_ip = 177; continue _fun00015 }
 49:
                                    report = zuuluu.state;
                                    zuuluu = _closure1_slot3;
                                    zuuluu = zuuluu.YEETED;
                                    if(!(report === zuuluu)) { _fun00016_ip = 177; continue _fun00015 }
 71:
                                    zuuluu = _closure2_slot6;
                                    oscard = zuuluu.current;
                                    if(!(tangon != oscard)) { _fun00016_ip = 101; continue _fun00015 }
 84:
                                    report = oscard.delete;
                                    zuuluu = _closure4_slot0;
                                    zuuluu = report.bind(oscard)(zuuluu);
 101:
                                    zuuluu = _closure2_slot3;
                                    if(!(tangon == zuuluu)) { _fun00016_ip = 122; continue _fun00015 }
 109:
                                    tangon = _closure2_slot5;
                                    zuuluu = {};
                                    zuuluu = tangon.bind(entity)(zuuluu);
                                    _fun00016_ip = 177; continue _fun00015;
 122:
                                    tangon = global;
                                    report = tangon.clearTimeout;
                                    zuuluu = _closure2_slot4;
                                    zuuluu = zuuluu.current;
                                    zuuluu = report.bind(entity)(zuuluu);
                                    zuuluu = _closure2_slot4;
                                    report = tangon.setTimeout;
                                    tangon = _closure2_slot3;
                                    michal = function() {
                                        zuuluu = _closure2_slot5;
                                        michal = undefined;
                                        entity = {};
                                        entity = zuuluu.bind(michal)(entity);
                                        return entity;
                                    };
                                    michal = report.bind(entity)(michal, tangon);
                                    zuuluu['current'] = michal;
 177:
                                    return entity;
                                }
                            };
                            report = _closure2_slot1;
                            sizing = _closure3_slot2;
                            result = undefined;
                            output = tangon;
                            kiloes = option;
                            backup = golfie;
                            verify = result[report](output, sizing, kiloes, backup, foxtra);
                            zuuluu = {};
                            offset = _closure3_slot2;
                            zuuluu['item'] = offset;
                            zuuluu['children'] = verify;
                            zuuluu['state'] = option;
                            zuuluu['cleanUp'] = golfie;
                            zuuluu['renderItem'] = report;
                            oscard = zuuluu;
 309:
                            report = _closure3_slot1;
                            zuuluu = report.set;
                            zuuluu = zuuluu.bind(report)(tangon, oscard);
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.delete;
                            michal = michal.bind(zuuluu)(tangon);
                            return entity;
                        }
                    };
                    tangon = _closure1_slot5;
                    michal = _closure2_slot0;
                    verify = tangon.bind(oscard)(michal);
                    tangon = verify.bind(oscard)();
                    michal = tangon.done;
                    if(michal) { _fun00012_ip = 171; continue _fun00011 }
 143:
                    michal = tangon.value;
                    var _closure3_slot2 = michal;
                    michal = offset.bind(oscard)();
                    romeon = verify.bind(oscard)();
                    michal = romeon.done;
                    tangon = romeon;
                    if(!michal) { _fun00012_ip = 143; continue _fun00011 }
 171:
                    michal = _closure1_slot5;
                    tangon = michal.bind(oscard)(zuuluu);
                    zuuluu = tangon.bind(oscard)();
                    michal = zuuluu.done;
                    if(michal) { _fun00012_ip = 392; continue _fun00011 }
 195:
                    offset = zuuluu.value;
                    michal = entity.get;
                    romeon = michal.bind(entity)(offset);
                    if(!(golfie != romeon)) { _fun00012_ip = 374; continue _fun00011 }
 217:
                    verify = romeon.state;
                    michal = _closure1_slot3;
                    michal = michal.YEETED;
                    if(!(verify === michal)) { _fun00012_ip = 263; continue _fun00011 }
 236:
                    verify = romeon.renderItem;
                    michal = _closure2_slot1;
                    if(!(verify === michal)) { _fun00012_ip = 263; continue _fun00011 }
 250:
                    michal = entity.set;
                    michal = michal.bind(entity)(offset, romeon);
                    _fun00012_ip = 374; continue _fun00011;
 263:
                    michal = romeon.item;
                    yankee = romeon.cleanUp;
                    verify = {};
                    verify['item'] = michal;
                    michal = _closure2_slot1;
                    output = romeon.item;
                    foxtra = _closure1_slot3;
                    sizing = foxtra.YEETED;
                    kiloes = romeon.cleanUp;
                    echoed = undefined;
                    result = offset;
                    romeon = echoed[michal](result, output, sizing, kiloes, backup);
                    verify['children'] = romeon;
                    romeon = _closure1_slot3;
                    romeon = romeon.YEETED;
                    verify['state'] = romeon;
                    verify['cleanUp'] = yankee;
                    verify['renderItem'] = michal;
                    michal = verify.children;
                    if(!(golfie == michal)) { _fun00012_ip = 363; continue _fun00011 }
 351:
                    michal = entity.delete;
                    michal = michal.bind(entity)(offset);
                    _fun00012_ip = 374; continue _fun00011;
 363:
                    michal = entity.set;
                    michal = michal.bind(entity)(offset, verify);
 374:
                    verify = tangon.bind(oscard)();
                    michal = verify.done;
                    zuuluu = verify;
                    if(!michal) { _fun00012_ip = 195; continue _fun00011 }
 392:
                    return entity;
                }
            };
            golfie = option.bind(romeon)(oscard, golfie);
            _closure2_slot7 = golfie;
            romeon = _closure1_slot1;
            option = romeon.useInsertionEffect;
            oscard = new Array(1);
            oscard[0] = golfie;
            michal = function() {
                michal = _closure2_slot6;
                entity = _closure2_slot7;
                michal['current'] = entity;
                entity = function() {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = _closure2_slot6;
                        zuuluu = entity.current;
                        entity = null;
                        michal = entity == zuuluu;
                        entity = undefined;
                        if(michal) { _fun00018_ip = 33; continue _fun00017 }
 23:
                        michal = zuuluu.clear;
                        entity = michal.bind(zuuluu)();
 33:
                        return entity;
                    }
                };
                return entity;
            };
            michal = option.bind(romeon)(michal, oscard);
            michal = new Array(0);
            oscard = _closure1_slot5;
            option = oscard.bind(zuuluu)(golfie);
            golfie = option.bind(zuuluu)();
            oscard = golfie.done;
            if(oscard) { _fun00008_ip = 341; continue _fun00007 }
 292:
            romeon = golfie.value;
            oscard = _closure1_slot0;
            oscard = oscard.bind(zuuluu)(romeon, offset);
            oscard = oscard[verify];
            romeon = michal.push;
            oscard = oscard.children;
            oscard = romeon.bind(michal)(oscard);
            romeon = option.bind(zuuluu)();
            oscard = romeon.done;
            golfie = romeon;
            if(!oscard) { _fun00008_ip = 292; continue _fun00007 }
 341:
            golfie = michal.length;
            oscard = 0;
            oscard = golfie > oscard;
            entity = null;
            if(!oscard) { _fun00008_ip = 363; continue _fun00007 }
 357:
            entity = tangon.bind(zuuluu)(michal, report);
 363:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = function() { // Original name: getSingleItemKey
        entity = 'key';
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    yankee = 0;
    oscard = option[yankee];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(oscard);
    var _closure1_slot0 = report;
    offset = 1;
    oscard = option[offset];
    report = argCor;
    report = report.bind(entity)(oscard);
    var _closure1_slot1 = report;
    verify = 2;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot2 = report;
    report = {};
    report['MOUNTED'] = yankee;
    oscard = 'MOUNTED';
    report[yankee] = oscard;
    report['ENTERED'] = offset;
    oscard = 'ENTERED';
    report[offset] = oscard;
    report['YEETED'] = verify;
    oscard = 'YEETED';
    report[verify] = oscard;
    var _closure1_slot3 = report;
    oscard = {};
    var _closure1_slot4 = oscard;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'design/components/TransitionGroup/TransitionGroup.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['TransitionStates'] = report;
    zuuluu['TransitionGroup'] = tangon;
    michal = function(argFoo) { // Original name: TransitionItem
        entity = argFoo;
        golfie = entity.item;
        var _closure2_slot0 = golfie;
        report = entity.renderItem;
        oscard = _closure1_slot1;
        tangon = oscard.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = golfie;
        michal = function() {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity == zuuluu)) { _fun00020_ip = 19; continue _fun00019 }
 13:
                entity = new Array(0);
                _fun00020_ip = 34; continue _fun00019;
 19:
                zuuluu = _closure2_slot0;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 34:
                return entity;
            }
        };
        oscard = tangon.bind(oscard)(michal, zuuluu);
        tangon = _closure1_slot2;
        zuuluu = _closure1_slot8;
        michal = {};
        michal['items'] = oscard;
        michal['renderItem'] = report;
        entity = _closure1_slot9;
        michal['getItemKey'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['TransitionItem'] = michal;
    return entity;
})();