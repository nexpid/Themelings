// app/modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var2);
    var2 = var4.create;
    var4 = var2.bind(var4)();
    var2 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {'overrideApplicationId': null, 'setOverrideApplicationId': null, 'showSelfActivity': false, 'setShowSelfActivity': null, 'recommendationApplicationIds': null, 'setRecommendationApplicationIds': null, 'overrideNitroEligibilityForSocialLayerStorefront': false};
        var3 = function setOverrideApplicationId(arg1) {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = arg1;
            var2['overrideApplicationId'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setOverrideApplicationId'] = var3;
        var3 = false;
        var4 = function setShowSelfActivity(arg1) {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = arg1;
            var2['showSelfActivity'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setShowSelfActivity'] = var4;
        var4 = function setRecommendationApplicationIds(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = arg1;
                var3 = _closure2_slot0;
                var2 = {};
                var1 = null;
                var4 = var1 != var6;
                if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var6.split;
                var4 = ',';
                var1 = var5.bind(var6)(var4);
case 2:
                var2['recommendationApplicationIds'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1['setRecommendationApplicationIds'] = var4;
        var4 = function setOverrideNitroEligibilityForSocialLayerStorefront(arg1) {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = arg1;
            var2['overrideNitroEligibilityForSocialLayerStorefront'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setOverrideNitroEligibilityForSocialLayerStorefront'] = var4;
        var1['isNitroEligibleForSocialLayerStorefront'] = var3;
        var2 = function setIsNitroEligibleForSocialLayerStorefront(arg1) {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = arg1;
            var2['isNitroEligibleForSocialLayerStorefront'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setIsNitroEligibleForSocialLayerStorefront'] = var2;
        return var1;
    };
    var2 = var4.bind(var1)(var2);
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['useSlayerStorefrontDevOverrideStore'] = var2;
    return var1;
})();