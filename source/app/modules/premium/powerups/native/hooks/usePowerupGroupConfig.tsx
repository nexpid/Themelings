// app/modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePowerupGroupConfig(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var2 = var1.group;
                var1 = 'guildTagsBadgePacks';
                if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = undefined;
                return var1;
case 2:
                var1 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 1;
                var4 = var6[var3];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var10 = var4.intl;
                var9 = var10.string;
                var4 = _closure1_slot1;
                var2 = 2;
                var8 = var6[var2];
                var8 = var4.bind(var5)(var8);
                var8 = var8.KC9HRW;
                var8 = var9.bind(var10)(var8);
                var1['title'] = var8;
                var3 = var6[var3];
                var3 = var7.bind(var5)(var3);
                var7 = var3.intl;
                var3 = var7.string;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.GJiSmP;
                var2 = var3.bind(var7)(var2);
                var1['description'] = var2;
                var2 = {};
                var3 = 3;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var2['staticUrl'] = var3;
                var3 = 4;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var2['animatedUrl'] = var3;
                var1['image'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();