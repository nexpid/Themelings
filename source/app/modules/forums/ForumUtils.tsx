// app/modules/forums/ForumUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo, argBar) { // Original name: getForumPostReadStates
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = arguments[2];
            report = undefined;
            if(!(tangon === report)) { _fun00002_ip = 30; continue _fun00001 }
 12:
            michal = _closure1_slot4;
            entity = new Array(1);
            entity[0] = michal;
            tangon = entity;
 30:
            michal = tangon;
            entity = michal[Symbol.iterator];
            michal = entity().next;
            tangon = michal().value;
            michal = entity;
            michal = michal === report;
            report = undefined;
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 52:
            report = tangon;
 55:
            if(michal) { _fun00002_ip = 61; continue _fun00001 }
 58:
            entity.return();
 61:
            entity = {};
            michal = zuuluu.isArchivedThread;
            michal = michal.bind(zuuluu)();
            michal = !michal;
            if(!michal) { _fun00002_ip = 106; continue _fun00001 }
 79:
            option = report.isNewForumThread;
            golfie = zuuluu.id;
            oscard = zuuluu.parent_id;
            tangon = argBar;
            michal = option.bind(report)(golfie, oscard, tangon);
 106:
            entity['isNew'] = michal;
            michal = zuuluu.isArchivedThread;
            michal = michal.bind(zuuluu)();
            michal = !michal;
            if(!michal) { _fun00002_ip = 143; continue _fun00001 }
 127:
            tangon = report.isForumPostUnread;
            zuuluu = zuuluu.id;
            michal = tangon.bind(report)(zuuluu);
 143:
            entity['hasUnreads'] = michal;
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ForumTimestampFormats;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ChannelFlags;
    var _closure1_slot6 = report;
    report = function() { // Original name: getCreationDefaultFormatter
        entity = {};
        oscard = _closure1_slot0;
        golfie = _closure1_slot1;
        michal = 5;
        zuuluu = golfie[michal];
        report = undefined;
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.nFt9cn;
        entity['minutes'] = zuuluu;
        zuuluu = golfie[michal];
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.jzCewc;
        entity['hours'] = zuuluu;
        zuuluu = golfie[michal];
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.U4I0s7;
        entity['days'] = zuuluu;
        zuuluu = golfie[michal];
        zuuluu = oscard.bind(report)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.string;
        michal = golfie[michal];
        michal = oscard.bind(report)(michal);
        michal = michal.t;
        michal = michal.nBNJ/P;
        michal = zuuluu.bind(tangon)(michal);
        entity['month'] = michal;
        return entity;
    };
    var _closure1_slot7 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/forums/ForumUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getForumPostReadStates'] = tangon;
    tangon = function(argFoo) { // Original name: getForumPostReadStatesById
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = arguments[1];
            golfie = undefined;
            if(!(michal === golfie)) { _fun00004_ip = 43; continue _fun00003 }
 9:
            tangon = _closure1_slot2;
            entity = new Array(3);
            entity[0] = tangon;
            tangon = _closure1_slot3;
            entity[1] = tangon;
            zuuluu = _closure1_slot4;
            entity[2] = zuuluu;
            michal = entity;
 43:
            report = michal;
            entity = report[Symbol.iterator];
            report = entity().next;
            tangon = report().value;
            michal = entity;
            michal = michal === golfie;
            zuuluu = undefined;
            if(michal) { _fun00004_ip = 68; continue _fun00003 }
 65:
            zuuluu = tangon;
 68:
            tangon = undefined;
            if(michal) { _fun00004_ip = 98; continue _fun00003 }
 73:
            option = report().value;
            oscard = entity;
            oscard = oscard === golfie;
            tangon = undefined;
            michal = oscard;
            if(oscard) { _fun00004_ip = 98; continue _fun00003 }
 92:
            tangon = option;
            michal = oscard;
 98:
            option = undefined;
            if(michal) { _fun00004_ip = 128; continue _fun00003 }
 103:
            oscard = report().value;
            report = entity;
            report = report === golfie;
            option = undefined;
            michal = report;
            if(report) { _fun00004_ip = 128; continue _fun00003 }
 122:
            option = oscard;
            michal = report;
 128:
            if(michal) { _fun00004_ip = 134; continue _fun00003 }
 131:
            entity.return();
 134:
            michal = zuuluu.getChannel;
            entity = argFoo;
            oscard = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity != oscard)) { _fun00004_ip = 201; continue _fun00003 }
 153:
            zuuluu = tangon.getGuild;
            michal = oscard.guild_id;
            report = zuuluu.bind(tangon)(michal);
            zuuluu = entity == report;
            michal = null;
            if(zuuluu) { _fun00004_ip = 199; continue _fun00003 }
 177:
            tangon = _closure1_slot8;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            michal = tangon.bind(golfie)(oscard, report, zuuluu);
 199:
            return michal;
 201:
            return entity;
        }
    };
    zuuluu['getForumPostReadStatesById'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getForumTimestampFormatter
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot5;
            zuuluu = michal.POSTED_DURATION_AGO;
            michal = argBar;
            if(!(michal === zuuluu)) { _fun00006_ip = 61; continue _fun00005 }
 20:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.ThreadSortOrder;
            zuuluu = michal.CREATION_DATE;
            michal = argFoo;
            if(!(michal !== zuuluu)) { _fun00006_ip = 65; continue _fun00005 }
 61:
            michal = undefined;
            return michal;
 65:
            entity = _closure1_slot7;
            return entity;
        }
    };
    zuuluu['getForumTimestampFormatter'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: canDisplayPostUnreadMessageCount
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            michal = argBar;
            entity = michal[Symbol.iterator];
            michal = entity().next;
            zuuluu = michal().value;
            michal = entity;
            tangon = undefined;
            michal = michal === tangon;
            if(michal) { _fun00008_ip = 28; continue _fun00007 }
 25:
            tangon = zuuluu;
 28:
            if(michal) { _fun00008_ip = 34; continue _fun00007 }
 31:
            entity.return();
 34:
            entity = tangon.hasTrackedUnread;
            entity = entity.bind(tangon)(report);
            michal = tangon.hasOpenedThread;
            zuuluu = michal.bind(tangon)(report);
            michal = tangon.getTrackedAckMessageId;
            tangon = michal.bind(tangon)(report);
            michal = null;
            michal = michal != tangon;
            if(!entity) { _fun00008_ip = 79; continue _fun00007 }
 76:
            entity = zuuluu;
 79:
            if(!entity) { _fun00008_ip = 85; continue _fun00007 }
 82:
            entity = michal;
 85:
            return entity;
        }
    };
    zuuluu['canDisplayPostUnreadMessageCount'] = tangon;
    michal = function(argFoo) { // Original name: isForumPostPinned
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = tangon.getChannel;
            michal = argFoo;
            tangon = zuuluu.bind(tangon)(michal);
            michal = null;
            zuuluu = michal == tangon;
            michal = undefined;
            if(zuuluu) { _fun00010_ip = 52; continue _fun00009 }
 31:
            zuuluu = tangon.hasFlag;
            entity = _closure1_slot6;
            entity = entity.PINNED;
            michal = zuuluu.bind(tangon)(entity);
 52:
            entity = true;
            entity = entity === michal;
            return entity;
        }
    };
    zuuluu['isForumPostPinned'] = michal;
    return entity;
})();