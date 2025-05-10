// app/modules/keyboard/native/InlinePortalKeyboard.ios.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: customKeyboardWillHide
        entity = argFoo;
        result = entity.viewHandle;
        output = entity.height;
        sizing = entity.width;
        kiloes = entity.x;
        backup = entity.y;
        yankee = entity.resetOffset;
        entity = _closure1_slot4;
        tangon = entity.DCDChatManager;
        zuuluu = tangon.customKeyboardWillHide;
        foxtra = 0.25;
        romeon = 7;
        echoed = tangon;
        entity = echoed[zuuluu](result, output, sizing, kiloes, backup, foxtra, romeon, yankee, offset);
        entity = undefined;
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: withChatViewHandle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.current;
            michal = null;
            tangon = michal == report;
            entity = undefined;
            zuuluu = undefined;
            if(tangon) { _fun00002_ip = 31; continue _fun00001 }
 21:
            tangon = report.getChatRef;
            zuuluu = tangon.bind(report)();
 31:
            if(!(michal != zuuluu)) { _fun00002_ip = 64; continue _fun00001 }
 35:
            tangon = _closure1_slot5;
            zuuluu = zuuluu.current;
            zuuluu = tangon.bind(entity)(zuuluu);
            if(!(michal != zuuluu)) { _fun00002_ip = 64; continue _fun00001 }
 56:
            michal = argBar;
            michal = michal.bind(entity)(zuuluu);
 64:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    tangon = tangon.findNodeHandle;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: InlinePortalKeyboard
        michal = argFoo;
        foxtra = michal.channelId;
        option = michal.messagesRef;
        var _closure2_slot0 = option;
        tangon = _closure1_slot3;
        michal = tangon.useId;
        romeon = michal.bind(tangon)();
        var _closure2_slot1 = romeon;
        yankee = _closure1_slot1;
        kiloes = _closure1_slot2;
        michal = 3;
        zuuluu = kiloes[michal];
        backup = undefined;
        zuuluu = yankee.bind(backup)(zuuluu);
        verify = zuuluu.bind(backup)();
        var _closure2_slot2 = verify;
        zuuluu = 4;
        zuuluu = kiloes[zuuluu];
        report = yankee.bind(backup)(zuuluu);
        zuuluu = {};
        oscard = true;
        zuuluu['excludeSafeAreaInsets'] = oscard;
        oscard = report.bind(backup)(zuuluu);
        var _closure2_slot3 = oscard;
        zuuluu = 5;
        zuuluu = kiloes[zuuluu];
        offset = yankee.bind(backup)(zuuluu);
        report = {};
        zuuluu = false;
        report['includeCustomKeyboard'] = zuuluu;
        report = offset.bind(backup)(report);
        var _closure2_slot4 = report;
        offset = _closure1_slot0;
        michal = kiloes[michal];
        sizing = offset.bind(backup)(michal);
        golfie = sizing.useKeyboardContextForType;
        michal = 6;
        michal = kiloes[michal];
        michal = offset.bind(backup)(michal);
        michal = michal.KeyboardTypes;
        michal = michal.SYSTEM;
        golfie = golfie.bind(sizing)(michal);
        var _closure2_slot5 = golfie;
        michal = 7;
        michal = kiloes[michal];
        yankee = yankee.bind(backup)(michal);
        michal = function() {
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot0;
                    entity = _closure1_slot2;
                    tangon = 8;
                    zuuluu = entity[tangon];
                    entity = undefined;
                    zuuluu = report.bind(entity)(zuuluu);
                    oscard = zuuluu.PortalKeyboardUIStore;
                    report = oscard.getField;
                    zuuluu = 'keyboard';
                    report = report.bind(oscard)(zuuluu);
                    zuuluu = null;
                    zuuluu = zuuluu != report;
                    if(!zuuluu) { _fun00004_ip = 72; continue _fun00003 }
 55:
                    oscard = report.handlerId;
                    report = _closure2_slot1;
                    zuuluu = oscard === report;
 72:
                    if(!zuuluu) { _fun00004_ip = 124; continue _fun00003 }
 75:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    report = 9;
                    report = michal[report];
                    oscard = zuuluu.bind(entity)(report);
                    report = oscard.dismissKeyboard;
                    report = report.bind(oscard)();
                    michal = michal[tangon];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.closePortalKeyboard;
                    michal = michal.bind(zuuluu)();
 124:
                    return entity;
                }
            };
            return entity;
        };
        michal = yankee.bind(backup)(michal);
        michal = 8;
        yankee = kiloes[michal];
        yankee = offset.bind(backup)(yankee);
        output = yankee.PortalKeyboardUIStore;
        sizing = output.useField;
        yankee = 'keyboard';
        yankee = sizing.bind(output)(yankee);
        var _closure2_slot6 = yankee;
        michal = kiloes[michal];
        michal = offset.bind(backup)(michal);
        backup = michal.PortalKeyboardUIStore;
        offset = backup.useField;
        michal = 'state';
        offset = offset.bind(backup)(michal);
        var _closure2_slot7 = offset;
        michal = tangon.useRef;
        michal = michal.bind(tangon)(zuuluu);
        var _closure2_slot8 = michal;
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
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 10;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = report.bind(entity)(zuuluu);
                zuuluu = report.getWindowDimensions;
                zuuluu = zuuluu.bind(report)();
                var _closure3_slot0 = zuuluu;
                report = _closure2_slot8;
                golfie = report.current;
                report = _closure2_slot6;
                oscard = null;
                if(!(oscard == report)) { _fun00006_ip = 124; continue _fun00005 }
 63:
                report = _closure1_slot6;
                option = report.systemPrefersCrossfades;
                report = _closure2_slot4;
                if(report) { _fun00006_ip = 92; continue _fun00005 }
 80:
                golfie = !golfie;
                if(!golfie) { _fun00006_ip = 89; continue _fun00005 }
 86:
                golfie = !option;
 89:
                report = golfie;
 92:
                if(report) { _fun00006_ip = 340; continue _fun00005 }
 98:
                option = _closure1_slot8;
                golfie = _closure2_slot0;
                report = function(argFoo) {
                    michal = _closure2_slot8;
                    entity = false;
                    michal['current'] = entity;
                    zuuluu = _closure1_slot7;
                    michal = {'viewHandle': null, 'height': 0, 'width': null, 'x': 0, 'y': null, 'resetOffset': true};
                    entity = argFoo;
                    michal['viewHandle'] = entity;
                    entity = _closure3_slot0;
                    tangon = entity.width;
                    michal['width'] = tangon;
                    entity = entity.height;
                    michal['y'] = entity;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                report = option.bind(entity)(golfie, report);
                _fun00006_ip = 340; continue _fun00005;
 124:
                report = _closure2_slot6;
                report = report.handlerId;
                report = oscard != report;
                if(!report) { _fun00006_ip = 159; continue _fun00005 }
 141:
                golfie = _closure2_slot6;
                option = golfie.handlerId;
                golfie = _closure2_slot1;
                report = option !== golfie;
 159:
                if(report) { _fun00006_ip = 340; continue _fun00005 }
 165:
                report = _closure2_slot6;
                if(!(oscard != report)) { _fun00006_ip = 236; continue _fun00005 }
 173:
                oscard = _closure2_slot7;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                report = 11;
                report = option[report];
                report = golfie.bind(entity)(report);
                report = report.PortalKeyboardState;
                report = report.REQUEST_OPEN;
                if(!(oscard === report)) { _fun00006_ip = 236; continue _fun00005 }
 213:
                golfie = _closure1_slot8;
                oscard = _closure2_slot0;
                report = function(argFoo) {
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 8;
                    zuuluu = report[entity];
                    entity = undefined;
                    option = tangon.bind(entity)(zuuluu);
                    golfie = option.handlePortalKeyboardOpen;
                    oscard = _closure2_slot1;
                    oscard = golfie.bind(option)(oscard);
                    oscard = _closure2_slot8;
                    zuuluu = true;
                    oscard['current'] = zuuluu;
                    zuuluu = 12;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.getKeyboardActionSheetHeight;
                    zuuluu = zuuluu.bind(tangon)();
                    report = zuuluu.minimum;
                    zuuluu = {};
                    tangon = argFoo;
                    zuuluu['viewHandle'] = tangon;
                    zuuluu['height'] = report;
                    tangon = _closure3_slot0;
                    oscard = tangon.width;
                    zuuluu['width'] = oscard;
                    oscard = 0;
                    zuuluu['x'] = oscard;
                    tangon = tangon.height;
                    tangon = tangon - report;
                    zuuluu['y'] = tangon;
                    output = zuuluu.viewHandle;
                    sizing = zuuluu.height;
                    kiloes = zuuluu.width;
                    backup = zuuluu.x;
                    foxtra = zuuluu.y;
                    michal = _closure1_slot4;
                    report = michal.DCDChatManager;
                    tangon = report.customKeyboardWillShow;
                    romeon = 0.25;
                    yankee = 7;
                    result = report;
                    michal = result[tangon](output, sizing, kiloes, backup, foxtra, romeon, yankee, offset);
                    return entity;
                };
                report = golfie.bind(entity)(oscard, report);
                _fun00006_ip = 340; continue _fun00005;
 236:
                oscard = _closure2_slot2;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                report = 6;
                report = option[report];
                report = golfie.bind(entity)(report);
                report = report.KeyboardTypes;
                report = report.SYSTEM;
                if(!(oscard === report)) { _fun00006_ip = 340; continue _fun00005 }
 276:
                report = _closure2_slot5;
                report = report.keyboardWillOpen;
                if(report) { _fun00006_ip = 340; continue _fun00005 }
 289:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 8;
                report = golfie[report];
                oscard = oscard.bind(entity)(report);
                report = oscard.closePortalKeyboard;
                report = report.bind(oscard)();
                tangon = _closure1_slot8;
                zuuluu = _closure2_slot0;
                michal = function(argFoo) {
                    zuuluu = _closure2_slot8;
                    michal = false;
                    zuuluu['current'] = michal;
                    zuuluu = _closure1_slot7;
                    michal = {};
                    tangon = argFoo;
                    michal['viewHandle'] = tangon;
                    report = _closure2_slot3;
                    michal['height'] = report;
                    tangon = _closure3_slot0;
                    oscard = tangon.width;
                    michal['width'] = oscard;
                    oscard = 0;
                    michal['x'] = oscard;
                    tangon = tangon.height;
                    tangon = tangon - report;
                    michal['y'] = tangon;
                    entity = _closure2_slot4;
                    entity = !entity;
                    michal['resetOffset'] = entity;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = tangon.bind(entity)(zuuluu, michal);
 340:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = null;
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/keyboard/native/InlinePortalKeyboard.ios.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();