// app/modules/premium/PremiumSubscriptionTrialUtil.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var _closure1_slot5 = var7;
    var7 = var4.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var _closure1_slot6 = var7;
    var7 = var4.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID;
    var _closure1_slot7 = var7;
    var7 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot8 = var7;
    var4 = var4.PREMIUM_TRIAL_IDS_ALL;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/PremiumSubscriptionTrialUtil.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            var1 = var1 == var2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2.hasActiveTrial;
            var1 = !var2;
case 2:
            var1 = !var1;
            return var1;
        }
    };
    var3['useHasActiveTrial'] = var4;
    var4 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot3;
            var1 = var2.getPremiumTypeSubscription;
            var3 = var1.bind(var2)();
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var3.trialId;
case 4:
            var1 = var2 != var1;
            return var1;
        }
    };
    var3['hasActiveTrial'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            var3 = var2 == var4;
            var1 = undefined;
            if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = var4.trialId;
case 6:
            var1 = var2 != var1;
            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var5 = var4.trialId;
            var2 = _closure1_slot5;
            var2 = var5 === var2;
            if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var6 = var4.trialId;
            var5 = _closure1_slot6;
            var2 = var6 === var5;
case 10:
            if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 3:
            var6 = var4.trialId;
            var5 = _closure1_slot7;
            var2 = var6 === var5;
case 12:
            if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var4 = var4.trialId;
            var3 = _closure1_slot8;
            var2 = var4 === var3;
case 13:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var3['isEligibleTrialSub'] = var4;
    var4 = function useCurrentPremiumTrialTier() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 4;
            var5 = var7[var4];
            var2 = undefined;
            var10 = var6.bind(var2)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var9.bind(var10)(var8, var5);
            var4 = var7[var4];
            var6 = var6.bind(var2)(var4);
            var4 = var6.useStateFromStores;
            var7 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var6)(var3, var1);
            var4 = null;
            var6 = var4 != var5;
            var1 = null;
            if(!var6) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var5 = var5.hasActiveTrial;
            var1 = null;
            if(!var5) { _fun0004_ip = 15; continue _fun0004 }
case 17:
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var2 = var3.premiumType;
case 18:
            var1 = var2;
case 15:
            return var1;
        }
    };
    var3['useCurrentPremiumTrialTier'] = var4;
    var2 = function getPremiumTrialOffer() {
        var4 = _closure1_slot9;
        var3 = var4.map;
        var2 = function(arg1) {
            var3 = _closure1_slot4;
            var2 = var3.getUserTrialOffer;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.hasUserTrialOfferExpired;
                var2 = var2.bind(var3)(var4);
                var1 = !var2;
case 20:
                return var1;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.shift;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['getPremiumTrialOffer'] = var2;
    return var1;
})();