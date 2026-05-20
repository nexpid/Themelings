// app/modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = var5.product;
            var2 = null;
            var3 = Object.create(var2);
            var1 = 0;
            var3['product'] = var1;
            var13 = {};
            var12 = var5;
            var11 = var3;
            var6 = copyDataProperties(var13, var12, var11);
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var5 = var9[var3];
            var3 = undefined;
            var10 = var7.bind(var3)(var5);
            var8 = var10.useStateFromStores;
            var5 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var8.bind(var10)(var7, var5);
            var8 = _closure1_slot1;
            var7 = 3;
            var7 = var9[var7];
            var8 = var8.bind(var3)(var7);
            var7 = var8.canUseShopDiscounts;
            var8 = var7.bind(var8)(var5);
            var7 = _closure1_slot4;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var7.MOBILE;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = var7.MOBILE_PREMIUM_TIER_2;
case 4:
            var7 = var4.googleSkuIds;
            if(!(var2 == var7)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = {};
case 5:
            var9 = var2 == var5;
            var5 = null;
            if(var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = var7[var8];
            var8 = var2 != var7;
            var2 = null;
            if(!var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var7;
case 9:
            var5 = var2;
case 7:
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var13 = var1;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var6 = var4.skuId;
            var4 = 'skuId';
            var1[3] = var6;
            var4 = 'platformSkuId';
            var1[3] = var5;
            var5 = true;
            var4 = 'isFreeForStaffSelfPurchase';
            var1[3] = var5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();