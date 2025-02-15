// app/modules/user_settings/ThemeActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: setSystemTheme
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SYSTEM_THEME_CHANGE';
        mike['type'] = report;
        report = argFoo;
        mike['systemTheme'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot4 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SystemThemeState;
    var _closure1_slot3 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/user_settings/ThemeActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['setSystemTheme'] = tango;
    tango = function() { // Original name: setSystemThemeIfNeeded
        _fun107728: for(var _fun107728_ip = 0; ; ) switch(_fun107728_ip) {
 0:
            mike = _closure1_slot2;
            zulu = mike.useSystemTheme;
            mike = _closure1_slot3;
            mike = mike.OFF;
            if(!(zulu !== mike)) { _fun107728_ip = 62; continue _fun107728 }
 27:
            zulu = _closure1_slot4;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 3;
            entity = mike[entity];
            mike = undefined;
            entity = tango.bind(mike)(entity);
            entity = entity.bind(mike)();
            entity = zulu.bind(mike)(entity);
 62:
            entity = undefined;
            return entity;
        }
    };
    zulu['setSystemThemeIfNeeded'] = tango;
    tango = function(argFoo) { // Original name: setUseSystemTheme
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'UNSYNCED_USER_SETTINGS_UPDATE';
        mike['type'] = report;
        report = {};
        oscar = argFoo;
        report['useSystemTheme'] = oscar;
        mike['settings'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setUseSystemTheme'] = tango;
    mike = function(argFoo) { // Original name: setDarkThemeOnClient
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SET_DARK_MODE_THEME';
        mike['type'] = report;
        report = argFoo;
        mike['theme'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setDarkThemeOnClient'] = mike;
    return entity;
})();