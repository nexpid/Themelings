// app/modules/push_feedback/PushFeedbackStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun89925: for(var _fun89925_ip = 0; ; ) switch(_fun89925_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot9;
            entity = entity.bind(zulu)();
            if(entity) { _fun89925_ip = 51; continue _fun89925 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun89925_ip = 92; continue _fun89925;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun89925_ip = 71; continue _fun89925 }
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
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun89926: for(var _fun89926_ip = 0; ; ) switch(_fun89926_ip) {
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
            _fun89926_ip = 76; continue _fun89926;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    var _closure1_slot0 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.NotificationTypes;
    var _closure1_slot5 = mike;
    mike = null;
    var _closure1_slot6 = mike;
    mike = {};
    var _closure1_slot7 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: PushFeedbackStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot8;
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
        entity = function(argFoo) { // Original name: value
            _fun89931: for(var _fun89931_ip = 0; ; ) switch(_fun89931_ip) {
 0:
                entity = argFoo;
                tango = null;
                if(!(tango != entity)) { _fun89931_ip = 42; continue _fun89931 }
 9:
                zulu = entity.pushFeedback;
                _closure1_slot6 = zulu;
                zulu = entity.pushFeedbackMap;
                if(!(tango != zulu)) { _fun89931_ip = 42; continue _fun89931 }
 32:
                entity = entity.pushFeedbackMap;
                _closure1_slot7 = entity;
 42:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            zulu = _closure1_slot6;
            entity['pushFeedback'] = zulu;
            mike = _closure1_slot7;
            entity['pushFeedbackMap'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'isEligible';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot6;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'isUserPushMessage';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun89934: for(var _fun89934_ip = 0; ; ) switch(_fun89934_ip) {
 0:
                entity = _closure1_slot6;
                mike = null;
                zulu = mike == entity;
                mike = undefined;
                if(zulu) { _fun89934_ip = 23; continue _fun89934 }
 18:
                mike = entity.messageId;
 23:
                entity = argFoo;
                entity = mike === entity;
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getPushFeedback';
        report['key'] = golf;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun89935: for(var _fun89935_ip = 0; ; ) switch(_fun89935_ip) {
 0:
                entity = _closure1_slot6;
                report = null;
                zulu = report == entity;
                tango = undefined;
                if(zulu) { _fun89935_ip = 23; continue _fun89935 }
 18:
                tango = entity.messageId;
 23:
                zulu = argBar;
                entity = null;
                if(!(tango === zulu)) { _fun89935_ip = 54; continue _fun89935 }
 32:
                zulu = _closure1_slot6;
                tango = zulu.channelId;
                zulu = argFoo;
                entity = null;
                if(!(tango === zulu)) { _fun89935_ip = 54; continue _fun89935 }
 50:
                entity = _closure1_slot6;
 54:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'PushFeedbackStore';
    options['displayName'] = mike;
    mike = 'PushFeedbackPersistedStore';
    options['persistKey'] = mike;
    mike = 7;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleReceivedNotification
        _fun89936: for(var _fun89936_ip = 0; ; ) switch(_fun89936_ip) {
 0:
            entity = argFoo;
            zulu = entity.notificationType;
            oscar = entity.messageId;
            report = entity.channelId;
            mike = _closure1_slot5;
            mike = mike.TOP_MESSAGE_PUSH;
            if(!(mike !== zulu)) { _fun89936_ip = 52; continue _fun89936 }
 36:
            mike = _closure1_slot5;
            tango = mike.TRENDING_CONTENT_PUSH;
            mike = false;
            if(!(tango === zulu)) { _fun89936_ip = 54; continue _fun89936 }
 52:
            mike = true;
 54:
            if(!mike) { _fun89936_ip = 232; continue _fun89936 }
 60:
            mike = _closure1_slot7;
            tango = mike[zulu];
            mike = null;
            if(!(mike == tango)) { _fun89936_ip = 92; continue _fun89936 }
 74:
            golf = {};
            golf['messageId'] = oscar;
            golf['channelId'] = report;
            golf['pushType'] = zulu;
            tango = golf;
 92:
            tango = tango.userViewInfo;
            if(!(mike == tango)) { _fun89936_ip = 112; continue _fun89936 }
 102:
            tango = {'eligibleAt': 0, 'viewCount': 0};
 112:
            verify = tango.eligibleAt;
            golf = tango.viewCount;
            tango = global;
            options = tango.Date;
            tango = options.now;
            offset = tango.bind(options)();
            if(!(!(verify < offset))) { _fun89936_ip = 162; continue _fun89936 }
 145:
            tango = 10;
            options = golf < tango;
            tango = null;
            if(!options) { _fun89936_ip = 190; continue _fun89936 }
 157:
            options = golf + 1;
            _fun89936_ip = 175; continue _fun89936;
 162:
            golf = 604800000;
            verify = offset + golf;
            options = 1;
 175:
            golf = {};
            golf['eligibleAt'] = verify;
            golf['viewCount'] = options;
            tango = golf;
 190:
            if(!(mike == tango)) { _fun89936_ip = 200; continue _fun89936 }
 194:
            _closure1_slot6 = mike;
            _fun89936_ip = 232; continue _fun89936;
 200:
            mike = {};
            mike['messageId'] = oscar;
            mike['channelId'] = report;
            mike['pushType'] = zulu;
            mike['userViewInfo'] = tango;
            _closure1_slot6 = mike;
            entity = _closure1_slot7;
            entity[zulu] = mike;
 232:
            entity = undefined;
            return entity;
        }
    };
    mike['PUSH_FEEDBACK_RECEIVED_NOTIFICATION'] = verify;
    verify = function() { // Original name: handleCleanup
        entity = null;
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    mike['PUSH_FEEDBACK_CLEANUP'] = verify;
    tango = function(argFoo) { // Original name: handleChannelSelect
        _fun89938: for(var _fun89938_ip = 0; ; ) switch(_fun89938_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            mike = null;
            if(!(mike != tango)) { _fun89938_ip = 46; continue _fun89938 }
 14:
            zulu = _closure1_slot6;
            if(!(mike != zulu)) { _fun89938_ip = 46; continue _fun89938 }
 25:
            zulu = _closure1_slot6;
            zulu = zulu.channelId;
            if(!(tango !== zulu)) { _fun89938_ip = 42; continue _fun89938 }
 38:
            _closure1_slot6 = mike;
 42:
            entity = undefined;
            return entity;
 46:
            entity = false;
            return entity;
        }
    };
    mike['CHANNEL_SELECT'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/push_feedback/PushFeedbackStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();