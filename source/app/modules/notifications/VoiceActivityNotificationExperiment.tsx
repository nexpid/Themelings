// app/modules/notifications/VoiceActivityNotificationExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    foxtrot = true;
    tango['value'] = foxtrot;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    report = tango.ChannelTypes;
    var _closure1_slot0 = report;
    tango = tango.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot1 = tango;
    tango = 1;
    report = options[tango];
    offset = golf.bind(entity)(report);
    verify = offset.createExperiment;
    report = {'kind': 'user', 'id': '2023-11_voice_activity_notification_user', 'label': 'Voice Activity Notifications for User'};
    oscar = {};
    romeo = false;
    oscar['enabled'] = romeo;
    report['defaultConfig'] = oscar;
    oscar = {'id': 1, 'label': 'Voice Activity Notifications are enabled for user'};
    yankee = {};
    yankee['enabled'] = foxtrot;
    oscar['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = oscar;
    backup = {'id': 2, 'label': 'Control for AA test. Voice Activity Notifications are NOT enabled for user.'};
    oscar = 2;
    kilo = {};
    kilo['enabled'] = romeo;
    backup['config'] = kilo;
    yankee[1] = backup;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot2 = report;
    tango = options[tango];
    offset = golf.bind(entity)(tango);
    verify = offset.createExperiment;
    tango = {'kind': 'guild', 'id': '2023-11_voice_activity_notification_guild', 'label': 'General Voice Channel Notifications for Guild'};
    yankee = {};
    yankee['voiceChannelActivityNotifsEnabled'] = romeo;
    tango['defaultConfig'] = yankee;
    romeo = {'id': 2, 'label': 'Deadchat notifs disabled, voice channel activity notifs enabled'};
    yankee = {};
    yankee['voiceChannelActivityNotifsEnabled'] = foxtrot;
    romeo['config'] = yankee;
    yankee = new Array(1);
    yankee[0] = romeo;
    tango['treatments'] = yankee;
    tango = verify.bind(offset)(tango);
    var _closure1_slot3 = tango;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/notifications/VoiceActivityNotificationExperiment.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['VoiceActivityNotificationUserExperiment'] = report;
    zulu['VoiceActivityNotificationGuildExperiment'] = tango;
    tango = function(argFoo) { // Original name: useVoiceActivityNotificationSettingsExperiment
        _fun86783: for(var _fun86783_ip = 0; ; ) switch(_fun86783_ip) {
 0:
            report = argFoo;
            verify = _closure1_slot3;
            options = verify.useExperiment;
            golf = {};
            mike = 'useVoiceActivityNotificationSettingsExperiment';
            golf['location'] = mike;
            oscar = null;
            offset = oscar == report;
            zulu = undefined;
            if(offset) { _fun86783_ip = 47; continue _fun86783 }
 37:
            offset = report.getGuildId;
            zulu = offset.bind(report)();
 47:
            if(!(oscar == zulu)) { _fun86783_ip = 55; continue _fun86783 }
 51:
            zulu = _closure1_slot1;
 55:
            golf['guildId'] = zulu;
            zulu = {};
            offset = oscar == report;
            yankee = undefined;
            if(offset) { _fun86783_ip = 75; continue _fun86783 }
 70:
            yankee = report.type;
 75:
            offset = _closure1_slot0;
            offset = offset.GUILD_VOICE;
            offset = yankee !== offset;
            zulu['disable'] = offset;
            offset = false;
            zulu['autoTrackExposure'] = offset;
            zulu = options.bind(verify)(golf, zulu);
            zulu = zulu.voiceChannelActivityNotifsEnabled;
            verify = _closure1_slot2;
            options = verify.useExperiment;
            golf = {};
            golf['location'] = mike;
            mike = {};
            offset = oscar == report;
            yankee = undefined;
            if(offset) { _fun86783_ip = 145; continue _fun86783 }
 140:
            yankee = report.type;
 145:
            offset = _closure1_slot0;
            offset = offset.GUILD_VOICE;
            offset = yankee !== offset;
            if(offset) { _fun86783_ip = 165; continue _fun86783 }
 162:
            offset = !zulu;
 165:
            mike['disable'] = offset;
            offset = true;
            mike['autoTrackExposure'] = offset;
            mike = options.bind(verify)(golf, mike);
            mike = mike.enabled;
            oscar = oscar == report;
            tango = undefined;
            if(oscar) { _fun86783_ip = 202; continue _fun86783 }
 197:
            tango = report.type;
 202:
            entity = _closure1_slot0;
            entity = entity.GUILD_VOICE;
            entity = tango === entity;
            if(!entity) { _fun86783_ip = 222; continue _fun86783 }
 219:
            entity = zulu;
 222:
            if(!entity) { _fun86783_ip = 228; continue _fun86783 }
 225:
            entity = mike;
 228:
            return entity;
        }
    };
    zulu['useVoiceActivityNotificationSettingsExperiment'] = tango;
    mike = function(argFoo) { // Original name: hasVoiceChannelActivityNotifsEnabled
        _fun86784: for(var _fun86784_ip = 0; ; ) switch(_fun86784_ip) {
 0:
            options = argFoo;
            zulu = _closure1_slot3;
            mike = zulu.getCurrentConfig;
            entity = {};
            oscar = null;
            golf = oscar == options;
            tango = undefined;
            if(golf) { _fun86784_ip = 39; continue _fun86784 }
 29:
            golf = options.getGuildId;
            tango = golf.bind(options)();
 39:
            if(!(oscar == tango)) { _fun86784_ip = 47; continue _fun86784 }
 43:
            tango = _closure1_slot1;
 47:
            entity['guildId'] = tango;
            tango = 'hasVoiceChannelActivityNotifsEnabled';
            entity['location'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = entity.voiceChannelActivityNotifsEnabled;
            return entity;
        }
    };
    zulu['hasVoiceChannelActivityNotifsEnabled'] = mike;
    return entity;
})();