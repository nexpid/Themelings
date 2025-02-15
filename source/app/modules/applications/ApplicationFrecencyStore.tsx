// app/modules/applications/ApplicationFrecencyStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun71149: for(var _fun71149_ip = 0; ; ) switch(_fun71149_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun71149_ip = 51; continue _fun71149 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun71149_ip = 92; continue _fun71149;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun71149_ip = 71; continue _fun71149 }
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
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun71150: for(var _fun71150_ip = 0; ; ) switch(_fun71150_ip) {
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
 72: // try_end0
            _fun71150_ip = 76; continue _fun71150;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: trackApplicationUsage
        tango = argFoo;
        mike = _closure1_slot11;
        report = mike.pendingUsages;
        zulu = report.push;
        mike = {};
        mike['key'] = tango;
        oscar = global;
        golf = oscar.Date;
        oscar = golf.now;
        oscar = oscar.bind(golf)();
        mike['timestamp'] = oscar;
        mike = zulu.bind(report)(mike);
        zulu = _closure1_slot12;
        mike = zulu.track;
        mike = mike.bind(zulu)(tango);
        mike = _closure1_slot12;
        entity = mike.compute;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: handleUserSettingsProtoStoreChange
        _fun71154: for(var _fun71154_ip = 0; ; ) switch(_fun71154_ip) {
 0:
            entity = _closure1_slot8;
            entity = entity.frecencyWithoutFetchingLatest;
            tango = entity.applicationFrecency;
            zulu = null;
            report = zulu == tango;
            entity = undefined;
            options = undefined;
            if(report) { _fun71154_ip = 38; continue _fun71154 }
 32:
            options = tango.applications;
 38:
            if(!(zulu == options)) { _fun71154_ip = 44; continue _fun71154 }
 42:
            options = {};
 44:
            report = _closure1_slot12;
            tango = report.overwriteHistory;
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 11;
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
            mike = _closure1_slot11;
            mike = mike.pendingUsages;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.FREQUENCY_ITEM_LIMIT;
    mike = 8;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.UserSettingsTypes;
    var _closure1_slot9 = mike;
    verify = 9;
    mike = oscar[verify];
    mike = report.bind(entity)(mike);
    mike = mike.ApplicationCommandType;
    offset = mike.CHAT;
    mike = new Array(2);
    mike[0] = offset;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.ApplicationCommandType;
    verify = verify.PRIMARY_ENTRY_POINT;
    mike[1] = verify;
    var _closure1_slot10 = mike;
    mike = {};
    verify = new Array(0);
    mike['pendingUsages'] = verify;
    var _closure1_slot11 = mike;
    mike = 10;
    mike = oscar[mike];
    verify = golf.bind(entity)(mike);
    mike = {};
    offset = function() { // Original name: computeBonus
        entity = 100;
        return entity;
    };
    mike['computeBonus'] = offset;
    offset = function(argFoo) { // Original name: computeWeight
        _fun71158: for(var _fun71158_ip = 0; ; ) switch(_fun71158_ip) {
 0:
            oscar = argFoo;
            entity = 3;
            mike = oscar <= entity;
            entity = 100;
            if(mike) { _fun71158_ip = 80; continue _fun71158 }
 16:
            mike = 15;
            zulu = oscar <= mike;
            mike = 70;
            if(zulu) { _fun71158_ip = 77; continue _fun71158 }
 29:
            tango = 30;
            report = oscar <= tango;
            zulu = 50;
            if(report) { _fun71158_ip = 74; continue _fun71158 }
 42:
            report = 45;
            report = oscar <= report;
            if(report) { _fun71158_ip = 71; continue _fun71158 }
 52:
            report = 80;
            oscar = oscar <= report;
            report = 1;
            if(!oscar) { _fun71158_ip = 68; continue _fun71158 }
 65:
            report = 10;
 68:
            tango = report;
 71:
            zulu = tango;
 74:
            mike = zulu;
 77:
            entity = mike;
 80:
            return entity;
        }
    };
    mike['computeWeight'] = offset;
    offset = function(argFoo) { // Original name: lookupKey
        entity = argFoo;
        return entity;
    };
    mike['lookupKey'] = offset;
    offset = function() { // Original name: afterCompute
        entity = undefined;
        return entity;
    };
    mike['afterCompute'] = offset;
    mike['numFrequentlyItems'] = options;
    options = verify.prototype;
    options = Object.create(options, {constructor: {value: verify}});
    backup = options;
    foxtrot = mike;
    mike = new backup[verify](foxtrot, romeo);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot12 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: ApplicationFrecencyStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot13;
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
            _fun71163: for(var _fun71163_ip = 0; ; ) switch(_fun71163_ip) {
 0:
                mike = argFoo;
                tango = this;
                entity = null;
                if(!(entity != mike)) { _fun71163_ip = 19; continue _fun71163 }
 12:
                _closure1_slot11 = mike;
 19:
                zulu = tango.waitFor;
                mike = _closure1_slot7;
                mike = zulu.bind(tango)(mike);
                zulu = tango.syncWith;
                report = _closure1_slot8;
                mike = new Array(1);
                mike[0] = report;
                entity = _closure1_slot16;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'hasPendingUsage';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot11;
            entity = entity.pendingUsages;
            mike = entity.length;
            entity = 0;
            entity = mike > entity;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getApplicationFrecencyWithoutLoadingLatest';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getScoreWithoutLoadingLatest';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun71167: for(var _fun71167_ip = 0; ; ) switch(_fun71167_ip) {
 0:
                zulu = _closure1_slot12;
                mike = zulu.getScore;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity != mike;
                entity = 0;
                if(!zulu) { _fun71167_ip = 35; continue _fun71167 }
 32:
                entity = mike;
 35:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getTopApplicationsWithoutLoadingLatest';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot12;
            entity = entity.frequently;
            return entity;
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ApplicationFrecencyStore';
    options['displayName'] = mike;
    mike = 'ApplicationFrecency';
    options['persistKey'] = mike;
    mike = 13;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleApplicationCommandUsed
        _fun71169: for(var _fun71169_ip = 0; ; ) switch(_fun71169_ip) {
 0:
            entity = argFoo;
            zulu = entity.command;
            report = _closure1_slot10;
            mike = report.includes;
            entity = zulu.type;
            entity = mike.bind(report)(entity);
            mike = !entity;
            entity = !mike;
            if(mike) { _fun71169_ip = 102; continue _fun71169 }
 40:
            oscar = _closure1_slot7;
            report = oscar.getLaunchState;
            mike = zulu.applicationId;
            report = report.bind(oscar)(mike);
            mike = null;
            mike = mike == report;
            if(mike) { _fun71169_ip = 78; continue _fun71169 }
 69:
            report = report.isLaunching;
            mike = !report;
 78:
            if(!mike) { _fun71169_ip = 99; continue _fun71169 }
 81:
            report = _closure1_slot15;
            tango = zulu.applicationId;
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            mike = undefined;
 99:
            entity = mike;
 102:
            return entity;
        }
    };
    mike['APPLICATION_COMMAND_USED'] = verify;
    verify = function(argFoo) { // Original name: handleEmbeddedActivityOpen
        entity = argFoo;
        zulu = entity.applicationId;
        mike = _closure1_slot15;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['EMBEDDED_ACTIVITY_OPEN'] = verify;
    tango = function(argFoo) { // Original name: handleUserSettingsProtoUpdate
        _fun71171: for(var _fun71171_ip = 0; ; ) switch(_fun71171_ip) {
 0:
            entity = argFoo;
            mike = entity.settings;
            tango = mike.type;
            mike = entity.wasSaved;
            zulu = _closure1_slot9;
            zulu = zulu.FRECENCY_AND_FAVORITES_SETTINGS;
            if(!(tango === zulu)) { _fun71171_ip = 58; continue _fun71171 }
 37:
            if(!mike) { _fun71171_ip = 58; continue _fun71171 }
 40:
            mike = _closure1_slot11;
            entity = new Array(0);
            mike['pendingUsages'] = entity;
            entity = undefined;
            return entity;
 58:
            entity = false;
            return entity;
        }
    };
    mike['USER_SETTINGS_PROTO_UPDATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/applications/ApplicationFrecencyStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();