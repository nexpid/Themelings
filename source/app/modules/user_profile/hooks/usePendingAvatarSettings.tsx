// app/modules/user_profile/hooks/usePendingAvatarSettings.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useCallback;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/usePendingAvatarSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePendingAvatarSettings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = var2.isTryItOut;
            var _closure2_slot0 = var4;
            var6 = var2.analyticsLocations;
            var11 = var2.guildId;
            var _closure2_slot1 = var11;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var5 = undefined;
            var2 = var8.bind(var5)(var2);
            var12 = var2.bind(var5)(var6);
            var _closure2_slot2 = var12;
            var6 = _closure1_slot0;
            var2 = 3;
            var2 = var7[var2];
            var8 = var6.bind(var5)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = _closure1_slot4;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var4.getPendingChanges;
                    var5 = _closure2_slot1;
                    var3 = var1.bind(var4)(var5);
                    var1 = {};
                    var6 = var3.pendingAvatar;
                    var1['pendingAvatar'] = var6;
                    var3 = var3.pendingAvatarDecoration;
                    var1['pendingAvatarDecoration'] = var3;
                    var3 = var4.getErrors;
                    var3 = var3.bind(var4)(var5);
                    var3 = var3.avatarDecoration;
                    var1['pendingErrors'] = var3;
                    return var1;
case 2:
                    var1 = var4.getTryItOutChanges;
                    var3 = var1.bind(var4)();
                    var1 = {};
                    var5 = var3.tryItOutAvatar;
                    var1['pendingAvatar'] = var5;
                    var3 = var3.tryItOutAvatarDecoration;
                    var1['pendingAvatarDecoration'] = var3;
                    var3 = var4.getErrors;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.avatarDecoration;
                    var1['pendingErrors'] = var2;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var6, var2);
            var9 = var2.pendingAvatar;
            var8 = var2.pendingAvatarDecoration;
            var7 = var2.pendingErrors;
            var10 = _closure1_slot3;
            var6 = new Array(1);
            var6[0] = var11;
            var2 = function(arg1) {
                var4 = arg1;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.setPendingChanges;
                var2 = {};
                var8 = _closure2_slot1;
                var2['guildId'] = var8;
                var2['avatar'] = var4;
                var2 = var6.bind(var7)(var2);
                var2 = 5;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.announcePendingAvatarChange;
                var2 = var2.bind(var3)(var4);
                return var1;
            };
            var6 = var10.bind(var5)(var2, var6);
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var11;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.setPendingChanges;
                    var4 = {};
                    var7 = _closure2_slot1;
                    var4['guildId'] = var7;
                    var4['avatarDecoration'] = var3;
                    var4 = var5.bind(var6)(var4);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
case 4:
                    return var1;
                }
            };
            var2 = var10.bind(var5)(var1, var2);
            var1 = {};
            var1['pendingAvatar'] = var9;
            var1['pendingAvatarDecoration'] = var8;
            var1['pendingErrors'] = var7;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 6;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var6 = var7.setTryItOutAvatar;
case 6:
            var1['setPendingAvatar'] = var6;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var2 = var3.setTryItOutAvatarDecoration;
case 8:
            var1['setPendingAvatarDecoration'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();