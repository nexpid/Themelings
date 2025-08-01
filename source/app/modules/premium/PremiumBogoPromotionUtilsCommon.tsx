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
 0:
            var2 = arg1;
            var1 = var2.experimentEnabled;
            var5 = var2.premiumSubscription;
            var8 = var2.mostRecentSubscription;
            var7 = var2.previousPremiumSubscription;
            if(var1) { _fun0001_ip = 34; continue _fun0001 }
 30:
            var1 = false;
            return var1;
 34:
            var1 = null;
            if(!(var1 != var8)) { _fun0001_ip = 158; continue _fun0001 }
 40:
            var4 = var8.status;
            var3 = _closure1_slot12;
            var3 = var3.ENDED;
            if(!(var4 === var3)) { _fun0001_ip = 158; continue _fun0001 }
 62:
            var4 = var8.endedAt;
            var6 = var8.hasPremiumAtLeast;
            var3 = _closure1_slot10;
            var3 = var3.TIER_2;
            var3 = var6.bind(var8)(var3);
            if(!(var1 != var4)) { _fun0001_ip = 158; continue _fun0001 }
 93:
            if(!var3) { _fun0001_ip = 158; continue _fun0001 }
 96:
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
            if(var2) { _fun0001_ip = 517; continue _fun0001 }
 158:
            if(!(var1 != var7)) { _fun0001_ip = 280; continue _fun0001 }
 162:
            var4 = var7.status;
            var3 = _closure1_slot12;
            var3 = var3.ENDED;
            if(!(var4 === var3)) { _fun0001_ip = 280; continue _fun0001 }
 184:
            var4 = var7.endedAt;
            var6 = var7.hasPremiumAtLeast;
            var3 = _closure1_slot10;
            var3 = var3.TIER_2;
            var3 = var6.bind(var7)(var3);
            if(!(var1 != var4)) { _fun0001_ip = 280; continue _fun0001 }
 215:
            if(!var3) { _fun0001_ip = 280; continue _fun0001 }
 218:
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
            if(var2) { _fun0001_ip = 513; continue _fun0001 }
 280:
            if(!(var1 != var5)) { _fun0001_ip = 453; continue _fun0001 }
 287:
            var3 = var5.hasPremiumAtLeast;
            var2 = _closure1_slot10;
            var2 = var2.TIER_2;
            var3 = var3.bind(var5)(var2);
            var6 = _closure1_slot4;
            var2 = var6.getCurrentUser;
            var8 = var2.bind(var6)();
            var1 = var1 == var5;
            if(var1) { _fun0001_ip = 340; continue _fun0001 }
 331:
            var2 = var5.hasActiveTrial;
            var1 = !var2;
 340:
            var2 = !var1;
            if(var1) { _fun0001_ip = 390; continue _fun0001 }
 346:
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
 390:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var6 = var6[var1];
            var1 = undefined;
            var6 = var7.bind(var1)(var6);
            var1 = var6.isAndroid;
            var1 = var1.bind(var6)();
            if(!var1) { _fun0001_ip = 444; continue _fun0001 }
 424:
            var5 = var5.paymentGateway;
            var4 = _closure1_slot11;
            var4 = var4.GOOGLE;
            var1 = var5 !== var4;
 444:
            if(var3) { _fun0001_ip = 509; continue _fun0001 }
 447:
            if(var2) { _fun0001_ip = 509; continue _fun0001 }
 450:
            if(var1) { _fun0001_ip = 509; continue _fun0001 }
 453:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.isMobile;
            var1 = !var1;
            if(var1) { _fun0001_ip = 507; continue _fun0001 }
 490:
            var3 = _closure1_slot7;
            var2 = var3.isFractionalPremiumActive;
            var2 = var2.bind(var3)();
            var1 = !var2;
 507:
            return var1;
 509:
            var1 = false;
            return var1;
 513:
            var1 = false;
            return var1;
 517:
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
 0:
                    StartGenerator();
                    var9 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 618; continue _fun0002 }
 13:
                    var7 = undefined;
                    if(!(var9 === var7)) { _fun0002_ip = 21; continue _fun0002 }
 19:
                    var9 = true;
 21:
                    SaveGenerator(address=25);
 23:
                    return var7;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 615; continue _fun0002 }
 34:
                    var4 = _closure1_slot4;
                    var3 = var4.getCurrentUser;
                    var5 = var3.bind(var4)();
                    var6 = null;
                    var3 = var6 != var5;
                    if(!var3) { _fun0002_ip = 69; continue _fun0002 }
 59:
                    var4 = var5.isClaimed;
                    var3 = var4.bind(var5)();
 69:
                    var12 = !var3;
                    var5 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var3 = 12;
                    var3 = var15[var3];
                    var13 = var5.bind(var7)(var3);
                    var11 = var13.getCurrentConfig;
                    var10 = {};
                    var3 = '153d31_3';
                    var10['location'] = var3;
                    var4 = {};
                    var3 = false;
                    var4['autoTrackExposure'] = var3;
                    var4 = var11.bind(var13)(var10, var4);
                    var11 = var4.paymentsBlocked;
                    var14 = _closure1_slot0;
                    var4 = 14;
                    var4 = var15[var4];
                    var10 = var14.bind(var7)(var4);
                    var4 = var10.isBogoPromotionExperimentEnabled;
                    var4 = var4.bind(var10)();
                    var10 = var4.enabled;
                    var4 = 15;
                    var4 = var15[var4];
                    var13 = var14.bind(var7)(var4);
                    var4 = var13.isBogoMobilePromotionExperimentEnabled;
                    var4 = var4.bind(var13)();
                    var13 = var4.enabled;
                    var4 = 20;
                    var4 = var15[var4];
                    var17 = var5.bind(var7)(var4);
                    var16 = var17.getCurrentConfig;
                    var5 = {};
                    var4 = '153d31_4';
                    var5['location'] = var4;
                    var4 = {};
                    var4['autoTrackExposure'] = var3;
                    var4 = var16.bind(var17)(var5, var4);
                    var5 = var4.enabled;
                    var4 = 11;
                    var4 = var15[var4];
                    var4 = var14.bind(var7)(var4);
                    var4 = var4.isMobile;
                    var4 = !var4;
                    if(var4) { _fun0002_ip = 264; continue _fun0002 }
 261:
                    var4 = var13;
 264:
                    if(var12) { _fun0002_ip = 612; continue _fun0002 }
 270:
                    if(var11) { _fun0002_ip = 612; continue _fun0002 }
 276:
                    if(!var10) { _fun0002_ip = 612; continue _fun0002 }
 282:
                    if(!var9) { _fun0002_ip = 291; continue _fun0002 }
 285:
                    if(!var5) { _fun0002_ip = 612; continue _fun0002 }
 291:
                    if(!var4) { _fun0002_ip = 612; continue _fun0002 }
 297:
                    var5 = _closure1_slot6;
                    var4 = var5.hasFetchedOffer;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0002_ip = 356; continue _fun0002 }
 314:
                    var5 = _closure1_slot6;
                    var4 = var5.hasAnyUnexpiredOffer;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0002_ip = 609; continue _fun0002 }
 334:
                    var5 = _closure1_slot6;
                    var4 = var5.hasAnyUnexpiredDiscountOffer;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0002_ip = 609; continue _fun0002 }
 356:
                    var5 = _closure1_slot5;
                    var4 = var5.hasFetchedMostRecentPremiumTypeSubscription;
                    var4 = var4.bind(var5)();
                    var4 = !var4;
                    var9 = undefined;
                    if(!var4) { _fun0002_ip = 400; continue _fun0002 }
 380:
                    var11 = _closure1_slot4;
                    var5 = var11.getCurrentUser;
                    var5 = var5.bind(var11)();
                    var4 = var6 != var5;
                    var9 = var5;
 400:
                    if(!var4) { _fun0002_ip = 424; continue _fun0002 }
 403:
                    var6 = var9.hasPurchasedFlag;
                    var5 = _closure1_slot9;
                    var5 = var5.PREMIUM_TIER_2;
                    var4 = var6.bind(var9)(var5);
 424:
                    if(!var4) { _fun0002_ip = 470; continue _fun0002 }
 427:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 21;
                    var4 = var6[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.fetchMostRecentSubscription;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=461);
 459:
                    return var4;
 461:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 606; continue _fun0002 }
 470:
                    var6 = _closure1_slot5;
                    var5 = var6.hasFetchedSubscriptions;
                    var5 = var5.bind(var6)();
                    if(var5) { _fun0002_ip = 530; continue _fun0002 }
 487:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 21;
                    var5 = var9[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.fetchSubscriptions;
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=521);
 519:
                    return var5;
 521:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0002_ip = 530; continue _fun0002 }
 527:
                    return var5;
 530:
                    var6 = _closure1_slot5;
                    var5 = var6.getMostRecentPremiumTypeSubscription;
                    var9 = var5.bind(var6)();
                    var6 = _closure1_slot13;
                    var5 = {};
                    var5['experimentEnabled'] = var10;
                    var11 = _closure1_slot5;
                    var10 = var11.getPremiumTypeSubscription;
                    var10 = var10.bind(var11)();
                    var5['premiumSubscription'] = var10;
                    var5['mostRecentSubscription'] = var9;
                    var9 = _closure1_slot5;
                    var8 = var9.getPreviousPremiumTypeSubscription;
                    var8 = var8.bind(var9)();
                    var5['previousPremiumSubscription'] = var8;
                    var5 = var6.bind(var7)(var5);
                    return var5;
 606:
                    return var4;
 609:
                    return var3;
 612:
                    return var3;
 615:
                    return var2;
 618:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 172; continue _fun0003 }
 10:
                    var5 = _closure1_slot14;
                    var3 = undefined;
                    var2 = false;
                    var2 = var5.bind(var3)(var2);
                    SaveGenerator(address=30);
 28:
                    return var2;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 169; continue _fun0003 }
 39:
                    if(!var2) { _fun0003_ip = 160; continue _fun0003 }
 42:
                    var5 = _closure1_slot8;
                    var6 = var5.bogoPromotion;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0003_ip = 120; continue _fun0003 }
 58:
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
                    if(!(!(var6 >= var5))) { _fun0003_ip = 166; continue _fun0003 }
 120:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 22;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.fetchActiveBogoPromotion;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=154);
 152:
                    return var4;
 154:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 163; continue _fun0003 }
 160:
                    return var3;
 163:
                    return var4;
 166:
                    return var3;
 169:
                    return var2;
 172:
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
    var6 = 23;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/PremiumBogoPromotionUtilsCommon.tsx';
    var6 = var7.bind(var8)(var6);
    var3['isUserEligibleBasedOnCurrentOrPreviousSubs'] = var5;
    var5 = function useIsEligibleForBogoPromotion() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arguments[0];
            var6 = undefined;
            if(!(var4 === var6)) { _fun0004_ip = 11; continue _fun0004 }
 9:
            var4 = true;
 11:
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var9 = var7.bind(var6)(var2);
            var8 = var9.useExperiment;
            var3 = {};
            var2 = '153d31_1';
            var3['location'] = var2;
            var2 = {};
            var10 = false;
            var2['autoTrackExposure'] = var10;
            var2 = var8.bind(var9)(var3, var2);
            var8 = var2.paymentsBlocked;
            var3 = _closure1_slot0;
            var2 = 13;
            var2 = var5[var2];
            var9 = var3.bind(var6)(var2);
            var2 = var9.useBogoPromotion;
            var2 = var2.bind(var9)();
            var9 = var2.promotion;
            var2 = 14;
            var2 = var5[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var16 = var2.enabled;
            var2 = 15;
            var2 = var5[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var12 = var2.enabled;
            var2 = 16;
            var2 = var5[var2];
            var11 = var3.bind(var6)(var2);
            var10 = var11.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var2;
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
            var2 = var10.bind(var11)(var7, var2);
            var14 = var2.mostRecentSubscription;
            var15 = var2.premiumSubscription;
            var13 = var2.previousPremiumSubscription;
            var2 = 17;
            var2 = var5[var2];
            var7 = var3.bind(var6)(var2);
            var2 = var7.usePremiumTrialOffer;
            var10 = var2.bind(var7)();
            var2 = 18;
            var2 = var5[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.usePremiumDiscountOffer;
            var7 = var2.bind(var3)();
            var2 = global;
            var17 = var2.Date;
            var3 = null;
            var5 = var3 == var9;
            var11 = undefined;
            if(var5) { _fun0004_ip = 277; continue _fun0004 }
 271:
            var11 = var9.endDate;
 277:
            var18 = var3 != var11;
            var5 = 0;
            if(!var18) { _fun0004_ip = 289; continue _fun0004 }
 286:
            var5 = var11;
 289:
            var11 = var17.prototype;
            var11 = Object.create(var11, {constructor: {value: var17}});
            var23 = var11;
            var22 = var5;
            var5 = new var23[var17](var22, var21);
            var11 = var5 instanceof Object ? var5 : var11;
            var5 = var11.valueOf;
            var19 = var5.bind(var11)();
            var5 = var2.Date;
            var2 = var5.now;
            var18 = var2.bind(var5)();
            var5 = var18 > var19;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var2 = 19;
            var2 = var17[var2];
            var11 = var11.bind(var6)(var2);
            var2 = {};
            var17 = -1;
            if(var5) { _fun0004_ip = 375; continue _fun0004 }
 371:
            var17 = var19 - var18;
 375:
            var2['delay'] = var17;
            var2 = var11.bind(var6)(var2);
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 11;
            var2 = var17[var2];
            var2 = var11.bind(var6)(var2);
            var2 = var2.isMobile;
            var2 = !var2;
            if(var2) { _fun0004_ip = 455; continue _fun0004 }
 417:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 10;
            var11 = var18[var11];
            var17 = var17.bind(var6)(var11);
            var11 = var17.isAndroid;
            var11 = var11.bind(var17)();
            if(!var11) { _fun0004_ip = 452; continue _fun0004 }
 449:
            var11 = var12;
 452:
            var2 = var11;
 455:
            var12 = _closure1_slot13;
            var11 = {};
            var11['experimentEnabled'] = var16;
            var11['premiumSubscription'] = var15;
            var11['mostRecentSubscription'] = var14;
            var11['previousPremiumSubscription'] = var13;
            var11 = var12.bind(var6)(var11);
            if(!var2) { _fun0004_ip = 492; continue _fun0004 }
 489:
            var2 = var11;
 492:
            if(!var2) { _fun0004_ip = 499; continue _fun0004 }
 495:
            var2 = var3 == var10;
 499:
            if(!var2) { _fun0004_ip = 506; continue _fun0004 }
 502:
            var2 = var3 != var9;
 506:
            if(!var2) { _fun0004_ip = 512; continue _fun0004 }
 509:
            var2 = !var8;
 512:
            if(!var2) { _fun0004_ip = 519; continue _fun0004 }
 515:
            var2 = var3 == var7;
 519:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 20;
            var1 = var7[var1];
            var7 = var3.bind(var6)(var1);
            var6 = var7.useExperiment;
            var3 = {};
            var1 = '153d31_2';
            var3['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var2;
            var8 = !var2;
            var1['disable'] = var8;
            var1 = var6.bind(var7)(var3, var1);
            var3 = var1.enabled;
            var1 = !var5;
            if(var5) { _fun0004_ip = 598; continue _fun0004 }
 589:
            if(!var4) { _fun0004_ip = 595; continue _fun0004 }
 592:
            var2 = var3;
 595:
            var1 = var2;
 598:
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