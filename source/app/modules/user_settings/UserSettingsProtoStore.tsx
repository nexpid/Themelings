// app/modules/user_settings/UserSettingsProtoStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun34306: for(var _fun34306_ip = 0; ; ) switch(_fun34306_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun34306_ip = 51; continue _fun34306 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun34306_ip = 92; continue _fun34306;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun34306_ip = 71; continue _fun34306 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun34307: for(var _fun34307_ip = 0; ; ) switch(_fun34307_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun34307_ip = 74; continue _fun34307;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    verify = function() { // Original name: handleConnectionClosedOrResumed
        mike = _closure1_slot16;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    entity = function() { // Original name: clearInFlightTimeouts
        entity = global;
        zulu = entity.Object;
        mike = zulu.values;
        entity = _closure1_slot12;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun34312: for(var _fun34312_ip = 0; ; ) switch(_fun34312_ip) {
 0:
                tango = argFoo;
                entity = tango.editInfo;
                mike = entity.timeout;
                entity = null;
                if(!(entity != mike)) { _fun34312_ip = 150; continue _fun34312 }
 24:
                mike = global;
                oscar = mike.clearTimeout;
                zulu = tango.editInfo;
                report = zulu.timeout;
                zulu = undefined;
                report = oscar.bind(zulu)(report);
                report = tango.editInfo;
                report['timeout'] = zulu;
                report = tango.editInfo;
                mike = mike.Number;
                mike = mike.MAX_SAFE_INTEGER;
                report['timeoutDelay'] = mike;
                report = tango.editInfo;
                mike = false;
                report['rateLimited'] = mike;
                mike = tango.editInfo;
                tango = tango.proto;
                tango = tango.versions;
                report = entity == tango;
                if(report) { _fun34312_ip = 132; continue _fun34312 }
 126:
                zulu = tango.dataVersion;
 132:
                tango = entity != zulu;
                entity = 0;
                if(!tango) { _fun34312_ip = 144; continue _fun34312 }
 141:
                entity = zulu;
 144:
                mike['offlineEditDataVersion'] = entity;
 150:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: resetEditInfo_
        _fun34313: for(var _fun34313_ip = 0; ; ) switch(_fun34313_ip) {
 0:
            zulu = argFoo;
            entity = zulu.editInfo;
            mike = entity.timeout;
            entity = null;
            if(!(entity != mike)) { _fun34313_ip = 48; continue _fun34313 }
 21:
            entity = global;
            tango = entity.clearTimeout;
            entity = zulu.editInfo;
            mike = entity.timeout;
            entity = undefined;
            entity = tango.bind(entity)(mike);
 48:
            mike = _closure1_slot9;
            entity = undefined;
            mike = mike.bind(entity)();
            zulu['editInfo'] = mike;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    offset = function(argFoo) { // Original name: handleUserSettingsProtoUpdate
        _fun34314: for(var _fun34314_ip = 0; ; ) switch(_fun34314_ip) {
 0:
            entity = argFoo;
            mike = entity.settings;
            verify = mike.proto;
            report = mike.type;
            zulu = entity.partial;
            tango = entity.resetEditInfo;
            entity = entity.local;
            entity = !entity;
            _closure1_slot13 = entity;
            entity = _closure1_slot12;
            entity = entity[report];
            if(!tango) { _fun34314_ip = 70; continue _fun34314 }
 59:
            report = _closure1_slot17;
            tango = undefined;
            tango = report.bind(tango)(entity);
 70:
            if(zulu) { _fun34314_ip = 160; continue _fun34314 }
 73:
            entity['proto'] = verify;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 8;
            zulu = report[zulu];
            oscar = undefined;
            report = tango.bind(oscar)(zulu);
            zulu = entity.proto;
            tango = 'string';
            zulu = typeof zulu;
            tango = tango !== zulu;
            zulu = 'UserSettingsProto cannot be a string';
            zulu = report.bind(oscar)(tango, zulu);
            tango = entity.editInfo;
            zulu = true;
            tango['loaded'] = zulu;
            tango = entity.editInfo;
            zulu = false;
            tango['loading'] = zulu;
            _fun34314_ip = 258; continue _fun34314;
 160:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 9;
            zulu = report[zulu];
            tango = undefined;
            options = oscar.bind(tango)(zulu);
            golf = options.mergeTopLevelFields;
            oscar = entity.ProtoClass;
            zulu = entity.proto;
            zulu = golf.bind(options)(oscar, zulu, verify);
            entity['proto'] = zulu;
            zulu = _closure1_slot1;
            mike = 8;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            entity = entity.proto;
            mike = 'string';
            entity = typeof entity;
            mike = mike !== entity;
            entity = 'UserSettingsProto cannot be a string';
            entity = zulu.bind(tango)(mike, entity);
 258:
            entity = undefined;
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: loadFromCache
        _fun34315: for(var _fun34315_ip = 0; ; ) switch(_fun34315_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            mike = null;
            if(!(mike != zulu)) { _fun34315_ip = 60; continue _fun34315 }
 15:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 11;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.forEach;
            mike = _closure1_slot12;
            entity = function(argFoo, argBar) {
                _fun34316: for(var _fun34316_ip = 0; ; ) switch(_fun34316_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure2_slot0;
                    entity = global;
                    report = entity.Number;
                    entity = undefined;
                    mike = argBar;
                    mike = report.bind(entity)(mike);
                    mike = tango[mike];
                    tango = null;
                    if(!(tango != mike)) { _fun34316_ip = 283; continue _fun34316 }
 41:
                    oscar = tango == mike;
                    report = undefined;
                    if(oscar) { _fun34316_ip = 56; continue _fun34316 }
 50:
                    report = mike.proto;
 56:
                    oscar = tango != report;
                    offset = '';
                    if(!oscar) { _fun34316_ip = 70; continue _fun34316 }
 67:
                    offset = report;
 70:
                    options = _closure1_slot0;
                    oscar = _closure1_slot2;
                    golf = 9;
                    oscar = oscar[golf];
                    verify = options.bind(entity)(oscar);
                    options = verify.b64ToProto;
                    oscar = zulu.ProtoClass;
                    oscar = options.bind(verify)(oscar, offset);
                    if(!(tango != oscar)) { _fun34316_ip = 283; continue _fun34316 }
 118:
                    zulu['proto'] = oscar;
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscar = 8;
                    oscar = verify[oscar];
                    verify = options.bind(entity)(oscar);
                    oscar = zulu.proto;
                    options = 'string';
                    oscar = typeof oscar;
                    options = options !== oscar;
                    oscar = 'UserSettingsProto cannot be a string';
                    oscar = verify.bind(entity)(options, oscar);
                    options = tango == mike;
                    oscar = undefined;
                    if(options) { _fun34316_ip = 188; continue _fun34316 }
 182:
                    oscar = mike.protoToSave;
 188:
                    verify = tango != oscar;
                    options = null;
                    if(!verify) { _fun34316_ip = 200; continue _fun34316 }
 197:
                    options = oscar;
 200:
                    if(!(tango != options)) { _fun34316_ip = 283; continue _fun34316 }
 204:
                    oscar = mike.offlineEditDataVersion;
                    if(!(tango != oscar)) { _fun34316_ip = 283; continue _fun34316 }
 214:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[golf];
                    golf = oscar.bind(entity)(report);
                    oscar = golf.b64ToProto;
                    report = zulu.ProtoClass;
                    report = oscar.bind(golf)(report, options);
                    if(!(tango != report)) { _fun34316_ip = 283; continue _fun34316 }
 253:
                    tango = zulu.editInfo;
                    tango['protoToSave'] = report;
                    zulu = zulu.editInfo;
                    mike = mike.offlineEditDataVersion;
                    zulu['offlineEditDataVersion'] = mike;
 283:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
 60:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    mike = {};
    foxtrot = true;
    mike['value'] = foxtrot;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    yankee = mike.UserSettingsTypes;
    var _closure1_slot8 = yankee;
    options = mike.createEmptyEditInfo;
    var _closure1_slot9 = options;
    backup = {};
    mike = 6;
    romeo = oscar[mike];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.PreloadedUserSettings;
    backup['ProtoClass'] = romeo;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    romeo = mike.PreloadedUserSettings;
    mike = romeo.create;
    mike = mike.bind(romeo)();
    backup['proto'] = mike;
    mike = false;
    backup['lazyLoaded'] = mike;
    romeo = options.bind(entity)();
    backup['editInfo'] = romeo;
    var _closure1_slot10 = backup;
    romeo = {};
    kilo = 7;
    sizing = oscar[kilo];
    sizing = report.bind(entity)(sizing);
    sizing = sizing.FrecencyUserSettings;
    romeo['ProtoClass'] = sizing;
    kilo = oscar[kilo];
    kilo = report.bind(entity)(kilo);
    sizing = kilo.FrecencyUserSettings;
    kilo = sizing.create;
    kilo = kilo.bind(sizing)();
    romeo['proto'] = kilo;
    romeo['lazyLoaded'] = foxtrot;
    options = options.bind(entity)();
    romeo['editInfo'] = options;
    var _closure1_slot11 = romeo;
    options = {};
    foxtrot = yankee.PRELOADED_USER_SETTINGS;
    options[foxtrot] = backup;
    yankee = yankee.FRECENCY_AND_FAVORITES_SETTINGS;
    options[yankee] = romeo;
    var _closure1_slot12 = options;
    var _closure1_slot13 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: UserSettingsProtoStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot14;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            zulu = _closure1_slot18;
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(12);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'computeState';
        report['key'] = golf;
        golf = function() { // Original name: value
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 11;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.mapValues;
            mike = _closure1_slot12;
            entity = function(argFoo) {
                _fun34322: for(var _fun34322_ip = 0; ; ) switch(_fun34322_ip) {
 0:
                    mike = argFoo;
                    entity = {};
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    oscar = 9;
                    tango = tango[oscar];
                    report = undefined;
                    verify = golf.bind(report)(tango);
                    options = verify.protoToB64;
                    golf = mike.ProtoClass;
                    tango = mike.proto;
                    tango = options.bind(verify)(golf, tango);
                    entity['proto'] = tango;
                    tango = mike.editInfo;
                    tango = tango.offlineEditDataVersion;
                    options = null;
                    tango = options != tango;
                    if(!tango) { _fun34322_ip = 96; continue _fun34322 }
 80:
                    golf = mike.editInfo;
                    golf = golf.protoToSave;
                    tango = options != golf;
 96:
                    if(!tango) { _fun34322_ip = 170; continue _fun34322 }
 99:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[oscar];
                    oscar = tango.bind(report)(zulu);
                    report = oscar.protoToB64;
                    tango = mike.ProtoClass;
                    zulu = mike.editInfo;
                    zulu = zulu.protoToSave;
                    zulu = report.bind(oscar)(tango, zulu);
                    entity['protoToSave'] = zulu;
                    mike = mike.editInfo;
                    mike = mike.offlineEditDataVersion;
                    entity['offlineEditDataVersion'] = mike;
 170:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'hasLoaded';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot12;
            entity = argFoo;
            entity = mike[entity];
            entity = entity.editInfo;
            entity = entity.loaded;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'settings';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot10;
            entity = entity.proto;
            return entity;
        };
        report['get'] = golf;
        entity[4] = report;
        report = {};
        golf = 'frecencyWithoutFetchingLatest';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot11;
            entity = entity.proto;
            return entity;
        };
        report['get'] = golf;
        entity[5] = report;
        report = {};
        golf = 'wasMostRecentUpdateFromServer';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot13;
            return entity;
        };
        report['get'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getFullState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getGuildFolders';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun34328: for(var _fun34328_ip = 0; ; ) switch(_fun34328_ip) {
 0:
                entity = _closure1_slot10;
                entity = entity.proto;
                mike = entity.guildFolders;
                entity = null;
                zulu = entity == mike;
                tango = undefined;
                if(zulu) { _fun34328_ip = 36; continue _fun34328 }
 30:
                tango = mike.folders;
 36:
                mike = entity == tango;
                entity = null;
                if(mike) { _fun34328_ip = 62; continue _fun34328 }
 45:
                zulu = tango.map;
                mike = function(argFoo) {
                    _fun34329: for(var _fun34329_ip = 0; ; ) switch(_fun34329_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu.id;
                        mike = null;
                        tango = mike == entity;
                        report = undefined;
                        options = undefined;
                        if(tango) { _fun34329_ip = 26; continue _fun34329 }
 21:
                        options = entity.value;
 26:
                        entity = zulu.color;
                        oscar = mike == entity;
                        tango = undefined;
                        if(oscar) { _fun34329_ip = 45; continue _fun34329 }
 40:
                        tango = entity.value;
 45:
                        entity = {};
                        oscar = zulu.guildIds;
                        entity['guildIds'] = oscar;
                        golf = mike == options;
                        oscar = undefined;
                        if(golf) { _fun34329_ip = 80; continue _fun34329 }
 67:
                        golf = global;
                        golf = golf.Number;
                        oscar = golf.bind(report)(options);
 80:
                        entity['folderId'] = oscar;
                        oscar = zulu.name;
                        golf = mike == oscar;
                        zulu = undefined;
                        if(golf) { _fun34329_ip = 104; continue _fun34329 }
 99:
                        zulu = oscar.value;
 104:
                        entity['folderName'] = zulu;
                        zulu = mike == tango;
                        mike = undefined;
                        if(zulu) { _fun34329_ip = 131; continue _fun34329 }
 118:
                        zulu = global;
                        zulu = zulu.Number;
                        mike = zulu.bind(report)(tango);
 131:
                        entity['folderColor'] = mike;
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike);
 62:
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getGuildRecentsDismissedAt';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun34330: for(var _fun34330_ip = 0; ; ) switch(_fun34330_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity != zulu)) { _fun34330_ip = 121; continue _fun34330 }
 9:
                mike = this;
                mike = mike.settings;
                mike = mike.guilds;
                oscar = entity == mike;
                report = undefined;
                tango = undefined;
                if(oscar) { _fun34330_ip = 60; continue _fun34330 }
 35:
                mike = mike.guilds;
                mike = mike[zulu];
                zulu = entity == mike;
                tango = undefined;
                if(zulu) { _fun34330_ip = 60; continue _fun34330 }
 54:
                tango = mike.guildRecentsDismissedAt;
 60:
                mike = entity == tango;
                entity = 0;
                if(mike) { _fun34330_ip = 119; continue _fun34330 }
 69:
                zulu = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 12;
                mike = oscar[mike];
                mike = zulu.bind(report)(mike);
                zulu = mike.Timestamp;
                mike = zulu.toDate;
                zulu = mike.bind(zulu)(tango);
                mike = zulu.getTime;
                entity = mike.bind(zulu)();
 119:
                return entity;
 121:
                entity = 0;
                return entity;
            }
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getDismissedGuildContent';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun34331: for(var _fun34331_ip = 0; ; ) switch(_fun34331_ip) {
 0:
                oscar = argFoo;
                tango = null;
                mike = tango == oscar;
                entity = null;
                if(mike) { _fun34331_ip = 75; continue _fun34331 }
 14:
                mike = this;
                mike = mike.settings;
                zulu = mike.guilds;
                golf = tango == zulu;
                mike = undefined;
                if(golf) { _fun34331_ip = 72; continue _fun34331 }
 38:
                zulu = zulu.guilds;
                golf = tango == zulu;
                mike = undefined;
                if(golf) { _fun34331_ip = 72; continue _fun34331 }
 53:
                zulu = zulu[oscar];
                tango = tango == zulu;
                mike = undefined;
                if(tango) { _fun34331_ip = 72; continue _fun34331 }
 66:
                mike = zulu.dismissedGuildContent;
 72:
                entity = mike;
 75:
                return entity;
            }
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'getGuildsProto';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun34332: for(var _fun34332_ip = 0; ; ) switch(_fun34332_ip) {
 0:
                entity = this;
                entity = entity.settings;
                zulu = entity.guilds;
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun34332_ip = 32; continue _fun34332 }
 26:
                mike = zulu.guilds;
 32:
                zulu = entity != mike;
                entity = null;
                if(!zulu) { _fun34332_ip = 44; continue _fun34332 }
 41:
                entity = mike;
 44:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[11] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'UserSettingsProtoStore';
    options['displayName'] = mike;
    mike = 'UserSettingsProtoStore-Cache';
    options['persistKey'] = mike;
    mike = 14;
    mike = oscar[mike];
    echo = golf.bind(entity)(mike);
    mike = {};
    yankee = function(argFoo) { // Original name: handleCacheLoaded
        entity = argFoo;
        zulu = entity.userSettings;
        mike = _closure1_slot18;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['CACHE_LOADED'] = yankee;
    mike['USER_SETTINGS_PROTO_UPDATE'] = offset;
    mike['USER_SETTINGS_PROTO_ENQUEUE_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleUserSettingsProtoSaveStateUpdate
        entity = argFoo;
        entity = entity.settings;
        mike = entity.type;
        zulu = entity.changes;
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        tango = 8;
        tango = oscar[tango];
        golf = undefined;
        oscar = report.bind(golf)(tango);
        report = true;
        tango = 'this cannot run in the overlay';
        tango = oscar.bind(golf)(report, tango);
        entity = _closure1_slot12;
        mike = entity[mike];
        entity = {};
        options = mike.editInfo;
        verify = entity;
        tango = copyDataProperties(verify, options);
        verify = entity;
        options = zulu;
        zulu = copyDataProperties(verify, options);
        mike['editInfo'] = entity;
        entity = false;
        return entity;
    };
    mike['USER_SETTINGS_PROTO_UPDATE_EDIT_INFO'] = offset;
    offset = function(argFoo) { // Original name: handleConnectionOpen
        _fun34335: for(var _fun34335_ip = 0; ; ) switch(_fun34335_ip) {
 0:
            entity = argFoo;
            zulu = entity.userSettingsProto;
            entity = null;
            if(!(entity != zulu)) { _fun34335_ip = 79; continue _fun34335 }
 15:
            entity = _closure1_slot10;
            entity['proto'] = zulu;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            entity = entity.proto;
            mike = 'string';
            entity = typeof entity;
            mike = mike !== entity;
            entity = 'UserSettingsProto cannot be a string';
            entity = zulu.bind(tango)(mike, entity);
 79:
            tango = _closure1_slot0;
            options = _closure1_slot2;
            entity = 9;
            zulu = options[entity];
            entity = undefined;
            oscar = tango.bind(entity)(zulu);
            report = oscar.runMigrations;
            zulu = _closure1_slot10;
            tango = zulu.proto;
            golf = _closure1_slot1;
            zulu = 10;
            zulu = options[zulu];
            golf = golf.bind(entity)(zulu);
            zulu = _closure1_slot8;
            zulu = zulu.PRELOADED_USER_SETTINGS;
            zulu = golf[zulu];
            zulu = report.bind(oscar)(tango, zulu);
            tango = zulu.proto;
            oscar = zulu.isDirty;
            report = zulu.cleanupFuncs;
            if(!oscar) { _fun34335_ip = 190; continue _fun34335 }
 177:
            golf = _closure1_slot17;
            zulu = _closure1_slot10;
            zulu = golf.bind(entity)(zulu);
 190:
            zulu = _closure1_slot10;
            zulu['proto'] = tango;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            tango = 8;
            tango = options[tango];
            options = golf.bind(entity)(tango);
            tango = zulu.proto;
            golf = 'string';
            tango = typeof tango;
            golf = golf !== tango;
            tango = 'UserSettingsProto cannot be a string';
            tango = options.bind(entity)(golf, tango);
            tango = zulu.editInfo;
            tango['triggeredMigrations'] = oscar;
            tango = zulu.editInfo;
            tango['cleanupFuncs'] = report;
            tango = zulu.editInfo;
            zulu = true;
            tango['loaded'] = zulu;
            zulu = global;
            report = zulu.Object;
            tango = report.values;
            zulu = _closure1_slot12;
            report = tango.bind(report)(zulu);
            tango = report.forEach;
            zulu = function(argFoo) {
                _fun34336: for(var _fun34336_ip = 0; ; ) switch(_fun34336_ip) {
 0:
                    entity = argFoo;
                    mike = entity.lazyLoaded;
                    if(!mike) { _fun34336_ip = 38; continue _fun34336 }
 12:
                    zulu = entity.editInfo;
                    mike = false;
                    zulu['loaded'] = mike;
                    entity = entity.editInfo;
                    entity['loading'] = mike;
 38:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = tango.bind(report)(zulu);
            mike = _closure1_slot16;
            mike = mike.bind(entity)();
            return entity;
        }
    };
    mike['CONNECTION_OPEN'] = offset;
    mike['CONNECTION_CLOSED'] = verify;
    mike['CONNECTION_RESUMED'] = verify;
    verify = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        golf = entity.userSettingsProto;
        mike = _closure1_slot10;
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        entity = 9;
        tango = report[entity];
        entity = undefined;
        oscar = oscar.bind(entity)(tango);
        tango = oscar.b64ToPreloadedUserSettingsProto;
        tango = tango.bind(oscar)(golf);
        mike['proto'] = tango;
        tango = _closure1_slot1;
        zulu = 8;
        zulu = report[zulu];
        tango = tango.bind(entity)(zulu);
        mike = mike.proto;
        zulu = 'string';
        mike = typeof mike;
        zulu = zulu !== mike;
        mike = 'UserSettingsProto cannot be a string';
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['OVERLAY_INITIALIZE'] = verify;
    tango = function() { // Original name: handleLogout
        zulu = _closure1_slot16;
        entity = undefined;
        zulu = zulu.bind(entity)();
        zulu = global;
        tango = zulu.Object;
        zulu = tango.values;
        mike = _closure1_slot12;
        tango = zulu.bind(tango)(mike);
        zulu = tango.forEach;
        mike = function(argFoo) {
            zulu = argFoo;
            mike = zulu.ProtoClass;
            entity = mike.create;
            entity = entity.bind(mike)();
            zulu['proto'] = entity;
            mike = _closure1_slot9;
            entity = undefined;
            mike = mike.bind(entity)();
            zulu['editInfo'] = mike;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['LOGOUT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    update = tango;
    result = mike;
    mike = new update[options](echo, result, output);
    mike = mike instanceof Object ? mike : tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/UserSettingsProtoStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();