// app/modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.queueBlockWarning;
    var _closure1_slot4 = var7;
    var4 = var4.dequeueBlockWarning;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoiceChannelWarningSurfaces;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showVoiceChannelBlockedUserWarning(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var9 = arg2;
            var2 = _closure1_slot3;
            var1 = var2.getState;
            var3 = var1.bind(var2)();
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.AppStates;
            var2 = var2.ACTIVE;
            if(!(var3 !== var2)) { _fun0001_ip = 74; continue _fun0001 }
 61:
            var2 = _closure1_slot4;
            var2 = var2.bind(var1)();
            _fun0001_ip = 234; continue _fun0001;
 74:
            var2 = _closure1_slot5;
            var2 = var2.bind(var1)();
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 4;
            var2 = var11[var2];
            var6 = var3.bind(var1)(var2);
            var5 = var6.openLazy;
            var10 = _closure1_slot0;
            var2 = 6;
            var2 = var11[var2];
            var4 = var10.bind(var1)(var2);
            var2 = 5;
            var3 = var11[var2];
            var2 = var11.paths;
            var4 = var4.bind(var1)(var3, var2);
            var3 = {};
            var3['channelId'] = var8;
            var3['blockedUserId'] = var9;
            var2 = 7;
            var2 = var11[var2];
            var2 = var10.bind(var1)(var2);
            var2 = var2.ImpressionNames;
            var2 = var2.VOICE_CHANNEL_BLOCKED_USER_WARNING;
            var3['impressionName'] = var2;
            var2 = {};
            var2['channel_id'] = var8;
            var8 = new Array(1);
            var8[0] = var9;
            var2['blocked_user_ids'] = var8;
            var7 = _closure1_slot6;
            var7 = var7.POST_JOIN_SHEET;
            var2['warning_surface'] = var7;
            var3['impressionProperties'] = var2;
            var2 = 'gdm_blocked_user_action_sheet';
            var2 = var5.bind(var6)(var4, var2, var3);
 234:
            return var1;
        }
    };
    var3['showVoiceChannelBlockedUserWarning'] = var2;
    return var1;
})();