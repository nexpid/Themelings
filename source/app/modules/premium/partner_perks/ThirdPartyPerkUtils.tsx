// app/modules/premium/partner_perks/ThirdPartyPerkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var4 = function isUserEligibleForThirdPartyPerks(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = arg3;
            var6 = null;
            if(!(var6 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.statusAllowsPerks;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot2;
            var2 = var1.FP_SUB_PAUSED;
            var1 = arg2;
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var1 = false;
            return var1;
case 4:
            var2 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 2;
            var1 = var7[var1];
            var8 = undefined;
            var2 = var2.bind(var8)(var1);
            var1 = var2.getPremiumPlanItem;
            var2 = var1.bind(var2)(var4);
            var1 = var6 != var2;
            if(!var1) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = _closure1_slot5;
            var2 = var2.planId;
            var2 = var7[var2];
            var9 = var6 == var2;
            var7 = undefined;
            if(var9) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = var2.premiumType;
case 9:
            var2 = _closure1_slot3;
            var2 = var2.TIER_2;
            var1 = var7 === var2;
case 7:
            if(!var1) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var4.trialId;
            var2 = var6 != var2;
            if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = var6 == var3;
            var6 = undefined;
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = var3.partnerId;
case 15:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 1;
            var3 = var9[var3];
            var3 = var7.bind(var8)(var3);
            var3 = var3.YOUTUBE_PARTNER_ID;
            if(!(var6 !== var3)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var7 = _closure1_slot7;
            var6 = var7.has;
            var3 = var4.trialId;
            var3 = var6.bind(var7)(var3);
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var6 = _closure1_slot6;
            var5 = var6.has;
            var4 = var4.trialId;
            var4 = var5.bind(var6)(var4);
            var3 = !var4;
case 19:
            var2 = var3;
case 13:
            var1 = !var2;
case 11:
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var6 = global;
    var10 = var6.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var9 = var5.FractionalPremiumStates;
    var _closure1_slot2 = var9;
    var14 = var5.PREMIUM_TIER_2_AUTH3_TRIAL_ID;
    var13 = var5.PREMIUM_TIER_2_GOOGLE_PLAY_SIX_MONTH_TRIAL_ID;
    var15 = var5.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID;
    var17 = var5.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID;
    var16 = var5.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
    var20 = var5.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
    var11 = var5.PREMIUM_TIER_2_ONE_WEEK_REVERSE_TRIAL;
    var18 = var5.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
    var19 = var5.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var10 = var5.PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID;
    var9 = var5.PREMIUM_TIER_2_TWO_WEEK_REVERSE_TRIAL;
    var12 = var5.PremiumTypes;
    var _closure1_slot3 = var12;
    var12 = var5.PromotionFlags;
    var _closure1_slot4 = var12;
    var5 = var5.SubscriptionPlanInfo;
    var _closure1_slot5 = var5;
    var12 = var6.Set;
    var5 = new Array(9);
    var5[0] = var20;
    var5[1] = var19;
    var5[2] = var18;
    var5[3] = var17;
    var5[4] = var16;
    var5[5] = var15;
    var5[6] = var14;
    var5[7] = var13;
    var5[8] = var10;
    var10 = var12.prototype;
    var10 = Object.create(var10, {constructor: {value: var12}});
    var24 = var10;
    var23 = var5;
    var5 = new var24[var12](var23, var22);
    var5 = var5 instanceof Object ? var5 : var10;
    var _closure1_slot6 = var5;
    var10 = var6.Set;
    var6 = new Array(2);
    var6[0] = var11;
    var6[1] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var24 = var9;
    var23 = var6;
    var6 = new var24[var10](var23, var22);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot7 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/partner_perks/ThirdPartyPerkUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['THIRD_PARTY_PERKS_ELIGIBLE_TRIAL_IDS'] = var5;
    var3['isUserEligibleForThirdPartyPerks'] = var4;
    var2 = function isUserEligibleToClaimThirdPartyPromotion(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = arg3;
            var4 = _closure1_slot8;
            var2 = undefined;
            var1 = arg2;
            var4 = var4.bind(var2)(var6, var1, var5);
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = null;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var2 = var6.trialId;
case 22:
            var2 = var4 != var2;
            if(!var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var4 = var5.hasFlag;
            var3 = _closure1_slot4;
            var3 = var3.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS;
            var3 = var4.bind(var5)(var3);
            var2 = !var3;
case 24:
            var1 = !var2;
case 20:
            return var1;
        }
    };
    var3['isUserEligibleToClaimThirdPartyPromotion'] = var2;
    return var1;
})();