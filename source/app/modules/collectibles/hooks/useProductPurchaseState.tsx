// app/modules/collectibles/hooks/useProductPurchaseState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = function getProductPurchaseState(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var4;
            var3 = var4.getPurchase;
            var2 = var7.skuId;
            var2 = var3.bind(var4)(var2);
            var5 = null;
            var2 = var5 != var2;
            var3 = var7.items;
            if(!(var5 == var3)) { _fun0001_ip = 49; continue _fun0001 }
 45:
            var3 = new Array(0);
 49:
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 1;
            var4 = var6[var4];
            var6 = undefined;
            var9 = var9.bind(var6)(var4);
            var10 = var3.map;
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.getPurchase;
                var1 = arg1;
                var1 = var1.skuId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var10.bind(var3)(var4);
            var4 = var9.bind(var6)(var4);
            var10 = var5 == var7;
            var9 = undefined;
            if(var10) { _fun0001_ip = 110; continue _fun0001 }
 105:
            var9 = var7.type;
 110:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = 2;
            var10 = var10[var11];
            var10 = var12.bind(var6)(var10);
            var10 = var10.CollectiblesItemType;
            var10 = var10.BUNDLE;
            if(!(var10 !== var9)) { _fun0001_ip = 317; continue _fun0001 }
 149:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var10.bind(var6)(var8);
            var8 = var8.CollectiblesItemType;
            var8 = var8.VARIANTS_GROUP;
            if(!(var8 !== var9)) { _fun0001_ip = 204; continue _fun0001 }
 182:
            var8 = {'isPurchased': null, 'isPartiallyOwnedBundle': false, 'isPartiallyOwnedVariantsGroup': false};
            var8['isPurchased'] = var2;
            return var8;
 204:
            var11 = var7.variants;
            var9 = var5 == var11;
            var8 = undefined;
            if(var9) { _fun0001_ip = 237; continue _fun0001 }
 219:
            var10 = var11.every;
            var9 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.getPurchase;
                var1 = arg1;
                var1 = var1.skuId;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var8 = var10.bind(var11)(var9);
 237:
            var9 = var7.variants;
            var7 = var5 == var9;
            var6 = undefined;
            if(var7) { _fun0001_ip = 270; continue _fun0001 }
 252:
            var7 = var9.some;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.getPurchase;
                var1 = arg1;
                var1 = var1.skuId;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var6 = var7.bind(var9)(var1);
 270:
            if(!var6) { _fun0001_ip = 276; continue _fun0001 }
 273:
            var6 = !var8;
 276:
            var1 = {};
            var7 = var5 != var8;
            if(!var7) { _fun0001_ip = 288; continue _fun0001 }
 285:
            var7 = var8;
 288:
            var1['isPurchased'] = var7;
            var7 = false;
            var1['isPartiallyOwnedBundle'] = var7;
            var5 = var5 != var6;
            if(!var5) { _fun0001_ip = 310; continue _fun0001 }
 307:
            var5 = var6;
 310:
            var1['isPartiallyOwnedVariantsGroup'] = var5;
            return var1;
 317:
            var1 = {};
            if(var2) { _fun0001_ip = 353; continue _fun0001 }
 322:
            var6 = var3.length;
            var5 = 0;
            var5 = var6 > var5;
            if(!var5) { _fun0001_ip = 350; continue _fun0001 }
 336:
            var7 = var4.length;
            var6 = var3.length;
            var5 = var7 === var6;
 350:
            var2 = var5;
 353:
            var1['isPurchased'] = var2;
            var5 = var4.length;
            var2 = 0;
            var2 = var5 > var2;
            if(!var2) { _fun0001_ip = 386; continue _fun0001 }
 372:
            var4 = var4.length;
            var3 = var3.length;
            var2 = var4 < var3;
 386:
            var1['isPartiallyOwnedBundle'] = var2;
            var2 = false;
            var1['isPartiallyOwnedVariantsGroup'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/hooks/useProductPurchaseState.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getProductPurchaseState'] = var4;
    var2 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresObject;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useProductPurchaseState'] = var2;
    return var1;
})();