// app/modules/premium/PremiumBogoPromotionUtilsCommon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function isUserEligibleBasedOnCurrentOrPreviousSubs(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.experimentEnabled;
            var5 = var2.premiumSubscription;
            var8 = var2.mostRecentSubscription;
            var7 = var2.previousPremiumSubscription;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
            return var1;
case 2:
            var1 = null;
            if(!(var1 != var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var8.status;
            var3 = _closure1_slot12;
            var3 = var3.ENDED;
            if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = var8.endedAt;
            var6 = var8.hasPremiumAtLeast;
            var3 = _closure1_slot10;
            var3 = var3.TIER_2;
            var3 = var6.bind(var8)(var3);
            if(!(var1 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 8:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var6.bind(var3)(var2);
            var8 = var2.bind(var3)();
            var6 = var8.subtract;
            var3 = 10;
            var2 = 'days';
            var3 = var6.bind(var8)(var3, var2);
            var2 = var3.isBefore;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 4:
            if(!(var1 != var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var7.status;
            var3 = _closure1_slot12;
            var3 = var3.ENDED;
            if(!(var4 === var3)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var4 = var7.endedAt;
            var6 = var7.hasPremiumAtLeast;
            var3 = _closure1_slot10;
            var3 = var3.TIER_2;
            var3 = var6.bind(var7)(var3);
            if(!(var1 != var4)) { _fun0001_ip = 10; continue _fun0001 }
case 13:
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 14:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var6.bind(var3)(var2);
            var7 = var2.bind(var3)();
            var6 = var7.subtract;
            var3 = 10;
            var2 = 'days';
            var3 = var6.bind(var7)(var3, var2);
            var2 = var3.isBefore;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0001_ip = 15; continue _fun0001 }
case 10:
            if(!(var1 != var5)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var5.hasPremiumAtLeast;
            var2 = _closure1_slot10;
            var2 = var2.TIER_2;
            var3 = var3.bind(var5)(var2);
            var6 = _closure1_slot4;
            var2 = var6.getCurrentUser;
            var8 = var2.bind(var6)();
            var1 = var1 == var5;
            if(var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var5.hasActiveTrial;
            var1 = !var2;
case 18:
            var2 = !var1;
            if(var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 9;
            var6 = var6[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var6);
            var6 = var7.isPremiumExactly;
            var1 = _closure1_slot10;
            var1 = var1.TIER_0;
            var2 = var6.bind(var7)(var8, var1);
case 20:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var6 = var6[var1];
            var1 = undefined;
            var6 = var7.bind(var1)(var6);
            var1 = var6.isAndroid;
            var1 = var1.bind(var6)();
            if(!var1) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = var5.paymentGateway;
            var4 = _closure1_slot11;
            var4 = var4.GOOGLE;
            var1 = var5 !== var4;
case 22:
            if(var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            if(var2) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            if(var1) { _fun0001_ip = 24; continue _fun0001 }
case 16:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.isMobile;
            var1 = !var1;
            if(var1) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var3 = _closure1_slot7;
            var2 = var3.isFractionalPremiumActive;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 27:
            return var1;
case 24:
            var1 = false;
            return var1;
case 15:
            var1 = false;
            return var1;
case 9:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot13 = var5;
    var4 = function isEligibleForBOGOPromotion() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var4;
    var1 = function _isEligibleForBOGOPromotion() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var8 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var6 = undefined;
                    if(!(var8 === var6)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var8 = true;
case 31:
                    SaveGenerator(address=25);
case 33:
                    return var6;
case 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 35; continue _fun0002 }
case 2:
                    var4 = _closure1_slot4;
                    var3 = var4.getCurrentUser;
                    var9 = var3.bind(var4)();
                    var5 = null;
                    var3 = var5 != var9;
                    if(!var3) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var4 = var9.isClaimed;
                    var3 = var4.bind(var9)();
case 36:
                    var11 = !var3;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 12;
                    var3 = var13[var3];
                    var4 = var12.bind(var6)(var3);
                    var3 = var4.getIsPaymentsBlocked;
                    var10 = var3.bind(var4)();
                    var3 = 14;
                    var3 = var13[var3];
                    var9 = var12.bind(var6)(var3);
                    var4 = var9.getBogoPromotionGateEnabled;
                    var3 = 'bogo eligibility async check';
                    var9 = var4.bind(var9)(var3);
                    var3 = 19;
                    var3 = var13[var3];
                    var14 = var12.bind(var6)(var3);
                    var4 = var14.getBogoMarketingMaterialsEnabled;
                    var3 = 'bogo marketing eligibility async check';
                    var4 = var4.bind(var14)(var3);
                    var3 = 11;
                    var3 = var13[var3];
                    var3 = var12.bind(var6)(var3);
                    var3 = var3.isMobile;
                    var3 = !var3;
                    if(var3) { _fun0002_ip = 38; continue _fun0002 }
case 12:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 10;
                    var12 = var14[var12];
                    var13 = var13.bind(var6)(var12);
                    var12 = var13.isAndroid;
                    var3 = var12.bind(var13)();
case 38:
                    if(var11) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    if(var10) { _fun0002_ip = 39; continue _fun0002 }
case 41:
                    if(!var9) { _fun0002_ip = 39; continue _fun0002 }
case 42:
                    if(!var8) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                    if(!var4) { _fun0002_ip = 39; continue _fun0002 }
case 43:
                    if(!var3) { _fun0002_ip = 39; continue _fun0002 }
case 45:
                    var4 = _closure1_slot6;
                    var3 = var4.hasFetchedOffer;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0002_ip = 46; continue _fun0002 }
case 47:
                    var4 = _closure1_slot6;
                    var3 = var4.hasAnyUnexpiredOffer;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                    var4 = _closure1_slot6;
                    var3 = var4.hasAnyUnexpiredDiscountOffer;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0002_ip = 48; continue _fun0002 }
case 46:
                    var4 = _closure1_slot5;
                    var3 = var4.hasFetchedMostRecentPremiumTypeSubscription;
                    var3 = var3.bind(var4)();
                    var3 = !var3;
                    var8 = undefined;
                    if(!var3) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var10 = _closure1_slot4;
                    var4 = var10.getCurrentUser;
                    var4 = var4.bind(var10)();
                    var3 = var5 != var4;
                    var8 = var4;
case 50:
                    if(!var3) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                    var5 = var8.hasPurchasedFlag;
                    var4 = _closure1_slot9;
                    var4 = var4.PREMIUM_TIER_2;
                    var3 = var5.bind(var8)(var4);
case 52:
                    if(!var3) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 20;
                    var3 = var5[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.fetchMostRecentSubscription;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=411);
case 56:
                    return var3;
case 57:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 58; continue _fun0002 }
case 54:
                    var5 = _closure1_slot5;
                    var4 = var5.hasFetchedSubscriptions;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0002_ip = 59; continue _fun0002 }
case 60:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 20;
                    var4 = var8[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.fetchSubscriptions;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=471);
case 61:
                    return var4;
case 62:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!var5) { _fun0002_ip = 59; continue _fun0002 }
case 63:
                    return var4;
case 59:
                    var5 = _closure1_slot5;
                    var4 = var5.getMostRecentPremiumTypeSubscription;
                    var8 = var4.bind(var5)();
                    var5 = _closure1_slot13;
                    var4 = {};
                    var4['experimentEnabled'] = var9;
                    var10 = _closure1_slot5;
                    var9 = var10.getPremiumTypeSubscription;
                    var9 = var9.bind(var10)();
                    var4['premiumSubscription'] = var9;
                    var4['mostRecentSubscription'] = var8;
                    var8 = _closure1_slot5;
                    var7 = var8.getPreviousPremiumTypeSubscription;
                    var7 = var7.bind(var8)();
                    var4['previousPremiumSubscription'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var4;
case 58:
                    return var3;
case 48:
                    var3 = false;
                    return var3;
case 39:
                    var3 = false;
                    return var3;
case 35:
                    return var2;
case 29:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _maybeFetchActiveBogoPromotion() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                    var5 = _closure1_slot14;
                    var3 = undefined;
                    var2 = false;
                    var2 = var5.bind(var3)(var2);
                    SaveGenerator(address=30);
case 66:
                    return var2;
case 3:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                    if(!var2) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                    var5 = _closure1_slot8;
                    var6 = var5.bogoPromotion;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0003_ip = 71; continue _fun0003 }
case 72:
                    var5 = global;
                    var8 = var5.Date;
                    var9 = var6.endDate;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var10 = var7;
                    var6 = new var10[var8](var9, var8);
                    var7 = var6 instanceof Object ? var6 : var7;
                    var6 = var7.valueOf;
                    var6 = var6.bind(var7)();
                    var7 = var5.Date;
                    var5 = var7.now;
                    var5 = var5.bind(var7)();
                    if(!(!(var6 >= var5))) { _fun0003_ip = 73; continue _fun0003 }
case 71:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 21;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.fetchActiveBogoPromotion;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=154);
case 74:
                    return var4;
case 75:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 76; continue _fun0003 }
case 69:
                    return var3;
case 76:
                    return var4;
case 73:
                    return var3;
case 67:
                    return var2;
case 64:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.PurchasedFlags;
    var _closure1_slot9 = var9;
    var6 = var6.PremiumTypes;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.PaymentGateways;
    var _closure1_slot11 = var9;
    var6 = var6.SubscriptionStatusTypes;
    var _closure1_slot12 = var6;
    var6 = 22;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/PremiumBogoPromotionUtilsCommon.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isUserEligibleBasedOnCurrentOrPreviousSubs'] = var5;
    var5 = function useIsEligibleForBogoPromotion() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var10 = arguments[0];
            var12 = undefined;
            if(!(var10 === var12)) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var10 = true;
case 77:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var5 = var3.bind(var12)(var2);
            var2 = var5.useIsPaymentsBlocked;
            var6 = var2.bind(var5)();
            var2 = 13;
            var2 = var4[var2];
            var5 = var3.bind(var12)(var2);
            var2 = var5.useBogoPromotion;
            var2 = var2.bind(var5)();
            var7 = var2.promotion;
            var2 = 14;
            var2 = var4[var2];
            var8 = var3.bind(var12)(var2);
            var5 = var8.useBogoPromotionGateEnabled;
            var2 = 'bogo eligibility hook';
            var16 = var5.bind(var8)(var2);
            var2 = 15;
            var2 = var4[var2];
            var9 = var3.bind(var12)(var2);
            var8 = var9.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var3 = var4.getMostRecentPremiumTypeSubscription;
                var3 = var3.bind(var4)();
                var1['mostRecentSubscription'] = var3;
                var4 = _closure1_slot5;
                var3 = var4.getPremiumTypeSubscription;
                var3 = var3.bind(var4)();
                var1['premiumSubscription'] = var3;
                var3 = _closure1_slot5;
                var2 = var3.getPreviousPremiumTypeSubscription;
                var2 = var2.bind(var3)();
                var1['previousPremiumSubscription'] = var2;
                return var1;
            };
            var2 = var8.bind(var9)(var5, var2);
            var14 = var2.mostRecentSubscription;
            var15 = var2.premiumSubscription;
            var13 = var2.previousPremiumSubscription;
            var2 = 16;
            var2 = var4[var2];
            var5 = var3.bind(var12)(var2);
            var2 = var5.usePremiumTrialOffer;
            var8 = var2.bind(var5)();
            var2 = 17;
            var2 = var4[var2];
            var3 = var3.bind(var12)(var2);
            var2 = var3.usePremiumDiscountOffer;
            var5 = var2.bind(var3)();
            var2 = global;
            var11 = var2.Date;
            var4 = null;
            var3 = var4 == var7;
            var9 = undefined;
            if(var3) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            var9 = var7.endDate;
case 79:
            var17 = var4 != var9;
            var3 = 0;
            if(!var17) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var3 = var9;
case 81:
            var9 = var11.prototype;
            var9 = Object.create(var9, {constructor: {value: var11}});
            var22 = var9;
            var21 = var3;
            var3 = new var22[var11](var21, var20);
            var9 = var3 instanceof Object ? var3 : var9;
            var3 = var9.valueOf;
            var18 = var3.bind(var9)();
            var3 = var2.Date;
            var2 = var3.now;
            var17 = var2.bind(var3)();
            var11 = var17 > var18;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 18;
            var2 = var9[var2];
            var3 = var3.bind(var12)(var2);
            var2 = {};
            var9 = -1;
            if(var11) { _fun0004_ip = 19; continue _fun0004 }
case 83:
            var9 = var18 - var17;
case 19:
            var2['delay'] = var9;
            var2 = var3.bind(var12)(var2);
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 11;
            var2 = var9[var2];
            var2 = var3.bind(var12)(var2);
            var2 = var2.isMobile;
            var3 = !var2;
            if(var3) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 10;
            var2 = var17[var2];
            var9 = var9.bind(var12)(var2);
            var2 = var9.isAndroid;
            var3 = var2.bind(var9)();
case 84:
            var9 = _closure1_slot13;
            var2 = {};
            var2['experimentEnabled'] = var16;
            var2['premiumSubscription'] = var15;
            var2['mostRecentSubscription'] = var14;
            var2['previousPremiumSubscription'] = var13;
            var9 = var9.bind(var12)(var2);
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 19;
            var1 = var13[var1];
            var12 = var2.bind(var12)(var1);
            var2 = var12.useBogoMarketingMaterialsEnabled;
            var1 = 'bogo marketing eligibility hook';
            var2 = var2.bind(var12)(var1);
            var1 = !var11;
            if(var11) { _fun0004_ip = 86; continue _fun0004 }
case 63:
            if(var10) { _fun0004_ip = 87; continue _fun0004 }
case 59:
            if(!var3) { _fun0004_ip = 88; continue _fun0004 }
case 89:
            var3 = var9;
case 88:
            if(!var3) { _fun0004_ip = 90; continue _fun0004 }
case 91:
            var3 = var4 == var8;
case 90:
            if(!var3) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            var3 = var4 != var7;
case 92:
            if(!var3) { _fun0004_ip = 94; continue _fun0004 }
case 95:
            var3 = !var6;
case 94:
            if(!var3) { _fun0004_ip = 96; continue _fun0004 }
case 97:
            var3 = var4 == var5;
case 96:
            var2 = var3;
case 87:
            var1 = var2;
case 86:
            return var1;
        }
    };
    var3['useIsEligibleForBogoPromotion'] = var5;
    var3['isEligibleForBOGOPromotion'] = var4;
    var2 = function maybeFetchActiveBogoPromotion() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybeFetchActiveBogoPromotion'] = var2;
    return var1;
})();