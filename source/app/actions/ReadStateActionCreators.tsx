// app/actions/ReadStateActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: ack
        _fun60069: for(var _fun60069_ip = 0; ; ) switch(_fun60069_ip) {
 0:
            golf = arguments[1];
            oscar = arguments[2];
            entity = undefined;
            if(!(golf === entity)) { _fun60069_ip = 14; continue _fun60069 }
 12:
            golf = false;
 14:
            if(!(oscar === entity)) { _fun60069_ip = 20; continue _fun60069 }
 18:
            oscar = false;
 20:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 6;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            options = 'CHANNEL_ACK';
            mike['type'] = options;
            options = argFoo;
            mike['channelId'] = options;
            options = arguments[3];
            mike['messageId'] = options;
            mike['immediate'] = golf;
            mike['force'] = oscar;
            report = _closure1_slot7;
            mike['context'] = report;
            report = arguments[4];
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tango = function(argFoo) { // Original name: ackCategory
        _fun60070: for(var _fun60070_ip = 0; ; ) switch(_fun60070_ip) {
 0:
            tango = argFoo;
            golf = arguments[1];
            oscar = arguments[2];
            entity = undefined;
            if(!(golf === entity)) { _fun60070_ip = 19; continue _fun60070 }
 17:
            golf = false;
 19:
            if(!(oscar === entity)) { _fun60070_ip = 25; continue _fun60070 }
 23:
            oscar = false;
 25:
            var _closure2_slot0 = entity;
            var _closure2_slot1 = entity;
            options = _closure1_slot4;
            zulu = options.getChannel;
            zulu = zulu.bind(options)(tango);
            _closure2_slot0 = zulu;
            verify = null;
            if(!(verify != zulu)) { _fun60070_ip = 213; continue _fun60070 }
 63:
            options = zulu.guild_id;
            if(!(verify != options)) { _fun60070_ip = 213; continue _fun60070 }
 75:
            offset = _closure1_slot5;
            options = offset.getCategories;
            zulu = zulu.guild_id;
            zulu = options.bind(offset)(zulu);
            options = zulu[tango];
            if(!(verify != options)) { _fun60070_ip = 213; continue _fun60070 }
 103:
            options = zulu[tango];
            tango = options.filter;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                zulu = _closure1_slot3;
                mike = entity.type;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            options = tango.bind(options)(zulu);
            tango = options.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                entity = entity.id;
                return entity;
            };
            verify = tango.bind(options)(zulu);
            tango = new Array(0);
            zulu = 0;
            foxtrot = tango;
            romeo = verify;
            yankee = 0;
            options = arraySpread(foxtrot, romeo, yankee);
            _closure2_slot1 = tango;
            options = verify.forEach;
            mike = function(argFoo) {
                _fun60073: for(var _fun60073_ip = 0; ; ) switch(_fun60073_ip) {
 0:
                    tango = _closure1_slot2;
                    zulu = tango.getActiveJoinedThreadsForParent;
                    entity = _closure2_slot0;
                    mike = entity.guild_id;
                    entity = argFoo;
                    entity = zulu.bind(tango)(mike, entity);
                    tango = entity;
                    for(entity in tango)
 45:
                    {
 54:
                        verify = entity;
                        options = _closure2_slot1;
                        golf = options.push;
                        golf = golf.bind(options)(verify);
                        _fun60073_ip = 45; continue _fun60073;
                    }
 73:
                    entity = undefined;
                    return entity;
                }
            };
            mike = options.bind(verify)(mike);
            mike = tango.length;
            mike = zulu < mike;
            if(!mike) { _fun60070_ip = 213; continue _fun60070 }
 186:
            options = _closure1_slot8;
            mike = tango[zulu];
            mike = options.bind(entity)(mike, golf, oscar);
            zulu = zulu + 1;
            mike = tango.length;
            if(zulu < mike) { _fun60070_ip = 186; continue _fun60070 }
 213:
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.isReadableType;
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.CURRENT_APP_CONTEXT;
    var _closure1_slot7 = oscar;
    oscar = 8;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'actions/ReadStateActionCreators.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['ack'] = report;
    zulu['ackCategory'] = tango;
    tango = function(argFoo) { // Original name: ackChannel
        _fun60074: for(var _fun60074_ip = 0; ; ) switch(_fun60074_ip) {
 0:
            entity = argFoo;
            mike = entity.isCategory;
            zulu = mike.bind(entity)();
            if(zulu) { _fun60074_ip = 119; continue _fun60074 }
 19:
            zulu = entity.isForumLikeChannel;
            zulu = zulu.bind(entity)();
            golf = _closure1_slot8;
            oscar = entity.id;
            if(zulu) { _fun60074_ip = 54; continue _fun60074 }
 41:
            tango = undefined;
            zulu = true;
            zulu = golf.bind(tango)(oscar, zulu, zulu);
            _fun60074_ip = 139; continue _fun60074;
 54:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 7;
            zulu = report[zulu];
            report = undefined;
            options = tango.bind(report)(zulu);
            tango = options.fromTimestamp;
            zulu = global;
            verify = zulu.Date;
            zulu = verify.now;
            zulu = zulu.bind(verify)();
            offset = tango.bind(options)(zulu);
            backup = undefined;
            foxtrot = oscar;
            romeo = true;
            yankee = true;
            zulu = backup[golf](foxtrot, romeo, yankee, offset, verify);
            _fun60074_ip = 139; continue _fun60074;
 119:
            tango = _closure1_slot9;
            zulu = entity.id;
            mike = undefined;
            entity = true;
            entity = tango.bind(mike)(zulu, entity, entity);
 139:
            entity = undefined;
            return entity;
        }
    };
    zulu['ackChannel'] = tango;
    tango = function(argFoo, argBar) { // Original name: bulkAck
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'BULK_ACK';
        mike['type'] = oscar;
        oscar = argFoo;
        mike['channels'] = oscar;
        report = _closure1_slot7;
        mike['context'] = report;
        report = argBar;
        mike['onFinished'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['bulkAck'] = tango;
    tango = function(argFoo) { // Original name: localAck
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_LOCAL_ACK';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['localAck'] = tango;
    tango = function(argFoo, argBar) { // Original name: enableAutomaticAck
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'ENABLE_AUTOMATIC_ACK';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['windowId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['enableAutomaticAck'] = tango;
    tango = function(argFoo, argBar) { // Original name: disableAutomaticAck
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'DISABLE_AUTOMATIC_ACK';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        report = argBar;
        mike['windowId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['disableAutomaticAck'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: ackGuildFeature
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_FEATURE_ACK';
        mike['type'] = report;
        report = argFoo;
        mike['id'] = report;
        report = argBar;
        mike['ackType'] = report;
        report = argBaz;
        mike['ackedId'] = report;
        report = false;
        mike['local'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['ackGuildFeature'] = tango;
    tango = function(argFoo, argBar) { // Original name: ackUserFeature
        _fun60080: for(var _fun60080_ip = 0; ; ) switch(_fun60080_ip) {
 0:
            zulu = _closure1_slot6;
            entity = zulu.getCurrentUser;
            report = entity.bind(zulu)();
            tango = null;
            oscar = tango == report;
            entity = undefined;
            zulu = undefined;
            if(oscar) { _fun60080_ip = 34; continue _fun60080 }
 29:
            zulu = report.id;
 34:
            if(!(tango != zulu)) { _fun60080_ip = 101; continue _fun60080 }
 38:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 6;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'USER_NON_CHANNEL_ACK';
            mike['type'] = report;
            report = argFoo;
            mike['ackType'] = report;
            report = argBar;
            mike['ackedId'] = report;
            report = false;
            mike['local'] = report;
            mike = zulu.bind(tango)(mike);
 101:
            return entity;
        }
    };
    zulu['ackUserFeature'] = tango;
    mike = function(argFoo) { // Original name: clearOldestUnreadMessageId
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CLEAR_OLDEST_UNREAD_MESSAGE';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearOldestUnreadMessageId'] = mike;
    return entity;
})();