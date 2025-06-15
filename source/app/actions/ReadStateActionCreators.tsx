// app/actions/ReadStateActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = option;
    report = function(argFoo, argBar) { // Original name: ack
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = arguments[2];
            oscard = arguments[3];
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
            option = arguments[4];
            michal['messageId'] = option;
            michal['immediate'] = golfie;
            michal['force'] = oscard;
            report = _closure1_slot7;
            michal['context'] = report;
            report = argBar;
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tangon = function(argFoo, argBar) { // Original name: ackCategory
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            option = argBar;
            golfie = arguments[2];
            oscard = arguments[3];
            entity = undefined;
            if(!(golfie === entity)) { _fun00004_ip = 22; continue _fun00003 }
 20:
            golfie = false;
 22:
            if(!(oscard === entity)) { _fun00004_ip = 28; continue _fun00003 }
 26:
            oscard = false;
 28:
            var _closure2_slot0 = entity;
            var _closure2_slot1 = entity;
            verify = _closure1_slot4;
            zuuluu = verify.getChannel;
            zuuluu = zuuluu.bind(verify)(tangon);
            _closure2_slot0 = zuuluu;
            offset = null;
            if(!(offset != zuuluu)) { _fun00004_ip = 224; continue _fun00003 }
 66:
            verify = zuuluu.guild_id;
            if(!(offset != verify)) { _fun00004_ip = 224; continue _fun00003 }
 78:
            yankee = _closure1_slot5;
            verify = yankee.getCategories;
            zuuluu = zuuluu.guild_id;
            zuuluu = verify.bind(yankee)(zuuluu);
            verify = zuuluu[tangon];
            if(!(offset != verify)) { _fun00004_ip = 224; continue _fun00003 }
 106:
            verify = zuuluu[tangon];
            tangon = verify.filter;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                zuuluu = _closure1_slot3;
                michal = entity.type;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            verify = tangon.bind(verify)(zuuluu);
            tangon = verify.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                entity = entity.id;
                return entity;
            };
            offset = tangon.bind(verify)(zuuluu);
            tangon = new Array(0);
            zuuluu = 0;
            kiloes = tangon;
            backup = offset;
            foxtra = 0;
            verify = arraySpread(kiloes, backup, foxtra);
            _closure2_slot1 = tangon;
            verify = offset.forEach;
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
            michal = verify.bind(offset)(michal);
            michal = tangon.length;
            michal = zuuluu < michal;
            if(!michal) { _fun00004_ip = 224; continue _fun00003 }
 189:
            verify = _closure1_slot8;
            kiloes = tangon[zuuluu];
            sizing = undefined;
            backup = option;
            foxtra = golfie;
            romeon = oscard;
            michal = sizing[verify](kiloes, backup, foxtra, romeon, yankee);
            zuuluu = zuuluu + 1;
            michal = tangon.length;
            if(zuuluu < michal) { _fun00004_ip = 189; continue _fun00003 }
 224:
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
    tangon = function(argFoo, argBar) { // Original name: ackChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = argBar;
            michal = entity.isCategory;
            zuuluu = michal.bind(entity)();
            if(zuuluu) { _fun00008_ip = 130; continue _fun00007 }
 22:
            zuuluu = entity.isForumLikeChannel;
            zuuluu = zuuluu.bind(entity)();
            option = _closure1_slot8;
            golfie = entity.id;
            if(zuuluu) { _fun00008_ip = 62; continue _fun00007 }
 44:
            sizing = undefined;
            kiloes = golfie;
            backup = report;
            foxtra = true;
            romeon = true;
            zuuluu = sizing[option](kiloes, backup, foxtra, romeon, yankee);
            _fun00008_ip = 152; continue _fun00007;
 62:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 7;
            zuuluu = oscard[zuuluu];
            oscard = undefined;
            verify = tangon.bind(oscard)(zuuluu);
            tangon = verify.fromTimestamp;
            zuuluu = global;
            offset = zuuluu.Date;
            zuuluu = offset.now;
            zuuluu = zuuluu.bind(offset)();
            yankee = tangon.bind(verify)(zuuluu);
            sizing = undefined;
            kiloes = golfie;
            backup = report;
            foxtra = true;
            romeon = true;
            zuuluu = sizing[option](kiloes, backup, foxtra, romeon, yankee, offset);
            _fun00008_ip = 152; continue _fun00007;
 130:
            tangon = _closure1_slot9;
            kiloes = entity.id;
            sizing = undefined;
            backup = report;
            foxtra = true;
            romeon = true;
            entity = sizing[tangon](kiloes, backup, foxtra, romeon, yankee);
 152:
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