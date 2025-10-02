// app/modules/soundboard/trackSoundPlayed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsPremiumFeatureNames;
    var _closure1_slot8 = var7;
    var4 = var4.AnalyticsPremiumFeatureTiers;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/trackSoundPlayed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackSoundPlayed(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg3;
            var3 = _closure1_slot3;
            var2 = var3.getChannel;
            var4 = _closure1_slot5;
            var1 = var4.getVoiceChannelId;
            var1 = var1.bind(var4)();
            var3 = var2.bind(var3)(var1);
            var9 = null;
            var2 = var9 == var3;
            var1 = undefined;
            var12 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.getGuildId;
            var12 = var2.bind(var3)();
case 2:
            var3 = _closure1_slot4;
            var2 = var3.getMediaSessionId;
            var10 = var2.bind(var3)();
            var2 = var3.getRTCConnectionId;
            var11 = var2.bind(var3)();
            var3 = _closure1_slot2;
            var2 = var3.getCurrentGameForAnalytics;
            var2 = var2.bind(var3)();
            var3 = var9 == var2;
            var8 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var2.name;
case 4:
            var2 = var6.guildId;
            var13 = var12 !== var2;
            if(!var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var6.guildId;
            var2 = _closure1_slot6;
            var13 = var3 !== var2;
case 6:
            var3 = var6.guildId;
            var2 = _closure1_slot6;
            var7 = 'default';
            if(!(var3 !== var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = 'custom';
            if(!var13) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = 'custom-external';
case 10:
            var7 = var2;
case 8:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot7;
            var3 = var2.PREMIUM_FEATURE_USAGE;
            var2 = {};
            var15 = _closure1_slot8;
            var15 = var15.SOUNDBOARD_PLAY;
            var2['feature_name'] = var15;
            var14 = _closure1_slot9;
            if(var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var14.FREE;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var13 = var14.PREMIUM_STANDARD;
case 14:
            var2['feature_tier'] = var13;
            var2['guild_id'] = var12;
            var12 = var6.guildId;
            var2['home_guild_id'] = var12;
            var12 = arg1;
            var2['location_stack'] = var12;
            var2['rtc_connection_id'] = var11;
            var2['media_session_id'] = var10;
            var10 = arg2;
            var2['in_overlay'] = var10;
            var2['application_name'] = var8;
            var8 = var6.emojiId;
            if(!(var9 == var8)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var6.emojiName;
            var9 = var9 != var8;
            var8 = 0;
            if(!var9) { _fun0001_ip = 17; continue _fun0001 }
case 15:
            var8 = 1;
case 17:
            var2['emoji_count'] = var8;
            var2['feature_selection'] = var7;
            var6 = var6.soundId;
            var2['feature_selection_id'] = var6;
            var6 = arg4;
            var2['sound_type'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();