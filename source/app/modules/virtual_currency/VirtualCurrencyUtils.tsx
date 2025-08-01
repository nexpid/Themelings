// app/modules/virtual_currency/VirtualCurrencyUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var4.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DismissibleContentGroupName;
    var _closure1_slot4 = var7;
    var4 = var4.ContentDismissActionType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/VirtualCurrencyUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot3;
            var3 = var1.FRACTIONAL_PREMIUM;
            var1 = arg1;
            if(!(var1 !== var3)) { _fun0001_ip = 26; continue _fun0001 }
 20:
            var1 = _closure1_slot2;
            _fun0001_ip = 30; continue _fun0001;
 26:
            var1 = _closure1_slot6;
 30:
            return var1;
        }
    };
    var3['getApplicationIdForOrbSKU'] = var4;
    var2 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var4 = 4;
            var3 = var2[var4];
            var1 = undefined;
            var5 = var7.bind(var1)(var3);
            var3 = var5.UNSAFE_isDismissibleContentDismissed;
            var8 = 5;
            var2 = var2[var8];
            var2 = var7.bind(var1)(var2);
            var2 = var2.DismissibleContent;
            var2 = var2.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL;
            var2 = var3.bind(var5)(var2);
            if(var2) { _fun0002_ip = 280; continue _fun0002 }
 66:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var5 = var2[var4];
            var11 = var3.bind(var1)(var5);
            var10 = var11.UNSAFE_markDismissibleContentAsDismissed;
            var5 = var2[var8];
            var5 = var3.bind(var1)(var5);
            var5 = var5.DismissibleContent;
            var9 = var5.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL;
            var5 = {};
            var7 = _closure1_slot5;
            var12 = var7.INDIRECT_ACTION;
            var5['dismissAction'] = var12;
            var6 = _closure1_slot4;
            var12 = var6.VIRTUAL_CURRENCY_ONBOARDING;
            var5['groupName'] = var12;
            var5 = var10.bind(var11)(var9, var5);
            var5 = var2[var4];
            var11 = var3.bind(var1)(var5);
            var10 = var11.UNSAFE_markDismissibleContentAsDismissed;
            var5 = var2[var8];
            var5 = var3.bind(var1)(var5);
            var5 = var5.DismissibleContent;
            var9 = var5.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK;
            var5 = {};
            var12 = var7.INDIRECT_ACTION;
            var5['dismissAction'] = var12;
            var12 = var6.VIRTUAL_CURRENCY_ONBOARDING;
            var5['groupName'] = var12;
            var5 = var10.bind(var11)(var9, var5);
            var4 = var2[var4];
            var5 = var3.bind(var1)(var4);
            var4 = var5.UNSAFE_markDismissibleContentAsDismissed;
            var2 = var2[var8];
            var2 = var3.bind(var1)(var2);
            var2 = var2.DismissibleContent;
            var3 = var2.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK;
            var2 = {};
            var7 = var7.INDIRECT_ACTION;
            var2['dismissAction'] = var7;
            var6 = var6.VIRTUAL_CURRENCY_ONBOARDING;
            var2['groupName'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 280:
            return var1;
        }
    };
    var3['dismissOrbsOnboardingExperience'] = var2;
    return var1;
})();