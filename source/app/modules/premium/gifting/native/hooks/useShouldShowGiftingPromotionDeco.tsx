// app/modules/premium/gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldShowGiftingPromotionDeco(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.useNativeGiftContext;
            var1 = var1.bind(var2)();
            var3 = var1.claimableRewards;
            var6 = var1.premiumType;
            var1 = null;
            if(!(var1 == var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var2 = var2.TIER_2;
            var2 = var6 === var2;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot2;
            var4 = var4.TIER_2;
            var2 = var5 === var4;
case 4:
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = var3.length;
            var3 = 0;
            var1 = var4 > var3;
case 5:
            if(!var1) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();