// app/modules/forums/ForumPostUnreadCountStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
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
            entity = _closure1_slot13;
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
    var _closure1_slot12 = entity;
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
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    var _closure1_slot2 = golf;
    golf = 1;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 2;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 3;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 4;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 5;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 6;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 7;
    golf = report[golf];
    golf = oscar.bind(entity)(golf);
    var _closure1_slot9 = golf;
    golf = {};
    var _closure1_slot10 = golf;
    mike = mike.Set;
    golf = mike.prototype;
    golf = Object.create(golf, {constructor: {value: mike}});
    foxtrot = golf;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot11 = mike;
    mike = 9;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ForumPostUnreadCountStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot12;
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
            report = this;
            tango = report.waitFor;
            zulu = _closure1_slot7;
            mike = _closure1_slot8;
            entity = _closure1_slot9;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getCount';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot10;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getThreadIdsMissingCounts';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: value
            zulu = argBar;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 8;
            mike = report[mike];
            report = undefined;
            tango = tango.bind(report)(mike);
            oscar = _closure1_slot7;
            mike = oscar.hasLoaded;
            entity = argFoo;
            mike = mike.bind(oscar)(entity);
            entity = 'must wait for THREAD_LIST_SYNC before calling this';
            entity = tango.bind(report)(mike, entity);
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = argFoo;
                    entity = _closure1_slot10;
                    zulu = tango in entity;
                    entity = !zulu;
                    if(zulu) { _fun00006_ip = 37; continue _fun00005 }
 20:
                    zulu = _closure1_slot11;
                    mike = zulu.has;
                    mike = mike.bind(zulu)(tango);
                    entity = !mike;
 37:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'ForumPostUnreadCountStore';
    golf['displayName'] = mike;
    mike = 10;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    options = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot10 = entity;
        entity = global;
        entity = entity.Set;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        tango = zulu;
        entity = new tango[entity](zulu);
        entity = entity instanceof Object ? entity : zulu;
        _closure1_slot11 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = options;
    options = function(argFoo) { // Original name: handleThreadCreate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zulu = entity.channel;
            entity = entity.isNewlyCreated;
            mike = !entity;
            entity = !mike;
            if(mike) { _fun00008_ip = 75; continue _fun00007 }
 23:
            oscar = _closure1_slot7;
            report = oscar.hasLoaded;
            mike = zulu.guild_id;
            mike = report.bind(oscar)(mike);
            report = !mike;
            mike = !report;
            if(report) { _fun00008_ip = 72; continue _fun00007 }
 55:
            report = _closure1_slot10;
            tango = zulu.id;
            zulu = 0;
            report[tango] = zulu;
            mike = undefined;
 72:
            entity = mike;
 75:
            return entity;
        }
    };
    mike['THREAD_CREATE'] = options;
    options = function(argFoo) { // Original name: handleMessageCreate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            oscar = mike.channelId;
            entity = mike.optimistic;
            mike = mike.isPushNotification;
            entity = !entity;
            if(!entity) { _fun00010_ip = 29; continue _fun00009 }
 26:
            entity = !mike;
 29:
            if(!entity) { _fun00010_ip = 69; continue _fun00009 }
 32:
            mike = _closure1_slot10;
            mike = oscar in mike;
            if(!mike) { _fun00010_ip = 66; continue _fun00009 }
 46:
            report = _closure1_slot10;
            zulu = report[oscar];
            zulu = parseFloat(zulu);
            tango = zulu + 1;
            report[oscar] = tango;
            mike = undefined;
 66:
            entity = mike;
 69:
            return entity;
        }
    };
    mike['MESSAGE_CREATE'] = options;
    options = function(argFoo) { // Original name: handleForumUnreads
        entity = argFoo;
        zulu = entity.threads;
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                zulu = entity.count;
                mike = null;
                if(!(mike != zulu)) { _fun00012_ip = 36; continue _fun00011 }
 14:
                zulu = _closure1_slot10;
                mike = entity.threadId;
                entity = entity.count;
                zulu[mike] = entity;
 36:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['FORUM_UNREADS'] = options;
    options = function(argFoo) { // Original name: handleMessageAck
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            mike = _closure1_slot10;
            mike = zulu in mike;
            if(mike) { _fun00014_ip = 84; continue _fun00013 }
 22:
            oscar = _closure1_slot8;
            mike = oscar.getChannel;
            golf = mike.bind(oscar)(zulu);
            report = oscar.getChannel;
            mike = null;
            options = mike == golf;
            tango = undefined;
            if(options) { _fun00014_ip = 58; continue _fun00013 }
 52:
            tango = golf.parent_id;
 58:
            tango = report.bind(oscar)(tango);
            if(!(mike != tango)) { _fun00014_ip = 80; continue _fun00013 }
 67:
            mike = tango.isForumLikeChannel;
            mike = mike.bind(tango)();
            if(mike) { _fun00014_ip = 84; continue _fun00013 }
 80:
            mike = false;
            return mike;
 84:
            mike = _closure1_slot10;
            tango = _closure1_slot9;
            entity = tango.getUnreadCount;
            entity = entity.bind(tango)(zulu);
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        }
    };
    mike['MESSAGE_ACK'] = options;
    tango = function(argFoo) { // Original name: handleRequestForumUnreads
        entity = argFoo;
        zulu = entity.threads;
        mike = zulu.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            zulu = entity.threadId;
            mike = _closure1_slot11;
            entity = mike.add;
            entity = entity.bind(mike)(zulu);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['REQUEST_FORUM_UNREADS'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[golf](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/ForumPostUnreadCountStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();