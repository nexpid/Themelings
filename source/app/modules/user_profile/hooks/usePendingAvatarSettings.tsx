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
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/usePendingAvatarSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePendingAvatarSettings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = var2.isTryItOut;
            var _closure2_slot0 = var6;
            var11 = var2.analyticsLocations;
            var12 = var2.guildId;
            var _closure2_slot1 = var12;
            var7 = undefined;
            var _closure2_slot3 = var7;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 5;
            var4 = var2[var10];
            var13 = var3.bind(var7)(var4);
            var9 = var13.useStateFromStores;
            var4 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var9.bind(var13)(var8, var4);
            var _closure2_slot2 = var8;
            var2 = var2[var10];
            var9 = var3.bind(var7)(var2);
            var4 = var9.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 63; continue _fun0002 }
 18:
                    var3 = _closure2_slot2;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 63; continue _fun0002 }
 31:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 63:
                    return var1;
                }
            };
            var2 = var4.bind(var9)(var3, var2);
            var4 = null;
            if(!(var4 == var2)) { _fun0001_ip = 151; continue _fun0001 }
 134:
            var9 = var4 == var8;
            var3 = undefined;
            if(var9) { _fun0001_ip = 149; continue _fun0001 }
 143:
            var3 = var8.avatarDecoration;
 149:
            _fun0001_ip = 157; continue _fun0001;
 151:
            var3 = var2.avatarDecoration;
 157:
            var13 = _closure1_slot1;
            var2 = _closure1_slot2;
            var9 = 6;
            var9 = var2[var9];
            var9 = var13.bind(var7)(var9);
            var13 = var9.bind(var7)(var11);
            _closure2_slot3 = var13;
            var9 = _closure1_slot0;
            var2 = var2[var10];
            var11 = var9.bind(var7)(var2);
            var10 = var11.useStateFromStoresObject;
            var2 = _closure1_slot6;
            var9 = new Array(2);
            var9[0] = var2;
            var2 = _closure1_slot4;
            var9[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var3 = _closure2_slot0;
                    if(var3) { _fun0003_ip = 60; continue _fun0003 }
 12:
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0003_ip = 41; continue _fun0003 }
 22:
                    var4 = _closure1_slot6;
                    var3 = var4.getPendingAvatar;
                    var3 = var3.bind(var4)();
                    _fun0003_ip = 58; continue _fun0003;
 41:
                    var5 = _closure1_slot4;
                    var4 = var5.getPendingAvatar;
                    var3 = var4.bind(var5)();
 58:
                    _fun0003_ip = 79; continue _fun0003;
 60:
                    var5 = _closure1_slot6;
                    var4 = var5.getTryItOutAvatar;
                    var3 = var4.bind(var5)();
 79:
                    var1['pendingAvatar'] = var3;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0003_ip = 139; continue _fun0003 }
 91:
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0003_ip = 120; continue _fun0003 }
 101:
                    var4 = _closure1_slot6;
                    var3 = var4.getPendingAvatarDecoration;
                    var3 = var3.bind(var4)();
                    _fun0003_ip = 137; continue _fun0003;
 120:
                    var5 = _closure1_slot4;
                    var4 = var5.getPendingAvatarDecoration;
                    var3 = var4.bind(var5)();
 137:
                    _fun0003_ip = 158; continue _fun0003;
 139:
                    var5 = _closure1_slot6;
                    var4 = var5.getTryItOutAvatarDecoration;
                    var3 = var4.bind(var5)();
 158:
                    var1['pendingAvatarDecoration'] = var3;
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 198; continue _fun0003 }
 173:
                    var3 = _closure1_slot6;
                    var2 = var3.getErrors;
                    var2 = var2.bind(var3)();
                    var2 = var2.avatarDecoration;
                    _fun0003_ip = 221; continue _fun0003;
 198:
                    var4 = _closure1_slot4;
                    var3 = var4.getErrors;
                    var3 = var3.bind(var4)();
                    var2 = var3.avatarDecoration;
 221:
                    var1['pendingErrors'] = var2;
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var9, var2);
            var10 = var2.pendingAvatar;
            var9 = var2.pendingAvatarDecoration;
            var2 = var2.pendingErrors;
            var11 = _closure1_slot3;
            var14 = var4 == var8;
            var4 = undefined;
            if(var14) { _fun0001_ip = 273; continue _fun0001 }
 267:
            var4 = var8.avatar;
 273:
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.setNewPendingAvatar;
                    var6 = _closure2_slot2;
                    var5 = null;
                    var5 = var5 == var6;
                    if(var5) { _fun0004_ip = 57; continue _fun0004 }
 47:
                    var1 = _closure2_slot2;
                    var2 = var1.avatar;
 57:
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var8 = var11.bind(var7)(var4, var8);
            var11 = _closure1_slot3;
            var4 = new Array(2);
            var4[0] = var13;
            var4[1] = var12;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.setNewPendingAvatarDecoration;
                    var4 = _closure2_slot1;
                    var4 = var5.bind(var6)(var4, var3);
                    var4 = null;
                    if(!(var4 != var3)) { _fun0005_ip = 62; continue _fun0005 }
 53:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)(var3);
 62:
                    return var1;
                }
            };
            var4 = var11.bind(var7)(var1, var4);
            var1 = {};
            var1['pendingAvatar'] = var10;
            var1['pendingAvatarDecoration'] = var9;
            if(!var6) { _fun0001_ip = 360; continue _fun0001 }
 334:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 8;
            var9 = var11[var9];
            var9 = var10.bind(var7)(var9);
            var8 = var9.setTryItOutAvatar;
 360:
            var1['setPendingAvatar'] = var8;
            if(!var6) { _fun0001_ip = 394; continue _fun0001 }
 368:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 8;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var4 = var5.setTryItOutAvatarDecoration;
 394:
            var1['setPendingAvatarDecoration'] = var4;
            var1['savedAvatarDecoration'] = var3;
            var1['pendingErrors'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();