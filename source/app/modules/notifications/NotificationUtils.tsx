// app/modules/notifications/NotificationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
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
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UserNotificationSettings;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MuteUntilSeconds;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelNotificationSettingsFlags;
    var _closure1_slot7 = tango;
    tango = {'ignoreMute': false, 'ignoreUnreadSetting': true, 'ignoreNotificationSetting': false};
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/NotificationUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: getMuteTimeOptions
        mike = {};
        options = _closure1_slot0;
        verify = _closure1_slot3;
        tango = 4;
        zulu = verify[tango];
        golf = undefined;
        zulu = options.bind(golf)(zulu);
        oscar = zulu.intl;
        report = oscar.string;
        zulu = verify[tango];
        zulu = options.bind(golf)(zulu);
        zulu = zulu.t;
        zulu = zulu.8ot6go;
        zulu = report.bind(oscar)(zulu);
        mike['label'] = zulu;
        zulu = _closure1_slot6;
        entity = zulu.MINUTES_15;
        mike['value'] = entity;
        entity = new Array(6);
        entity[0] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        offset = report.intl;
        oscar = offset.string;
        report = verify[tango];
        report = options.bind(golf)(report);
        report = report.t;
        report = report.UMWBZm;
        report = oscar.bind(offset)(report);
        mike['label'] = report;
        report = zulu.HOURS_1;
        mike['value'] = report;
        entity[1] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        offset = report.intl;
        oscar = offset.string;
        report = verify[tango];
        report = options.bind(golf)(report);
        report = report.t;
        report = report.QmYWtr;
        report = oscar.bind(offset)(report);
        mike['label'] = report;
        report = zulu.HOURS_3;
        mike['value'] = report;
        entity[2] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        offset = report.intl;
        oscar = offset.string;
        report = verify[tango];
        report = options.bind(golf)(report);
        report = report.t;
        report = report.EpAXPD;
        report = oscar.bind(offset)(report);
        mike['label'] = report;
        report = zulu.HOURS_8;
        mike['value'] = report;
        entity[3] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        offset = report.intl;
        oscar = offset.string;
        report = verify[tango];
        report = options.bind(golf)(report);
        report = report.t;
        report = report.755t4u;
        report = oscar.bind(offset)(report);
        mike['label'] = report;
        report = zulu.HOURS_24;
        mike['value'] = report;
        entity[4] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        oscar = report.intl;
        report = oscar.string;
        tango = verify[tango];
        tango = options.bind(golf)(tango);
        tango = tango.t;
        tango = tango.r3LawM;
        tango = report.bind(oscar)(tango);
        mike['label'] = tango;
        zulu = zulu.ALWAYS;
        mike['value'] = zulu;
        entity[5] = mike;
        return entity;
    };
    zulu['getMuteTimeOptions'] = tango;
    tango = function(argFoo) { // Original name: filterOverrides
        _fun86790: for(var _fun86790_ip = 0; ; ) switch(_fun86790_ip) {
 0:
            tango = argFoo;
            mike = arguments[1];
            var _closure2_slot0 = tango;
            report = undefined;
            if(!(mike === report)) { _fun86790_ip = 25; continue _fun86790 }
 18:
            mike = _closure1_slot8;
 25:
            var _closure2_slot1 = mike;
            zulu = _closure1_slot1;
            oscar = _closure1_slot3;
            mike = 5;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.keys;
            zulu = mike.bind(zulu)(tango);
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun86791: for(var _fun86791_ip = 0; ; ) switch(_fun86791_ip) {
 0:
                    oscar = argFoo;
                    entity = _closure2_slot0;
                    mike = entity[oscar];
                    report = mike.message_notifications;
                    mike = _closure1_slot5;
                    mike = mike.NULL;
                    report = report !== mike;
                    options = _closure1_slot2;
                    mike = _closure1_slot3;
                    verify = 6;
                    mike = mike[verify];
                    golf = undefined;
                    romeo = options.bind(golf)(mike);
                    options = romeo.hasFlag;
                    entity = entity[oscar];
                    entity = entity.flags;
                    yankee = null;
                    foxtrot = yankee != entity;
                    mike = 0;
                    if(!foxtrot) { _fun86791_ip = 88; continue _fun86791 }
 85:
                    mike = entity;
 88:
                    entity = _closure1_slot7;
                    entity = entity.UNREADS_ALL_MESSAGES;
                    mike = options.bind(romeo)(mike, entity);
                    if(mike) { _fun86791_ip = 171; continue _fun86791 }
 107:
                    options = _closure1_slot2;
                    entity = _closure1_slot3;
                    entity = entity[verify];
                    verify = options.bind(golf)(entity);
                    options = verify.hasFlag;
                    entity = _closure2_slot0;
                    entity = entity[oscar];
                    entity = entity.flags;
                    yankee = yankee != entity;
                    offset = 0;
                    if(!yankee) { _fun86791_ip = 155; continue _fun86791 }
 152:
                    offset = entity;
 155:
                    entity = _closure1_slot7;
                    entity = entity.UNREADS_ONLY_MENTIONS;
                    mike = options.bind(verify)(offset, entity);
 171:
                    entity = _closure2_slot1;
                    entity = entity.ignoreUnreadSetting;
                    entity = !entity;
                    if(!entity) { _fun86791_ip = 190; continue _fun86791 }
 187:
                    entity = mike;
 190:
                    if(entity) { _fun86791_ip = 215; continue _fun86791 }
 193:
                    mike = _closure2_slot1;
                    mike = mike.ignoreNotificationSetting;
                    mike = !mike;
                    if(!mike) { _fun86791_ip = 212; continue _fun86791 }
 209:
                    mike = report;
 212:
                    entity = mike;
 215:
                    if(entity) { _fun86791_ip = 276; continue _fun86791 }
 218:
                    mike = _closure2_slot1;
                    mike = mike.ignoreMute;
                    mike = !mike;
                    if(!mike) { _fun86791_ip = 273; continue _fun86791 }
 234:
                    report = _closure1_slot0;
                    options = _closure1_slot3;
                    tango = 7;
                    tango = options[tango];
                    report = report.bind(golf)(tango);
                    tango = report.computeIsMuted;
                    zulu = _closure2_slot0;
                    zulu = zulu[oscar];
                    mike = tango.bind(report)(zulu);
 273:
                    entity = mike;
 276:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['filterOverrides'] = tango;
    tango = function(argFoo) { // Original name: useShouldUseNewNotificationSystem
        _fun86792: for(var _fun86792_ip = 0; ; ) switch(_fun86792_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot3;
            mike = 8;
            mike = report[mike];
            zulu = undefined;
            golf = tango.bind(zulu)(mike);
            oscar = golf.useStateFromStores;
            entity = _closure1_slot4;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = _closure1_slot4;
                entity = entity.useNewNotifications;
                return entity;
            };
            mike = oscar.bind(golf)(mike, entity);
            entity = 9;
            entity = report[entity];
            entity = tango.bind(zulu)(entity);
            report = entity.NotificationsExperiment;
            tango = report.useExperiment;
            zulu = {};
            entity = argFoo;
            zulu['location'] = entity;
            entity = {};
            oscar = false;
            entity['autoTrackExposure'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            entity = entity.enabled;
            if(!entity) { _fun86792_ip = 116; continue _fun86792 }
 113:
            entity = mike;
 116:
            return entity;
        }
    };
    zulu['useShouldUseNewNotificationSystem'] = tango;
    mike = function(argFoo) { // Original name: shouldShowUseNewNotificationSystem
        _fun86794: for(var _fun86794_ip = 0; ; ) switch(_fun86794_ip) {
 0:
            entity = _closure1_slot4;
            entity = entity.useNewNotifications;
            if(!entity) { _fun86794_ip = 79; continue _fun86794 }
 16:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            report = mike.NotificationsExperiment;
            tango = report.getCurrentConfig;
            zulu = {};
            mike = argFoo;
            zulu['location'] = mike;
            mike = {};
            oscar = false;
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity = mike.enabled;
 79:
            return entity;
        }
    };
    zulu['shouldShowUseNewNotificationSystem'] = mike;
    return entity;
})();