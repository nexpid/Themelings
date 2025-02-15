// app/modules/replies/PendingReplyStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
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
            report = _closure1_slot3;
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
    entity = function(argFoo) { // Original name: tryHydratePendingReply
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            zulu = null;
            if(!(zulu != mike)) { _fun00006_ip = 114; continue _fun00005 }
 9:
            tango = _closure1_slot7;
            report = tango[mike];
            if(!(zulu != report)) { _fun00006_ip = 110; continue _fun00005 }
 24:
            golf = _closure1_slot5;
            oscar = golf.getMessage;
            tango = report.messageId;
            oscar = oscar.bind(golf)(mike, tango);
            if(!(zulu != oscar)) { _fun00006_ip = 106; continue _fun00005 }
 49:
            tango = _closure1_slot6;
            zulu = {};
            golf = report.channel;
            zulu['channel'] = golf;
            zulu['message'] = oscar;
            oscar = report.shouldMention;
            zulu['shouldMention'] = oscar;
            report = report.showMentionToggle;
            zulu['showMentionToggle'] = report;
            tango[mike] = zulu;
            entity = _closure1_slot7;
            entity = delete entity[mike];
            entity = undefined;
            return entity;
 106:
            entity = false;
            return entity;
 110:
            entity = false;
            return entity;
 114:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    options = function() { // Original name: resetState
        entity = {};
        _closure1_slot6 = entity;
        entity = {};
        _closure1_slot7 = entity;
        entity = {};
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = {};
    var _closure1_slot6 = mike;
    mike = {};
    var _closure1_slot7 = mike;
    mike = {};
    var _closure1_slot8 = mike;
    mike = 6;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: PendingReplyStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot9;
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = this;
            mike = zulu.waitFor;
            entity = _closure1_slot5;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'getPendingReply';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot6;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getPendingReplyActionSource';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = _closure1_slot8;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'PendingReplyStore';
    golf['displayName'] = mike;
    mike = 7;
    mike = report[mike];
    romeo = oscar.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleCreatePendingReply
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            mike = zulu.channel;
            offset = zulu.message;
            verify = zulu.shouldMention;
            entity = undefined;
            if(!(verify === entity)) { _fun00008_ip = 27; continue _fun00007 }
 25:
            verify = true;
 27:
            options = zulu.showMentionToggle;
            if(!(options === entity)) { _fun00008_ip = 39; continue _fun00007 }
 37:
            options = true;
 39:
            tango = zulu.source;
            golf = _closure1_slot6;
            oscar = mike.id;
            report = {};
            report['channel'] = mike;
            report['message'] = offset;
            report['shouldMention'] = verify;
            report['showMentionToggle'] = options;
            golf[oscar] = report;
            zulu = _closure1_slot8;
            mike = mike.id;
            zulu[mike] = tango;
            return entity;
        }
    };
    mike['CREATE_PENDING_REPLY'] = verify;
    verify = function(argFoo) { // Original name: handleCreateShallowPendingReply
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            options = mike.channel;
            golf = mike.messageId;
            oscar = mike.shouldMention;
            entity = undefined;
            if(!(oscar === entity)) { _fun00010_ip = 27; continue _fun00009 }
 25:
            oscar = true;
 27:
            report = mike.showMentionToggle;
            if(!(report === entity)) { _fun00010_ip = 39; continue _fun00009 }
 37:
            report = true;
 39:
            tango = _closure1_slot7;
            zulu = options.id;
            mike = {};
            mike['channel'] = options;
            mike['messageId'] = golf;
            mike['shouldMention'] = oscar;
            mike['showMentionToggle'] = report;
            tango[zulu] = mike;
            return entity;
        }
    };
    mike['CREATE_SHALLOW_PENDING_REPLY'] = verify;
    verify = function(argFoo) { // Original name: handleSetPendingReplyShouldMention
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            report = entity.shouldMention;
            mike = _closure1_slot6;
            mike = zulu in mike;
            if(!mike) { _fun00012_ip = 58; continue _fun00011 }
 28:
            tango = _closure1_slot6;
            mike = {};
            golf = tango[zulu];
            options = mike;
            oscar = copyDataProperties(options, golf);
            oscar = 'shouldMention';
            mike[oscar] = report;
            tango[zulu] = mike;
 58:
            mike = _closure1_slot7;
            mike = zulu in mike;
            if(!mike) { _fun00012_ip = 99; continue _fun00011 }
 69:
            mike = _closure1_slot7;
            entity = {};
            golf = mike[zulu];
            options = entity;
            tango = copyDataProperties(options, golf);
            tango = 'shouldMention';
            entity[tango] = report;
            mike[zulu] = entity;
 99:
            entity = undefined;
            return entity;
        }
    };
    mike['SET_PENDING_REPLY_SHOULD_MENTION'] = verify;
    verify = function(argFoo) { // Original name: handleDeletePendingReply
        entity = argFoo;
        mike = entity.channelId;
        zulu = _closure1_slot6;
        zulu = delete zulu[mike];
        entity = _closure1_slot7;
        entity = delete entity[mike];
        entity = undefined;
        return entity;
    };
    mike['DELETE_PENDING_REPLY'] = verify;
    mike['CONNECTION_OPEN'] = options;
    mike['LOGOUT'] = options;
    options = function(argFoo) { // Original name: handleMessageDelete
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            report = entity.id;
            zulu = entity.channelId;
            entity = _closure1_slot6;
            golf = entity[zulu];
            tango = null;
            options = tango == golf;
            entity = undefined;
            oscar = undefined;
            if(options) { _fun00014_ip = 56; continue _fun00013 }
 37:
            golf = golf.message;
            options = tango == golf;
            oscar = undefined;
            if(options) { _fun00014_ip = 56; continue _fun00013 }
 51:
            oscar = golf.id;
 56:
            if(!(oscar !== report)) { _fun00014_ip = 108; continue _fun00013 }
 60:
            oscar = _closure1_slot7;
            oscar = oscar[zulu];
            golf = tango == oscar;
            tango = undefined;
            if(golf) { _fun00014_ip = 82; continue _fun00013 }
 77:
            tango = oscar.messageId;
 82:
            if(!(tango === report)) { _fun00014_ip = 104; continue _fun00013 }
 86:
            tango = _closure1_slot7;
            tango = delete tango[zulu];
            tango = _closure1_slot8;
            tango = delete tango[zulu];
            _fun00014_ip = 124; continue _fun00013;
 104:
            tango = false;
            return tango;
 108:
            tango = _closure1_slot6;
            tango = delete tango[zulu];
            mike = _closure1_slot8;
            mike = delete mike[zulu];
 124:
            return entity;
        }
    };
    mike['MESSAGE_DELETE'] = options;
    options = function(argFoo) { // Original name: handleChannelSelect
        entity = argFoo;
        zulu = entity.channelId;
        mike = _closure1_slot11;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['CHANNEL_SELECT'] = options;
    tango = function(argFoo) { // Original name: handleLoadMessagesSuccess
        entity = argFoo;
        zulu = entity.channelId;
        mike = _closure1_slot11;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['LOAD_MESSAGES_SUCCESS'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[golf](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/replies/PendingReplyStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();