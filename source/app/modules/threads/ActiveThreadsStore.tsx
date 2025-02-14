// app/modules/threads/ActiveThreadsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun56996: for(var _fun56996_ip = 0; ; ) switch(_fun56996_ip) {
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
            if(entity) { _fun56996_ip = 51; continue _fun56996 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun56996_ip = 92; continue _fun56996;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun56996_ip = 71; continue _fun56996 }
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
        _fun56997: for(var _fun56997_ip = 0; ; ) switch(_fun56997_ip) {
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
            _fun56997_ip = 74; continue _fun56997;
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
    entity = function(argFoo) { // Original name: threadStateFromChannel
        mike = argFoo;
        entity = {};
        zulu = mike.id;
        entity['id'] = zulu;
        mike = mike.parent_id;
        entity['parentId'] = mike;
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: deleteGuildThreads
        _fun57001: for(var _fun57001_ip = 0; ; ) switch(_fun57001_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot10;
            zulu = mike in zulu;
            if(!zulu) { _fun57001_ip = 25; continue _fun57001 }
 17:
            entity = _closure1_slot10;
            entity = delete entity[mike];
 25:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: storeThreads
        _fun57002: for(var _fun57002_ip = 0; ; ) switch(_fun57002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tango = entity.threads;
            zulu = null;
            zulu = zulu != tango;
            if(!zulu) { _fun57002_ip = 41; continue _fun57002 }
 24:
            tango = entity.threads;
            report = tango.length;
            tango = 0;
            zulu = report > tango;
 41:
            if(!zulu) { _fun57002_ip = 98; continue _fun57002 }
 44:
            report = _closure1_slot10;
            tango = entity.id;
            zulu = {};
            report[tango] = zulu;
            report = entity.threads;
            tango = report.filter;
            zulu = function(argFoo) {
                zulu = _closure1_slot7;
                mike = zulu.has;
                entity = argFoo;
                entity = entity.type;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.forEach;
            mike = function(argFoo) {
                tango = _closure1_slot18;
                entity = _closure2_slot0;
                zulu = entity.id;
                entity = undefined;
                mike = argFoo;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
 98:
            mike = entity.hasThreadsSubscription;
            if(!mike) { _fun57002_ip = 129; continue _fun57002 }
 107:
            zulu = _closure1_slot11;
            mike = zulu.add;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
 129:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: storeThread
        _fun57005: for(var _fun57005_ip = 0; ; ) switch(_fun57005_ip) {
 0:
            tango = argFoo;
            report = argBar;
            mike = _closure1_slot10;
            oscar = mike[tango];
            zulu = report.parent_id;
            mike = zulu in oscar;
            if(mike) { _fun57005_ip = 36; continue _fun57005 }
 30:
            mike = {};
            oscar[zulu] = mike;
 36:
            mike = _closure1_slot10;
            mike = mike[tango];
            tango = mike[zulu];
            zulu = report.id;
            mike = _closure1_slot15;
            entity = undefined;
            mike = mike.bind(entity)(report);
            tango[zulu] = mike;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    verify = function(argFoo) { // Original name: handleThreadCreateOrUpdate
        _fun57006: for(var _fun57006_ip = 0; ; ) switch(_fun57006_ip) {
 0:
            entity = argFoo;
            zulu = entity.channel;
            report = _closure1_slot7;
            tango = report.has;
            mike = zulu.type;
            mike = tango.bind(report)(mike);
            if(mike) { _fun57006_ip = 37; continue _fun57006 }
 33:
            mike = false;
            return mike;
 37:
            report = zulu.threadMetadata;
            tango = null;
            golf = tango == report;
            mike = undefined;
            oscar = undefined;
            if(golf) { _fun57006_ip = 62; continue _fun57006 }
 56:
            oscar = report.archived;
 62:
            report = true;
            if(!(report !== oscar)) { _fun57006_ip = 163; continue _fun57006 }
 68:
            oscar = _closure1_slot10;
            report = zulu.guild_id;
            offset = oscar[report];
            if(!(tango == offset)) { _fun57006_ip = 87; continue _fun57006 }
 85:
            offset = {};
 87:
            oscar = _closure1_slot10;
            report = zulu.guild_id;
            tango = {};
            romeo = tango;
            yankee = offset;
            golf = copyDataProperties(romeo, yankee);
            options = zulu.parent_id;
            golf = {};
            verify = zulu.parent_id;
            yankee = offset[verify];
            romeo = golf;
            verify = copyDataProperties(romeo, yankee);
            offset = zulu.id;
            verify = _closure1_slot15;
            verify = verify.bind(mike)(zulu);
            golf[offset] = verify;
            tango[options] = golf;
            oscar[report] = tango;
            return mike;
 163:
            entity = _closure1_slot19;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: deleteThread
        _fun57007: for(var _fun57007_ip = 0; ; ) switch(_fun57007_ip) {
 0:
            entity = argFoo;
            options = entity.guild_id;
            golf = entity.parent_id;
            verify = entity.id;
            mike = null;
            entity = mike != options;
            if(!entity) { _fun57007_ip = 32; continue _fun57007 }
 28:
            entity = mike != golf;
 32:
            if(!entity) { _fun57007_ip = 229; continue _fun57007 }
 38:
            mike = _closure1_slot10;
            mike = options in mike;
            if(!mike) { _fun57007_ip = 226; continue _fun57007 }
 55:
            zulu = _closure1_slot10;
            zulu = zulu[options];
            zulu = golf in zulu;
            if(!zulu) { _fun57007_ip = 223; continue _fun57007 }
 73:
            tango = _closure1_slot10;
            tango = tango[options];
            tango = tango[golf];
            tango = verify in tango;
            if(!tango) { _fun57007_ip = 220; continue _fun57007 }
 95:
            offset = _closure1_slot10;
            report = {};
            foxtrot = offset[options];
            backup = report;
            yankee = copyDataProperties(backup, foxtrot);
            yankee = {};
            romeo = _closure1_slot10;
            romeo = romeo[options];
            foxtrot = romeo[golf];
            backup = yankee;
            romeo = copyDataProperties(backup, foxtrot);
            report[golf] = yankee;
            offset[options] = report;
            report = _closure1_slot10;
            report = report[options];
            report = report[golf];
            report = delete report[verify];
            offset = _closure1_slot0;
            verify = _closure1_slot1;
            report = 7;
            verify = verify[report];
            report = undefined;
            offset = offset.bind(report)(verify);
            verify = offset.isEmpty;
            report = _closure1_slot10;
            report = report[options];
            report = report[golf];
            report = verify.bind(offset)(report);
            if(!report) { _fun57007_ip = 218; continue _fun57007 }
 206:
            oscar = _closure1_slot10;
            oscar = oscar[options];
            report = delete oscar[golf];
 218:
            tango = undefined;
 220:
            zulu = tango;
 223:
            mike = zulu;
 226:
            entity = mike;
 229:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    mike = global;
    yankee = mike.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
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
    options = 5;
    options = oscar[options];
    options = report.bind(entity)(options);
    offset = options.ALL_CHANNEL_TYPES;
    var _closure1_slot7 = offset;
    options = options.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = {};
    var _closure1_slot10 = options;
    mike = mike.Set;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    kilo = options;
    mike = new kilo[mike](backup);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot11 = mike;
    mike = {};
    var _closure1_slot12 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ActiveThreadsStore
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
        entity = function() { // Original name: value
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot9;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'isActive';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            _fun57011: for(var _fun57011_ip = 0; ; ) switch(_fun57011_ip) {
 0:
                oscar = argFoo;
                report = this;
                zulu = null;
                entity = zulu != oscar;
                if(!entity) { _fun57011_ip = 41; continue _fun57011 }
 15:
                tango = report.getThreadsForParent;
                mike = argBar;
                tango = tango.bind(report)(oscar, mike);
                mike = argBaz;
                mike = tango[mike];
                entity = zulu != mike;
 41:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getThreadsForGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun57012: for(var _fun57012_ip = 0; ; ) switch(_fun57012_ip) {
 0:
                zulu = _closure1_slot10;
                entity = argFoo;
                entity = zulu[entity];
                zulu = null;
                if(!(zulu == entity)) { _fun57012_ip = 24; continue _fun57012 }
 20:
                entity = _closure1_slot12;
 24:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getThreadsForParent';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun57013: for(var _fun57013_ip = 0; ; ) switch(_fun57013_ip) {
 0:
                zulu = this;
                mike = zulu.getThreadsForGuild;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = argBar;
                entity = mike[entity];
                mike = null;
                if(!(mike == entity)) { _fun57013_ip = 37; continue _fun57013 }
 30:
                entity = _closure1_slot12;
 37:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'hasThreadsForChannel';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            oscar = this;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.isEmpty;
            report = oscar.getThreadsForParent;
            tango = argFoo;
            entity = argBar;
            entity = report.bind(oscar)(tango, entity);
            entity = mike.bind(zulu)(entity);
            entity = !entity;
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'forEachGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 8;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.keys;
            zulu = _closure1_slot10;
            tango = tango.bind(report)(zulu);
            zulu = tango.forEach;
            mike = function(argFoo) {
                tango = argFoo;
                zulu = _closure3_slot0;
                entity = _closure1_slot10;
                mike = entity[tango];
                entity = undefined;
                mike = zulu.bind(entity)(tango, mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'hasLoaded';
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
    options = mike.bind(entity)(options);
    mike = 'ActiveThreadsStore';
    options['displayName'] = mike;
    mike = 10;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    offset = function(argFoo) { // Original name: handleConnectionOpen
        mike = {};
        _closure1_slot10 = mike;
        mike = _closure1_slot11;
        entity = mike.clear;
        entity = entity.bind(mike)();
        entity = argFoo;
        zulu = entity.guilds;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot17;
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
        tango = entity.channels;
        zulu = {};
        _closure1_slot10 = zulu;
        report = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        zulu = report.bind(entity)(zulu);
        report = zulu.bind(entity)(tango);
        tango = report.filter;
        zulu = function(argFoo) {
            zulu = _closure1_slot8;
            mike = zulu.has;
            entity = argFoo;
            entity = entity.type;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = tango.bind(report)(zulu);
        tango = report.groupBy;
        zulu = 'guild_id';
        tango = tango.bind(report)(zulu);
        zulu = tango.forEach;
        mike = function(argFoo, argBar) {
            zulu = argFoo;
            report = argBar;
            var _closure3_slot0 = report;
            tango = _closure1_slot10;
            mike = {};
            tango[report] = mike;
            mike = zulu.forEach;
            entity = function(argFoo) {
                tango = _closure1_slot18;
                zulu = _closure3_slot0;
                entity = undefined;
                mike = argFoo;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['OVERLAY_INITIALIZE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCreate
        entity = argFoo;
        zulu = entity.guild;
        report = _closure1_slot16;
        tango = zulu.id;
        entity = undefined;
        tango = report.bind(entity)(tango);
        mike = _closure1_slot17;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['GUILD_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        zulu = _closure1_slot16;
        mike = entity.id;
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    mike['GUILD_DELETE'] = offset;
    mike['THREAD_CREATE'] = verify;
    mike['THREAD_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleThreadListSync
        _fun57026: for(var _fun57026_ip = 0; ; ) switch(_fun57026_ip) {
 0:
            mike = argFoo;
            verify = mike.guildId;
            var _closure2_slot0 = verify;
            zulu = mike.threads;
            tango = mike.channelIds;
            mike = null;
            if(!(mike == tango)) { _fun57026_ip = 49; continue _fun57026 }
 32:
            tango = _closure1_slot11;
            mike = tango.add;
            mike = mike.bind(tango)(verify);
 49:
            offset = _closure1_slot10;
            mike = {};
            backup = offset[verify];
            kilo = mike;
            yankee = copyDataProperties(kilo, backup);
            offset[verify] = mike;
            mike = _closure1_slot10;
            golf = mike[verify];
            for(mike in golf)
 89:
            {
 98:
                romeo = mike;
                offset = _closure1_slot10;
                yankee = offset[verify];
                offset = {};
                foxtrot = _closure1_slot10;
                foxtrot = foxtrot[verify];
                backup = foxtrot[romeo];
                kilo = offset;
                foxtrot = copyDataProperties(kilo, backup);
                yankee[romeo] = offset;
                _fun57026_ip = 89; continue _fun57026;
            }
 136:
            mike = zulu.forEach;
            entity = function(argFoo) {
                tango = _closure1_slot18;
                zulu = _closure2_slot0;
                entity = undefined;
                mike = argFoo;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    mike['THREAD_LIST_SYNC'] = verify;
    verify = function(argFoo) { // Original name: handleThreadDelete
        entity = argFoo;
        zulu = entity.channel;
        mike = _closure1_slot19;
        entity = undefined;
        entity = mike.bind(entity)(zulu);
        return entity;
    };
    mike['THREAD_DELETE'] = verify;
    tango = function(argFoo) { // Original name: handleChannelDelete
        _fun57029: for(var _fun57029_ip = 0; ; ) switch(_fun57029_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            zulu = entity.guild_id;
            mike = null;
            if(!(mike != zulu)) { _fun57029_ip = 99; continue _fun57029 }
 19:
            tango = entity.guild_id;
            zulu = _closure1_slot10;
            zulu = tango in zulu;
            if(!zulu) { _fun57029_ip = 99; continue _fun57029 }
 38:
            report = _closure1_slot10;
            tango = entity.guild_id;
            zulu = {};
            golf = _closure1_slot10;
            oscar = entity.guild_id;
            options = golf[oscar];
            verify = zulu;
            oscar = copyDataProperties(verify, options);
            report[tango] = zulu;
            zulu = _closure1_slot10;
            mike = entity.guild_id;
            mike = zulu[mike];
            entity = entity.id;
            entity = delete mike[entity];
            entity = undefined;
            return entity;
 99:
            entity = false;
            return entity;
        }
    };
    mike['CHANNEL_DELETE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/ActiveThreadsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();