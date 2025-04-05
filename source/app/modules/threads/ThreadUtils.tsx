// app/modules/threads/ThreadUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    var _closure1_slot2 = oscard;
    entity = ['can_send_message', 'parent_channel_type'];
    var _closure1_slot3 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.ThreadMemberFlags;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    option = tangon.AnalyticEvents;
    var _closure1_slot9 = option;
    tangon = tangon.UserNotificationSettings;
    var _closure1_slot10 = tangon;
    tangon = function() { // Original name: getAccessibilityLabelFormatter
        entity = {};
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 6;
        zuuluu = golfie[michal];
        report = undefined;
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.1Rcf/v;
        entity['minutes'] = zuuluu;
        zuuluu = golfie[michal];
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.vgnx5+;
        entity['hours'] = zuuluu;
        zuuluu = golfie[michal];
        zuuluu = oscard.bind(report)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.fNvE5+;
        entity['days'] = zuuluu;
        zuuluu = golfie[michal];
        zuuluu = oscard.bind(report)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.string;
        michal = golfie[michal];
        michal = oscard.bind(report)(michal);
        michal = michal.t;
        michal = michal.P7Gyg4;
        michal = zuuluu.bind(tangon)(michal);
        entity['month'] = michal;
        return entity;
    };
    var _closure1_slot11 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    golfie = option.fileFinishedImporting;
    tangon = 'modules/threads/ThreadUtils.tsx';
    tangon = golfie.bind(option)(tangon);
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    zuuluu['getTimestampString'] = tangon;
    tangon = function(argFoo) {
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 7;
        michal = tangon[michal];
        tangon = undefined;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = _closure1_slot11;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getTimestampAccessibilityLabel'] = tangon;
    tangon = function() { // Original name: trackThreadBrowserTab
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 8;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.trackWithMetadata;
        michal = _closure1_slot9;
        michal = michal.THREAD_BROWSER_TAB_CHANGED;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['trackThreadBrowserTab'] = tangon;
    tangon = function() { // Original name: trackThreadBrowserOpened
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = arguments[0];
            entity = undefined;
            if(!(oscard === entity)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            oscard = 'Modal';
 13:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 8;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackWithMetadata;
            michal = _closure1_slot9;
            zuuluu = michal.OPEN_MODAL;
            michal = {};
            golfie = 'Thread Browser';
            michal['type'] = golfie;
            michal['location_section'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackThreadBrowserOpened'] = tangon;
    tangon = function() { // Original name: trackActiveThreadsPopoutOpened
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 9;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot9;
        zuuluu = michal.OPEN_POPOUT;
        michal = {};
        oscard = 'Active Threads Popout';
        michal['type'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackActiveThreadsPopoutOpened'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: trackThreadNotificationSettingsUpdated
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            offset = argFoo;
            zuuluu = argBar;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 10;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.collectThreadMetadata;
            result = tangon.bind(report)(offset);
            golfie = null;
            if(!(golfie != result)) { _fun00004_ip = 545; continue _fun00003 }
 51:
            tangon = offset.getGuildId;
            kiloes = tangon.bind(offset)();
            backup = offset.parent_id;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            option = 11;
            tangon = tangon[option];
            report = report.bind(entity)(tangon);
            tangon = report.getCurrentChannelSettings;
            oscard = tangon.bind(report)(kiloes, backup);
            romeon = function(argFoo) { // Original name: getNotificationAnalyticsString
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    offset = argFoo;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 12;
                    zuuluu = zuuluu[entity];
                    report = undefined;
                    oscard = tangon.bind(report)(zuuluu);
                    tangon = oscard.hasFlag;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.ALL_MESSAGES;
                    zuuluu = tangon.bind(oscard)(offset, zuuluu);
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    if(zuuluu) { _fun00006_ip = 228; continue _fun00005 }
 64:
                    zuuluu = oscard[entity];
                    option = tangon.bind(report)(zuuluu);
                    golfie = option.hasFlag;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.ONLY_MENTIONS;
                    zuuluu = golfie.bind(option)(offset, zuuluu);
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    if(zuuluu) { _fun00006_ip = 194; continue _fun00005 }
 106:
                    entity = option[entity];
                    verify = golfie.bind(report)(entity);
                    zuuluu = verify.hasFlag;
                    entity = _closure1_slot8;
                    entity = entity.NO_MESSAGES;
                    entity = zuuluu.bind(verify)(offset, entity);
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = offset[zuuluu];
                    zuuluu = verify.bind(report)(zuuluu);
                    verify = zuuluu.MessageNotificationSettings;
                    zuuluu = _closure1_slot10;
                    if(entity) { _fun00006_ip = 182; continue _fun00005 }
 170:
                    entity = zuuluu.NULL;
                    entity = verify[entity];
                    _fun00006_ip = 192; continue _fun00005;
 182:
                    zuuluu = zuuluu.NO_MESSAGES;
                    entity = verify[zuuluu];
 192:
                    _fun00006_ip = 226; continue _fun00005;
 194:
                    zuuluu = 11;
                    zuuluu = option[zuuluu];
                    zuuluu = golfie.bind(report)(zuuluu);
                    golfie = zuuluu.MessageNotificationSettings;
                    zuuluu = _closure1_slot10;
                    zuuluu = zuuluu.ONLY_MENTIONS;
                    entity = golfie[zuuluu];
 226:
                    _fun00006_ip = 260; continue _fun00005;
 228:
                    zuuluu = 11;
                    zuuluu = oscard[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = zuuluu.MessageNotificationSettings;
                    michal = _closure1_slot10;
                    michal = michal.ALL_MESSAGES;
                    entity = zuuluu[michal];
 260:
                    return entity;
                }
            };
            verify = _closure1_slot7;
            report = verify.flags;
            tangon = offset.id;
            tangon = report.bind(verify)(tangon);
            report = golfie != tangon;
            foxtra = 0;
            if(!report) { _fun00004_ip = 137; continue _fun00003 }
 134:
            foxtra = tangon;
 137:
            yankee = romeon.bind(entity)(foxtra);
            echoed = _closure1_slot7;
            report = echoed.isMuted;
            tangon = offset.id;
            verify = report.bind(echoed)(tangon);
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            sizing = report.bind(entity)(tangon);
            report = sizing.muteConfigToTimestamp;
            output = echoed.getMuteConfig;
            tangon = offset.id;
            tangon = output.bind(echoed)(tangon);
            tangon = report.bind(sizing)(tangon);
            report = result.can_send_message;
            report = result.parent_channel_type;
            report = {};
            output = _closure1_slot4;
            sizing = _closure1_slot3;
            update = output.bind(entity)(result, sizing);
            source = report;
            sizing = copyDataProperties(source, update);
            output = offset.id;
            sizing = 'channel_id';
            report[sizing] = output;
            sizing = 'guild_id';
            report[sizing] = kiloes;
            sizing = 'parent_id';
            report[sizing] = backup;
            sizing = offset.type;
            offset = 'channel_type';
            report[offset] = sizing;
            offset = _closure1_slot8;
            offset = offset.HAS_INTERACTED;
            offset = foxtra & offset;
            offset = !offset;
            foxtra = !offset;
            offset = 'has_interacted_with_thread';
            report[offset] = foxtra;
            foxtra = _closure1_slot6;
            offset = foxtra.isGuildOrCategoryOrChannelMuted;
            foxtra = offset.bind(foxtra)(kiloes, backup);
            offset = 'parent_is_muted';
            report[offset] = foxtra;
            offset = 'old_thread_notification_setting';
            report[offset] = yankee;
            offset = zuuluu.flags;
            if(!(golfie != offset)) { _fun00004_ip = 375; continue _fun00003 }
 365:
            offset = zuuluu.flags;
            yankee = romeon.bind(entity)(offset);
 375:
            offset = 'new_thread_notification_setting';
            report[offset] = yankee;
            offset = oscard.channel_message_notification_settings;
            oscard = 'parent_notification_setting';
            report[oscard] = offset;
            oscard = 'old_thread_is_muted';
            report[oscard] = verify;
            oscard = zuuluu.muted;
            if(!(golfie != oscard)) { _fun00004_ip = 427; continue _fun00003 }
 424:
            verify = oscard;
 427:
            oscard = 'new_thread_is_muted';
            report[oscard] = verify;
            oscard = 'old_thread_muted_until';
            report[oscard] = tangon;
            oscard = zuuluu.mute_config;
            if(!(golfie != oscard)) { _fun00004_ip = 493; continue _fun00003 }
 459:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.muteConfigToTimestamp;
            zuuluu = zuuluu.mute_config;
            tangon = oscard.bind(golfie)(zuuluu);
 493:
            zuuluu = 'new_thread_muted_until';
            report[zuuluu] = tangon;
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 9;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.track;
            michal = _closure1_slot9;
            michal = michal.THREAD_NOTIFICATION_SETTINGS_UPDATED;
            michal = zuuluu.bind(tangon)(michal, report);
 545:
            return entity;
        }
    };
    zuuluu['trackThreadNotificationSettingsUpdated'] = tangon;
    michal = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 13;
            tangon = report[tangon];
            report = undefined;
            golfie = oscard.bind(report)(tangon);
            oscard = golfie.useStateFromStores;
            option = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = option;
            entity = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.lastMessageId;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = oscard.bind(golfie)(tangon, entity);
            tangon = null;
            entity = tangon != option;
            oscard = null;
            if(!entity) { _fun00008_ip = 104; continue _fun00007 }
 73:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 14;
            entity = verify[entity];
            golfie = golfie.bind(report)(entity);
            entity = golfie.extractTimestamp;
            oscard = entity.bind(golfie)(option);
 104:
            entity = michal.threadMetadata;
            golfie = tangon == entity;
            option = undefined;
            if(golfie) { _fun00008_ip = 125; continue _fun00007 }
 119:
            option = entity.createTimestamp;
 125:
            golfie = tangon != option;
            entity = null;
            if(!golfie) { _fun00008_ip = 168; continue _fun00007 }
 134:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            golfie = 15;
            golfie = offset[golfie];
            golfie = verify.bind(report)(golfie);
            option = golfie.bind(report)(option);
            golfie = option.valueOf;
            entity = golfie.bind(option)();
 168:
            if(!(tangon != oscard)) { _fun00008_ip = 175; continue _fun00007 }
 172:
            entity = oscard;
 175:
            if(!(tangon == entity)) { _fun00008_ip = 215; continue _fun00007 }
 179:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 14;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.extractTimestamp;
            michal = michal.id;
            entity = zuuluu.bind(tangon)(michal);
 215:
            return entity;
        }
    };
    zuuluu['useLastMessageTimestamp'] = michal;
    return entity;
})();