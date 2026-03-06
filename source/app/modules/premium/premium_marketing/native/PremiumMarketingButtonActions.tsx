// app/modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx
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
    var4 = var4.PremiumTypes;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsSections;
    var _closure1_slot4 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot5 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot6 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_marketing/native/PremiumMarketingButtonActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getButtonActionHandler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.buttonAction;
            var3 = var2.analyticsLocations;
            var _closure2_slot0 = var3;
            var2 = var2.analyticsPage;
            var _closure2_slot1 = var2;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 2;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var3 = var3.ButtonAction;
            var3 = var3.OPEN_TIER_1_PAYMENT_MODAL;
            if(!(var3 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.ButtonAction;
            var3 = var3.OPEN_TIER_2_PAYMENT_MODAL;
            if(!(var3 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.ButtonAction;
            var3 = var3.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER;
            if(!(var3 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.ButtonAction;
            var3 = var3.OPEN_PLAN_SELECTION_MODAL;
            if(!(var3 !== var6)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ButtonAction;
            var2 = var2.OPEN_MARKETING_PAGE;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openUserSettings;
                var1 = {};
                var4 = _closure1_slot7;
                var4 = var4.PREMIUM;
                var1['screen'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var2;
case 7:
            var2 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = {};
                var7 = _closure2_slot1;
                var5['page'] = var7;
                var7 = _closure1_slot4;
                var7 = var7.FOOTER;
                var5['section'] = var7;
                var7 = _closure1_slot5;
                var7 = var7.BUTTON_CTA;
                var5['object'] = var7;
                var6 = _closure1_slot6;
                var6 = var6.BUY;
                var5['objectType'] = var6;
                var1['analyticsLocation'] = var5;
                var4 = _closure2_slot0;
                var1['analyticsLocations'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var2;
case 4:
            var2 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = {};
                var7 = _closure2_slot1;
                var6['page'] = var7;
                var7 = _closure1_slot4;
                var7 = var7.FOOTER;
                var6['section'] = var7;
                var7 = _closure1_slot5;
                var7 = var7.BUTTON_CTA;
                var6['object'] = var7;
                var7 = _closure1_slot6;
                var7 = var7.TIER_2;
                var6['objectType'] = var7;
                var1['analyticsLocation'] = var6;
                var5 = _closure2_slot0;
                var1['analyticsLocations'] = var5;
                var4 = _closure1_slot3;
                var4 = var4.TIER_2;
                var1['premiumType'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var2;
case 2:
            var1 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = {};
                var7 = _closure2_slot1;
                var6['page'] = var7;
                var7 = _closure1_slot4;
                var7 = var7.FOOTER;
                var6['section'] = var7;
                var7 = _closure1_slot5;
                var7 = var7.BUTTON_CTA;
                var6['object'] = var7;
                var7 = _closure1_slot6;
                var7 = var7.TIER_1;
                var6['objectType'] = var7;
                var1['analyticsLocation'] = var6;
                var5 = _closure2_slot0;
                var1['analyticsLocations'] = var5;
                var4 = _closure1_slot3;
                var4 = var4.TIER_1;
                var1['premiumType'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        }
    };
    var3['getButtonActionHandler'] = var2;
    return var1;
})();