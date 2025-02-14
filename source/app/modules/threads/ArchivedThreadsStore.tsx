// app/modules/threads/ArchivedThreadsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun67980: for(var _fun67980_ip = 0; ; ) switch(_fun67980_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot23;
            entity = entity.bind(zulu)();
            if(entity) { _fun67980_ip = 51; continue _fun67980 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun67980_ip = 92; continue _fun67980;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun67980_ip = 71; continue _fun67980 }
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
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun67981: for(var _fun67981_ip = 0; ; ) switch(_fun67981_ip) {
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
            _fun67981_ip = 76; continue _fun67981;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot23 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    verify = function() { // Original name: reset
        entity = false;
        _closure1_slot13 = entity;
        mike = true;
        _closure1_slot14 = mike;
        _closure1_slot15 = entity;
        _closure1_slot16 = entity;
        entity = null;
        _closure1_slot17 = entity;
        tango = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        mike = tango.bind(entity)(mike);
        mike = mike.ThreadSortOrder;
        mike = mike.LATEST_ACTIVITY;
        _closure1_slot18 = mike;
        mike = global;
        mike = mike.Set;
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        oscar = tango;
        mike = new oscar[mike](report);
        mike = mike instanceof Object ? mike : tango;
        var _closure1_slot12 = mike;
        mike = 0;
        _closure1_slot20 = mike;
        mike = new Array(0);
        _closure1_slot19 = mike;
        return entity;
    };
    var _closure1_slot24 = verify;
    entity = function(argFoo, argBar) { // Original name: getSortValue
        _fun67985: for(var _fun67985_ip = 0; ; ) switch(_fun67985_ip) {
 0:
            mike = argFoo;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.ThreadSortOrder;
            tango = entity.LATEST_ACTIVITY;
            entity = argBar;
            if(!(entity !== tango)) { _fun67985_ip = 54; continue _fun67985 }
 47:
            entity = mike.id;
            _fun67985_ip = 74; continue _fun67985;
 54:
            tango = _closure1_slot10;
            zulu = tango.lastMessageId;
            mike = mike.id;
            entity = zulu.bind(tango)(mike);
 74:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: resort
        _fun67986: for(var _fun67986_ip = 0; ; ) switch(_fun67986_ip) {
 0:
            tango = _closure1_slot17;
            entity = null;
            if(!(entity != tango)) { _fun67986_ip = 232; continue _fun67986 }
 18:
            tango = _closure1_slot15;
            tango = !tango;
            var _closure2_slot0 = tango;
            oscar = _closure1_slot9;
            report = oscar.getChannel;
            golf = _closure1_slot19;
            options = golf.length;
            tango = 1;
            tango = options - tango;
            tango = golf[tango];
            golf = report.bind(oscar)(tango);
            tango = entity == golf;
            entity = null;
            if(tango) { _fun67986_ip = 88; continue _fun67986 }
 72:
            oscar = _closure1_slot25;
            report = _closure1_slot18;
            tango = undefined;
            entity = oscar.bind(tango)(golf, report);
 88:
            var _closure2_slot1 = entity;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 12;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            golf = _closure1_slot9;
            oscar = golf.getAllThreadsForParent;
            tango = _closure1_slot17;
            tango = oscar.bind(golf)(tango);
            oscar = report.bind(entity)(tango);
            report = oscar.filter;
            tango = function(argFoo) {
                mike = argFoo;
                entity = mike.isArchivedThread;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = report.bind(oscar)(tango);
            report = oscar.filter;
            tango = function(argFoo) {
                _fun67988: for(var _fun67988_ip = 0; ; ) switch(_fun67988_ip) {
 0:
                    verify = argFoo;
                    entity = _closure1_slot12;
                    entity = entity.size;
                    zulu = 0;
                    if(!(zulu !== entity)) { _fun67988_ip = 64; continue _fun67988 }
 21:
                    oscar = verify.appliedTags;
                    entity = null;
                    entity = entity == oscar;
                    mike = undefined;
                    if(entity) { _fun67988_ip = 58; continue _fun67988 }
 38:
                    report = oscar.some;
                    entity = function(argFoo) {
                        zulu = _closure1_slot12;
                        mike = zulu.has;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    mike = report.bind(oscar)(entity);
 58:
                    entity = true;
                    if(!(entity === mike)) { _fun67988_ip = 164; continue _fun67988 }
 64:
                    entity = _closure2_slot0;
                    if(entity) { _fun67988_ip = 160; continue _fun67988 }
 74:
                    report = _closure2_slot1;
                    entity = null;
                    if(!(entity != report)) { _fun67988_ip = 160; continue _fun67988 }
 84:
                    report = entity == verify;
                    oscar = null;
                    if(report) { _fun67988_ip = 109; continue _fun67988 }
 93:
                    options = _closure1_slot25;
                    golf = _closure1_slot18;
                    report = undefined;
                    oscar = options.bind(report)(verify, golf);
 109:
                    entity = entity != oscar;
                    if(!entity) { _fun67988_ip = 158; continue _fun67988 }
 116:
                    golf = _closure1_slot1;
                    report = _closure1_slot2;
                    tango = 13;
                    report = report[tango];
                    tango = undefined;
                    report = golf.bind(tango)(report);
                    tango = report.compare;
                    mike = _closure2_slot1;
                    mike = tango.bind(report)(oscar, mike);
                    entity = mike >= zulu;
 158:
                    return entity;
 160:
                    entity = true;
                    return entity;
 164:
                    entity = false;
                    return entity;
                }
            };
            oscar = report.bind(oscar)(tango);
            report = oscar.sort;
            tango = function(argFoo, argBar) {
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 13;
                mike = tango[mike];
                golf = undefined;
                tango = zulu.bind(golf)(mike);
                zulu = tango.compare;
                oscar = _closure1_slot25;
                report = _closure1_slot18;
                mike = argFoo;
                mike = oscar.bind(golf)(mike, report);
                report = _closure1_slot18;
                entity = argBar;
                entity = oscar.bind(golf)(entity, report);
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            report = report.bind(oscar)(tango);
            tango = report.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            tango = tango.bind(report)(mike);
            mike = tango.reverse;
            tango = mike.bind(tango)();
            mike = tango.value;
            mike = mike.bind(tango)();
            _closure1_slot19 = mike;
            return entity;
 232:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: removeThreadId
        _fun67992: for(var _fun67992_ip = 0; ; ) switch(_fun67992_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            tango = _closure1_slot19;
            zulu = tango.indexOf;
            tango = zulu.bind(tango)(report);
            zulu = 0;
            if(!(!(tango >= zulu))) { _fun67992_ip = 36; continue _fun67992 }
 32:
            zulu = false;
            return zulu;
 36:
            tango = _closure1_slot19;
            zulu = tango.filter;
            entity = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            _closure1_slot19 = entity;
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    mike = {};
    offset = true;
    mike['value'] = offset;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, mike);
    mike = 0;
    options = oscar[mike];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.ALL_CHANNEL_TYPES;
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 7;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 8;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot11 = options;
    options = false;
    var _closure1_slot13 = options;
    var _closure1_slot14 = offset;
    var _closure1_slot15 = options;
    var _closure1_slot16 = options;
    options = null;
    var _closure1_slot17 = options;
    options = 9;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.ThreadSortOrder;
    options = options.LATEST_ACTIVITY;
    var _closure1_slot18 = options;
    options = new Array(0);
    var _closure1_slot19 = options;
    var _closure1_slot20 = mike;
    mike = new Array(0);
    var _closure1_slot21 = mike;
    mike = 15;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ArchivedThreadsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot22;
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
        entity = function() { // Original name: value
            report = this;
            tango = report.waitFor;
            zulu = _closure1_slot9;
            mike = _closure1_slot11;
            entity = _closure1_slot10;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'canLoadMore';
        report['key'] = golf;
        golf = function() { // Original name: get
            _fun67997: for(var _fun67997_ip = 0; ; ) switch(_fun67997_ip) {
 0:
                entity = _closure1_slot15;
                if(!entity) { _fun67997_ip = 17; continue _fun67997 }
 10:
                zulu = _closure1_slot13;
                entity = !zulu;
 17:
                if(!entity) { _fun67997_ip = 27; continue _fun67997 }
 20:
                mike = _closure1_slot16;
                entity = !mike;
 27:
                return entity;
            }
        };
        report['get'] = golf;
        entity[1] = report;
        report = {};
        golf = 'nextOffset';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot20;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'isInitialLoad';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot14;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'isLoading';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun68000: for(var _fun68000_ip = 0; ; ) switch(_fun68000_ip) {
 0:
                zulu = _closure1_slot17;
                entity = argFoo;
                if(!(zulu === entity)) { _fun68000_ip = 69; continue _fun68000 }
 14:
                zulu = _closure1_slot18;
                entity = argBar;
                if(!(zulu === entity)) { _fun68000_ip = 69; continue _fun68000 }
 25:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 10;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.areSetsEqual;
                zulu = _closure1_slot12;
                entity = argBaz;
                entity = tango.bind(report)(zulu, entity);
                if(entity) { _fun68000_ip = 83; continue _fun68000 }
 69:
                zulu = _closure1_slot24;
                entity = undefined;
                entity = zulu.bind(entity)();
                entity = false;
                _fun68000_ip = 87; continue _fun68000;
 83:
                entity = _closure1_slot13;
 87:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getThreads';
        report['key'] = golf;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun68001: for(var _fun68001_ip = 0; ; ) switch(_fun68001_ip) {
 0:
                zulu = _closure1_slot17;
                entity = argFoo;
                if(!(zulu === entity)) { _fun68001_ip = 69; continue _fun68001 }
 14:
                zulu = _closure1_slot18;
                entity = argBar;
                if(!(zulu === entity)) { _fun68001_ip = 69; continue _fun68001 }
 25:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 10;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.areSetsEqual;
                zulu = _closure1_slot12;
                entity = argBaz;
                entity = tango.bind(report)(zulu, entity);
                if(entity) { _fun68001_ip = 75; continue _fun68001 }
 69:
                entity = _closure1_slot21;
                _fun68001_ip = 79; continue _fun68001;
 75:
                entity = _closure1_slot19;
 79:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ArchivedThreadsStore';
    options['displayName'] = mike;
    mike = 16;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    mike['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleThreadDelete
        entity = argFoo;
        entity = entity.channel;
        zulu = _closure1_slot27;
        mike = entity.id;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    mike['THREAD_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleThreadUpdate
        _fun68003: for(var _fun68003_ip = 0; ; ) switch(_fun68003_ip) {
 0:
            entity = argFoo;
            zulu = entity.channel;
            mike = _closure1_slot17;
            entity = zulu.parent_id;
            entity = mike === entity;
            if(!entity) { _fun68003_ip = 94; continue _fun68003 }
 28:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            mike = 14;
            mike = report[mike];
            report = undefined;
            golf = oscar.bind(report)(mike);
            oscar = golf.isForumPostPinned;
            mike = zulu.id;
            mike = oscar.bind(golf)(mike);
            oscar = !mike;
            mike = !oscar;
            if(oscar) { _fun68003_ip = 91; continue _fun68003 }
 75:
            tango = _closure1_slot27;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu);
            mike = undefined;
 91:
            entity = mike;
 94:
            return entity;
        }
    };
    mike['THREAD_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleChannelDelete
        _fun68004: for(var _fun68004_ip = 0; ; ) switch(_fun68004_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            zulu = entity.id;
            mike = _closure1_slot17;
            if(!(zulu === mike)) { _fun68004_ip = 36; continue _fun68004 }
 24:
            mike = _closure1_slot24;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 36:
            entity = false;
            return entity;
        }
    };
    mike['CHANNEL_DELETE'] = verify;
    verify = function(argFoo) { // Original name: handleLoadArchivedThreads
        _fun68005: for(var _fun68005_ip = 0; ; ) switch(_fun68005_ip) {
 0:
            zulu = argFoo;
            tango = zulu.channelId;
            entity = _closure1_slot17;
            entity = tango === entity;
            if(!entity) { _fun68005_ip = 36; continue _fun68005 }
 22:
            report = zulu.sortOrder;
            tango = _closure1_slot18;
            entity = report === tango;
 36:
            if(!entity) { _fun68005_ip = 83; continue _fun68005 }
 39:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 10;
            report = report[tango];
            tango = undefined;
            golf = oscar.bind(tango)(report);
            oscar = golf.areSetsEqual;
            report = zulu.tagFilter;
            tango = _closure1_slot12;
            entity = oscar.bind(golf)(report, tango);
 83:
            if(entity) { _fun68005_ip = 96; continue _fun68005 }
 86:
            tango = _closure1_slot24;
            entity = undefined;
            entity = tango.bind(entity)();
 96:
            entity = zulu.channelId;
            _closure1_slot17 = entity;
            entity = zulu.sortOrder;
            _closure1_slot18 = entity;
            report = zulu.tagFilter;
            entity = global;
            tango = entity.Set;
            tango = report instanceof tango;
            if(tango) { _fun68005_ip = 170; continue _fun68005 }
 136:
            report = entity.Set;
            verify = zulu.tagFilter;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            offset = tango;
            entity = new offset[report](verify, options);
            entity = entity instanceof Object ? entity : tango;
            _fun68005_ip = 176; continue _fun68005;
 170:
            entity = zulu.tagFilter;
 176:
            _closure1_slot12 = entity;
            entity = true;
            _closure1_slot13 = entity;
            entity = false;
            _closure1_slot14 = entity;
            entity = undefined;
            return entity;
        }
    };
    mike['LOAD_ARCHIVED_THREADS'] = verify;
    verify = function(argFoo) { // Original name: handleLoadArchivedThreadsSuccess
        _fun68006: for(var _fun68006_ip = 0; ; ) switch(_fun68006_ip) {
 0:
            mike = argFoo;
            report = mike.channelId;
            entity = _closure1_slot17;
            if(!(report === entity)) { _fun68006_ip = 352; continue _fun68006 }
 24:
            report = mike.sortOrder;
            entity = _closure1_slot18;
            if(!(report === entity)) { _fun68006_ip = 352; continue _fun68006 }
 41:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            entity = 10;
            report = report[entity];
            entity = undefined;
            options = oscar.bind(entity)(report);
            golf = options.areSetsEqual;
            oscar = mike.tagFilter;
            report = _closure1_slot12;
            report = golf.bind(options)(oscar, report);
            if(!report) { _fun68006_ip = 352; continue _fun68006 }
 91:
            golf = mike.threads;
            oscar = golf.filter;
            report = function(argFoo) {
                zulu = _closure1_slot8;
                mike = zulu.has;
                entity = argFoo;
                entity = entity.type;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = oscar.bind(golf)(report);
            report = oscar.map;
            tango = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            oscar = report.bind(oscar)(tango);
            report = _closure1_slot19;
            tango = report.concat;
            tango = tango.bind(report)(oscar);
            _closure1_slot19 = tango;
            oscar = _closure1_slot9;
            report = oscar.getChannel;
            tango = _closure1_slot17;
            golf = report.bind(oscar)(tango);
            tango = null;
            tango = tango != golf;
            if(!tango) { _fun68006_ip = 186; continue _fun68006 }
 176:
            report = golf.isForumLikeChannel;
            tango = report.bind(golf)();
 186:
            if(!tango) { _fun68006_ip = 305; continue _fun68006 }
 189:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 11;
            tango = oscar[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.trackForumMorePostsLoaded;
            tango = {};
            options = golf.guild_id;
            tango['guildId'] = options;
            golf = golf.id;
            tango['channelId'] = golf;
            golf = _closure1_slot19;
            golf = golf.length;
            tango['numArchivedThreads'] = golf;
            golf = mike.hasMore;
            tango['hasMoreThreads'] = golf;
            golf = global;
            verify = golf.Array;
            options = verify.from;
            golf = mike.tagFilter;
            golf = options.bind(verify)(golf);
            tango['filterTagIds'] = golf;
            golf = mike.sortOrder;
            tango['sortOrder'] = golf;
            tango = report.bind(oscar)(tango);
 305:
            tango = _closure1_slot26;
            tango = tango.bind(entity)();
            tango = mike.hasMore;
            _closure1_slot15 = tango;
            tango = mike.offset;
            mike = 25;
            mike = tango + mike;
            _closure1_slot20 = mike;
            mike = false;
            _closure1_slot13 = mike;
            _closure1_slot14 = mike;
            return entity;
 352:
            entity = false;
            return entity;
        }
    };
    mike['LOAD_ARCHIVED_THREADS_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleLoadArchivedThreadsFail
        _fun68009: for(var _fun68009_ip = 0; ; ) switch(_fun68009_ip) {
 0:
            mike = argFoo;
            tango = mike.channelId;
            entity = _closure1_slot17;
            if(!(tango === entity)) { _fun68009_ip = 98; continue _fun68009 }
 19:
            tango = mike.sortOrder;
            entity = _closure1_slot18;
            if(!(tango === entity)) { _fun68009_ip = 98; continue _fun68009 }
 33:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 10;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.areSetsEqual;
            tango = mike.tagFilter;
            mike = _closure1_slot12;
            mike = report.bind(oscar)(tango, mike);
            if(!mike) { _fun68009_ip = 98; continue _fun68009 }
 80:
            mike = false;
            _closure1_slot13 = mike;
            tango = true;
            _closure1_slot16 = tango;
            _closure1_slot14 = mike;
            return entity;
 98:
            entity = false;
            return entity;
        }
    };
    mike['LOAD_ARCHIVED_THREADS_FAIL'] = verify;
    tango = function(argFoo) { // Original name: handleResortThreads
        _fun68010: for(var _fun68010_ip = 0; ; ) switch(_fun68010_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot17;
            report = null;
            entity = report == entity;
            if(entity) { _fun68010_ip = 28; continue _fun68010 }
 19:
            tango = zulu.channelId;
            entity = report == tango;
 28:
            if(entity) { _fun68010_ip = 44; continue _fun68010 }
 31:
            tango = _closure1_slot17;
            zulu = zulu.channelId;
            entity = tango === zulu;
 44:
            if(!entity) { _fun68010_ip = 57; continue _fun68010 }
 47:
            zulu = _closure1_slot26;
            mike = undefined;
            entity = zulu.bind(mike)();
 57:
            return entity;
        }
    };
    mike['RESORT_THREADS'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/ArchivedThreadsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    mike = 25;
    zulu['PAGE_SIZE'] = mike;
    return entity;
})();