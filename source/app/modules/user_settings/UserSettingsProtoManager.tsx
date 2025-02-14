// app/modules/user_settings/UserSettingsProtoManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: handleConnectionOpen
        _fun109371: for(var _fun109371_ip = 0; ; ) switch(_fun109371_ip) {
 0:
            tango = _closure1_slot3;
            entity = tango.getFullState;
            tango = entity.bind(tango)();
            var _closure2_slot0 = tango;
            entity = _closure1_slot4;
            entity = entity.PRELOADED_USER_SETTINGS;
            entity = tango[entity];
            tango = entity.editInfo;
            tango = tango.triggeredMigrations;
            if(!tango) { _fun109371_ip = 110; continue _fun109371 }
 52:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 6;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            oscar = tango.PreloadedUserSettingsActionCreators;
            report = oscar.markDirtyFromMigration;
            tango = entity.proto;
            entity = entity.editInfo;
            entity = entity.cleanupFuncs;
            entity = report.bind(oscar)(tango, entity);
 110:
            report = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 7;
            tango = golf[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.forEach;
            oscar = _closure1_slot0;
            zulu = 6;
            zulu = golf[zulu];
            zulu = oscar.bind(entity)(zulu);
            zulu = zulu.UserSettingsActionCreatorsByType;
            mike = function(argFoo, argBar) {
                _fun109372: for(var _fun109372_ip = 0; ; ) switch(_fun109372_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure2_slot0;
                    entity = global;
                    report = entity.Number;
                    entity = undefined;
                    mike = argBar;
                    mike = report.bind(entity)(mike);
                    tango = tango[mike];
                    mike = tango.editInfo;
                    mike = mike.offlineEditDataVersion;
                    report = null;
                    mike = report != mike;
                    if(!mike) { _fun109372_ip = 69; continue _fun109372 }
 53:
                    tango = tango.editInfo;
                    tango = tango.protoToSave;
                    mike = report != tango;
 69:
                    if(!mike) { _fun109372_ip = 84; continue _fun109372 }
 72:
                    mike = zulu.scheduleSaveFromOfflineEdit;
                    mike = mike.bind(zulu)();
 84:
                    return entity;
                }
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo) { // Original name: handleUserSettingsProtoEnqueueUpdate
        entity = argFoo;
        mike = entity.settings;
        report = mike.proto;
        zulu = mike.type;
        golf = entity.delaySeconds;
        oscar = entity.jitter;
        tango = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        mike = tango.bind(entity)(mike);
        mike = mike.UserSettingsActionCreatorsByType;
        tango = mike[zulu];
        zulu = tango.markDirty;
        mike = {};
        mike['delaySeconds'] = golf;
        mike['jitter'] = oscar;
        mike = zulu.bind(tango)(report, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo) { // Original name: handleUserSettingsProtoLoadIfNecessary
        entity = argFoo;
        zulu = entity.settingsType;
        tango = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        mike = tango.bind(entity)(mike);
        mike = mike.UserSettingsActionCreatorsByType;
        zulu = mike[zulu];
        mike = zulu.loadIfNecessary;
        mike = mike.bind(zulu)();
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: handleAppStateUpdate
        _fun109375: for(var _fun109375_ip = 0; ; ) switch(_fun109375_ip) {
 0:
            entity = argFoo;
            zulu = entity.state;
            entity = 'inactive';
            entity = entity !== zulu;
            if(!entity) { _fun109375_ip = 27; continue _fun109375 }
 19:
            mike = 'background';
            entity = mike !== zulu;
 27:
            if(entity) { _fun109375_ip = 97; continue _fun109375 }
 30:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 7;
            mike = oscar[mike];
            report = undefined;
            tango = zulu.bind(report)(mike);
            zulu = tango.forEach;
            mike = _closure1_slot0;
            entity = 6;
            entity = oscar[entity];
            entity = mike.bind(report)(entity);
            mike = entity.UserSettingsActionCreatorsByType;
            entity = function(argFoo, argBar) {
                _fun109376: for(var _fun109376_ip = 0; ; ) switch(_fun109376_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure1_slot3;
                    entity = mike.getFullState;
                    tango = entity.bind(mike)();
                    entity = global;
                    report = entity.Number;
                    entity = undefined;
                    mike = argBar;
                    mike = report.bind(entity)(mike);
                    mike = tango[mike];
                    mike = mike.editInfo;
                    tango = mike.timeout;
                    mike = null;
                    if(!(mike != tango)) { _fun109376_ip = 92; continue _fun109376 }
 60:
                    report = zulu.logger;
                    tango = report.log;
                    mike = 'Triggering persistChanges due to AppStateUpdate';
                    mike = tango.bind(report)(mike);
                    mike = zulu.persistChanges;
                    mike = mike.bind(zulu)();
 92:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
 97:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.UserSettingsTypes;
    var _closure1_slot4 = mike;
    mike = {};
    tango = function() { // Original name: init
        tango = _closure1_slot1;
        report = _closure1_slot2;
        zulu = 2;
        oscar = report[zulu];
        entity = undefined;
        options = tango.bind(entity)(oscar);
        oscar = _closure1_slot4;
        golf = oscar.PRELOADED_USER_SETTINGS;
        oscar = 3;
        oscar = report[oscar];
        oscar = tango.bind(entity)(oscar);
        options[golf] = oscar;
        zulu = report[zulu];
        golf = tango.bind(entity)(zulu);
        zulu = _closure1_slot4;
        oscar = zulu.FRECENCY_AND_FAVORITES_SETTINGS;
        zulu = 4;
        zulu = report[zulu];
        zulu = tango.bind(entity)(zulu);
        golf[oscar] = zulu;
        zulu = 5;
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = _closure1_slot5;
        oscar = 'CONNECTION_OPEN';
        oscar = options.bind(verify)(oscar, golf);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = _closure1_slot6;
        oscar = 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE';
        oscar = options.bind(verify)(oscar, golf);
        oscar = report[zulu];
        verify = tango.bind(entity)(oscar);
        options = verify.subscribe;
        golf = _closure1_slot7;
        oscar = 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY';
        oscar = options.bind(verify)(oscar, golf);
        zulu = report[zulu];
        report = tango.bind(entity)(zulu);
        tango = report.subscribe;
        zulu = _closure1_slot8;
        mike = 'APP_STATE_UPDATE';
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    mike['init'] = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/UserSettingsProtoManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();