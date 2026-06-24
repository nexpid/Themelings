// app/modules/premium/native/handlePremiumPurchase.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function validatePurchase() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _validatePurchase() {
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
                    var13 = var2.productId;
                    var12 = var2.premiumSubscription;
                    var11 = var2.offerId;
                    var10 = var2.currency;
                    var9 = var2.price;
                    var8 = var2.isGift;
                    var6 = undefined;
                    SaveGenerator(address=55);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var7 = _closure1_slot10;
                    var7 = var7.GOOGLE_PLAY_VALIDATE_PURCHASE;
                    var3['url'] = var7;
                    var7 = {};
                    var7['product_id'] = var13;
                    var7['offer_id'] = var11;
                    var13 = var12;
                    var11 = null;
                    var13 = var11 == var13;
                    var11 = undefined;
                    if(var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var11 = var12.id;
case 8:
                    var7['subscription_id'] = var11;
                    var7['currency'] = var10;
                    var7['price'] = var9;
                    var7['is_gift'] = var8;
                    var3['body'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=184);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13: // try_end0
                    return var6;
case 12:
                    return var3;
case 14: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var15 = var4;
                    var14 = var5;
                    var3 = new var15[var3](var14, var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
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
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.setGPlayAnalytics;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot9 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PaymentGateways;
    var _closure1_slot11 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/handlePremiumPurchase.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHandlePremiumPurchase() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 15;
            var4 = var9[var2];
            var2 = undefined;
            var8 = var5.bind(var2)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var7.bind(var8)(var6, var4);
            var _closure2_slot0 = var6;
            var4 = 16;
            var4 = var9[var4];
            var7 = var5.bind(var2)(var4);
            var4 = var7.usePremiumTrialOffer;
            var8 = var4.bind(var7)();
            var _closure2_slot1 = var8;
            var4 = 17;
            var4 = var9[var4];
            var7 = var5.bind(var2)(var4);
            var4 = var7.usePremiumDiscountOffer;
            var7 = var4.bind(var7)();
            var _closure2_slot2 = var7;
            var4 = 18;
            var4 = var9[var4];
            var9 = var5.bind(var2)(var4);
            var5 = var9.useIsEligibleForBogoPromotion;
            var4 = false;
            var5 = var5.bind(var9)(var4);
            var _closure2_slot3 = var5;
            var4 = null;
            var12 = var4 != var6;
            var _closure2_slot4 = var12;
            var10 = var4 == var6;
            var9 = undefined;
            if(var10) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var9 = var6.id;
case 15:
            var _closure2_slot5 = var9;
            var10 = var4 == var6;
            var11 = undefined;
            if(var10) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var11 = var6.paymentGatewayPlanId;
case 17:
            var _closure2_slot6 = var11;
            var4 = var4 == var6;
            var10 = undefined;
            if(var4) { _fun0002_ip = 19; continue _fun0002 }
case 14:
            var10 = var6.paymentGatewaySubscriptionId;
case 19:
            var _closure2_slot7 = var10;
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 20; continue _fun0003 }
case 3:
                            var18 = var2.productId;
                            var15 = var2.skuId;
                            var28 = var2.analyticsLoadId;
                            var22 = var2.analyticsLocation;
                            var19 = var2.analyticsLocations;
                            var13 = var2.isGift;
                            var4 = undefined;
                            if(!(var13 === var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                            var13 = false;
case 21:
                            var10 = var13;
                            var13 = var2.isOneTimePurchase;
                            if(!(var13 === var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                            var13 = false;
case 23:
                            var6 = var13;
                            var13 = var2.allowPlanChange;
                            if(!(var13 === var4)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                            var13 = true;
case 25:
                            var25 = var13;
                            var12 = var2.applicationId;
                            var26 = var2.giftInfoOptions;
                            var8 = var2.onPurchaseComplete;
                            var5 = var2.onPurchaseError;
                            var7 = undefined;
                            var24 = undefined;
                            var20 = undefined;
                            var9 = undefined;
                            var23 = undefined;
                            var21 = undefined;
                            SaveGenerator(address=128);
case 27:
                            return var4;
case 28:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=10);
                            if(var11) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                            var14 = _closure1_slot6;
                            var11 = var14.getId;
                            var7 = var11.bind(var14)();
                            var14 = _closure1_slot8;
                            var11 = var14.getProduct;
                            var27 = var18;
                            var14 = var11.bind(var14)(var27);
                            var24 = var14;
                            var16 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var11 = 19;
                            var11 = var17[var11];
                            var17 = var16.bind(var4)(var11);
                            var16 = var17.getBasePurchaseFlowAnalyticsFields;
                            var11 = {};
                            var29 = var10;
                            var11['isGift'] = var29;
                            var11['analyticsLoadId'] = var28;
                            var11['analyticsLocation'] = var22;
                            var11['analyticsLocations'] = var19;
                            var11 = var16.bind(var17)(var11);
                            var20 = var11;
                            var22 = _closure1_slot5;
                            var16 = {};
                            var38 = var16;
                            var37 = var11;
                            var11 = copyDataProperties(var38, var37);
                            var19 = 'subscription_plan_gateway_plan_id';
                            var16[18] = var27;
                            var11 = var15;
                            var17 = 'sku_id';
                            var16[16] = var11;
                            var11 = null;
                            var14 = var11 == var14;
                            var28 = undefined;
                            if(var14) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                            var14 = var24;
                            var28 = var14.price;
case 31:
                            var14 = 'price';
                            var16[13] = var28;
                            var14 = var24;
                            var14 = var11 == var14;
                            var28 = undefined;
                            if(var14) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                            var14 = var24;
                            var28 = var14.price;
case 33:
                            var14 = 'regular_price';
                            var16[13] = var28;
                            var14 = var24;
                            var14 = var11 == var14;
                            var28 = undefined;
                            if(var14) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                            var14 = var24;
                            var29 = var14.currencyCode;
                            var14 = var29.toLowerCase;
                            var28 = var14.bind(var29)();
case 35:
                            var14 = 'currency';
                            var16[13] = var28;
                            var30 = var12;
                            var14 = 'application_id';
                            var16[13] = var30;
                            var16 = var22.bind(var4)(var27, var16);
                            var16 = var18;
                            var31 = _closure2_slot3;
                            var28 = _closure2_slot1;
                            var29 = _closure2_slot2;
                            var32 = var24;
                            var33 = var11 == var32;
                            var27 = undefined;
                            if(var33) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                            var27 = var32.offerIds;
case 37:
                            if(!(var11 != var27)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                            if(!(var11 == var28)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                            if(!(var11 == var29)) { _fun0003_ip = 43; continue _fun0003 }
case 39:
                            var27 = null;
                            if(!var31) { _fun0003_ip = 44; continue _fun0003 }
case 45:
                            var32 = _closure1_slot0;
                            var31 = _closure1_slot2;
                            var33 = 14;
                            var31 = var31[var33];
                            var31 = var32.bind(var4)(var31);
                            var31 = var31.ProductIds;
                            var31 = var31.PREMIUM_TIER_2_MONTHLY;
                            var27 = null;
                            if(!(var16 === var31)) { _fun0003_ip = 44; continue _fun0003 }
case 46:
                            var32 = _closure1_slot0;
                            var31 = _closure1_slot2;
                            var31 = var31[var33];
                            var31 = var32.bind(var4)(var31);
                            var27 = var31.BOGO_OFFER_ID;
case 44:
                            _fun0003_ip = 47; continue _fun0003;
case 43:
                            var32 = _closure1_slot0;
                            var33 = _closure1_slot2;
                            var31 = 14;
                            var31 = var33[var31];
                            var31 = var32.bind(var4)(var31);
                            var31 = var31.DiscountIdToProductOfferId;
                            var29 = var29.discountId;
                            var31 = var31[var29];
                            var32 = var11 == var31;
                            var29 = undefined;
                            if(var32) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                            var29 = var31[var16];
case 48:
                            var27 = var29;
                            _fun0003_ip = 47; continue _fun0003;
case 41:
                            var31 = _closure1_slot0;
                            var32 = _closure1_slot2;
                            var29 = 14;
                            var29 = var32[var29];
                            var29 = var31.bind(var4)(var29);
                            var29 = var29.TrialIdToProductOfferId;
                            var28 = var28.trial_id;
                            var29 = var29[var28];
                            var31 = var11 == var29;
                            var28 = undefined;
                            if(var31) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                            var28 = var29[var16];
case 50:
                            var27 = var28;
case 47:
                            var9 = var27;
                            var28 = _closure1_slot0;
                            var29 = _closure1_slot2;
                            var27 = 20;
                            var27 = var29[var27];
                            var29 = var28.bind(var4)(var27);
                            var28 = var29.trackPaymentFlowStartedAnalyticsAndCTP;
                            var27 = {};
                            var37 = var20;
                            var38 = var27;
                            var31 = copyDataProperties(var38, var37);
                            var27[18] = var16;
                            var16 = var15;
                            var27[16] = var16;
                            var16 = _closure1_slot11;
                            var31 = var16.GOOGLE;
                            var16 = 'payment_gateway';
                            var27[15] = var31;
                            var27[13] = var30;
                            var27 = var28.bind(var29)(var27);
case 52: // try_start_1
                            var27 = var10;
                            if(var27) { _fun0003_ip = 53; continue _fun0003 }
case 54:
                            if(var6) { _fun0003_ip = 53; continue _fun0003 }
case 55:
                            var27 = _closure2_slot4;
                            var6 = var27;
                            if(!var27) { _fun0003_ip = 56; continue _fun0003 }
case 57:
                            var6 = !var25;
case 56:
                            if(var6) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                            var27 = _closure2_slot6;
                            var27 = var11 != var27;
                            var25 = var27;
                            if(!var27) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                            var27 = _closure2_slot7;
                            var25 = var11 != var27;
case 60:
                            var6 = var25;
                            if(!var25) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                            var25 = _closure2_slot5;
                            var6 = var11 != var25;
case 62:
                            if(!var6) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                            var25 = _closure1_slot0;
                            var27 = _closure1_slot2;
                            var6 = 24;
                            var6 = var27[var6];
                            var30 = var25.bind(var4)(var6);
                            var29 = var30.updatePendingDowngrade;
                            var38 = var18;
                            var37 = _closure2_slot6;
                            var36 = _closure2_slot7;
                            var35 = _closure2_slot5;
                            var39 = var30;
                            var6 = var39[var29](var38, var37, var36, var35, var34);
case 64:
                            var25 = _closure1_slot12;
                            var6 = {};
                            var27 = var18;
                            var6['productId'] = var27;
                            var27 = _closure2_slot0;
                            var6['premiumSubscription'] = var27;
                            var27 = var9;
                            var6['offerId'] = var27;
                            var6 = var25.bind(var4)(var6);
                            SaveGenerator(address=857);
case 66:
                            return var6;
case 67:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=24);
                            if(var25) { _fun0003_ip = 68; continue _fun0003 }
case 69:
                            var27 = _closure1_slot0;
                            var28 = _closure1_slot2;
                            var25 = 24;
                            var25 = var28[var25];
                            var31 = var27.bind(var4)(var25);
                            var30 = var31.subscribe;
                            var38 = var18;
                            var37 = var7;
                            var36 = _closure2_slot6;
                            var35 = _closure2_slot7;
                            var34 = var9;
                            var39 = var31;
                            var9 = var39[var30](var38, var37, var36, var35, var34, var33);
                            SaveGenerator(address=917);
case 70:
                            return var9;
case 71:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=24);
                            if(!var25) { _fun0003_ip = 58; continue _fun0003 }
case 72: // try_end1
                            return var9;
case 68:
                            return var6;
case 53: // try_start_2
                            var9 = var10;
                            var6 = var9;
                            if(!var9) { _fun0003_ip = 73; continue _fun0003 }
case 74:
                            var9 = var26;
                            var6 = var11 != var9;
case 73:
                            if(!var6) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                            var27 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var25 = 21;
                            var9 = var9[var25];
                            var9 = var27.bind(var4)(var9);
                            var9 = var9.giftInfoOptionsCache;
                            var9 = var11 != var9;
                            var6 = var9;
                            if(!var9) { _fun0003_ip = 77; continue _fun0003 }
case 78:
                            var27 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var25];
                            var9 = var27.bind(var4)(var9);
                            var27 = var9.giftInfoOptionsCache;
                            var9 = var18;
                            var9 = var27[var9];
                            var6 = var11 != var9;
case 77:
                            if(!var6) { _fun0003_ip = 79; continue _fun0003 }
case 80:
                            var9 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var25];
                            var6 = var9.bind(var4)(var6);
                            var9 = var6.giftInfoOptionsCache;
                            var6 = var18;
                            var6 = delete var9[var6];
case 79:
                            var9 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var25];
                            var6 = var9.bind(var4)(var6);
                            var25 = var6.giftInfoOptionsCache;
                            var9 = var18;
                            var6 = {};
                            var37 = var26;
                            var38 = var6;
                            var26 = copyDataProperties(var38, var37);
                            var25[var9] = var6;
case 75:
                            var21 = null;
                            var6 = var24;
                            if(!(var11 != var6)) { _fun0003_ip = 81; continue _fun0003 }
case 82: // try_start_0
                            var9 = _closure1_slot0;
                            var25 = _closure1_slot2;
                            var6 = 22;
                            var6 = var25[var6];
                            var26 = var9.bind(var4)(var6);
                            var25 = var26.convertToMinorCurrencyUnits;
                            var6 = var24;
                            var27 = var6.price;
                            var9 = 100;
                            var9 = var27 / var9;
                            var6 = var6.currencyCode;
                            var21 = var25.bind(var26)(var9, var6);
case 83: // try_end0
                            _fun0003_ip = 81; continue _fun0003;
case 84: // catch_target0
                            CatchBlockStart(arg_register=24);
                            var9 = _closure1_slot0;
                            var26 = _closure1_slot2;
                            var6 = 23;
                            var6 = var26[var6];
                            var9 = var9.bind(var4)(var6);
                            var6 = var9.captureBillingException;
                            var6 = var6.bind(var9)(var25);
case 81:
                            var9 = _closure1_slot12;
                            var6 = {};
                            var25 = var18;
                            var6['productId'] = var25;
                            var22 = _closure2_slot0;
                            var6['premiumSubscription'] = var22;
                            var6['offerId'] = var11;
                            var22 = var24;
                            var25 = var11 == var22;
                            var22 = undefined;
                            if(var25) { _fun0003_ip = 85; continue _fun0003 }
case 86:
                            var24 = var24.currencyCode;
                            var23 = var24;
                            var24 = var11 == var24;
                            var22 = undefined;
                            if(var24) { _fun0003_ip = 85; continue _fun0003 }
case 87:
                            var24 = var23;
                            var23 = var24.toLowerCase;
                            var22 = var23.bind(var24)();
case 85:
                            var6['currency'] = var22;
                            var6['price'] = var21;
                            var6['isGift'] = var10;
                            var6 = var9.bind(var4)(var6);
                            SaveGenerator(address=1292);
case 88:
                            return var6;
case 89:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                            if(var9) { _fun0003_ip = 90; continue _fun0003 }
case 91:
                            var10 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var9 = 24;
                            var9 = var21[var9];
                            var21 = var10.bind(var4)(var9);
                            var10 = var21.purchase;
                            var9 = var18;
                            var7 = var10.bind(var21)(var9, var7);
                            SaveGenerator(address=1337);
case 92:
                            return var7;
case 93:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                            if(var9) { _fun0003_ip = 94; continue _fun0003 }
case 58:
                            var9 = var8;
                            if(!(var11 != var9)) { _fun0003_ip = 95; continue _fun0003 }
case 96:
                            var8 = var8.bind(var4)();
case 95: // try_end2
                            _fun0003_ip = 97; continue _fun0003;
case 94:
                            return var7;
case 90:
                            return var6;
case 98: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=9);
                            var3 = var10;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 25;
                            var6 = var8[var6];
                            var9 = var7.bind(var4)(var6);
                            var8 = var9.track;
                            var6 = _closure1_slot9;
                            var7 = var6.PAYMENT_FLOW_FAILED;
                            var6 = {};
                            var37 = var20;
                            var38 = var6;
                            var20 = copyDataProperties(var38, var37);
                            var6[18] = var18;
                            var6[16] = var15;
                            var15 = _closure1_slot11;
                            var15 = var15.GOOGLE;
                            var6[15] = var15;
                            var6[13] = var12;
                            var12 = var10.message;
                            var10 = 'error_message';
                            var6[9] = var12;
                            var6 = var8.bind(var9)(var7, var6);
                            var6 = var5;
                            if(!(var11 != var6)) { _fun0003_ip = 99; continue _fun0003 }
case 100:
                            var5 = var5.bind(var4)();
case 99:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 23;
                            var5 = var8[var5];
                            var9 = var7.bind(var4)(var5);
                            var5 = var9.captureBillingException;
                            var6 = var3;
                            var5 = var5.bind(var9)(var6);
                            var16 = 10;
                            var5 = var8[var16];
                            var5 = var7.bind(var4)(var5);
                            var10 = var5.intl;
                            var9 = var10.string;
                            var5 = var8[var16];
                            var5 = var7.bind(var4)(var5);
                            var5 = var5.t;
                            var5 = var5.LFFx5G;
                            var9 = var9.bind(var10)(var5);
                            var12 = 11;
                            var5 = var8[var12];
                            var5 = var7.bind(var4)(var5);
                            var5 = var5.BillingError;
                            var7 = var6 instanceof var5;
                            var5 = var6;
                            if(var7) { _fun0003_ip = 101; continue _fun0003 }
case 102:
                            var10 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var12];
                            var7 = var10.bind(var4)(var7);
                            var7 = var7.BillingError;
                            var10 = var7.prototype;
                            var10 = Object.create(var10, {constructor: {value: var7}});
                            var39 = var10;
                            var38 = var6;
                            var7 = new var39[var7](var38, var37);
                            var5 = var7 instanceof Object ? var7 : var10;
case 101:
                            var10 = var5.code;
                            var12 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var7 = 12;
                            var7 = var14[var7];
                            var7 = var12.bind(var4)(var7);
                            var7 = var7.ErrorCodes;
                            var7 = var7.UNKNOWN;
                            var7 = var10 !== var7;
                            if(!var7) { _fun0003_ip = 103; continue _fun0003 }
case 104:
                            var12 = var5.code;
                            var10 = -1;
                            var7 = var10 !== var12;
case 103:
                            if(!var7) { _fun0003_ip = 105; continue _fun0003 }
case 106:
                            var10 = var5.message;
                            var7 = var11 != var10;
case 105:
                            var11 = var9;
                            if(!var7) { _fun0003_ip = 107; continue _fun0003 }
case 108:
                            var11 = var5.message;
case 107:
                            var7 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var5 = 13;
                            var5 = var12[var5];
                            var10 = var7.bind(var4)(var5);
                            var9 = var10.show;
                            var5 = {};
                            var15 = _closure1_slot0;
                            var13 = var12[var16];
                            var13 = var15.bind(var4)(var13);
                            var14 = var13.intl;
                            var13 = var14.string;
                            var12 = var12[var16];
                            var12 = var15.bind(var4)(var12);
                            var12 = var12.t;
                            var12 = var12.U+H+kd;
                            var12 = var13.bind(var14)(var12);
                            var5['title'] = var12;
                            var5['body'] = var11;
                            var11 = true;
                            var5['isDismissable'] = var11;
                            var5 = var9.bind(var10)(var5);
                            var5 = 9;
                            var5 = var8[var5];
                            var5 = var7.bind(var4)(var5);
                            var5 = var6 instanceof var5;
                            if(var5) { _fun0003_ip = 109; continue _fun0003 }
case 97:
                            return var4;
case 109:
                            throw var3;
case 29:
                            return var2;
case 20:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var2 = var1.bind(var2)();
            var1 = new Array(8);
            var1[0] = var12;
            var1[1] = var11;
            var1[2] = var10;
            var1[3] = var9;
            var1[4] = var8;
            var1[5] = var7;
            var1[6] = var6;
            var1[7] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useHandlePremiumPurchase'] = var2;
    return var1;
})();