// app/modules/activity_status/useUserVoiceActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activity_status/useUserVoiceActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserVoiceActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.userId;
            var _closure2_slot0 = var3;
            var2 = var2.guildId;
            var _closure2_slot1 = var2;
            var7 = undefined;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var8 = 4;
            var3 = var3[var8];
            var6 = var4.bind(var7)(var3);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0002_ip = 21; continue _fun0002 }
 13:
                    var1 = _closure2_slot0;
                    if(!(var3 == var1)) { _fun0002_ip = 60; continue _fun0002 }
 21:
                    var1 = _closure2_slot0;
                    var3 = var3 != var1;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 58; continue _fun0002 }
 34:
                    var5 = _closure1_slot4;
                    var4 = var5.getDiscoverableVoiceStateForUser;
                    var3 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3);
 58:
                    _fun0002_ip = 89; continue _fun0002;
 60:
                    var5 = _closure1_slot4;
                    var4 = var5.getDiscoverableVoiceState;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 89:
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4, var3);
            var3 = null;
            var5 = var3 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 102; continue _fun0001 }
 97:
            var3 = var4.channelId;
 102:
            _closure2_slot2 = var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = var5[var8];
            var11 = var6.bind(var7)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot2;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 17; continue _fun0003 }
 13:
                    var2 = undefined;
                    return var2;
 17:
                    var3 = _closure1_slot2;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var9, var3);
            _closure2_slot3 = var3;
            var5 = var5[var8];
            var6 = var6.bind(var7)(var5);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 32; continue _fun0004 }
 18:
                    var4 = _closure2_slot3;
                    var3 = var4.isPrivate;
                    var1 = var3.bind(var4)();
 32:
                    if(var1) { _fun0004_ip = 68; continue _fun0004 }
 35:
                    var5 = _closure1_slot3;
                    var4 = var5.can;
                    var3 = _closure1_slot5;
                    var3 = var3.VIEW_CHANNEL;
                    var2 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3, var2);
 68:
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var2, var1);
            if(var1) { _fun0001_ip = 203; continue _fun0001 }
 199:
            var1 = {};
            _fun0001_ip = 218; continue _fun0001;
 203:
            var2 = {};
            var2['voiceState'] = var4;
            var2['voiceChannel'] = var3;
            var1 = var2;
 218:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();