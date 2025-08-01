// app/modules/notifications/VoiceActivityNotificationExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var13 = true;
    var4['value'] = var13;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var5 = var4.ChannelTypes;
    var _closure1_slot0 = var5;
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot1 = var4;
    var4 = 1;
    var5 = var8[var4];
    var10 = var7.bind(var1)(var5);
    var9 = var10.createExperiment;
    var5 = {'kind': 'user', 'id': '2023-11_voice_activity_notification_user', 'label': 'Voice Activity Notifications for User'};
    var6 = {};
    var12 = false;
    var6['enabled'] = var12;
    var5['defaultConfig'] = var6;
    var6 = {'id': 1, 'label': 'Voice Activity Notifications are enabled for user'};
    var11 = {};
    var11['enabled'] = var13;
    var6['config'] = var11;
    var11 = new Array(2);
    var11[0] = var6;
    var14 = {'id': 2, 'label': 'Control for AA test. Voice Activity Notifications are NOT enabled for user.'};
    var6 = 2;
    var15 = {};
    var15['enabled'] = var12;
    var14['config'] = var15;
    var11[1] = var14;
    var5['treatments'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot2 = var5;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var9 = var10.createExperiment;
    var4 = {'kind': 'guild', 'id': '2023-11_voice_activity_notification_guild', 'label': 'General Voice Channel Notifications for Guild'};
    var11 = {};
    var11['voiceChannelActivityNotifsEnabled'] = var12;
    var4['defaultConfig'] = var11;
    var12 = {'id': 2, 'label': 'Deadchat notifs disabled, voice channel activity notifs enabled'};
    var11 = {};
    var11['voiceChannelActivityNotifsEnabled'] = var13;
    var12['config'] = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var4['treatments'] = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot3 = var4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/notifications/VoiceActivityNotificationExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['VoiceActivityNotificationUserExperiment'] = var5;
    var3['VoiceActivityNotificationGuildExperiment'] = var4;
    var4 = function useVoiceActivityNotificationSettingsExperiment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var9 = _closure1_slot3;
            var8 = var9.useExperiment;
            var7 = {};
            var2 = 'useVoiceActivityNotificationSettingsExperiment';
            var7['location'] = var2;
            var6 = null;
            var10 = var6 == var5;
            var3 = undefined;
            if(var10) { _fun0001_ip = 47; continue _fun0001 }
 37:
            var10 = var5.getGuildId;
            var3 = var10.bind(var5)();
 47:
            if(!(var6 == var3)) { _fun0001_ip = 55; continue _fun0001 }
 51:
            var3 = _closure1_slot1;
 55:
            var7['guildId'] = var3;
            var3 = {};
            var10 = var6 == var5;
            var11 = undefined;
            if(var10) { _fun0001_ip = 75; continue _fun0001 }
 70:
            var11 = var5.type;
 75:
            var10 = _closure1_slot0;
            var10 = var10.GUILD_VOICE;
            var10 = var11 !== var10;
            var3['disable'] = var10;
            var10 = false;
            var3['autoTrackExposure'] = var10;
            var3 = var8.bind(var9)(var7, var3);
            var3 = var3.voiceChannelActivityNotifsEnabled;
            var9 = _closure1_slot2;
            var8 = var9.useExperiment;
            var7 = {};
            var7['location'] = var2;
            var2 = {};
            var10 = var6 == var5;
            var11 = undefined;
            if(var10) { _fun0001_ip = 145; continue _fun0001 }
 140:
            var11 = var5.type;
 145:
            var10 = _closure1_slot0;
            var10 = var10.GUILD_VOICE;
            var10 = var11 !== var10;
            if(var10) { _fun0001_ip = 165; continue _fun0001 }
 162:
            var10 = !var3;
 165:
            var2['disable'] = var10;
            var10 = true;
            var2['autoTrackExposure'] = var10;
            var2 = var8.bind(var9)(var7, var2);
            var2 = var2.enabled;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 202; continue _fun0001 }
 197:
            var4 = var5.type;
 202:
            var1 = _closure1_slot0;
            var1 = var1.GUILD_VOICE;
            var1 = var4 === var1;
            if(!var1) { _fun0001_ip = 222; continue _fun0001 }
 219:
            var1 = var3;
 222:
            if(!var1) { _fun0001_ip = 228; continue _fun0001 }
 225:
            var1 = var2;
 228:
            return var1;
        }
    };
    var3['useVoiceActivityNotificationSettingsExperiment'] = var4;
    var2 = function hasVoiceChannelActivityNotifsEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var8 = arg1;
            var3 = _closure1_slot3;
            var2 = var3.getCurrentConfig;
            var1 = {};
            var6 = null;
            var7 = var6 == var8;
            var4 = undefined;
            if(var7) { _fun0002_ip = 39; continue _fun0002 }
 29:
            var7 = var8.getGuildId;
            var4 = var7.bind(var8)();
 39:
            if(!(var6 == var4)) { _fun0002_ip = 47; continue _fun0002 }
 43:
            var4 = _closure1_slot1;
 47:
            var1['guildId'] = var4;
            var4 = 'hasVoiceChannelActivityNotifsEnabled';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.voiceChannelActivityNotifsEnabled;
            return var1;
        }
    };
    var3['hasVoiceChannelActivityNotifsEnabled'] = var2;
    return var1;
})();