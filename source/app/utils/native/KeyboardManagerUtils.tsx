// app/utils/native/KeyboardManagerUtils.tsx
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
    tango = tango.NativeModules;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/native/KeyboardManagerUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: dismissGlobalKeyboard
        _fun48577: for(var _fun48577_ip = 0; ; ) switch(_fun48577_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun48577_ip = 59; continue _fun48577 }
 37:
            zulu = _closure1_slot3;
            tango = zulu.KeyboardManager;
            zulu = tango.dismissGlobalKeyboard;
            zulu = zulu.bind(tango)();
            _fun48577_ip = 112; continue _fun48577;
 59:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 2;
            zulu = zulu[tango];
            report = report.bind(entity)(zulu);
            zulu = null;
            if(!(zulu != report)) { _fun48577_ip = 112; continue _fun48577 }
 85:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[tango];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dismissGlobalKeyboard;
            mike = mike.bind(zulu)();
 112:
            return entity;
        }
    };
    zulu['dismissGlobalKeyboard'] = tango;
    tango = function() { // Original name: clearCurrentFocusAndDismissKeyboard
        _fun48578: for(var _fun48578_ip = 0; ; ) switch(_fun48578_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(!zulu) { _fun48578_ip = 90; continue _fun48578 }
 37:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 2;
            zulu = zulu[tango];
            report = report.bind(entity)(zulu);
            zulu = null;
            if(!(zulu != report)) { _fun48578_ip = 90; continue _fun48578 }
 63:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[tango];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.clearCurrentFocusAndDismissKeyboard;
            mike = mike.bind(zulu)();
 90:
            return entity;
        }
    };
    zulu['clearCurrentFocusAndDismissKeyboard'] = tango;
    mike = function(argFoo) { // Original name: onKeyboardChanged
        _fun48579: for(var _fun48579_ip = 0; ; ) switch(_fun48579_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun48579_ip = 90; continue _fun48579 }
 37:
            zulu = _closure1_slot3;
            zulu = zulu.KeyboardManager;
            tango = zulu.onKeyboardChanged;
            zulu = null;
            if(!(zulu != tango)) { _fun48579_ip = 147; continue _fun48579 }
 59:
            zulu = _closure1_slot3;
            report = zulu.KeyboardManager;
            tango = report.onKeyboardChanged;
            zulu = global;
            zulu = zulu.open;
            zulu = tango.bind(report)(zulu);
            _fun48579_ip = 147; continue _fun48579;
 90:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 2;
            zulu = zulu[tango];
            report = report.bind(entity)(zulu);
            zulu = null;
            if(!(zulu != report)) { _fun48579_ip = 147; continue _fun48579 }
 116:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[tango];
            tango = zulu.bind(entity)(mike);
            zulu = tango.onKeyboardChanged;
            mike = argFoo;
            mike = zulu.bind(tango)(mike);
 147:
            return entity;
        }
    };
    zulu['onKeyboardChanged'] = mike;
    return entity;
})();