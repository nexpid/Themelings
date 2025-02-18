// app/modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx
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
    tangon = 'modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: NotificationSettingsMessageUnreadGuildActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 6;
            michal = golfie[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useGuildPresetSettings;
            entity = entity.guildId;
            entity = michal.bind(zuuluu)(entity);
            oscard = entity.unread;
            offset = entity.notification;
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            entity = 7;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            golfie = _closure1_slot4;
            verify = golfie.ALL_MESSAGES;
            golfie = undefined;
            if(!(offset === verify)) { _fun00002_ip = 155; continue _fun00001 }
 100:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 8;
            verify = romeon[option];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(tangon)(option);
            option = option.t;
            option = option.eP8yWV;
            golfie = verify.bind(offset)(option);
 155:
            entity['disabledMentionOnlyWithReason'] = golfie;
            entity['value'] = oscard;
            report = function(argFoo) { // Original name: onChange
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    option = argFoo;
                    report = _closure1_slot3;
                    tangon = report.getGuildFlags;
                    zuuluu = _closure2_slot0;
                    entity = zuuluu.guildId;
                    yankee = tangon.bind(report)(entity);
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 9;
                    tangon = offset[entity];
                    entity = undefined;
                    oscard = report.bind(entity)(tangon);
                    report = oscard.updateGuildNotificationSettings;
                    tangon = zuuluu.guildId;
                    zuuluu = {};
                    verify = _closure1_slot0;
                    golfie = 10;
                    golfie = offset[golfie];
                    offset = verify.bind(entity)(golfie);
                    verify = offset.withGuildUnreadFlags;
                    golfie = _closure1_slot5;
                    golfie = golfie.ALL_MESSAGES;
                    if(!(option !== golfie)) { _fun00004_ip = 116; continue _fun00003 }
 104:
                    golfie = _closure1_slot6;
                    golfie = golfie.UNREADS_ONLY_MENTIONS;
                    _fun00004_ip = 126; continue _fun00003;
 116:
                    romeon = _closure1_slot6;
                    golfie = romeon.UNREADS_ALL_MESSAGES;
 126:
                    golfie = verify.bind(offset)(yankee, golfie);
                    zuuluu['flags'] = golfie;
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 11;
                    michal = verify[michal];
                    michal = golfie.bind(entity)(michal);
                    golfie = michal.NotificationLabel;
                    michal = golfie.unreads;
                    michal = michal.bind(golfie)(option);
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
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