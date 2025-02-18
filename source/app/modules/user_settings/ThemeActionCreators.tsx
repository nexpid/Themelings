// app/modules/user_settings/ThemeActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: setSystemTheme
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SYSTEM_THEME_CHANGE';
        michal['type'] = report;
        report = argFoo;
        michal['systemTheme'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot4 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.SystemThemeState;
    var _closure1_slot3 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/user_settings/ThemeActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['setSystemTheme'] = tangon;
    tangon = function() { // Original name: setSystemThemeIfNeeded
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot2;
            zuuluu = michal.useSystemTheme;
            michal = _closure1_slot3;
            michal = michal.OFF;
            if(!(zuuluu !== michal)) { _fun00002_ip = 62; continue _fun00001 }
 27:
            zuuluu = _closure1_slot4;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 3;
            entity = michal[entity];
            michal = undefined;
            entity = tangon.bind(michal)(entity);
            entity = entity.bind(michal)();
            entity = zuuluu.bind(michal)(entity);
 62:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['setSystemThemeIfNeeded'] = tangon;
    tangon = function(argFoo) { // Original name: setUseSystemTheme
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'UNSYNCED_USER_SETTINGS_UPDATE';
        michal['type'] = report;
        report = {};
        oscard = argFoo;
        report['useSystemTheme'] = oscard;
        michal['settings'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setUseSystemTheme'] = tangon;
    michal = function(argFoo) { // Original name: setDarkThemeOnClient
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SET_DARK_MODE_THEME';
        michal['type'] = report;
        report = argFoo;
        michal['theme'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setDarkThemeOnClient'] = michal;
    return entity;
})();