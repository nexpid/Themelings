// app/modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useCallback;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsPremiumFeatureNames;
    var _closure1_slot6 = var7;
    var4 = var4.AnalyticsPremiumFeatureTiers;
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useTrackCollectiblesItemTryOut.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var3 = var4[var3];
        var4 = undefined;
        var8 = var6.bind(var4)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var1 = _closure1_slot4;
            var1 = var1.products;
            return var1;
        };
        var6 = var7.bind(var8)(var6, var3);
        var _closure2_slot1 = var6;
        var3 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var14 = var1.type;
                var3 = var1.skuId;
                var2 = _closure2_slot1;
                var1 = var2.get;
                var8 = var1.bind(var2)(var3);
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 5;
                var2 = var11[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot5;
                var3 = var2.PREMIUM_FEATURE_TRY_OUT;
                var2 = {};
                var10 = _closure1_slot0;
                var12 = 6;
                var12 = var11[var12];
                var13 = var10.bind(var1)(var12);
                var12 = var13.match;
                var16 = var12.bind(var13)(var14);
                var15 = var16.with;
                var12 = 7;
                var13 = var11[var12];
                var13 = var10.bind(var1)(var13);
                var13 = var13.CollectiblesItemType;
                var14 = var13.AVATAR_DECORATION;
                var13 = function() {
                    var1 = _closure1_slot6;
                    var1 = var1.AVATAR_DECORATION;
                    return var1;
                };
                var15 = var15.bind(var16)(var14, var13);
                var14 = var15.with;
                var12 = var11[var12];
                var12 = var10.bind(var1)(var12);
                var12 = var12.CollectiblesItemType;
                var13 = var12.PROFILE_EFFECT;
                var12 = function() {
                    var1 = _closure1_slot6;
                    var1 = var1.PROFILE_EFFECT;
                    return var1;
                };
                var13 = var14.bind(var15)(var13, var12);
                var12 = var13.otherwise;
                var7 = function() {
                    var1 = undefined;
                    return var1;
                };
                var7 = var12.bind(var13)(var7);
                var2['feature_name'] = var7;
                var7 = 8;
                var7 = var11[var7];
                var10 = var10.bind(var1)(var7);
                var7 = var10.isPremiumCollectiblesProduct;
                var7 = var7.bind(var10)(var8);
                var9 = _closure1_slot7;
                if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = var9.PREMIUM_STANDARD;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var7 = var9.FREE;
case 4:
                var2['feature_tier'] = var7;
                var7 = null;
                var9 = var7 == var8;
                var7 = undefined;
                if(var9) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var7 = var8.name;
case 5:
                var2['feature_selection'] = var7;
                var6 = _closure2_slot0;
                var2['location_stack'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();