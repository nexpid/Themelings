// app/modules/premium/native/launchPremiumPlanSelect.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/launchPremiumPlanSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function launchPremiumPlanSelect(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = var4.predicate;
            var _closure2_slot0 = var1;
            var6 = var4.navigation;
            var13 = var4.showCurrentPlan;
            var1 = undefined;
            if(!(var13 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = true;
case 2:
            var12 = var4.isBoostPurchaseFlow;
            if(!(var12 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = false;
case 4:
            var15 = var4.analyticsLocation;
            var14 = var4.analyticsLocations;
            var11 = var4.planId;
            var10 = var4.applicationId;
            var9 = var4.guildId;
            var3 = var4.onBack;
            var8 = var4.onPaymentSuccess;
            var7 = var4.onPaymentDismiss;
            var16 = function wrappedPredicate(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = arg1;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 1;
                    var1 = var3[var1];
                    var5 = undefined;
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.shouldAlwaysExcludeFromPlanSelect;
                    var1 = var1.bind(var2)(var6);
                    var1 = !var1;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 5:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var7 = var2 == var3;
                    var3 = undefined;
                    if(var7) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var4 = _closure2_slot0;
                    var3 = var4.bind(var5)(var6);
case 7:
                    var2 = var2 == var3;
                    if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var2 = var3;
case 9:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var4 = _closure1_slot3;
            var5 = var4.PREMIUM_PLAN_SELECT;
            var4 = null;
            if(!(var4 == var6)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var17 = _closure1_slot1;
            var21 = _closure1_slot2;
            var4 = 2;
            var4 = var21[var4];
            var19 = var17.bind(var1)(var4);
            var18 = var19.pushLazy;
            var20 = _closure1_slot0;
            var4 = 4;
            var4 = var21[var4];
            var22 = var20.bind(var1)(var4);
            var4 = 3;
            var17 = var21[var4];
            var4 = var21.paths;
            var17 = var22.bind(var1)(var17, var4);
            var4 = {};
            var4['initialRoute'] = var5;
            var4['analyticsLocation'] = var15;
            var4['analyticsLocations'] = var14;
            var4['predicate'] = var16;
            var4['showCurrentPlan'] = var13;
            var4['isBoostPurchaseFlow'] = var12;
            var4['planId'] = var11;
            var4['applicationId'] = var10;
            var4['guildId'] = var9;
            var4['onBack'] = var3;
            var4['onPaymentSuccess'] = var8;
            var4['onPaymentDismiss'] = var7;
            var3 = 5;
            var3 = var21[var3];
            var3 = var20.bind(var1)(var3);
            var3 = var3.PREMIUM_KEY;
            var3 = var18.bind(var19)(var17, var4, var3);
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var4 = var6.push;
            var3 = {};
            var3['predicate'] = var16;
            var3['analyticsLocation'] = var15;
            var3['analyticsLocations'] = var14;
            var3['showCurrentPlan'] = var13;
            var3['isBoostPurchaseFlow'] = var12;
            var3['planId'] = var11;
            var3['applicationId'] = var10;
            var3['guildId'] = var9;
            var3['onPaymentSuccess'] = var8;
            var3['onPaymentDismiss'] = var7;
            var3 = var4.bind(var6)(var5, var3);
case 13:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trackUserSettingsPaneViewed;
            var2 = {};
            var2['destinationPane'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['launchPremiumPlanSelect'] = var2;
    return var1;
})();