// app/modules/keyboard/native/InlinePortalKeyboard.ios.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.NativeModules;
    var _closure1_slot4 = verify;
    verify = tangon.findNodeHandle;
    var _closure1_slot5 = verify;
    tangon = tangon.useWindowDimensions;
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KeyboardTypes;
    var _closure1_slot9 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: InlinePortalKeyboard
        michal = argFoo;
        foxtra = michal.channelId;
        zuuluu = michal.messagesRef;
        var _closure2_slot0 = zuuluu;
        tangon = _closure1_slot3;
        report = tangon.useId;
        report = report.bind(tangon)();
        var _closure2_slot1 = report;
        golfie = tangon.useCallback;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        zuuluu = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                report = entity.current;
                michal = null;
                tangon = michal == report;
                entity = undefined;
                zuuluu = undefined;
                if(tangon) { _fun00002_ip = 35; continue _fun00001 }
 25:
                tangon = report.getChatRef;
                zuuluu = tangon.bind(report)();
 35:
                if(!(michal != zuuluu)) { _fun00002_ip = 68; continue _fun00001 }
 39:
                tangon = _closure1_slot5;
                zuuluu = zuuluu.current;
                zuuluu = tangon.bind(entity)(zuuluu);
                if(!(michal != zuuluu)) { _fun00002_ip = 68; continue _fun00001 }
 60:
                michal = argFoo;
                michal = michal.bind(entity)(zuuluu);
 68:
                return entity;
            }
        };
        oscard = golfie.bind(tangon)(zuuluu, oscard);
        var _closure2_slot2 = oscard;
        romeon = _closure1_slot0;
        backup = _closure1_slot2;
        zuuluu = 5;
        golfie = backup[zuuluu];
        zuuluu = undefined;
        offset = romeon.bind(zuuluu)(golfie);
        verify = offset.useStateFromStoresObject;
        golfie = _closure1_slot8;
        option = new Array(2);
        option[0] = golfie;
        golfie = _closure1_slot7;
        option[1] = golfie;
        golfie = function() {
            entity = {};
            zuuluu = _closure1_slot8;
            tangon = zuuluu.keyboardType;
            entity['keyboardType'] = tangon;
            tangon = zuuluu.keyboardHeight;
            entity['systemKeyboardHeight'] = tangon;
            tangon = zuuluu.keyboardOpen;
            entity['systemKeyboardOpen'] = tangon;
            zuuluu = zuuluu.systemKeyboardWillOpen;
            entity['systemKeyboardWillOpen'] = zuuluu;
            michal = _closure1_slot7;
            michal = michal.systemPrefersCrossfades;
            entity['systemPrefersCrossfades'] = michal;
            return entity;
        };
        verify = verify.bind(offset)(option, golfie);
        var _closure2_slot3 = verify;
        option = _closure1_slot1;
        golfie = 6;
        golfie = backup[golfie];
        option = option.bind(zuuluu)(golfie);
        golfie = function() {
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 7;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = zuuluu.usePortalKeyboardStore;
                    zuuluu = tangon.getState;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = zuuluu.keyboard;
                    zuuluu = null;
                    zuuluu = zuuluu != tangon;
                    if(!zuuluu) { _fun00004_ip = 73; continue _fun00003 }
 56:
                    report = tangon.handlerId;
                    tangon = _closure2_slot1;
                    zuuluu = report === tangon;
 73:
                    if(!zuuluu) { _fun00004_ip = 138; continue _fun00003 }
 76:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 8;
                    michal = tangon[michal];
                    report = zuuluu.bind(entity)(michal);
                    michal = report.dismissKeyboard;
                    michal = michal.bind(report)();
                    michal = 9;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.batchUpdates;
                    michal = function() {
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        tangon = 7;
                        entity = golfie[tangon];
                        report = undefined;
                        entity = oscard.bind(report)(entity);
                        zuuluu = entity.usePortalKeyboardStore;
                        michal = zuuluu.setState;
                        entity = {};
                        tangon = golfie[tangon];
                        tangon = oscard.bind(report)(tangon);
                        tangon = tangon.PortalKeyboardState;
                        tangon = tangon.CLOSED;
                        entity['state'] = tangon;
                        tangon = null;
                        entity['keyboard'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
 138:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        golfie = 7;
        option = backup[golfie];
        yankee = romeon.bind(zuuluu)(option);
        offset = yankee.usePortalKeyboardStore;
        option = function(argFoo) {
            entity = argFoo;
            entity = entity.keyboard;
            return entity;
        };
        yankee = offset.bind(yankee)(option);
        var _closure2_slot4 = yankee;
        golfie = backup[golfie];
        offset = romeon.bind(zuuluu)(golfie);
        option = offset.usePortalKeyboardStore;
        golfie = function(argFoo) {
            entity = argFoo;
            entity = entity.state;
            return entity;
        };
        offset = option.bind(offset)(golfie);
        var _closure2_slot5 = offset;
        michal = _closure1_slot6;
        michal = michal.bind(zuuluu)();
        option = michal.height;
        var _closure2_slot6 = option;
        golfie = michal.width;
        var _closure2_slot7 = golfie;
        michal = 10;
        michal = backup[michal];
        zuuluu = romeon.bind(zuuluu)(michal);
        michal = zuuluu.useKeyboardActionSheetHeight;
        michal = michal.bind(zuuluu)();
        romeon = michal.minimum;
        var _closure2_slot8 = romeon;
        zuuluu = tangon.useRef;
        michal = false;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot9 = michal;
        zuuluu = tangon.useLayoutEffect;
        michal = new Array(9);
        michal[0] = foxtra;
        michal[1] = romeon;
        michal[2] = yankee;
        michal[3] = offset;
        michal[4] = verify;
        michal[5] = option;
        michal[6] = golfie;
        michal[7] = oscard;
        michal[8] = report;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                oscard = _closure2_slot3;
                option = oscard.keyboardType;
                report = oscard.systemKeyboardHeight;
                zuuluu = oscard.systemKeyboardOpen;
                tangon = oscard.systemKeyboardWillOpen;
                golfie = oscard.systemPrefersCrossfades;
                oscard = _closure2_slot9;
                oscard = oscard.current;
                offset = _closure2_slot4;
                verify = null;
                if(!(verify == offset)) { _fun00006_ip = 102; continue _fun00005 }
 58:
                if(zuuluu) { _fun00006_ip = 73; continue _fun00005 }
 61:
                oscard = !oscard;
                if(!oscard) { _fun00006_ip = 70; continue _fun00005 }
 67:
                oscard = !golfie;
 70:
                zuuluu = oscard;
 73:
                if(zuuluu) { _fun00006_ip = 377; continue _fun00005 }
 79:
                golfie = _closure2_slot2;
                oscard = undefined;
                zuuluu = function(argFoo) {
                    zuuluu = _closure2_slot9;
                    michal = false;
                    zuuluu['current'] = michal;
                    michal = _closure1_slot4;
                    verify = michal.DCDChatManager;
                    option = verify.customKeyboardWillHide;
                    kiloes = _closure2_slot7;
                    foxtra = _closure2_slot6;
                    output = argFoo;
                    romeon = 0.25;
                    yankee = 7;
                    offset = true;
                    result = verify;
                    sizing = 0;
                    backup = 0;
                    entity = result[option](output, sizing, kiloes, backup, foxtra, romeon, yankee, offset, verify);
                    entity = undefined;
                    return entity;
                };
                zuuluu = golfie.bind(oscard)(zuuluu);
                _fun00006_ip = 377; continue _fun00005;
 102:
                offset = _closure1_slot0;
                golfie = _closure1_slot2;
                zuuluu = 11;
                golfie = golfie[zuuluu];
                zuuluu = undefined;
                offset = offset.bind(zuuluu)(golfie);
                golfie = offset.isAndroid;
                golfie = golfie.bind(offset)();
                if(golfie) { _fun00006_ip = 377; continue _fun00005 }
 142:
                golfie = _closure2_slot4;
                golfie = golfie.handlerId;
                if(!(verify != golfie)) { _fun00006_ip = 177; continue _fun00005 }
 156:
                golfie = _closure2_slot4;
                offset = golfie.handlerId;
                golfie = _closure2_slot1;
                if(!(offset === golfie)) { _fun00006_ip = 377; continue _fun00005 }
 177:
                golfie = _closure2_slot4;
                if(!(verify != golfie)) { _fun00006_ip = 246; continue _fun00005 }
 185:
                verify = _closure2_slot5;
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                golfie = 7;
                golfie = yankee[golfie];
                golfie = offset.bind(zuuluu)(golfie);
                golfie = golfie.PortalKeyboardState;
                golfie = golfie.REQUEST_OPEN;
                if(!(verify === golfie)) { _fun00006_ip = 246; continue _fun00005 }
 225:
                verify = _closure2_slot2;
                golfie = function(argFoo) {
                    tangon = _closure1_slot0;
                    entity = _closure1_slot2;
                    offset = 7;
                    michal = entity[offset];
                    entity = undefined;
                    oscard = tangon.bind(entity)(michal);
                    report = oscard.handlePortalKeyboardOpen;
                    tangon = _closure2_slot1;
                    tangon = report.bind(oscard)(tangon);
                    report = _closure2_slot9;
                    tangon = true;
                    report['current'] = tangon;
                    zuuluu = _closure1_slot4;
                    verify = zuuluu.DCDChatManager;
                    option = verify.customKeyboardWillShow;
                    golfie = _closure2_slot8;
                    kiloes = _closure2_slot7;
                    michal = _closure2_slot6;
                    foxtra = michal - golfie;
                    output = argFoo;
                    backup = 0;
                    romeon = 0.25;
                    result = verify;
                    sizing = golfie;
                    yankee = offset;
                    michal = result[option](output, sizing, kiloes, backup, foxtra, romeon, yankee, offset);
                    return entity;
                };
                golfie = verify.bind(zuuluu)(golfie);
                _fun00006_ip = 377; continue _fun00005;
 246:
                golfie = _closure1_slot9;
                golfie = golfie.SYSTEM;
                if(!(option === golfie)) { _fun00006_ip = 377; continue _fun00005 }
 260:
                if(tangon) { _fun00006_ip = 377; continue _fun00005 }
 263:
                tangon = 0;
                var _closure3_slot0 = tangon;
                golfie = _closure2_slot6;
                var _closure3_slot1 = golfie;
                golfie = true;
                var _closure3_slot2 = golfie;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                oscard = 9;
                oscard = option[oscard];
                option = golfie.bind(zuuluu)(oscard);
                golfie = option.batchUpdates;
                oscard = function() {
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 7;
                    entity = golfie[tangon];
                    report = undefined;
                    entity = oscard.bind(report)(entity);
                    zuuluu = entity.usePortalKeyboardStore;
                    michal = zuuluu.setState;
                    entity = {};
                    tangon = golfie[tangon];
                    tangon = oscard.bind(report)(tangon);
                    tangon = tangon.PortalKeyboardState;
                    tangon = tangon.CLOSED;
                    entity['state'] = tangon;
                    tangon = null;
                    entity['keyboard'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                oscard = golfie.bind(option)(oscard);
                if(!(!(report > tangon))) { _fun00006_ip = 339; continue _fun00005 }
 325:
                oscard = _closure2_slot9;
                tangon = false;
                oscard['current'] = tangon;
                _fun00006_ip = 361; continue _fun00005;
 339:
                _closure3_slot0 = report;
                tangon = _closure2_slot6;
                tangon = tangon - report;
                _closure3_slot1 = tangon;
                tangon = false;
                _closure3_slot2 = tangon;
 361:
                michal = _closure2_slot2;
                entity = function(argFoo) {
                    entity = _closure1_slot4;
                    offset = entity.DCDChatManager;
                    verify = offset.customKeyboardWillHide;
                    output = _closure3_slot0;
                    sizing = _closure2_slot7;
                    backup = _closure3_slot1;
                    yankee = _closure3_slot2;
                    result = argFoo;
                    kiloes = 0;
                    foxtra = 0.25;
                    romeon = 7;
                    echoed = offset;
                    entity = echoed[verify](result, output, sizing, kiloes, backup, foxtra, romeon, yankee, offset);
                    entity = undefined;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
 377:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = null;
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/keyboard/native/InlinePortalKeyboard.ios.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();