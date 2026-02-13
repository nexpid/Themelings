// app/modules/collectibles/hooks/usePurchasedProductsSort.tsx
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
    var9 = 0;
    var4 = var6[var9];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot2 = var4;
    var8 = 1;
    var7 = var6[var8];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = {};
    var4['NOT_PURCHASED'] = var9;
    var7 = 'NOT_PURCHASED';
    var4[var9] = var7;
    var4['PARTIAL_OWNED_BUNDLE'] = var8;
    var7 = 'PARTIAL_OWNED_BUNDLE';
    var4[var8] = var7;
    var8 = 2;
    var4['PURCHASED'] = var8;
    var7 = 'PURCHASED';
    var4[var8] = var7;
    var _closure1_slot4 = var4;
    var4 = function productPurchaseStatus(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var6;
            var5 = var4.type;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var7 = undefined;
            var2 = var8.bind(var7)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            if(!(var5 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var4.items;
            var5 = var8.some;
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.skuId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var5.bind(var8)(var2);
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 3;
            var2 = var8[var2];
            var5 = var5.bind(var7)(var2);
            var2 = var5.getIsVariantProduct;
            var2 = var2.bind(var5)(var4);
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = var6.includes;
            var2 = var4.skuId;
            var2 = var5.bind(var6)(var2);
            var5 = _closure1_slot4;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var5.NOT_PURCHASED;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var2 = var5.PURCHASED;
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 5:
            var5 = var4.variants;
            var4 = var5.every;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.includes;
                var1 = arg1;
                var1 = var1.skuId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot4;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var4.NOT_PURCHASED;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var3 = var4.PURCHASED;
case 13:
            var2 = var3;
case 10:
            return var2;
case 4:
            var1 = _closure1_slot4;
            var1 = var1.PARTIAL_OWNED_BUNDLE;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/usePurchasedProductsSort.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 4;
        var2 = var4[var2];
        var4 = undefined;
        var8 = var5.bind(var4)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot3;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() {
            var1 = _closure1_slot3;
            var1 = var1.purchases;
            return var1;
        };
        var2 = var7.bind(var8)(var5, var2);
        var _closure2_slot1 = var2;
        var3 = _closure1_slot2;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() {
            var5 = _closure2_slot1;
            var3 = new Array(0);
            var4 = 0;
            var6 = var3;
            var1 = arraySpread(var6, var5, var4);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var4 = var1().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var1 = var4;
case 14:
                    if(var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2.return();
case 16:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var3.bind(var4)(var2, var5);
        var _closure2_slot2 = var5;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var5 = _closure2_slot0;
            var3 = new Array(0);
            var4 = 0;
            var6 = var3;
            var1 = arraySpread(var6, var5, var4);
            var2 = var3.sort;
            var1 = function(arg1, arg2) {
                var5 = _closure1_slot5;
                var4 = _closure2_slot2;
                var3 = undefined;
                var1 = arg1;
                var2 = var5.bind(var3)(var1, var4);
                var1 = arg2;
                var1 = var5.bind(var3)(var1, var4);
                var1 = var2 - var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePurchasedProductsSort'] = var2;
    return var1;
})();