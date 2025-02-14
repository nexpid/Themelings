// app/utils/ReportUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    oscar = function(argFoo) { // Original name: canReportUser
        _fun90984: for(var _fun90984_ip = 0; ; ) switch(_fun90984_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity != zulu)) { _fun90984_ip = 66; continue _fun90984 }
 9:
            tango = zulu.id;
            report = _closure1_slot3;
            mike = report.getCurrentUser;
            mike = mike.bind(report)();
            entity = entity != mike;
            if(!entity) { _fun90984_ip = 64; continue _fun90984 }
 37:
            mike = mike.id;
            mike = mike !== tango;
            if(!mike) { _fun90984_ip = 61; continue _fun90984 }
 49:
            tango = zulu.system;
            zulu = true;
            mike = zulu !== tango;
 61:
            entity = mike;
 64:
            return entity;
 66:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot7 = oscar;
    report = function(argFoo) { // Original name: canReportMessage
        _fun90985: for(var _fun90985_ip = 0; ; ) switch(_fun90985_ip) {
 0:
            mike = argFoo;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun90985_ip = 32; continue _fun90985 }
 12:
            tango = _closure1_slot7;
            zulu = mike.author;
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 32:
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tango = function(argFoo) { // Original name: canReportAndDeleteInChannel
        _fun90986: for(var _fun90986_ip = 0; ; ) switch(_fun90986_ip) {
 0:
            options = argFoo;
            zulu = _closure1_slot0;
            entity = zulu.getChannel;
            oscar = entity.bind(zulu)(options);
            entity = null;
            if(!(entity != oscar)) { _fun90986_ip = 152; continue _fun90986 }
 29:
            tango = oscar.type;
            zulu = _closure1_slot4;
            zulu = zulu.DM;
            if(!(tango !== zulu)) { _fun90986_ip = 148; continue _fun90986 }
 48:
            tango = oscar.type;
            zulu = _closure1_slot4;
            zulu = zulu.GROUP_DM;
            if(!(tango !== zulu)) { _fun90986_ip = 148; continue _fun90986 }
 67:
            golf = _closure1_slot2;
            report = golf.canWithPartialContext;
            zulu = _closure1_slot5;
            tango = zulu.MANAGE_MESSAGES;
            zulu = {};
            zulu['channelId'] = options;
            zulu = report.bind(golf)(tango, zulu);
            if(zulu) { _fun90986_ip = 106; continue _fun90986 }
 102:
            zulu = false;
            return zulu;
 106:
            report = _closure1_slot1;
            tango = report.getMemberCount;
            zulu = oscar.getGuildId;
            zulu = zulu.bind(oscar)();
            zulu = tango.bind(report)(zulu);
            entity = entity != zulu;
            if(!entity) { _fun90986_ip = 146; continue _fun90986 }
 138:
            mike = _closure1_slot6;
            entity = zulu >= mike;
 146:
            return entity;
 148:
            entity = true;
            return entity;
 152:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot0 = golf;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot1 = golf;
    golf = 2;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 3;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 4;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.ChannelTypes;
    var _closure1_slot4 = offset;
    golf = golf.Permissions;
    var _closure1_slot5 = golf;
    golf = 50;
    var _closure1_slot6 = golf;
    golf = 5;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'utils/ReportUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['canReportUser'] = oscar;
    zulu['canReportMessage'] = report;
    zulu['canReportAndDeleteInChannel'] = tango;
    mike = function(argFoo) { // Original name: canDeleteAndReportMessage
        _fun90987: for(var _fun90987_ip = 0; ; ) switch(_fun90987_ip) {
 0:
            zulu = argFoo;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun90987_ip = 26; continue _fun90987 }
 12:
            tango = _closure1_slot8;
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 26:
            if(!entity) { _fun90987_ip = 53; continue _fun90987 }
 29:
            tango = _closure1_slot9;
            mike = zulu.getChannelId;
            zulu = mike.bind(zulu)();
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 53:
            return entity;
        }
    };
    zulu['canDeleteAndReportMessage'] = mike;
    return entity;
})();