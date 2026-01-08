// app/modules/premium/game_server/hooks/useGameServerGetExpiringEntitlements.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/game_server/hooks/useGameServerGetExpiringEntitlements.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGameServerGetExpiringEntitlements(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 2;
            var2 = var5[var2];
            var5 = undefined;
            var7 = var4.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var6.bind(var7)(var4, var2);
            var _closure2_slot1 = var2;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var6 = null;
            var6 = var6 == var2;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.entitlements;
case 2:
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var1 = _closure2_slot1;
                    var5 = null;
                    var7 = var5 == var1;
                    var4 = undefined;
                    var1 = undefined;
                    if(var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure2_slot1;
                    var1 = var6.entitlements;
case 4:
                    if(!(var5 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = {};
case 6:
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.length;
                    var1 = 0;
                    if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 3;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.getExpiringGuildEntitlements;
                    var1 = var1.bind(var2)(var3);
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var1 = new Array(0);
case 10:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();