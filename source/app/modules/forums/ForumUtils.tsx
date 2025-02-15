// app/modules/forums/ForumUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo, argBar) { // Original name: getForumPostReadStates
        _fun68708: for(var _fun68708_ip = 0; ; ) switch(_fun68708_ip) {
 0:
            zulu = argFoo;
            tango = arguments[2];
            report = undefined;
            if(!(tango === report)) { _fun68708_ip = 30; continue _fun68708 }
 12:
            mike = _closure1_slot4;
            entity = new Array(1);
            entity[0] = mike;
            tango = entity;
 30:
            mike = tango;
            entity = mike[Symbol.iterator];
            mike = entity().next;
            tango = mike().value;
            mike = entity;
            mike = mike === report;
            report = undefined;
            if(mike) { _fun68708_ip = 55; continue _fun68708 }
 52:
            report = tango;
 55:
            if(mike) { _fun68708_ip = 61; continue _fun68708 }
 58:
            entity.return();
 61:
            entity = {};
            mike = zulu.isArchivedThread;
            mike = mike.bind(zulu)();
            mike = !mike;
            if(!mike) { _fun68708_ip = 106; continue _fun68708 }
 79:
            options = report.isNewForumThread;
            golf = zulu.id;
            oscar = zulu.parent_id;
            tango = argBar;
            mike = options.bind(report)(golf, oscar, tango);
 106:
            entity['isNew'] = mike;
            mike = zulu.isArchivedThread;
            mike = mike.bind(zulu)();
            mike = !mike;
            if(!mike) { _fun68708_ip = 143; continue _fun68708 }
 127:
            tango = report.isForumPostUnread;
            zulu = zulu.id;
            mike = tango.bind(report)(zulu);
 143:
            entity['hasUnreads'] = mike;
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ForumTimestampFormats;
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ChannelFlags;
    var _closure1_slot6 = report;
    report = function() { // Original name: getCreationDefaultFormatter
        entity = {};
        oscar = _closure1_slot0;
        golf = _closure1_slot1;
        mike = 5;
        zulu = golf[mike];
        report = undefined;
        zulu = oscar.bind(report)(zulu);
        zulu = zulu.t;
        zulu = zulu.nFt9cn;
        entity['minutes'] = zulu;
        zulu = golf[mike];
        zulu = oscar.bind(report)(zulu);
        zulu = zulu.t;
        zulu = zulu.jzCewc;
        entity['hours'] = zulu;
        zulu = golf[mike];
        zulu = oscar.bind(report)(zulu);
        zulu = zulu.t;
        zulu = zulu.U4I0s7;
        entity['days'] = zulu;
        zulu = golf[mike];
        zulu = oscar.bind(report)(zulu);
        tango = zulu.intl;
        zulu = tango.string;
        mike = golf[mike];
        mike = oscar.bind(report)(mike);
        mike = mike.t;
        mike = mike.nBNJ/P;
        mike = zulu.bind(tango)(mike);
        entity['month'] = mike;
        return entity;
    };
    var _closure1_slot7 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/forums/ForumUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['getForumPostReadStates'] = tango;
    tango = function(argFoo) { // Original name: getForumPostReadStatesById
        _fun68710: for(var _fun68710_ip = 0; ; ) switch(_fun68710_ip) {
 0:
            mike = arguments[1];
            golf = undefined;
            if(!(mike === golf)) { _fun68710_ip = 43; continue _fun68710 }
 9:
            tango = _closure1_slot2;
            entity = new Array(3);
            entity[0] = tango;
            tango = _closure1_slot3;
            entity[1] = tango;
            zulu = _closure1_slot4;
            entity[2] = zulu;
            mike = entity;
 43:
            report = mike;
            entity = report[Symbol.iterator];
            report = entity().next;
            tango = report().value;
            mike = entity;
            mike = mike === golf;
            zulu = undefined;
            if(mike) { _fun68710_ip = 68; continue _fun68710 }
 65:
            zulu = tango;
 68:
            tango = undefined;
            if(mike) { _fun68710_ip = 98; continue _fun68710 }
 73:
            options = report().value;
            oscar = entity;
            oscar = oscar === golf;
            tango = undefined;
            mike = oscar;
            if(oscar) { _fun68710_ip = 98; continue _fun68710 }
 92:
            tango = options;
            mike = oscar;
 98:
            options = undefined;
            if(mike) { _fun68710_ip = 128; continue _fun68710 }
 103:
            oscar = report().value;
            report = entity;
            report = report === golf;
            options = undefined;
            mike = report;
            if(report) { _fun68710_ip = 128; continue _fun68710 }
 122:
            options = oscar;
            mike = report;
 128:
            if(mike) { _fun68710_ip = 134; continue _fun68710 }
 131:
            entity.return();
 134:
            mike = zulu.getChannel;
            entity = argFoo;
            oscar = mike.bind(zulu)(entity);
            entity = null;
            if(!(entity != oscar)) { _fun68710_ip = 201; continue _fun68710 }
 153:
            zulu = tango.getGuild;
            mike = oscar.guild_id;
            report = zulu.bind(tango)(mike);
            zulu = entity == report;
            mike = null;
            if(zulu) { _fun68710_ip = 199; continue _fun68710 }
 177:
            tango = _closure1_slot8;
            zulu = new Array(1);
            zulu[0] = options;
            mike = tango.bind(golf)(oscar, report, zulu);
 199:
            return mike;
 201:
            return entity;
        }
    };
    zulu['getForumPostReadStatesById'] = tango;
    tango = function(argFoo, argBar) { // Original name: getForumTimestampFormatter
        _fun68711: for(var _fun68711_ip = 0; ; ) switch(_fun68711_ip) {
 0:
            mike = _closure1_slot5;
            zulu = mike.POSTED_DURATION_AGO;
            mike = argBar;
            if(!(mike === zulu)) { _fun68711_ip = 61; continue _fun68711 }
 20:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.ThreadSortOrder;
            zulu = mike.CREATION_DATE;
            mike = argFoo;
            if(!(mike !== zulu)) { _fun68711_ip = 65; continue _fun68711 }
 61:
            mike = undefined;
            return mike;
 65:
            entity = _closure1_slot7;
            return entity;
        }
    };
    zulu['getForumTimestampFormatter'] = tango;
    tango = function(argFoo, argBar) { // Original name: canDisplayPostUnreadMessageCount
        _fun68712: for(var _fun68712_ip = 0; ; ) switch(_fun68712_ip) {
 0:
            report = argFoo;
            mike = argBar;
            entity = mike[Symbol.iterator];
            mike = entity().next;
            zulu = mike().value;
            mike = entity;
            tango = undefined;
            mike = mike === tango;
            if(mike) { _fun68712_ip = 28; continue _fun68712 }
 25:
            tango = zulu;
 28:
            if(mike) { _fun68712_ip = 34; continue _fun68712 }
 31:
            entity.return();
 34:
            entity = tango.hasTrackedUnread;
            entity = entity.bind(tango)(report);
            mike = tango.hasOpenedThread;
            zulu = mike.bind(tango)(report);
            mike = tango.getTrackedAckMessageId;
            tango = mike.bind(tango)(report);
            mike = null;
            mike = mike != tango;
            if(!entity) { _fun68712_ip = 79; continue _fun68712 }
 76:
            entity = zulu;
 79:
            if(!entity) { _fun68712_ip = 85; continue _fun68712 }
 82:
            entity = mike;
 85:
            return entity;
        }
    };
    zulu['canDisplayPostUnreadMessageCount'] = tango;
    mike = function(argFoo) { // Original name: isForumPostPinned
        _fun68713: for(var _fun68713_ip = 0; ; ) switch(_fun68713_ip) {
 0:
            tango = _closure1_slot2;
            zulu = tango.getChannel;
            mike = argFoo;
            tango = zulu.bind(tango)(mike);
            mike = null;
            zulu = mike == tango;
            mike = undefined;
            if(zulu) { _fun68713_ip = 52; continue _fun68713 }
 31:
            zulu = tango.hasFlag;
            entity = _closure1_slot6;
            entity = entity.PINNED;
            mike = zulu.bind(tango)(entity);
 52:
            entity = true;
            entity = entity === mike;
            return entity;
        }
    };
    zulu['isForumPostPinned'] = mike;
    return entity;
})();