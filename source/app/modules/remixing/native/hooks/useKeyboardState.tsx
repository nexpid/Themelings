// app/modules/remixing/native/hooks/useKeyboardState.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Keyboard;
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useRemixingEditorStore;
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RemixMode;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/hooks/useKeyboardState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useKeyboardState
        entity = argFoo;
        options = entity.isOnAndroid;
        var _closure2_slot0 = options;
        oscar = entity.setIsKeyboardVisible;
        var _closure2_slot1 = oscar;
        report = _closure1_slot2;
        entity = undefined;
        tango = function(argFoo) {
            entity = argFoo;
            entity = entity.setCurrentMode;
            return entity;
        };
        golf = report.bind(entity)(tango);
        var _closure2_slot2 = golf;
        report = _closure1_slot0;
        tango = report.useEffect;
        zulu = new Array(3);
        zulu[0] = options;
        zulu[1] = golf;
        zulu[2] = oscar;
        mike = function() {
            report = _closure1_slot1;
            tango = report.addListener;
            zulu = 'keyboardDidShow';
            mike = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    mike = _closure2_slot0;
                    if(!mike) { _fun00002_ip = 23; continue _fun00001 }
 10:
                    zulu = _closure2_slot1;
                    mike = undefined;
                    entity = true;
                    entity = zulu.bind(mike)(entity);
 23:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            var _closure3_slot0 = mike;
            tango = report.addListener;
            zulu = 'keyboardDidHide';
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot0;
                    if(!mike) { _fun00004_ip = 45; continue _fun00003 }
 10:
                    tango = _closure2_slot1;
                    zulu = undefined;
                    mike = false;
                    mike = tango.bind(zulu)(mike);
                    mike = _closure2_slot2;
                    entity = _closure1_slot3;
                    entity = entity.DEFAULT_MODE;
                    entity = mike.bind(zulu)(entity);
 45:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            var _closure3_slot1 = mike;
            tango = report.addListener;
            zulu = 'keyboardWillShow';
            mike = function() {
                zulu = _closure2_slot1;
                entity = undefined;
                mike = true;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            var _closure3_slot2 = mike;
            tango = report.addListener;
            zulu = 'keyboardWillHide';
            mike = function() {
                zulu = _closure2_slot1;
                entity = undefined;
                mike = false;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            var _closure3_slot3 = mike;
            entity = function() {
                zulu = _closure3_slot1;
                mike = zulu.remove;
                mike = mike.bind(zulu)();
                zulu = _closure3_slot0;
                mike = zulu.remove;
                mike = mike.bind(zulu)();
                zulu = _closure3_slot3;
                mike = zulu.remove;
                mike = mike.bind(zulu)();
                mike = _closure3_slot2;
                entity = mike.remove;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useKeyboardState'] = mike;
    return entity;
})();