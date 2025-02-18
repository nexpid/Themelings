// app/modules/notifications/VoiceActivityNotificationExperiment.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    foxtra = true;
    tangon['value'] = foxtra;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    report = tangon.ChannelTypes;
    var _closure1_slot0 = report;
    tangon = tangon.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot1 = tangon;
    tangon = 1;
    report = option[tangon];
    offset = golfie.bind(entity)(report);
    verify = offset.createExperiment;
    report = {'kind': 'user', 'id': '2023-11_voice_activity_notification_user', 'label': 'Voice Activity Notifications for User'};
    oscard = {};
    romeon = false;
    oscard['enabled'] = romeon;
    report['defaultConfig'] = oscard;
    oscard = {'id': 1, 'label': 'Voice Activity Notifications are enabled for user'};
    yankee = {};
    yankee['enabled'] = foxtra;
    oscard['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = oscard;
    backup = {'id': 2, 'label': 'Control for AA test. Voice Activity Notifications are NOT enabled for user.'};
    oscard = 2;
    kiloes = {};
    kiloes['enabled'] = romeon;
    backup['config'] = kiloes;
    yankee[1] = backup;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot2 = report;
    tangon = option[tangon];
    offset = golfie.bind(entity)(tangon);
    verify = offset.createExperiment;
    tangon = {'kind': 'guild', 'id': '2023-11_voice_activity_notification_guild', 'label': 'General Voice Channel Notifications for Guild'};
    yankee = {};
    yankee['voiceChannelActivityNotifsEnabled'] = romeon;
    tangon['defaultConfig'] = yankee;
    romeon = {'id': 2, 'label': 'Deadchat notifs disabled, voice channel activity notifs enabled'};
    yankee = {};
    yankee['voiceChannelActivityNotifsEnabled'] = foxtra;
    romeon['config'] = yankee;
    yankee = new Array(1);
    yankee[0] = romeon;
    tangon['treatments'] = yankee;
    tangon = verify.bind(offset)(tangon);
    var _closure1_slot3 = tangon;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/notifications/VoiceActivityNotificationExperiment.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['VoiceActivityNotificationUserExperiment'] = report;
    zuuluu['VoiceActivityNotificationGuildExperiment'] = tangon;
    tangon = function(argFoo) { // Original name: useVoiceActivityNotificationSettingsExperiment
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            verify = _closure1_slot3;
            option = verify.useExperiment;
            golfie = {};
            michal = 'useVoiceActivityNotificationSettingsExperiment';
            golfie['location'] = michal;
            oscard = null;
            offset = oscard == report;
            zuuluu = undefined;
            if(offset) { _fun00002_ip = 47; continue _fun00001 }
 37:
            offset = report.getGuildId;
            zuuluu = offset.bind(report)();
 47:
            if(!(oscard == zuuluu)) { _fun00002_ip = 55; continue _fun00001 }
 51:
            zuuluu = _closure1_slot1;
 55:
            golfie['guildId'] = zuuluu;
            zuuluu = {};
            offset = oscard == report;
            yankee = undefined;
            if(offset) { _fun00002_ip = 75; continue _fun00001 }
 70:
            yankee = report.type;
 75:
            offset = _closure1_slot0;
            offset = offset.GUILD_VOICE;
            offset = yankee !== offset;
            zuuluu['disable'] = offset;
            offset = false;
            zuuluu['autoTrackExposure'] = offset;
            zuuluu = option.bind(verify)(golfie, zuuluu);
            zuuluu = zuuluu.voiceChannelActivityNotifsEnabled;
            verify = _closure1_slot2;
            option = verify.useExperiment;
            golfie = {};
            golfie['location'] = michal;
            michal = {};
            offset = oscard == report;
            yankee = undefined;
            if(offset) { _fun00002_ip = 145; continue _fun00001 }
 140:
            yankee = report.type;
 145:
            offset = _closure1_slot0;
            offset = offset.GUILD_VOICE;
            offset = yankee !== offset;
            if(offset) { _fun00002_ip = 165; continue _fun00001 }
 162:
            offset = !zuuluu;
 165:
            michal['disable'] = offset;
            offset = true;
            michal['autoTrackExposure'] = offset;
            michal = option.bind(verify)(golfie, michal);
            michal = michal.enabled;
            oscard = oscard == report;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 202; continue _fun00001 }
 197:
            tangon = report.type;
 202:
            entity = _closure1_slot0;
            entity = entity.GUILD_VOICE;
            entity = tangon === entity;
            if(!entity) { _fun00002_ip = 222; continue _fun00001 }
 219:
            entity = zuuluu;
 222:
            if(!entity) { _fun00002_ip = 228; continue _fun00001 }
 225:
            entity = michal;
 228:
            return entity;
        }
    };
    zuuluu['useVoiceActivityNotificationSettingsExperiment'] = tangon;
    michal = function(argFoo) { // Original name: hasVoiceChannelActivityNotifsEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            option = argFoo;
            zuuluu = _closure1_slot3;
            michal = zuuluu.getCurrentConfig;
            entity = {};
            oscard = null;
            golfie = oscard == option;
            tangon = undefined;
            if(golfie) { _fun00004_ip = 39; continue _fun00003 }
 29:
            golfie = option.getGuildId;
            tangon = golfie.bind(option)();
 39:
            if(!(oscard == tangon)) { _fun00004_ip = 47; continue _fun00003 }
 43:
            tangon = _closure1_slot1;
 47:
            entity['guildId'] = tangon;
            tangon = 'hasVoiceChannelActivityNotifsEnabled';
            entity['location'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = entity.voiceChannelActivityNotifsEnabled;
            return entity;
        }
    };
    zuuluu['hasVoiceChannelActivityNotifsEnabled'] = michal;
    return entity;
})();