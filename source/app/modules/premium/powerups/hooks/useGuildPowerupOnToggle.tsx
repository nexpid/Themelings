// app/modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupOnToggle(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var1 = false;
        var1 = var4.bind(var5)(var1);
        var11 = _closure1_slot2;
        var10 = undefined;
        var9 = 2;
        var1 = var11.bind(var10)(var1, var9);
        var3 = 0;
        var4 = var1[var3];
        var8 = 1;
        var1 = var1[var8];
        var _closure2_slot2 = var1;
        var1 = var5.useState;
        var1 = var1.bind(var5)(var10);
        var1 = var11.bind(var10)(var1, var9);
        var3 = var1[var3];
        var1 = var1[var8];
        var _closure2_slot3 = var1;
        var1 = {};
        var1['isLoading'] = var4;
        var1['error'] = var3;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                var4 = arg1;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = var3.disablePowerupForGuild;
                _fun0001_ip = 6; continue _fun0001;
case 4:
                var4 = var3.enablePowerupForGuild;
case 6:
                var6 = _closure2_slot2;
                var3 = true;
                var3 = var6.bind(var5)(var3);
                var3 = _closure2_slot3;
                var3 = var3.bind(var5)(var5);
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var2.skuId;
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.catch;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var4 = _closure2_slot3;
                        var6 = var1.body;
                        var2 = null;
                        var7 = var2 == var6;
                        var3 = undefined;
                        var5 = undefined;
                        if(var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var5 = var6.message;
case 7:
                        var6 = var2 != var5;
                        var2 = undefined;
                        if(!var6) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var2 = var5;
case 9:
                        var2 = var4.bind(var3)(var2);
                        throw var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.finally;
                var1 = function() {
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
case 2:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['onToggle'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();