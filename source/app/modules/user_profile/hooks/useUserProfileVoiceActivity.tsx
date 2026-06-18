// app/modules/user_profile/hooks/useUserProfileVoiceActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function isUserProfileVoiceActivityForChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.activity;
            var3 = var1.voiceChannelId;
            var4 = var1.voiceStateForSession;
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var6.bind(var2)(var1);
            var1 = var1.bind(var2)(var5);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = null;
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var4.channelId;
case 4:
            var1 = var2 === var3;
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/hooks/useUserProfileVoiceActivity.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useUserProfileVoiceActivity(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.userId;
            var _closure2_slot0 = var7;
            var4 = var1.guildId;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 3;
            var1 = var8[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['userId'] = var7;
            var1['guildId'] = var4;
            var1 = var3.bind(var5)(var1);
            var4 = var1.voiceState;
            var3 = var1.voiceChannel;
            var1 = null;
            var7 = var1 == var3;
            var1 = undefined;
            if(var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3.id;
case 6:
            _closure2_slot1 = var1;
            var1 = {};
            var1['voiceState'] = var4;
            var1['voiceChannel'] = var3;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStores;
            var7 = _closure1_slot3;
            var3 = new Array(2);
            var3[0] = var7;
            var6 = _closure1_slot4;
            var3[1] = var6;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot1;
                    if(!(var1 == var3)) { _fun0003_ip = 10; continue _fun0003 }
case 8:
                    var3 = undefined;
                    return var3;
case 10:
                    var5 = _closure1_slot3;
                    var4 = var5.findActivity;
                    var3 = _closure2_slot0;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var3 = _closure1_slot5;
                        var2 = {};
                        var2['activity'] = var1;
                        var6 = _closure2_slot1;
                        var2['voiceChannelId'] = var6;
                        var6 = _closure1_slot4;
                        var5 = var6.getVoiceStateForSession;
                        var4 = _closure2_slot0;
                        var1 = var1.session_id;
                        var1 = var5.bind(var6)(var4, var1);
                        var2['voiceStateForSession'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var3 = var1 != var2;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var1 = var2;
case 11:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var1['voiceActivity'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['isUserProfileVoiceActivityForChannel'] = var2;
    return var1;
})();