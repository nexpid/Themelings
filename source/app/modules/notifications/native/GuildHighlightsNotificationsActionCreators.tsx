// app/modules/notifications/native/GuildHighlightsNotificationsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.NotificationUserFeedbackReasons;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/native/GuildHighlightsNotificationsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: openGuildHighlightNotificationForPush
        mike = argFoo;
        var _closure2_slot0 = mike;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        entity = argCorge;
        var _closure2_slot3 = entity;
        entity = argGrault;
        var _closure2_slot4 = entity;
        tango = _closure1_slot1;
        backup = _closure1_slot2;
        entity = 2;
        zulu = backup[entity];
        entity = undefined;
        oscar = tango.bind(entity)(zulu);
        report = oscar.openLazy;
        foxtrot = _closure1_slot0;
        zulu = 4;
        zulu = backup[zulu];
        verify = foxtrot.bind(entity)(zulu);
        zulu = 3;
        tango = backup[zulu];
        zulu = backup.paths;
        tango = verify.bind(entity)(tango, zulu);
        zulu = {};
        zulu['guildId'] = mike;
        mike = {};
        verify = {};
        yankee = _closure1_slot3;
        options = yankee.TOO_MANY;
        verify['value'] = options;
        offset = 5;
        options = backup[offset];
        options = foxtrot.bind(entity)(options);
        kilo = options.intl;
        romeo = kilo.string;
        options = backup[offset];
        options = foxtrot.bind(entity)(options);
        options = options.t;
        options = options.pLeQp6;
        options = romeo.bind(kilo)(options);
        verify['label'] = options;
        options = new Array(5);
        options[0] = verify;
        verify = {};
        romeo = yankee.IRRELEVANT_CHANNEL;
        verify['value'] = romeo;
        romeo = backup[offset];
        romeo = foxtrot.bind(entity)(romeo);
        sizing = romeo.intl;
        kilo = sizing.string;
        romeo = backup[offset];
        romeo = foxtrot.bind(entity)(romeo);
        romeo = romeo.t;
        romeo = romeo.Lu4n29;
        romeo = kilo.bind(sizing)(romeo);
        verify['label'] = romeo;
        options[1] = verify;
        verify = {};
        romeo = yankee.IRRELEVANT_USER;
        verify['value'] = romeo;
        romeo = backup[offset];
        romeo = foxtrot.bind(entity)(romeo);
        sizing = romeo.intl;
        kilo = sizing.string;
        romeo = backup[offset];
        romeo = foxtrot.bind(entity)(romeo);
        romeo = romeo.t;
        romeo = romeo.TF6AhI;
        romeo = kilo.bind(sizing)(romeo);
        verify['label'] = romeo;
        options[2] = verify;
        verify = {};
        romeo = yankee.IRRELEVANT_TOPIC;
        verify['value'] = romeo;
        romeo = backup[offset];
        romeo = foxtrot.bind(entity)(romeo);
        sizing = romeo.intl;
        kilo = sizing.string;
        romeo = backup[offset];
        romeo = foxtrot.bind(entity)(romeo);
        romeo = romeo.t;
        romeo = romeo.s+8J8f;
        romeo = kilo.bind(sizing)(romeo);
        verify['label'] = romeo;
        options[3] = verify;
        verify = {};
        yankee = yankee.SENSITIVE_OR_OFFENSIVE_TOPIC;
        verify['value'] = yankee;
        yankee = backup[offset];
        yankee = foxtrot.bind(entity)(yankee);
        romeo = yankee.intl;
        yankee = romeo.string;
        offset = backup[offset];
        offset = foxtrot.bind(entity)(offset);
        offset = offset.t;
        offset = offset.fEUR7e;
        offset = yankee.bind(romeo)(offset);
        verify['label'] = offset;
        options[4] = verify;
        mike['reasons'] = options;
        options = function() { // Original name: onFeedbackShown
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 6;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot4;
            zulu = mike.FEEDBACK_FORM_VIEWED;
            mike = {};
            golf = _closure2_slot2;
            mike['type'] = golf;
            golf = _closure2_slot3;
            mike['location'] = golf;
            golf = _closure2_slot0;
            mike['guild_id'] = golf;
            golf = _closure2_slot1;
            options = golf.channel_id;
            mike['channel_id'] = options;
            golf = golf.id;
            mike['message_id'] = golf;
            verify = _closure2_slot4;
            offset = mike;
            oscar = copyDataProperties(offset, verify);
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        mike['onFeedbackShown'] = options;
        golf = function(argFoo) { // Original name: onFeedbackCompleted
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                golf = entity.rating;
                options = entity.reason;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 6;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot4;
                zulu = mike.FEEDBACK_FORM_SUBMITTED;
                mike = {};
                verify = _closure2_slot2;
                mike['type'] = verify;
                verify = _closure2_slot3;
                mike['location'] = verify;
                mike['rating'] = golf;
                golf = null;
                verify = golf == options;
                golf = undefined;
                if(verify) { _fun00002_ip = 97; continue _fun00001 }
 92:
                golf = options.value;
 97:
                mike['reason'] = golf;
                golf = _closure2_slot0;
                mike['guild_id'] = golf;
                golf = _closure2_slot1;
                options = golf.channel_id;
                mike['channel_id'] = options;
                golf = golf.id;
                mike['message_id'] = golf;
                offset = _closure2_slot4;
                yankee = mike;
                oscar = copyDataProperties(yankee, offset);
                mike = tango.bind(report)(zulu, mike);
                return entity;
            }
        };
        mike['onFeedbackCompleted'] = golf;
        zulu['feedbackSettings'] = mike;
        mike = 'GuildHighlightsNotifications';
        mike = report.bind(oscar)(tango, mike, zulu);
        return entity;
    };
    zulu['openGuildHighlightNotificationForPush'] = mike;
    return entity;
})();