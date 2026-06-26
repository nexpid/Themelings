// app/modules/premium/promotions/PromotionsHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function useEligibleActiveOutboundPromotions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var6 = undefined;
            if(!(var2 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
case 2:
            var5 = var2.includeClaimedPromotions;
            if(!(var5 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = false;
case 4:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 6;
            var7 = var11[var3];
            var10 = var4.bind(var6)(var7);
            var9 = var10.useStateFromStoresArray;
            var7 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var1 = _closure1_slot7;
                var1 = var1.outboundPromotions;
                return var1;
            };
            var10 = var9.bind(var10)(var8, var7);
            _closure2_slot1 = var10;
            var7 = var11[var3];
            var12 = var4.bind(var6)(var7);
            var9 = var12.useStateFromStores;
            var7 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var1 = _closure1_slot7;
                var1 = var1.consumedInboundPromotionId;
                return var1;
            };
            var9 = var9.bind(var12)(var8, var7);
            _closure2_slot2 = var9;
            var7 = var11[var3];
            var13 = var4.bind(var6)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var12.bind(var13)(var8, var7);
            _closure2_slot3 = var8;
            var7 = var11[var3];
            var14 = var4.bind(var6)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var2 = _closure1_slot6;
                var1 = var2.hasAnyUnexpiredOffer;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var13.bind(var14)(var12, var7);
            _closure2_slot4 = var7;
            var3 = var11[var3];
            var11 = var4.bind(var6)(var3);
            var6 = var11.useStateFromStores;
            var3 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot7;
                var1 = var1.claimedOutboundPromotionCodes;
                return var1;
            };
            var6 = var6.bind(var11)(var4, var3);
            _closure2_slot5 = var6;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var6;
            var2[5] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = null;
                    if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = global;
                    var6 = var4.Set;
                    var7 = _closure2_slot5;
                    var5 = var7.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.promotion;
                        var1 = var1.id;
                        return var1;
                    };
                    var8 = var5.bind(var7)(var4);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var9 = var5;
                    var4 = new var9[var6](var8, var7);
                    var3 = var4 instanceof Object ? var4 : var5;
case 6:
                    var _closure3_slot0 = var3;
                    var3 = _closure2_slot1;
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var9 = arg1;
                            var2 = var9.id;
                            var1 = _closure2_slot2;
                            var1 = var2 !== var1;
                            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 4:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var10 = 7;
                            var2 = var2[var10];
                            var8 = undefined;
                            var3 = var3.bind(var8)(var2);
                            var2 = var3.shouldShowOutboundPromotionOnPlatform;
                            var2 = var2.bind(var3)(var9);
                            var3 = !var2;
                            var2 = !var3;
                            if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var10];
                            var4 = var4.bind(var8)(var3);
                            var3 = var4.isLogitechPromotion;
                            var3 = var3.bind(var4)(var9);
                            var3 = !var3;
                            if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var11 = _closure3_slot0;
                            var7 = null;
                            var11 = var7 == var11;
                            var7 = undefined;
                            if(var11) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var12 = _closure3_slot0;
                            var11 = var12.has;
                            var4 = var9.id;
                            var7 = var11.bind(var12)(var4);
case 13:
                            var4 = true;
                            var4 = var4 === var7;
                            if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var10];
                            var8 = var7.bind(var8)(var6);
                            var7 = var8.isOutboundPromotionHiddenFromTrialUser;
                            var6 = _closure2_slot3;
                            var5 = _closure2_slot4;
                            var5 = var7.bind(var8)(var6, var9, var5);
                            var4 = !var5;
case 15:
                            var3 = var4;
case 11:
                            var2 = var3;
case 9:
                            var1 = var2;
case 8:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumTypes;
    var _closure1_slot8 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/promotions/PromotionsHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var3['useEligibleActiveOutboundPromotions'] = var4;
    var4 = function useOutboundPromotions() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 6;
            var2 = var10[var5];
            var9 = undefined;
            var8 = var4.bind(var9)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var1 = _closure1_slot7;
                var1 = var1.lastFetchedActivePromotions;
                return var1;
            };
            var8 = var7.bind(var8)(var6, var2);
            var _closure2_slot0 = var8;
            var2 = var10[var5];
            var7 = var4.bind(var9)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var6.bind(var7)(var4, var2);
            var6 = _closure1_slot1;
            var4 = 8;
            var2 = var10[var4];
            var12 = var6.bind(var9)(var2);
            var11 = var12.isPremiumExactly;
            var2 = _closure1_slot8;
            var2 = var2.TIER_2;
            var2 = var11.bind(var12)(var7, var2);
            var4 = var10[var4];
            var6 = var6.bind(var9)(var4);
            var4 = var6.isPremium;
            var4 = var4.bind(var6)(var7);
            var6 = !var4;
            if(var6) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var6 = var2;
case 17:
            var _closure2_slot1 = var6;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var7 = var2[var5];
            var12 = var4.bind(var9)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var1 = _closure1_slot7;
                var1 = var1.claimedOutboundPromotionCodes;
                return var1;
            };
            var10 = var11.bind(var12)(var10, var7);
            var _closure2_slot2 = var10;
            var2 = var2[var5];
            var7 = var4.bind(var9)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var1 = _closure1_slot7;
                var1 = var1.claimedOutboundPromotionCodesLoaded;
                return var1;
            };
            var5 = var5.bind(var7)(var4, var2);
            var11 = _closure1_slot3;
            var7 = var11.useEffect;
            var4 = new Array(1);
            var4[0] = var8;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 19; continue _fun0005 }
case 2:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.markOutboundPromotionsSeen;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var7.bind(var11)(var2, var4);
            var11 = _closure1_slot3;
            var7 = var11.useEffect;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var6;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.wait;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure2_slot1;
                        if(!var1) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                        var3 = _closure2_slot0;
                        var2 = null;
                        var1 = var2 == var3;
case 20:
                        if(!var1) { _fun0006_ip = 22; continue _fun0006 }
case 5:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.fetchActivePromotions;
                        var1 = var1.bind(var2)();
case 22:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var7.bind(var11)(var2, var4);
            var11 = _closure1_slot3;
            var7 = var11.useEffect;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.wait;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.fetchClaimedOutboundPromotionCodes;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var11)(var4, var2);
            var11 = _closure1_slot3;
            var7 = var11.useMemo;
            var4 = new Array(1);
            var4[0] = var10;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getClaimedOutboundPromotionCodeMap;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var11)(var2, var4);
            var7 = _closure1_slot9;
            var4 = {};
            var11 = true;
            var4['includeClaimedPromotions'] = var11;
            var4 = var7.bind(var9)(var4);
            var _closure2_slot3 = var4;
            var9 = _closure1_slot3;
            var7 = var9.useMemo;
            var3 = new Array(2);
            var3[0] = var4;
            var3[1] = var10;
            var1 = function() {
                var2 = global;
                var5 = var2.Set;
                var6 = _closure2_slot3;
                var4 = var6.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var7 = var4.bind(var6)(var3);
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot0 = var3;
                var3 = _closure2_slot2;
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.promotion;
                        var3 = _closure3_slot0;
                        var2 = var3.has;
                        var1 = var4.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        if(!var1) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var3);
                        var3 = var5.isRecurringPromotion;
                        var2 = {};
                        var6 = var4.promotionType;
                        var2['promotionType'] = var6;
                        var3 = var3.bind(var5)(var2);
                        var2 = false;
                        var1 = var2 === var3;
case 23:
                        if(!var1) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.isLogitechPromotion;
                        var2 = var2.bind(var3)(var4);
                        var1 = !var2;
case 25:
                        if(!var1) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.shouldShowOutboundPromotionOnPlatform;
                        var1 = var2.bind(var3)(var4);
case 27:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var9)(var1, var3);
            var1 = {};
            if(!var5) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var6 = !var6;
            if(var6) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var7 = null;
            var6 = var7 != var8;
case 31:
            var5 = var6;
case 29:
            var1['promotionsLoaded'] = var5;
            var1['activeOutboundPromotions'] = var4;
            var1['claimedEndedOutboundPromotions'] = var3;
            var1['claimedOutboundPromotionCodeMap'] = var2;
            return var1;
        }
    };
    var3['useOutboundPromotions'] = var4;
    var4 = function useUnseenOutboundPromotions() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 6;
        var2 = var5[var2];
        var5 = undefined;
        var7 = var4.bind(var5)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var1 = _closure1_slot7;
            var1 = var1.lastSeenOutboundPromotionStartDate;
            return var1;
        };
        var2 = var6.bind(var7)(var4, var2);
        var _closure2_slot0 = var2;
        var4 = _closure1_slot9;
        var6 = var4.bind(var5)();
        var _closure2_slot1 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var2;
        var2 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 33; continue _fun0008 }
case 2:
                var4 = _closure2_slot1;
                var3 = var4.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var5 = var1.startDate;
                    var1 = global;
                    var2 = var1.Date;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var6 = var3;
                    var2 = new var6[var2](var5, var4);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var4 = var1.Date;
                    var5 = _closure2_slot0;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var6 = var3;
                    var1 = new var6[var4](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var1 = var2 > var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                _fun0008_ip = 34; continue _fun0008;
case 33:
                var1 = _closure2_slot1;
case 34:
                return var1;
            }
        };
        var3 = var4.bind(var5)(var2, var3);
        var2 = var3.filter;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.shouldShowOutboundPromotionOnPlatform;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useUnseenOutboundPromotions'] = var4;
    var2 = function useBogoPromotion() {
        var1 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot7;
            var1 = var1.bogoPromotion;
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        var1['promotion'] = var2;
        return var1;
    };
    var3['useBogoPromotion'] = var2;
    return var1;
})();