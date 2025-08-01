// app/modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = new Array(0);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useUserProfileGameFriendApplicationIds(arg1) {
        var2 = arg1;
        var6 = var2.userId;
        var _closure2_slot0 = var6;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 3;
        var3 = var8[var3];
        var4 = undefined;
        var10 = var7.bind(var4)(var3);
        var9 = var10.useStateFromStores;
        var3 = _closure1_slot3;
        var5 = new Array(2);
        var5[0] = var3;
        var3 = _closure1_slot4;
        var5[1] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = _closure1_slot3;
                var4 = var5.isFriend;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0001_ip = 67; continue _fun0001 }
 28:
                var4 = _closure1_slot4;
                var3 = var4.getUser;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0001_ip = 64; continue _fun0001 }
 58:
                var2 = var3.isProvisional;
 64:
                var1 = var2;
 67:
                return var1;
            }
        };
        var5 = var9.bind(var10)(var5, var3);
        var _closure2_slot1 = var5;
        var3 = 4;
        var3 = var8[var3];
        var4 = var7.bind(var4)(var3);
        var3 = var4.useGameFriendsForUser;
        var6 = var3.bind(var4)(var6);
        var _closure2_slot2 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 35; continue _fun0002 }
 10:
                var3 = _closure2_slot2;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.applicationId;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                _fun0002_ip = 42; continue _fun0002;
 35:
                var1 = _closure1_slot5;
 42:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useUserProfileGameFriendApplicationIds'] = var2;
    return var1;
})();