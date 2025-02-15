// app/modules/main_tabs_v2/native/settings/screens/account/SettingsAccountUtils.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/screens/account/SettingsAccountUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useIs2FAEnabled
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot3;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            _fun92980: for(var _fun92980_ip = 0; ; ) switch(_fun92980_ip) {
 0:
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                zulu = entity.bind(mike)();
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun92980_ip = 33; continue _fun92980 }
 27:
                mike = zulu.mfaEnabled;
 33:
                entity = entity != mike;
                if(!entity) { _fun92980_ip = 43; continue _fun92980 }
 40:
                entity = mike;
 43:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIs2FAEnabled'] = tango;
    tango = function() { // Original name: useIsTOTPEnabled
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot2;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            mike = _closure1_slot2;
            entity = mike.hasTOTPEnabled;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsTOTPEnabled'] = tango;
    mike = function() { // Original name: useIsUserVerified
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot3;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            _fun92984: for(var _fun92984_ip = 0; ; ) switch(_fun92984_ip) {
 0:
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                zulu = entity.bind(mike)();
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun92984_ip = 33; continue _fun92984 }
 27:
                mike = zulu.verified;
 33:
                entity = entity != mike;
                if(!entity) { _fun92984_ip = 43; continue _fun92984 }
 40:
                entity = mike;
 43:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsUserVerified'] = mike;
    return entity;
})();