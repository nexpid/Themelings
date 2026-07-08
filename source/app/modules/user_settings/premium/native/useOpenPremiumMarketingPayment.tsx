// app/modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.AnalyticsPages;
    var8 = var4.AnalyticsSections;
    var7 = var4.AnalyticsObjectTypes;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.SubscriptionIntervalTypes;
    var _closure1_slot4 = var10;
    var4 = var4.PremiumTypes;
    var _closure1_slot5 = var4;
    var4 = {};
    var9 = var9.USER_SETTINGS;
    var4['page'] = var9;
    var8 = var8.SETTINGS_PREMIUM;
    var4['section'] = var8;
    var7 = var7.BUY;
    var4['objectType'] = var7;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/premium/native/useOpenPremiumMarketingPayment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useOpenPremiumMarketingPayment(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var10 = undefined;
            var3 = var3.bind(var10)(var1);
            var1 = arg1;
            var1 = var3.bind(var10)(var1);
            var3 = var1.analyticsLocations;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var1 = 4;
            var1 = var6[var1];
            var7 = var5.bind(var10)(var1);
            var1 = var7.usePremiumTrialOffer;
            var8 = var1.bind(var7)();
            var _closure2_slot1 = var8;
            var1 = 5;
            var1 = var6[var1];
            var5 = var5.bind(var10)(var1);
            var1 = var5.usePremiumTrialOfferPremiumType;
            var6 = var1.bind(var5)();
            var _closure2_slot2 = var6;
            var1 = {};
            var5 = _closure1_slot3;
            var7 = var5.useCallback;
            var4 = new Array(2);
            var4[0] = var3;
            var4[1] = var6;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var4 = _closure1_slot6;
                    var2['analyticsLocation'] = var4;
                    var5 = _closure2_slot0;
                    var2['analyticsLocations'] = var5;
                    var5 = _closure2_slot2;
                    var7 = null;
                    var8 = var7 == var5;
                    var5 = undefined;
                    if(!var8) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.additionalPlans;
                            var6 = var2.isDeprecated;
                            var5 = var2.numPremiumGuild;
                            var4 = var2.interval;
                            var3 = var2.premiumTier;
                            var1 = var1.length;
                            var2 = 0;
                            var1 = var2 === var1;
                            if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                            var1 = !var6;
case 4:
                            if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var1 = var2 === var5;
case 6:
                            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var2 = _closure1_slot4;
                            var2 = var2.MONTH;
                            var1 = var4 === var2;
case 8:
                            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var2 = _closure1_slot5;
                            var2 = var2.TIER_1;
                            var1 = var3 !== var2;
case 10:
                            return var1;
                        }
                    };
case 2:
                    var2['predicate'] = var5;
                    var5 = _closure2_slot2;
                    var7 = var7 == var5;
                    var5 = undefined;
                    if(!var7) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.premiumTier;
                        var1 = _closure1_slot5;
                        var1 = var1.TIER_2;
                        var1 = var2 === var1;
                        return var1;
                    };
case 10:
                    var2['initialSelectedCriteria'] = var5;
                    var4 = _closure2_slot2;
                    var2['premiumType'] = var4;
                    var4 = false;
                    var2['showFormTitle'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var3 = var7.bind(var5)(var3, var4);
            var1['openPayment'] = var3;
            var4 = var5.useMemo;
            var9 = null;
            var3 = var9 == var8;
            var7 = undefined;
            if(var3) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var8.subscription_trial;
            var11 = var9 == var3;
            var7 = undefined;
            if(var11) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var7 = var3.interval;
case 13:
            var3 = new Array(3);
            var3[0] = var7;
            var11 = var9 == var8;
            var7 = undefined;
            if(var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var8.subscription_trial;
            var9 = var9 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var7 = var8.interval_count;
case 16:
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.formatTrialCtaIntervalDuration;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var8 = var6 == var4;
                    var4 = undefined;
                    if(var8) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var8 = _closure2_slot1;
                    var8 = var8.subscription_trial;
                    var9 = var6 == var8;
                    var4 = undefined;
                    if(var9) { _fun0004_ip = 21; continue _fun0004 }
case 23:
                    var4 = var8.interval;
case 21:
                    var1['intervalType'] = var4;
                    var4 = _closure2_slot1;
                    var8 = var6 == var4;
                    var4 = undefined;
                    if(var8) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var5 = _closure2_slot1;
                    var5 = var5.subscription_trial;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0004_ip = 24; continue _fun0004 }
case 26:
                    var4 = var5.interval_count;
case 24:
                    var1['intervalCount'] = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun0004_ip = 27; continue _fun0004;
case 19:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 7;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2["8x0jKT"];
                    var1 = var3.bind(var4)(var2);
case 27:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var1['buttonText'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();