// app/modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _launchGuildBoostFlowOrAlert() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = var2.source;
                    var14 = var2.analyticsLocations;
                    var13 = var2.guildId;
                    var12 = var2.onBack;
                    var10 = var2.onPaymentSuccess;
                    var7 = var2.onPaymentDismiss;
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    SaveGenerator(address=59);
case 4:
                    return var3;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot4;
                    var4 = var5.hasFetchedSubscriptions;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.fetchSubscriptions;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=122);
case 10:
                    return var4;
case 11:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 12:
                    return var4;
case 8:
                    var5 = _closure1_slot4;
                    var4 = var5.getPremiumTypeSubscription;
                    var6 = var4.bind(var5)();
                    _closure4_slot0 = var6;
                    var5 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 8;
                    var4 = var11[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getExternalManagementMessage;
                    var11 = var4.bind(var5)(var6);
                    var4 = null;
                    if(!(var4 == var11)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.launchPremiumPlanSelect;
                    var4 = {};
                    var16 = false;
                    var4['showCurrentPlan'] = var16;
                    var15 = function predicate(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.numPremiumGuild;
                            var5 = var1.premiumTier;
                            var1 = _closure1_slot8;
                            var4 = var1.TIER_2;
                            var1 = 0;
                            if(!(var5 === var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                            var1 = _closure1_slot7;
case 15:
                            var1 = var3 + var1;
                            var5 = _closure4_slot0;
                            var4 = null;
                            var4 = var4 != var5;
                            var2 = 0;
                            if(!var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 10;
                            var4 = var8[var5];
                            var7 = undefined;
                            var10 = var9.bind(var7)(var4);
                            var9 = var10.getNumPremiumGuildSubscriptions;
                            var4 = _closure4_slot0;
                            var4 = var4.additionalPlans;
                            var4 = var9.bind(var10)(var4);
                            var6 = _closure1_slot1;
                            var5 = var8[var5];
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.getNumIncludedPremiumGuildSubscriptionSlots;
                            var3 = _closure4_slot0;
                            var3 = var3.planId;
                            var3 = var5.bind(var6)(var3);
                            var2 = var4 + var3;
case 17:
                            var1 = var1 > var2;
                            return var1;
                        }
                    };
                    var4['predicate'] = var15;
                    var4['analyticsLocation'] = var8;
                    var4['analyticsLocations'] = var14;
                    var4['guildId'] = var13;
                    var4['onBack'] = var12;
                    var4['onPaymentSuccess'] = var10;
                    var4['onPaymentDismiss'] = var7;
                    var4 = var5.bind(var6)(var4);
                    _fun0001_ip = 19; continue _fun0001;
case 13:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var10 = var5.bind(var3)(var4);
                    var7 = var10.show;
                    var4 = {};
                    var15 = _closure1_slot0;
                    var12 = 5;
                    var13 = var6[var12];
                    var13 = var15.bind(var3)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var6[var12];
                    var12 = var15.bind(var3)(var12);
                    var12 = var12.t;
                    var12 = var12["8P7MX0"];
                    var12 = var13.bind(var14)(var12);
                    var4['title'] = var12;
                    var4['body'] = var11;
                    var4 = var7.bind(var10)(var4);
                    var4 = 6;
                    var4 = var6[var4];
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.track;
                    var4 = _closure1_slot5;
                    var5 = var4.OPEN_MODAL;
                    var4 = {};
                    var9 = _closure1_slot6;
                    var9 = var9.IOS_CANNOT_MANAGE_SUBSCRIPTION;
                    var4['type'] = var9;
                    var4['source'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
case 19:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var4 = var4.AnalyticsSections;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot7 = var7;
    var4 = var4.PremiumTypes;
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function launchGuildBoostFlowOrAlert() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['launchGuildBoostFlowOrAlert'] = var2;
    return var1;
})();