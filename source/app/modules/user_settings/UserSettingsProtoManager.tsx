// app/modules/user_settings/UserSettingsProtoManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: handleConnectionOpen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot3;
            entity = tangon.getFullState;
            tangon = entity.bind(tangon)();
            var _closure2_slot0 = tangon;
            entity = _closure1_slot4;
            entity = entity.PRELOADED_USER_SETTINGS;
            entity = tangon[entity];
            tangon = entity.editInfo;
            tangon = tangon.triggeredMigrations;
            if(!tangon) { _fun00002_ip = 110; continue _fun00001 }
 52:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 6;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            oscard = tangon.PreloadedUserSettingsActionCreators;
            report = oscard.markDirtyFromMigration;
            tangon = entity.proto;
            entity = entity.editInfo;
            entity = entity.cleanupFuncs;
            entity = report.bind(oscard)(tangon, entity);
 110:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 7;
            tangon = golfie[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.forEach;
            oscard = _closure1_slot0;
            zuuluu = 6;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.UserSettingsActionCreatorsByType;
            michal = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot0;
                    entity = global;
                    report = entity.Number;
                    entity = undefined;
                    michal = argBar;
                    michal = report.bind(entity)(michal);
                    tangon = tangon[michal];
                    michal = tangon.editInfo;
                    michal = michal.offlineEditDataVersion;
                    report = null;
                    michal = report != michal;
                    if(!michal) { _fun00004_ip = 69; continue _fun00003 }
 53:
                    tangon = tangon.editInfo;
                    tangon = tangon.protoToSave;
                    michal = report != tangon;
 69:
                    if(!michal) { _fun00004_ip = 82; continue _fun00003 }
 72:
                    michal = zuuluu.scheduleSaveFromOfflineEdit;
                    michal = michal.bind(zuuluu)();
 82:
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo) { // Original name: handleUserSettingsProtoEnqueueUpdate
        entity = argFoo;
        michal = entity.settings;
        report = michal.proto;
        zuuluu = michal.type;
        golfie = entity.delaySeconds;
        oscard = entity.jitter;
        tangon = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        michal = tangon.bind(entity)(michal);
        michal = michal.UserSettingsActionCreatorsByType;
        tangon = michal[zuuluu];
        zuuluu = tangon.markDirty;
        michal = {};
        michal['delaySeconds'] = golfie;
        michal['jitter'] = oscard;
        michal = zuuluu.bind(tangon)(report, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo) { // Original name: handleUserSettingsProtoLoadIfNecessary
        entity = argFoo;
        zuuluu = entity.settingsType;
        tangon = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        michal = tangon.bind(entity)(michal);
        michal = michal.UserSettingsActionCreatorsByType;
        zuuluu = michal[zuuluu];
        michal = zuuluu.loadIfNecessary;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: handleAppStateUpdate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.state;
            entity = 'inactive';
            entity = entity !== zuuluu;
            if(!entity) { _fun00006_ip = 27; continue _fun00005 }
 19:
            michal = 'background';
            entity = michal !== zuuluu;
 27:
            if(entity) { _fun00006_ip = 97; continue _fun00005 }
 30:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 7;
            michal = oscard[michal];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.forEach;
            michal = _closure1_slot0;
            entity = 6;
            entity = oscard[entity];
            entity = michal.bind(report)(entity);
            michal = entity.UserSettingsActionCreatorsByType;
            entity = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure1_slot3;
                    entity = michal.getFullState;
                    tangon = entity.bind(michal)();
                    entity = global;
                    report = entity.Number;
                    entity = undefined;
                    michal = argBar;
                    michal = report.bind(entity)(michal);
                    michal = tangon[michal];
                    michal = michal.editInfo;
                    tangon = michal.timeout;
                    michal = null;
                    if(!(michal != tangon)) { _fun00008_ip = 91; continue _fun00007 }
 60:
                    report = zuuluu.logger;
                    tangon = report.log;
                    michal = 'Triggering persistChanges due to AppStateUpdate';
                    michal = tangon.bind(report)(michal);
                    michal = zuuluu.persistChanges;
                    michal = michal.bind(zuuluu)();
 91:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
 97:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.UserSettingsTypes;
    var _closure1_slot4 = michal;
    michal = {};
    tangon = function() { // Original name: init
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 2;
        oscard = report[zuuluu];
        entity = undefined;
        option = tangon.bind(entity)(oscard);
        oscard = _closure1_slot4;
        golfie = oscard.PRELOADED_USER_SETTINGS;
        oscard = 3;
        oscard = report[oscard];
        oscard = tangon.bind(entity)(oscard);
        option[golfie] = oscard;
        zuuluu = report[zuuluu];
        golfie = tangon.bind(entity)(zuuluu);
        zuuluu = _closure1_slot4;
        oscard = zuuluu.FRECENCY_AND_FAVORITES_SETTINGS;
        zuuluu = 4;
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        golfie[oscard] = zuuluu;
        zuuluu = 5;
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = _closure1_slot5;
        oscard = 'CONNECTION_OPEN';
        oscard = option.bind(verify)(oscard, golfie);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = _closure1_slot6;
        oscard = 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE';
        oscard = option.bind(verify)(oscard, golfie);
        oscard = report[zuuluu];
        verify = tangon.bind(entity)(oscard);
        option = verify.subscribe;
        golfie = _closure1_slot7;
        oscard = 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY';
        oscard = option.bind(verify)(oscard, golfie);
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.subscribe;
        zuuluu = _closure1_slot8;
        michal = 'APP_STATE_UPDATE';
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    michal['init'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/UserSettingsProtoManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();