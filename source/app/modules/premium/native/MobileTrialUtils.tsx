// app/modules/premium/native/MobileTrialUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
 0:
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
            if(var5) { _fun0001_ip = 97; continue _fun0001 }
 91:
            var3 = var4.expires_at;
 97:
            var3 = var1 != var3;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 111; continue _fun0001 }
 108:
            var1 = !var3;
 111:
            if(!var1) { _fun0001_ip = 117; continue _fun0001 }
 114:
            var1 = !var2;
 117:
            return var1;
        }
    };
    var3['useShouldShowPremiumTrialUserSettingsAvatarBadge'] = var4;
    var2 = function usePremiumTrialOfferPremiumType() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(var6) { _fun0002_ip = 67; continue _fun0002 }
 46:
            var3 = var3.subscription_trial;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 67; continue _fun0002 }
 61:
            var2 = var3.sku_id;
 67:
            var1 = _closure1_slot2;
            var1 = var1[var2];
            return var1;
        }
    };
    var3['usePremiumTrialOfferPremiumType'] = var2;
    return var1;
})();