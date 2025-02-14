// app/modules/keyboard/native/initializeKeyboardListeners.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.Keyboard;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/keyboard/native/initializeKeyboardListeners.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: initializeKeyboardListeners
        _fun111344: for(var _fun111344_ip = 0; ; ) switch(_fun111344_ip) {
 0:
            options = _closure1_slot3;
            oscar = options.addListener;
            report = _closure1_slot0;
            entity = _closure1_slot2;
            golf = 1;
            tango = entity[golf];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.isAndroid;
            tango = tango.bind(report)();
            report = 'keyboardWillShow';
            if(!tango) { _fun111344_ip = 61; continue _fun111344 }
 55:
            report = 'keyboardDidShow';
 61:
            tango = function(argFoo) {
                entity = argFoo;
                oscar = entity.duration;
                entity = entity.endCoordinates;
                report = entity.height;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                golf = 'KEYBOARD_CHANGE';
                mike['type'] = golf;
                mike['duration'] = oscar;
                mike['height'] = report;
                report = true;
                mike['open'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            tango = oscar.bind(options)(report, tango);
            report = _closure1_slot3;
            tango = report.addListener;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            oscar = oscar.bind(entity)(zulu);
            zulu = oscar.isAndroid;
            oscar = zulu.bind(oscar)();
            zulu = 'keyboardWillHide';
            if(!oscar) { _fun111344_ip = 125; continue _fun111344 }
 119:
            zulu = 'keyboardDidHide';
 125:
            mike = function(argFoo) {
                entity = argFoo;
                report = entity.duration;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {'type': 'KEYBOARD_CHANGE', 'duration': null, 'height': 0, 'open': false};
                mike['duration'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();