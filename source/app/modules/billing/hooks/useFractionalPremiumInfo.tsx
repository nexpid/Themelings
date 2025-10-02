// app/modules/billing/hooks/useFractionalPremiumInfo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function shouldFetchEntitlements(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            var1 = arg2;
            var1 = var2 != var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot7;
            var2 = var2.fetchingAllEntitlements;
            var1 = !var2;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot7;
            var2 = var2.fetchedAllEntitlements;
            var2 = !var2;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3;
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EntitlementSourceTypes;
    var _closure1_slot8 = var7;
    var7 = var4.EntitlementTypes;
    var _closure1_slot9 = var7;
    var4 = var4.SubscriptionStatusTypes;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FractionalPremiumStates;
    var _closure1_slot11 = var4;
    var4 = function calculateFractionalPremiumInfo(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var12 = var2.isFetching;
            var6 = undefined;
            if(!(var12 === var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var12 = false;
case 8:
            var10 = var2.entitlements;
            var8 = var2.unactivatedFractionalPremiumUnits;
            var11 = var2.currentUser;
            var1 = var2.premiumSubscription;
            var7 = var2.fetchedAllEntitlements;
            var18 = var2.excludeReverseTrialFromCountdown;
            var2 = {};
            var3 = false;
            var2['isFractionalPremiumActive'] = var3;
            var9 = _closure1_slot11;
            var9 = var9.NONE;
            var2['fractionalState'] = var9;
            var13 = _closure1_slot1;
            var9 = _closure1_slot2;
            var14 = 7;
            var15 = var9[var14];
            var16 = var13.bind(var6)(var15);
            var15 = 0;
            var16 = var16.bind(var6)(var15);
            var2['startsAt'] = var16;
            var9 = var9[var14];
            var9 = var13.bind(var6)(var9);
            var9 = var9.bind(var6)(var15);
            var2['endsAt'] = var9;
            var9 = '';
            var2['currentEntitlementId'] = var9;
            var13 = new Array(0);
            var2['unactivatedUnits'] = var13;
            var2['fetched'] = var7;
            if(var12) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var12 = null;
            if(!(var12 != var11)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var11 = var10.length;
            if(!(var15 === var11)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var11 = var8.length;
            if(!(var15 !== var11)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var13 = var10.filter;
            var11 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.endsAt;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var2 = var2.startsAt;
                    var1 = var3 != var2;
case 16:
                    return var1;
                }
            };
            var16 = var13.bind(var10)(var11);
            var13 = var16.sort;
            var11 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var2 = arg2;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 8;
                    var1 = var5[var1];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var1);
                    var1 = var3.endsAt;
                    var7 = null;
                    var4 = var7 != var1;
                    if(!var4) { _fun0004_ip = 6; continue _fun0004 }
case 18:
                    var1 = var2.endsAt;
                    var4 = var7 != var1;
case 6:
                    var1 = 'endsAt should not be null';
                    var1 = var5.bind(var6)(var4, var1);
                    var4 = var3.endsAt;
                    var1 = var2.endsAt;
                    var4 = var4 < var1;
                    var1 = -1;
                    if(var4) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var3 = var3.endsAt;
                    var2 = var2.endsAt;
                    var3 = var3 > var2;
                    var2 = 0;
                    if(!var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var2 = 1;
case 21:
                    var1 = var2;
case 19:
                    return var1;
                }
            };
            var11 = var13.bind(var16)(var11);
            var13 = var11.reverse;
            var13 = var13.bind(var11)();
            var13 = var11.length;
            if(!(var13 > var15)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var16 = var11.length;
            var13 = var10.length;
            if(!(var16 === var13)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var13 = var11[var15];
            var13 = var13.startsAt;
            if(!(var12 != var13)) { _fun0002_ip = 25; continue _fun0002 }
case 27:
            var13 = var11[var15];
            var13 = var13.endsAt;
            if(!(var12 != var13)) { _fun0002_ip = 25; continue _fun0002 }
case 23:
            var13 = var11[var15];
            var16 = var12 != var13;
            var11 = null;
            if(!var16) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var11 = var13;
case 28:
            var13 = _closure1_slot11;
            var13 = var13.NONE;
            if(!(var12 != var11)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            if(!(var12 != var1)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var16 = var1.status;
            var1 = _closure1_slot10;
            var1 = var1.PAUSED;
            if(!(var16 !== var1)) { _fun0002_ip = 34; continue _fun0002 }
case 32:
            var1 = _closure1_slot11;
            var1 = var1.FP_ONLY;
            _fun0002_ip = 35; continue _fun0002;
case 34:
            var16 = _closure1_slot11;
            var1 = var16.FP_SUB_PAUSED;
case 35:
            var13 = var1;
case 30:
            if(!var18) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var1 = var12 == var11;
            var16 = undefined;
            if(var1) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var16 = var11.sourceType;
case 38:
            var1 = _closure1_slot8;
            var1 = var1.REVERSE_TRIAL;
            var18 = var16 === var1;
case 36:
            var1 = {};
            var16 = var12 != var11;
            var1['isFractionalPremiumActive'] = var16;
            var1['fractionalState'] = var13;
            if(!(var12 == var11)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var16 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var14];
            var13 = var16.bind(var6)(var13);
            var13 = var13.bind(var6)(var15);
            _fun0002_ip = 42; continue _fun0002;
case 40:
            var17 = _closure1_slot1;
            var16 = _closure1_slot2;
            var16 = var16[var14];
            var17 = var17.bind(var6)(var16);
            var16 = var11.startsAt;
            var13 = var17.bind(var6)(var16);
case 42:
            var1['startsAt'] = var13;
            if(!(var12 == var11)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var16 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var14];
            var13 = var16.bind(var6)(var13);
            var13 = var13.bind(var6)(var15);
            _fun0002_ip = 45; continue _fun0002;
case 43:
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = var17[var14];
            var15 = var15.bind(var6)(var14);
            var16 = _closure1_slot0;
            var14 = 10;
            var14 = var17[var14];
            var17 = var16.bind(var6)(var14);
            var16 = var17.extendDateWithUnconsumedFractionalPremium;
            var22 = var11.endsAt;
            var23 = var17;
            var21 = var8;
            var20 = undefined;
            var19 = var18;
            var14 = var23[var16](var22, var21, var20, var19, var18);
            var13 = var15.bind(var6)(var14);
case 45:
            var1['endsAt'] = var13;
            var12 = var12 != var11;
            if(!var12) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var9 = var11.id;
case 46:
            var1['currentEntitlementId'] = var9;
            var1['unactivatedUnits'] = var8;
            var1['fetched'] = var7;
            return var1;
case 25:
            var1 = global;
            var9 = var1.Array;
            var8 = var9.from;
            var7 = var10.values;
            var7 = var7.bind(var10)();
            var8 = var8.bind(var9)(var7);
            var7 = var8.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var8 = var7.bind(var8)(var5);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var6 = var7.captureBillingMessage;
            var4 = {};
            var5 = {};
            var5['entitlementIds'] = var8;
            var4['extra'] = var5;
            var5 = 'fractional redemption entitlements should have startsAt/endsAt';
            var4 = var6.bind(var7)(var5, var4);
            var1 = var1.Error;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var23 = var4;
            var22 = var5;
            var1 = new var23[var1](var22, var21);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 12:
            return var2;
case 10:
            var1 = {};
            var22 = var1;
            var21 = var2;
            var2 = copyDataProperties(var22, var21);
            var2 = 'fetched';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/hooks/useFractionalPremiumInfo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFractionalPremiumInfo() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arguments[0];
            var12 = undefined;
            if(!(var1 === var12)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var1 = {'forceFetch': false, 'excludeReverseTrial': false, 'excludeReverseTrialFromCountdown': false};
case 48:
            var15 = var1.forceFetch;
            var _closure2_slot0 = var15;
            var3 = var1.excludeReverseTrial;
            var _closure2_slot1 = var3;
            var6 = var1.excludeReverseTrialFromCountdown;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var12;
            var _closure2_slot4 = var12;
            var _closure2_slot5 = var12;
            var _closure2_slot6 = var12;
            var _closure2_slot7 = var12;
            var _closure2_slot8 = var12;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var7 = var5[var1];
            var10 = var4.bind(var12)(var7);
            var9 = var10.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var9.bind(var10)(var8, var7);
            _closure2_slot3 = var11;
            var7 = var5[var1];
            var10 = var4.bind(var12)(var7);
            var9 = var10.useStateFromStoresArray;
            var7 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getFractionalPremium;
                var1 = {};
                var4 = _closure2_slot1;
                var1['excludeReverseTrial'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var8, var7);
            _closure2_slot4 = var10;
            var7 = var5[var1];
            var13 = var4.bind(var12)(var7);
            var9 = var13.useStateFromStores;
            var7 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var1 = _closure1_slot7;
                var1 = var1.fetchedAllEntitlements;
                return var1;
            };
            var7 = var9.bind(var13)(var8, var7);
            _closure2_slot5 = var7;
            var8 = var5[var1];
            var14 = var4.bind(var12)(var8);
            var13 = var14.useStateFromStoresArray;
            var8 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getUnactivatedFractionalPremiumUnits;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var13.bind(var14)(var9, var8);
            _closure2_slot6 = var8;
            var1 = var5[var1];
            var9 = var4.bind(var12)(var1);
            var5 = var9.useStateFromStores;
            var1 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var5.bind(var9)(var4, var1);
            _closure2_slot7 = var9;
            var5 = _closure1_slot4;
            var4 = var5.useState;
            var13 = _closure1_slot12;
            var1 = {};
            var14 = _closure1_slot13;
            var14 = var14.bind(var12)(var15, var11);
            if(var14) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var15 = _closure1_slot7;
            var14 = var15.fetchingAllEntitlements;
case 50:
            var1['isFetching'] = var14;
            var1['entitlements'] = var10;
            var1['unactivatedFractionalPremiumUnits'] = var8;
            var1['currentUser'] = var11;
            var1['premiumSubscription'] = var9;
            var1['fetchedAllEntitlements'] = var7;
            var1['excludeReverseTrialFromCountdown'] = var6;
            var1 = var13.bind(var12)(var1);
            var5 = var4.bind(var5)(var1);
            var4 = _closure1_slot3;
            var1 = 2;
            var5 = var4.bind(var12)(var5, var1);
            var1 = 0;
            var1 = var5[var1];
            var4 = 1;
            var4 = var5[var4];
            _closure2_slot8 = var4;
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 12;
            var4 = var13[var4];
            var5 = var5.bind(var12)(var4);
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot13;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2);
                    if(!var2) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.fetchUserEntitlements;
                    var2 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.FRACTIONAL_REDEMPTION;
                    var2['entitlementType'] = var5;
                    var2 = var3.bind(var4)(var2);
case 52:
                    return var1;
                }
            };
            var4 = var5.bind(var12)(var4);
            var5 = _closure1_slot4;
            var4 = var5.useEffect;
            var3 = new Array(6);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var9;
            var3[3] = var8;
            var3[4] = var7;
            var3[5] = var6;
            var2 = function() {
                var5 = _closure1_slot12;
                var4 = {};
                var1 = _closure2_slot4;
                var4['entitlements'] = var1;
                var1 = _closure2_slot6;
                var4['unactivatedFractionalPremiumUnits'] = var1;
                var1 = _closure2_slot3;
                var4['currentUser'] = var1;
                var1 = _closure2_slot7;
                var4['premiumSubscription'] = var1;
                var1 = _closure2_slot5;
                var4['fetchedAllEntitlements'] = var1;
                var1 = _closure2_slot2;
                var4['excludeReverseTrialFromCountdown'] = var1;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var _closure3_slot0 = var4;
                var3 = _closure2_slot8;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 14;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.isEqual;
                        var3 = _closure3_slot0;
                        var3 = var4.bind(var5)(var1, var3);
                        if(var3) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                        var1 = _closure3_slot0;
case 54:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();