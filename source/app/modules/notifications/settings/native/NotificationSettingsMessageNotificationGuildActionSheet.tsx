// app/modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserNotificationSettings;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildNotificationSettingsFlags;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: NotificationSettingsMessageNotificationGuildActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useGuildPresetSettings;
            entity = entity.guildId;
            entity = michal.bind(zuuluu)(entity);
            verify = entity.unread;
            var _closure2_slot1 = verify;
            offset = entity.notification;
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            entity = 7;
            entity = oscard[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            oscard = 'guild';
            entity['context'] = oscard;
            entity['value'] = offset;
            oscard = _closure1_slot4;
            option = oscard.ALL_MESSAGES;
            oscard = undefined;
            if(!(offset !== option)) { _fun00002_ip = 187; continue _fun00001 }
 116:
            option = _closure1_slot5;
            option = option.ALL_MESSAGES;
            oscard = undefined;
            if(!(verify !== option)) { _fun00002_ip = 187; continue _fun00001 }
 132:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 8;
            option = yankee[golfie];
            option = offset.bind(tangon)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.eP8yWV;
            oscard = option.bind(verify)(golfie);
 187:
            entity['allMessagesSubLabel'] = oscard;
            report = function(argFoo) { // Original name: onChange
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    option = argFoo;
                    oscard = {};
                    oscard['message_notifications'] = option;
                    entity = _closure1_slot4;
                    entity = entity.ALL_MESSAGES;
                    entity = option === entity;
                    if(!entity) { _fun00004_ip = 51; continue _fun00003 }
 30:
                    tangon = _closure2_slot1;
                    zuuluu = _closure1_slot5;
                    zuuluu = zuuluu.ALL_MESSAGES;
                    entity = tangon !== zuuluu;
 51:
                    if(!entity) { _fun00004_ip = 131; continue _fun00003 }
 54:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 9;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.withGuildUnreadFlags;
                    golfie = _closure1_slot3;
                    zuuluu = golfie.getGuildFlags;
                    entity = _closure2_slot0;
                    entity = entity.guildId;
                    zuuluu = zuuluu.bind(golfie)(entity);
                    entity = _closure1_slot6;
                    entity = entity.UNREADS_ALL_MESSAGES;
                    entity = tangon.bind(report)(zuuluu, entity);
                    oscard['flags'] = entity;
 131:
                    tangon = _closure1_slot1;
                    verify = _closure1_slot2;
                    entity = 10;
                    zuuluu = verify[entity];
                    entity = undefined;
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.updateGuildNotificationSettings;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.guildId;
                    golfie = _closure1_slot0;
                    michal = 11;
                    michal = verify[michal];
                    michal = golfie.bind(entity)(michal);
                    golfie = michal.NotificationLabel;
                    michal = golfie.notifications;
                    michal = michal.bind(golfie)(option);
                    michal = tangon.bind(report)(zuuluu, oscard, michal);
                    return entity;
                }
            };
            entity['onChange'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();