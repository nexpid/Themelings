// app/modules/messages/native/MessageSendFailureNotificationManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun127761: for(var _fun127761_ip = 0; ; ) switch(_fun127761_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot16;
            entity = entity.bind(zulu)();
            if(entity) { _fun127761_ip = 51; continue _fun127761 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun127761_ip = 92; continue _fun127761;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun127761_ip = 71; continue _fun127761 }
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
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun127762: for(var _fun127762_ip = 0; ; ) switch(_fun127762_ip) {
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
            _fun127762_ip = 76; continue _fun127762;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: handleMessageSendFailure
        _fun127765: for(var _fun127765_ip = 0; ; ) switch(_fun127765_ip) {
 0:
            entity = argFoo;
            golf = entity.channelId;
            oscar = entity.messageId;
            entity = entity.shouldNotify;
            if(!entity) { _fun127765_ip = 369; continue _fun127765 }
 25:
            mike = _closure1_slot11;
            entity = mike.getState;
            mike = entity.bind(mike)();
            entity = 'active';
            if(!(entity === mike)) { _fun127765_ip = 192; continue _fun127765 }
 53:
            mike = _closure1_slot9;
            entity = mike.getGuildId;
            zulu = entity.bind(mike)();
            mike = _closure1_slot8;
            entity = mike.getChannelId;
            entity = entity.bind(mike)(zulu);
            if(!(golf !== entity)) { _fun127765_ip = 188; continue _fun127765 }
 86:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.enqueueNotification;
            entity = {};
            tango = _closure1_slot12;
            tango = tango.MESSAGE_FAILED_TO_SEND;
            entity['type'] = tango;
            entity['channelId'] = golf;
            entity['messageId'] = oscar;
            tango = '-';
            tango = golf + tango;
            tango = tango + oscar;
            entity['key'] = tango;
            tango = 5000;
            entity['duration'] = tango;
            tango = function() { // Original name: onDismiss
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 11;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.clearNotification;
                mike = mike.bind(zulu)();
                return entity;
            };
            entity['onDismiss'] = tango;
            entity = mike.bind(zulu)(entity);
            _fun127765_ip = 369; continue _fun127765;
 188:
            entity = undefined;
            return entity;
 192:
            mike = _closure1_slot1;
            romeo = _closure1_slot2;
            entity = 12;
            entity = romeo[entity];
            yankee = undefined;
            zulu = mike.bind(yankee)(entity);
            mike = zulu.presentLocalNotification;
            entity = {};
            tango = 'local';
            entity['category'] = tango;
            offset = _closure1_slot0;
            tango = 13;
            options = romeo[tango];
            options = offset.bind(yankee)(options);
            foxtrot = options.intl;
            verify = foxtrot.string;
            options = romeo[tango];
            options = offset.bind(yankee)(options);
            options = options.t;
            options = options.LdlH2N;
            options = verify.bind(foxtrot)(options);
            entity['alertTitle'] = options;
            options = romeo[tango];
            options = offset.bind(yankee)(options);
            verify = options.intl;
            options = verify.string;
            tango = romeo[tango];
            tango = offset.bind(yankee)(tango);
            tango = tango.t;
            tango = tango.xxRPOT;
            tango = options.bind(verify)(tango);
            entity['alertBody'] = tango;
            tango = {};
            tango['channelId'] = golf;
            tango['messageId'] = oscar;
            report = _closure1_slot14;
            report = report.MESSAGE_SEND_FAILED;
            tango['type'] = report;
            entity['userInfo'] = tango;
            entity = mike.bind(zulu)(entity);
 369:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: handleMessageCreate
        _fun127767: for(var _fun127767_ip = 0; ; ) switch(_fun127767_ip) {
 0:
            mike = argFoo;
            report = mike.message;
            var _closure2_slot0 = report;
            zulu = mike.sendMessageOptions;
            oscar = null;
            mike = oscar != zulu;
            if(!mike) { _fun127767_ip = 35; continue _fun127767 }
 29:
            mike = zulu.isHydratingExpiredPendingMessage;
 35:
            if(!mike) { _fun127767_ip = 60; continue _fun127767 }
 38:
            tango = report.state;
            zulu = _closure1_slot13;
            zulu = zulu.SEND_FAILED;
            mike = tango === zulu;
 60:
            if(!mike) { _fun127767_ip = 117; continue _fun127767 }
 63:
            tango = _closure1_slot10;
            zulu = tango.getCurrentUser;
            golf = zulu.bind(tango)();
            options = oscar == golf;
            zulu = undefined;
            if(options) { _fun127767_ip = 93; continue _fun127767 }
 88:
            zulu = golf.id;
 93:
            report = report.author;
            oscar = oscar == report;
            tango = undefined;
            if(oscar) { _fun127767_ip = 113; continue _fun127767 }
 108:
            tango = report.id;
 113:
            mike = zulu === tango;
 117:
            if(!mike) { _fun127767_ip = 149; continue _fun127767 }
 120:
            mike = global;
            tango = mike.setTimeout;
            zulu = undefined;
            mike = function() {
                zulu = _closure1_slot17;
                mike = {};
                entity = _closure2_slot0;
                tango = entity.channel_id;
                mike['channelId'] = tango;
                entity = entity.id;
                mike['messageId'] = entity;
                entity = true;
                mike['shouldNotify'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = 3000;
            entity = tango.bind(zulu)(mike, entity);
 149:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.InAppNotificationTypes;
    var _closure1_slot12 = options;
    tango = tango.MessageStates;
    var _closure1_slot13 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.LocalNotificationTypes;
    var _closure1_slot14 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: MessageSendFailureNotificationManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot4;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            mike = _closure1_slot15;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            mike = {};
            tango = _closure1_slot18;
            mike['MESSAGE_CREATE'] = tango;
            zulu = _closure1_slot17;
            mike['MESSAGE_SEND_FAILED'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/MessageSendFailureNotificationManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();