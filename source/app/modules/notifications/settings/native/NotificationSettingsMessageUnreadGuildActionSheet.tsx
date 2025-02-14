// app/modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UserNotificationSettings;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildNotificationSettingsFlags;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: NotificationSettingsMessageUnreadGuildActionSheet
        _fun86891: for(var _fun86891_ip = 0; ; ) switch(_fun86891_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 6;
            mike = golf[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useGuildPresetSettings;
            entity = entity.guildId;
            entity = mike.bind(zulu)(entity);
            oscar = entity.unread;
            offset = entity.notification;
            zulu = _closure1_slot7;
            mike = _closure1_slot1;
            entity = 7;
            entity = golf[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            golf = _closure1_slot4;
            verify = golf.ALL_MESSAGES;
            golf = undefined;
            if(!(offset === verify)) { _fun86891_ip = 155; continue _fun86891 }
 100:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 8;
            verify = romeo[options];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(tango)(options);
            options = options.t;
            options = options.eP8yWV;
            golf = verify.bind(offset)(options);
 155:
            entity['disabledMentionOnlyWithReason'] = golf;
            entity['value'] = oscar;
            report = function(argFoo) { // Original name: onChange
                _fun86892: for(var _fun86892_ip = 0; ; ) switch(_fun86892_ip) {
 0:
                    options = argFoo;
                    report = _closure1_slot3;
                    tango = report.getGuildFlags;
                    zulu = _closure2_slot0;
                    entity = zulu.guildId;
                    yankee = tango.bind(report)(entity);
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 9;
                    tango = offset[entity];
                    entity = undefined;
                    oscar = report.bind(entity)(tango);
                    report = oscar.updateGuildNotificationSettings;
                    tango = zulu.guildId;
                    zulu = {};
                    verify = _closure1_slot0;
                    golf = 10;
                    golf = offset[golf];
                    offset = verify.bind(entity)(golf);
                    verify = offset.withGuildUnreadFlags;
                    golf = _closure1_slot5;
                    golf = golf.ALL_MESSAGES;
                    if(!(options !== golf)) { _fun86892_ip = 116; continue _fun86892 }
 104:
                    golf = _closure1_slot6;
                    golf = golf.UNREADS_ONLY_MENTIONS;
                    _fun86892_ip = 126; continue _fun86892;
 116:
                    romeo = _closure1_slot6;
                    golf = romeo.UNREADS_ALL_MESSAGES;
 126:
                    golf = verify.bind(offset)(yankee, golf);
                    zulu['flags'] = golf;
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    mike = 11;
                    mike = verify[mike];
                    mike = golf.bind(entity)(mike);
                    golf = mike.NotificationLabel;
                    mike = golf.unreads;
                    mike = mike.bind(golf)(options);
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                }
            };
            entity['onChange'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();