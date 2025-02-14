// app/modules/app_database/modules/messages/isReadableChannel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    tango = function(argFoo) { // Original name: isReadableChannel
        _fun59057: for(var _fun59057_ip = 0; ; ) switch(_fun59057_ip) {
 0:
            golf = argFoo;
            entity = null;
            entity = entity != golf;
            if(!entity) { _fun59057_ip = 104; continue _fun59057 }
 12:
            zulu = golf.type;
            mike = _closure1_slot3;
            mike = mike.DM;
            mike = zulu === mike;
            if(mike) { _fun59057_ip = 56; continue _fun59057 }
 37:
            report = golf.type;
            zulu = _closure1_slot3;
            zulu = zulu.GROUP_DM;
            mike = report === zulu;
 56:
            if(mike) { _fun59057_ip = 101; continue _fun59057 }
 59:
            oscar = _closure1_slot0;
            report = golf.type;
            zulu = undefined;
            zulu = oscar.bind(zulu)(report);
            if(!zulu) { _fun59057_ip = 98; continue _fun59057 }
 78:
            oscar = _closure1_slot2;
            report = oscar.canBasicChannel;
            tango = _closure1_slot4;
            zulu = report.bind(oscar)(tango, golf);
 98:
            mike = zulu;
 101:
            entity = mike;
 104:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
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
    report = oscar.bind(entity)(report);
    report = report.isTextChannel;
    var _closure1_slot0 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.ChannelTypes;
    var _closure1_slot3 = options;
    report = report.BasicPermissions;
    options = report.VIEW_CHANNEL;
    report = report.READ_MESSAGE_HISTORY;
    report = options | report;
    var _closure1_slot4 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/app_database/modules/messages/isReadableChannel.tsx';
    report = oscar.bind(golf)(report);
    zulu['isReadableChannel'] = tango;
    mike = function(argFoo) { // Original name: isReadableChannelId
        _fun59058: for(var _fun59058_ip = 0; ; ) switch(_fun59058_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun59058_ip = 41; continue _fun59058 }
 12:
            tango = _closure1_slot5;
            zulu = _closure1_slot1;
            mike = zulu.getBasicChannel;
            zulu = mike.bind(zulu)(report);
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 41:
            return entity;
        }
    };
    zulu['isReadableChannelId'] = mike;
    return entity;
})();