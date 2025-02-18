// app/modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx
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
    tangon = tangon.ChannelNotificationSettingsFlags;
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
    tangon = 'modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: NotificationSettingsMessageUnreadChannelActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 6;
            michal = option[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useChannelPresetSettings;
            entity = entity.channel;
            entity = michal.bind(zuuluu)(entity);
            oscard = entity.unread;
            verify = entity.notification;
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            entity = 7;
            entity = option[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['value'] = oscard;
            oscard = _closure1_slot4;
            option = oscard.ALL_MESSAGES;
            oscard = undefined;
            if(!(verify === option)) { _fun00002_ip = 159; continue _fun00001 }
 104:
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
 159:
            entity['disabledMentionOnlyWithReason'] = oscard;
            report = function(argFoo) { // Original name: onChange
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    verify = argFoo;
                    oscard = _closure1_slot3;
                    report = oscard.getChannelIdFlags;
                    zuuluu = _closure2_slot0;
                    entity = zuuluu.channel;
                    tangon = entity.guild_id;
                    entity = zuuluu.channel;
                    entity = entity.id;
                    romeon = report.bind(oscard)(tangon, entity);
                    report = _closure1_slot1;
                    yankee = _closure1_slot2;
                    entity = 9;
                    tangon = yankee[entity];
                    entity = undefined;
                    golfie = report.bind(entity)(tangon);
                    oscard = golfie.updateChannelOverrideSettings;
                    tangon = zuuluu.channel;
                    report = tangon.guild_id;
                    zuuluu = zuuluu.channel;
                    tangon = zuuluu.id;
                    zuuluu = {};
                    offset = _closure1_slot0;
                    option = 10;
                    option = yankee[option];
                    yankee = offset.bind(entity)(option);
                    offset = yankee.withChannelUnreadFlags;
                    option = _closure1_slot5;
                    option = option.ALL_MESSAGES;
                    if(!(verify !== option)) { _fun00004_ip = 147; continue _fun00003 }
 135:
                    option = _closure1_slot6;
                    option = option.UNREADS_ONLY_MENTIONS;
                    _fun00004_ip = 157; continue _fun00003;
 147:
                    foxtra = _closure1_slot6;
                    option = foxtra.UNREADS_ALL_MESSAGES;
 157:
                    option = offset.bind(yankee)(romeon, option);
                    zuuluu['flags'] = option;
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    michal = 11;
                    michal = offset[michal];
                    michal = option.bind(entity)(michal);
                    option = michal.NotificationLabel;
                    michal = option.unreads;
                    backup = michal.bind(option)(verify);
                    result = golfie;
                    output = report;
                    sizing = tangon;
                    kiloes = zuuluu;
                    michal = result[oscard](output, sizing, kiloes, backup, foxtra);
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