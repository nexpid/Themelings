// app/modules/threads/ThreadUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    var _closure1_slot2 = oscar;
    entity = ['can_send_message'];
    var _closure1_slot3 = entity;
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
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.ThreadMemberFlags;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    options = tango.AnalyticEvents;
    var _closure1_slot9 = options;
    tango = tango.UserNotificationSettings;
    var _closure1_slot10 = tango;
    tango = function() { // Original name: getAccessibilityLabelFormatter
        entity = {};
        oscar = _closure1_slot0;
        golf = _closure1_slot2;
        mike = 6;
        zulu = golf[mike];
        report = undefined;
        zulu = oscar.bind(report)(zulu);
        zulu = zulu.t;
        zulu = zulu.1Rcf/v;
        entity['minutes'] = zulu;
        zulu = golf[mike];
        zulu = oscar.bind(report)(zulu);
        zulu = zulu.t;
        zulu = zulu.vgnx5+;
        entity['hours'] = zulu;
        zulu = golf[mike];
        zulu = oscar.bind(report)(zulu);
        zulu = zulu.t;
        zulu = zulu.fNvE5+;
        entity['days'] = zulu;
        zulu = golf[mike];
        zulu = oscar.bind(report)(zulu);
        tango = zulu.intl;
        zulu = tango.string;
        mike = golf[mike];
        mike = oscar.bind(report)(mike);
        mike = mike.t;
        mike = mike.P7Gyg4;
        mike = zulu.bind(tango)(mike);
        entity['month'] = mike;
        return entity;
    };
    var _closure1_slot11 = tango;
    tango = 16;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    golf = options.fileFinishedImporting;
    tango = 'modules/threads/ThreadUtils.tsx';
    tango = golf.bind(options)(tango);
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    zulu['getTimestampString'] = tango;
    tango = function(argFoo) {
        zulu = _closure1_slot1;
        tango = _closure1_slot2;
        mike = 7;
        mike = tango[mike];
        tango = undefined;
        zulu = zulu.bind(tango)(mike);
        mike = _closure1_slot11;
        entity = argFoo;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getTimestampAccessibilityLabel'] = tango;
    tango = function() { // Original name: trackThreadBrowserTab
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 8;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.trackWithMetadata;
        mike = _closure1_slot9;
        mike = mike.THREAD_BROWSER_TAB_CHANGED;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['trackThreadBrowserTab'] = tango;
    tango = function() { // Original name: trackThreadBrowserOpened
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = arguments[0];
            entity = undefined;
            if(!(oscar === entity)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            oscar = 'Modal';
 13:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 8;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot9;
            zulu = mike.OPEN_MODAL;
            mike = {};
            golf = 'Thread Browser';
            mike['type'] = golf;
            mike['location_section'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackThreadBrowserOpened'] = tango;
    tango = function() { // Original name: trackActiveThreadsPopoutOpened
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot9;
        zulu = mike.OPEN_POPOUT;
        mike = {};
        oscar = 'Active Threads Popout';
        mike['type'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackActiveThreadsPopoutOpened'] = tango;
    tango = function(argFoo, argBar) { // Original name: trackThreadNotificationSettingsUpdated
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            offset = argFoo;
            zulu = argBar;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 10;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.collectThreadMetadata;
            echo = tango.bind(report)(offset);
            golf = null;
            if(!(golf != echo)) { _fun00004_ip = 539; continue _fun00003 }
 51:
            tango = offset.getGuildId;
            kilo = tango.bind(offset)();
            backup = offset.parent_id;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            options = 11;
            tango = tango[options];
            report = report.bind(entity)(tango);
            tango = report.getCurrentChannelSettings;
            oscar = tango.bind(report)(kilo, backup);
            romeo = function(argFoo) { // Original name: getNotificationAnalyticsString
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    offset = argFoo;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 12;
                    zulu = zulu[entity];
                    report = undefined;
                    oscar = tango.bind(report)(zulu);
                    tango = oscar.hasFlag;
                    zulu = _closure1_slot8;
                    zulu = zulu.ALL_MESSAGES;
                    zulu = tango.bind(oscar)(offset, zulu);
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    if(zulu) { _fun00006_ip = 228; continue _fun00005 }
 64:
                    zulu = oscar[entity];
                    options = tango.bind(report)(zulu);
                    golf = options.hasFlag;
                    zulu = _closure1_slot8;
                    zulu = zulu.ONLY_MENTIONS;
                    zulu = golf.bind(options)(offset, zulu);
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    if(zulu) { _fun00006_ip = 194; continue _fun00005 }
 106:
                    entity = options[entity];
                    verify = golf.bind(report)(entity);
                    zulu = verify.hasFlag;
                    entity = _closure1_slot8;
                    entity = entity.NO_MESSAGES;
                    entity = zulu.bind(verify)(offset, entity);
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    zulu = 11;
                    zulu = offset[zulu];
                    zulu = verify.bind(report)(zulu);
                    verify = zulu.MessageNotificationSettings;
                    zulu = _closure1_slot10;
                    if(entity) { _fun00006_ip = 182; continue _fun00005 }
 170:
                    entity = zulu.NULL;
                    entity = verify[entity];
                    _fun00006_ip = 192; continue _fun00005;
 182:
                    zulu = zulu.NO_MESSAGES;
                    entity = verify[zulu];
 192:
                    _fun00006_ip = 226; continue _fun00005;
 194:
                    zulu = 11;
                    zulu = options[zulu];
                    zulu = golf.bind(report)(zulu);
                    golf = zulu.MessageNotificationSettings;
                    zulu = _closure1_slot10;
                    zulu = zulu.ONLY_MENTIONS;
                    entity = golf[zulu];
 226:
                    _fun00006_ip = 260; continue _fun00005;
 228:
                    zulu = 11;
                    zulu = oscar[zulu];
                    zulu = tango.bind(report)(zulu);
                    zulu = zulu.MessageNotificationSettings;
                    mike = _closure1_slot10;
                    mike = mike.ALL_MESSAGES;
                    entity = zulu[mike];
 260:
                    return entity;
                }
            };
            verify = _closure1_slot7;
            report = verify.flags;
            tango = offset.id;
            tango = report.bind(verify)(tango);
            report = golf != tango;
            foxtrot = 0;
            sizing = 0;
            if(!report) { _fun00004_ip = 139; continue _fun00003 }
 136:
            sizing = tango;
 139:
            yankee = romeo.bind(entity)(sizing);
            update = _closure1_slot7;
            report = update.isMuted;
            tango = offset.id;
            verify = report.bind(update)(tango);
            report = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[options];
            output = report.bind(entity)(tango);
            report = output.muteConfigToTimestamp;
            result = update.getMuteConfig;
            tango = offset.id;
            tango = result.bind(update)(tango);
            tango = report.bind(output)(tango);
            report = echo.can_send_message;
            report = {};
            result = _closure1_slot4;
            output = _closure1_slot3;
            source = result.bind(entity)(echo, output);
            control = report;
            output = copyDataProperties(control, source);
            result = offset.id;
            output = 'channel_id';
            report[output] = result;
            output = 'guild_id';
            report[output] = kilo;
            output = 'parent_id';
            report[output] = backup;
            output = offset.type;
            offset = 'channel_type';
            report[offset] = output;
            offset = _closure1_slot8;
            offset = offset.HAS_INTERACTED;
            offset = sizing & offset;
            foxtrot = foxtrot != offset;
            offset = 'has_interacted_with_thread';
            report[offset] = foxtrot;
            foxtrot = _closure1_slot6;
            offset = foxtrot.isGuildOrCategoryOrChannelMuted;
            foxtrot = offset.bind(foxtrot)(kilo, backup);
            offset = 'parent_is_muted';
            report[offset] = foxtrot;
            offset = 'old_thread_notification_setting';
            report[offset] = yankee;
            offset = zulu.flags;
            if(!(golf != offset)) { _fun00004_ip = 369; continue _fun00003 }
 359:
            offset = zulu.flags;
            yankee = romeo.bind(entity)(offset);
 369:
            offset = 'new_thread_notification_setting';
            report[offset] = yankee;
            offset = oscar.channel_message_notification_settings;
            oscar = 'parent_notification_setting';
            report[oscar] = offset;
            oscar = 'old_thread_is_muted';
            report[oscar] = verify;
            oscar = zulu.muted;
            if(!(golf != oscar)) { _fun00004_ip = 421; continue _fun00003 }
 418:
            verify = oscar;
 421:
            oscar = 'new_thread_is_muted';
            report[oscar] = verify;
            oscar = 'old_thread_muted_until';
            report[oscar] = tango;
            oscar = zulu.mute_config;
            if(!(golf != oscar)) { _fun00004_ip = 487; continue _fun00003 }
 453:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            golf = golf.bind(entity)(oscar);
            oscar = golf.muteConfigToTimestamp;
            zulu = zulu.mute_config;
            tango = oscar.bind(golf)(zulu);
 487:
            zulu = 'new_thread_muted_until';
            report[zulu] = tango;
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 9;
            zulu = oscar[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.track;
            mike = _closure1_slot9;
            mike = mike.THREAD_NOTIFICATION_SETTINGS_UPDATED;
            mike = zulu.bind(tango)(mike, report);
 539:
            return entity;
        }
    };
    zulu['trackThreadNotificationSettingsUpdated'] = tango;
    mike = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 13;
            tango = report[tango];
            report = undefined;
            golf = oscar.bind(report)(tango);
            oscar = golf.useStateFromStores;
            options = _closure1_slot5;
            tango = new Array(1);
            tango[0] = options;
            entity = function() {
                zulu = _closure1_slot5;
                mike = zulu.lastMessageId;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = oscar.bind(golf)(tango, entity);
            tango = null;
            entity = tango != options;
            oscar = null;
            if(!entity) { _fun00008_ip = 104; continue _fun00007 }
 73:
            golf = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 14;
            entity = verify[entity];
            golf = golf.bind(report)(entity);
            entity = golf.extractTimestamp;
            oscar = entity.bind(golf)(options);
 104:
            entity = mike.threadMetadata;
            golf = tango == entity;
            options = undefined;
            if(golf) { _fun00008_ip = 125; continue _fun00007 }
 119:
            options = entity.createTimestamp;
 125:
            golf = tango != options;
            entity = null;
            if(!golf) { _fun00008_ip = 168; continue _fun00007 }
 134:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            golf = 15;
            golf = offset[golf];
            golf = verify.bind(report)(golf);
            options = golf.bind(report)(options);
            golf = options.valueOf;
            entity = golf.bind(options)();
 168:
            if(!(tango != oscar)) { _fun00008_ip = 175; continue _fun00007 }
 172:
            entity = oscar;
 175:
            if(!(tango == entity)) { _fun00008_ip = 215; continue _fun00007 }
 179:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 14;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.extractTimestamp;
            mike = mike.id;
            entity = zulu.bind(tango)(mike);
 215:
            return entity;
        }
    };
    zulu['useLastMessageTimestamp'] = mike;
    return entity;
})();