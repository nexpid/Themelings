// app/modules/collectibles/native/useAndroidUnsyncedFilter.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useCallback;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useAndroidUnsyncedFilter.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var3 = 3;
        var6 = var7[var3];
        var4 = undefined;
        var10 = var5.bind(var4)(var6);
        var9 = var10.useStateFromStores;
        var6 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
            var2 = _closure1_slot4;
            var1 = var2.isFetchingGoogleSkus;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var9.bind(var10)(var8, var6);
        var _closure2_slot0 = var6;
        var3 = var7[var3];
        var8 = var5.bind(var4)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot3;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var3 = _closure1_slot3;
            var2 = var3.get;
            var1 = 'bypass_google_sku_sync';
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var7.bind(var8)(var5, var3);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.isGooglePlayBillingSupported;
                var2 = var1.bind(var2)();
                var1 = var4;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot1;
                var1 = var4;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var2 = _closure2_slot0;
                var1 = var4;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 5:
                var3 = var4.filter;
                var2 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isGPlaySynced;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useAndroidUnsyncedFilter'] = var2;
    return var1;
})();