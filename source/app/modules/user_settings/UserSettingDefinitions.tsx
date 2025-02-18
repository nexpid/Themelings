// app/modules/user_settings/UserSettingDefinitions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: makeUpdateSettingFunction
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                zuuluu = _closure2_slot1;
                oscard = 'function';
                tangon = typeof report;
                michal = report;
                if(!(oscard === tangon)) { _fun00002_ip = 39; continue _fun00001 }
 24:
                entity = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)();
                michal = report.bind(tangon)(entity);
 39:
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserSettingsDelay;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/UserSettingDefinitions.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: defineProtoSetting
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        entity = argCor;
        var _closure2_slot3 = entity;
        oscard = function() { // Original name: getSetting
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot2;
                entity = _closure1_slot4;
                michal = entity.settings;
                entity = _closure2_slot0;
                report = michal[entity];
                entity = null;
                oscard = entity == report;
                michal = undefined;
                entity = undefined;
                if(oscard) { _fun00004_ip = 49; continue _fun00003 }
 41:
                tangon = _closure2_slot1;
                entity = report[tangon];
 49:
                entity = zuuluu.bind(michal)(entity);
                return entity;
            }
        };
        var _closure2_slot4 = oscard;
        entity = {};
        entity['getSetting'] = oscard;
        report = _closure1_slot6;
        tangon = undefined;
        zuuluu = function(argFoo) {
            michal = argFoo;
            var _closure3_slot0 = michal;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 3;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            report = zuuluu.PreloadedUserSettingsActionCreators;
            tangon = report.updateAsync;
            zuuluu = _closure2_slot0;
            michal = _closure1_slot5;
            michal = michal.INFREQUENT_USER_ACTION;
            entity = function(argFoo) {
                tangon = argFoo;
                zuuluu = _closure2_slot1;
                oscard = _closure2_slot3;
                report = _closure3_slot0;
                michal = tangon[zuuluu];
                entity = undefined;
                michal = oscard.bind(entity)(report, michal);
                tangon[zuuluu] = michal;
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        };
        zuuluu = report.bind(tangon)(oscard, zuuluu);
        entity['updateSetting'] = zuuluu;
        michal = function() { // Original name: useSetting
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 4;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.useStateFromStores;
            entity = _closure1_slot4;
            michal = new Array(1);
            michal[0] = entity;
            entity = _closure2_slot4;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['useSetting'] = michal;
        return entity;
    };
    zuuluu['defineProtoSetting'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: wrapSettingWithSelectiveSyncing
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        report = function() { // Original name: getSetting
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure1_slot3;
                entity = michal.getState;
                zuuluu = entity.bind(michal)();
                entity = _closure2_slot1;
                tangon = zuuluu[entity];
                zuuluu = null;
                report = zuuluu == tangon;
                entity = undefined;
                if(report) { _fun00006_ip = 53; continue _fun00005 }
 39:
                report = tangon.settings;
                tangon = _closure2_slot2;
                entity = report[tangon];
 53:
                if(!(zuuluu == entity)) { _fun00006_ip = 71; continue _fun00005 }
 57:
                zuuluu = _closure2_slot0;
                michal = zuuluu.getSetting;
                entity = michal.bind(zuuluu)();
 71:
                return entity;
            }
        };
        entity = {};
        entity['getSetting'] = report;
        zuuluu = function() { // Original name: useSetting
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure2_slot0;
                entity = michal.useSetting;
                entity = entity.bind(michal)();
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 4;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.useStateFromStores;
                michal = _closure1_slot3;
                zuuluu = new Array(1);
                zuuluu[0] = michal;
                michal = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure1_slot3;
                        entity = michal.getState;
                        zuuluu = entity.bind(michal)();
                        entity = _closure2_slot1;
                        zuuluu = zuuluu[entity];
                        entity = null;
                        tangon = entity == zuuluu;
                        entity = undefined;
                        if(tangon) { _fun00010_ip = 53; continue _fun00009 }
 39:
                        zuuluu = zuuluu.settings;
                        michal = _closure2_slot2;
                        entity = zuuluu[michal];
 53:
                        return entity;
                    }
                };
                michal = tangon.bind(report)(zuuluu, michal);
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00008_ip = 81; continue _fun00007 }
 78:
                entity = michal;
 81:
                return entity;
            }
        };
        entity['useSetting'] = zuuluu;
        tangon = _closure1_slot6;
        zuuluu = undefined;
        michal = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                oscard = _closure1_slot3;
                report = oscard.shouldSync;
                zuuluu = _closure2_slot1;
                zuuluu = report.bind(oscard)(zuuluu);
                if(zuuluu) { _fun00012_ip = 127; continue _fun00011 }
 31:
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 5;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = report.bind(entity)(zuuluu);
                zuuluu = report.dispatch;
                entity = {};
                oscard = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
                entity['type'] = oscard;
                oscard = {};
                option = _closure2_slot1;
                golfie = {};
                verify = {};
                offset = _closure2_slot2;
                verify[offset] = tangon;
                golfie['settings'] = verify;
                oscard[option] = golfie;
                entity['changes'] = oscard;
                entity = zuuluu.bind(report)(entity);
                entity = global;
                zuuluu = entity.Promise;
                entity = zuuluu.resolve;
                entity = entity.bind(zuuluu)();
                _fun00012_ip = 142; continue _fun00011;
 127:
                zuuluu = _closure2_slot0;
                michal = zuuluu.updateSetting;
                entity = michal.bind(zuuluu)(tangon);
 142:
                return entity;
            }
        };
        michal = tangon.bind(zuuluu)(report, michal);
        entity['updateSetting'] = michal;
        return entity;
    };
    zuuluu['wrapSettingWithSelectiveSyncing'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: wrapSettingWithOverride
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        entity = argCor;
        var _closure2_slot3 = entity;
        report = function() { // Original name: getSetting
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = _closure2_slot2;
                entity = undefined;
                entity = zuuluu.bind(entity)();
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00014_ip = 33; continue _fun00013 }
 19:
                zuuluu = _closure2_slot0;
                michal = zuuluu.getSetting;
                entity = michal.bind(zuuluu)();
 33:
                return entity;
            }
        };
        entity = {};
        entity['getSetting'] = report;
        zuuluu = function() { // Original name: useSetting
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = zuuluu.useSetting;
                entity = entity.bind(zuuluu)();
                zuuluu = _closure2_slot3;
                michal = undefined;
                michal = zuuluu.bind(michal)();
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00016_ip = 36; continue _fun00015 }
 33:
                entity = michal;
 36:
                return entity;
            }
        };
        entity['useSetting'] = zuuluu;
        tangon = _closure1_slot6;
        zuuluu = undefined;
        michal = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            entity = 'USER_SETTINGS_OVERRIDE_CLEAR';
            michal['type'] = entity;
            oscard = _closure2_slot1;
            report = new Array(1);
            report[0] = oscard;
            michal['settings'] = report;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = _closure2_slot0;
            michal = zuuluu.updateSetting;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = tangon.bind(zuuluu)(report, michal);
        entity['updateSetting'] = michal;
        return entity;
    };
    zuuluu['wrapSettingWithOverride'] = tangon;
    tangon = function(argFoo) { // Original name: wrapSettingWithExperimentDefaults
        entity = argFoo;
        zuuluu = entity.baseSetting;
        var _closure2_slot0 = zuuluu;
        zuuluu = entity.isEligible;
        var _closure2_slot1 = zuuluu;
        zuuluu = entity.useIsEligible;
        var _closure2_slot2 = zuuluu;
        zuuluu = entity.eligibleDefault;
        var _closure2_slot3 = zuuluu;
        entity = entity.ineligibleDefault;
        var _closure2_slot4 = entity;
        entity = {};
        zuuluu = function() { // Original name: getSetting
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = _closure2_slot0;
                entity = michal.getSetting;
                entity = entity.bind(michal)();
                michal = null;
                if(!(michal == entity)) { _fun00018_ip = 53; continue _fun00017 }
 23:
                michal = _closure2_slot1;
                tangon = undefined;
                michal = michal.bind(tangon)();
                if(michal) { _fun00018_ip = 42; continue _fun00017 }
 36:
                michal = _closure2_slot4;
                _fun00018_ip = 50; continue _fun00017;
 42:
                zuuluu = _closure2_slot3;
                michal = zuuluu.bind(tangon)();
 50:
                entity = michal;
 53:
                return entity;
            }
        };
        entity['getSetting'] = zuuluu;
        zuuluu = function() { // Original name: useSetting
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = _closure2_slot0;
                entity = michal.useSetting;
                entity = entity.bind(michal)();
                michal = _closure2_slot2;
                tangon = undefined;
                michal = michal.bind(tangon)();
                report = null;
                if(!(report == entity)) { _fun00020_ip = 53; continue _fun00019 }
 33:
                if(michal) { _fun00020_ip = 42; continue _fun00019 }
 36:
                michal = _closure2_slot4;
                _fun00020_ip = 50; continue _fun00019;
 42:
                zuuluu = _closure2_slot3;
                michal = zuuluu.bind(tangon)();
 50:
                entity = michal;
 53:
                return entity;
            }
        };
        entity['useSetting'] = zuuluu;
        michal = function(argFoo) { // Original name: updateSetting
            zuuluu = _closure2_slot0;
            michal = zuuluu.updateSetting;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['updateSetting'] = michal;
        return entity;
    };
    zuuluu['wrapSettingWithExperimentDefaults'] = tangon;
    michal = function(argFoo, argBar) { // Original name: overrideUseStateFromStoresFunction
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        report = entity;
        tangon = zuuluu;
        zuuluu = copyDataProperties(report, tangon);
        zuuluu = function() { // Original name: useSetting
            tangon = _closure2_slot1;
            michal = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            entity = _closure2_slot0;
            michal = entity.getSetting;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        michal = 'useSetting';
        entity[michal] = zuuluu;
        return entity;
    };
    zuuluu['overrideUseStateFromStoresFunction'] = michal;
    return entity;
})();