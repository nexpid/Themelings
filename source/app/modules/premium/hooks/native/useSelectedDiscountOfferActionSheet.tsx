// app/modules/premium/hooks/native/useSelectedDiscountOfferActionSheet.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/native/useSelectedDiscountOfferActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSelectedDiscountOfferActionSheet() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 2;
            var2 = var7[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var2);
            var2 = var3.usePremiumDiscountOffer;
            var2 = var2.bind(var3)();
            var3 = 3;
            var3 = var7[var3];
            var9 = var6.bind(var4)(var3);
            var8 = var9.useSelectedSnowflakeBoundDismissibleContent;
            var6 = null;
            var3 = var6 != var2;
            var7 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.expires_at;
            var3 = var6 == var3;
            var7 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.DismissibleContent;
            var7 = var3.DISCOUNT_OFFER_ACTION_SHEET;
case 2:
            var10 = var6 == var2;
            var3 = undefined;
            if(var10) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var2.id;
case 5:
            var10 = var6 != var3;
            var6 = '';
            if(!var10) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var3;
case 7:
            var3 = _closure1_slot3;
            var3 = var3.MAIN_VIEW_TOOLTIPS;
            var3 = var8.bind(var9)(var7, var6, var3);
            var1 = _closure1_slot2;
            var3 = var1.bind(var4)(var3, var5);
            var1 = {};
            var1['discountOffer'] = var2;
            var2 = 0;
            var2 = var3[var2];
            var1['discountOfferDismissibleContent'] = var2;
            var2 = 1;
            var2 = var3[var2];
            var1['markDismissed'] = var2;
            return var1;
        }
    };
    var3['useSelectedDiscountOfferActionSheet'] = var2;
    return var1;
})();