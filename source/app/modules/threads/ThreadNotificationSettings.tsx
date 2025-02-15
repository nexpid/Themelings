// app/modules/threads/ThreadNotificationSettings.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: computeThreadNotificationSetting
        _fun72862: for(var _fun72862_ip = 0; ; ) switch(_fun72862_ip) {
 0:
            zulu = argFoo;
            report = _closure1_slot4;
            tango = report.flags;
            mike = zulu.id;
            golf = tango.bind(report)(mike);
            mike = null;
            if(!(mike != golf)) { _fun72862_ip = 366; continue _fun72862 }
 34:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            options = 5;
            tango = tango[options];
            oscar = undefined;
            verify = report.bind(oscar)(tango);
            report = verify.hasFlag;
            tango = _closure1_slot5;
            tango = tango.ALL_MESSAGES;
            tango = report.bind(verify)(golf, tango);
            if(tango) { _fun72862_ip = 354; continue _fun72862 }
 84:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[options];
            verify = report.bind(oscar)(tango);
            report = verify.hasFlag;
            tango = _closure1_slot5;
            tango = tango.ONLY_MENTIONS;
            tango = report.bind(verify)(golf, tango);
            if(tango) { _fun72862_ip = 342; continue _fun72862 }
 129:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[options];
            oscar = report.bind(oscar)(tango);
            report = oscar.hasFlag;
            tango = _closure1_slot5;
            tango = tango.NO_MESSAGES;
            tango = report.bind(oscar)(golf, tango);
            if(tango) { _fun72862_ip = 330; continue _fun72862 }
 174:
            report = _closure1_slot2;
            tango = report.getChannel;
            zulu = zulu.parent_id;
            tango = tango.bind(report)(zulu);
            if(!(mike != tango)) { _fun72862_ip = 318; continue _fun72862 }
 198:
            oscar = _closure1_slot3;
            report = oscar.isGuildOrCategoryOrChannelMuted;
            zulu = tango.guild_id;
            mike = tango.id;
            mike = report.bind(oscar)(zulu, mike);
            if(mike) { _fun72862_ip = 306; continue _fun72862 }
 227:
            zulu = _closure1_slot3;
            mike = zulu.resolvedMessageNotifications;
            zulu = mike.bind(zulu)(tango);
            mike = _closure1_slot6;
            mike = mike.NO_MESSAGES;
            if(!(zulu !== mike)) { _fun72862_ip = 294; continue _fun72862 }
 256:
            mike = _closure1_slot6;
            mike = mike.ONLY_MENTIONS;
            if(!(zulu !== mike)) { _fun72862_ip = 282; continue _fun72862 }
 270:
            mike = _closure1_slot5;
            mike = mike.ALL_MESSAGES;
            _fun72862_ip = 292; continue _fun72862;
 282:
            zulu = _closure1_slot5;
            mike = zulu.ONLY_MENTIONS;
 292:
            _fun72862_ip = 304; continue _fun72862;
 294:
            zulu = _closure1_slot5;
            mike = zulu.NO_MESSAGES;
 304:
            return mike;
 306:
            mike = _closure1_slot5;
            mike = mike.NO_MESSAGES;
            return mike;
 318:
            mike = _closure1_slot5;
            mike = mike.NO_MESSAGES;
            return mike;
 330:
            mike = _closure1_slot5;
            mike = mike.NO_MESSAGES;
            return mike;
 342:
            mike = _closure1_slot5;
            mike = mike.ONLY_MENTIONS;
            return mike;
 354:
            mike = _closure1_slot5;
            mike = mike.ALL_MESSAGES;
            return mike;
 366:
            entity = _closure1_slot5;
            entity = entity.NO_MESSAGES;
            return entity;
        }
    };
    var _closure1_slot7 = tango;
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
    report = report.ThreadMemberFlags;
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.UserNotificationSettings;
    var _closure1_slot6 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/threads/ThreadNotificationSettings.tsx';
    report = oscar.bind(golf)(report);
    zulu['computeThreadNotificationSetting'] = tango;
    mike = function(argFoo) { // Original name: useThreadNotificationSetting
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 6;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        golf = _closure1_slot4;
        zulu = new Array(3);
        zulu[0] = golf;
        golf = _closure1_slot3;
        zulu[1] = golf;
        mike = _closure1_slot2;
        zulu[2] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            zulu = _closure1_slot7;
            mike = _closure2_slot0;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useThreadNotificationSetting'] = mike;
    return entity;
})();