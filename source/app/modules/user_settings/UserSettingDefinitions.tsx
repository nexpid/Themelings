// app/modules/user_settings/UserSettingDefinitions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: makeUpdateSettingFunction
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            _fun35415: for(var _fun35415_ip = 0; ; ) switch(_fun35415_ip) {
 0:
                report = argFoo;
                zulu = _closure2_slot1;
                oscar = 'function';
                tango = typeof report;
                mike = report;
                if(!(oscar === tango)) { _fun35415_ip = 39; continue _fun35415 }
 24:
                entity = _closure2_slot0;
                tango = undefined;
                entity = entity.bind(tango)();
                mike = report.bind(tango)(entity);
 39:
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UserSettingsDelay;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/UserSettingDefinitions.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: defineProtoSetting
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        entity = argCorge;
        var _closure2_slot3 = entity;
        oscar = function() { // Original name: getSetting
            _fun35417: for(var _fun35417_ip = 0; ; ) switch(_fun35417_ip) {
 0:
                zulu = _closure2_slot2;
                entity = _closure1_slot4;
                mike = entity.settings;
                entity = _closure2_slot0;
                report = mike[entity];
                entity = null;
                oscar = entity == report;
                mike = undefined;
                entity = undefined;
                if(oscar) { _fun35417_ip = 49; continue _fun35417 }
 41:
                tango = _closure2_slot1;
                entity = report[tango];
 49:
                entity = zulu.bind(mike)(entity);
                return entity;
            }
        };
        var _closure2_slot4 = oscar;
        entity = {};
        entity['getSetting'] = oscar;
        report = _closure1_slot6;
        tango = undefined;
        zulu = function(argFoo) {
            mike = argFoo;
            var _closure3_slot0 = mike;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 3;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            report = zulu.PreloadedUserSettingsActionCreators;
            tango = report.updateAsync;
            zulu = _closure2_slot0;
            mike = _closure1_slot5;
            mike = mike.INFREQUENT_USER_ACTION;
            entity = function(argFoo) {
                tango = argFoo;
                zulu = _closure2_slot1;
                oscar = _closure2_slot3;
                report = _closure3_slot0;
                mike = tango[zulu];
                entity = undefined;
                mike = oscar.bind(entity)(report, mike);
                tango[zulu] = mike;
                return entity;
            };
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        };
        zulu = report.bind(tango)(oscar, zulu);
        entity['updateSetting'] = zulu;
        mike = function() { // Original name: useSetting
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 4;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.useStateFromStores;
            entity = _closure1_slot4;
            mike = new Array(1);
            mike[0] = entity;
            entity = _closure2_slot4;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['useSetting'] = mike;
        return entity;
    };
    zulu['defineProtoSetting'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: wrapSettingWithSelectiveSyncing
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        report = function() { // Original name: getSetting
            _fun35422: for(var _fun35422_ip = 0; ; ) switch(_fun35422_ip) {
 0:
                mike = _closure1_slot3;
                entity = mike.getState;
                zulu = entity.bind(mike)();
                entity = _closure2_slot1;
                tango = zulu[entity];
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                if(report) { _fun35422_ip = 53; continue _fun35422 }
 39:
                report = tango.settings;
                tango = _closure2_slot2;
                entity = report[tango];
 53:
                if(!(zulu == entity)) { _fun35422_ip = 71; continue _fun35422 }
 57:
                zulu = _closure2_slot0;
                mike = zulu.getSetting;
                entity = mike.bind(zulu)();
 71:
                return entity;
            }
        };
        entity = {};
        entity['getSetting'] = report;
        zulu = function() { // Original name: useSetting
            _fun35423: for(var _fun35423_ip = 0; ; ) switch(_fun35423_ip) {
 0:
                mike = _closure2_slot0;
                entity = mike.useSetting;
                entity = entity.bind(mike)();
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 4;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.useStateFromStores;
                mike = _closure1_slot3;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = function() {
                    _fun35424: for(var _fun35424_ip = 0; ; ) switch(_fun35424_ip) {
 0:
                        mike = _closure1_slot3;
                        entity = mike.getState;
                        zulu = entity.bind(mike)();
                        entity = _closure2_slot1;
                        zulu = zulu[entity];
                        entity = null;
                        tango = entity == zulu;
                        entity = undefined;
                        if(tango) { _fun35424_ip = 53; continue _fun35424 }
 39:
                        zulu = zulu.settings;
                        mike = _closure2_slot2;
                        entity = zulu[mike];
 53:
                        return entity;
                    }
                };
                mike = tango.bind(report)(zulu, mike);
                zulu = null;
                if(!(zulu != mike)) { _fun35423_ip = 81; continue _fun35423 }
 78:
                entity = mike;
 81:
                return entity;
            }
        };
        entity['useSetting'] = zulu;
        tango = _closure1_slot6;
        zulu = undefined;
        mike = function(argFoo) {
            _fun35425: for(var _fun35425_ip = 0; ; ) switch(_fun35425_ip) {
 0:
                tango = argFoo;
                oscar = _closure1_slot3;
                report = oscar.shouldSync;
                zulu = _closure2_slot1;
                zulu = report.bind(oscar)(zulu);
                if(zulu) { _fun35425_ip = 127; continue _fun35425 }
 31:
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                report = report.bind(entity)(zulu);
                zulu = report.dispatch;
                entity = {};
                oscar = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
                entity['type'] = oscar;
                oscar = {};
                options = _closure2_slot1;
                golf = {};
                verify = {};
                offset = _closure2_slot2;
                verify[offset] = tango;
                golf['settings'] = verify;
                oscar[options] = golf;
                entity['changes'] = oscar;
                entity = zulu.bind(report)(entity);
                entity = global;
                zulu = entity.Promise;
                entity = zulu.resolve;
                entity = entity.bind(zulu)();
                _fun35425_ip = 142; continue _fun35425;
 127:
                zulu = _closure2_slot0;
                mike = zulu.updateSetting;
                entity = mike.bind(zulu)(tango);
 142:
                return entity;
            }
        };
        mike = tango.bind(zulu)(report, mike);
        entity['updateSetting'] = mike;
        return entity;
    };
    zulu['wrapSettingWithSelectiveSyncing'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: wrapSettingWithOverride
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        entity = argCorge;
        var _closure2_slot3 = entity;
        report = function() { // Original name: getSetting
            _fun35427: for(var _fun35427_ip = 0; ; ) switch(_fun35427_ip) {
 0:
                zulu = _closure2_slot2;
                entity = undefined;
                entity = zulu.bind(entity)();
                zulu = null;
                if(!(zulu == entity)) { _fun35427_ip = 33; continue _fun35427 }
 19:
                zulu = _closure2_slot0;
                mike = zulu.getSetting;
                entity = mike.bind(zulu)();
 33:
                return entity;
            }
        };
        entity = {};
        entity['getSetting'] = report;
        zulu = function() { // Original name: useSetting
            _fun35428: for(var _fun35428_ip = 0; ; ) switch(_fun35428_ip) {
 0:
                zulu = _closure2_slot0;
                entity = zulu.useSetting;
                entity = entity.bind(zulu)();
                zulu = _closure2_slot3;
                mike = undefined;
                mike = zulu.bind(mike)();
                zulu = null;
                if(!(zulu != mike)) { _fun35428_ip = 36; continue _fun35428 }
 33:
                entity = mike;
 36:
                return entity;
            }
        };
        entity['useSetting'] = zulu;
        tango = _closure1_slot6;
        zulu = undefined;
        mike = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            entity = 'USER_SETTINGS_OVERRIDE_CLEAR';
            mike['type'] = entity;
            oscar = _closure2_slot1;
            report = new Array(1);
            report[0] = oscar;
            mike['settings'] = report;
            mike = zulu.bind(tango)(mike);
            zulu = _closure2_slot0;
            mike = zulu.updateSetting;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = tango.bind(zulu)(report, mike);
        entity['updateSetting'] = mike;
        return entity;
    };
    zulu['wrapSettingWithOverride'] = tango;
    tango = function(argFoo) { // Original name: wrapSettingWithExperimentDefaults
        entity = argFoo;
        zulu = entity.baseSetting;
        var _closure2_slot0 = zulu;
        zulu = entity.isEligible;
        var _closure2_slot1 = zulu;
        zulu = entity.useIsEligible;
        var _closure2_slot2 = zulu;
        zulu = entity.eligibleDefault;
        var _closure2_slot3 = zulu;
        entity = entity.ineligibleDefault;
        var _closure2_slot4 = entity;
        entity = {};
        zulu = function() { // Original name: getSetting
            _fun35431: for(var _fun35431_ip = 0; ; ) switch(_fun35431_ip) {
 0:
                mike = _closure2_slot0;
                entity = mike.getSetting;
                entity = entity.bind(mike)();
                mike = null;
                if(!(mike == entity)) { _fun35431_ip = 53; continue _fun35431 }
 23:
                mike = _closure2_slot1;
                tango = undefined;
                mike = mike.bind(tango)();
                if(mike) { _fun35431_ip = 42; continue _fun35431 }
 36:
                mike = _closure2_slot4;
                _fun35431_ip = 50; continue _fun35431;
 42:
                zulu = _closure2_slot3;
                mike = zulu.bind(tango)();
 50:
                entity = mike;
 53:
                return entity;
            }
        };
        entity['getSetting'] = zulu;
        zulu = function() { // Original name: useSetting
            _fun35432: for(var _fun35432_ip = 0; ; ) switch(_fun35432_ip) {
 0:
                mike = _closure2_slot0;
                entity = mike.useSetting;
                entity = entity.bind(mike)();
                mike = _closure2_slot2;
                tango = undefined;
                mike = mike.bind(tango)();
                report = null;
                if(!(report == entity)) { _fun35432_ip = 53; continue _fun35432 }
 33:
                if(mike) { _fun35432_ip = 42; continue _fun35432 }
 36:
                mike = _closure2_slot4;
                _fun35432_ip = 50; continue _fun35432;
 42:
                zulu = _closure2_slot3;
                mike = zulu.bind(tango)();
 50:
                entity = mike;
 53:
                return entity;
            }
        };
        entity['useSetting'] = zulu;
        mike = function(argFoo) { // Original name: updateSetting
            zulu = _closure2_slot0;
            mike = zulu.updateSetting;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['updateSetting'] = mike;
        return entity;
    };
    zulu['wrapSettingWithExperimentDefaults'] = tango;
    mike = function(argFoo, argBar) { // Original name: overrideUseStateFromStoresFunction
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        report = entity;
        tango = zulu;
        zulu = copyDataProperties(report, tango);
        zulu = function() { // Original name: useSetting
            tango = _closure2_slot1;
            mike = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = mike;
            entity = _closure2_slot0;
            mike = entity.getSetting;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        mike = 'useSetting';
        entity[mike] = zulu;
        return entity;
    };
    zulu['overrideUseStateFromStoresFunction'] = mike;
    return entity;
})();