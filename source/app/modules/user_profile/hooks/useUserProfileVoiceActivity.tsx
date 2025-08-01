// app/modules/user_profile/hooks/useUserProfileVoiceActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useUserProfileVoiceActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileVoiceActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.userId;
            var _closure2_slot0 = var5;
            var4 = var2.guildId;
            var6 = undefined;
            var _closure2_slot1 = var6;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 2;
            var2 = var8[var2];
            var3 = var3.bind(var6)(var2);
            var2 = {};
            var2['userId'] = var5;
            var2['guildId'] = var4;
            var2 = var3.bind(var6)(var2);
            var4 = var2.voiceState;
            var3 = var2.voiceChannel;
            var2 = null;
            var5 = var2 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 91; continue _fun0001 }
 86:
            var2 = var3.id;
 91:
            _closure2_slot1 = var2;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 3;
            var2 = var8[var2];
            var6 = var5.bind(var6)(var2);
            var5 = var6.useStateFromStores;
            var8 = _closure1_slot3;
            var2 = new Array(2);
            var2[0] = var8;
            var7 = _closure1_slot4;
            var2[1] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 21; continue _fun0002 }
 13:
                    var3 = _closure2_slot1;
                    if(!(var1 == var3)) { _fun0002_ip = 25; continue _fun0002 }
 21:
                    var3 = undefined;
                    return var3;
 25:
                    var5 = _closure1_slot3;
                    var4 = var5.findActivity;
                    var3 = _closure2_slot0;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var3 = arg1;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 4;
                            var4 = var4[var2];
                            var2 = undefined;
                            var4 = var5.bind(var2)(var4);
                            var4 = var4.bind(var2)(var3);
                            if(var4) { _fun0003_ip = 40; continue _fun0003 }
 36:
                            var4 = false;
                            return var4;
 40:
                            var6 = _closure1_slot4;
                            var5 = var6.getVoiceStateForSession;
                            var4 = _closure2_slot0;
                            var3 = var3.session_id;
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = null;
                            var4 = var4 == var3;
                            var2 = undefined;
                            if(var4) { _fun0003_ip = 85; continue _fun0003 }
 80:
                            var2 = var3.channelId;
 85:
                            var1 = _closure2_slot1;
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var3 = var1 != var2;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 67; continue _fun0002 }
 64:
                    var1 = var2;
 67:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2, var1);
            var1 = {};
            var1['voiceState'] = var4;
            var1['voiceChannel'] = var3;
            var1['voiceActivity'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();