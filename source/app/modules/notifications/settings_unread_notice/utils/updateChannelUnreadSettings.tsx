// app/modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticsObjects;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelNotificationSettingsFlags;
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: updateChannelUnreadSettings
        _fun89682: for(var _fun89682_ip = 0; ; ) switch(_fun89682_ip) {
 0:
            options = argFoo;
            golf = argBar;
            yankee = argBaz;
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 4;
            mike = offset[entity];
            entity = undefined;
            oscar = zulu.bind(entity)(mike);
            report = oscar.updateChannelOverrideSettings;
            tango = {};
            zulu = _closure1_slot0;
            mike = 5;
            mike = offset[mike];
            foxtrot = zulu.bind(entity)(mike);
            romeo = foxtrot.withChannelUnreadFlags;
            backup = _closure1_slot3;
            mike = backup.getChannelIdFlags;
            mike = mike.bind(backup)(options, golf);
            mike = romeo.bind(foxtrot)(mike, yankee);
            tango['flags'] = mike;
            mike = 6;
            mike = offset[mike];
            mike = zulu.bind(entity)(mike);
            offset = mike.NotificationLabel;
            zulu = offset.unreads;
            mike = _closure1_slot6;
            mike = mike.UNREADS_ALL_MESSAGES;
            if(!(yankee !== mike)) { _fun89682_ip = 140; continue _fun89682 }
 128:
            mike = _closure1_slot5;
            mike = mike.ONLY_MENTIONS;
            _fun89682_ip = 150; continue _fun89682;
 140:
            yankee = _closure1_slot5;
            mike = yankee.ALL_MESSAGES;
 150:
            sizing = zulu.bind(offset)(mike);
            mike = {};
            verify = _closure1_slot4;
            verify = verify.NOTIFICATION_SETTING_UNREAD_NOTICE;
            mike['object'] = verify;
            update = oscar;
            echo = options;
            result = golf;
            output = tango;
            kilo = mike;
            mike = update[report](echo, result, output, sizing, kilo, backup);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();