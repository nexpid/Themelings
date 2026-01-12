// app/modules/premium/powerups/hooks/useLoadGuildPowerups.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useLoadGuildPowerups.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLoadGuildPowerups(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var3);
        var5 = var7.useGameServerEnabled;
        var3 = 'useLoadGuildPowerups';
        var3 = var5.bind(var7)(var6, var3);
        var _closure2_slot1 = var3;
        var5 = _closure1_slot2;
        var7 = var5.useEffect;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchGameServerCatalog;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var7.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var4 = var5[var2];
            var1 = undefined;
            var7 = var3.bind(var1)(var4);
            var6 = var7.fetchPowerupCatalogForGuild;
            var4 = _closure2_slot0;
            var6 = var6.bind(var7)(var4);
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchGuildBoostEntitlements;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();