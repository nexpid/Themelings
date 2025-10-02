// app/modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useIsPlanEligibleForGiftingPromotion(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            var6 = null;
            var3 = var6 == var1;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1.eligiblePlanIds;
case 2:
            var3 = var6 == var4;
            var1 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4.includes;
            var6 = var6 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var5.id;
case 6:
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useClaimableGiftingPromotionRewards() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var3 = var1.bind(var2)();
            var2 = _closure1_slot3;
            var1 = undefined;
            var7 = 2;
            var6 = var2.bind(var1)(var3, var7);
            var2 = 0;
            var2 = var6[var2];
            var3 = 1;
            var3 = var6[var3];
            var _closure2_slot0 = var3;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var1)(var3);
            var6 = var3.bind(var1)();
            var3 = null;
            var7 = var3 == var6;
            var11 = undefined;
            if(var7) { _fun0002_ip = 8; continue _fun0002 }
case 4:
            var11 = var6.rewards;
case 8:
            var _closure2_slot1 = var11;
            var7 = var3 == var6;
            var8 = undefined;
            if(var7) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var8 = var6.variants;
case 9:
            if(!(var3 != var8)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = var8.flatMap;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.variants;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            _closure2_slot1 = var6;
            var11 = var6;
case 11:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 3;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.useFetchPurchases;
            var6 = var6.bind(var7)();
            var10 = var6.purchases;
            var _closure2_slot2 = var10;
            var9 = var6.hasPreviouslyFetched;
            var _closure2_slot3 = var9;
            var8 = var6.fetchPurchasesError;
            var _closure2_slot4 = var8;
            var7 = _closure1_slot4;
            var6 = var7.useRef;
            var5 = false;
            var5 = var6.bind(var7)(var5);
            var _closure2_slot5 = var5;
            var6 = var7.useEffect;
            var5 = new Array(4);
            var5[0] = var11;
            var5[1] = var10;
            var5[2] = var9;
            var5[3] = var8;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 15:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 13; continue _fun0003 }
case 16:
                    var2 = _closure2_slot4;
                    if(!(var3 != var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var4 = new Array(0);
                    _fun0003_ip = 19; continue _fun0003;
case 17:
                    var5 = _closure2_slot1;
                    var3 = var5.filter;
                    var2 = function(arg1) {
                        var3 = _closure2_slot2;
                        var2 = var3.get;
                        var1 = arg1;
                        var1 = var1.skuId;
                        var2 = var2.bind(var3)(var1);
                        var1 = null;
                        var1 = var1 == var2;
                        return var1;
                    };
                    var4 = var3.bind(var5)(var2);
case 19:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var2 = _closure2_slot5;
                    var1 = true;
                    var2['current'] = var1;
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var1 = var2;
case 20:
            return var1;
        }
    };
    var3['useClaimableGiftingPromotionRewards'] = var5;
    var5 = function useClaimableGiftingPromotionVariantsRewards() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.bind(var1)();
            var3 = null;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var2 = var4.variants;
case 17:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0004_ip = 5; continue _fun0004 }
case 22:
            var1 = var2;
case 5:
            return var1;
        }
    };
    var3['useClaimableGiftingPromotionVariantsRewards'] = var5;
    var5 = function useGiftingPromotionRewardCollectiblePurchase(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.useFetchPurchases;
            var1 = var1.bind(var2)();
            var3 = var1.purchases;
            var1 = null;
            var2 = var1 != var4;
            if(!var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var2 = var3.get;
            var1 = var2.bind(var3)(var4);
case 23:
            return var1;
        }
    };
    var3['useGiftingPromotionRewardCollectiblePurchase'] = var5;
    var5 = function getRewardAssetIdMap(arg1) {
        var4 = arg1;
        var1 = global;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var6 = var3;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot0 = var1;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var1 = arg1;
            var4 = _closure2_slot0;
            var3 = var4.set;
            var2 = var1.skuId;
            var1 = var1.assetId;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['getRewardAssetIdMap'] = var5;
    var5 = function useShouldShowSelectFreeSkuStep(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg2;
            var4 = arg3;
            var5 = _closure1_slot5;
            var3 = undefined;
            var2 = arg1;
            var3 = var5.bind(var3)(var2);
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0006_ip = 25; continue _fun0006 }
case 16:
            var5 = var4.length;
            var4 = 1;
            var2 = var5 >= var4;
case 25:
            if(!var1) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var1 = var3;
case 26:
            if(!var1) { _fun0006_ip = 28; continue _fun0006 }
case 24:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['useShouldShowSelectFreeSkuStep'] = var5;
    var5 = function useShouldAutoSelectGiftingPromotionReward(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg2;
            var4 = arg3;
            var5 = _closure1_slot5;
            var3 = undefined;
            var1 = arg1;
            var3 = var5.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0007_ip = 25; continue _fun0007 }
case 16:
            var5 = var4.length;
            var4 = 1;
            var1 = var4 === var5;
case 25:
            if(!var1) { _fun0007_ip = 26; continue _fun0007 }
case 27:
            var1 = var3;
case 26:
            if(!var1) { _fun0007_ip = 28; continue _fun0007 }
case 24:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['useShouldAutoSelectGiftingPromotionReward'] = var5;
    var3['useIsPlanEligibleForGiftingPromotion'] = var4;
    var4 = function createGradientStyle(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var8 = arguments[1];
            var1 = undefined;
            if(!(var8 === var1)) { _fun0008_ip = 15; continue _fun0008 }
case 29:
            var8 = 78.98;
case 15:
            var6 = null;
            if(!(var6 == var3)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
            return var1;
case 30:
            var2 = global;
            var4 = var2.Array;
            var1 = var4.isArray;
            var1 = var1.bind(var4)(var3);
            var5 = var3;
            if(var1) { _fun0008_ip = 32; continue _fun0008 }
case 33:
            var5 = var3.gradient;
case 32:
            var1 = {};
            var7 = var2.Array;
            var4 = var7.isArray;
            var4 = var4.bind(var7)(var3);
            var7 = var8;
            if(var4) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var4 = var3.angle;
            var7 = var8;
            if(!(var6 != var4)) { _fun0008_ip = 34; continue _fun0008 }
case 36:
            var7 = var3.angle;
case 34:
            var4 = var5.join;
            var3 = ', ';
            var10 = var4.bind(var5)(var3);
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var13 = 'linear-gradient(';
            var11 = 'deg, ';
            var9 = ')';
            var12 = var7;
            var2 = var13[var5](var12, var11, var10, var9, var8);
            var1['background'] = var2;
            return var1;
        }
    };
    var3['createGradientStyle'] = var4;
    var2 = function createBackgroundStyle(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 == var5)) { _fun0009_ip = 37; continue _fun0009 }
case 38:
            var1 = undefined;
            return var1;
case 37:
            var1 = {'backgroundImage': null, 'backgroundSize': 'cover', 'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat'};
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'url(';
            var2 = ')';
            var2 = var4.bind(var3)(var5, var2);
            var1['backgroundImage'] = var2;
            return var1;
        }
    };
    var3['createBackgroundStyle'] = var2;
    return var1;
})();