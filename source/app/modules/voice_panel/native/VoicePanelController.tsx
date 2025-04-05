// app/modules/voice_panel/native/VoicePanelController.tsx
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
            verify = _closure1_slot46;
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
            golfie = _closure1_slot46;
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
    var _closure1_slot45 = entity;
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
    var _closure1_slot46 = entity;
    entity = function(argFoo) { // Original name: useLayoutManagerState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            verify = entity.windowDimensions;
            var _closure2_slot0 = verify;
            yankee = entity.safeArea;
            var _closure2_slot1 = yankee;
            kiloes = entity.contentDimensions;
            var _closure2_slot2 = kiloes;
            tangon = entity.isConnected;
            var _closure2_slot3 = tangon;
            romeon = entity.layoutManager;
            var _closure2_slot4 = romeon;
            golfie = entity.items;
            backup = entity.pushToTalk;
            entity = undefined;
            var _closure2_slot13 = entity;
            option = _closure1_slot4;
            oscard = option.useState;
            report = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 32;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.getWindowDimensions;
                entity = entity.bind(michal)();
                zuuluu = entity.width;
                michal = entity.height;
                entity = {};
                entity['width'] = zuuluu;
                entity['height'] = michal;
                michal = zuuluu > michal;
                entity['landscape'] = michal;
                return entity;
            };
            oscard = oscard.bind(option)(report);
            report = _closure1_slot3;
            echoed = 2;
            report = report.bind(entity)(oscard, echoed);
            offset = 0;
            option = report[offset];
            var _closure2_slot5 = option;
            oscard = 1;
            sizing = report[oscard];
            var _closure2_slot6 = sizing;
            update = _closure1_slot4;
            result = update.useState;
            foxtra = _closure1_slot0;
            output = _closure1_slot2;
            report = 33;
            report = output[report];
            source = foxtra.bind(entity)(report);
            report = source.getSafeAreaInsets;
            report = report.bind(source)();
            result = result.bind(update)(report);
            report = _closure1_slot3;
            report = report.bind(entity)(result, echoed);
            offset = report[offset];
            var _closure2_slot7 = offset;
            report = report[oscard];
            var _closure2_slot8 = report;
            oscard = 35;
            oscard = output[oscard];
            foxtra = foxtra.bind(entity)(oscard);
            oscard = foxtra.useManagerSubscription;
            foxtra = oscard.bind(foxtra)(romeon);
            var _closure2_slot9 = foxtra;
            result = _closure1_slot4;
            output = result.useRef;
            oscard = {};
            echoed = -1;
            oscard['timeout'] = echoed;
            oscard['layoutKey'] = foxtra;
            oscard['connected'] = tangon;
            oscard['windowState'] = option;
            oscard['safeAreaState'] = offset;
            echoed = {'width': 0, 'height': 0};
            oscard['contentDimensions'] = echoed;
            output = output.bind(result)(oscard);
            var _closure2_slot10 = output;
            oscard = {};
            oscard['isConnected'] = tangon;
            oscard['updateRefs'] = output;
            oscard['windowState'] = option;
            oscard['safeAreaState'] = offset;
            oscard['setWindowState'] = sizing;
            oscard['setSafeAreaState'] = report;
            report = function(argFoo) { // Original name: useUpdateLayoutManagerState
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.isConnected;
                    michal = zuuluu.updateRefs;
                    var _closure3_slot0 = michal;
                    yankee = zuuluu.windowState;
                    offset = zuuluu.safeAreaState;
                    report = zuuluu.setWindowState;
                    zuuluu = zuuluu.setSafeAreaState;
                    oscard = michal.current;
                    oscard = oscard.connected;
                    oscard = tangon === oscard;
                    if(!oscard) { _fun00010_ip = 111; continue _fun00009 }
 63:
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    golfie = 23;
                    option = option[golfie];
                    golfie = undefined;
                    verify = verify.bind(golfie)(option);
                    option = verify.cheapWorkletShallowEqual;
                    golfie = michal.current;
                    golfie = golfie.windowState;
                    oscard = option.bind(verify)(golfie, yankee);
 111:
                    if(!oscard) { _fun00010_ip = 162; continue _fun00009 }
 114:
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    golfie = 23;
                    option = option[golfie];
                    golfie = undefined;
                    verify = verify.bind(golfie)(option);
                    option = verify.cheapWorkletShallowEqual;
                    golfie = michal.current;
                    golfie = golfie.safeAreaState;
                    oscard = option.bind(verify)(golfie, offset);
 162:
                    if(oscard) { _fun00010_ip = 202; continue _fun00009 }
 165:
                    michal = michal.current;
                    michal['connected'] = tangon;
                    michal = undefined;
                    tangon = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = argFoo;
                            oscard = _closure1_slot0;
                            golfie = _closure1_slot2;
                            michal = 32;
                            michal = golfie[michal];
                            report = undefined;
                            zuuluu = oscard.bind(report)(michal);
                            michal = zuuluu.getWindowDimensions;
                            michal = michal.bind(zuuluu)();
                            offset = michal.width;
                            verify = michal.height;
                            zuuluu = _closure3_slot0;
                            option = zuuluu.current;
                            tangon = {};
                            tangon['width'] = offset;
                            tangon['height'] = verify;
                            verify = offset > verify;
                            tangon['landscape'] = verify;
                            option['windowState'] = tangon;
                            tangon = 23;
                            tangon = golfie[tangon];
                            report = oscard.bind(report)(tangon);
                            tangon = report.cheapWorkletShallowEqual;
                            zuuluu = zuuluu.current;
                            zuuluu = zuuluu.windowState;
                            zuuluu = tangon.bind(report)(entity, zuuluu);
                            if(zuuluu) { _fun00012_ip = 138; continue _fun00011 }
 123:
                            michal = _closure3_slot0;
                            michal = michal.current;
                            entity = michal.windowState;
 138:
                            return entity;
                        }
                    };
                    tangon = report.bind(michal)(tangon);
                    entity = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            entity = argFoo;
                            zuuluu = _closure3_slot0;
                            option = zuuluu.current;
                            oscard = _closure1_slot0;
                            golfie = _closure1_slot2;
                            tangon = 33;
                            tangon = golfie[tangon];
                            report = undefined;
                            verify = oscard.bind(report)(tangon);
                            tangon = verify.getSafeAreaInsets;
                            tangon = tangon.bind(verify)();
                            option['safeAreaState'] = tangon;
                            tangon = 23;
                            tangon = golfie[tangon];
                            report = oscard.bind(report)(tangon);
                            tangon = report.cheapWorkletShallowEqual;
                            zuuluu = zuuluu.current;
                            zuuluu = zuuluu.safeAreaState;
                            zuuluu = tangon.bind(report)(entity, zuuluu);
                            if(zuuluu) { _fun00014_ip = 109; continue _fun00013 }
 94:
                            michal = _closure3_slot0;
                            michal = michal.current;
                            entity = michal.safeAreaState;
 109:
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(michal)(entity);
 202:
                    entity = undefined;
                    return entity;
                }
            };
            report = report.bind(entity)(oscard);
            output = _closure1_slot4;
            sizing = output.useCallback;
            oscard = function() {
                michal = global;
                report = michal.clearTimeout;
                zuuluu = _closure2_slot10;
                entity = zuuluu.current;
                tangon = entity.timeout;
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                zuuluu = zuuluu.current;
                report = michal.setTimeout;
                tangon = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    entity = _closure2_slot10;
                    entity = entity.current;
                    michal = entity.timeout;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 42;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.batchUpdates;
                    michal = function() {
                        report = _closure2_slot6;
                        entity = undefined;
                        tangon = function(argFoo) {
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                entity = argFoo;
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot2;
                                michal = 23;
                                zuuluu = zuuluu[michal];
                                michal = undefined;
                                report = tangon.bind(michal)(zuuluu);
                                tangon = report.cheapWorkletShallowEqual;
                                zuuluu = _closure2_slot10;
                                zuuluu = zuuluu.current;
                                zuuluu = zuuluu.windowState;
                                zuuluu = tangon.bind(report)(zuuluu, entity);
                                if(zuuluu) { _fun00016_ip = 76; continue _fun00015 }
 61:
                                michal = _closure2_slot10;
                                michal = michal.current;
                                entity = michal.windowState;
 76:
                                return entity;
                            }
                        };
                        tangon = report.bind(entity)(tangon);
                        zuuluu = _closure2_slot8;
                        michal = function(argFoo) {
                            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                entity = argFoo;
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot2;
                                michal = 23;
                                zuuluu = zuuluu[michal];
                                michal = undefined;
                                report = tangon.bind(michal)(zuuluu);
                                tangon = report.cheapWorkletShallowEqual;
                                zuuluu = _closure2_slot10;
                                zuuluu = zuuluu.current;
                                zuuluu = zuuluu.safeAreaState;
                                zuuluu = tangon.bind(report)(zuuluu, entity);
                                if(zuuluu) { _fun00018_ip = 76; continue _fun00017 }
 61:
                                michal = _closure2_slot10;
                                michal = michal.current;
                                entity = michal.safeAreaState;
 76:
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = 60;
                michal = report.bind(entity)(tangon, michal);
                zuuluu['timeout'] = michal;
                return entity;
            };
            report = new Array(0);
            report = sizing.bind(output)(oscard, report);
            var _closure2_slot11 = report;
            result = _closure1_slot4;
            output = result.useLayoutEffect;
            sizing = new Array(1);
            sizing[0] = report;
            oscard = function() {
                tangon = function(argFoo) { // Original name: updateSafeAreas
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        report = argFoo;
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 23;
                        michal = michal[entity];
                        entity = undefined;
                        oscard = zuuluu.bind(entity)(michal);
                        tangon = oscard.cheapWorkletShallowEqual;
                        zuuluu = _closure2_slot10;
                        zuuluu = zuuluu.current;
                        zuuluu = zuuluu.safeAreaState;
                        zuuluu = tangon.bind(oscard)(zuuluu, report);
                        if(zuuluu) { _fun00020_ip = 96; continue _fun00019 }
 61:
                        zuuluu = _closure2_slot10;
                        tangon = zuuluu.current;
                        zuuluu = {};
                        option = zuuluu;
                        golfie = report;
                        report = copyDataProperties(option, golfie);
                        tangon['safeAreaState'] = zuuluu;
                        michal = _closure2_slot11;
                        michal = michal.bind(entity)();
 96:
                        return entity;
                    }
                };
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 43;
                golfie = oscard[zuuluu];
                zuuluu = undefined;
                golfie = report.bind(zuuluu)(golfie);
                golfie = golfie.bind(zuuluu)(tangon);
                var _closure3_slot0 = golfie;
                golfie = _closure1_slot0;
                michal = 33;
                michal = oscard[michal];
                golfie = golfie.bind(zuuluu)(michal);
                michal = golfie.getSafeAreaInsets;
                michal = michal.bind(golfie)();
                michal = tangon.bind(zuuluu)(michal);
                michal = function() { // Original name: updateWindowDimensions
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        michal = arguments[0];
                        entity = undefined;
                        if(!(michal === entity)) { _fun00022_ip = 42; continue _fun00021 }
 9:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        zuuluu = 32;
                        zuuluu = report[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.getWindowDimensions;
                        michal = zuuluu.bind(tangon)();
 42:
                        zuuluu = michal.width;
                        michal = michal.height;
                        tangon = {};
                        tangon['width'] = zuuluu;
                        tangon['height'] = michal;
                        michal = zuuluu > michal;
                        tangon['landscape'] = michal;
                        zuuluu = _closure1_slot0;
                        report = _closure1_slot2;
                        michal = 23;
                        michal = report[michal];
                        oscard = zuuluu.bind(entity)(michal);
                        report = oscard.cheapWorkletShallowEqual;
                        zuuluu = _closure2_slot10;
                        zuuluu = zuuluu.current;
                        zuuluu = zuuluu.windowState;
                        zuuluu = report.bind(oscard)(zuuluu, tangon);
                        if(zuuluu) { _fun00022_ip = 150; continue _fun00021 }
 127:
                        zuuluu = _closure2_slot10;
                        zuuluu = zuuluu.current;
                        zuuluu['windowState'] = tangon;
                        michal = _closure2_slot11;
                        michal = michal.bind(entity)();
 150:
                        return entity;
                    }
                };
                tangon = 44;
                tangon = oscard[tangon];
                tangon = report.bind(zuuluu)(tangon);
                tangon = tangon.bind(zuuluu)(michal);
                var _closure3_slot1 = tangon;
                michal = michal.bind(zuuluu)();
                entity = function() {
                    zuuluu = _closure3_slot0;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)();
                    michal = _closure3_slot1;
                    michal = michal.bind(entity)();
                    return entity;
                };
                return entity;
            };
            oscard = output.bind(result)(oscard, sizing);
            sizing = _closure1_slot4;
            oscard = sizing.useId;
            oscard = oscard.bind(sizing)();
            var _closure2_slot12 = oscard;
            result = _closure1_slot4;
            output = result.useLayoutEffect;
            sizing = new Array(2);
            sizing[0] = tangon;
            sizing[1] = oscard;
            oscard = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot3;
                    if(entity) { _fun00024_ip = 14; continue _fun00023 }
 10:
                    entity = undefined;
                    return entity;
 14:
                    michal = _closure1_slot10;
                    entity = michal.getState;
                    zuuluu = entity.bind(michal)();
                    michal = zuuluu.requestSafeAreaDisableLock;
                    entity = {};
                    tangon = _closure2_slot12;
                    entity['key'] = tangon;
                    tangon = true;
                    entity['lockEnabled'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = function() {
                        michal = _closure1_slot10;
                        entity = michal.getState;
                        zuuluu = entity.bind(michal)();
                        michal = zuuluu.requestSafeAreaDisableLock;
                        entity = {};
                        tangon = _closure2_slot12;
                        entity['key'] = tangon;
                        tangon = false;
                        entity['lockEnabled'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                }
            };
            oscard = output.bind(result)(oscard, sizing);
            output = _closure1_slot4;
            sizing = output.useLayoutEffect;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 32;
                    michal = report[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    michal = tangon.getWindowDimensions;
                    michal = michal.bind(tangon)();
                    oscard = michal.width;
                    michal = michal.height;
                    tangon = {};
                    tangon['width'] = oscard;
                    tangon['height'] = michal;
                    michal = oscard > michal;
                    tangon['landscape'] = michal;
                    michal = 23;
                    michal = report[michal];
                    oscard = zuuluu.bind(entity)(michal);
                    report = oscard.cheapWorkletShallowEqual;
                    zuuluu = _closure2_slot10;
                    zuuluu = zuuluu.current;
                    zuuluu = zuuluu.windowState;
                    zuuluu = report.bind(oscard)(zuuluu, tangon);
                    if(zuuluu) { _fun00026_ip = 132; continue _fun00025 }
 109:
                    zuuluu = _closure2_slot10;
                    zuuluu = zuuluu.current;
                    zuuluu['windowState'] = tangon;
                    michal = _closure2_slot11;
                    michal = michal.bind(entity)();
 132:
                    return entity;
                }
            };
            report = sizing.bind(output)(report, oscard);
            oscard = romeon.updateState;
            report = {};
            sizing = option.width;
            report['windowWidth'] = sizing;
            sizing = option.height;
            report['windowHeight'] = sizing;
            sizing = offset.left;
            report['safeAreaLeft'] = sizing;
            sizing = offset.right;
            report['safeAreaRight'] = sizing;
            sizing = offset.top;
            report['safeAreaTop'] = sizing;
            sizing = offset.bottom;
            report['safeAreaBottom'] = sizing;
            if(backup) { _fun00008_ip = 560; continue _fun00007 }
 554:
            backup = _closure1_slot18;
            _fun00008_ip = 564; continue _fun00007;
 560:
            backup = _closure1_slot19;
 564:
            report['controlBarSize'] = backup;
            report = oscard.bind(romeon)(golfie, report);
            report = romeon.getContentDimensions;
            backup = report.bind(romeon)();
            _closure2_slot13 = backup;
            golfie = _closure1_slot4;
            oscard = golfie.useLayoutEffect;
            report = new Array(9);
            report[0] = kiloes;
            report[1] = backup;
            report[2] = foxtra;
            report[3] = romeon;
            report[4] = yankee;
            report[5] = offset;
            report[6] = verify;
            report[7] = option;
            report[8] = tangon;
            tangon = function() {
                entity = _closure2_slot10;
                zuuluu = entity.current;
                entity = _closure2_slot9;
                zuuluu['layoutKey'] = entity;
                option = function() { // Original name: executeLayoutManagerEffect
                    michal = _closure2_slot4;
                    entity = michal.handleLayoutEffect;
                    entity = entity.bind(michal)();
                    return entity;
                };
                var _closure3_slot0 = option;
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                verify = 22;
                zuuluu = yankee[verify];
                entity = undefined;
                report = offset.bind(entity)(zuuluu);
                zuuluu = report.runOnUI;
                michal = function(argFoo) { // Original name: e
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        entity = argFoo;
                        option = entity.windowState;
                        report = entity.safeAreaState;
                        tangon = entity.contentState;
                        entity = _closure2_slot3;
                        if(!entity) { _fun00028_ip = 84; continue _fun00027 }
 31:
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot2;
                        michal = 23;
                        oscard = oscard[michal];
                        michal = undefined;
                        golfie = golfie.bind(michal)(oscard);
                        oscard = golfie.cheapWorkletShallowEqual;
                        verify = _closure2_slot2;
                        michal = verify.get;
                        michal = michal.bind(verify)();
                        michal = oscard.bind(golfie)(michal, tangon);
                        entity = !michal;
 84:
                        if(!entity) { _fun00028_ip = 101; continue _fun00027 }
 87:
                        michal = _closure2_slot2;
                        entity = michal.set;
                        entity = entity.bind(michal)(tangon);
 101:
                        oscard = _closure1_slot0;
                        entity = _closure1_slot2;
                        golfie = 23;
                        tangon = entity[golfie];
                        entity = undefined;
                        verify = oscard.bind(entity)(tangon);
                        oscard = verify.cheapWorkletShallowEqual;
                        offset = _closure2_slot0;
                        tangon = offset.get;
                        tangon = tangon.bind(offset)();
                        tangon = oscard.bind(verify)(tangon, option);
                        if(tangon) { _fun00028_ip = 168; continue _fun00027 }
 154:
                        oscard = _closure2_slot0;
                        tangon = oscard.set;
                        tangon = tangon.bind(oscard)(option);
 168:
                        oscard = _closure1_slot0;
                        tangon = _closure1_slot2;
                        tangon = tangon[golfie];
                        golfie = oscard.bind(entity)(tangon);
                        oscard = golfie.cheapWorkletShallowEqual;
                        option = _closure2_slot1;
                        tangon = option.get;
                        tangon = tangon.bind(option)();
                        tangon = oscard.bind(golfie)(tangon, report);
                        if(tangon) { _fun00028_ip = 227; continue _fun00027 }
 213:
                        tangon = _closure2_slot1;
                        zuuluu = tangon.set;
                        zuuluu = zuuluu.bind(tangon)(report);
 227:
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 22;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.runOnJS;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(tangon)(michal);
                        michal = michal.bind(entity)();
                        return entity;
                    }
                };
                golfie = {};
                romeon = _closure2_slot3;
                golfie['isConnected'] = romeon;
                romeon = 23;
                romeon = yankee[romeon];
                romeon = offset.bind(entity)(romeon);
                romeon = romeon.cheapWorkletShallowEqual;
                golfie['cheapWorkletShallowEqual'] = romeon;
                romeon = _closure2_slot2;
                golfie['contentDimensions'] = romeon;
                romeon = _closure2_slot0;
                golfie['windowDimensions'] = romeon;
                romeon = _closure2_slot1;
                golfie['safeArea'] = romeon;
                verify = yankee[verify];
                verify = offset.bind(entity)(verify);
                verify = verify.runOnJS;
                golfie['runOnJS'] = verify;
                golfie['executeLayoutManagerEffect'] = option;
                michal['__closure'] = golfie;
                golfie = 13791383688018.0;
                michal['__workletHash'] = golfie;
                oscard = _closure1_slot40;
                michal['__initData'] = oscard;
                zuuluu = zuuluu.bind(report)(michal);
                michal = {};
                report = _closure2_slot5;
                michal['windowState'] = report;
                report = _closure2_slot7;
                michal['safeAreaState'] = report;
                tangon = _closure2_slot13;
                michal['contentState'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            tangon = oscard.bind(golfie)(tangon, report);
            report = _closure1_slot4;
            tangon = report.useLayoutEffect;
            zuuluu = function() {
                entity = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    entity = _closure2_slot10;
                    entity = entity.current;
                    michal = entity.timeout;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                return entity;
            };
            michal = new Array(0);
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot47 = entity;
    entity = function(argFoo) { // Original name: useActivityOrientationState
        entity = argFoo;
        zuuluu = entity.channelId;
        var _closure2_slot0 = zuuluu;
        romeon = entity.isConnected;
        var _closure2_slot1 = romeon;
        yankee = entity.selectedMode;
        var _closure2_slot2 = yankee;
        verify = entity.manualFocusedItem;
        var _closure2_slot3 = verify;
        option = entity.isTextActivityInPanelMode;
        var _closure2_slot4 = option;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 30;
        tangon = tangon[entity];
        entity = undefined;
        golfie = report.bind(entity)(tangon);
        oscard = golfie.useStateFromStoresObject;
        tangon = _closure1_slot7;
        report = new Array(1);
        report[0] = tangon;
        tangon = function() {
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tangon = _closure1_slot7;
                michal = tangon.getSelfEmbeddedActivityForChannel;
                entity = _closure2_slot0;
                report = michal.bind(tangon)(entity);
                tangon = null;
                entity = tangon == report;
                oscard = undefined;
                if(entity) { _fun00030_ip = 41; continue _fun00029 }
 36:
                oscard = report.applicationId;
 41:
                entity = {};
                entity['applicationId'] = oscard;
                golfie = tangon == report;
                michal = undefined;
                if(golfie) { _fun00030_ip = 62; continue _fun00029 }
 56:
                michal = report.compositeInstanceId;
 62:
                entity['instanceId'] = michal;
                if(!(tangon != oscard)) { _fun00030_ip = 90; continue _fun00029 }
 71:
                report = _closure1_slot7;
                michal = report.getOrientationLockStateForApp;
                michal = michal.bind(report)(oscard);
                if(!(tangon == michal)) { _fun00030_ip = 100; continue _fun00029 }
 90:
                zuuluu = _closure1_slot25;
                michal = zuuluu.UNLOCKED;
 100:
                entity['activityOrientationLockState'] = michal;
                return entity;
            }
        };
        tangon = oscard.bind(golfie)(report, tangon);
        foxtra = tangon.applicationId;
        var _closure2_slot5 = foxtra;
        offset = tangon.activityOrientationLockState;
        var _closure2_slot6 = offset;
        tangon = tangon.instanceId;
        var _closure2_slot7 = tangon;
        golfie = _closure1_slot4;
        oscard = golfie.useLayoutEffect;
        report = new Array(7);
        report[0] = foxtra;
        report[1] = romeon;
        report[2] = yankee;
        report[3] = offset;
        report[4] = verify;
        report[5] = option;
        report[6] = tangon;
        tangon = function() {
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                entity = _closure2_slot4;
                if(entity) { _fun00032_ip = 406; continue _fun00031 }
 13:
                tangon = _closure2_slot2;
                zuuluu = _closure1_slot16;
                zuuluu = zuuluu.PANEL;
                if(!(tangon === zuuluu)) { _fun00032_ip = 41; continue _fun00031 }
 34:
                zuuluu = _closure2_slot1;
                if(zuuluu) { _fun00032_ip = 78; continue _fun00031 }
 41:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 37;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                tangon = report.bind(zuuluu)(tangon);
                zuuluu = tangon.restoreDefaultOrientation;
                zuuluu = zuuluu.bind(tangon)();
                _fun00032_ip = 406; continue _fun00031;
 78:
                tangon = _closure2_slot5;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00032_ip = 364; continue _fun00031 }
 91:
                report = _closure2_slot3;
                oscard = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 45;
                zuuluu = tangon[zuuluu];
                tangon = undefined;
                golfie = oscard.bind(tangon)(zuuluu);
                oscard = golfie.getEmbeddedActivityParticipantId;
                zuuluu = {};
                option = _closure2_slot5;
                zuuluu['applicationId'] = option;
                option = _closure2_slot7;
                zuuluu['instanceId'] = option;
                zuuluu = oscard.bind(golfie)(zuuluu);
                if(!(report === zuuluu)) { _fun00032_ip = 364; continue _fun00031 }
 154:
                zuuluu = _closure2_slot6;
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 36;
                michal = oscard[michal];
                report = report.bind(tangon)(michal);
                michal = report.isIpadOS;
                michal = michal.bind(report)();
                if(michal) { _fun00032_ip = 406; continue _fun00031 }
 194:
                michal = _closure1_slot25;
                michal = michal.UNLOCKED;
                if(!(michal !== zuuluu)) { _fun00032_ip = 322; continue _fun00031 }
 208:
                michal = _closure1_slot25;
                michal = michal.PORTRAIT;
                if(!(michal !== zuuluu)) { _fun00032_ip = 282; continue _fun00031 }
 222:
                michal = _closure1_slot25;
                michal = michal.LANDSCAPE;
                if(!(michal === zuuluu)) { _fun00032_ip = 406; continue _fun00031 }
 239:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 37;
                michal = report[michal];
                oscard = zuuluu.bind(tangon)(michal);
                report = oscard.lockOrientation;
                zuuluu = 'LANDSCAPE';
                michal = true;
                michal = report.bind(oscard)(zuuluu, michal);
                _fun00032_ip = 406; continue _fun00031;
 282:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 37;
                michal = report[michal];
                oscard = zuuluu.bind(tangon)(michal);
                report = oscard.lockOrientation;
                zuuluu = 'PORTRAIT';
                michal = true;
                michal = report.bind(oscard)(zuuluu, michal);
                _fun00032_ip = 406; continue _fun00031;
 322:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 37;
                michal = report[michal];
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.unlockOrientation;
                michal = {};
                report = true;
                michal['unlockAfterRotatingToPreviousLock'] = report;
                michal = zuuluu.bind(tangon)(michal);
                _fun00032_ip = 406; continue _fun00031;
 364:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 37;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.unlockOrientation;
                entity = {};
                tangon = false;
                entity['unlockAfterRotatingToPreviousLock'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 406:
                entity = undefined;
                return entity;
            }
        };
        tangon = oscard.bind(golfie)(tangon, report);
        report = _closure1_slot4;
        tangon = report.useLayoutEffect;
        zuuluu = function() {
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 37;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.restoreDefaultOrientation;
                entity = entity.bind(michal)();
                return entity;
            };
            return entity;
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot48 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.InteractionManager;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.VoicePanelModes;
    var _closure1_slot16 = golfie;
    tangon = tangon.getAnalyticsNameForVoicePanelMode;
    var _closure1_slot17 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.CONTROLS_HEIGHT;
    var _closure1_slot18 = golfie;
    golfie = tangon.CONTROLS_HEIGHT_PTT;
    var _closure1_slot19 = golfie;
    golfie = tangon.CONTROLS_HIDE_TIMEOUT;
    var _closure1_slot20 = golfie;
    tangon = tangon.VoicePanelControlsModes;
    var _closure1_slot21 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot22 = golfie;
    golfie = tangon.ComponentActions;
    var _closure1_slot23 = golfie;
    tangon = tangon.InputModes;
    var _closure1_slot24 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.OrientationLockState;
    var _closure1_slot25 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityPanelModes;
    var _closure1_slot26 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isActivityParticipant;
    var _closure1_slot27 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MorphablePanelModes;
    var _closure1_slot28 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot29 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}';
    tangon['code'] = golfie;
    var _closure1_slot30 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}';
    tangon['code'] = golfie;
    var _closure1_slot31 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx3(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}';
    tangon['code'] = golfie;
    var _closure1_slot32 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;runOnJS(handleStateUpdates)({focusedId:focusedId,pipParticipantId:pipParticipantId});}';
    tangon['code'] = golfie;
    var _closure1_slot33 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx5(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}';
    tangon['code'] = golfie;
    var _closure1_slot34 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx6(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}';
    tangon['code'] = golfie;
    var _closure1_slot35 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx7(){const{mode}=this.__closure;return mode.get();}';
    tangon['code'] = golfie;
    var _closure1_slot36 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx8(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}';
    tangon['code'] = golfie;
    var _closure1_slot37 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx9(){const{connected}=this.__closure;return connected.get();}';
    tangon['code'] = golfie;
    var _closure1_slot38 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx10(connected){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}';
    tangon['code'] = golfie;
    var _closure1_slot39 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx11({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}runOnJS(executeLayoutManagerEffect)();}';
    tangon['code'] = golfie;
    var _closure1_slot40 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx12(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}';
    tangon['code'] = golfie;
    var _closure1_slot41 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx13(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}';
    tangon['code'] = golfie;
    var _closure1_slot42 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx14(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}';
    tangon['code'] = golfie;
    var _closure1_slot43 = tangon;
    tangon = {};
    golfie = 'function VoicePanelControllerTsx15(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||currentMode===VoicePanelModes.PANEL&&(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}';
    tangon['code'] = golfie;
    var _closure1_slot44 = tangon;
    tangon = 60;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/VoicePanelController.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: VoicePanelController
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            backup = entity.channelId;
            var _closure2_slot0 = backup;
            output = entity.guildId;
            var _closure2_slot1 = output;
            golfie = entity.children;
            config = entity.transitionState;
            michal = entity.transitionCleanUp;
            tangon = undefined;
            var _closure2_slot31 = tangon;
            var _closure2_slot32 = tangon;
            var _closure2_slot33 = tangon;
            var _closure2_slot34 = tangon;
            var _closure2_slot35 = tangon;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            sizing = 30;
            report = verify[sizing];
            yankee = option.bind(tangon)(report);
            offset = yankee.useStateFromStores;
            report = _closure1_slot13;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                zuuluu = _closure1_slot13;
                michal = zuuluu.getMode;
                michal = michal.bind(zuuluu)();
                entity = _closure1_slot24;
                entity = entity.PUSH_TO_TALK;
                entity = michal === entity;
                return entity;
            };
            cntext = offset.bind(yankee)(oscard, report);
            offset = _closure1_slot4;
            oscard = offset.useState;
            report = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 52;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = _closure1_slot13;
                entity = michal.getMediaEngine;
                report = entity.bind(michal)();
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                oscard = michal;
                entity = new oscard[zuuluu](report, tangon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            oscard = oscard.bind(offset)(report);
            report = _closure1_slot3;
            yankee = 1;
            oscard = report.bind(tangon)(oscard, yankee);
            report = 0;
            oscard = oscard[report];
            var _closure2_slot2 = oscard;
            foxtra = _closure1_slot4;
            romeon = foxtra.useEffect;
            offset = new Array(1);
            offset[0] = oscard;
            oscard = function() {
                entity = function() {
                    michal = _closure2_slot2;
                    entity = michal.cleanUp;
                    entity = entity.bind(michal)();
                    return entity;
                };
                return entity;
            };
            oscard = romeon.bind(foxtra)(oscard, offset);
            offset = _closure1_slot1;
            oscard = 53;
            oscard = verify[oscard];
            oscard = offset.bind(tangon)(oscard);
            oscard = oscard.bind(tangon)(backup, output);
            papara = oscard.items;
            foxtra = oscard.isConnected;
            oscard = function(argFoo, argBar) { // Original name: useMountedCards
                oscard = argFoo;
                golfie = argBar;
                var _closure3_slot0 = oscard;
                var _closure3_slot1 = golfie;
                report = _closure1_slot4;
                tangon = report.useState;
                entity = function() {
                    entity = global;
                    entity = entity.Set;
                    michal = entity.prototype;
                    michal = Object.create(michal, {constructor: {value: entity}});
                    zuuluu = michal;
                    entity = new zuuluu[entity](michal);
                    entity = entity instanceof Object ? entity : michal;
                    return entity;
                };
                option = tangon.bind(report)(entity);
                report = _closure1_slot3;
                tangon = undefined;
                entity = 1;
                tangon = report.bind(tangon)(option, entity);
                entity = 0;
                entity = tangon[entity];
                var _closure3_slot2 = entity;
                report = _closure1_slot4;
                tangon = report.useEffect;
                zuuluu = new Array(3);
                zuuluu[0] = golfie;
                zuuluu[1] = oscard;
                zuuluu[2] = entity;
                michal = function() {
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        zuuluu = _closure3_slot1;
                        if(zuuluu) { _fun00036_ip = 30; continue _fun00035 }
 12:
                        zuuluu = _closure3_slot2;
                        michal = zuuluu.clear;
                        michal = michal.bind(zuuluu)();
                        michal = undefined;
                        return michal;
 30:
                        michal = global;
                        report = michal.setTimeout;
                        tangon = undefined;
                        zuuluu = function() {
                            zuuluu = _closure1_slot5;
                            michal = zuuluu.runAfterInteractions;
                            entity = function() {
                                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                                    michal = _closure3_slot2;
                                    entity = michal.clear;
                                    entity = entity.bind(michal)();
                                    zuuluu = _closure1_slot45;
                                    michal = _closure3_slot0;
                                    entity = undefined;
                                    tangon = zuuluu.bind(entity)(michal);
                                    zuuluu = tangon.bind(entity)();
                                    michal = zuuluu.done;
                                    if(michal) { _fun00038_ip = 86; continue _fun00037 }
 47:
                                    michal = zuuluu.value;
                                    golfie = _closure3_slot2;
                                    oscard = golfie.add;
                                    michal = michal.id;
                                    michal = oscard.bind(golfie)(michal);
                                    oscard = tangon.bind(entity)();
                                    michal = oscard.done;
                                    zuuluu = oscard;
                                    if(!michal) { _fun00038_ip = 47; continue _fun00037 }
 86:
                                    return entity;
                                }
                            };
                            michal = michal.bind(zuuluu)(entity);
                            var _closure4_slot0 = michal;
                            entity = undefined;
                            return entity;
                        };
                        michal = 100;
                        michal = report.bind(tangon)(zuuluu, michal);
                        var _closure4_slot1 = michal;
                        entity = function() {
                            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                                zuuluu = _closure4_slot0;
                                michal = null;
                                if(!(michal != zuuluu)) { _fun00040_ip = 23; continue _fun00039 }
 13:
                                michal = zuuluu.cancel;
                                michal = michal.bind(zuuluu)();
 23:
                                michal = global;
                                zuuluu = michal.clearTimeout;
                                michal = _closure4_slot1;
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            }
                        };
                        return entity;
                    }
                };
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            oscard = oscard.bind(tangon)(papara, foxtra);
            var _closure2_slot3 = oscard;
            oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: useCoreSharedState
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    tangon = argFoo;
                    yankee = argBar;
                    var _closure3_slot0 = tangon;
                    michal = argBaz;
                    var _closure3_slot1 = michal;
                    michal = argCor;
                    var _closure3_slot2 = michal;
                    zuuluu = _closure1_slot12;
                    michal = zuuluu.getChannel;
                    tangon = michal.bind(zuuluu)(tangon);
                    report = null;
                    zuuluu = report == tangon;
                    echoed = undefined;
                    michal = undefined;
                    if(zuuluu) { _fun00042_ip = 66; continue _fun00041 }
 56:
                    zuuluu = tangon.isDM;
                    michal = zuuluu.bind(tangon)();
 66:
                    backup = report != michal;
                    if(!backup) { _fun00042_ip = 76; continue _fun00041 }
 73:
                    backup = michal;
 76:
                    result = _closure1_slot0;
                    update = _closure1_slot2;
                    output = 22;
                    michal = update[output];
                    zuuluu = result.bind(echoed)(michal);
                    michal = zuuluu.useSharedValue;
                    source = michal.bind(zuuluu)(yankee);
                    michal = update[output];
                    tangon = result.bind(echoed)(michal);
                    zuuluu = tangon.useSharedValue;
                    michal = _closure1_slot16;
                    michal = michal.PANEL;
                    romeon = zuuluu.bind(tangon)(michal);
                    var _closure3_slot3 = romeon;
                    michal = 32;
                    michal = update[michal];
                    zuuluu = result.bind(echoed)(michal);
                    michal = zuuluu.getWindowDimensions;
                    oscard = michal.bind(zuuluu)();
                    var _closure3_slot4 = oscard;
                    michal = update[output];
                    tangon = result.bind(echoed)(michal);
                    zuuluu = tangon.useSharedValue;
                    michal = {};
                    golfie = oscard.width;
                    michal['width'] = golfie;
                    golfie = oscard.height;
                    michal['height'] = golfie;
                    option = oscard.width;
                    golfie = oscard.height;
                    golfie = option > golfie;
                    michal['landscape'] = golfie;
                    option = zuuluu.bind(tangon)(michal);
                    michal = 33;
                    michal = update[michal];
                    zuuluu = result.bind(echoed)(michal);
                    michal = zuuluu.getSafeAreaInsets;
                    verify = michal.bind(zuuluu)();
                    var _closure3_slot5 = verify;
                    michal = update[output];
                    tangon = result.bind(echoed)(michal);
                    zuuluu = tangon.useSharedValue;
                    michal = {};
                    papara = michal;
                    cntext = verify;
                    golfie = copyDataProperties(papara, cntext);
                    offset = zuuluu.bind(tangon)(michal);
                    golfie = 34;
                    michal = update[golfie];
                    tangon = result.bind(echoed)(michal);
                    zuuluu = tangon.getMaxPanelWidth;
                    michal = {};
                    foxtra = oscard.width;
                    michal['windowWidth'] = foxtra;
                    michal['connected'] = yankee;
                    yankee = verify.left;
                    michal['safeAreaLeft'] = yankee;
                    verify = verify.right;
                    michal['safeAreaRight'] = verify;
                    foxtra = zuuluu.bind(tangon)(michal);
                    michal = update[output];
                    tangon = result.bind(echoed)(michal);
                    zuuluu = tangon.useSharedValue;
                    michal = {};
                    verify = oscard.height;
                    michal['drawerHeight'] = verify;
                    michal['drawerWidth'] = foxtra;
                    golfie = update[golfie];
                    yankee = result.bind(echoed)(golfie);
                    verify = yankee.getPanelX;
                    golfie = oscard.width;
                    golfie = verify.bind(yankee)(golfie, foxtra);
                    michal['drawerX'] = golfie;
                    oscard = oscard.height;
                    michal['drawerY'] = oscard;
                    oscard = -1;
                    michal['pipX'] = oscard;
                    michal['pipY'] = oscard;
                    oscard = true;
                    michal['animated'] = oscard;
                    oscard = _closure1_slot16;
                    oscard = oscard.PANEL;
                    michal['mode'] = oscard;
                    golfie = zuuluu.bind(tangon)(michal);
                    michal = update[output];
                    zuuluu = result.bind(echoed)(michal);
                    michal = zuuluu.useSharedValue;
                    vacuum = 0;
                    verify = michal.bind(zuuluu)(vacuum);
                    michal = update[output];
                    zuuluu = result.bind(echoed)(michal);
                    michal = zuuluu.useSharedValue;
                    tangon = false;
                    sizing = michal.bind(zuuluu)(tangon);
                    michal = update[output];
                    zuuluu = result.bind(echoed)(michal);
                    michal = zuuluu.useSharedValue;
                    kiloes = michal.bind(zuuluu)(report);
                    michal = update[output];
                    zuuluu = result.bind(echoed)(michal);
                    michal = zuuluu.useSharedValue;
                    yankee = michal.bind(zuuluu)(vacuum);
                    michal = update[output];
                    zuuluu = result.bind(echoed)(michal);
                    michal = zuuluu.useSharedValue;
                    oscard = michal.bind(zuuluu)(tangon);
                    var _closure3_slot6 = oscard;
                    report = _closure1_slot4;
                    tangon = report.useCallback;
                    zuuluu = function(argFoo) { // Original name: S
                        zuuluu = _closure3_slot6;
                        michal = zuuluu.set;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    michal = {};
                    michal['isFocusedVideoZoomed'] = oscard;
                    zuuluu['__closure'] = michal;
                    michal = 13885070318174.0;
                    zuuluu['__workletHash'] = michal;
                    michal = _closure1_slot34;
                    zuuluu['__initData'] = michal;
                    michal = new Array(1);
                    michal[0] = oscard;
                    report = tangon.bind(report)(zuuluu, michal);
                    michal = update[output];
                    tangon = result.bind(echoed)(michal);
                    zuuluu = tangon.useSharedValue;
                    michal = _closure1_slot6;
                    michal = michal.useReducedMotion;
                    tangon = zuuluu.bind(tangon)(michal);
                    var _closure3_slot7 = tangon;
                    sequen = _closure1_slot4;
                    foxtra = sequen.useEffect;
                    zuuluu = new Array(1);
                    zuuluu[0] = tangon;
                    michal = function() {
                        tangon = function() { // Original name: onChange
                            entity = _closure1_slot6;
                            zuuluu = entity.useReducedMotion;
                            michal = _closure3_slot7;
                            entity = michal.set;
                            entity = entity.bind(michal)(zuuluu);
                            entity = undefined;
                            return entity;
                        };
                        var _closure4_slot0 = tangon;
                        zuuluu = _closure1_slot6;
                        michal = zuuluu.addReactChangeListener;
                        michal = michal.bind(zuuluu)(tangon);
                        entity = function() {
                            zuuluu = _closure1_slot6;
                            michal = zuuluu.removeReactChangeListener;
                            entity = _closure4_slot0;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        return entity;
                    };
                    michal = foxtra.bind(sequen)(michal, zuuluu);
                    michal = update[output];
                    foxtra = result.bind(echoed)(michal);
                    zuuluu = foxtra.useSharedValue;
                    michal = {'gestureActive': false, 'x': 0, 'y': 0};
                    zuuluu = zuuluu.bind(foxtra)(michal);
                    michal = update[output];
                    sequen = result.bind(echoed)(michal);
                    foxtra = sequen.useDerivedValue;
                    michal = function() { // Original name: N
                        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                            michal = _closure3_slot3;
                            entity = michal.get;
                            zuuluu = entity.bind(michal)();
                            michal = _closure1_slot16;
                            michal = michal.PANEL;
                            if(!(michal !== zuuluu)) { _fun00044_ip = 71; continue _fun00043 }
 33:
                            michal = _closure1_slot16;
                            michal = michal.PIP;
                            if(!(michal !== zuuluu)) { _fun00044_ip = 59; continue _fun00043 }
 47:
                            michal = _closure1_slot28;
                            michal = michal.UNDEFINED;
                            return michal;
 59:
                            michal = _closure1_slot28;
                            michal = michal.PIP;
                            return michal;
 71:
                            entity = _closure1_slot28;
                            entity = entity.PANEL;
                            return entity;
                        }
                    };
                    config = {};
                    config['mode'] = romeon;
                    record = _closure1_slot16;
                    config['VoicePanelModes'] = record;
                    record = _closure1_slot28;
                    config['MorphablePanelModes'] = record;
                    michal['__closure'] = config;
                    config = 931249605381.0;
                    michal['__workletHash'] = config;
                    config = _closure1_slot35;
                    michal['__initData'] = config;
                    michal = foxtra.bind(sequen)(michal);
                    config = _closure1_slot4;
                    sequen = config.useState;
                    foxtra = function() {
                        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 35;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            verify = _closure3_slot0;
                            michal = zuuluu.prototype;
                            michal = Object.create(michal, {constructor: {value: zuuluu}});
                            offset = michal;
                            entity = new offset[zuuluu](verify, option);
                            entity = entity instanceof Object ? entity : michal;
                            tangon = entity.updateState;
                            zuuluu = _closure3_slot1;
                            michal = {};
                            golfie = _closure3_slot4;
                            golfie = golfie.width;
                            michal['windowWidth'] = golfie;
                            golfie = _closure3_slot4;
                            golfie = golfie.height;
                            michal['windowHeight'] = golfie;
                            golfie = _closure3_slot5;
                            golfie = golfie.left;
                            michal['safeAreaLeft'] = golfie;
                            golfie = _closure3_slot5;
                            golfie = golfie.right;
                            michal['safeAreaRight'] = golfie;
                            golfie = _closure3_slot5;
                            golfie = golfie.top;
                            michal['safeAreaTop'] = golfie;
                            golfie = _closure3_slot5;
                            golfie = golfie.bottom;
                            michal['safeAreaBottom'] = golfie;
                            report = _closure3_slot2;
                            if(report) { _fun00046_ip = 161; continue _fun00045 }
 155:
                            report = _closure1_slot18;
                            _fun00046_ip = 165; continue _fun00045;
 161:
                            report = _closure1_slot19;
 165:
                            michal['controlBarSize'] = report;
                            michal = tangon.bind(entity)(zuuluu, michal);
                            return entity;
                        }
                    };
                    config = sequen.bind(config)(foxtra);
                    sequen = _closure1_slot3;
                    foxtra = 1;
                    foxtra = sequen.bind(echoed)(config, foxtra);
                    foxtra = foxtra[vacuum];
                    var _closure3_slot8 = foxtra;
                    sequen = _closure1_slot4;
                    vacuum = sequen.useLayoutEffect;
                    ctrled = new Array(1);
                    ctrled[0] = foxtra;
                    entity = function() {
                        entity = function() {
                            michal = _closure3_slot8;
                            entity = michal.cleanUp;
                            entity = entity.bind(michal)();
                            return entity;
                        };
                        return entity;
                    };
                    entity = vacuum.bind(sequen)(entity, ctrled);
                    entity = {};
                    entity['connected'] = source;
                    output = update[output];
                    echoed = result.bind(echoed)(output);
                    result = echoed.useSharedValue;
                    output = foxtra.getContentDimensions;
                    output = output.bind(foxtra)();
                    output = result.bind(echoed)(output);
                    entity['contentDimensions'] = output;
                    entity['dragScrolling'] = sizing;
                    entity['focused'] = kiloes;
                    entity['isCall'] = backup;
                    entity['layoutManager'] = foxtra;
                    entity['mode'] = romeon;
                    entity['preJoinContentSize'] = yankee;
                    entity['safeArea'] = offset;
                    entity['scrollPosition'] = verify;
                    entity['windowDimensions'] = option;
                    entity['wrapperDimensions'] = golfie;
                    entity['isFocusedVideoZoomed'] = oscard;
                    entity['setIsFocusedVideoZoomed'] = report;
                    entity['useReducedMotion'] = tangon;
                    entity['wrapperOffset'] = zuuluu;
                    entity['morphablePanelMode'] = michal;
                    return entity;
                }
            };
            quebec = undefined;
            equals = backup;
            whisks = foxtra;
            limora = papara;
            sierra = cntext;
            oscard = quebec[oscard](equals, whisks, limora, sierra, status);
            result = oscard.connected;
            var _closure2_slot4 = result;
            target = oscard.contentDimensions;
            var _closure2_slot5 = target;
            offset = oscard.dragScrolling;
            var _closure2_slot6 = offset;
            echoed = oscard.focused;
            var _closure2_slot7 = echoed;
            offset = oscard.isCall;
            var _closure2_slot8 = offset;
            update = oscard.layoutManager;
            var _closure2_slot9 = update;
            offset = oscard.mode;
            var _closure2_slot10 = offset;
            romeon = oscard.preJoinContentSize;
            var _closure2_slot11 = romeon;
            vacuum = oscard.safeArea;
            var _closure2_slot12 = vacuum;
            romeon = oscard.scrollPosition;
            var _closure2_slot13 = romeon;
            ctrled = oscard.windowDimensions;
            var _closure2_slot14 = ctrled;
            romeon = oscard.wrapperDimensions;
            var _closure2_slot15 = romeon;
            romeon = oscard.isFocusedVideoZoomed;
            var _closure2_slot16 = romeon;
            romeon = oscard.setIsFocusedVideoZoomed;
            var _closure2_slot17 = romeon;
            romeon = oscard.useReducedMotion;
            var _closure2_slot18 = romeon;
            romeon = oscard.wrapperOffset;
            var _closure2_slot19 = romeon;
            oscard = oscard.morphablePanelMode;
            var _closure2_slot20 = oscard;
            oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: useControlsState
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    source = argFoo;
                    yankee = argBar;
                    backup = argBaz;
                    kiloes = argCor;
                    var _closure3_slot0 = source;
                    var _closure3_slot1 = yankee;
                    var _closure3_slot2 = backup;
                    var _closure3_slot3 = kiloes;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    verify = 22;
                    michal = michal[verify];
                    result = undefined;
                    tangon = zuuluu.bind(result)(michal);
                    zuuluu = tangon.useSharedValue;
                    michal = {};
                    report = _closure1_slot21;
                    report = report.FLOATING_DEFAULT;
                    michal['mode'] = report;
                    report = false;
                    michal['locked'] = report;
                    if(!kiloes) { _fun00048_ip = 89; continue _fun00047 }
 86:
                    if(yankee) { _fun00048_ip = 95; continue _fun00047 }
 89:
                    report = _closure1_slot18;
                    _fun00048_ip = 99; continue _fun00047;
 95:
                    report = _closure1_slot19;
 99:
                    michal['height'] = report;
                    michal['pushToTalk'] = kiloes;
                    michal = zuuluu.bind(tangon)(michal);
                    var _closure3_slot4 = michal;
                    report = _closure1_slot4;
                    tangon = report.useRef;
                    zuuluu = -1;
                    zuuluu = tangon.bind(report)(zuuluu);
                    var _closure3_slot5 = zuuluu;
                    oscard = _closure1_slot4;
                    report = oscard.useCallback;
                    tangon = function() {
                        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                            michal = _closure3_slot5;
                            zuuluu = michal.current;
                            michal = -1;
                            if(!(michal !== zuuluu)) { _fun00050_ip = 56; continue _fun00049 }
 22:
                            zuuluu = global;
                            report = zuuluu.clearTimeout;
                            zuuluu = _closure3_slot5;
                            tangon = zuuluu.current;
                            zuuluu = undefined;
                            zuuluu = report.bind(zuuluu)(tangon);
                            entity = _closure3_slot5;
                            entity['current'] = michal;
 56:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = new Array(0);
                    option = report.bind(oscard)(tangon, zuuluu);
                    var _closure3_slot6 = option;
                    oscard = _closure1_slot4;
                    report = oscard.useCallback;
                    tangon = new Array(3);
                    tangon[0] = michal;
                    tangon[1] = option;
                    tangon[2] = source;
                    zuuluu = function() {
                        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                            zuuluu = _closure3_slot6;
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)();
                            zuuluu = _closure3_slot5;
                            tangon = zuuluu.current;
                            zuuluu = -1;
                            if(!(zuuluu === tangon)) { _fun00052_ip = 72; continue _fun00051 }
 32:
                            zuuluu = _closure3_slot5;
                            michal = global;
                            report = michal.setTimeout;
                            tangon = _closure1_slot20;
                            michal = function() {
                                _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                                    zuuluu = _closure3_slot6;
                                    entity = undefined;
                                    zuuluu = zuuluu.bind(entity)();
                                    tangon = _closure3_slot0;
                                    zuuluu = tangon.get;
                                    tangon = zuuluu.bind(tangon)();
                                    zuuluu = _closure1_slot16;
                                    zuuluu = zuuluu.PANEL;
                                    if(!(tangon === zuuluu)) { _fun00054_ip = 146; continue _fun00053 }
 43:
                                    tangon = _closure3_slot4;
                                    zuuluu = tangon.get;
                                    zuuluu = zuuluu.bind(tangon)();
                                    tangon = zuuluu.mode;
                                    zuuluu = _closure1_slot21;
                                    zuuluu = zuuluu.FLOATING_DEFAULT;
                                    zuuluu = tangon !== zuuluu;
                                    if(zuuluu) { _fun00054_ip = 97; continue _fun00053 }
 78:
                                    oscard = _closure3_slot4;
                                    tangon = oscard.get;
                                    tangon = tangon.bind(oscard)();
                                    zuuluu = tangon.locked;
 97:
                                    if(zuuluu) { _fun00054_ip = 146; continue _fun00053 }
 100:
                                    tangon = _closure1_slot1;
                                    oscard = _closure1_slot2;
                                    zuuluu = 38;
                                    zuuluu = oscard[zuuluu];
                                    tangon = tangon.bind(entity)(zuuluu);
                                    zuuluu = _closure3_slot4;
                                    michal = {};
                                    report = _closure1_slot21;
                                    report = report.HIDDEN;
                                    michal['mode'] = report;
                                    michal = tangon.bind(entity)(zuuluu, michal);
 146:
                                    return entity;
                                }
                            };
                            michal = report.bind(entity)(michal, tangon);
                            zuuluu['current'] = michal;
 72:
                            return entity;
                        }
                    };
                    ctrled = report.bind(oscard)(zuuluu, tangon);
                    var _closure3_slot7 = ctrled;
                    oscard = _closure1_slot4;
                    report = oscard.useMemo;
                    tangon = new Array(2);
                    tangon[0] = michal;
                    tangon[1] = ctrled;
                    zuuluu = function() {
                        report = function(argFoo, argBar) { // Original name: _setControlsMode
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 38;
                            michal = michal[entity];
                            entity = undefined;
                            report = zuuluu.bind(entity)(michal);
                            tangon = _closure3_slot4;
                            zuuluu = {};
                            oscard = argFoo;
                            zuuluu['mode'] = oscard;
                            oscard = argBar;
                            zuuluu['returnMode'] = oscard;
                            zuuluu = report.bind(entity)(tangon, zuuluu);
                            michal = _closure3_slot7;
                            michal = michal.bind(entity)();
                            return entity;
                        };
                        var _closure4_slot0 = report;
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 39;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.debounce;
                        entity = 200;
                        entity = zuuluu.bind(tangon)(report, entity);
                        var _closure4_slot1 = entity;
                        entity = {};
                        zuuluu = function() { // Original name: cancelControlsDebounce
                            michal = _closure4_slot1;
                            entity = michal.cancel;
                            entity = entity.bind(michal)();
                            return entity;
                        };
                        entity['cancelControlsDebounce'] = zuuluu;
                        michal = function(argFoo) { // Original name: setControlsMode
                            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                                michal = argFoo;
                                tangon = michal.mode;
                                oscard = michal.debounce;
                                entity = undefined;
                                if(!(oscard === entity)) { _fun00056_ip = 22; continue _fun00055 }
 20:
                                oscard = false;
 22:
                                zuuluu = michal.returnMode;
                                if(!(zuuluu === entity)) { _fun00056_ip = 45; continue _fun00055 }
 32:
                                michal = _closure1_slot21;
                                zuuluu = michal.FLOATING_DEFAULT;
 45:
                                michal = _closure4_slot1;
                                if(oscard) { _fun00056_ip = 77; continue _fun00055 }
 55:
                                oscard = michal.cancel;
                                oscard = oscard.bind(michal)();
                                report = _closure4_slot0;
                                report = report.bind(entity)(tangon, zuuluu);
                                _fun00056_ip = 83; continue _fun00055;
 77:
                                michal = michal.bind(entity)(tangon, zuuluu);
 83:
                                return entity;
                            }
                        };
                        entity['setControlsMode'] = michal;
                        return entity;
                    };
                    zuuluu = report.bind(oscard)(zuuluu, tangon);
                    romeon = zuuluu.cancelControlsDebounce;
                    var _closure3_slot8 = romeon;
                    report = zuuluu.setControlsMode;
                    var _closure3_slot9 = report;
                    oscard = _closure1_slot4;
                    tangon = oscard.useRef;
                    zuuluu = global;
                    zuuluu = zuuluu.Set;
                    offset = zuuluu.prototype;
                    offset = Object.create(offset, {constructor: {value: zuuluu}});
                    record = offset;
                    zuuluu = new record[zuuluu](config);
                    zuuluu = zuuluu instanceof Object ? zuuluu : offset;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    var _closure3_slot10 = zuuluu;
                    offset = _closure1_slot4;
                    oscard = offset.useCallback;
                    tangon = new Array(3);
                    tangon[0] = michal;
                    tangon[1] = ctrled;
                    tangon[2] = option;
                    zuuluu = function(argFoo) {
                        _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                            entity = argFoo;
                            zuuluu = null;
                            if(!(zuuluu == entity)) { _fun00058_ip = 46; continue _fun00057 }
 11:
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            zuuluu = 40;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            tangon = report.bind(zuuluu)(tangon);
                            zuuluu = tangon.v4;
                            entity = zuuluu.bind(tangon)();
 46:
                            var _closure4_slot0 = entity;
                            entity = {};
                            zuuluu = function(argFoo) { // Original name: lock
                                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                                    michal = argFoo;
                                    zuuluu = _closure3_slot10;
                                    oscard = zuuluu.current;
                                    report = oscard.has;
                                    tangon = _closure4_slot0;
                                    tangon = report.bind(oscard)(tangon);
                                    if(tangon) { _fun00060_ip = 140; continue _fun00059 }
 35:
                                    report = _closure3_slot6;
                                    tangon = undefined;
                                    report = report.bind(tangon)();
                                    report = _closure3_slot10;
                                    oscard = report.current;
                                    report = oscard.add;
                                    zuuluu = _closure4_slot0;
                                    zuuluu = report.bind(oscard)(zuuluu);
                                    zuuluu = {};
                                    report = _closure3_slot10;
                                    report = report.current;
                                    oscard = report.size;
                                    report = 0;
                                    report = oscard > report;
                                    zuuluu['locked'] = report;
                                    report = null;
                                    if(!(report != michal)) { _fun00060_ip = 107; continue _fun00059 }
 101:
                                    zuuluu['mode'] = michal;
 107:
                                    report = _closure1_slot1;
                                    oscard = _closure1_slot2;
                                    michal = 38;
                                    michal = oscard[michal];
                                    michal = report.bind(tangon)(michal);
                                    entity = _closure3_slot4;
                                    entity = michal.bind(tangon)(entity, zuuluu);
 140:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity['lock'] = zuuluu;
                            michal = function(argFoo) { // Original name: unlock
                                _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                                    michal = argFoo;
                                    zuuluu = _closure3_slot10;
                                    oscard = zuuluu.current;
                                    report = oscard.has;
                                    tangon = _closure4_slot0;
                                    tangon = report.bind(oscard)(tangon);
                                    if(!tangon) { _fun00062_ip = 140; continue _fun00061 }
 35:
                                    tangon = _closure3_slot10;
                                    report = tangon.current;
                                    tangon = report.delete;
                                    zuuluu = _closure4_slot0;
                                    zuuluu = tangon.bind(report)(zuuluu);
                                    report = {};
                                    zuuluu = _closure3_slot10;
                                    zuuluu = zuuluu.current;
                                    tangon = zuuluu.size;
                                    zuuluu = 0;
                                    zuuluu = tangon > zuuluu;
                                    report['locked'] = zuuluu;
                                    zuuluu = null;
                                    if(!(zuuluu != michal)) { _fun00062_ip = 97; continue _fun00061 }
 91:
                                    report['mode'] = michal;
 97:
                                    tangon = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    michal = 38;
                                    zuuluu = zuuluu[michal];
                                    michal = undefined;
                                    tangon = tangon.bind(michal)(zuuluu);
                                    zuuluu = _closure3_slot4;
                                    zuuluu = tangon.bind(michal)(zuuluu, report);
                                    entity = _closure3_slot7;
                                    entity = entity.bind(michal)();
 140:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity['unlock'] = michal;
                            return entity;
                        }
                    };
                    oscard = oscard.bind(offset)(zuuluu, tangon);
                    foxtra = _closure1_slot4;
                    offset = foxtra.useCallback;
                    tangon = new Array(1);
                    tangon[0] = report;
                    zuuluu = function() {
                        _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                            michal = arguments[0];
                            entity = undefined;
                            if(!(michal === entity)) { _fun00064_ip = 21; continue _fun00063 }
 9:
                            zuuluu = {};
                            tangon = false;
                            zuuluu['debounce'] = tangon;
                            michal = zuuluu;
 21:
                            tangon = michal.debounce;
                            zuuluu = _closure3_slot9;
                            michal = {};
                            report = _closure1_slot21;
                            report = report.HIDDEN;
                            michal['mode'] = report;
                            michal['debounce'] = tangon;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        }
                    };
                    zuuluu = offset.bind(foxtra)(zuuluu, tangon);
                    sizing = _closure1_slot4;
                    foxtra = sizing.useCallback;
                    offset = new Array(2);
                    offset[0] = report;
                    offset[1] = michal;
                    tangon = function() {
                        _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                            entity = arguments[0];
                            zuuluu = undefined;
                            if(!(entity === zuuluu)) { _fun00066_ip = 11; continue _fun00065 }
 9:
                            entity = {};
 11:
                            tangon = entity.debounce;
                            if(!(tangon === zuuluu)) { _fun00066_ip = 23; continue _fun00065 }
 21:
                            tangon = false;
 23:
                            michal = _closure3_slot9;
                            entity = {};
                            oscard = _closure3_slot4;
                            report = oscard.get;
                            report = report.bind(oscard)();
                            report = report.returnMode;
                            oscard = null;
                            if(!(oscard == report)) { _fun00066_ip = 70; continue _fun00065 }
 57:
                            oscard = _closure1_slot21;
                            report = oscard.FLOATING_DEFAULT;
 70:
                            entity['mode'] = report;
                            entity['debounce'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        }
                    };
                    tangon = foxtra.bind(sizing)(tangon, offset);
                    offset = _closure1_slot0;
                    echoed = _closure1_slot2;
                    foxtra = echoed[verify];
                    update = offset.bind(result)(foxtra);
                    output = update.useAnimatedReaction;
                    sizing = function() { // Original name: s
                        michal = _closure3_slot0;
                        entity = michal.get;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    foxtra = {};
                    foxtra['mode'] = source;
                    sizing['__closure'] = foxtra;
                    foxtra = 12140218650562.0;
                    sizing['__workletHash'] = foxtra;
                    foxtra = _closure1_slot36;
                    sizing['__initData'] = foxtra;
                    foxtra = function(argFoo) { // Original name: r
                        _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                            michal = _closure1_slot16;
                            zuuluu = michal.PANEL;
                            michal = argFoo;
                            if(!(michal !== zuuluu)) { _fun00068_ip = 65; continue _fun00067 }
 20:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 22;
                            michal = zuuluu[michal];
                            zuuluu = undefined;
                            report = tangon.bind(zuuluu)(michal);
                            tangon = report.runOnJS;
                            michal = _closure3_slot6;
                            michal = tangon.bind(report)(michal);
                            michal = michal.bind(zuuluu)();
                            _fun00068_ip = 108; continue _fun00067;
 65:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 22;
                            entity = michal[entity];
                            michal = undefined;
                            tangon = zuuluu.bind(michal)(entity);
                            zuuluu = tangon.runOnJS;
                            entity = _closure3_slot7;
                            entity = zuuluu.bind(tangon)(entity);
                            entity = entity.bind(michal)();
 108:
                            entity = undefined;
                            return entity;
                        }
                    };
                    source = {};
                    vacuum = _closure1_slot16;
                    source['VoicePanelModes'] = vacuum;
                    vacuum = echoed[verify];
                    vacuum = offset.bind(result)(vacuum);
                    vacuum = vacuum.runOnJS;
                    source['runOnJS'] = vacuum;
                    source['_queueHideControls'] = ctrled;
                    source['_clearHideControlsQueue'] = option;
                    foxtra['__closure'] = source;
                    source = 7742206515980.0;
                    foxtra['__workletHash'] = source;
                    source = _closure1_slot37;
                    foxtra['__initData'] = source;
                    foxtra = output.bind(update)(sizing, foxtra);
                    output = _closure1_slot4;
                    sizing = output.useLayoutEffect;
                    foxtra = new Array(3);
                    foxtra[0] = kiloes;
                    foxtra[1] = michal;
                    foxtra[2] = yankee;
                    yankee = function() {
                        _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 38;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = _closure3_slot4;
                            michal = {};
                            oscard = _closure3_slot3;
                            if(!oscard) { _fun00070_ip = 48; continue _fun00069 }
 41:
                            oscard = _closure3_slot1;
                            if(oscard) { _fun00070_ip = 54; continue _fun00069 }
 48:
                            oscard = _closure1_slot18;
                            _fun00070_ip = 58; continue _fun00069;
 54:
                            oscard = _closure1_slot19;
 58:
                            michal['height'] = oscard;
                            report = _closure3_slot3;
                            michal['pushToTalk'] = report;
                            michal = tangon.bind(entity)(zuuluu, michal);
                            return entity;
                        }
                    };
                    yankee = sizing.bind(output)(yankee, foxtra);
                    verify = echoed[verify];
                    foxtra = offset.bind(result)(verify);
                    yankee = foxtra.useAnimatedReaction;
                    offset = function() { // Original name: c
                        michal = _closure3_slot2;
                        entity = michal.get;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    verify = {};
                    verify['connected'] = backup;
                    offset['__closure'] = verify;
                    verify = 16653595323628.0;
                    offset['__workletHash'] = verify;
                    verify = _closure1_slot38;
                    offset['__initData'] = verify;
                    verify = function(argFoo) { // Original name: l
                        _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 38;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = _closure3_slot4;
                            michal = {};
                            oscard = _closure3_slot3;
                            if(!oscard) { _fun00072_ip = 47; continue _fun00071 }
 41:
                            oscard = argFoo;
                            if(oscard) { _fun00072_ip = 53; continue _fun00071 }
 47:
                            oscard = _closure1_slot18;
                            _fun00072_ip = 57; continue _fun00071;
 53:
                            oscard = _closure1_slot19;
 57:
                            michal['height'] = oscard;
                            report = _closure3_slot3;
                            michal['pushToTalk'] = report;
                            michal = tangon.bind(entity)(zuuluu, michal);
                            return entity;
                        }
                    };
                    backup = {};
                    output = _closure1_slot1;
                    sizing = 38;
                    sizing = echoed[sizing];
                    sizing = output.bind(result)(sizing);
                    backup['updateSharedValueIfChanged'] = sizing;
                    backup['controlsSpecs'] = michal;
                    backup['pushToTalk'] = kiloes;
                    kiloes = _closure1_slot19;
                    backup['CONTROLS_HEIGHT_PTT'] = kiloes;
                    kiloes = _closure1_slot18;
                    backup['CONTROLS_HEIGHT'] = kiloes;
                    verify['__closure'] = backup;
                    backup = 2154816141018.0;
                    verify['__workletHash'] = backup;
                    backup = _closure1_slot39;
                    verify['__initData'] = backup;
                    verify = yankee.bind(foxtra)(offset, verify);
                    yankee = _closure1_slot4;
                    offset = yankee.useLayoutEffect;
                    verify = new Array(2);
                    verify[0] = romeon;
                    verify[1] = option;
                    option = function() {
                        entity = function() {
                            zuuluu = _closure3_slot8;
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)();
                            michal = _closure3_slot6;
                            michal = michal.bind(entity)();
                            return entity;
                        };
                        return entity;
                    };
                    option = offset.bind(yankee)(option, verify);
                    verify = _closure1_slot4;
                    option = verify.useEffect;
                    golfie = new Array(1);
                    golfie[0] = report;
                    entity = function() {
                        report = function() { // Original name: closeTiV
                            zuuluu = _closure3_slot9;
                            michal = {};
                            entity = _closure1_slot21;
                            entity = entity.FLOATING_DEFAULT;
                            michal['mode'] = entity;
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        var _closure4_slot0 = report;
                        oscard = _closure1_slot0;
                        tangon = _closure1_slot2;
                        zuuluu = 41;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        zuuluu = oscard.bind(zuuluu)(tangon);
                        tangon = zuuluu.ComponentDispatch;
                        zuuluu = tangon.subscribe;
                        michal = _closure1_slot23;
                        michal = michal.VOICE_PANEL_TIV_CLOSE;
                        michal = zuuluu.bind(tangon)(michal, report);
                        entity = function() {
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 41;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            zuuluu = tangon.bind(entity)(zuuluu);
                            report = zuuluu.ComponentDispatch;
                            tangon = report.unsubscribe;
                            michal = _closure1_slot23;
                            zuuluu = michal.VOICE_PANEL_TIV_CLOSE;
                            michal = _closure4_slot0;
                            michal = tangon.bind(report)(zuuluu, michal);
                            return entity;
                        };
                        return entity;
                    };
                    entity = option.bind(verify)(entity, golfie);
                    entity = {};
                    entity['generateStateLocker'] = oscard;
                    entity['setControlsMode'] = report;
                    entity['showControls'] = tangon;
                    entity['hideControls'] = zuuluu;
                    entity['controlsSpecs'] = michal;
                    return entity;
                }
            };
            equals = offset;
            whisks = foxtra;
            limora = result;
            sierra = cntext;
            oscard = quebec[oscard](equals, whisks, limora, sierra, status);
            romeon = oscard.generateStateLocker;
            var _closure2_slot21 = romeon;
            sequen = oscard.controlsSpecs;
            var _closure2_slot22 = sequen;
            romeon = oscard.showControls;
            var _closure2_slot23 = romeon;
            romeon = oscard.hideControls;
            var _closure2_slot24 = romeon;
            romeon = oscard.setControlsMode;
            var _closure2_slot25 = romeon;
            kiloes = {};
            kiloes['channelId'] = backup;
            kiloes['isConnected'] = foxtra;
            kiloes['mode'] = offset;
            kiloes['connected'] = result;
            kiloes['transitionState'] = config;
            kiloes['controlsSpecs'] = sequen;
            kiloes['setControlsMode'] = romeon;
            oscard = function(argFoo) { // Original name: useSelectedMode
                michal = argFoo;
                yankee = michal.channelId;
                var _closure3_slot0 = yankee;
                zuuluu = michal.isConnected;
                var _closure3_slot1 = zuuluu;
                verify = michal.mode;
                var _closure3_slot2 = verify;
                offset = michal.connected;
                var _closure3_slot3 = offset;
                zuuluu = michal.transitionState;
                var _closure3_slot4 = zuuluu;
                option = michal.controlsSpecs;
                var _closure3_slot5 = option;
                golfie = michal.setControlsMode;
                var _closure3_slot6 = golfie;
                report = _closure1_slot4;
                tangon = report.useState;
                zuuluu = _closure1_slot16;
                zuuluu = zuuluu.PANEL;
                oscard = tangon.bind(report)(zuuluu);
                report = _closure1_slot3;
                tangon = undefined;
                zuuluu = 2;
                report = report.bind(tangon)(oscard, zuuluu);
                zuuluu = 0;
                tangon = report[zuuluu];
                var _closure3_slot7 = tangon;
                zuuluu = 1;
                zuuluu = report[zuuluu];
                var _closure3_slot8 = zuuluu;
                romeon = _closure1_slot4;
                oscard = romeon.useLayoutEffect;
                report = function() {
                    _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                        tangon = _closure3_slot2;
                        zuuluu = tangon.set;
                        entity = _closure3_slot7;
                        entity = zuuluu.bind(tangon)(entity);
                        tangon = _closure3_slot4;
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 46;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        zuuluu = report.bind(entity)(zuuluu);
                        zuuluu = zuuluu.TransitionStates;
                        zuuluu = zuuluu.YEETED;
                        if(!(tangon !== zuuluu)) { _fun00074_ip = 84; continue _fun00073 }
 66:
                        tangon = _closure3_slot3;
                        zuuluu = tangon.set;
                        michal = _closure3_slot1;
                        michal = zuuluu.bind(tangon)(michal);
 84:
                        return entity;
                    }
                };
                report = oscard.bind(romeon)(report);
                oscard = _closure1_slot4;
                report = oscard.useCallback;
                michal = new Array(5);
                michal[0] = yankee;
                michal[1] = offset;
                michal[2] = verify;
                michal[3] = option;
                michal[4] = golfie;
                entity = function() {
                    _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                        michal = _closure3_slot5;
                        entity = michal.get;
                        entity = entity.bind(michal)();
                        tangon = entity.mode;
                        entity = _closure1_slot21;
                        entity = entity.DRAWER;
                        if(!(tangon !== entity)) { _fun00076_ip = 145; continue _fun00075 }
 38:
                        tangon = _closure3_slot3;
                        entity = tangon.get;
                        entity = entity.bind(tangon)();
                        if(entity) { _fun00076_ip = 87; continue _fun00075 }
 54:
                        tangon = _closure1_slot15;
                        entity = tangon.getState;
                        report = entity.bind(tangon)();
                        tangon = report.closeChannel;
                        entity = _closure3_slot0;
                        entity = tangon.bind(report)(entity);
                        entity = true;
                        _fun00076_ip = 143; continue _fun00075;
 87:
                        report = _closure3_slot2;
                        tangon = report.get;
                        report = tangon.bind(report)();
                        tangon = _closure1_slot16;
                        tangon = tangon.PANEL;
                        tangon = report === tangon;
                        if(!tangon) { _fun00076_ip = 140; continue _fun00075 }
 117:
                        golfie = _closure3_slot8;
                        report = _closure1_slot16;
                        oscard = report.PIP;
                        report = undefined;
                        report = golfie.bind(report)(oscard);
                        tangon = true;
 140:
                        entity = tangon;
 143:
                        _fun00076_ip = 174; continue _fun00075;
 145:
                        tangon = _closure3_slot6;
                        zuuluu = {};
                        michal = _closure1_slot21;
                        michal = michal.FLOATING_DEFAULT;
                        zuuluu['mode'] = michal;
                        michal = undefined;
                        michal = tangon.bind(michal)(zuuluu);
                        entity = true;
 174:
                        return entity;
                    }
                };
                michal = report.bind(oscard)(entity, michal);
                entity = {};
                entity['selectedMode'] = tangon;
                entity['setMode'] = zuuluu;
                entity['dismissPanel'] = michal;
                return entity;
            };
            source = oscard.bind(tangon)(kiloes);
            oscard = source.selectedMode;
            var _closure2_slot26 = oscard;
            kiloes = source.setMode;
            var _closure2_slot27 = kiloes;
            source = source.dismissPanel;
            var _closure2_slot28 = source;
            source = {};
            source['guildId'] = output;
            source['channelId'] = backup;
            source['layoutManager'] = update;
            source['focused'] = echoed;
            output = function(argFoo) { // Original name: useManuallyFocusedItem
                _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                    michal = argFoo;
                    option = michal.guildId;
                    var _closure3_slot0 = option;
                    golfie = michal.channelId;
                    var _closure3_slot1 = golfie;
                    offset = michal.layoutManager;
                    romeon = michal.focused;
                    var _closure3_slot2 = romeon;
                    oscard = undefined;
                    var _closure3_slot6 = oscard;
                    var _closure3_slot7 = oscard;
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 30;
                    michal = report[michal];
                    verify = zuuluu.bind(oscard)(michal);
                    report = verify.useStateFromStores;
                    michal = _closure1_slot8;
                    zuuluu = new Array(1);
                    zuuluu[0] = michal;
                    michal = function() {
                        zuuluu = _closure1_slot8;
                        michal = zuuluu.getSelectedParticipantId;
                        entity = _closure3_slot1;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    michal = report.bind(verify)(zuuluu, michal);
                    var _closure3_slot3 = michal;
                    yankee = _closure1_slot4;
                    verify = yankee.useCallback;
                    report = new Array(2);
                    report[0] = option;
                    report[1] = golfie;
                    zuuluu = function(argFoo) {
                        _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                            tangon = argFoo;
                            entity = null;
                            entity = entity == tangon;
                            if(entity) { _fun00080_ip = 61; continue _fun00079 }
 12:
                            report = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 47;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            oscard = report.bind(michal)(zuuluu);
                            report = oscard.isVoicePanelParticipantFocusable;
                            zuuluu = _closure3_slot0;
                            michal = _closure3_slot1;
                            entity = report.bind(oscard)(zuuluu, michal, tangon);
 61:
                            if(!entity) { _fun00080_ip = 108; continue _fun00079 }
 64:
                            zuuluu = _closure1_slot1;
                            michal = _closure1_slot2;
                            entity = 48;
                            michal = michal[entity];
                            entity = undefined;
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.selectParticipant;
                            entity = _closure3_slot1;
                            entity = michal.bind(zuuluu)(entity, tangon);
 108:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = verify.bind(yankee)(zuuluu, report);
                    var _closure3_slot4 = zuuluu;
                    verify = _closure1_slot4;
                    report = verify.useRef;
                    report = report.bind(verify)(oscard);
                    var _closure3_slot5 = report;
                    verify = offset.getTargetDimensions;
                    report = null;
                    yankee = report != michal;
                    report = undefined;
                    if(!yankee) { _fun00078_ip = 182; continue _fun00077 }
 179:
                    report = michal;
 182:
                    report = verify.bind(offset)(report);
                    _closure3_slot6 = report;
                    yankee = _closure1_slot4;
                    offset = yankee.useLayoutEffect;
                    verify = new Array(3);
                    verify[0] = romeon;
                    verify[1] = michal;
                    verify[2] = report;
                    report = function() {
                        _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                            entity = _closure3_slot3;
                            zuuluu = null;
                            entity = zuuluu != entity;
                            tangon = null;
                            if(!entity) { _fun00082_ip = 42; continue _fun00081 }
 18:
                            entity = {};
                            report = _closure3_slot3;
                            entity['id'] = report;
                            offset = _closure3_slot6;
                            yankee = entity;
                            report = copyDataProperties(yankee, offset);
                            tangon = entity;
 42:
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 23;
                            report = report[entity];
                            entity = undefined;
                            golfie = oscard.bind(entity)(report);
                            oscard = golfie.cheapWorkletShallowEqual;
                            option = zuuluu != tangon;
                            report = undefined;
                            if(!option) { _fun00082_ip = 85; continue _fun00081 }
 82:
                            report = tangon;
 85:
                            option = _closure3_slot5;
                            option = option.current;
                            verify = zuuluu != option;
                            zuuluu = undefined;
                            if(!verify) { _fun00082_ip = 106; continue _fun00081 }
 103:
                            zuuluu = option;
 106:
                            zuuluu = oscard.bind(golfie)(report, zuuluu);
                            if(zuuluu) { _fun00082_ip = 139; continue _fun00081 }
 115:
                            zuuluu = _closure3_slot5;
                            zuuluu['current'] = tangon;
                            zuuluu = _closure3_slot2;
                            michal = zuuluu.set;
                            michal = michal.bind(zuuluu)(tangon);
 139:
                            return entity;
                        }
                    };
                    report = offset.bind(yankee)(report, verify);
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    report = 47;
                    report = offset[report];
                    report = verify.bind(oscard)(report);
                    report = report.bind(oscard)(option, golfie, michal);
                    _closure3_slot7 = report;
                    option = _closure1_slot4;
                    golfie = option.useEffect;
                    oscard = new Array(3);
                    oscard[0] = michal;
                    oscard[1] = report;
                    oscard[2] = zuuluu;
                    report = function() {
                        _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                            michal = _closure3_slot3;
                            zuuluu = null;
                            if(!(zuuluu != michal)) { _fun00084_ip = 31; continue _fun00083 }
 13:
                            michal = _closure3_slot7;
                            if(michal) { _fun00084_ip = 31; continue _fun00083 }
 20:
                            michal = _closure3_slot4;
                            entity = undefined;
                            entity = michal.bind(entity)(zuuluu);
 31:
                            entity = undefined;
                            return entity;
                        }
                    };
                    report = golfie.bind(option)(report, oscard);
                    oscard = _closure1_slot4;
                    report = oscard.useEffect;
                    tangon = new Array(1);
                    tangon[0] = zuuluu;
                    entity = function() {
                        entity = function() {
                            zuuluu = _closure3_slot4;
                            michal = undefined;
                            entity = null;
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        return entity;
                    };
                    entity = report.bind(oscard)(entity, tangon);
                    entity = {};
                    entity['setFocused'] = zuuluu;
                    entity['manualFocusedItem'] = michal;
                    return entity;
                }
            };
            source = output.bind(tangon)(source);
            output = source.manualFocusedItem;
            source = source.setFocused;
            var _closure2_slot29 = source;
            sizing = verify[sizing];
            status = option.bind(tangon)(sizing);
            record = status.useStateFromStores;
            sizing = _closure1_slot7;
            source = new Array(2);
            source[0] = sizing;
            sizing = _closure1_slot12;
            source[1] = sizing;
            sizing = function() {
                _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                    zuuluu = _closure1_slot7;
                    entity = zuuluu.getConnectedActivityChannelId;
                    report = entity.bind(zuuluu)();
                    zuuluu = _closure1_slot12;
                    entity = zuuluu.getChannel;
                    tangon = entity.bind(zuuluu)(report);
                    zuuluu = _closure1_slot7;
                    entity = zuuluu.getActivityPanelMode;
                    zuuluu = entity.bind(zuuluu)();
                    entity = null;
                    entity = entity != tangon;
                    if(!entity) { _fun00086_ip = 65; continue _fun00085 }
 54:
                    tangon = _closure2_slot0;
                    entity = report !== tangon;
 65:
                    if(!entity) { _fun00086_ip = 82; continue _fun00085 }
 68:
                    michal = _closure1_slot26;
                    michal = michal.PANEL;
                    entity = zuuluu === michal;
 82:
                    return entity;
                }
            };
            sizing = record.bind(status)(source, sizing);
            var _closure2_slot30 = sizing;
            record = _closure1_slot47;
            source = {};
            source['isConnected'] = foxtra;
            source['windowDimensions'] = ctrled;
            source['contentDimensions'] = target;
            source['safeArea'] = vacuum;
            source['layoutManager'] = update;
            source['items'] = papara;
            source['pushToTalk'] = cntext;
            source = record.bind(tangon)(source);
            papara = _closure1_slot4;
            cntext = papara.useLayoutEffect;
            record = new Array(2);
            record[0] = oscard;
            record[1] = sizing;
            source = function() {
                _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                    tangon = _closure2_slot26;
                    michal = _closure1_slot16;
                    michal = michal.PANEL;
                    michal = tangon === michal;
                    if(!michal) { _fun00088_ip = 31; continue _fun00087 }
 27:
                    michal = _closure2_slot30;
 31:
                    if(!michal) { _fun00088_ip = 77; continue _fun00087 }
 34:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 29;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.updateActivityPanelMode;
                    entity = _closure1_slot26;
                    entity = entity.PIP;
                    entity = michal.bind(zuuluu)(entity);
 77:
                    entity = undefined;
                    return entity;
                }
            };
            source = cntext.bind(papara)(source, record);
            record = {};
            record['mode'] = offset;
            record['controlsSpecs'] = sequen;
            source = function(argFoo) { // Original name: useKeyboardDismissHandler
                entity = argFoo;
                romeon = entity.mode;
                var _closure3_slot0 = romeon;
                yankee = entity.controlsSpecs;
                var _closure3_slot1 = yankee;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                option = 22;
                zuuluu = offset[option];
                entity = undefined;
                report = verify.bind(entity)(zuuluu);
                tangon = report.useAnimatedReaction;
                zuuluu = function() { // Original name: a
                    zuuluu = _closure3_slot0;
                    entity = zuuluu.get;
                    zuuluu = entity.bind(zuuluu)();
                    entity = new Array(2);
                    entity[0] = zuuluu;
                    zuuluu = _closure3_slot1;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    michal = michal.mode;
                    entity[1] = michal;
                    return entity;
                };
                golfie = {};
                golfie['mode'] = romeon;
                golfie['controlsSpecs'] = yankee;
                zuuluu['__closure'] = golfie;
                golfie = 10791754460802.0;
                zuuluu['__workletHash'] = golfie;
                golfie = _closure1_slot43;
                zuuluu['__initData'] = golfie;
                michal = function(argFoo, argBar) { // Original name: n
                    _fun00089: for(var _fun00090_ip = 0; ; ) switch(_fun00090_ip) {
 0:
                        report = argFoo;
                        golfie = argBar;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 23;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        option = tangon.bind(entity)(zuuluu);
                        tangon = option.cheapWorkletArrayShallowEqual;
                        oscard = null;
                        verify = oscard != golfie;
                        zuuluu = undefined;
                        if(!verify) { _fun00090_ip = 51; continue _fun00089 }
 48:
                        zuuluu = golfie;
 51:
                        zuuluu = tangon.bind(option)(report, zuuluu);
                        if(zuuluu) { _fun00090_ip = 225; continue _fun00089 }
 63:
                        tangon = _closure1_slot3;
                        zuuluu = 2;
                        tangon = tangon.bind(entity)(report, zuuluu);
                        report = 0;
                        option = tangon[report];
                        zuuluu = 1;
                        tangon = tangon[zuuluu];
                        zuuluu = _closure1_slot21;
                        zuuluu = zuuluu.DRAWER;
                        zuuluu = tangon !== zuuluu;
                        if(zuuluu) { _fun00090_ip = 120; continue _fun00089 }
 106:
                        tangon = _closure1_slot16;
                        tangon = tangon.PANEL;
                        zuuluu = option !== tangon;
 120:
                        if(zuuluu) { _fun00090_ip = 170; continue _fun00089 }
 123:
                        tangon = _closure1_slot16;
                        tangon = tangon.PANEL;
                        tangon = option === tangon;
                        if(!tangon) { _fun00090_ip = 167; continue _fun00089 }
 140:
                        option = oscard == golfie;
                        oscard = undefined;
                        if(option) { _fun00090_ip = 153; continue _fun00089 }
 149:
                        oscard = golfie[report];
 153:
                        report = _closure1_slot16;
                        report = report.PANEL;
                        tangon = oscard !== report;
 167:
                        zuuluu = tangon;
 170:
                        if(!zuuluu) { _fun00090_ip = 225; continue _fun00089 }
 173:
                        report = _closure1_slot0;
                        oscard = _closure1_slot2;
                        michal = 22;
                        michal = oscard[michal];
                        tangon = report.bind(entity)(michal);
                        zuuluu = tangon.runOnJS;
                        michal = 51;
                        michal = oscard[michal];
                        michal = report.bind(entity)(michal);
                        michal = michal.dismissKeyboard;
                        michal = zuuluu.bind(tangon)(michal);
                        michal = michal.bind(entity)();
 225:
                        return entity;
                    }
                };
                golfie = {};
                yankee = 23;
                yankee = offset[yankee];
                yankee = verify.bind(entity)(yankee);
                yankee = yankee.cheapWorkletArrayShallowEqual;
                golfie['cheapWorkletArrayShallowEqual'] = yankee;
                yankee = _closure1_slot21;
                golfie['VoicePanelControlsModes'] = yankee;
                yankee = _closure1_slot16;
                golfie['VoicePanelModes'] = yankee;
                option = offset[option];
                option = verify.bind(entity)(option);
                option = option.runOnJS;
                golfie['runOnJS'] = option;
                option = 51;
                option = offset[option];
                option = verify.bind(entity)(option);
                option = option.dismissKeyboard;
                golfie['dismissKeyboard'] = option;
                michal['__closure'] = golfie;
                golfie = 12319127684124.0;
                michal['__workletHash'] = golfie;
                oscard = _closure1_slot44;
                michal['__initData'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            source = source.bind(tangon)(record);
            source = {};
            source['channelId'] = backup;
            source['transitionState'] = config;
            source['transitionCleanUp'] = michal;
            source['connected'] = result;
            source['mode'] = offset;
            source['setMode'] = kiloes;
            michal = function(argFoo) { // Original name: useTransitionState
                entity = argFoo;
                zuuluu = entity.channelId;
                var _closure3_slot0 = zuuluu;
                sizing = entity.transitionState;
                var _closure3_slot1 = sizing;
                tangon = entity.transitionCleanUp;
                var _closure3_slot2 = tangon;
                backup = entity.connected;
                var _closure3_slot3 = backup;
                foxtra = entity.mode;
                var _closure3_slot4 = foxtra;
                option = entity.setMode;
                var _closure3_slot5 = option;
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                verify = 22;
                report = yankee[verify];
                entity = undefined;
                golfie = offset.bind(entity)(report);
                report = golfie.useSharedValue;
                romeon = report.bind(golfie)(sizing);
                var _closure3_slot6 = romeon;
                kiloes = _closure1_slot4;
                golfie = kiloes.useLayoutEffect;
                report = new Array(4);
                report[0] = sizing;
                report[1] = romeon;
                report[2] = tangon;
                report[3] = zuuluu;
                tangon = function() {
                    _fun00091: for(var _fun00092_ip = 0; ; ) switch(_fun00092_ip) {
 0:
                        tangon = _closure3_slot6;
                        zuuluu = tangon.set;
                        oscard = _closure3_slot1;
                        zuuluu = zuuluu.bind(tangon)(oscard);
                        golfie = _closure1_slot0;
                        report = _closure1_slot2;
                        tangon = 46;
                        tangon = report[tangon];
                        report = undefined;
                        tangon = golfie.bind(report)(tangon);
                        tangon = tangon.TransitionStates;
                        tangon = tangon.YEETED;
                        if(!(oscard !== tangon)) { _fun00092_ip = 66; continue _fun00091 }
 64:
                        return report;
 66:
                        tangon = _closure1_slot9;
                        zuuluu = tangon.getState;
                        golfie = zuuluu.bind(tangon)();
                        oscard = golfie.requestFreezeLock;
                        tangon = {};
                        zuuluu = false;
                        tangon['lockEnabled'] = zuuluu;
                        offset = _closure3_slot0;
                        zuuluu = global;
                        option = zuuluu.HermesInternal;
                        verify = option.concat;
                        option = 'voice-panel-freeze-';
                        option = verify.bind(option)(offset);
                        tangon['key'] = option;
                        tangon = oscard.bind(golfie)(tangon);
                        tangon = zuuluu.setTimeout;
                        zuuluu = _closure3_slot2;
                        michal = 500;
                        michal = tangon.bind(report)(zuuluu, michal);
                        var _closure4_slot0 = michal;
                        entity = function() {
                            entity = global;
                            zuuluu = entity.clearTimeout;
                            michal = _closure4_slot0;
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        return entity;
                    }
                };
                tangon = golfie.bind(kiloes)(tangon, report);
                golfie = _closure1_slot4;
                report = golfie.useLayoutEffect;
                tangon = new Array(1);
                tangon[0] = zuuluu;
                zuuluu = function() {
                    entity = function() {
                        michal = _closure1_slot9;
                        entity = michal.getState;
                        zuuluu = entity.bind(michal)();
                        michal = zuuluu.requestFreezeLock;
                        entity = {};
                        tangon = false;
                        entity['lockEnabled'] = tangon;
                        oscard = _closure3_slot0;
                        tangon = global;
                        tangon = tangon.HermesInternal;
                        report = tangon.concat;
                        tangon = 'voice-panel-freeze-';
                        tangon = report.bind(tangon)(oscard);
                        entity['key'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                };
                zuuluu = report.bind(golfie)(zuuluu, tangon);
                zuuluu = yankee[verify];
                report = offset.bind(entity)(zuuluu);
                tangon = report.useAnimatedReaction;
                zuuluu = function() { // Original name: S
                    zuuluu = _closure3_slot3;
                    entity = zuuluu.get;
                    zuuluu = entity.bind(zuuluu)();
                    entity = new Array(3);
                    entity[0] = zuuluu;
                    tangon = _closure3_slot4;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    entity[1] = zuuluu;
                    zuuluu = _closure3_slot6;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    entity[2] = michal;
                    return entity;
                };
                golfie = {};
                golfie['connected'] = backup;
                golfie['mode'] = foxtra;
                golfie['sharedTransitionState'] = romeon;
                zuuluu['__closure'] = golfie;
                golfie = 7656858903152.0;
                zuuluu['__workletHash'] = golfie;
                golfie = _closure1_slot41;
                zuuluu['__initData'] = golfie;
                michal = function(argFoo, argBar) { // Original name: u
                    _fun00093: for(var _fun00094_ip = 0; ; ) switch(_fun00094_ip) {
 0:
                        oscard = argFoo;
                        option = argBar;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 23;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        golfie = tangon.bind(entity)(zuuluu);
                        tangon = golfie.cheapWorkletArrayShallowEqual;
                        report = null;
                        verify = report != option;
                        zuuluu = undefined;
                        if(!verify) { _fun00094_ip = 51; continue _fun00093 }
 48:
                        zuuluu = option;
 51:
                        zuuluu = tangon.bind(golfie)(oscard, zuuluu);
                        if(zuuluu) { _fun00094_ip = 447; continue _fun00093 }
 63:
                        tangon = _closure1_slot3;
                        zuuluu = 3;
                        offset = tangon.bind(entity)(oscard, zuuluu);
                        verify = 0;
                        zuuluu = offset[verify];
                        golfie = 1;
                        tangon = offset[golfie];
                        oscard = 2;
                        offset = offset[oscard];
                        yankee = _closure1_slot0;
                        romeon = _closure1_slot2;
                        oscard = 46;
                        oscard = romeon[oscard];
                        oscard = yankee.bind(entity)(oscard);
                        oscard = oscard.TransitionStates;
                        oscard = oscard.YEETED;
                        if(!(offset !== oscard)) { _fun00094_ip = 381; continue _fun00093 }
 135:
                        oscard = _closure1_slot16;
                        oscard = oscard.DISMISSED;
                        if(!(tangon !== oscard)) { _fun00094_ip = 254; continue _fun00093 }
 149:
                        oscard = zuuluu;
                        if(oscard) { _fun00094_ip = 174; continue _fun00093 }
 155:
                        yankee = report == option;
                        offset = undefined;
                        if(yankee) { _fun00094_ip = 168; continue _fun00093 }
 164:
                        offset = option[verify];
 168:
                        verify = true;
                        oscard = verify !== offset;
 174:
                        if(oscard) { _fun00094_ip = 191; continue _fun00093 }
 177:
                        verify = _closure1_slot16;
                        verify = verify.PIP;
                        oscard = tangon !== verify;
 191:
                        if(oscard) { _fun00094_ip = 447; continue _fun00093 }
 197:
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        oscard = 22;
                        oscard = offset[oscard];
                        offset = verify.bind(entity)(oscard);
                        verify = offset.runOnJS;
                        oscard = _closure3_slot5;
                        verify = verify.bind(offset)(oscard);
                        oscard = _closure1_slot16;
                        oscard = oscard.PANEL;
                        oscard = verify.bind(entity)(oscard);
                        _fun00094_ip = 447; continue _fun00093;
 254:
                        verify = report == option;
                        oscard = undefined;
                        if(verify) { _fun00094_ip = 267; continue _fun00093 }
 263:
                        oscard = option[golfie];
 267:
                        if(!(report == oscard)) { _fun00094_ip = 281; continue _fun00093 }
 271:
                        report = _closure1_slot16;
                        oscard = report.PANEL;
 281:
                        report = _closure1_slot16;
                        report = report.PANEL;
                        if(!(report !== oscard)) { _fun00094_ip = 321; continue _fun00093 }
 295:
                        report = _closure1_slot16;
                        report = report.PIP;
                        if(!(report !== oscard)) { _fun00094_ip = 321; continue _fun00093 }
 309:
                        report = _closure1_slot16;
                        report = report.PANEL;
                        _fun00094_ip = 337; continue _fun00093;
 321:
                        report = oscard;
                        if(zuuluu) { _fun00094_ip = 337; continue _fun00093 }
 327:
                        zuuluu = _closure1_slot16;
                        report = zuuluu.PANEL;
 337:
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        zuuluu = 22;
                        zuuluu = golfie[zuuluu];
                        golfie = oscard.bind(entity)(zuuluu);
                        oscard = golfie.runOnJS;
                        zuuluu = _closure3_slot5;
                        zuuluu = oscard.bind(golfie)(zuuluu);
                        zuuluu = zuuluu.bind(entity)(report);
                        _fun00094_ip = 447; continue _fun00093;
 381:
                        zuuluu = _closure1_slot16;
                        zuuluu = zuuluu.DISMISSED;
                        if(!(tangon !== zuuluu)) { _fun00094_ip = 447; continue _fun00093 }
 395:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        zuuluu = 22;
                        zuuluu = report[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.runOnJS;
                        zuuluu = _closure3_slot5;
                        zuuluu = tangon.bind(report)(zuuluu);
                        michal = _closure1_slot16;
                        michal = michal.DISMISSED;
                        michal = zuuluu.bind(entity)(michal);
 447:
                        return entity;
                    }
                };
                golfie = {};
                romeon = 23;
                romeon = yankee[romeon];
                romeon = offset.bind(entity)(romeon);
                romeon = romeon.cheapWorkletArrayShallowEqual;
                golfie['cheapWorkletArrayShallowEqual'] = romeon;
                romeon = 46;
                romeon = yankee[romeon];
                romeon = offset.bind(entity)(romeon);
                romeon = romeon.TransitionStates;
                golfie['TransitionStates'] = romeon;
                romeon = _closure1_slot16;
                golfie['VoicePanelModes'] = romeon;
                verify = yankee[verify];
                verify = offset.bind(entity)(verify);
                verify = verify.runOnJS;
                golfie['runOnJS'] = verify;
                golfie['setMode'] = option;
                michal['__closure'] = golfie;
                golfie = 5740547237317.0;
                michal['__workletHash'] = golfie;
                oscard = _closure1_slot42;
                michal['__initData'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            michal = michal.bind(tangon)(source);
            michal = 54;
            michal = verify[michal];
            verify = option.bind(tangon)(michal);
            option = verify.useControllerPIPState;
            michal = {};
            michal['channelId'] = backup;
            michal['connected'] = foxtra;
            source = null;
            config = source != output;
            source = undefined;
            if(!config) { _fun00034_ip = 872; continue _fun00033 }
 869:
            source = output;
 872:
            michal['focusedId'] = source;
            michal['layoutManager'] = update;
            michal['mode'] = oscard;
            option = option.bind(verify)(michal);
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            update = 55;
            update = verify[update];
            source = michal.bind(tangon)(update);
            update = {};
            update['mode'] = offset;
            update['controlsSpecs'] = sequen;
            update['safeArea'] = vacuum;
            update['windowDimensions'] = ctrled;
            update = source.bind(tangon)(update);
            _closure2_slot31 = update;
            source = {};
            source['channelId'] = backup;
            source['selectedMode'] = oscard;
            source['manualFocusedItem'] = output;
            update = function(argFoo) { // Original name: useSelectedParticipantEffects
                michal = argFoo;
                zuuluu = michal.channelId;
                var _closure3_slot0 = zuuluu;
                option = michal.selectedMode;
                var _closure3_slot1 = option;
                golfie = michal.manualFocusedItem;
                oscard = _closure1_slot4;
                report = oscard.useRef;
                tangon = null;
                tangon = report.bind(oscard)(tangon);
                var _closure3_slot2 = tangon;
                oscard = _closure1_slot4;
                report = oscard.useLayoutEffect;
                tangon = new Array(3);
                tangon[0] = option;
                tangon[1] = golfie;
                tangon[2] = zuuluu;
                zuuluu = function() {
                    _fun00095: for(var _fun00096_ip = 0; ; ) switch(_fun00096_ip) {
 0:
                        zuuluu = _closure1_slot14;
                        entity = zuuluu.getRTCConnection;
                        zuuluu = entity.bind(zuuluu)();
                        entity = null;
                        entity = entity != zuuluu;
                        if(!entity) { _fun00096_ip = 51; continue _fun00095 }
 26:
                        report = _closure1_slot14;
                        tangon = report.getChannelId;
                        report = tangon.bind(report)();
                        tangon = _closure3_slot0;
                        entity = report === tangon;
 51:
                        if(!entity) { _fun00096_ip = 173; continue _fun00095 }
 54:
                        entity = _closure3_slot2;
                        report = entity.current;
                        entity = _closure1_slot16;
                        entity = entity.PIP;
                        if(!(report !== entity)) { _fun00096_ip = 113; continue _fun00095 }
 80:
                        report = _closure3_slot1;
                        entity = _closure1_slot16;
                        entity = entity.PIP;
                        if(!(report === entity)) { _fun00096_ip = 113; continue _fun00095 }
 98:
                        report = zuuluu.setPipOpen;
                        entity = true;
                        entity = report.bind(zuuluu)(entity);
                        _fun00096_ip = 173; continue _fun00095;
 113:
                        entity = _closure3_slot2;
                        report = entity.current;
                        entity = _closure1_slot16;
                        entity = entity.PIP;
                        entity = report === entity;
                        if(!entity) { _fun00096_ip = 157; continue _fun00095 }
 139:
                        tangon = _closure3_slot1;
                        michal = _closure1_slot16;
                        michal = michal.PIP;
                        entity = tangon !== michal;
 157:
                        if(!entity) { _fun00096_ip = 173; continue _fun00095 }
 160:
                        michal = zuuluu.setPipOpen;
                        entity = false;
                        entity = michal.bind(zuuluu)(entity);
 173:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu = report.bind(oscard)(zuuluu, tangon);
                zuuluu = _closure1_slot4;
                michal = zuuluu.useLayoutEffect;
                entity = function() {
                    michal = _closure3_slot2;
                    entity = _closure3_slot1;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            update = update.bind(tangon)(source);
            source = {};
            source['channelId'] = backup;
            source['focused'] = echoed;
            source['pipState'] = option;
            source['manuallyFocusedId'] = output;
            update = function(argFoo) { // Original name: useHandleThermalState
                zuuluu = argFoo;
                entity = zuuluu.channelId;
                var _closure3_slot0 = entity;
                foxtra = zuuluu.focused;
                var _closure3_slot1 = foxtra;
                romeon = zuuluu.pipState;
                var _closure3_slot2 = romeon;
                golfie = zuuluu.manuallyFocusedId;
                var _closure3_slot3 = golfie;
                option = _closure1_slot4;
                report = option.useCallback;
                tangon = new Array(1);
                tangon[0] = entity;
                zuuluu = function(argFoo) {
                    _fun00097: for(var _fun00098_ip = 0; ; ) switch(_fun00098_ip) {
 0:
                        entity = argFoo;
                        offset = entity.focusedId;
                        yankee = entity.pipParticipantId;
                        zuuluu = _closure1_slot11;
                        entity = zuuluu.shouldReactToSeriousThermalStateWhenActivityFocused;
                        tangon = entity.bind(zuuluu)();
                        entity = zuuluu.consumedRequestToRespondToSeriousThermalState;
                        zuuluu = entity.bind(zuuluu)();
                        verify = null;
                        oscard = verify != offset;
                        if(!oscard) { _fun00098_ip = 87; continue _fun00097 }
 53:
                        golfie = _closure1_slot27;
                        option = _closure1_slot8;
                        report = option.getParticipant;
                        entity = _closure3_slot0;
                        report = report.bind(option)(entity, offset);
                        entity = undefined;
                        oscard = golfie.bind(entity)(report);
 87:
                        report = verify != yankee;
                        entity = undefined;
                        golfie = undefined;
                        if(!report) { _fun00098_ip = 121; continue _fun00097 }
 98:
                        offset = _closure1_slot8;
                        option = offset.getParticipant;
                        report = _closure3_slot0;
                        golfie = option.bind(offset)(report, yankee);
 121:
                        option = verify == golfie;
                        report = undefined;
                        if(option) { _fun00098_ip = 136; continue _fun00097 }
 130:
                        report = golfie.streamId;
 136:
                        report = verify != report;
                        if(!report) { _fun00098_ip = 179; continue _fun00097 }
 143:
                        offset = verify == golfie;
                        option = undefined;
                        if(offset) { _fun00098_ip = 173; continue _fun00097 }
 152:
                        golfie = golfie.voiceState;
                        verify = verify == golfie;
                        option = undefined;
                        if(verify) { _fun00098_ip = 173; continue _fun00097 }
 167:
                        option = golfie.selfVideo;
 173:
                        golfie = true;
                        report = golfie === option;
 179:
                        if(!oscard) { _fun00098_ip = 436; continue _fun00097 }
 185:
                        if(!tangon) { _fun00098_ip = 436; continue _fun00097 }
 191:
                        if(zuuluu) { _fun00098_ip = 436; continue _fun00097 }
 197:
                        tangon = _closure1_slot13;
                        zuuluu = tangon.isVideoEnabled;
                        zuuluu = zuuluu.bind(tangon)();
                        tangon = zuuluu;
                        if(tangon) { _fun00098_ip = 220; continue _fun00097 }
 217:
                        tangon = report;
 220:
                        if(!tangon) { _fun00098_ip = 370; continue _fun00097 }
 226:
                        verify = _closure1_slot1;
                        oscard = _closure1_slot2;
                        tangon = 24;
                        tangon = oscard[tangon];
                        option = verify.bind(entity)(tangon);
                        golfie = option.open;
                        tangon = {'key': 'EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE', 'icon': null, 'content': null, 'disableAnimations': true, 'toastDurationMs': 3000};
                        report = 25;
                        report = oscard[report];
                        report = verify.bind(entity)(report);
                        tangon['icon'] = report;
                        report = _closure1_slot0;
                        verify = 26;
                        offset = oscard[verify];
                        offset = report.bind(entity)(offset);
                        yankee = offset.intl;
                        offset = yankee.string;
                        verify = oscard[verify];
                        verify = report.bind(entity)(verify);
                        verify = verify.t;
                        verify = verify.O2IlPT;
                        verify = offset.bind(yankee)(verify);
                        tangon['content'] = verify;
                        tangon = golfie.bind(option)(tangon);
                        tangon = 27;
                        tangon = oscard[tangon];
                        report = report.bind(entity)(tangon);
                        tangon = report.trackActivityThermalStateNoticeShown;
                        tangon = tangon.bind(report)();
 370:
                        if(!zuuluu) { _fun00098_ip = 406; continue _fun00097 }
 373:
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 28;
                        zuuluu = report[zuuluu];
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.setVideoEnabled;
                        zuuluu = false;
                        zuuluu = tangon.bind(report)(zuuluu);
 406:
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 29;
                        michal = tangon[michal];
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.consumeRequestToReactToSeriousThermalState;
                        michal = michal.bind(zuuluu)();
 436:
                        return entity;
                    }
                };
                option = report.bind(option)(zuuluu, tangon);
                var _closure3_slot4 = option;
                report = _closure1_slot4;
                tangon = report.useEffect;
                zuuluu = new Array(4);
                zuuluu[0] = golfie;
                zuuluu[1] = romeon;
                zuuluu[2] = option;
                zuuluu[3] = entity;
                entity = function() {
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 30;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)(tangon);
                    report = zuuluu.BatchedStoreListener;
                    zuuluu = _closure1_slot11;
                    tangon = new Array(2);
                    tangon[0] = zuuluu;
                    michal = _closure1_slot8;
                    tangon[1] = michal;
                    michal = report.prototype;
                    zuuluu = Object.create(michal, {constructor: {value: report}});
                    golfie = function() {
                        _fun00099: for(var _fun00100_ip = 0; ; ) switch(_fun00100_ip) {
 0:
                            zuuluu = _closure3_slot4;
                            michal = {};
                            report = _closure3_slot3;
                            entity = null;
                            oscard = entity != report;
                            entity = undefined;
                            report = undefined;
                            if(!oscard) { _fun00100_ip = 30; continue _fun00099 }
 26:
                            report = _closure3_slot3;
 30:
                            michal['focusedId'] = report;
                            tangon = _closure3_slot2;
                            tangon = tangon.id;
                            michal['pipParticipantId'] = tangon;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        }
                    };
                    verify = zuuluu;
                    option = tangon;
                    michal = new verify[report](option, golfie, oscard);
                    tangon = michal instanceof Object ? michal : zuuluu;
                    var _closure4_slot0 = tangon;
                    zuuluu = tangon.attach;
                    oscard = _closure3_slot0;
                    michal = global;
                    michal = michal.HermesInternal;
                    report = michal.concat;
                    michal = 'thermal-state-reactions-';
                    michal = report.bind(michal)(oscard);
                    michal = zuuluu.bind(tangon)(michal);
                    entity = function() {
                        michal = _closure4_slot0;
                        entity = michal.detach;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    return entity;
                };
                entity = tangon.bind(report)(entity, zuuluu);
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                verify = 22;
                zuuluu = yankee[verify];
                entity = undefined;
                report = offset.bind(entity)(zuuluu);
                tangon = report.useAnimatedReaction;
                zuuluu = function() { // Original name: u
                    _fun00101: for(var _fun00102_ip = 0; ; ) switch(_fun00102_ip) {
 0:
                        zuuluu = _closure3_slot1;
                        entity = zuuluu.get;
                        entity = entity.bind(zuuluu)();
                        zuuluu = null;
                        tangon = zuuluu == entity;
                        zuuluu = undefined;
                        if(tangon) { _fun00102_ip = 32; continue _fun00101 }
 27:
                        zuuluu = entity.id;
 32:
                        entity = new Array(2);
                        entity[0] = zuuluu;
                        michal = _closure3_slot2;
                        michal = michal.id;
                        entity[1] = michal;
                        return entity;
                    }
                };
                golfie = {};
                golfie['focused'] = foxtra;
                golfie['pipState'] = romeon;
                zuuluu['__closure'] = golfie;
                golfie = 94735519164.0;
                zuuluu['__workletHash'] = golfie;
                golfie = _closure1_slot32;
                zuuluu['__initData'] = golfie;
                michal = function(argFoo, argBar) { // Original name: l
                    _fun00103: for(var _fun00104_ip = 0; ; ) switch(_fun00104_ip) {
 0:
                        report = argFoo;
                        golfie = argBar;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 23;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        oscard = tangon.bind(entity)(zuuluu);
                        tangon = oscard.cheapWorkletArrayShallowEqual;
                        zuuluu = null;
                        option = zuuluu != golfie;
                        zuuluu = undefined;
                        if(!option) { _fun00104_ip = 51; continue _fun00103 }
 48:
                        zuuluu = golfie;
 51:
                        zuuluu = tangon.bind(oscard)(report, zuuluu);
                        if(zuuluu) { _fun00104_ip = 140; continue _fun00103 }
 60:
                        tangon = _closure1_slot3;
                        zuuluu = 2;
                        tangon = tangon.bind(entity)(report, zuuluu);
                        zuuluu = 0;
                        report = tangon[zuuluu];
                        zuuluu = 1;
                        tangon = tangon[zuuluu];
                        zuuluu = _closure1_slot0;
                        oscard = _closure1_slot2;
                        michal = 22;
                        michal = oscard[michal];
                        oscard = zuuluu.bind(entity)(michal);
                        zuuluu = oscard.runOnJS;
                        michal = _closure3_slot4;
                        zuuluu = zuuluu.bind(oscard)(michal);
                        michal = {};
                        michal['focusedId'] = report;
                        michal['pipParticipantId'] = tangon;
                        michal = zuuluu.bind(entity)(michal);
 140:
                        return entity;
                    }
                };
                golfie = {};
                romeon = 23;
                romeon = yankee[romeon];
                romeon = offset.bind(entity)(romeon);
                romeon = romeon.cheapWorkletArrayShallowEqual;
                golfie['cheapWorkletArrayShallowEqual'] = romeon;
                verify = yankee[verify];
                verify = offset.bind(entity)(verify);
                verify = verify.runOnJS;
                golfie['runOnJS'] = verify;
                golfie['handleStateUpdates'] = option;
                michal['__closure'] = golfie;
                golfie = 15246095289306.0;
                michal['__workletHash'] = golfie;
                oscard = _closure1_slot33;
                michal['__initData'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            update = update.bind(tangon)(source);
            update = {};
            update['channelId'] = backup;
            update['focused'] = echoed;
            update['mode'] = offset;
            update['connected'] = result;
            echoed = function(argFoo) { // Original name: useActivityFocused
                zuuluu = argFoo;
                entity = zuuluu.channelId;
                var _closure3_slot0 = entity;
                backup = zuuluu.focused;
                var _closure3_slot1 = backup;
                foxtra = zuuluu.mode;
                var _closure3_slot2 = foxtra;
                romeon = zuuluu.connected;
                var _closure3_slot3 = romeon;
                report = _closure1_slot4;
                tangon = report.useCallback;
                zuuluu = new Array(1);
                zuuluu[0] = entity;
                entity = function(argFoo) {
                    _fun00105: for(var _fun00106_ip = 0; ; ) switch(_fun00106_ip) {
 0:
                        entity = argFoo;
                        golfie = entity.focusedParticipantId;
                        zuuluu = entity.voicePanelMode;
                        entity = entity.connectedValue;
                        if(!entity) { _fun00106_ip = 41; continue _fun00105 }
 24:
                        michal = _closure1_slot16;
                        michal = michal.PANEL;
                        entity = zuuluu === michal;
 41:
                        michal = null;
                        zuuluu = michal != golfie;
                        if(!zuuluu) { _fun00106_ip = 87; continue _fun00105 }
 50:
                        report = _closure1_slot27;
                        oscard = _closure1_slot8;
                        tangon = oscard.getParticipant;
                        michal = _closure3_slot0;
                        tangon = tangon.bind(oscard)(michal, golfie);
                        michal = undefined;
                        zuuluu = report.bind(michal)(tangon);
 87:
                        if(!zuuluu) { _fun00106_ip = 93; continue _fun00105 }
 90:
                        zuuluu = entity;
 93:
                        michal = _closure1_slot15;
                        entity = michal.getState;
                        michal = entity.bind(michal)();
                        entity = michal.setIsActivityFocused;
                        entity = entity.bind(michal)(zuuluu);
                        entity = undefined;
                        return entity;
                    }
                };
                option = tangon.bind(report)(entity, zuuluu);
                var _closure3_slot4 = option;
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                verify = 22;
                zuuluu = yankee[verify];
                entity = undefined;
                report = offset.bind(entity)(zuuluu);
                tangon = report.useAnimatedReaction;
                zuuluu = function() { // Original name: c
                    _fun00107: for(var _fun00108_ip = 0; ; ) switch(_fun00108_ip) {
 0:
                        zuuluu = _closure3_slot1;
                        entity = zuuluu.get;
                        entity = entity.bind(zuuluu)();
                        zuuluu = null;
                        tangon = zuuluu == entity;
                        zuuluu = undefined;
                        if(tangon) { _fun00108_ip = 32; continue _fun00107 }
 27:
                        zuuluu = entity.id;
 32:
                        entity = new Array(3);
                        entity[0] = zuuluu;
                        tangon = _closure3_slot2;
                        zuuluu = tangon.get;
                        zuuluu = zuuluu.bind(tangon)();
                        entity[1] = zuuluu;
                        zuuluu = _closure3_slot3;
                        michal = zuuluu.get;
                        michal = michal.bind(zuuluu)();
                        entity[2] = michal;
                        return entity;
                    }
                };
                golfie = {};
                golfie['focused'] = backup;
                golfie['mode'] = foxtra;
                golfie['connected'] = romeon;
                zuuluu['__closure'] = golfie;
                golfie = 16641161683997.0;
                zuuluu['__workletHash'] = golfie;
                golfie = _closure1_slot30;
                zuuluu['__initData'] = golfie;
                michal = function(argFoo, argBar) { // Original name: l
                    _fun00109: for(var _fun00110_ip = 0; ; ) switch(_fun00110_ip) {
 0:
                        report = argFoo;
                        golfie = argBar;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 23;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        oscard = tangon.bind(entity)(zuuluu);
                        tangon = oscard.cheapWorkletArrayShallowEqual;
                        zuuluu = null;
                        option = zuuluu != golfie;
                        zuuluu = undefined;
                        if(!option) { _fun00110_ip = 51; continue _fun00109 }
 48:
                        zuuluu = golfie;
 51:
                        zuuluu = tangon.bind(oscard)(report, zuuluu);
                        if(zuuluu) { _fun00110_ip = 152; continue _fun00109 }
 60:
                        tangon = _closure1_slot3;
                        zuuluu = 3;
                        tangon = tangon.bind(entity)(report, zuuluu);
                        zuuluu = 0;
                        oscard = tangon[zuuluu];
                        zuuluu = 1;
                        report = tangon[zuuluu];
                        zuuluu = 2;
                        tangon = tangon[zuuluu];
                        zuuluu = _closure1_slot0;
                        golfie = _closure1_slot2;
                        michal = 22;
                        michal = golfie[michal];
                        golfie = zuuluu.bind(entity)(michal);
                        zuuluu = golfie.runOnJS;
                        michal = _closure3_slot4;
                        zuuluu = zuuluu.bind(golfie)(michal);
                        michal = {};
                        michal['focusedParticipantId'] = oscard;
                        michal['voicePanelMode'] = report;
                        michal['connectedValue'] = tangon;
                        michal = zuuluu.bind(entity)(michal);
 152:
                        return entity;
                    }
                };
                golfie = {};
                romeon = 23;
                romeon = yankee[romeon];
                romeon = offset.bind(entity)(romeon);
                romeon = romeon.cheapWorkletArrayShallowEqual;
                golfie['cheapWorkletArrayShallowEqual'] = romeon;
                verify = yankee[verify];
                verify = offset.bind(entity)(verify);
                verify = verify.runOnJS;
                golfie['runOnJS'] = verify;
                golfie['handleAnimatedReaction'] = option;
                michal['__closure'] = golfie;
                golfie = 15290799116693.0;
                michal['__workletHash'] = golfie;
                oscard = _closure1_slot31;
                michal['__initData'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            echoed = echoed.bind(tangon)(update);
            echoed = {};
            echoed['setControlsMode'] = romeon;
            romeon = function(argFoo) { // Original name: useActivityConnected
                entity = argFoo;
                oscard = entity.setControlsMode;
                var _closure3_slot0 = oscard;
                report = _closure1_slot4;
                tangon = report.useCallback;
                zuuluu = new Array(1);
                zuuluu[0] = oscard;
                michal = function() {
                    zuuluu = _closure3_slot0;
                    michal = {};
                    entity = _closure1_slot21;
                    entity = entity.FLOATING_DEFAULT;
                    michal['mode'] = entity;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                tangon = tangon.bind(report)(michal, zuuluu);
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 21;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = {};
                michal['onTransition'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            romeon = romeon.bind(tangon)(echoed);
            romeon = 56;
            romeon = verify[romeon];
            romeon = michal.bind(tangon)(romeon);
            quebec = undefined;
            equals = backup;
            whisks = offset;
            limora = kiloes;
            sierra = result;
            romeon = quebec[romeon](equals, whisks, limora, sierra, status);
            romeon = 57;
            romeon = verify[romeon];
            romeon = michal.bind(tangon)(romeon);
            romeon = romeon.bind(tangon)();
            kiloes = _closure1_slot48;
            romeon = {};
            romeon['channelId'] = backup;
            romeon['isConnected'] = foxtra;
            romeon['selectedMode'] = oscard;
            romeon['manualFocusedItem'] = output;
            romeon['isTextActivityInPanelMode'] = sizing;
            romeon = kiloes.bind(tangon)(romeon);
            romeon = {};
            romeon['channelId'] = backup;
            romeon['isConnected'] = foxtra;
            romeon['selectedMode'] = oscard;
            oscard = function(argFoo) { // Original name: useVoicePanelAnalytics
                michal = argFoo;
                oscard = michal.channelId;
                var _closure3_slot0 = oscard;
                report = michal.isConnected;
                var _closure3_slot1 = report;
                golfie = michal.selectedMode;
                var _closure3_slot2 = golfie;
                tangon = _closure1_slot4;
                zuuluu = tangon.useEffect;
                michal = new Array(3);
                michal[0] = golfie;
                michal[1] = oscard;
                michal[2] = report;
                entity = function() {
                    _fun00111: for(var _fun00112_ip = 0; ; ) switch(_fun00112_ip) {
 0:
                        michal = _closure3_slot2;
                        entity = _closure1_slot16;
                        entity = entity.DISMISSED;
                        entity = michal !== entity;
                        if(!entity) { _fun00112_ip = 31; continue _fun00111 }
 27:
                        entity = _closure3_slot1;
 31:
                        if(!entity) { _fun00112_ip = 135; continue _fun00111 }
 34:
                        michal = _closure1_slot1;
                        verify = _closure1_slot2;
                        entity = 49;
                        entity = verify[entity];
                        option = undefined;
                        tangon = michal.bind(option)(entity);
                        zuuluu = tangon.track;
                        entity = _closure1_slot22;
                        michal = entity.VIDEO_LAYOUT_TOGGLED;
                        entity = {};
                        offset = _closure1_slot17;
                        golfie = _closure3_slot2;
                        golfie = offset.bind(option)(golfie);
                        entity['video_layout'] = golfie;
                        golfie = _closure1_slot0;
                        oscard = 50;
                        oscard = verify[oscard];
                        golfie = golfie.bind(option)(oscard);
                        oscard = golfie.collectVoiceAnalyticsMetadata;
                        report = _closure3_slot0;
                        yankee = oscard.bind(golfie)(report);
                        romeon = entity;
                        report = copyDataProperties(romeon, yankee);
                        entity = zuuluu.bind(tangon)(michal, entity);
 135:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = undefined;
                return entity;
            };
            oscard = oscard.bind(tangon)(romeon);
            oscard = function(argFoo) { // Original name: useShowFloatingCTA
                michal = argFoo;
                var _closure3_slot0 = michal;
                oscard = _closure1_slot4;
                report = oscard.useRef;
                zuuluu = -1;
                zuuluu = report.bind(oscard)(zuuluu);
                var _closure3_slot1 = zuuluu;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 22;
                report = report[zuuluu];
                zuuluu = undefined;
                oscard = oscard.bind(zuuluu)(report);
                report = oscard.useSharedValue;
                zuuluu = null;
                zuuluu = report.bind(oscard)(zuuluu);
                var _closure3_slot2 = zuuluu;
                golfie = _closure1_slot4;
                oscard = golfie.useCallback;
                report = new Array(2);
                report[0] = michal;
                report[1] = zuuluu;
                michal = function(argFoo) {
                    _fun00113: for(var _fun00114_ip = 0; ; ) switch(_fun00114_ip) {
 0:
                        tangon = argFoo;
                        zuuluu = _closure3_slot0;
                        entity = zuuluu.get;
                        report = entity.bind(zuuluu)();
                        zuuluu = _closure1_slot16;
                        zuuluu = zuuluu.PANEL;
                        if(!(report === zuuluu)) { _fun00114_ip = 133; continue _fun00113 }
 36:
                        report = _closure3_slot2;
                        zuuluu = report.set;
                        zuuluu = zuuluu.bind(report)(tangon);
                        zuuluu = null;
                        if(!(zuuluu != tangon)) { _fun00114_ip = 133; continue _fun00113 }
 56:
                        zuuluu = global;
                        oscard = zuuluu.clearTimeout;
                        michal = _closure3_slot1;
                        tangon = michal.current;
                        report = undefined;
                        tangon = oscard.bind(report)(tangon);
                        tangon = zuuluu.setTimeout;
                        zuuluu = _closure1_slot0;
                        oscard = _closure1_slot2;
                        entity = 31;
                        entity = oscard[entity];
                        entity = zuuluu.bind(report)(entity);
                        zuuluu = entity.FLOATING_CTA_HIDE_TIMEOUT;
                        entity = function() {
                            zuuluu = _closure3_slot2;
                            michal = zuuluu.set;
                            entity = null;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        entity = tangon.bind(report)(entity, zuuluu);
                        michal['current'] = entity;
 133:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = oscard.bind(golfie)(michal, report);
                oscard = _closure1_slot4;
                report = oscard.useLayoutEffect;
                tangon = function() {
                    entity = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        entity = _closure3_slot1;
                        michal = entity.current;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return entity;
                };
                entity = new Array(0);
                entity = report.bind(oscard)(tangon, entity);
                entity = {};
                entity['showFloatingCTA'] = zuuluu;
                entity['setShowFloatingCTA'] = michal;
                return entity;
            };
            oscard = oscard.bind(tangon)(offset);
            offset = oscard.showFloatingCTA;
            _closure2_slot32 = offset;
            oscard = oscard.setShowFloatingCTA;
            _closure2_slot33 = oscard;
            offset = _closure1_slot4;
            oscard = offset.useRef;
            oscard = oscard.bind(offset)(tangon);
            _closure2_slot34 = oscard;
            oscard = _closure1_slot0;
            offset = 22;
            offset = verify[offset];
            romeon = oscard.bind(tangon)(offset);
            offset = romeon.useAnimatedRef;
            offset = offset.bind(romeon)();
            _closure2_slot35 = offset;
            romeon = _closure1_slot4;
            offset = romeon.useState;
            zuuluu = function() {
                entity = {};
                zuuluu = _closure2_slot0;
                entity['channelId'] = zuuluu;
                zuuluu = _closure2_slot4;
                entity['connected'] = zuuluu;
                zuuluu = _closure2_slot5;
                entity['contentDimensions'] = zuuluu;
                zuuluu = _closure2_slot22;
                entity['controlsSpecs'] = zuuluu;
                zuuluu = _closure2_slot28;
                entity['dismissPanel'] = zuuluu;
                zuuluu = _closure2_slot34;
                entity['dismissToPIPGestureRef'] = zuuluu;
                zuuluu = _closure2_slot6;
                entity['dragScrolling'] = zuuluu;
                zuuluu = _closure2_slot7;
                entity['focused'] = zuuluu;
                zuuluu = _closure2_slot21;
                entity['generateStateLocker'] = zuuluu;
                zuuluu = _closure2_slot1;
                entity['guildId'] = zuuluu;
                zuuluu = _closure2_slot24;
                entity['hideControls'] = zuuluu;
                zuuluu = _closure2_slot8;
                entity['isCall'] = zuuluu;
                zuuluu = _closure2_slot16;
                entity['isFocusedVideoZoomed'] = zuuluu;
                zuuluu = _closure2_slot9;
                entity['layoutManager'] = zuuluu;
                zuuluu = _closure2_slot10;
                entity['mode'] = zuuluu;
                zuuluu = _closure2_slot20;
                entity['morphablePanelMode'] = zuuluu;
                zuuluu = _closure2_slot3;
                entity['mountedCards'] = zuuluu;
                zuuluu = _closure2_slot31;
                entity['pipAvoidanceSpecs'] = zuuluu;
                zuuluu = _closure2_slot35;
                entity['pipContainerRef'] = zuuluu;
                zuuluu = _closure2_slot11;
                entity['preJoinContentSize'] = zuuluu;
                zuuluu = _closure2_slot12;
                entity['safeArea'] = zuuluu;
                zuuluu = _closure2_slot13;
                entity['scrollPosition'] = zuuluu;
                zuuluu = _closure2_slot25;
                entity['setControlsMode'] = zuuluu;
                zuuluu = _closure2_slot29;
                entity['setFocused'] = zuuluu;
                zuuluu = _closure2_slot17;
                entity['setIsFocusedVideoZoomed'] = zuuluu;
                zuuluu = _closure2_slot27;
                entity['setMode'] = zuuluu;
                zuuluu = _closure2_slot33;
                entity['setShowFloatingCTA'] = zuuluu;
                zuuluu = _closure2_slot23;
                entity['showControls'] = zuuluu;
                zuuluu = _closure2_slot32;
                entity['showFloatingCTA'] = zuuluu;
                zuuluu = _closure2_slot2;
                entity['streamOutputSinkStack'] = zuuluu;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 58;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                zuuluu = zuuluu.usePIPState;
                entity['usePIPState'] = zuuluu;
                zuuluu = _closure2_slot18;
                entity['useReducedMotion'] = zuuluu;
                zuuluu = _closure2_slot14;
                entity['windowDimensions'] = zuuluu;
                zuuluu = _closure2_slot15;
                entity['wrapperDimensions'] = zuuluu;
                michal = _closure2_slot19;
                entity['wrapperOffset'] = michal;
                return entity;
            };
            offset = offset.bind(romeon)(zuuluu);
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.bind(tangon)(offset, yankee);
            report = zuuluu[report];
            zuuluu = _closure1_slot29;
            entity = 59;
            entity = verify[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Provider;
            entity = {};
            entity['value'] = report;
            report = 58;
            report = verify[report];
            report = oscard.bind(tangon)(report);
            report = report.VoicePanelPIPStateContext;
            oscard = report.Provider;
            report = {};
            report['value'] = option;
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();