// app/modules/keyboard/native/InlinePortalKeyboard.ios.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.NativeModules;
    var _closure1_slot4 = verify;
    verify = tango.findNodeHandle;
    var _closure1_slot5 = verify;
    tango = tango.useWindowDimensions;
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot9 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: InlinePortalKeyboard
        mike = argFoo;
        foxtrot = mike.channelId;
        zulu = mike.messagesRef;
        var _closure2_slot0 = zulu;
        tango = _closure1_slot3;
        report = tango.useId;
        report = report.bind(tango)();
        var _closure2_slot1 = report;
        golf = tango.useCallback;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function(argFoo) {
            _fun101701: for(var _fun101701_ip = 0; ; ) switch(_fun101701_ip) {
 0:
                entity = _closure2_slot0;
                report = entity.current;
                mike = null;
                tango = mike == report;
                entity = undefined;
                zulu = undefined;
                if(tango) { _fun101701_ip = 35; continue _fun101701 }
 25:
                tango = report.getChatRef;
                zulu = tango.bind(report)();
 35:
                if(!(mike != zulu)) { _fun101701_ip = 68; continue _fun101701 }
 39:
                tango = _closure1_slot5;
                zulu = zulu.current;
                zulu = tango.bind(entity)(zulu);
                if(!(mike != zulu)) { _fun101701_ip = 68; continue _fun101701 }
 60:
                mike = argFoo;
                mike = mike.bind(entity)(zulu);
 68:
                return entity;
            }
        };
        oscar = golf.bind(tango)(zulu, oscar);
        var _closure2_slot2 = oscar;
        romeo = _closure1_slot0;
        backup = _closure1_slot2;
        zulu = 5;
        golf = backup[zulu];
        zulu = undefined;
        offset = romeo.bind(zulu)(golf);
        verify = offset.useStateFromStoresObject;
        golf = _closure1_slot8;
        options = new Array(2);
        options[0] = golf;
        golf = _closure1_slot7;
        options[1] = golf;
        golf = function() {
            entity = {};
            zulu = _closure1_slot8;
            tango = zulu.keyboardType;
            entity['keyboardType'] = tango;
            tango = zulu.keyboardHeight;
            entity['systemKeyboardHeight'] = tango;
            tango = zulu.keyboardOpen;
            entity['systemKeyboardOpen'] = tango;
            zulu = zulu.systemKeyboardWillOpen;
            entity['systemKeyboardWillOpen'] = zulu;
            mike = _closure1_slot7;
            mike = mike.systemPrefersCrossfades;
            entity['systemPrefersCrossfades'] = mike;
            return entity;
        };
        verify = verify.bind(offset)(options, golf);
        var _closure2_slot3 = verify;
        options = _closure1_slot1;
        golf = 6;
        golf = backup[golf];
        options = options.bind(zulu)(golf);
        golf = function() {
            entity = function() {
                _fun101704: for(var _fun101704_ip = 0; ; ) switch(_fun101704_ip) {
 0:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 7;
                    zulu = zulu[entity];
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    tango = zulu.usePortalKeyboardStore;
                    zulu = tango.getState;
                    zulu = zulu.bind(tango)();
                    tango = zulu.keyboard;
                    zulu = null;
                    zulu = zulu != tango;
                    if(!zulu) { _fun101704_ip = 73; continue _fun101704 }
 56:
                    report = tango.handlerId;
                    tango = _closure2_slot1;
                    zulu = report === tango;
 73:
                    if(!zulu) { _fun101704_ip = 138; continue _fun101704 }
 76:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 8;
                    mike = tango[mike];
                    report = zulu.bind(entity)(mike);
                    mike = report.dismissKeyboard;
                    mike = mike.bind(report)();
                    mike = 9;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.batchUpdates;
                    mike = function() {
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        tango = 7;
                        entity = golf[tango];
                        report = undefined;
                        entity = oscar.bind(report)(entity);
                        zulu = entity.usePortalKeyboardStore;
                        mike = zulu.setState;
                        entity = {};
                        tango = golf[tango];
                        tango = oscar.bind(report)(tango);
                        tango = tango.PortalKeyboardState;
                        tango = tango.CLOSED;
                        entity['state'] = tango;
                        tango = null;
                        entity['keyboard'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 138:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        golf = 7;
        options = backup[golf];
        yankee = romeo.bind(zulu)(options);
        offset = yankee.usePortalKeyboardStore;
        options = function(argFoo) {
            entity = argFoo;
            entity = entity.keyboard;
            return entity;
        };
        yankee = offset.bind(yankee)(options);
        var _closure2_slot4 = yankee;
        golf = backup[golf];
        offset = romeo.bind(zulu)(golf);
        options = offset.usePortalKeyboardStore;
        golf = function(argFoo) {
            entity = argFoo;
            entity = entity.state;
            return entity;
        };
        offset = options.bind(offset)(golf);
        var _closure2_slot5 = offset;
        mike = _closure1_slot6;
        mike = mike.bind(zulu)();
        options = mike.height;
        var _closure2_slot6 = options;
        golf = mike.width;
        var _closure2_slot7 = golf;
        mike = 10;
        mike = backup[mike];
        zulu = romeo.bind(zulu)(mike);
        mike = zulu.useKeyboardActionSheetHeight;
        mike = mike.bind(zulu)();
        romeo = mike.minimum;
        var _closure2_slot8 = romeo;
        zulu = tango.useRef;
        mike = false;
        mike = zulu.bind(tango)(mike);
        var _closure2_slot9 = mike;
        zulu = tango.useLayoutEffect;
        mike = new Array(9);
        mike[0] = foxtrot;
        mike[1] = romeo;
        mike[2] = yankee;
        mike[3] = offset;
        mike[4] = verify;
        mike[5] = options;
        mike[6] = golf;
        mike[7] = oscar;
        mike[8] = report;
        entity = function() {
            _fun101708: for(var _fun101708_ip = 0; ; ) switch(_fun101708_ip) {
 0:
                oscar = _closure2_slot3;
                options = oscar.keyboardType;
                report = oscar.systemKeyboardHeight;
                zulu = oscar.systemKeyboardOpen;
                tango = oscar.systemKeyboardWillOpen;
                golf = oscar.systemPrefersCrossfades;
                oscar = _closure2_slot9;
                oscar = oscar.current;
                offset = _closure2_slot4;
                verify = null;
                if(!(verify == offset)) { _fun101708_ip = 102; continue _fun101708 }
 58:
                if(zulu) { _fun101708_ip = 73; continue _fun101708 }
 61:
                oscar = !oscar;
                if(!oscar) { _fun101708_ip = 70; continue _fun101708 }
 67:
                oscar = !golf;
 70:
                zulu = oscar;
 73:
                if(zulu) { _fun101708_ip = 377; continue _fun101708 }
 79:
                golf = _closure2_slot2;
                oscar = undefined;
                zulu = function(argFoo) {
                    zulu = _closure2_slot9;
                    mike = false;
                    zulu['current'] = mike;
                    mike = _closure1_slot4;
                    verify = mike.DCDChatManager;
                    options = verify.customKeyboardWillHide;
                    kilo = _closure2_slot7;
                    foxtrot = _closure2_slot6;
                    output = argFoo;
                    romeo = 0.25;
                    yankee = 7;
                    offset = true;
                    result = verify;
                    sizing = 0;
                    backup = 0;
                    entity = result[options](output, sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify);
                    entity = undefined;
                    return entity;
                };
                zulu = golf.bind(oscar)(zulu);
                _fun101708_ip = 377; continue _fun101708;
 102:
                offset = _closure1_slot0;
                golf = _closure1_slot2;
                zulu = 11;
                golf = golf[zulu];
                zulu = undefined;
                offset = offset.bind(zulu)(golf);
                golf = offset.isAndroid;
                golf = golf.bind(offset)();
                if(golf) { _fun101708_ip = 377; continue _fun101708 }
 142:
                golf = _closure2_slot4;
                golf = golf.handlerId;
                if(!(verify != golf)) { _fun101708_ip = 177; continue _fun101708 }
 156:
                golf = _closure2_slot4;
                offset = golf.handlerId;
                golf = _closure2_slot1;
                if(!(offset === golf)) { _fun101708_ip = 377; continue _fun101708 }
 177:
                golf = _closure2_slot4;
                if(!(verify != golf)) { _fun101708_ip = 246; continue _fun101708 }
 185:
                verify = _closure2_slot5;
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                golf = 7;
                golf = yankee[golf];
                golf = offset.bind(zulu)(golf);
                golf = golf.PortalKeyboardState;
                golf = golf.REQUEST_OPEN;
                if(!(verify === golf)) { _fun101708_ip = 246; continue _fun101708 }
 225:
                verify = _closure2_slot2;
                golf = function(argFoo) {
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    offset = 7;
                    mike = entity[offset];
                    entity = undefined;
                    oscar = tango.bind(entity)(mike);
                    report = oscar.handlePortalKeyboardOpen;
                    tango = _closure2_slot1;
                    tango = report.bind(oscar)(tango);
                    report = _closure2_slot9;
                    tango = true;
                    report['current'] = tango;
                    zulu = _closure1_slot4;
                    verify = zulu.DCDChatManager;
                    options = verify.customKeyboardWillShow;
                    golf = _closure2_slot8;
                    kilo = _closure2_slot7;
                    mike = _closure2_slot6;
                    foxtrot = mike - golf;
                    output = argFoo;
                    backup = 0;
                    romeo = 0.25;
                    result = verify;
                    sizing = golf;
                    yankee = offset;
                    mike = result[options](output, sizing, kilo, backup, foxtrot, romeo, yankee, offset);
                    return entity;
                };
                golf = verify.bind(zulu)(golf);
                _fun101708_ip = 377; continue _fun101708;
 246:
                golf = _closure1_slot9;
                golf = golf.SYSTEM;
                if(!(options === golf)) { _fun101708_ip = 377; continue _fun101708 }
 260:
                if(tango) { _fun101708_ip = 377; continue _fun101708 }
 263:
                tango = 0;
                var _closure3_slot0 = tango;
                golf = _closure2_slot6;
                var _closure3_slot1 = golf;
                golf = true;
                var _closure3_slot2 = golf;
                golf = _closure1_slot0;
                options = _closure1_slot2;
                oscar = 9;
                oscar = options[oscar];
                options = golf.bind(zulu)(oscar);
                golf = options.batchUpdates;
                oscar = function() {
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 7;
                    entity = golf[tango];
                    report = undefined;
                    entity = oscar.bind(report)(entity);
                    zulu = entity.usePortalKeyboardStore;
                    mike = zulu.setState;
                    entity = {};
                    tango = golf[tango];
                    tango = oscar.bind(report)(tango);
                    tango = tango.PortalKeyboardState;
                    tango = tango.CLOSED;
                    entity['state'] = tango;
                    tango = null;
                    entity['keyboard'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                oscar = golf.bind(options)(oscar);
                if(!(!(report > tango))) { _fun101708_ip = 339; continue _fun101708 }
 325:
                oscar = _closure2_slot9;
                tango = false;
                oscar['current'] = tango;
                _fun101708_ip = 361; continue _fun101708;
 339:
                _closure3_slot0 = report;
                tango = _closure2_slot6;
                tango = tango - report;
                _closure3_slot1 = tango;
                tango = false;
                _closure3_slot2 = tango;
 361:
                mike = _closure2_slot2;
                entity = function(argFoo) {
                    entity = _closure1_slot4;
                    offset = entity.DCDChatManager;
                    verify = offset.customKeyboardWillHide;
                    output = _closure3_slot0;
                    sizing = _closure2_slot7;
                    backup = _closure3_slot1;
                    yankee = _closure3_slot2;
                    result = argFoo;
                    kilo = 0;
                    foxtrot = 0.25;
                    romeo = 7;
                    echo = offset;
                    entity = echo[verify](result, output, sizing, kilo, backup, foxtrot, romeo, yankee, offset);
                    entity = undefined;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 377:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        entity = null;
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/keyboard/native/InlinePortalKeyboard.ios.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();