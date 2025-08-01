// app/modules/premium/ReverseTrialUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _shouldShowReverseTrialFollowUpUpsell() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 386; continue _fun0001 }
 10:
                    var3 = _closure1_slot4;
                    var2 = var3.getCurrentUser;
                    var2 = var2.bind(var3)();
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var3 = var6[var3];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var3);
                    var3 = var5.isPremium;
                    var6 = var3.bind(var5)(var2);
                    var5 = null;
                    var2 = var5 == var2;
                    if(var2) { _fun0001_ip = 71; continue _fun0001 }
 68:
                    var2 = var6;
 71:
                    if(var2) { _fun0001_ip = 86; continue _fun0001 }
 74:
                    var3 = _closure1_slot7;
                    var2 = var3.fetchedEndedEntitlements;
 86:
                    if(var2) { _fun0001_ip = 157; continue _fun0001 }
 89:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var2 = var8[var2];
                    var8 = var3.bind(var7)(var2);
                    var3 = var8.fetchUserEntitlements;
                    var2 = {};
                    var9 = _closure1_slot10;
                    var9 = var9.FRACTIONAL_REDEMPTION;
                    var2['entitlementType'] = var9;
                    var9 = false;
                    var2['excludeEnded'] = var9;
                    var2 = var3.bind(var8)(var2);
                    SaveGenerator(address=148);
 146:
                    return var2;
 148:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!var3) { _fun0001_ip = 157; continue _fun0001 }
 154:
                    return var2;
 157:
                    var8 = _closure1_slot7;
                    var2 = var8.getReverseTrialEntitlement;
                    var3 = true;
                    var2 = var2.bind(var8)(var3);
                    if(var6) { _fun0001_ip = 381; continue _fun0001 }
 180:
                    if(!(var5 != var2)) { _fun0001_ip = 381; continue _fun0001 }
 187:
                    var6 = var2.endsAt;
                    if(!(var5 != var6)) { _fun0001_ip = 381; continue _fun0001 }
 200:
                    var8 = var2.endsAt;
                    var6 = var8.getTime;
                    var9 = var6.bind(var8)();
                    var6 = global;
                    var10 = var6.Date;
                    var8 = var10.now;
                    var8 = var8.bind(var10)();
                    if(!(var9 < var8)) { _fun0001_ip = 381; continue _fun0001 }
 240:
                    var9 = var2.endsAt;
                    var8 = var9.getTime;
                    var8 = var8.bind(var9)();
                    var9 = var6.Date;
                    var6 = var9.now;
                    var9 = var6.bind(var9)();
                    var6 = 259200000;
                    var6 = var9 - var6;
                    if(!(!(var8 < var6))) { _fun0001_ip = 381; continue _fun0001 }
 285:
                    var6 = var2.sourceType;
                    var2 = _closure1_slot9;
                    var2 = var2.REVERSE_TRIAL;
                    if(!(var6 === var2)) { _fun0001_ip = 381; continue _fun0001 }
 305:
                    var2 = arg1;
                    if(!(var5 == var2)) { _fun0001_ip = 352; continue _fun0001 }
 312:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var6 = var6.bind(var7)(var2);
                    var2 = var6.fetchUserOffer;
                    var2 = var2.bind(var6)();
                    SaveGenerator(address=346);
 344:
                    return var2;
 346:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 378; continue _fun0001 }
 352:
                    var7 = _closure1_slot6;
                    var6 = var7.getUserTrialOffer;
                    var4 = _closure1_slot8;
                    var4 = var6.bind(var7)(var4);
                    if(!(var5 != var4)) { _fun0001_ip = 381; continue _fun0001 }
 375:
                    return var3;
 378:
                    return var2;
 381:
                    var2 = false;
                    return var2;
 386:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var4.PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EntitlementSourceTypes;
    var _closure1_slot9 = var7;
    var4 = var4.EntitlementTypes;
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/ReverseTrialUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function shouldShowReverseTrialFollowUpUpsell() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['shouldShowReverseTrialFollowUpUpsell'] = var4;
    var2 = function useIsInReverseTrial() {
        var2 = function useGetActiveReverseTrialEntitlement() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 10;
                var1 = var1[var2];
                var6 = undefined;
                var8 = var3.bind(var6)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    var2 = _closure1_slot4;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var7.bind(var8)(var3, var1);
                var _closure3_slot0 = var1;
                var3 = _closure1_slot5;
                var1 = var3.getPremiumTypeSubscription;
                var7 = var1.bind(var3)();
                var1 = null;
                var3 = var1 != var7;
                if(!var3) { _fun0002_ip = 91; continue _fun0002 }
 82:
                var7 = var7.isBoostOnly;
                var3 = !var7;
 91:
                var _closure3_slot1 = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = var8[var2];
                var10 = var7.bind(var6)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() {
                    var3 = _closure1_slot7;
                    var2 = var3.getReverseTrialEntitlement;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var9.bind(var10)(var7, var2);
                var7 = _closure1_slot1;
                var5 = 11;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var4 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure3_slot0;
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0003_ip = 56; continue _fun0003 }
 16:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 7;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.isPremium;
                        var3 = _closure3_slot0;
                        var1 = var4.bind(var5)(var3);
 56:
                        if(!var1) { _fun0003_ip = 66; continue _fun0003 }
 59:
                        var2 = _closure3_slot1;
                        var1 = !var2;
 66:
                        if(!var1) { _fun0003_ip = 148; continue _fun0003 }
 69:
                        var1 = _closure1_slot7;
                        var1 = var1.fetchedAllEntitlements;
                        if(var1) { _fun0003_ip = 95; continue _fun0003 }
 85:
                        var2 = _closure1_slot7;
                        var1 = var2.fetchingAllEntitlements;
 95:
                        if(var1) { _fun0003_ip = 148; continue _fun0003 }
 98:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.fetchUserEntitlements;
                        var1 = {};
                        var4 = _closure1_slot10;
                        var4 = var4.FRACTIONAL_REDEMPTION;
                        var1['entitlementType'] = var4;
                        var1 = var2.bind(var3)(var1);
 148:
                        var1 = undefined;
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var1 = null;
                if(var3) { _fun0002_ip = 174; continue _fun0002 }
 171:
                var1 = var2;
 174:
                return var1;
            }
        };
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['useIsInReverseTrial'] = var2;
    return var1;
})();