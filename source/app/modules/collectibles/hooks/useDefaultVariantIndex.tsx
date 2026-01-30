// app/modules/collectibles/hooks/useDefaultVariantIndex.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useDefaultVariantIndex.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 1;
            var1 = var5[var1];
            var7 = undefined;
            var8 = var4.bind(var7)(var1);
            var5 = var8.useStateFromStores;
            var1 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot2;
                var1 = var1.purchases;
                return var1;
            };
            var1 = var5.bind(var8)(var4, var1);
            var _closure2_slot0 = var1;
            var1 = null;
            var4 = var1 != var6;
            var5 = 0;
            var1 = 0;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 2;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.getIsVariantProduct;
            var3 = var3.bind(var4)(var6);
            var1 = 0;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = global;
            var4 = var3.Math;
            var3 = var4.max;
            var7 = var6.variants;
            var6 = var7.findIndex;
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.skuId;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var6.bind(var7)(var2);
            var1 = var3.bind(var4)(var5, var2);
case 2:
            return var1;
        }
    };
    var3['useDefaultVariantIndex'] = var2;
    return var1;
})();