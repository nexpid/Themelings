// app/modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var4 = var4.AnalyticsSections;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot8 = var7;
    var4 = var4.PremiumTypes;
    var _closure1_slot9 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var _closure4_slot2 = var2;
                    var4 = _closure1_slot5;
                    var3 = var4.hasFetchedSubscriptions;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchSubscriptions;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=83);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 8:
                    return var3;
case 4:
                    var4 = _closure1_slot5;
                    var3 = var4.getPremiumTypeSubscription;
                    var5 = var3.bind(var4)();
                    _closure4_slot0 = var5;
                    var4 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var3 = 9;
                    var3 = var14[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getExternalManagementMessage;
                    var10 = var3.bind(var4)(var5);
                    var4 = _closure1_slot4;
                    var3 = var4.getCurrentUser;
                    var13 = var3.bind(var4)();
                    _closure4_slot1 = var13;
                    var12 = _closure1_slot1;
                    var3 = 10;
                    var3 = var14[var3];
                    var9 = var12.bind(var2)(var3);
                    var5 = var9.getCurrentConfig;
                    var4 = {};
                    var3 = '05efe4_1';
                    var4['location'] = var3;
                    var3 = {};
                    var11 = true;
                    var3['autoTrackExposure'] = var11;
                    var11 = 11;
                    var11 = var14[var11];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.isPremium;
                    var11 = var11.bind(var12)(var13);
                    var11 = !var11;
                    if(var11) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var12 = null;
                    var11 = var12 != var10;
case 9:
                    var3['disable'] = var11;
                    var3 = var5.bind(var9)(var4, var3);
                    var3 = var3.enabled;
                    _closure4_slot2 = var3;
                    var3 = null;
                    if(!(var3 == var10)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.launchPremiumPlanSelect;
                    var3 = {};
                    var9 = false;
                    var3['showCurrentPlan'] = var9;
                    var6 = function predicate(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var4 = arg1;
                            var3 = var4.numPremiumGuild;
                            var7 = var4.premiumTier;
                            var1 = _closure1_slot9;
                            var6 = var1.TIER_2;
                            var1 = 0;
                            if(!(var7 === var6)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                            var1 = _closure1_slot8;
case 13:
                            var1 = var3 + var1;
                            var3 = _closure4_slot0;
                            var9 = null;
                            var3 = var9 != var3;
                            var2 = 0;
                            if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var3 = 11;
                            var6 = var11[var3];
                            var10 = undefined;
                            var12 = var8.bind(var10)(var6);
                            var8 = var12.getNumPremiumGuildSubscriptions;
                            var6 = _closure4_slot0;
                            var6 = var6.additionalPlans;
                            var6 = var8.bind(var12)(var6);
                            var8 = _closure1_slot1;
                            var3 = var11[var3];
                            var10 = var8.bind(var10)(var3);
                            var8 = var10.getNumIncludedPremiumGuildSubscriptionSlots;
                            var3 = _closure4_slot0;
                            var3 = var3.planId;
                            var3 = var8.bind(var10)(var3);
                            var2 = var6 + var3;
case 15:
                            var10 = var1 > var2;
                            var2 = _closure4_slot2;
                            var1 = var10;
                            if(!var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                            var6 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var8 = 11;
                            var2 = var2[var8];
                            var3 = undefined;
                            var11 = var6.bind(var3)(var2);
                            var6 = var11.isPremium;
                            var2 = _closure4_slot1;
                            var2 = var6.bind(var11)(var2);
                            var1 = var10;
                            if(!var2) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                            var2 = var4.premiumTier;
                            var2 = var9 == var2;
                            if(var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                            var11 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var8];
                            var13 = var11.bind(var3)(var6);
                            var12 = var13.isPremiumExactly;
                            var11 = _closure4_slot1;
                            var6 = var4.premiumTier;
                            var6 = var12.bind(var13)(var11, var6);
                            if(!var6) { _fun0002_ip = 12; continue _fun0002 }
case 22:
                            var6 = !var10;
case 12:
                            var2 = var6;
case 20:
                            var2 = !var2;
                            if(!var2) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var8];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.isPremiumAtLeast;
                            var4 = var4.premiumTier;
                            var8 = _closure4_slot1;
                            var8 = var9 == var8;
                            var3 = undefined;
                            if(var8) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                            var7 = _closure4_slot1;
                            var3 = var7.premiumType;
case 25:
                            var2 = var5.bind(var6)(var4, var3);
case 23:
                            var1 = var2;
case 17:
                            return var1;
                        }
                    };
                    var3['predicate'] = var6;
                    var3['analyticsLocation'] = var7;
                    var6 = arg2;
                    var3['analyticsLocations'] = var6;
                    var6 = arg3;
                    var3['onBack'] = var6;
                    var3 = var4.bind(var5)(var3);
                    _fun0001_ip = 27; continue _fun0001;
case 11:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var9 = var4.bind(var2)(var3);
                    var6 = var9.show;
                    var3 = {};
                    var14 = _closure1_slot0;
                    var11 = 6;
                    var12 = var5[var11];
                    var12 = var14.bind(var2)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var5[var11];
                    var11 = var14.bind(var2)(var11);
                    var11 = var11.t;
                    var11 = var11.8P7MX1;
                    var11 = var12.bind(var13)(var11);
                    var3['title'] = var11;
                    var3['body'] = var10;
                    var3 = var6.bind(var9)(var3);
                    var3 = 7;
                    var3 = var5[var3];
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot6;
                    var4 = var3.OPEN_MODAL;
                    var3 = {};
                    var8 = _closure1_slot7;
                    var8 = var8.IOS_CANNOT_MANAGE_SUBSCRIPTION;
                    var3['type'] = var8;
                    var3['source'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
case 27:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['launchGuildBoostFlowOrAlert'] = var2;
    return var1;
})();