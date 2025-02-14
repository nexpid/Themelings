// app/utils/web/WindowIdUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    tango = function(argFoo) { // Original name: getWindowId
        entity = argFoo;
        entity = entity.__DISCORD_WINDOW_ID;
        return entity;
    };
    var _closure1_slot2 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 1;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/web/WindowIdUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['getWindowId'] = tango;
    tango = function(argFoo) { // Original name: setupWindowId
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.uniqueId;
        entity = 'window-';
        entity = mike.bind(zulu)(entity);
        mike = argFoo;
        mike['__DISCORD_WINDOW_ID'] = entity;
        return entity;
    };
    zulu['setupWindowId'] = tango;
    mike = function() { // Original name: getMainWindowId
        zulu = _closure1_slot2;
        entity = global;
        mike = entity.window;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['getMainWindowId'] = mike;
    return entity;
})();