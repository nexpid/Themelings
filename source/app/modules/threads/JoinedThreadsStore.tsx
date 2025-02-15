// app/modules/threads/JoinedThreadsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = options;
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
            entity = _closure1_slot14;
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
    var _closure1_slot13 = entity;
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
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: deleteGuildThreads
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        entity = 8;
        tango = tango[entity];
        entity = undefined;
        report = report.bind(entity)(tango);
        tango = _closure1_slot9;
        report = report.bind(entity)(tango);
        tango = report.reject;
        mike = function(argFoo) {
            entity = argFoo;
            mike = entity.guildId;
            entity = _closure2_slot0;
            entity = mike === entity;
            return entity;
        };
        report = tango.bind(report)(mike);
        tango = report.keyBy;
        mike = 'threadId';
        tango = tango.bind(report)(mike);
        mike = tango.value;
        mike = mike.bind(tango)();
        _closure1_slot9 = mike;
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: storeThreads
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zulu = entity.threads;
            entity = null;
            if(!(entity != zulu)) { _fun00006_ip = 32; continue _fun00005 }
 15:
            mike = zulu.forEach;
            entity = _closure1_slot17;
            entity = mike.bind(zulu)(entity);
 32:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: storeThread
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot7;
            tango = report.has;
            zulu = entity.type;
            zulu = tango.bind(report)(zulu);
            if(!zulu) { _fun00008_ip = 40; continue _fun00007 }
 28:
            report = entity.member;
            tango = null;
            zulu = tango != report;
 40:
            if(!zulu) { _fun00008_ip = 190; continue _fun00007 }
 46:
            report = _closure1_slot9;
            tango = entity.id;
            zulu = {};
            oscar = entity.id;
            zulu['threadId'] = oscar;
            oscar = entity.guild_id;
            zulu['guildId'] = oscar;
            oscar = entity.member;
            oscar = oscar.flags;
            zulu['flags'] = oscar;
            oscar = entity.member;
            oscar = oscar.muted;
            zulu['muted'] = oscar;
            oscar = entity.member;
            oscar = oscar.muteConfig;
            zulu['muteConfig'] = oscar;
            oscar = global;
            options = oscar.Date;
            oscar = entity.member;
            verify = oscar.joinTimestamp;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            offset = golf;
            oscar = new offset[options](verify, options);
            oscar = oscar instanceof Object ? oscar : golf;
            zulu['joinTimestamp'] = oscar;
            report[tango] = zulu;
            zulu = _closure1_slot18;
            mike = entity.id;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 190:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: handleMutedChange
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            mike = _closure1_slot9;
            report = mike[zulu];
            oscar = _closure1_slot10;
            mike = oscar.clearTimer;
            mike = mike.bind(oscar)(zulu);
            oscar = report.muted;
            mike = true;
            if(!(mike !== oscar)) { _fun00010_ip = 98; continue _fun00009 }
 47:
            mike = global;
            golf = mike.Set;
            yankee = _closure1_slot11;
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            romeo = oscar;
            mike = new romeo[golf](yankee, offset);
            oscar = mike instanceof Object ? mike : oscar;
            _closure1_slot11 = oscar;
            mike = oscar.delete;
            mike = mike.bind(oscar)(zulu);
            _fun00010_ip = 235; continue _fun00009;
 98:
            mike = global;
            options = mike.Set;
            yankee = _closure1_slot11;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            romeo = golf;
            oscar = new romeo[options](yankee, offset);
            golf = oscar instanceof Object ? oscar : golf;
            _closure1_slot11 = golf;
            oscar = golf.add;
            oscar = oscar.bind(golf)(zulu);
            golf = _closure1_slot10;
            oscar = golf.setTimer;
            report = report.muteConfig;
            tango = function() {
                mike = _closure1_slot9;
                tango = _closure2_slot0;
                zulu = mike[tango];
                mike = false;
                zulu['muted'] = mike;
                mike = global;
                report = mike.Set;
                oscar = _closure1_slot11;
                zulu = report.prototype;
                zulu = Object.create(zulu, {constructor: {value: report}});
                golf = zulu;
                mike = new golf[report](oscar, report);
                zulu = mike instanceof Object ? mike : zulu;
                _closure1_slot11 = zulu;
                mike = zulu.delete;
                mike = mike.bind(zulu)(tango);
                mike = _closure1_slot12;
                entity = mike.emitChange;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            tango = oscar.bind(golf)(zulu, report, tango);
            if(!tango) { _fun00010_ip = 235; continue _fun00009 }
 175:
            tango = _closure1_slot9;
            report = tango[zulu];
            tango = false;
            report['muted'] = tango;
            report = mike.Set;
            yankee = _closure1_slot11;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            romeo = tango;
            mike = new romeo[report](yankee, offset);
            mike = mike instanceof Object ? mike : tango;
            _closure1_slot11 = mike;
            entity = mike.delete;
            entity = entity.bind(mike)(zulu);
 235:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    golf = function(argFoo) { // Original name: handleThreadListSyncOrSearchFinish
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = argFoo;
            mike = zulu.guildId;
            var _closure2_slot0 = mike;
            zulu = zulu.members;
            tango = null;
            mike = tango != mike;
            if(!mike) { _fun00012_ip = 33; continue _fun00011 }
 29:
            mike = tango != zulu;
 33:
            if(!mike) { _fun00012_ip = 51; continue _fun00011 }
 36:
            mike = zulu.forEach;
            entity = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot9;
                tango = entity.id;
                zulu = {};
                oscar = entity.id;
                zulu['threadId'] = oscar;
                oscar = _closure2_slot0;
                zulu['guildId'] = oscar;
                oscar = entity.flags;
                zulu['flags'] = oscar;
                oscar = entity.muted;
                zulu['muted'] = oscar;
                oscar = entity.muteConfig;
                zulu['muteConfig'] = oscar;
                oscar = global;
                options = oscar.Date;
                verify = entity.joinTimestamp;
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                offset = golf;
                oscar = new offset[options](verify, options);
                oscar = oscar instanceof Object ? oscar : golf;
                zulu['joinTimestamp'] = oscar;
                report[tango] = zulu;
                zulu = _closure1_slot18;
                mike = entity.id;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 51:
            entity = undefined;
            return entity;
        }
    };
    mike = global;
    yankee = mike.Object;
    offset = yankee.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, verify);
    entity = 0;
    verify = oscar[entity];
    entity = undefined;
    verify = options.bind(entity)(verify);
    var _closure1_slot2 = verify;
    verify = 1;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot3 = verify;
    verify = 2;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 3;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 4;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 5;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    verify = verify.ALL_CHANNEL_TYPES;
    var _closure1_slot7 = verify;
    verify = 6;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = {};
    var _closure1_slot9 = verify;
    verify = 7;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    kilo = offset;
    verify = new kilo[verify](backup);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot10 = verify;
    mike = mike.Set;
    verify = mike.prototype;
    verify = Object.create(verify, {constructor: {value: mike}});
    kilo = verify;
    mike = new kilo[mike](backup);
    mike = mike instanceof Object ? mike : verify;
    var _closure1_slot11 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    verify = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: JoinedThreadsStoreClass
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
        entity = 'hasJoined';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            mike = _closure1_slot9;
            entity = argFoo;
            entity = entity in mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'joinTimestamp';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = _closure1_slot9;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00014_ip = 31; continue _fun00013 }
 25:
                entity = mike.joinTimestamp;
 31:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'flags';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = _closure1_slot9;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00016_ip = 30; continue _fun00015 }
 25:
                entity = mike.flags;
 30:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getInitialOverlayState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            entity = _closure1_slot9;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getMuteConfig';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                mike = _closure1_slot9;
                entity = argFoo;
                mike = mike[entity];
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun00018_ip = 31; continue _fun00017 }
 25:
                entity = mike.muteConfig;
 31:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getMutedThreads';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'isMuted';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot11;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(verify);
    mike = 'JoinedThreadsStore';
    verify['displayName'] = mike;
    mike = 10;
    mike = oscar[mike];
    backup = options.bind(entity)(mike);
    mike = {};
    offset = function(argFoo) { // Original name: handleConnectionOpen
        zulu = _closure1_slot10;
        entity = zulu.reset;
        entity = entity.bind(zulu)();
        entity = global;
        entity = entity.Set;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        report = zulu;
        entity = new report[entity](tango);
        entity = entity instanceof Object ? entity : zulu;
        _closure1_slot11 = entity;
        entity = {};
        _closure1_slot9 = entity;
        entity = argFoo;
        zulu = entity.guilds;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot16;
            entity = undefined;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = offset;
    offset = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        tango = entity.joinedThreads;
        report = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 8;
        mike = mike[entity];
        entity = undefined;
        mike = report.bind(entity)(mike);
        report = mike.bind(entity)(tango);
        tango = report.map;
        mike = function(argFoo) {
            mike = argFoo;
            entity = {};
            oscar = entity;
            report = mike;
            zulu = copyDataProperties(oscar, report);
            zulu = global;
            tango = zulu.Date;
            oscar = mike.joinTimestamp;
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            golf = zulu;
            mike = new golf[tango](oscar, report);
            zulu = mike instanceof Object ? mike : zulu;
            mike = 'joinTimestamp';
            entity[mike] = zulu;
            return entity;
        };
        report = tango.bind(report)(mike);
        tango = report.keyBy;
        mike = 'threadId';
        tango = tango.bind(report)(mike);
        mike = tango.value;
        mike = mike.bind(tango)();
        _closure1_slot9 = mike;
        return entity;
    };
    mike['OVERLAY_INITIALIZE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCreate
        entity = argFoo;
        zulu = entity.guild;
        report = _closure1_slot15;
        tango = zulu.id;
        entity = undefined;
        tango = report.bind(entity)(tango);
        mike = _closure1_slot16;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['GUILD_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        zulu = _closure1_slot15;
        mike = entity.id;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    mike['GUILD_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleThreadCreate
        entity = argFoo;
        zulu = entity.channel;
        mike = _closure1_slot17;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['THREAD_CREATE'] = offset;
    mike['THREAD_LIST_SYNC'] = golf;
    mike['SEARCH_FINISH'] = golf;
    mike['MOD_VIEW_SEARCH_FINISH'] = golf;
    mike['LOAD_THREADS_SUCCESS'] = golf;
    mike['LOAD_ARCHIVED_THREADS_SUCCESS'] = golf;
    golf = function(argFoo) { // Original name: handleThreadDelete
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            tango = entity.id;
            mike = _closure1_slot9;
            mike = tango in mike;
            if(mike) { _fun00020_ip = 31; continue _fun00019 }
 27:
            mike = false;
            return mike;
 31:
            mike = {};
            report = _closure1_slot9;
            oscar = mike;
            tango = copyDataProperties(oscar, report);
            _closure1_slot9 = mike;
            entity = entity.id;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
        }
    };
    mike['THREAD_DELETE'] = golf;
    golf = function(argFoo) { // Original name: handleThreadMemberUpdate
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot8;
            zulu = tango.getId;
            tango = zulu.bind(tango)();
            zulu = entity.userId;
            if(!(tango === zulu)) { _fun00022_ip = 154; continue _fun00021 }
 32:
            report = _closure1_slot9;
            tango = entity.id;
            zulu = {};
            oscar = entity.id;
            zulu['threadId'] = oscar;
            oscar = entity.guildId;
            zulu['guildId'] = oscar;
            oscar = entity.flags;
            zulu['flags'] = oscar;
            oscar = entity.muted;
            zulu['muted'] = oscar;
            oscar = entity.muteConfig;
            zulu['muteConfig'] = oscar;
            oscar = global;
            options = oscar.Date;
            verify = entity.joinTimestamp;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            offset = golf;
            oscar = new offset[options](verify, options);
            oscar = oscar instanceof Object ? oscar : golf;
            zulu['joinTimestamp'] = oscar;
            report[tango] = zulu;
            zulu = _closure1_slot18;
            mike = entity.id;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
 154:
            entity = false;
            return entity;
        }
    };
    mike['THREAD_MEMBER_UPDATE'] = golf;
    golf = function(argFoo) { // Original name: handleThreadMemberLocalUpdate
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            oscar = entity.id;
            mike = entity.userId;
            golf = entity.guildId;
            zulu = entity.isJoining;
            report = _closure1_slot8;
            entity = report.getId;
            entity = entity.bind(report)();
            entity = entity === mike;
            if(!entity) { _fun00024_ip = 153; continue _fun00023 }
 48:
            mike = null;
            mike = mike !== golf;
            if(!mike) { _fun00024_ip = 150; continue _fun00023 }
 57:
            report = _closure1_slot9;
            if(zulu) { _fun00024_ip = 70; continue _fun00023 }
 64:
            zulu = delete report[oscar];
            _fun00024_ip = 148; continue _fun00023;
 70:
            tango = {};
            tango['threadId'] = oscar;
            tango['guildId'] = golf;
            golf = 0;
            tango['flags'] = golf;
            golf = true;
            tango['muted'] = golf;
            golf = {};
            options = undefined;
            golf['end_time'] = options;
            tango['muteConfig'] = golf;
            golf = global;
            golf = golf.Date;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            verify = options;
            golf = new verify[golf](options);
            golf = golf instanceof Object ? golf : options;
            tango['joinTimestamp'] = golf;
            report[oscar] = tango;
            zulu = tango;
 148:
            mike = undefined;
 150:
            entity = mike;
 153:
            return entity;
        }
    };
    mike['THREAD_MEMBER_LOCAL_UPDATE'] = golf;
    golf = function(argFoo) { // Original name: handleThreadMembersUpdate
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            mike = false;
            var _closure2_slot1 = mike;
            golf = zulu.removedMemberIds;
            mike = null;
            tango = mike != golf;
            if(!tango) { _fun00026_ip = 57; continue _fun00025 }
 30:
            oscar = golf.includes;
            options = _closure1_slot8;
            report = options.getId;
            report = report.bind(options)();
            tango = oscar.bind(golf)(report);
 57:
            if(!tango) { _fun00026_ip = 76; continue _fun00025 }
 60:
            oscar = zulu.id;
            report = _closure1_slot9;
            tango = oscar in report;
 76:
            if(!tango) { _fun00026_ip = 114; continue _fun00025 }
 79:
            report = {};
            verify = _closure1_slot9;
            offset = report;
            oscar = copyDataProperties(offset, verify);
            _closure1_slot9 = report;
            tango = zulu.id;
            tango = delete report[tango];
            tango = true;
            _closure2_slot1 = tango;
 114:
            tango = zulu.addedMembers;
            if(!(mike != tango)) { _fun00026_ip = 139; continue _fun00025 }
 124:
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    golf = argFoo;
                    mike = golf.userId;
                    tango = _closure1_slot8;
                    entity = tango.getId;
                    entity = entity.bind(tango)();
                    if(!(mike === entity)) { _fun00028_ip = 178; continue _fun00027 }
 32:
                    oscar = {};
                    offset = _closure1_slot9;
                    yankee = oscar;
                    entity = copyDataProperties(yankee, offset);
                    _closure1_slot9 = oscar;
                    entity = _closure2_slot0;
                    report = entity.id;
                    tango = {};
                    options = entity.id;
                    tango['threadId'] = options;
                    options = entity.guildId;
                    tango['guildId'] = options;
                    options = golf.flags;
                    tango['flags'] = options;
                    options = golf.muted;
                    tango['muted'] = options;
                    options = golf.muteConfig;
                    tango['muteConfig'] = options;
                    options = global;
                    verify = options.Date;
                    yankee = golf.joinTimestamp;
                    options = verify.prototype;
                    options = Object.create(options, {constructor: {value: verify}});
                    romeo = options;
                    golf = new romeo[verify](yankee, offset);
                    golf = golf instanceof Object ? golf : options;
                    tango['joinTimestamp'] = golf;
                    oscar[report] = tango;
                    tango = _closure1_slot18;
                    zulu = entity.id;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu);
                    entity = true;
                    _closure2_slot1 = entity;
 178:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
 139:
            entity = _closure2_slot1;
            return entity;
        }
    };
    mike['THREAD_MEMBERS_UPDATE'] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    kilo = golf;
    foxtrot = mike;
    mike = new kilo[verify](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot12 = mike;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/JoinedThreadsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();