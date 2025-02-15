// app/modules/stickers/StickersPersistedStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
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
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
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
    entity = function() { // Original name: handleUserSettingsProtoStoreChange
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot7;
            entity = entity.frecencyWithoutFetchingLatest;
            tango = entity.stickerFrecency;
            zulu = null;
            report = zulu == tango;
            entity = undefined;
            options = undefined;
            if(report) { _fun00006_ip = 38; continue _fun00005 }
 32:
            options = tango.stickers;
 38:
            if(!(zulu != options)) { _fun00006_ip = 109; continue _fun00005 }
 42:
            report = _closure1_slot11;
            tango = report.overwriteHistory;
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 10;
            zulu = golf[zulu];
            golf = oscar.bind(entity)(zulu);
            oscar = golf.mapValues;
            zulu = function(argFoo) {
                mike = argFoo;
                entity = {};
                oscar = entity;
                report = mike;
                zulu = copyDataProperties(oscar, report);
                tango = mike.recentUses;
                zulu = tango.map;
                mike = global;
                mike = mike.Number;
                tango = zulu.bind(tango)(mike);
                zulu = tango.filter;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = 0;
                    entity = mike > entity;
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = 'recentUses';
                entity[mike] = zulu;
                return entity;
            };
            zulu = oscar.bind(golf)(options, zulu);
            mike = _closure1_slot10;
            mike = mike.pendingUsages;
            mike = tango.bind(report)(zulu, mike);
            return entity;
 109:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    tango = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 6;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 7;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.UserSettingsTypes;
    var _closure1_slot9 = mike;
    mike = {};
    tango = new Array(0);
    mike['pendingUsages'] = tango;
    var _closure1_slot10 = mike;
    mike = 8;
    mike = golf[mike];
    mike = options.bind(entity)(mike);
    mike = mike.Millis;
    mike = mike.DAY;
    tango = 9;
    tango = golf[tango];
    offset = options.bind(entity)(tango);
    tango = {};
    verify = function() { // Original name: computeBonus
        entity = 100;
        return entity;
    };
    tango['computeBonus'] = verify;
    verify = function(argFoo) { // Original name: computeWeight
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            entity = 3;
            mike = zulu <= entity;
            entity = 100;
            if(mike) { _fun00008_ip = 71; continue _fun00007 }
 16:
            mike = 15;
            mike = zulu <= mike;
            entity = 70;
            if(mike) { _fun00008_ip = 71; continue _fun00007 }
 29:
            tango = 30;
            mike = zulu <= tango;
            entity = 50;
            if(mike) { _fun00008_ip = 71; continue _fun00007 }
 42:
            mike = 45;
            mike = zulu <= mike;
            entity = tango;
            if(mike) { _fun00008_ip = 71; continue _fun00007 }
 55:
            mike = 80;
            mike = zulu <= mike;
            entity = 1;
            if(!mike) { _fun00008_ip = 71; continue _fun00007 }
 68:
            entity = 10;
 71:
            return entity;
        }
    };
    tango['computeWeight'] = verify;
    verify = function(argFoo) { // Original name: lookupKey
        zulu = _closure1_slot8;
        mike = zulu.getStickerById;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['lookupKey'] = verify;
    verify = function() { // Original name: afterCompute
        entity = undefined;
        return entity;
    };
    tango['afterCompute'] = verify;
    verify = 20;
    tango['numFrequentlyItems'] = verify;
    verify = offset.prototype;
    verify = Object.create(verify, {constructor: {value: offset}});
    backup = verify;
    foxtrot = tango;
    tango = new backup[offset](foxtrot, romeo);
    tango = tango instanceof Object ? tango : verify;
    var _closure1_slot11 = tango;
    tango = function() { // Original name: recomputeStickerFrecency
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = _closure1_slot8;
            mike = mike.isLoaded;
            if(!mike) { _fun00010_ip = 30; continue _fun00009 }
 16:
            mike = _closure1_slot11;
            entity = mike.compute;
            entity = entity.bind(mike)();
 30:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot12 = tango;
    tango = function() { // Original name: handleStickersStoreUpdate
        mike = _closure1_slot12;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    var _closure1_slot13 = tango;
    tango = 11;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    verify = tango.PersistedStore;
    tango = function(argFoo) {
        tango = function() { // Original name: StickersPersistedStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot14;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = argFoo;
                tango = this;
                report = tango.waitFor;
                zulu = _closure1_slot8;
                zulu = report.bind(tango)(zulu);
                zulu = null;
                if(!(zulu != mike)) { _fun00012_ip = 34; continue _fun00011 }
 30:
                _closure1_slot10 = mike;
 34:
                report = tango.syncWith;
                mike = _closure1_slot8;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = _closure1_slot13;
                mike = report.bind(tango)(zulu, mike);
                zulu = tango.syncWith;
                report = _closure1_slot7;
                mike = new Array(1);
                mike[0] = report;
                entity = _closure1_slot16;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'hasPendingUsage';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot10;
            entity = entity.pendingUsages;
            mike = entity.length;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'stickerFrecencyWithoutFetchingLatest';
        report['key'] = golf;
        oscar = function() { // Original name: get
            entity = _closure1_slot11;
            return entity;
        };
        report['get'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = tango.bind(entity)(verify);
    tango = 'StickersPersistedStore';
    verify['displayName'] = tango;
    tango = 'StickersPersistedStoreV2';
    verify['persistKey'] = tango;
    tango = 12;
    tango = golf[tango];
    foxtrot = options.bind(entity)(tango);
    tango = {};
    offset = function(argFoo) { // Original name: STICKER_TRACK_USAGE
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zulu = entity.stickerIds;
            entity = null;
            if(!(entity != zulu)) { _fun00014_ip = 32; continue _fun00013 }
 15:
            mike = zulu.forEach;
            entity = function(argFoo) {
                tango = argFoo;
                zulu = _closure1_slot11;
                mike = zulu.track;
                mike = mike.bind(zulu)(tango);
                entity = _closure1_slot10;
                zulu = entity.pendingUsages;
                mike = zulu.push;
                entity = {};
                entity['key'] = tango;
                tango = global;
                report = tango.Date;
                tango = report.now;
                tango = tango.bind(report)();
                entity['timestamp'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 32:
            mike = _closure1_slot12;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        }
    };
    tango['STICKER_TRACK_USAGE'] = offset;
    report = function(argFoo) { // Original name: handleUserSettingsProtoUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            mike = entity.settings;
            tango = mike.type;
            mike = entity.wasSaved;
            zulu = _closure1_slot9;
            zulu = zulu.FRECENCY_AND_FAVORITES_SETTINGS;
            if(!(tango === zulu)) { _fun00016_ip = 58; continue _fun00015 }
 37:
            if(!mike) { _fun00016_ip = 58; continue _fun00015 }
 40:
            mike = _closure1_slot10;
            entity = new Array(0);
            mike['pendingUsages'] = entity;
            entity = undefined;
            return entity;
 58:
            entity = false;
            return entity;
        }
    };
    tango['USER_SETTINGS_PROTO_UPDATE'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    backup = report;
    romeo = tango;
    tango = new backup[verify](foxtrot, romeo, yankee);
    tango = tango instanceof Object ? tango : report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/stickers/StickersPersistedStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['STICKER_PACK_NEW_TIMESTAMP_THRESHOLD'] = mike;
    return entity;
})();