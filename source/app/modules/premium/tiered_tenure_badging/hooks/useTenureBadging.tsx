// app/modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var12;
    var8 = function useTieredTenureBadge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var5 = var4[var2];
            var2 = undefined;
            var7 = var3.bind(var2)(var5);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var6.bind(var7)(var5, var1);
            var1 = 5;
            var1 = var4[var1];
            var4 = var3.bind(var2)(var1);
            var3 = var4.useTieredTenureBadgeForUser;
            var1 = null;
            var6 = var1 == var5;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.id;
case 2:
            var2 = var3.bind(var4)(var2);
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot12 = var8;
    var6 = function usePremiumSince() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 4;
            var6 = var7[var3];
            var5 = undefined;
            var10 = var4.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var9.bind(var10)(var8, var6);
            var8 = 6;
            var8 = var7[var8];
            var10 = var4.bind(var5)(var8);
            var9 = var10.isPremiumExactly;
            var8 = _closure1_slot6;
            var8 = var8.TIER_2;
            var9 = var9.bind(var10)(var6, var8);
            var _closure2_slot0 = var9;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getPremiumSubscription;
                    var2 = var1.bind(var2)();
                    var4 = null;
                    var3 = var4 != var2;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                    var1 = var2.premiumSince;
case 6:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var4, var2, var3);
            var4 = _closure1_slot9;
            var3 = null;
            var7 = var3 == var6;
            var1 = undefined;
            if(var7) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var6.id;
case 9:
            var1 = var4.bind(var5)(var1);
            if(!(var3 != var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot13 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var12[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var12[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var12[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var12[var2];
    var2 = var11.bind(var1)(var2);
    var5 = var2.PremiumTypes;
    var _closure1_slot6 = var5;
    var2 = var2.TENURE_BADGES;
    var _closure1_slot7 = var2;
    var9 = {};
    var2 = 'upcoming';
    var9['UPCOMING'] = var2;
    var2 = 'earned';
    var9['EARNED'] = var2;
    var _closure1_slot8 = var9;
    var7 = function usePremiumSinceForUser(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var4 = _closure1_slot3;
                var3 = var4.getUserProfile;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var2 = var3.premiumSince;
case 15:
                return var2;
case 13:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var7;
    var5 = function useTieredTenureEarnedOnDate() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = _closure1_slot12;
            var6 = undefined;
            var5 = var1.bind(var6)();
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var7 = var2.bind(var6)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var7)(var2, var1);
            var7 = null;
            var4 = var7 == var5;
            var1 = null;
            if(var4) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var4 = var7 == var2;
            var1 = null;
            if(var4) { _fun0005_ip = 17; continue _fun0005 }
case 19:
            var4 = var2.premiumSince;
            var4 = var7 == var4;
            var1 = null;
            if(var4) { _fun0005_ip = 17; continue _fun0005 }
case 20:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 8;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.getEarnedOnDate;
            var2 = var2.premiumSince;
            var1 = var3.bind(var4)(var5, var2);
case 17:
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var2 = function useTieredTenureBadgeDataForUser(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.useTieredTenureBadgeForUser;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var4 = var1 == var3;
            if(var4) { _fun0006_ip = 21; continue _fun0006 }
case 22:
            var2 = _closure1_slot7;
            var1 = var2[var3];
case 21:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var10 = 9;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx';
    var10 = var11.bind(var12)(var10);
    var3['TieredTenureBadgeStatus'] = var9;
    var3['useTieredTenureBadge'] = var8;
    var3['usePremiumSinceForUser'] = var7;
    var3['usePremiumSince'] = var6;
    var6 = function() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.values;
            var2 = _closure1_slot7;
            var4 = var3.bind(var4)(var2);
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var3 = var8[var2];
            var6 = undefined;
            var11 = var7.bind(var6)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var10.bind(var11)(var9, var3);
            var2 = var8[var2];
            var11 = var7.bind(var6)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var10.bind(var11)(var3, var2);
            var3 = 6;
            var3 = var8[var3];
            var8 = var7.bind(var6)(var3);
            var7 = var8.isPremiumExactly;
            var3 = _closure1_slot6;
            var3 = var3.TIER_2;
            var3 = var7.bind(var8)(var9, var3);
            if(!var3) { _fun0007_ip = 23; continue _fun0007 }
case 24:
            var3 = null;
            if(!(var3 != var2)) { _fun0007_ip = 23; continue _fun0007 }
case 25:
            var7 = var2.premiumSince;
            if(!(var3 != var7)) { _fun0007_ip = 23; continue _fun0007 }
case 26:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 7;
            var7 = var9[var5];
            var7 = var8.bind(var6)(var7);
            var7 = var7.bind(var6)();
            var5 = var9[var5];
            var5 = var8.bind(var6)(var5);
            var2 = var2.premiumSince;
            var8 = var5.bind(var6)(var2);
            var6 = var8.add;
            var5 = 1;
            var2 = 'day';
            var6 = var6.bind(var8)(var5, var2);
            var5 = var7.diff;
            var2 = 'months';
            var2 = var5.bind(var7)(var6, var2);
            var _closure2_slot0 = var2;
            var2 = var4.reduce;
            var1 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var3 = arg2;
                    var2 = var3.id;
                    var4 = var3.tenureReqNumMonths;
                    var3 = _closure2_slot0;
                    if(!(var3 >= var4)) { _fun0008_ip = 27; continue _fun0008 }
case 7:
                    var1 = var2;
case 27:
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1, var3);
            return var1;
case 23:
            var1 = null;
            return var1;
        }
    };
    var3['useTieredTenureBadgesFromSubscriptionData'] = var6;
    var3['useTieredTenureEarnedOnDate'] = var5;
    var4 = function() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 4;
            var1 = var4[var1];
            var8 = undefined;
            var5 = var2.bind(var8)(var1);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var4.bind(var5)(var2, var1);
            var4 = _closure1_slot11;
            var1 = null;
            var6 = var1 == var5;
            var2 = undefined;
            if(var6) { _fun0009_ip = 28; continue _fun0009 }
case 29:
            var2 = var5.id;
case 28:
            var4 = var4.bind(var8)(var2);
            var2 = _closure1_slot10;
            var5 = var2.bind(var8)();
            var2 = _closure1_slot13;
            var10 = var2.bind(var8)();
            var2 = global;
            var7 = var2.Object;
            var6 = var7.values;
            var2 = _closure1_slot7;
            var6 = var6.bind(var7)(var2);
            var7 = var1 == var10;
            var2 = null;
            if(var7) { _fun0009_ip = 30; continue _fun0009 }
case 31:
            var7 = var1 == var6;
            var2 = null;
            if(var7) { _fun0009_ip = 30; continue _fun0009 }
case 32:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var7 = 7;
            var7 = var11[var7];
            var7 = var9.bind(var8)(var7);
            var9 = var7.bind(var8)();
            var8 = var9.diff;
            var7 = 'days';
            var9 = var8.bind(var9)(var10, var7);
            var7 = 0;
            var8 = var6[var7];
            var10 = var8.tenureReqNumMonths;
            var6 = 30;
            var6 = var6 * var10;
            var9 = var6 - var9;
            var6 = null;
            if(!(!(var9 <= var7))) { _fun0009_ip = 33; continue _fun0009 }
case 34:
            var7 = {};
            var13 = var7;
            var12 = var8;
            var8 = copyDataProperties(var13, var12);
            var8 = 'daysLeft';
            var7[var8] = var9;
            var8 = _closure1_slot8;
            var9 = var8.UPCOMING;
            var8 = 'status';
            var7[var8] = var9;
            var6 = var7;
case 33:
            var2 = var6;
case 30:
            if(!(var1 == var4)) { _fun0009_ip = 35; continue _fun0009 }
case 36:
            var6 = var1 != var2;
            var1 = null;
            if(!var6) { _fun0009_ip = 37; continue _fun0009 }
case 38:
            var1 = var2;
case 37:
            _fun0009_ip = 39; continue _fun0009;
case 35:
            var2 = {};
            var13 = var2;
            var12 = var4;
            var4 = copyDataProperties(var13, var12);
            var4 = 'earnedOnDate';
            var2[var4] = var5;
            var3 = _closure1_slot8;
            var4 = var3.EARNED;
            var3 = 'status';
            var2[var3] = var4;
            var1 = var2;
case 39:
            return var1;
        }
    };
    var3['useTieredTenureBadgeData'] = var4;
    var3['useTieredTenureBadgeDataForUser'] = var2;
    return var1;
})();