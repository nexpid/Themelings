// app/modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx
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
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldShowPremiumProfileFrameEA(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 0;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.useIsProfileFramesEnabled;
            var1 = var1.bind(var4)(var8);
            var4 = _closure1_slot1;
            var6 = 1;
            var3 = var3[var6];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useConfig;
            var3 = {};
            var3['location'] = var8;
            var3 = var4.bind(var7)(var3);
            var3 = var3.bucket;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ProfileFramesPurchaseBucket;
            var2 = var2.PAID_PREMIUM_SUBSCRIBERS_ONLY;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();