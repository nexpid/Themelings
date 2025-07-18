// app/modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useIsPlanEligibleForGiftingPromotion(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(var3) { _fun0001_ip = 49; continue _fun0001 }
 43:
            var4 = var1.eligiblePlanIds;
 49:
            var3 = var6 == var4;
            var1 = undefined;
            if(var3) { _fun0001_ip = 82; continue _fun0001 }
 58:
            var3 = var4.includes;
            var6 = var6 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 77; continue _fun0001 }
 72:
            var2 = var5.id;
 77:
            var1 = var3.bind(var4)(var2);
 82:
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
    var5 = native4;
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
 0:
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
            if(var7) { _fun0002_ip = 88; continue _fun0002 }
 82:
            var11 = var6.rewards;
 88:
            var _closure2_slot1 = var11;
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
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0003_ip = 92; continue _fun0003 }
 10:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    if(var2) { _fun0003_ip = 92; continue _fun0003 }
 22:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 92; continue _fun0003 }
 32:
                    var2 = _closure2_slot4;
                    if(!(var3 != var2)) { _fun0003_ip = 46; continue _fun0003 }
 40:
                    var4 = new Array(0);
                    _fun0003_ip = 69; continue _fun0003;
 46:
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
 69:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var2 = _closure2_slot5;
                    var1 = true;
                    var2['current'] = var1;
 92:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0002_ip = 222; continue _fun0002 }
 219:
            var1 = var2;
 222:
            return var1;
        }
    };
    var3['useClaimableGiftingPromotionRewards'] = var5;
    var5 = function useGiftingPromotionRewardCollectiblePurchase(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(!var2) { _fun0004_ip = 63; continue _fun0004 }
 53:
            var2 = var3.get;
            var1 = var2.bind(var3)(var4);
 63:
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
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg2;
            var4 = arg3;
            var5 = _closure1_slot5;
            var3 = undefined;
            var2 = arg1;
            var3 = var5.bind(var3)(var2);
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0005_ip = 44; continue _fun0005 }
 32:
            var5 = var4.length;
            var4 = 1;
            var2 = var5 > var4;
 44:
            if(!var1) { _fun0005_ip = 50; continue _fun0005 }
 47:
            var1 = var3;
 50:
            if(!var1) { _fun0005_ip = 56; continue _fun0005 }
 53:
            var1 = var2;
 56:
            return var1;
        }
    };
    var3['useShouldShowSelectFreeSkuStep'] = var5;
    var5 = function useShouldAutoSelectGiftingPromotionReward(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg2;
            var4 = arg3;
            var5 = _closure1_slot5;
            var3 = undefined;
            var1 = arg1;
            var3 = var5.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0006_ip = 44; continue _fun0006 }
 32:
            var5 = var4.length;
            var4 = 1;
            var1 = var4 === var5;
 44:
            if(!var1) { _fun0006_ip = 50; continue _fun0006 }
 47:
            var1 = var3;
 50:
            if(!var1) { _fun0006_ip = 56; continue _fun0006 }
 53:
            var1 = var2;
 56:
            return var1;
        }
    };
    var3['useShouldAutoSelectGiftingPromotionReward'] = var5;
    var3['useIsPlanEligibleForGiftingPromotion'] = var4;
    var2 = function createGradientStyle(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var8 = arguments[1];
            var1 = undefined;
            if(!(var8 === var1)) { _fun0007_ip = 22; continue _fun0007 }
 12:
            var8 = 78.98;
 22:
            var6 = null;
            if(!(var6 == var3)) { _fun0007_ip = 30; continue _fun0007 }
 28:
            return var1;
 30:
            var2 = global;
            var4 = var2.Array;
            var1 = var4.isArray;
            var1 = var1.bind(var4)(var3);
            var5 = var3;
            if(var1) { _fun0007_ip = 60; continue _fun0007 }
 54:
            var5 = var3.gradient;
 60:
            var1 = {};
            var7 = var2.Array;
            var4 = var7.isArray;
            var4 = var4.bind(var7)(var3);
            var7 = var8;
            if(var4) { _fun0007_ip = 103; continue _fun0007 }
 84:
            var4 = var3.angle;
            var7 = var8;
            if(!(var6 != var4)) { _fun0007_ip = 103; continue _fun0007 }
 97:
            var7 = var3.angle;
 103:
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
    var3['createGradientStyle'] = var2;
    return var1;
})();