// app/modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function useIsPlanEligibleForGiftingPromotion(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot5;
            var2 = var2.PREMIUM_YEAR_TIER_2;
            var3 = new Array(2);
            var3[0] = var2;
            var1 = _closure1_slot5;
            var1 = var1.PREMIUM_MONTH_TIER_2;
            var3[1] = var1;
            var2 = var3.includes;
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.id;
case 2:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot6 = var4;
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
    var _closure1_slot2 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SubscriptionPlans;
    var _closure1_slot5 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/gifting/utils/promotions/GiftingPromotionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useFetchClaimableGiftingPromotionRewardSkuIds() {
        var5 = _closure1_slot3;
        var1 = var5.useState;
        var7 = var1.bind(var5)();
        var4 = _closure1_slot2;
        var6 = undefined;
        var1 = 2;
        var7 = var4.bind(var6)(var7, var1);
        var1 = 0;
        var1 = var7[var1];
        var4 = 1;
        var4 = var7[var4];
        var _closure2_slot0 = var4;
        var4 = _closure1_slot0;
        var7 = _closure1_slot1;
        var8 = 4;
        var8 = var7[var8];
        var10 = var4.bind(var6)(var8);
        var9 = var10.useStateFromStores;
        var3 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var3;
        var3 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getGiftPromotionRewardSkuIds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var9 = var9.bind(var10)(var8, var3);
        var _closure2_slot1 = var9;
        var3 = 5;
        var3 = var7[var3];
        var4 = var4.bind(var6)(var3);
        var3 = var4.useFetchPurchases;
        var3 = var3.bind(var4)();
        var8 = var3.purchases;
        var _closure2_slot2 = var8;
        var7 = var3.hasPreviouslyFetched;
        var _closure2_slot3 = var7;
        var6 = var3.fetchPurchasesError;
        var _closure2_slot4 = var6;
        var4 = var5.useRef;
        var3 = false;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot5 = var3;
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot3;
                if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure2_slot5;
                var2 = var2.current;
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var2 = _closure2_slot1;
                var3 = var2.length;
                var2 = 0;
                if(!(var3 > var2)) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                var3 = _closure2_slot4;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var4 = new Array(0);
                _fun0002_ip = 10; continue _fun0002;
case 8:
                var5 = _closure2_slot1;
                var3 = var5.filter;
                var2 = function(arg1) {
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var1 = arg1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 == var2;
                    return var1;
                };
                var4 = var3.bind(var5)(var2);
case 10:
                var3 = _closure2_slot0;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var2 = _closure2_slot5;
                var1 = true;
                var2['current'] = var1;
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useFetchClaimableGiftingPromotionRewardSkuIds'] = var5;
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg2;
            var4 = arg3;
            var5 = _closure1_slot6;
            var3 = undefined;
            var2 = arg1;
            var3 = var5.bind(var3)(var2);
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var5 = var4.length;
            var4 = 1;
            var2 = var5 >= var4;
case 11:
            if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 9:
            var1 = var3;
case 13:
            if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 8:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var3['useShouldShowSelectFreeSkuStep'] = var5;
    var5 = function useShouldAutoSelectGiftingPromotionReward(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg2;
            var4 = arg3;
            var5 = _closure1_slot6;
            var3 = undefined;
            var1 = arg1;
            var3 = var5.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var5 = var4.length;
            var4 = 1;
            var1 = var4 === var5;
case 11:
            if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 9:
            var1 = var3;
case 13:
            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 8:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var3['useShouldAutoSelectGiftingPromotionReward'] = var5;
    var3['useIsPlanEligibleForGiftingPromotion'] = var4;
    var4 = function createGradientStyle(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg1;
            var2 = arg2;
            var6 = null;
            if(!(var6 == var7)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
            var1 = undefined;
            return var1;
case 15:
            if(!(var6 == var2)) { _fun0005_ip = 17; continue _fun0005 }
case 6:
            var2 = {};
case 17:
            var4 = var2.reverse;
            var5 = undefined;
            var1 = var5 !== var4;
            if(!var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var1 = var4;
case 18:
            var4 = var2.colorStops;
            var _closure2_slot0 = var4;
            var2 = var2.defaultAngle;
            var10 = 78.98;
            if(!(var5 !== var2)) { _fun0005_ip = 20; continue _fun0005 }
case 10:
            var10 = var2;
case 20:
            var2 = global;
            var8 = var2.Array;
            var5 = var8.isArray;
            var8 = var5.bind(var8)(var7);
            var5 = var7;
            if(var8) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var5 = var7.gradient;
case 21:
            var9 = var2.Array;
            var8 = var9.isArray;
            var9 = var8.bind(var9)(var7);
            var8 = var10;
            if(var9) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var9 = var7.angle;
            var8 = var10;
            if(!(var6 != var9)) { _fun0005_ip = 23; continue _fun0005 }
case 25:
            var8 = var7.angle;
case 23:
            var7 = var8;
            if(!var1) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var1 = 180;
            var8 = var8 + var1;
            var1 = 360;
            var7 = var8 % var1;
case 26:
            var1 = {};
            if(!(var6 == var4)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var6 = var5.join;
            var4 = ', ';
            var6 = var6.bind(var5)(var4);
            _fun0005_ip = 30; continue _fun0005;
case 28:
            var4 = var5.map;
            var3 = function(arg1, arg2) {
                var2 = _closure2_slot0;
                var1 = arg2;
                var8 = var2[var1];
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var11 = '';
                var10 = arg1;
                var9 = ' ';
                var7 = '%';
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.join;
            var3 = ', ';
            var6 = var4.bind(var5)(var3);
case 30:
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var15 = 'linear-gradient(';
            var13 = 'deg, ';
            var11 = ')';
            var14 = var7;
            var12 = var6;
            var2 = var15[var5](var14, var13, var12, var11, var10);
            var1['background'] = var2;
            return var1;
        }
    };
    var3['createGradientStyle'] = var4;
    var4 = function createBackgroundStyle(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 == var5)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var1 = undefined;
            return var1;
case 31:
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
    var3['createBackgroundStyle'] = var4;
    var2 = function combinePromotionStyles(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var3 = null;
            if(!(var3 != var1)) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            if(!(var3 == var2)) { _fun0007_ip = 7; continue _fun0007 }
case 33:
            var4 = var1;
            if(!(var3 == var4)) { _fun0007_ip = 35; continue _fun0007 }
case 36:
            var5 = var2;
            if(!(var3 == var5)) { _fun0007_ip = 12; continue _fun0007 }
case 37:
            var5 = {};
case 12:
            var4 = var5;
case 35:
            return var4;
case 7:
            var7 = var2.background;
            var6 = var1.backgroundImage;
            var2 = global;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var4 = '';
            var2 = ', ';
            var2 = var5.bind(var4)(var6, var2, var7);
            var1['backgroundImage'] = var2;
            var2 = 'lightgray';
            var1['backgroundColor'] = var2;
            var2 = 'no-repeat, no-repeat';
            var1['backgroundRepeat'] = var2;
            var2 = var1.backgroundSize;
            if(!(var3 == var2)) { _fun0007_ip = 24; continue _fun0007 }
case 38:
            var2 = 'auto 110%, auto';
            var1['backgroundSize'] = var2;
case 24:
            var2 = var1.backgroundPosition;
            if(!(var3 == var2)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var2 = 'right 90% center, 0% 0%';
            var1['backgroundPosition'] = var2;
case 39:
            return var1;
        }
    };
    var3['combinePromotionStyles'] = var2;
    return var1;
})();