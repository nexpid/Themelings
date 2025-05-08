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
    var _closure1_slot8 = entity;
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
    var _closure1_slot9 = entity;
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
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: InlinePortalKeyboard
        michal = argFoo;
        offset = michal.channelId;
        report = michal.messagesRef;
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useId;
        verify = zuuluu.bind(tangon)();
        var _closure2_slot1 = verify;
        golfie = _closure1_slot0;
        yankee = _closure1_slot2;
        zuuluu = 4;
        oscard = yankee[zuuluu];
        zuuluu = undefined;
        foxtra = golfie.bind(zuuluu)(oscard);
        romeon = foxtra.useStateFromStoresObject;
        oscard = _closure1_slot7;
        option = new Array(1);
        option[0] = oscard;
        oscard = function() {
            entity = {};
            michal = _closure1_slot7;
            zuuluu = michal.keyboardType;
            entity['keyboardType'] = zuuluu;
            zuuluu = michal.keyboardHeight;
            entity['systemKeyboardHeight'] = zuuluu;
            zuuluu = michal.keyboardOpen;
            entity['systemKeyboardOpen'] = zuuluu;
            michal = michal.systemKeyboardWillOpen;
            entity['systemKeyboardWillOpen'] = michal;
            return entity;
        };
        oscard = romeon.bind(foxtra)(option, oscard);
        var _closure2_slot2 = oscard;
        option = _closure1_slot1;
        michal = 5;
        michal = yankee[michal];
        option = option.bind(zuuluu)(michal);
        michal = function() {
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot0;
                    entity = _closure1_slot2;
                    tangon = 6;
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
                    report = 7;
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
        michal = option.bind(zuuluu)(michal);
        michal = 6;
        option = yankee[michal];
        option = golfie.bind(zuuluu)(option);
        foxtra = option.PortalKeyboardUIStore;
        romeon = foxtra.useField;
        option = 'keyboard';
        option = romeon.bind(foxtra)(option);
        var _closure2_slot3 = option;
        michal = yankee[michal];
        michal = golfie.bind(zuuluu)(michal);
        golfie = michal.PortalKeyboardUIStore;
        zuuluu = golfie.useField;
        michal = 'state';
        golfie = zuuluu.bind(golfie)(michal);
        var _closure2_slot4 = golfie;
        zuuluu = tangon.useRef;
        michal = false;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot5 = michal;
        zuuluu = tangon.useLayoutEffect;
        michal = new Array(6);
        michal[0] = offset;
        michal[1] = verify;
        michal[2] = option;
        michal[3] = golfie;
        michal[4] = oscard;
        michal[5] = report;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 8;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = report.bind(entity)(zuuluu);
                zuuluu = report.getWindowDimensions;
                zuuluu = zuuluu.bind(report)();
                var _closure3_slot0 = zuuluu;
                report = _closure2_slot2;
                golfie = report.keyboardType;
                oscard = report.systemKeyboardHeight;
                var _closure3_slot1 = oscard;
                oscard = report.systemKeyboardOpen;
                var _closure3_slot2 = oscard;
                report = report.systemKeyboardWillOpen;
                option = _closure2_slot5;
                verify = option.current;
                offset = _closure2_slot3;
                option = null;
                if(!(option == offset)) { _fun00006_ip = 156; continue _fun00005 }
 99:
                offset = _closure1_slot6;
                offset = offset.systemPrefersCrossfades;
                if(oscard) { _fun00006_ip = 124; continue _fun00005 }
 112:
                verify = !verify;
                if(!verify) { _fun00006_ip = 121; continue _fun00005 }
 118:
                verify = !offset;
 121:
                oscard = verify;
 124:
                if(oscard) { _fun00006_ip = 358; continue _fun00005 }
 130:
                offset = _closure1_slot9;
                verify = _closure2_slot0;
                oscard = function(argFoo) {
                    michal = _closure2_slot5;
                    entity = false;
                    michal['current'] = entity;
                    zuuluu = _closure1_slot8;
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
                oscard = offset.bind(entity)(verify, oscard);
                _fun00006_ip = 358; continue _fun00005;
 156:
                oscard = _closure2_slot3;
                oscard = oscard.handlerId;
                oscard = option != oscard;
                if(!oscard) { _fun00006_ip = 191; continue _fun00005 }
 173:
                verify = _closure2_slot3;
                offset = verify.handlerId;
                verify = _closure2_slot1;
                oscard = offset !== verify;
 191:
                if(oscard) { _fun00006_ip = 358; continue _fun00005 }
 197:
                oscard = _closure2_slot3;
                if(!(option != oscard)) { _fun00006_ip = 268; continue _fun00005 }
 205:
                option = _closure2_slot4;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                oscard = 9;
                oscard = offset[oscard];
                oscard = verify.bind(entity)(oscard);
                oscard = oscard.PortalKeyboardState;
                oscard = oscard.REQUEST_OPEN;
                if(!(option === oscard)) { _fun00006_ip = 268; continue _fun00005 }
 245:
                verify = _closure1_slot9;
                option = _closure2_slot0;
                oscard = function(argFoo) {
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 6;
                    zuuluu = report[entity];
                    entity = undefined;
                    option = tangon.bind(entity)(zuuluu);
                    golfie = option.handlePortalKeyboardOpen;
                    oscard = _closure2_slot1;
                    oscard = golfie.bind(option)(oscard);
                    oscard = _closure2_slot5;
                    zuuluu = true;
                    oscard['current'] = zuuluu;
                    zuuluu = 10;
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
                oscard = verify.bind(entity)(option, oscard);
                _fun00006_ip = 358; continue _fun00005;
 268:
                option = _closure1_slot0;
                verify = _closure1_slot2;
                oscard = 11;
                oscard = verify[oscard];
                oscard = option.bind(entity)(oscard);
                oscard = oscard.KeyboardTypes;
                oscard = oscard.SYSTEM;
                if(!(golfie === oscard)) { _fun00006_ip = 358; continue _fun00005 }
 304:
                if(report) { _fun00006_ip = 358; continue _fun00005 }
 307:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 6;
                report = golfie[report];
                oscard = oscard.bind(entity)(report);
                report = oscard.closePortalKeyboard;
                report = report.bind(oscard)();
                tangon = _closure1_slot9;
                zuuluu = _closure2_slot0;
                michal = function(argFoo) {
                    michal = _closure2_slot5;
                    entity = false;
                    michal['current'] = entity;
                    zuuluu = _closure1_slot8;
                    michal = {};
                    entity = argFoo;
                    michal['viewHandle'] = entity;
                    report = _closure3_slot1;
                    michal['height'] = report;
                    tangon = _closure3_slot0;
                    oscard = tangon.width;
                    michal['width'] = oscard;
                    oscard = 0;
                    michal['x'] = oscard;
                    tangon = tangon.height;
                    tangon = tangon - report;
                    michal['y'] = tangon;
                    entity = _closure3_slot2;
                    entity = !entity;
                    michal['resetOffset'] = entity;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = tangon.bind(entity)(zuuluu, michal);
 358:
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