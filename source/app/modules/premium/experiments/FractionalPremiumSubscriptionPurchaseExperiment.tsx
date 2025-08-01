// app/modules/premium/experiments/FractionalPremiumSubscriptionPurchaseExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var9 = var6.bind(var1)(var4);
    var8 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-03_fractional_premium_subscription_purchase', 'label': 'Purchase subscription while on fractional nitro'};
    var5 = {};
    var10 = false;
    var5['enabled'] = var10;
    var4['defaultConfig'] = var5;
    var11 = {'id': 1, 'label': 'Allow subscription purchase while on fractional nitro'};
    var5 = 1;
    var10 = {};
    var10['enabled'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var4['treatments'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot0 = var4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/experiments/FractionalPremiumSubscriptionPurchaseExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = null;
            var1 = arg2;
            var1 = var2 != var1;
            if(!var1) { _fun0001_ip = 54; continue _fun0001 }
 12:
            var5 = _closure1_slot0;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var2 = arg1;
            var3['location'] = var2;
            var2 = {};
            var6 = false;
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var2.enabled;
 54:
            return var1;
        }
    };
    var3['isSubscriptionPurchaseDuringFractionalPremiumEnabled'] = var2;
    return var1;
})();