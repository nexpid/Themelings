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
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot7;
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
            golfie = _closure1_slot7;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: wrapChildrenDefault
        entity = argFoo;
        return entity;
    };
    var _closure1_slot8 = entity;
    tangon = function(argFoo) { // Original name: TransitionGroup
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            option = entity.items;
            var _closure2_slot0 = option;
            foxtra = entity.renderItem;
            var _closure2_slot1 = foxtra;
            backup = entity.getItemKey;
            var _closure2_slot2 = backup;
            golfie = entity.wrapChildren;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00008_ip = 54; continue _fun00007 }
 47:
            golfie = _closure1_slot8;
 54:
            zuuluu = entity.lazyCleanUpDelay;
            var _closure2_slot3 = zuuluu;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            verify = _closure1_slot1;
            oscard = verify.useRef;
            report = -1;
            report = oscard.bind(verify)(report);
            _closure2_slot4 = report;
            verify = _closure1_slot1;
            oscard = verify.useLayoutEffect;
            report = function() {
                entity = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    entity = _closure2_slot4;
                    michal = entity.current;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                return entity;
            };
            report = oscard.bind(verify)(report);
            verify = _closure1_slot1;
            oscard = verify.useState;
            report = _closure1_slot5;
            oscard = oscard.bind(verify)(report);
            report = _closure1_slot0;
            yankee = 2;
            report = report.bind(tangon)(oscard, yankee);
            offset = 1;
            report = report[offset];
            _closure2_slot5 = report;
            verify = _closure1_slot1;
            oscard = verify.useRef;
            report = null;
            oscard = oscard.bind(verify)(report);
            _closure2_slot6 = oscard;
            romeon = _closure1_slot1;
            verify = romeon.useMemo;
            oscard = new Array(4);
            oscard[0] = option;
            oscard[1] = backup;
            oscard[2] = foxtra;
            oscard[3] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = global;
                    tangon = entity.Set;
                    michal = _closure2_slot6;
                    report = michal.current;
                    golfie = null;
                    zuuluu = golfie == report;
                    oscard = undefined;
                    michal = undefined;
                    if(zuuluu) { _fun00010_ip = 44; continue _fun00009 }
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
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
                            if(!(option != golfie)) { _fun00012_ip = 209; continue _fun00011 }
 50:
                            verify = golfie.item;
                            oscard = _closure3_slot2;
                            if(!(verify === oscard)) { _fun00012_ip = 105; continue _fun00011 }
 63:
                            verify = golfie.renderItem;
                            oscard = _closure2_slot1;
                            if(!(verify === oscard)) { _fun00012_ip = 105; continue _fun00011 }
 77:
                            offset = golfie.state;
                            oscard = _closure1_slot4;
                            verify = oscard.YEETED;
                            oscard = golfie;
                            if(!(offset === verify)) { _fun00012_ip = 309; continue _fun00011 }
 105:
                            offset = golfie.cleanUp;
                            romeon = golfie.state;
                            yankee = _closure1_slot4;
                            yankee = yankee.YEETED;
                            if(!(romeon !== yankee)) { _fun00012_ip = 140; continue _fun00011 }
 133:
                            yankee = golfie.state;
                            _fun00012_ip = 150; continue _fun00011;
 140:
                            verify = _closure1_slot4;
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
                            _fun00012_ip = 309; continue _fun00011;
 209:
                            golfie = _closure2_slot6;
                            golfie = golfie.current;
                            if(!(option == golfie)) { _fun00012_ip = 237; continue _fun00011 }
 222:
                            golfie = _closure1_slot4;
                            option = golfie.MOUNTED;
                            _fun00012_ip = 250; continue _fun00011;
 237:
                            golfie = _closure1_slot4;
                            option = golfie.ENTERED;
 250:
                            golfie = function() { // Original name: _cleanUp
                                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                    entity = _closure2_slot6;
                                    golfie = entity.current;
                                    tangon = null;
                                    report = tangon == golfie;
                                    entity = undefined;
                                    zuuluu = undefined;
                                    if(report) { _fun00014_ip = 42; continue _fun00013 }
 25:
                                    oscard = golfie.get;
                                    report = _closure4_slot0;
                                    zuuluu = oscard.bind(golfie)(report);
 42:
                                    if(!(tangon != zuuluu)) { _fun00014_ip = 177; continue _fun00013 }
 49:
                                    report = zuuluu.state;
                                    zuuluu = _closure1_slot4;
                                    zuuluu = zuuluu.YEETED;
                                    if(!(report === zuuluu)) { _fun00014_ip = 177; continue _fun00013 }
 71:
                                    zuuluu = _closure2_slot6;
                                    oscard = zuuluu.current;
                                    if(!(tangon != oscard)) { _fun00014_ip = 101; continue _fun00013 }
 84:
                                    report = oscard.delete;
                                    zuuluu = _closure4_slot0;
                                    zuuluu = report.bind(oscard)(zuuluu);
 101:
                                    zuuluu = _closure2_slot3;
                                    if(!(tangon == zuuluu)) { _fun00014_ip = 122; continue _fun00013 }
 109:
                                    tangon = _closure2_slot5;
                                    zuuluu = {};
                                    zuuluu = tangon.bind(entity)(zuuluu);
                                    _fun00014_ip = 177; continue _fun00013;
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
                    tangon = _closure1_slot6;
                    michal = _closure2_slot0;
                    verify = tangon.bind(oscard)(michal);
                    tangon = verify.bind(oscard)();
                    michal = tangon.done;
                    if(michal) { _fun00010_ip = 171; continue _fun00009 }
 143:
                    michal = tangon.value;
                    var _closure3_slot2 = michal;
                    michal = offset.bind(oscard)();
                    romeon = verify.bind(oscard)();
                    michal = romeon.done;
                    tangon = romeon;
                    if(!michal) { _fun00010_ip = 143; continue _fun00009 }
 171:
                    michal = _closure1_slot6;
                    tangon = michal.bind(oscard)(zuuluu);
                    zuuluu = tangon.bind(oscard)();
                    michal = zuuluu.done;
                    if(michal) { _fun00010_ip = 392; continue _fun00009 }
 195:
                    offset = zuuluu.value;
                    michal = entity.get;
                    romeon = michal.bind(entity)(offset);
                    if(!(golfie != romeon)) { _fun00010_ip = 374; continue _fun00009 }
 217:
                    verify = romeon.state;
                    michal = _closure1_slot4;
                    michal = michal.YEETED;
                    if(!(verify === michal)) { _fun00010_ip = 263; continue _fun00009 }
 236:
                    verify = romeon.renderItem;
                    michal = _closure2_slot1;
                    if(!(verify === michal)) { _fun00010_ip = 263; continue _fun00009 }
 250:
                    michal = entity.set;
                    michal = michal.bind(entity)(offset, romeon);
                    _fun00010_ip = 374; continue _fun00009;
 263:
                    michal = romeon.item;
                    yankee = romeon.cleanUp;
                    verify = {};
                    verify['item'] = michal;
                    michal = _closure2_slot1;
                    output = romeon.item;
                    foxtra = _closure1_slot4;
                    sizing = foxtra.YEETED;
                    kiloes = romeon.cleanUp;
                    echoed = undefined;
                    result = offset;
                    romeon = echoed[michal](result, output, sizing, kiloes, backup);
                    verify['children'] = romeon;
                    romeon = _closure1_slot4;
                    romeon = romeon.YEETED;
                    verify['state'] = romeon;
                    verify['cleanUp'] = yankee;
                    verify['renderItem'] = michal;
                    michal = verify.children;
                    if(!(golfie == michal)) { _fun00010_ip = 363; continue _fun00009 }
 351:
                    michal = entity.delete;
                    michal = michal.bind(entity)(offset);
                    _fun00010_ip = 374; continue _fun00009;
 363:
                    michal = entity.set;
                    michal = michal.bind(entity)(offset, verify);
 374:
                    verify = tangon.bind(oscard)();
                    michal = verify.done;
                    zuuluu = verify;
                    if(!michal) { _fun00010_ip = 195; continue _fun00009 }
 392:
                    return entity;
                }
            };
            zuuluu = verify.bind(romeon)(zuuluu, oscard);
            _closure2_slot7 = zuuluu;
            romeon = _closure1_slot1;
            verify = romeon.useInsertionEffect;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            michal = function() {
                michal = _closure2_slot6;
                entity = _closure2_slot7;
                michal['current'] = entity;
                entity = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = _closure2_slot6;
                        zuuluu = entity.current;
                        entity = null;
                        michal = entity == zuuluu;
                        entity = undefined;
                        if(michal) { _fun00016_ip = 33; continue _fun00015 }
 23:
                        michal = zuuluu.clear;
                        entity = michal.bind(zuuluu)();
 33:
                        return entity;
                    }
                };
                return entity;
            };
            michal = verify.bind(romeon)(michal, oscard);
            oscard = new Array(0);
            michal = _closure1_slot6;
            verify = michal.bind(tangon)(zuuluu);
            zuuluu = verify.bind(tangon)();
            michal = zuuluu.done;
            if(michal) { _fun00008_ip = 336; continue _fun00007 }
 287:
            romeon = zuuluu.value;
            michal = _closure1_slot0;
            michal = michal.bind(tangon)(romeon, yankee);
            michal = michal[offset];
            romeon = oscard.push;
            michal = michal.children;
            michal = romeon.bind(oscard)(michal);
            romeon = verify.bind(tangon)();
            michal = romeon.done;
            zuuluu = romeon;
            if(!michal) { _fun00008_ip = 287; continue _fun00007 }
 336:
            zuuluu = _closure1_slot3;
            michal = _closure1_slot2;
            entity = {};
            offset = oscard.length;
            verify = 0;
            verify = offset > verify;
            report = null;
            if(!verify) { _fun00008_ip = 368; continue _fun00007 }
 362:
            report = golfie.bind(tangon)(oscard, option);
 368:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = function() { // Original name: getSingleItemKey
        entity = 'key';
        return entity;
    };
    var _closure1_slot10 = entity;
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
    report = report.Fragment;
    var _closure1_slot2 = report;
    report = option[verify];
    report = golfie.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot3 = report;
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
    var _closure1_slot4 = report;
    oscard = {};
    var _closure1_slot5 = oscard;
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
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity == zuuluu)) { _fun00018_ip = 19; continue _fun00017 }
 13:
                entity = new Array(0);
                _fun00018_ip = 34; continue _fun00017;
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
        tangon = _closure1_slot3;
        zuuluu = _closure1_slot9;
        michal = {};
        michal['items'] = oscard;
        michal['renderItem'] = report;
        entity = _closure1_slot10;
        michal['getItemKey'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    zuuluu['TransitionItem'] = michal;
    return entity;
})();