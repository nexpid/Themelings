// app/actions/ReadStateActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: ack
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = arguments[1];
            oscard = arguments[2];
            entity = undefined;
            if(!(golfie === entity)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            golfie = false;
 14:
            if(!(oscard === entity)) { _fun00002_ip = 20; continue _fun00001 }
 18:
            oscard = false;
 20:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 6;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            option = 'CHANNEL_ACK';
            michal['type'] = option;
            option = argFoo;
            michal['channelId'] = option;
            option = arguments[3];
            michal['messageId'] = option;
            michal['immediate'] = golfie;
            michal['force'] = oscard;
            report = _closure1_slot7;
            michal['context'] = report;
            report = arguments[4];
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tangon = function(argFoo) { // Original name: ackCategory
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            golfie = arguments[1];
            oscard = arguments[2];
            entity = undefined;
            if(!(golfie === entity)) { _fun00004_ip = 19; continue _fun00003 }
 17:
            golfie = false;
 19:
            if(!(oscard === entity)) { _fun00004_ip = 25; continue _fun00003 }
 23:
            oscard = false;
 25:
            var _closure2_slot0 = entity;
            var _closure2_slot1 = entity;
            option = _closure1_slot4;
            zuuluu = option.getChannel;
            zuuluu = zuuluu.bind(option)(tangon);
            _closure2_slot0 = zuuluu;
            verify = null;
            if(!(verify != zuuluu)) { _fun00004_ip = 213; continue _fun00003 }
 63:
            option = zuuluu.guild_id;
            if(!(verify != option)) { _fun00004_ip = 213; continue _fun00003 }
 75:
            offset = _closure1_slot5;
            option = offset.getCategories;
            zuuluu = zuuluu.guild_id;
            zuuluu = option.bind(offset)(zuuluu);
            option = zuuluu[tangon];
            if(!(verify != option)) { _fun00004_ip = 213; continue _fun00003 }
 103:
            option = zuuluu[tangon];
            tangon = option.filter;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                zuuluu = _closure1_slot3;
                michal = entity.type;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            option = tangon.bind(option)(zuuluu);
            tangon = option.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                entity = entity.id;
                return entity;
            };
            verify = tangon.bind(option)(zuuluu);
            tangon = new Array(0);
            zuuluu = 0;
            foxtra = tangon;
            romeon = verify;
            yankee = 0;
            option = arraySpread(foxtra, romeon, yankee);
            _closure2_slot1 = tangon;
            option = verify.forEach;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot2;
                    zuuluu = tangon.getActiveJoinedThreadsForParent;
                    entity = _closure2_slot0;
                    michal = entity.guild_id;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    tangon = entity;
                    for(entity in tangon)
 45:
                    {
 54:
                        verify = entity;
                        option = _closure2_slot1;
                        golfie = option.push;
                        golfie = golfie.bind(option)(verify);
                        _fun00006_ip = 45; continue _fun00005;
                    }
 73:
                    entity = undefined;
                    return entity;
                }
            };
            michal = option.bind(verify)(michal);
            michal = tangon.length;
            michal = zuuluu < michal;
            if(!michal) { _fun00004_ip = 213; continue _fun00003 }
 186:
            option = _closure1_slot8;
            michal = tangon[zuuluu];
            michal = option.bind(entity)(michal, golfie, oscard);
            zuuluu = zuuluu + 1;
            michal = tangon.length;
            if(zuuluu < michal) { _fun00004_ip = 186; continue _fun00003 }
 213:
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.isReadableType;
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.CURRENT_APP_CONTEXT;
    var _closure1_slot7 = oscard;
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'actions/ReadStateActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['ack'] = report;
    zuuluu['ackCategory'] = tangon;
    tangon = function(argFoo) { // Original name: ackChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = entity.isCategory;
            zuuluu = michal.bind(entity)();
            if(zuuluu) { _fun00008_ip = 119; continue _fun00007 }
 19:
            zuuluu = entity.isForumLikeChannel;
            zuuluu = zuuluu.bind(entity)();
            golfie = _closure1_slot8;
            oscard = entity.id;
            if(zuuluu) { _fun00008_ip = 54; continue _fun00007 }
 41:
            tangon = undefined;
            zuuluu = true;
            zuuluu = golfie.bind(tangon)(oscard, zuuluu, zuuluu);
            _fun00008_ip = 139; continue _fun00007;
 54:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 7;
            zuuluu = report[zuuluu];
            report = undefined;
            option = tangon.bind(report)(zuuluu);
            tangon = option.fromTimestamp;
            zuuluu = global;
            verify = zuuluu.Date;
            zuuluu = verify.now;
            zuuluu = zuuluu.bind(verify)();
            offset = tangon.bind(option)(zuuluu);
            backup = undefined;
            foxtra = oscard;
            romeon = true;
            yankee = true;
            zuuluu = backup[golfie](foxtra, romeon, yankee, offset, verify);
            _fun00008_ip = 139; continue _fun00007;
 119:
            tangon = _closure1_slot9;
            zuuluu = entity.id;
            michal = undefined;
            entity = true;
            entity = tangon.bind(michal)(zuuluu, entity, entity);
 139:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['ackChannel'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: bulkAck
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'BULK_ACK';
        michal['type'] = oscard;
        oscard = argFoo;
        michal['channels'] = oscard;
        report = _closure1_slot7;
        michal['context'] = report;
        report = argBar;
        michal['onFinished'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['bulkAck'] = tangon;
    tangon = function(argFoo) { // Original name: localAck
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CHANNEL_LOCAL_ACK';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['localAck'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: enableAutomaticAck
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'ENABLE_AUTOMATIC_ACK';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBar;
        michal['windowId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['enableAutomaticAck'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: disableAutomaticAck
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'DISABLE_AUTOMATIC_ACK';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        report = argBar;
        michal['windowId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['disableAutomaticAck'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: ackGuildFeature
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_FEATURE_ACK';
        michal['type'] = report;
        report = argFoo;
        michal['id'] = report;
        report = argBar;
        michal['ackType'] = report;
        report = argBaz;
        michal['ackedId'] = report;
        report = false;
        michal['local'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['ackGuildFeature'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: ackUserFeature
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot6;
            entity = zuuluu.getCurrentUser;
            report = entity.bind(zuuluu)();
            tangon = null;
            oscard = tangon == report;
            entity = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00010_ip = 34; continue _fun00009 }
 29:
            zuuluu = report.id;
 34:
            if(!(tangon != zuuluu)) { _fun00010_ip = 101; continue _fun00009 }
 38:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 6;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'USER_NON_CHANNEL_ACK';
            michal['type'] = report;
            report = argFoo;
            michal['ackType'] = report;
            report = argBar;
            michal['ackedId'] = report;
            report = false;
            michal['local'] = report;
            michal = zuuluu.bind(tangon)(michal);
 101:
            return entity;
        }
    };
    zuuluu['ackUserFeature'] = tangon;
    michal = function(argFoo) { // Original name: clearOldestUnreadMessageId
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CLEAR_OLDEST_UNREAD_MESSAGE';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearOldestUnreadMessageId'] = michal;
    return entity;
})();