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
 0:
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
            if(!(var1 == var5)) { _fun0001_ip = 72; continue _fun0001 }
 56:
            var2 = _closure1_slot2;
            var2 = var2.TIER_2;
            var2 = var6 === var2;
            _fun0001_ip = 86; continue _fun0001;
 72:
            var4 = _closure1_slot2;
            var4 = var4.TIER_2;
            var2 = var5 === var4;
 86:
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 104; continue _fun0001 }
 93:
            var4 = var3.length;
            var3 = 0;
            var1 = var4 > var3;
 104:
            if(!var1) { _fun0001_ip = 110; continue _fun0001 }
 107:
            var1 = var2;
 110:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();