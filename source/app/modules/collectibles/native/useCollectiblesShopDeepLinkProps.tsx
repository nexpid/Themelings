// app/modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx
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
    var4 = var4.useMemo;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = {};
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var2 = arg1;
        var5 = var2.categories;
        var _closure2_slot0 = var5;
        var6 = var2.products;
        var _closure2_slot1 = var6;
        var7 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 3;
        var3 = var4[var3];
        var4 = undefined;
        var9 = var7.bind(var4)(var3);
        var8 = var9.useStateFromStoresObject;
        var3 = _closure1_slot3;
        var7 = new Array(2);
        var7[0] = var3;
        var3 = _closure1_slot4;
        var7[1] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot4;
                var7 = var2.initialProductSkuId;
                var _closure3_slot0 = var7;
                var3 = _closure1_slot3;
                var2 = var3.getProduct;
                var6 = var2.bind(var3)(var7);
                var4 = null;
                var8 = var4 != var6;
                var10 = 0;
                var3 = var7;
                var2 = 0;
                if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = var6.variantGroupStoreListingId;
                var8 = var4 != var8;
                var3 = var7;
                var2 = 0;
                if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var9 = _closure1_slot3;
                var8 = var9.getProductByStoreListingId;
                var6 = var6.variantGroupStoreListingId;
                var11 = var8.bind(var9)(var6);
                var6 = var4 != var11;
                if(!var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var12 = _closure1_slot0;
                var9 = _closure1_slot1;
                var8 = 4;
                var9 = var9[var8];
                var8 = undefined;
                var9 = var12.bind(var8)(var9);
                var8 = var9.getIsVariantProduct;
                var6 = var8.bind(var9)(var11);
case 5:
                var3 = var7;
                var2 = 0;
                if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 7:
                var3 = var11.skuId;
                var8 = global;
                var9 = var8.Math;
                var8 = var9.max;
                var12 = var11.variants;
                var11 = var12.findIndex;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.skuId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var11.bind(var12)(var1);
                var2 = var8.bind(var9)(var10, var1);
case 2:
                var1 = {};
                var6 = _closure1_slot3;
                var5 = var6.getCategoryForProduct;
                var5 = var5.bind(var6)(var7);
                var6 = var4 == var5;
                var4 = undefined;
                if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var4 = var5.skuId;
case 8:
                var1['initialCategorySkuId'] = var4;
                var1['initialBaseProductSkuId'] = var3;
                var1['initialVariantIndex'] = var2;
                return var1;
            }
        };
        var3 = var8.bind(var9)(var7, var3);
        var7 = var3.initialCategorySkuId;
        var _closure2_slot2 = var7;
        var9 = var3.initialBaseProductSkuId;
        var _closure2_slot3 = var9;
        var8 = var3.initialVariantIndex;
        var _closure2_slot4 = var8;
        var3 = _closure1_slot2;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot3;
                var6 = null;
                if(!(var6 != var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var1 = _closure2_slot2;
                if(!(var6 != var1)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                var1 = {};
                var2 = _closure2_slot3;
                var1['initialProductSkuId'] = var2;
                var2 = _closure2_slot4;
                var1['initialVariantIndex'] = var2;
                var2 = _closure2_slot2;
                var1['initialCategorySkuId'] = var2;
                var2 = _closure2_slot1;
                var7 = var6 != var2;
                var5 = undefined;
                if(!var7) { _fun0002_ip = 13; continue _fun0002 }
case 4:
                var7 = global;
                var10 = var7.Math;
                var9 = var10.max;
                var11 = _closure2_slot1;
                var8 = var11.findIndex;
                var7 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.skuId;
                    var1 = _closure2_slot3;
                    var1 = var2 === var1;
                    return var1;
                };
                var8 = var8.bind(var11)(var7);
                var7 = 0;
                var5 = var9.bind(var10)(var7, var8);
case 13:
                var1['productIndex'] = var5;
                var5 = _closure2_slot0;
                var5 = var6 != var5;
                var2 = undefined;
                if(!var5) { _fun0002_ip = 14; continue _fun0002 }
case 5:
                var5 = global;
                var6 = var5.Math;
                var5 = var6.max;
                var7 = _closure2_slot0;
                var4 = var7.findIndex;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.skuId;
                    var1 = _closure2_slot2;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var4.bind(var7)(var3);
                var3 = 0;
                var2 = var5.bind(var6)(var3, var4);
case 14:
                var1['categoryIndex'] = var2;
                _fun0002_ip = 2; continue _fun0002;
case 10:
                var1 = _closure1_slot5;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCollectiblesShopDeepLinkProps'] = var2;
    return var1;
})();