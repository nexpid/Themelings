// app/modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.NoticeTypes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.SECOND;
    var4 = 10;
    var4 = var4 * var7;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/hooks/useShouldShowExpiringTrialOfferCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldShowExpiringTrialOfferCard() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var7 = undefined;
            var9 = var3.bind(var7)(var1);
            var6 = var9.useStateFromStores;
            var1 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getNoticeType;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var6.bind(var9)(var4, var1);
            var1 = 5;
            var1 = var5[var1];
            var3 = var3.bind(var7)(var1);
            var1 = var3.usePremiumTrialOffer;
            var3 = var1.bind(var3)();
            var4 = _closure1_slot1;
            var1 = 6;
            var1 = var5[var1];
            var6 = var4.bind(var7)(var1);
            var4 = null;
            var1 = var4 != var3;
            var5 = 0;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.expires_at;
            var1 = var4 != var1;
            var5 = 0;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = global;
            var11 = var1.Date;
            var10 = var11.parse;
            var1 = var3.expires_at;
            var5 = var10.bind(var11)(var1);
case 2:
            var1 = _closure1_slot6;
            var5 = var6.bind(var7)(var5, var1);
            var1 = var4 != var3;
            if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = var4 != var9;
case 5:
            if(!var1) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = _closure1_slot4;
            var6 = var6.PREMIUM_TIER_0_TRIAL_ENDING;
            var6 = var9 === var6;
            if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var10 = _closure1_slot4;
            var10 = var10.PREMIUM_TIER_2_TRIAL_ENDING;
            var6 = var9 === var10;
case 9:
            var1 = var6;
case 7:
            if(!var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = var3.subscription_trial;
            var10 = var4 == var6;
            var7 = undefined;
            if(var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = var6.sku_id;
case 13:
            if(!(var4 != var9)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = _closure1_slot4;
            var6 = var6.PREMIUM_TIER_2_TRIAL_ENDING;
            if(!(var6 !== var9)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var6 = _closure1_slot4;
            var6 = var6.PREMIUM_TIER_0_TRIAL_ENDING;
            if(!(var6 !== var9)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var6 = _closure1_slot5;
            var6 = var6.NONE;
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var9 = _closure1_slot5;
            var6 = var9.TIER_0;
            _fun0001_ip = 21; continue _fun0001;
case 17:
            var9 = _closure1_slot5;
            var6 = var9.TIER_2;
            _fun0001_ip = 21; continue _fun0001;
case 15:
            var8 = _closure1_slot5;
            var6 = var8.NONE;
case 21:
            var1 = var7 === var6;
case 11:
            if(!var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = var3.expires_at;
            var1 = var4 != var3;
case 22:
            if(!var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var4 = var3.bind(var4)(var5);
            var3 = var4.every;
            var2 = function(arg1) {
                var2 = 0;
                var1 = arg1;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 24:
            return var1;
        }
    };
    var3['useShouldShowExpiringTrialOfferCard'] = var2;
    return var1;
})();