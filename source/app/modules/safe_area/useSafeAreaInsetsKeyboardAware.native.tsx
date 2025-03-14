// app/modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot6 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useSafeAreaInsetsKeyboardAware
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[0];
            tangon = undefined;
            if(!(zuuluu === tangon)) { _fun00002_ip = 13; continue _fun00001 }
 11:
            zuuluu = {};
 13:
            option = zuuluu.includeKeyboardHeightIOS;
            if(!(option === tangon)) { _fun00002_ip = 25; continue _fun00001 }
 23:
            option = false;
 25:
            michal = zuuluu.includeCustomKeyboardHeightIOS;
            if(!(michal === tangon)) { _fun00002_ip = 37; continue _fun00001 }
 35:
            michal = true;
 37:
            var _closure2_slot0 = michal;
            offset = zuuluu.includeKeyboardHeightAndroid;
            if(!(offset === tangon)) { _fun00002_ip = 53; continue _fun00001 }
 51:
            offset = false;
 53:
            oscard = zuuluu.scrollViewRef;
            report = zuuluu.scrollTargets;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            verify = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 5;
            golfie = romeon[golfie];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.bind(tangon)();
            yankee = _closure1_slot0;
            verify = 6;
            verify = romeon[verify];
            foxtra = yankee.bind(tangon)(verify);
            romeon = foxtra.useStateFromStores;
            verify = _closure1_slot5;
            yankee = new Array(1);
            yankee[0] = verify;
            verify = function() {
                entity = _closure1_slot5;
                entity = entity.keyboardDuration;
                return entity;
            };
            yankee = romeon.bind(foxtra)(yankee, verify);
            kiloes = _closure1_slot4;
            romeon = kiloes.useCallback;
            verify = new Array(1);
            verify[0] = michal;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 7;
                    entity = option[entity];
                    oscard = undefined;
                    tangon = golfie.bind(oscard)(entity);
                    michal = tangon.getSystemKeyboardHeight;
                    entity = {};
                    report = 8;
                    report = option[report];
                    oscard = golfie.bind(oscard)(report);
                    report = oscard.isIOS;
                    report = report.bind(oscard)();
                    entity['excludeSafeAreaInsets'] = report;
                    entity = michal.bind(tangon)(entity);
                    report = 0;
                    if(!(report === entity)) { _fun00004_ip = 122; continue _fun00003 }
 71:
                    michal = _closure1_slot5;
                    oscard = michal.keyboardType;
                    michal = _closure1_slot6;
                    tangon = michal.SYSTEM;
                    michal = 0;
                    if(!(oscard !== tangon)) { _fun00004_ip = 119; continue _fun00003 }
 97:
                    tangon = _closure2_slot0;
                    michal = 0;
                    if(!tangon) { _fun00004_ip = 119; continue _fun00003 }
 109:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.customKeyboardHeight;
 119:
                    entity = michal;
 122:
                    return entity;
                }
            };
            romeon = romeon.bind(kiloes)(michal, verify);
            _closure2_slot1 = romeon;
            verify = kiloes.useRef;
            michal = romeon.bind(tangon)();
            michal = verify.bind(kiloes)(michal);
            _closure2_slot2 = michal;
            verify = kiloes.useState;
            michal = michal.current;
            foxtra = verify.bind(kiloes)(michal);
            verify = _closure1_slot3;
            michal = 2;
            backup = verify.bind(tangon)(foxtra, michal);
            verify = 0;
            michal = backup[verify];
            foxtra = 1;
            foxtra = backup[foxtra];
            _closure2_slot3 = foxtra;
            backup = kiloes.useEffect;
            foxtra = new Array(1);
            foxtra[0] = romeon;
            romeon = function() {
                tangon = function() { // Original name: maybeUpdateKeyboardHeight
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure2_slot1;
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)();
                        tangon = _closure2_slot2;
                        tangon = tangon.current;
                        if(!(tangon !== zuuluu)) { _fun00006_ip = 45; continue _fun00005 }
 26:
                        tangon = _closure2_slot2;
                        tangon['current'] = zuuluu;
                        michal = _closure2_slot3;
                        michal = michal.bind(entity)(zuuluu);
 45:
                        return entity;
                    }
                };
                var _closure3_slot0 = tangon;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 7;
                report = report[zuuluu];
                zuuluu = undefined;
                report = oscard.bind(zuuluu)(report);
                zuuluu = report.subscribeToSystemKeyboardHeight;
                zuuluu = zuuluu.bind(report)(tangon);
                zuuluu = _closure1_slot5;
                michal = zuuluu.addChangeListener;
                michal = michal.bind(zuuluu)(tangon);
                entity = function() {
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.removeChangeListener;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            romeon = backup.bind(kiloes)(romeon, foxtra);
            romeon = {};
            romeon['keyboardHeight'] = michal;
            romeon['keyboardDuration'] = yankee;
            yankee = !option;
            if(yankee) { _fun00002_ip = 314; continue _fun00001 }
 285:
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            foxtra = 8;
            foxtra = kiloes[foxtra];
            backup = backup.bind(tangon)(foxtra);
            foxtra = backup.isAndroid;
            yankee = foxtra.bind(backup)();
 314:
            romeon['disabled'] = yankee;
            yankee = function(argFoo) { // Original name: useAnimateChanges
                michal = argFoo;
                golfie = michal.keyboardHeight;
                oscard = michal.keyboardDuration;
                var _closure3_slot0 = oscard;
                report = michal.disabled;
                var _closure3_slot1 = report;
                tangon = _closure1_slot4;
                michal = tangon.useRef;
                michal = michal.bind(tangon)();
                var _closure3_slot2 = michal;
                zuuluu = tangon.useEffect;
                michal = new Array(3);
                michal[0] = golfie;
                michal[1] = oscard;
                michal[2] = report;
                entity = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = _closure3_slot2;
                        michal = michal.current;
                        if(!michal) { _fun00008_ip = 74; continue _fun00007 }
 15:
                        zuuluu = _closure3_slot0;
                        michal = 0;
                        if(!(michal !== zuuluu)) { _fun00008_ip = 74; continue _fun00007 }
 25:
                        michal = _closure3_slot1;
                        if(michal) { _fun00008_ip = 74; continue _fun00007 }
 32:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 4;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.DeprecatedLayoutAnimationKeyboard;
                        michal = _closure3_slot0;
                        michal = zuuluu.bind(tangon)(michal);
                        _fun00008_ip = 86; continue _fun00007;
 74:
                        michal = _closure3_slot2;
                        entity = true;
                        michal['current'] = entity;
 86:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = undefined;
                return entity;
            };
            yankee = yankee.bind(tangon)(romeon);
            if(!option) { _fun00002_ip = 364; continue _fun00001 }
 331:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 8;
            option = romeon[option];
            yankee = yankee.bind(tangon)(option);
            option = yankee.isIOS;
            option = option.bind(yankee)();
            if(option) { _fun00002_ip = 403; continue _fun00001 }
 364:
            option = 0;
            if(!offset) { _fun00002_ip = 406; continue _fun00001 }
 369:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 8;
            zuuluu = yankee[zuuluu];
            offset = offset.bind(tangon)(zuuluu);
            zuuluu = offset.isAndroid;
            zuuluu = zuuluu.bind(offset)();
            option = 0;
            if(!zuuluu) { _fun00002_ip = 406; continue _fun00001 }
 403:
            option = michal;
 406:
            zuuluu = golfie;
            if(!(michal > verify)) { _fun00002_ip = 437; continue _fun00001 }
 413:
            michal = {};
            output = michal;
            sizing = golfie;
            golfie = copyDataProperties(output, sizing);
            golfie = 'bottom';
            michal[golfie] = option;
            zuuluu = michal;
 437:
            michal = {};
            michal['insets'] = zuuluu;
            michal['scrollViewRef'] = oscard;
            michal['scrollTargets'] = report;
            entity = function(argFoo) { // Original name: useScrollPositionMaintainer
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.insets;
                    option = zuuluu.bottom;
                    var _closure3_slot0 = option;
                    golfie = michal.scrollViewRef;
                    var _closure3_slot1 = golfie;
                    michal = michal.scrollTargets;
                    var _closure3_slot2 = michal;
                    zuuluu = undefined;
                    var _closure3_slot3 = zuuluu;
                    var _closure3_slot4 = zuuluu;
                    var _closure3_slot5 = zuuluu;
                    var _closure3_slot6 = zuuluu;
                    var _closure3_slot7 = zuuluu;
                    oscard = _closure1_slot4;
                    report = oscard.useRef;
                    verify = null;
                    tangon = michal;
                    if(!(verify == tangon)) { _fun00010_ip = 87; continue _fun00009 }
 83:
                    tangon = new Array(0);
 87:
                    oscard = report.bind(oscard)(tangon);
                    _closure3_slot3 = oscard;
                    report = _closure1_slot4;
                    tangon = report.useEffect;
                    zuuluu = new Array(1);
                    zuuluu[0] = michal;
                    michal = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            michal = _closure3_slot3;
                            tangon = _closure3_slot2;
                            entity = null;
                            if(!(entity == tangon)) { _fun00012_ip = 23; continue _fun00011 }
 17:
                            entity = new Array(0);
                            _fun00012_ip = 27; continue _fun00011;
 23:
                            entity = _closure3_slot2;
 27:
                            michal['current'] = entity;
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = tangon.bind(report)(michal, zuuluu);
                    zuuluu = report.useRef;
                    michal = false;
                    michal = zuuluu.bind(report)(michal);
                    _closure3_slot4 = michal;
                    michal = report.useRef;
                    tangon = 0;
                    michal = michal.bind(report)(tangon);
                    _closure3_slot5 = michal;
                    michal = report.useRef;
                    michal = michal.bind(report)(tangon);
                    _closure3_slot6 = michal;
                    verify = report.useCallback;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        tangon = _closure3_slot5;
                        zuuluu = entity.nativeEvent;
                        zuuluu = zuuluu.contentOffset;
                        zuuluu = zuuluu.y;
                        tangon['current'] = zuuluu;
                        michal = _closure3_slot6;
                        entity = entity.nativeEvent;
                        entity = entity.contentSize;
                        entity = entity.height;
                        michal['current'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    michal = new Array(0);
                    michal = verify.bind(report)(zuuluu, michal);
                    zuuluu = report.useRef;
                    zuuluu = zuuluu.bind(report)(tangon);
                    _closure3_slot7 = zuuluu;
                    tangon = report.useEffect;
                    zuuluu = new Array(3);
                    zuuluu[0] = option;
                    zuuluu[1] = golfie;
                    zuuluu[2] = oscard;
                    entity = function() {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            zuuluu = _closure3_slot7;
                            tangon = zuuluu.current;
                            zuuluu = _closure3_slot0;
                            if(!(!(tangon >= zuuluu))) { _fun00014_ip = 148; continue _fun00013 }
 25:
                            zuuluu = _closure3_slot0;
                            tangon = 0;
                            if(!(tangon !== zuuluu)) { _fun00014_ip = 148; continue _fun00013 }
 35:
                            report = _closure3_slot7;
                            zuuluu = _closure3_slot0;
                            report['current'] = zuuluu;
                            zuuluu = _closure3_slot4;
                            zuuluu = zuuluu.current;
                            if(!zuuluu) { _fun00014_ip = 89; continue _fun00013 }
 61:
                            zuuluu = _closure3_slot3;
                            zuuluu = zuuluu.current;
                            zuuluu = zuuluu.length;
                            if(!(tangon !== zuuluu)) { _fun00014_ip = 89; continue _fun00013 }
 79:
                            tangon = _closure3_slot1;
                            zuuluu = null;
                            if(!(zuuluu == tangon)) { _fun00014_ip = 103; continue _fun00013 }
 89:
                            tangon = _closure3_slot4;
                            zuuluu = true;
                            tangon['current'] = zuuluu;
                            _fun00014_ip = 162; continue _fun00013;
 103:
                            zuuluu = global;
                            oscard = zuuluu.setTimeout;
                            zuuluu = _closure1_slot5;
                            report = zuuluu.keyboardDuration;
                            tangon = undefined;
                            zuuluu = function() {
                                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                    michal = _closure3_slot3;
                                    tangon = michal.current;
                                    zuuluu = tangon.find;
                                    michal = function(argFoo) {
                                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                            entity = argFoo;
                                            zuuluu = entity.current;
                                            entity = null;
                                            michal = entity == zuuluu;
                                            entity = undefined;
                                            if(michal) { _fun00018_ip = 29; continue _fun00017 }
 19:
                                            michal = zuuluu.isFocused;
                                            entity = michal.bind(zuuluu)();
 29:
                                            return entity;
                                        }
                                    };
                                    zuuluu = zuuluu.bind(tangon)(michal);
                                    michal = null;
                                    if(!(michal != zuuluu)) { _fun00016_ip = 60; continue _fun00015 }
 35:
                                    zuuluu = zuuluu.current;
                                    if(!(michal != zuuluu)) { _fun00016_ip = 60; continue _fun00015 }
 44:
                                    michal = zuuluu.measure;
                                    entity = function(argFoo, argBar) {
                                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                            report = argBar;
                                            entity = _closure3_slot1;
                                            option = entity.current;
                                            oscard = null;
                                            tangon = oscard == option;
                                            entity = undefined;
                                            michal = undefined;
                                            if(tangon) { _fun00020_ip = 70; continue _fun00019 }
 28:
                                            tangon = option.scrollTo;
                                            tangon = oscard == tangon;
                                            michal = undefined;
                                            if(tangon) { _fun00020_ip = 70; continue _fun00019 }
 43:
                                            golfie = option.scrollTo;
                                            tangon = {'x': 0, 'y': null, 'animated': true};
                                            tangon['y'] = report;
                                            michal = golfie.bind(option)(tangon);
 70:
                                            michal = oscard != michal;
                                            tangon = undefined;
                                            if(michal) { _fun00020_ip = 95; continue _fun00019 }
 79:
                                            zuuluu = _closure3_slot1;
                                            zuuluu = zuuluu.current;
                                            michal = oscard == zuuluu;
                                            tangon = zuuluu;
 95:
                                            if(michal) { _fun00020_ip = 108; continue _fun00019 }
 98:
                                            zuuluu = tangon.scrollToOffset;
                                            michal = oscard == zuuluu;
 108:
                                            if(michal) { _fun00020_ip = 136; continue _fun00019 }
 111:
                                            zuuluu = tangon.scrollToOffset;
                                            michal = {};
                                            michal['offset'] = report;
                                            report = true;
                                            michal['animated'] = report;
                                            michal = zuuluu.bind(tangon)(michal);
 136:
                                            return entity;
                                        }
                                    };
                                    entity = michal.bind(zuuluu)(entity);
 60:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            zuuluu = oscard.bind(tangon)(zuuluu, report);
                            var _closure4_slot0 = zuuluu;
                            michal = function() {
                                entity = global;
                                zuuluu = entity.clearTimeout;
                                michal = _closure4_slot0;
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            return michal;
 148:
                            michal = _closure3_slot7;
                            entity = _closure3_slot0;
                            michal['current'] = entity;
 162:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = tangon.bind(report)(entity, zuuluu);
                    entity = {};
                    entity['onScroll'] = michal;
                    return entity;
                }
            };
            michal = entity.bind(tangon)(michal);
            entity = {};
            entity['insets'] = zuuluu;
            michal = michal.onScroll;
            entity['onScroll'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();