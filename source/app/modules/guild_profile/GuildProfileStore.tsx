// app/modules/guild_profile/GuildProfileStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun73000: for(var _fun73000_ip = 0; ; ) switch(_fun73000_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun73000_ip = 51; continue _fun73000 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun73000_ip = 92; continue _fun73000;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun73000_ip = 71; continue _fun73000 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun73001: for(var _fun73001_ip = 0; ; ) switch(_fun73001_ip) {
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
            _fun73001_ip = 76; continue _fun73001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    mike = global;
    verify = mike.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(golf);
    var _closure1_slot0 = golf;
    golf = 1;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot1 = golf;
    golf = 2;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 3;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 4;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot4 = golf;
    mike = mike.Map;
    golf = mike.prototype;
    golf = Object.create(golf, {constructor: {value: mike}});
    foxtrot = golf;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot5 = mike;
    mike = {'profile': null, 'lastSyncTimestamp': null, 'isFetching': false, 'isUpdating': false, 'error': null, 'errorCode': null};
    var _closure1_slot6 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildProfileStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'getProfile';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun73006: for(var _fun73006_ip = 0; ; ) switch(_fun73006_ip) {
 0:
                report = argFoo;
                mike = null;
                zulu = mike == report;
                entity = null;
                if(zulu) { _fun73006_ip = 61; continue _fun73006 }
 14:
                tango = _closure1_slot5;
                zulu = tango.get;
                tango = zulu.bind(tango)(report);
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun73006_ip = 46; continue _fun73006 }
 40:
                zulu = tango.profile;
 46:
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun73006_ip = 58; continue _fun73006 }
 55:
                mike = zulu;
 58:
                entity = mike;
 61:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'getIsFetching';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun73007: for(var _fun73007_ip = 0; ; ) switch(_fun73007_ip) {
 0:
                report = argFoo;
                mike = null;
                entity = mike != report;
                if(!entity) { _fun73007_ip = 57; continue _fun73007 }
 12:
                tango = _closure1_slot5;
                zulu = tango.get;
                tango = zulu.bind(tango)(report);
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun73007_ip = 44; continue _fun73007 }
 38:
                zulu = tango.isFetching;
 44:
                mike = mike != zulu;
                if(!mike) { _fun73007_ip = 54; continue _fun73007 }
 51:
                mike = zulu;
 54:
                entity = mike;
 57:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getLastSyncTimestamp';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun73008: for(var _fun73008_ip = 0; ; ) switch(_fun73008_ip) {
 0:
                report = argFoo;
                mike = null;
                zulu = mike == report;
                entity = null;
                if(zulu) { _fun73008_ip = 61; continue _fun73008 }
 14:
                tango = _closure1_slot5;
                zulu = tango.get;
                tango = zulu.bind(tango)(report);
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun73008_ip = 46; continue _fun73008 }
 40:
                zulu = tango.lastSyncTimestamp;
 46:
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun73008_ip = 58; continue _fun73008 }
 55:
                mike = zulu;
 58:
                entity = mike;
 61:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getIsUpdating';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun73009: for(var _fun73009_ip = 0; ; ) switch(_fun73009_ip) {
 0:
                report = argFoo;
                mike = null;
                entity = mike != report;
                if(!entity) { _fun73009_ip = 57; continue _fun73009 }
 12:
                tango = _closure1_slot5;
                zulu = tango.get;
                tango = zulu.bind(tango)(report);
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun73009_ip = 44; continue _fun73009 }
 38:
                zulu = tango.isUpdating;
 44:
                mike = mike != zulu;
                if(!mike) { _fun73009_ip = 54; continue _fun73009 }
 51:
                mike = zulu;
 54:
                entity = mike;
 57:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getErrorCode';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun73010: for(var _fun73010_ip = 0; ; ) switch(_fun73010_ip) {
 0:
                report = argFoo;
                mike = null;
                zulu = mike == report;
                entity = null;
                if(zulu) { _fun73010_ip = 61; continue _fun73010 }
 14:
                tango = _closure1_slot5;
                zulu = tango.get;
                tango = zulu.bind(tango)(report);
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun73010_ip = 46; continue _fun73010 }
 40:
                zulu = tango.errorCode;
 46:
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun73010_ip = 58; continue _fun73010 }
 55:
                mike = zulu;
 58:
                entity = mike;
 61:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'GuildProfileStore';
    golf['displayName'] = mike;
    mike = 6;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    options = function(argFoo) { // Original name: handleFetchStart
        _fun73011: for(var _fun73011_ip = 0; ; ) switch(_fun73011_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            mike = _closure1_slot5;
            entity = mike.get;
            oscar = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != oscar)) { _fun73011_ip = 71; continue _fun73011 }
 31:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            verify = entity;
            options = oscar;
            oscar = copyDataProperties(verify, options);
            golf = true;
            oscar = 'isFetching';
            entity[oscar] = golf;
            entity = mike.bind(zulu)(tango, entity);
            _fun73011_ip = 110; continue _fun73011;
 71:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            options = _closure1_slot6;
            verify = entity;
            report = copyDataProperties(verify, options);
            oscar = true;
            report = 'isFetching';
            entity[report] = oscar;
            entity = mike.bind(zulu)(tango, entity);
 110:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_PROFILE_FETCH'] = options;
    options = function(argFoo) { // Original name: handleFetchSuccess
        _fun73012: for(var _fun73012_ip = 0; ; ) switch(_fun73012_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            oscar = entity.profile;
            mike = _closure1_slot5;
            entity = mike.get;
            golf = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != golf)) { _fun73012_ip = 112; continue _fun73012 }
 37:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            offset = entity;
            verify = golf;
            golf = copyDataProperties(offset, verify);
            golf = 'profile';
            entity[golf] = oscar;
            golf = global;
            options = golf.Date;
            golf = options.now;
            options = golf.bind(options)();
            golf = 'lastSyncTimestamp';
            entity[golf] = options;
            options = false;
            golf = 'isFetching';
            entity[golf] = options;
            entity = mike.bind(zulu)(tango, entity);
            _fun73012_ip = 175; continue _fun73012;
 112:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            verify = _closure1_slot6;
            offset = entity;
            report = copyDataProperties(offset, verify);
            report = 'profile';
            entity[report] = oscar;
            report = global;
            oscar = report.Date;
            report = oscar.now;
            oscar = report.bind(oscar)();
            report = 'lastSyncTimestamp';
            entity[report] = oscar;
            entity = mike.bind(zulu)(tango, entity);
 175:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_PROFILE_FETCH_SUCCESS'] = options;
    options = function(argFoo) { // Original name: handleFetchFailure
        _fun73013: for(var _fun73013_ip = 0; ; ) switch(_fun73013_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            golf = entity.error;
            oscar = entity.errorCode;
            mike = _closure1_slot5;
            entity = mike.get;
            options = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != options)) { _fun73013_ip = 100; continue _fun73013 }
 42:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            yankee = entity;
            offset = options;
            options = copyDataProperties(yankee, offset);
            options = 'error';
            entity[options] = golf;
            options = 'errorCode';
            entity[options] = oscar;
            verify = false;
            options = 'isFetching';
            entity[options] = verify;
            entity = mike.bind(zulu)(tango, entity);
            _fun73013_ip = 146; continue _fun73013;
 100:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            offset = _closure1_slot6;
            yankee = entity;
            report = copyDataProperties(yankee, offset);
            report = 'error';
            entity[report] = golf;
            report = 'errorCode';
            entity[report] = oscar;
            entity = mike.bind(zulu)(tango, entity);
 146:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_PROFILE_FETCH_FAILURE'] = options;
    options = function(argFoo) { // Original name: handleUpdateStart
        _fun73014: for(var _fun73014_ip = 0; ; ) switch(_fun73014_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            mike = _closure1_slot5;
            entity = mike.get;
            oscar = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != oscar)) { _fun73014_ip = 71; continue _fun73014 }
 31:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            verify = entity;
            options = oscar;
            oscar = copyDataProperties(verify, options);
            golf = true;
            oscar = 'isUpdating';
            entity[oscar] = golf;
            entity = mike.bind(zulu)(tango, entity);
            _fun73014_ip = 110; continue _fun73014;
 71:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            options = _closure1_slot6;
            verify = entity;
            report = copyDataProperties(verify, options);
            oscar = true;
            report = 'isUpdating';
            entity[report] = oscar;
            entity = mike.bind(zulu)(tango, entity);
 110:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_PROFILE_UPDATE'] = options;
    options = function(argFoo) { // Original name: handleUpdateSuccess
        _fun73015: for(var _fun73015_ip = 0; ; ) switch(_fun73015_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            oscar = entity.profile;
            mike = _closure1_slot5;
            entity = mike.get;
            golf = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != golf)) { _fun73015_ip = 86; continue _fun73015 }
 37:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            offset = entity;
            verify = golf;
            golf = copyDataProperties(offset, verify);
            golf = 'profile';
            entity[golf] = oscar;
            options = false;
            golf = 'isUpdating';
            entity[golf] = options;
            entity = mike.bind(zulu)(tango, entity);
            _fun73015_ip = 123; continue _fun73015;
 86:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            verify = _closure1_slot6;
            offset = entity;
            report = copyDataProperties(offset, verify);
            report = 'profile';
            entity[report] = oscar;
            entity = mike.bind(zulu)(tango, entity);
 123:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_PROFILE_UPDATE_SUCCESS'] = options;
    options = function(argFoo) { // Original name: handleUpdateFailure
        _fun73016: for(var _fun73016_ip = 0; ; ) switch(_fun73016_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            golf = entity.error;
            oscar = entity.errorCode;
            mike = _closure1_slot5;
            entity = mike.get;
            options = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != options)) { _fun73016_ip = 100; continue _fun73016 }
 42:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            yankee = entity;
            offset = options;
            options = copyDataProperties(yankee, offset);
            options = 'error';
            entity[options] = golf;
            options = 'errorCode';
            entity[options] = oscar;
            verify = false;
            options = 'isUpdating';
            entity[options] = verify;
            entity = mike.bind(zulu)(tango, entity);
            _fun73016_ip = 146; continue _fun73016;
 100:
            zulu = _closure1_slot5;
            mike = zulu.set;
            entity = {};
            offset = _closure1_slot6;
            yankee = entity;
            report = copyDataProperties(yankee, offset);
            report = 'error';
            entity[report] = golf;
            report = 'errorCode';
            entity[report] = oscar;
            entity = mike.bind(zulu)(tango, entity);
 146:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_PROFILE_UPDATE_FAILURE'] = options;
    tango = function(argFoo) { // Original name: handleMemberVerificationFormFetch
        _fun73017: for(var _fun73017_ip = 0; ; ) switch(_fun73017_ip) {
 0:
            entity = argFoo;
            zulu = entity.form;
            report = entity.guildId;
            mike = null;
            tango = mike == zulu;
            entity = undefined;
            golf = undefined;
            if(tango) { _fun73017_ip = 33; continue _fun73017 }
 27:
            golf = zulu.profile;
 33:
            if(!(mike != golf)) { _fun73017_ip = 199; continue _fun73017 }
 40:
            tango = _closure1_slot5;
            zulu = tango.get;
            options = zulu.bind(tango)(report);
            if(!(mike != options)) { _fun73017_ip = 136; continue _fun73017 }
 61:
            tango = _closure1_slot5;
            zulu = tango.set;
            mike = {};
            yankee = mike;
            offset = options;
            options = copyDataProperties(yankee, offset);
            options = 'profile';
            mike[options] = golf;
            options = global;
            verify = options.Date;
            options = verify.now;
            verify = options.bind(verify)();
            options = 'lastSyncTimestamp';
            mike[options] = verify;
            verify = false;
            options = 'isFetching';
            mike[options] = verify;
            mike = zulu.bind(tango)(report, mike);
            _fun73017_ip = 199; continue _fun73017;
 136:
            tango = _closure1_slot5;
            zulu = tango.set;
            mike = {};
            offset = _closure1_slot6;
            yankee = mike;
            oscar = copyDataProperties(yankee, offset);
            oscar = 'profile';
            mike[oscar] = golf;
            oscar = global;
            golf = oscar.Date;
            oscar = golf.now;
            golf = oscar.bind(golf)();
            oscar = 'lastSyncTimestamp';
            mike[oscar] = golf;
            mike = zulu.bind(tango)(report, mike);
 199:
            return entity;
        }
    };
    mike['MEMBER_VERIFICATION_FORM_UPDATE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[golf](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_profile/GuildProfileStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();