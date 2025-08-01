// app/modules/premium/gifting/hooks/useGiftStyles.tsx
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
    var7 = var4.STANDARD_GIFT_OPTIONS;
    var _closure1_slot2 = var7;
    var4 = var4.SEASONAL_GIFT_OPTIONS;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/hooks/useGiftStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var1 = var3.useIsInSeasonalGiftingXPAndSeasonalGiftingActive;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot2;
            if(!var3) { _fun0001_ip = 46; continue _fun0001 }
 42:
            var1 = _closure1_slot3;
 46:
            return var1;
        }
    };
    var3['useGiftStyles'] = var2;
    return var1;
})();