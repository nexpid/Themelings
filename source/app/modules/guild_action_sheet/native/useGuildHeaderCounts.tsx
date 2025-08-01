// app/modules/guild_action_sheet/native/useGuildHeaderCounts.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useThrottledDispatch(arg1, arg2, arg3) {
        var8 = arg1;
        var3 = arg2;
        var5 = arg3;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var3;
        var _closure2_slot2 = var5;
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var4 = new Array(2);
        var4[0] = var8;
        var4[1] = var3;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.throttle;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = _closure2_slot0;
                var2['type'] = var6;
                var6 = arg1;
                var2['count'] = var6;
                var5 = _closure2_slot1;
                var2['guildId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = 3000;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var6.bind(var7)(var3, var4);
        var _closure2_slot3 = var6;
        var8 = _closure1_slot3;
        var7 = var8.useEffect;
        var4 = new Array(1);
        var4[0] = var6;
        var3 = function() {
            var1 = function() {
                var2 = _closure2_slot3;
                var1 = var2.cancel;
                var1 = var1.bind(var2)();
                return var1;
            };
            return var1;
        };
        var3 = var7.bind(var8)(var3, var4);
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot2;
                var2 = 0;
                if(!(var3 > var2)) { _fun0001_ip = 28; continue _fun0001 }
 13:
                var3 = _closure2_slot3;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 28:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_action_sheet/native/useGuildHeaderCounts.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildHeaderCounts(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var1 = function useMemberCount(arg1) {
            var10 = arg1;
            var _closure3_slot0 = var10;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 5;
            var7 = var6[var3];
            var4 = undefined;
            var11 = var5.bind(var4)(var7);
            var9 = var11.useStateFromStores;
            var7 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getMemberCount;
                    var1 = _closure3_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0002_ip = 39; continue _fun0002 }
 36:
                    var1 = var2;
 39:
                    return var1;
                }
            };
            var9 = var9.bind(var11)(var8, var7);
            var8 = _closure1_slot6;
            var7 = 'GUILD_HEADER_MEMBER_COUNT';
            var7 = var8.bind(var4)(var7, var10, var9);
            var3 = var6[var3];
            var4 = var5.bind(var4)(var3);
            var3 = var4.useStateFromStores;
            var5 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getMemberCount;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = undefined;
        var4 = var1.bind(var6)(var3);
        var1 = function useOnlineCount(arg1) {
            var10 = arg1;
            var _closure3_slot0 = var10;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 5;
            var7 = var6[var3];
            var4 = undefined;
            var11 = var5.bind(var4)(var7);
            var9 = var11.useStateFromStores;
            var7 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getOnlineCount;
                    var1 = _closure3_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 0;
                    if(!var3) { _fun0003_ip = 39; continue _fun0003 }
 36:
                    var1 = var2;
 39:
                    return var1;
                }
            };
            var9 = var9.bind(var11)(var8, var7);
            var8 = _closure1_slot6;
            var7 = 'GUILD_HEADER_ONLINE_COUNT';
            var7 = var8.bind(var4)(var7, var10, var9);
            var3 = var6[var3];
            var4 = var5.bind(var4)(var3);
            var3 = var4.useStateFromStores;
            var5 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getOnlineCount;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = var1.bind(var6)(var3);
        var1 = {};
        var1['memberCount'] = var4;
        var1['onlineCount'] = var3;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 5;
        var4 = var7[var4];
        var5 = var5.bind(var6)(var4);
        var4 = var5.useStateFromStores;
        var6 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getActiveChannelsCount;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        var1['activeChannelsCount'] = var2;
        return var1;
    };
    var3['useGuildHeaderCounts'] = var2;
    return var1;
})();