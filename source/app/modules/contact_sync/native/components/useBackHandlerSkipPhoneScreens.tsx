// app/modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ContactSyncScenes;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: useBackHandlerSkipPhoneScreens
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.useNavigatorBackPressHandler;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot1;
                mike = null;
                if(!(mike == zulu)) { _fun00002_ip = 157; continue _fun00001 }
 16:
                zulu = _closure2_slot0;
                mike = _closure1_slot3;
                tango = mike.ADD_PHONE;
                oscar = new Array(3);
                oscar[0] = tango;
                tango = mike.VERIFY_PHONE;
                oscar[1] = tango;
                mike = mike.VERIFY_PASSWORD;
                oscar[2] = mike;
                mike = zulu.getState;
                mike = mike.bind(zulu)();
                mike = mike.routes;
                tango = mike.length;
                report = 2;
                if(!(!(tango <= report))) { _fun00002_ip = 145; continue _fun00001 }
 89:
                tango = mike.length;
                tango = tango - report;
                tango = mike[tango];
                report = oscar.includes;
                tango = tango.name;
                tango = report.bind(oscar)(tango);
                if(!tango) { _fun00002_ip = 167; continue _fun00001 }
 120:
                tango = zulu.pop;
                report = mike.length;
                mike = 1;
                mike = report - mike;
                mike = tango.bind(zulu)(mike);
                _fun00002_ip = 167; continue _fun00001;
 145:
                mike = zulu.pop;
                mike = mike.bind(zulu)();
                _fun00002_ip = 167; continue _fun00001;
 157:
                mike = _closure2_slot1;
                entity = undefined;
                entity = mike.bind(entity)();
 167:
                entity = true;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['default'] = tango;
    mike = function() { // Original name: useBackHandlerMinimizeApp
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.useNavigatorBackPressHandler;
        mike = function() {
            entity = _closure1_slot2;
            mike = entity.MinimizeApp;
            entity = mike.minimizeApp;
            entity = entity.bind(mike)();
            entity = true;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['useBackHandlerMinimizeApp'] = mike;
    return entity;
})();