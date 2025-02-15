// app/modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx
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
    tango = tango.ChannelNotificationSettingsFlags;
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
    tango = 'modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: NotificationSettingsMessageNotificationChannelActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 6;
            mike = oscar[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useChannelPresetSettings;
            entity = entity.channel;
            entity = mike.bind(zulu)(entity);
            verify = entity.unread;
            var _closure2_slot1 = verify;
            offset = entity.notification;
            zulu = _closure1_slot7;
            mike = _closure1_slot1;
            entity = 7;
            entity = oscar[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            oscar = 'channel';
            entity['context'] = oscar;
            entity['value'] = offset;
            oscar = _closure1_slot4;
            options = oscar.ALL_MESSAGES;
            oscar = undefined;
            if(!(offset !== options)) { _fun00002_ip = 187; continue _fun00001 }
 116:
            options = _closure1_slot5;
            options = options.ALL_MESSAGES;
            oscar = undefined;
            if(!(verify !== options)) { _fun00002_ip = 187; continue _fun00001 }
 132:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golf = 8;
            options = yankee[golf];
            options = offset.bind(tango)(options);
            verify = options.intl;
            options = verify.string;
            golf = yankee[golf];
            golf = offset.bind(tango)(golf);
            golf = golf.t;
            golf = golf.eP8yWV;
            oscar = options.bind(verify)(golf);
 187:
            entity['allMessagesSubLabel'] = oscar;
            report = function(argFoo) { // Original name: onChange
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    verify = argFoo;
                    golf = {};
                    golf['message_notifications'] = verify;
                    entity = _closure1_slot4;
                    entity = entity.ALL_MESSAGES;
                    entity = verify === entity;
                    if(!entity) { _fun00004_ip = 51; continue _fun00003 }
 30:
                    tango = _closure2_slot1;
                    zulu = _closure1_slot5;
                    zulu = zulu.ALL_MESSAGES;
                    entity = tango !== zulu;
 51:
                    if(!entity) { _fun00004_ip = 147; continue _fun00003 }
 54:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 9;
                    zulu = zulu[entity];
                    entity = undefined;
                    report = tango.bind(entity)(zulu);
                    tango = report.withChannelUnreadFlags;
                    options = _closure1_slot3;
                    oscar = options.getChannelIdFlags;
                    entity = _closure2_slot0;
                    zulu = entity.channel;
                    zulu = zulu.guild_id;
                    entity = entity.channel;
                    entity = entity.id;
                    zulu = oscar.bind(options)(zulu, entity);
                    entity = _closure1_slot6;
                    entity = entity.UNREADS_ALL_MESSAGES;
                    entity = tango.bind(report)(zulu, entity);
                    golf['flags'] = entity;
 147:
                    tango = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 10;
                    zulu = offset[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.updateChannelOverrideSettings;
                    zulu = _closure2_slot0;
                    tango = zulu.channel;
                    tango = tango.guild_id;
                    zulu = zulu.channel;
                    foxtrot = zulu.id;
                    options = _closure1_slot0;
                    mike = 11;
                    mike = offset[mike];
                    mike = options.bind(entity)(mike);
                    options = mike.NotificationLabel;
                    mike = options.notifications;
                    yankee = mike.bind(options)(verify);
                    kilo = oscar;
                    backup = tango;
                    romeo = golf;
                    mike = kilo[report](backup, foxtrot, romeo, yankee, offset);
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