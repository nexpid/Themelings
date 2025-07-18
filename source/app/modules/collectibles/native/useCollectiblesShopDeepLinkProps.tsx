// app/modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = 4;
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
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = function() {
            var1 = _closure1_slot4;
            var1 = var1.initialProductSkuId;
            return var1;
        };
        var8 = var8.bind(var9)(var7, var3);
        var _closure2_slot2 = var8;
        var7 = _closure1_slot3;
        var3 = var7.getCategoryForProduct;
        var7 = var3.bind(var7)(var8);
        var _closure2_slot3 = var7;
        var3 = _closure1_slot2;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot2;
                var6 = null;
                if(!(var6 != var1)) { _fun0001_ip = 181; continue _fun0001 }
 18:
                var1 = _closure2_slot3;
                if(!(var6 != var1)) { _fun0001_ip = 181; continue _fun0001 }
 29:
                var1 = {};
                var2 = _closure2_slot2;
                var1['initialProductSkuId'] = var2;
                var2 = _closure2_slot3;
                var2 = var2.skuId;
                var1['initialCategorySkuId'] = var2;
                var2 = _closure2_slot1;
                var7 = var6 != var2;
                var5 = undefined;
                if(!var7) { _fun0001_ip = 113; continue _fun0001 }
 70:
                var7 = global;
                var10 = var7.Math;
                var9 = var10.max;
                var11 = _closure2_slot1;
                var8 = var11.findIndex;
                var7 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.skuId;
                    var1 = _closure2_slot2;
                    var1 = var2 === var1;
                    return var1;
                };
                var8 = var8.bind(var11)(var7);
                var7 = 0;
                var5 = var9.bind(var10)(var7, var8);
 113:
                var1['productIndex'] = var5;
                var5 = _closure2_slot0;
                var5 = var6 != var5;
                var2 = undefined;
                if(!var5) { _fun0001_ip = 174; continue _fun0001 }
 131:
                var5 = global;
                var6 = var5.Math;
                var5 = var6.max;
                var7 = _closure2_slot0;
                var4 = var7.findIndex;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.skuId;
                    var1 = _closure2_slot3;
                    var1 = var1.skuId;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var4.bind(var7)(var3);
                var3 = 0;
                var2 = var5.bind(var6)(var3, var4);
 174:
                var1['categoryIndex'] = var2;
                _fun0001_ip = 183; continue _fun0001;
 181:
                var1 = {};
 183:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCollectiblesShopDeepLinkProps'] = var2;
    return var1;
})();