// app/modules/premium/native/MobileTrialUtils.tsx
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
    var4 = var4.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/MobileTrialUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useShouldShowPremiumTrialUserSettingsAvatarBadge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 1;
            var1 = var7[var1];
            var3 = undefined;
            var2 = var6.bind(var3)(var1);
            var1 = var2.usePremiumTrialOffer;
            var4 = var1.bind(var2)();
            var1 = 2;
            var1 = var7[var1];
            var5 = var6.bind(var3)(var1);
            var2 = var5.UNSAFE_useIsDismissibleContentDismissed;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE;
            var2 = var2.bind(var5)(var1);
            var1 = null;
            var5 = var1 == var4;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.expires_at;
case 2:
            var3 = var1 != var3;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = !var3;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = !var2;
case 6:
            return var1;
        }
    };
    var3['useShouldShowPremiumTrialUserSettingsAvatarBadge'] = var4;
    var2 = function usePremiumTrialOfferPremiumType() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.usePremiumTrialOffer;
            var3 = var2.bind(var3)();
            var4 = null;
            var6 = var4 == var3;
            var2 = undefined;
            if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var3.subscription_trial;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var2 = var3.sku_id;
case 8:
            var1 = _closure1_slot2;
            var1 = var1[var2];
            return var1;
        }
    };
    var3['usePremiumTrialOfferPremiumType'] = var2;
    return var1;
})();