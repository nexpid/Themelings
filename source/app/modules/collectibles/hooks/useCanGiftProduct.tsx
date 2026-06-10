// app/modules/collectibles/hooks/useCanGiftProduct.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 7;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useCanGiftProduct.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var12 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 0;
            var1 = var5[var1];
            var4 = undefined;
            var6 = var12.bind(var4)(var1);
            var1 = var6.useCurrentUser;
            var13 = var1.bind(var6)();
            var1 = 1;
            var1 = var5[var1];
            var7 = var12.bind(var4)(var1);
            var6 = var7.useIsProfileFrameGiftingEnabled;
            var1 = 'useCanGiftProduct';
            var7 = var6.bind(var7)(var1);
            var6 = 2;
            var1 = var5[var6];
            var8 = var12.bind(var4)(var1);
            var1 = var8.isPremiumCollectiblesProduct;
            var1 = var1.bind(var8)(var3);
            var8 = var5[var6];
            var9 = var12.bind(var4)(var8);
            var8 = var9.isFreeCollectiblesProduct;
            var10 = var8.bind(var9)(var3);
            var8 = 3;
            var8 = var5[var8];
            var9 = var12.bind(var4)(var8);
            var8 = var9.isOrbsExclusiveProduct;
            var8 = var8.bind(var9)(var3);
            var11 = var3.type;
            var9 = 4;
            var5 = var5[var9];
            var5 = var12.bind(var4)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.PROFILE_FRAME;
            var5 = var11 === var5;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = !var7;
case 2:
            var12 = _closure1_slot1;
            var7 = _closure1_slot2;
            var11 = 5;
            var11 = var7[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.canUseShopDiscounts;
            var14 = var11.bind(var12)(var13);
            var11 = _closure1_slot0;
            var12 = var7[var6];
            var13 = var11.bind(var4)(var12);
            var12 = var13.getDefaultPriceSetAssignmentPurchaseType;
            var12 = var12.bind(var13)(var14);
            var7 = var7[var6];
            var11 = var11.bind(var4)(var7);
            var7 = var11.extractPriceByPurchaseTypes;
            var7 = var7.bind(var11)(var3, var12);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var10;
case 4:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var8;
case 6:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var5;
case 8:
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var3.type;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var3 = var8.bind(var4)(var3);
            var3 = var3.CollectiblesItemType;
            var3 = var3.EXTERNAL_SKU;
            var1 = var5 === var3;
case 10:
            if(var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var6 = var5.bind(var4)(var3);
            var5 = var6.shouldHideGiftingForCurrency;
            var3 = null;
            var8 = var3 == var7;
            var3 = undefined;
            if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var7.currency;
case 14:
            var1 = var5.bind(var6)(var3);
case 12:
            if(var1) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isCollectibleGiftingSupported;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 16:
            var1 = !var1;
            return var1;
        }
    };
    var3['useCanGiftProduct'] = var2;
    return var1;
})();