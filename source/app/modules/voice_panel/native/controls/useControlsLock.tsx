// app/modules/voice_panel/native/controls/useControlsLock.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    report = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(oscar);
    var _closure1_slot2 = tango;
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/controls/useControlsLock.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useControlsLock
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot2;
        zulu = report.useContext;
        oscar = _closure1_slot0;
        tango = _closure1_slot1;
        entity = 1;
        tango = tango[entity];
        entity = undefined;
        entity = oscar.bind(entity)(tango);
        entity = zulu.bind(report)(entity);
        entity = entity.generateStateLocker;
        var _closure2_slot1 = entity;
        zulu = report.useState;
        entity = function() {
            zulu = _closure2_slot1;
            mike = _closure2_slot0;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        zulu = zulu.bind(report)(entity);
        entity = 0;
        entity = zulu[entity];
        var _closure2_slot2 = entity;
        tango = report.useLayoutEffect;
        zulu = new Array(1);
        zulu[0] = entity;
        mike = function() {
            entity = function() {
                mike = _closure2_slot2;
                entity = mike.unlock;
                entity = entity.bind(mike)();
                return entity;
            };
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();