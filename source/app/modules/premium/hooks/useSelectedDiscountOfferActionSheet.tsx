// app/modules/premium/hooks/useSelectedDiscountOfferActionSheet.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/useSelectedDiscountOfferActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSelectedDiscountOfferActionSheet() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = 1;
            var4 = var2[var3];
            var6 = undefined;
            var5 = var7.bind(var6)(var4);
            var4 = var5.usePremiumDiscountOffer;
            var4 = var4.bind(var5)();
            var5 = 2;
            var2 = var2[var5];
            var9 = var7.bind(var6)(var2);
            var8 = var9.useSelectedSnowflakeBoundDismissibleContent;
            var2 = null;
            var10 = var2 != var4;
            var7 = null;
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var4.expires_at;
            var10 = var2 == var10;
            var7 = null;
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var10 = 3;
            var10 = var12[var10];
            var10 = var11.bind(var6)(var10);
            var10 = var10.DismissibleContent;
            var7 = var10.DISCOUNT_OFFER_ACTION_SHEET;
case 2:
            var11 = var2 == var4;
            var10 = undefined;
            if(var11) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var10 = var4.id;
case 5:
            var11 = var2 != var10;
            var2 = '';
            if(!var11) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var10;
case 7:
            var2 = var8.bind(var9)(var7, var2);
            var1 = _closure1_slot2;
            var2 = var1.bind(var6)(var2, var5);
            var1 = {};
            var1['discountOffer'] = var4;
            var4 = 0;
            var4 = var2[var4];
            var1['discountOfferDismissibleContent'] = var4;
            var2 = var2[var3];
            var1['markDismissed'] = var2;
            return var1;
        }
    };
    var3['useSelectedDiscountOfferActionSheet'] = var2;
    return var1;
})();