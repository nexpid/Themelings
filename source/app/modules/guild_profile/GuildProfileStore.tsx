// app/modules/guild_profile/GuildProfileStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
            entity = _closure1_slot10;
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
    var _closure1_slot9 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    mike = global;
    offset = mike.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    mike = mike.Map;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    backup = options;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot7 = mike;
    mike = {'profile': null, 'lastSyncTimestamp': null, 'isFetching': false, 'isUpdating': false, 'error': null};
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildProfileStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot9;
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
        entity = 'getProfile';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                mike = null;
                zulu = mike == report;
                entity = null;
                if(zulu) { _fun00006_ip = 61; continue _fun00005 }
 14:
                tango = _closure1_slot7;
                zulu = tango.get;
                tango = zulu.bind(tango)(report);
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun00006_ip = 46; continue _fun00005 }
 40:
                zulu = tango.profile;
 46:
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun00006_ip = 58; continue _fun00005 }
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
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = argFoo;
                mike = null;
                entity = mike != report;
                if(!entity) { _fun00008_ip = 57; continue _fun00007 }
 12:
                tango = _closure1_slot7;
                zulu = tango.get;
                tango = zulu.bind(tango)(report);
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun00008_ip = 44; continue _fun00007 }
 38:
                zulu = tango.isFetching;
 44:
                mike = mike != zulu;
                if(!mike) { _fun00008_ip = 54; continue _fun00007 }
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
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                mike = null;
                zulu = mike == report;
                entity = null;
                if(zulu) { _fun00010_ip = 61; continue _fun00009 }
 14:
                tango = _closure1_slot7;
                zulu = tango.get;
                tango = zulu.bind(tango)(report);
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun00010_ip = 46; continue _fun00009 }
 40:
                zulu = tango.lastSyncTimestamp;
 46:
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun00010_ip = 58; continue _fun00009 }
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
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                mike = null;
                entity = mike != report;
                if(!entity) { _fun00012_ip = 57; continue _fun00011 }
 12:
                tango = _closure1_slot7;
                zulu = tango.get;
                tango = zulu.bind(tango)(report);
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun00012_ip = 44; continue _fun00011 }
 38:
                zulu = tango.isUpdating;
 44:
                mike = mike != zulu;
                if(!mike) { _fun00012_ip = 54; continue _fun00011 }
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
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                mike = null;
                zulu = mike == report;
                entity = null;
                if(zulu) { _fun00014_ip = 74; continue _fun00013 }
 14:
                tango = _closure1_slot7;
                zulu = tango.get;
                tango = zulu.bind(tango)(report);
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun00014_ip = 59; continue _fun00013 }
 40:
                tango = tango.error;
                report = mike == tango;
                zulu = undefined;
                if(report) { _fun00014_ip = 59; continue _fun00013 }
 54:
                zulu = tango.code;
 59:
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun00014_ip = 71; continue _fun00013 }
 68:
                mike = zulu;
 71:
                entity = mike;
 74:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'GuildProfileStore';
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleFetchStart
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            mike = _closure1_slot7;
            entity = mike.get;
            oscar = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != oscar)) { _fun00016_ip = 71; continue _fun00015 }
 31:
            zulu = _closure1_slot7;
            mike = zulu.set;
            entity = {};
            verify = entity;
            options = oscar;
            oscar = copyDataProperties(verify, options);
            golf = true;
            oscar = 'isFetching';
            entity[oscar] = golf;
            entity = mike.bind(zulu)(tango, entity);
            _fun00016_ip = 110; continue _fun00015;
 71:
            zulu = _closure1_slot7;
            mike = zulu.set;
            entity = {};
            options = _closure1_slot8;
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
    mike['GUILD_PROFILE_FETCH'] = verify;
    verify = function(argFoo) { // Original name: handleFetchSuccess
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            oscar = entity.profile;
            mike = _closure1_slot7;
            entity = mike.get;
            golf = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != golf)) { _fun00018_ip = 112; continue _fun00017 }
 37:
            zulu = _closure1_slot7;
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
            _fun00018_ip = 175; continue _fun00017;
 112:
            zulu = _closure1_slot7;
            mike = zulu.set;
            entity = {};
            verify = _closure1_slot8;
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
    mike['GUILD_PROFILE_FETCH_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleFetchFailure
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            oscar = entity.error;
            mike = _closure1_slot7;
            entity = mike.get;
            golf = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != golf)) { _fun00020_ip = 85; continue _fun00019 }
 36:
            zulu = _closure1_slot7;
            mike = zulu.set;
            entity = {};
            offset = entity;
            verify = golf;
            golf = copyDataProperties(offset, verify);
            golf = 'error';
            entity[golf] = oscar;
            options = false;
            golf = 'isFetching';
            entity[golf] = options;
            entity = mike.bind(zulu)(tango, entity);
            _fun00020_ip = 122; continue _fun00019;
 85:
            zulu = _closure1_slot7;
            mike = zulu.set;
            entity = {};
            verify = _closure1_slot8;
            offset = entity;
            report = copyDataProperties(offset, verify);
            report = 'error';
            entity[report] = oscar;
            entity = mike.bind(zulu)(tango, entity);
 122:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_PROFILE_FETCH_FAILURE'] = verify;
    verify = function(argFoo) { // Original name: handleUpdateStart
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            mike = _closure1_slot7;
            entity = mike.get;
            oscar = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != oscar)) { _fun00022_ip = 71; continue _fun00021 }
 31:
            zulu = _closure1_slot7;
            mike = zulu.set;
            entity = {};
            verify = entity;
            options = oscar;
            oscar = copyDataProperties(verify, options);
            golf = true;
            oscar = 'isUpdating';
            entity[oscar] = golf;
            entity = mike.bind(zulu)(tango, entity);
            _fun00022_ip = 110; continue _fun00021;
 71:
            zulu = _closure1_slot7;
            mike = zulu.set;
            entity = {};
            options = _closure1_slot8;
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
    mike['GUILD_PROFILE_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleUpdateSuccess
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            oscar = entity.profile;
            mike = _closure1_slot7;
            entity = mike.get;
            golf = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != golf)) { _fun00024_ip = 86; continue _fun00023 }
 37:
            zulu = _closure1_slot7;
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
            _fun00024_ip = 123; continue _fun00023;
 86:
            zulu = _closure1_slot7;
            mike = zulu.set;
            entity = {};
            verify = _closure1_slot8;
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
    mike['GUILD_PROFILE_UPDATE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleUpdateFailure
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            oscar = entity.error;
            mike = _closure1_slot7;
            entity = mike.get;
            golf = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != golf)) { _fun00026_ip = 85; continue _fun00025 }
 36:
            zulu = _closure1_slot7;
            mike = zulu.set;
            entity = {};
            offset = entity;
            verify = golf;
            golf = copyDataProperties(offset, verify);
            golf = 'error';
            entity[golf] = oscar;
            options = false;
            golf = 'isUpdating';
            entity[golf] = options;
            entity = mike.bind(zulu)(tango, entity);
            _fun00026_ip = 122; continue _fun00025;
 85:
            zulu = _closure1_slot7;
            mike = zulu.set;
            entity = {};
            verify = _closure1_slot8;
            offset = entity;
            report = copyDataProperties(offset, verify);
            report = 'error';
            entity[report] = oscar;
            entity = mike.bind(zulu)(tango, entity);
 122:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_PROFILE_UPDATE_FAILURE'] = verify;
    verify = function(argFoo) { // Original name: handleMemberVerificationFormFetch
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            zulu = entity.form;
            report = entity.guildId;
            mike = null;
            tango = mike == zulu;
            entity = undefined;
            golf = undefined;
            if(tango) { _fun00028_ip = 33; continue _fun00027 }
 27:
            golf = zulu.profile;
 33:
            if(!(mike != golf)) { _fun00028_ip = 199; continue _fun00027 }
 40:
            tango = _closure1_slot7;
            zulu = tango.get;
            options = zulu.bind(tango)(report);
            if(!(mike != options)) { _fun00028_ip = 136; continue _fun00027 }
 61:
            tango = _closure1_slot7;
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
            _fun00028_ip = 199; continue _fun00027;
 136:
            tango = _closure1_slot7;
            zulu = tango.set;
            mike = {};
            offset = _closure1_slot8;
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
    mike['MEMBER_VERIFICATION_FORM_UPDATE'] = verify;
    tango = function(argFoo) { // Original name: handleInviteResolve
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            entity = entity.invite;
            entity = entity.profile;
            mike = null;
            if(!(mike != entity)) { _fun00030_ip = 231; continue _fun00029 }
 24:
            oscar = _closure1_slot7;
            tango = oscar.get;
            zulu = entity.id;
            options = tango.bind(oscar)(zulu);
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 5;
            tango = tango[zulu];
            zulu = undefined;
            tango = oscar.bind(zulu)(tango);
            zulu = tango.buildGuildProfileFromServer;
            oscar = zulu.bind(tango)(entity);
            if(!(mike != options)) { _fun00030_ip = 163; continue _fun00029 }
 83:
            golf = _closure1_slot7;
            tango = golf.set;
            zulu = entity.id;
            mike = {};
            yankee = mike;
            offset = options;
            options = copyDataProperties(yankee, offset);
            options = 'profile';
            mike[options] = oscar;
            options = global;
            verify = options.Date;
            options = verify.now;
            verify = options.bind(verify)();
            options = 'lastSyncTimestamp';
            mike[options] = verify;
            verify = false;
            options = 'isFetching';
            mike[options] = verify;
            mike = tango.bind(golf)(zulu, mike);
            _fun00030_ip = 231; continue _fun00029;
 163:
            tango = _closure1_slot7;
            zulu = tango.set;
            mike = entity.id;
            entity = {};
            offset = _closure1_slot8;
            yankee = entity;
            report = copyDataProperties(yankee, offset);
            report = 'profile';
            entity[report] = oscar;
            report = global;
            oscar = report.Date;
            report = oscar.now;
            oscar = report.bind(oscar)();
            report = 'lastSyncTimestamp';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
 231:
            entity = undefined;
            return entity;
        }
    };
    mike['INVITE_RESOLVE_SUCCESS'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_profile/GuildProfileStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();