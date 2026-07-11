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
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _validatePurchase() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
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
                    var3 = 9;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var7 = _closure1_slot12;
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
                    var3 = 10;
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
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = ['succeededOnlyFields'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.setGPlayAnalytics;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot11 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PaymentGateways;
    var _closure1_slot13 = var4;
    var4 = 28;
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
            var2 = 17;
            var4 = var9[var2];
            var2 = undefined;
            var8 = var5.bind(var2)(var4);
            var7 = var8.useStateFromStores;
            var4 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var7.bind(var8)(var6, var4);
            var _closure2_slot0 = var6;
            var4 = 18;
            var4 = var9[var4];
            var7 = var5.bind(var2)(var4);
            var4 = var7.usePremiumTrialOffer;
            var8 = var4.bind(var7)();
            var _closure2_slot1 = var8;
            var4 = 19;
            var4 = var9[var4];
            var7 = var5.bind(var2)(var4);
            var4 = var7.usePremiumDiscountOffer;
            var7 = var4.bind(var7)();
            var _closure2_slot2 = var7;
            var4 = 20;
            var4 = var9[var4];
            var5 = var5.bind(var2)(var4);
            var4 = var5.useIsEligibleForBogoOffer;
            var5 = var4.bind(var5)();
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
case 12:
            var10 = var6.paymentGatewaySubscriptionId;
case 19:
            var _closure2_slot7 = var10;
            var4 = _closure1_slot6;
            var3 = var4.useCallback;
            var1 = function() {
                var4 = _closure1_slot5;
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
                            var10 = var2.productId;
                            var25 = var2.skuId;
                            var27 = var2.analyticsLoadId;
                            var24 = var2.analyticsLocation;
                            var22 = var2.analyticsLocations;
                            var26 = var2.analyticsData;
                            var13 = var2.isGift;
                            var4 = undefined;
                            if(!(var13 === var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                            var13 = false;
case 21:
                            var14 = var13;
                            var13 = var2.isOneTimePurchase;
                            if(!(var13 === var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                            var13 = false;
case 23:
                            var7 = var13;
                            var13 = var2.allowPlanChange;
                            if(!(var13 === var4)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                            var13 = true;
case 25:
                            var20 = var13;
                            var23 = var2.applicationId;
                            var21 = var2.giftInfoOptions;
                            var9 = var2.onPurchaseComplete;
                            var6 = var2.onPurchaseError;
                            var8 = undefined;
                            var19 = undefined;
                            var12 = undefined;
                            var11 = undefined;
                            var18 = undefined;
                            var16 = undefined;
                            SaveGenerator(address=134);
case 27:
                            return var4;
case 28:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                            var15 = _closure1_slot8;
                            var13 = var15.getId;
                            var8 = var13.bind(var15)();
                            var17 = _closure1_slot10;
                            var15 = var17.getProduct;
                            var13 = var10;
                            var19 = var15.bind(var17)(var13);
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var13 = 21;
                            var13 = var17[var13];
                            var17 = var15.bind(var4)(var13);
                            var15 = var17.getBasePurchaseFlowAnalyticsFields;
                            var13 = {};
                            var28 = var14;
                            var13['isGift'] = var28;
                            var13['analyticsLoadId'] = var27;
                            var13['analyticsLocation'] = var24;
                            var13['analyticsLocations'] = var22;
                            var22 = var15.bind(var17)(var13);
                            var15 = null;
                            if(!(var15 == var26)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                            var26 = {};
case 31:
                            var24 = var26.succeededOnlyFields;
                            var17 = _closure1_slot4;
                            var13 = _closure1_slot3;
                            var17 = var17.bind(var4)(var26, var13);
                            var13 = {};
                            var33 = var13;
                            var32 = var22;
                            var22 = copyDataProperties(var33, var32);
                            var26 = var10;
                            var22 = 'subscription_plan_gateway_plan_id';
                            var13[21] = var26;
                            var22 = 'sku_id';
                            var13[21] = var25;
                            var22 = var19;
                            var22 = var15 == var22;
                            var25 = undefined;
                            if(var22) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                            var22 = var19;
                            var25 = var22.price;
case 33:
                            var22 = 'price';
                            var13[21] = var25;
                            var22 = var19;
                            var22 = var15 == var22;
                            var25 = undefined;
                            if(var22) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                            var22 = var19;
                            var25 = var22.price;
case 35:
                            var22 = 'regular_price';
                            var13[21] = var25;
                            var22 = var19;
                            var22 = var15 == var22;
                            var25 = undefined;
                            if(var22) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                            var22 = var19;
                            var26 = var22.currencyCode;
                            var22 = var26.toLowerCase;
                            var25 = var22.bind(var26)();
case 37:
                            var22 = 'currency';
                            var13[21] = var25;
                            var22 = 'application_id';
                            var13[21] = var23;
                            var33 = var13;
                            var32 = var17;
                            var17 = copyDataProperties(var33, var32);
                            var12 = var13;
                            var22 = _closure1_slot7;
                            var25 = var10;
                            var17 = {};
                            var33 = var17;
                            var32 = var13;
                            var23 = copyDataProperties(var33, var32);
                            var23 = 'succeededOnlyFields';
                            var17[22] = var24;
                            var17 = var22.bind(var4)(var25, var17);
                            var26 = _closure2_slot3;
                            var23 = _closure2_slot1;
                            var24 = _closure2_slot2;
                            var27 = var19;
                            var28 = var15 == var27;
                            var22 = undefined;
                            if(var28) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                            var22 = var27.offerIds;
case 39:
                            if(!(var15 != var22)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                            if(!(var15 == var23)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                            if(!(var15 == var24)) { _fun0003_ip = 45; continue _fun0003 }
case 41:
                            var22 = null;
                            if(!var26) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                            var27 = _closure1_slot0;
                            var26 = _closure1_slot2;
                            var28 = 16;
                            var26 = var26[var28];
                            var26 = var27.bind(var4)(var26);
                            var26 = var26.ProductIds;
                            var26 = var26.PREMIUM_TIER_2_MONTHLY;
                            var22 = null;
                            if(!(var25 === var26)) { _fun0003_ip = 46; continue _fun0003 }
case 48:
                            var27 = _closure1_slot0;
                            var26 = _closure1_slot2;
                            var26 = var26[var28];
                            var26 = var27.bind(var4)(var26);
                            var22 = var26.BOGO_OFFER_ID;
case 46:
                            _fun0003_ip = 49; continue _fun0003;
case 45:
                            var27 = _closure1_slot0;
                            var28 = _closure1_slot2;
                            var26 = 16;
                            var26 = var28[var26];
                            var26 = var27.bind(var4)(var26);
                            var26 = var26.DiscountIdToProductOfferId;
                            var24 = var24.discountId;
                            var26 = var26[var24];
                            var27 = var15 == var26;
                            var24 = undefined;
                            if(var27) { _fun0003_ip = 50; continue _fun0003 }
case 51:
                            var24 = var26[var25];
case 50:
                            var22 = var24;
                            _fun0003_ip = 49; continue _fun0003;
case 43:
                            var26 = _closure1_slot0;
                            var27 = _closure1_slot2;
                            var24 = 16;
                            var24 = var27[var24];
                            var24 = var26.bind(var4)(var24);
                            var24 = var24.TrialIdToProductOfferId;
                            var23 = var23.trial_id;
                            var24 = var24[var23];
                            var26 = var15 == var24;
                            var23 = undefined;
                            if(var26) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                            var23 = var24[var25];
case 52:
                            var22 = var23;
case 49:
                            var11 = var22;
                            var23 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var22 = 22;
                            var22 = var24[var22];
                            var24 = var23.bind(var4)(var22);
                            var23 = var24.trackPaymentFlowStartedAnalyticsAndCTP;
                            var22 = {};
                            var33 = var22;
                            var32 = var13;
                            var13 = copyDataProperties(var33, var32);
                            var13 = _closure1_slot13;
                            var25 = var13.GOOGLE;
                            var13 = 'payment_gateway';
                            var22[12] = var25;
                            var22 = var23.bind(var24)(var22);
case 54: // try_start_1
                            var22 = var14;
                            if(var22) { _fun0003_ip = 55; continue _fun0003 }
case 56:
                            if(var7) { _fun0003_ip = 55; continue _fun0003 }
case 57:
                            var22 = _closure2_slot4;
                            var7 = var22;
                            if(!var22) { _fun0003_ip = 58; continue _fun0003 }
case 59:
                            var7 = !var20;
case 58:
                            if(var7) { _fun0003_ip = 60; continue _fun0003 }
case 61:
                            var22 = _closure2_slot6;
                            var22 = var15 != var22;
                            var20 = var22;
                            if(!var22) { _fun0003_ip = 62; continue _fun0003 }
case 63:
                            var22 = _closure2_slot7;
                            var20 = var15 != var22;
case 62:
                            var7 = var20;
                            if(!var20) { _fun0003_ip = 64; continue _fun0003 }
case 65:
                            var20 = _closure2_slot5;
                            var7 = var15 != var20;
case 64:
                            if(!var7) { _fun0003_ip = 66; continue _fun0003 }
case 67:
                            var20 = _closure1_slot0;
                            var22 = _closure1_slot2;
                            var7 = 26;
                            var7 = var22[var7];
                            var25 = var20.bind(var4)(var7);
                            var24 = var25.updatePendingDowngrade;
                            var33 = var10;
                            var32 = _closure2_slot6;
                            var31 = _closure2_slot7;
                            var30 = _closure2_slot5;
                            var34 = var25;
                            var7 = var34[var24](var33, var32, var31, var30, var29);
case 66:
                            var20 = _closure1_slot14;
                            var7 = {};
                            var22 = var10;
                            var7['productId'] = var22;
                            var22 = _closure2_slot0;
                            var7['premiumSubscription'] = var22;
                            var22 = var11;
                            var7['offerId'] = var22;
                            var7 = var20.bind(var4)(var7);
                            SaveGenerator(address=899);
case 68:
                            return var7;
case 69:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=19);
                            if(var20) { _fun0003_ip = 70; continue _fun0003 }
case 71:
                            var22 = _closure1_slot0;
                            var23 = _closure1_slot2;
                            var20 = 26;
                            var20 = var23[var20];
                            var26 = var22.bind(var4)(var20);
                            var25 = var26.subscribe;
                            var33 = var10;
                            var32 = var8;
                            var31 = _closure2_slot6;
                            var30 = _closure2_slot7;
                            var29 = var11;
                            var34 = var26;
                            var11 = var34[var25](var33, var32, var31, var30, var29, var28);
                            SaveGenerator(address=959);
case 72:
                            return var11;
case 73:
                            ResumeGenerator(result_out_reg=10, return_bool_out_reg=19);
                            if(!var20) { _fun0003_ip = 60; continue _fun0003 }
case 74: // try_end1
                            return var11;
case 70:
                            return var7;
case 55: // try_start_2
                            var11 = var14;
                            var7 = var11;
                            if(!var11) { _fun0003_ip = 75; continue _fun0003 }
case 76:
                            var11 = var21;
                            var7 = var15 != var11;
case 75:
                            if(!var7) { _fun0003_ip = 77; continue _fun0003 }
case 78:
                            var22 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var20 = 23;
                            var11 = var11[var20];
                            var11 = var22.bind(var4)(var11);
                            var11 = var11.giftInfoOptionsCache;
                            var11 = var15 != var11;
                            var7 = var11;
                            if(!var11) { _fun0003_ip = 79; continue _fun0003 }
case 80:
                            var22 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var11 = var11[var20];
                            var11 = var22.bind(var4)(var11);
                            var22 = var11.giftInfoOptionsCache;
                            var11 = var10;
                            var11 = var22[var11];
                            var7 = var15 != var11;
case 79:
                            if(!var7) { _fun0003_ip = 81; continue _fun0003 }
case 82:
                            var11 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var7 = var7[var20];
                            var7 = var11.bind(var4)(var7);
                            var11 = var7.giftInfoOptionsCache;
                            var7 = var10;
                            var7 = delete var11[var7];
case 81:
                            var11 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var7 = var7[var20];
                            var7 = var11.bind(var4)(var7);
                            var20 = var7.giftInfoOptionsCache;
                            var11 = var10;
                            var7 = {};
                            var32 = var21;
                            var33 = var7;
                            var21 = copyDataProperties(var33, var32);
                            var20[var11] = var7;
case 77:
                            var16 = null;
                            var7 = var19;
                            if(!(var15 != var7)) { _fun0003_ip = 83; continue _fun0003 }
case 84: // try_start_0
                            var11 = _closure1_slot0;
                            var20 = _closure1_slot2;
                            var7 = 24;
                            var7 = var20[var7];
                            var21 = var11.bind(var4)(var7);
                            var20 = var21.convertToMinorCurrencyUnits;
                            var7 = var19;
                            var22 = var7.price;
                            var11 = 100;
                            var11 = var22 / var11;
                            var7 = var7.currencyCode;
                            var16 = var20.bind(var21)(var11, var7);
case 85: // try_end0
                            _fun0003_ip = 83; continue _fun0003;
case 86: // catch_target0
                            CatchBlockStart(arg_register=19);
                            var11 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var7 = 25;
                            var7 = var21[var7];
                            var11 = var11.bind(var4)(var7);
                            var7 = var11.captureBillingException;
                            var7 = var7.bind(var11)(var20);
case 83:
                            var11 = _closure1_slot14;
                            var7 = {};
                            var20 = var10;
                            var7['productId'] = var20;
                            var17 = _closure2_slot0;
                            var7['premiumSubscription'] = var17;
                            var7['offerId'] = var15;
                            var17 = var19;
                            var20 = var15 == var17;
                            var17 = undefined;
                            if(var20) { _fun0003_ip = 87; continue _fun0003 }
case 88:
                            var19 = var19.currencyCode;
                            var18 = var19;
                            var19 = var15 == var19;
                            var17 = undefined;
                            if(var19) { _fun0003_ip = 87; continue _fun0003 }
case 89:
                            var19 = var18;
                            var18 = var19.toLowerCase;
                            var17 = var18.bind(var19)();
case 87:
                            var7['currency'] = var17;
                            var7['price'] = var16;
                            var7['isGift'] = var14;
                            var7 = var11.bind(var4)(var7);
                            SaveGenerator(address=1334);
case 90:
                            return var7;
case 91:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=10);
                            if(var11) { _fun0003_ip = 92; continue _fun0003 }
case 93:
                            var14 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var11 = 26;
                            var11 = var16[var11];
                            var14 = var14.bind(var4)(var11);
                            var11 = var14.purchase;
                            var8 = var11.bind(var14)(var10, var8);
                            SaveGenerator(address=1376);
case 94:
                            return var8;
case 95:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                            if(var10) { _fun0003_ip = 96; continue _fun0003 }
case 60:
                            var10 = var9;
                            if(!(var15 != var10)) { _fun0003_ip = 97; continue _fun0003 }
case 98:
                            var10 = var9;
                            var9 = {};
                            var11 = _closure1_slot13;
                            var11 = var11.GOOGLE;
                            var9['paymentGateway'] = var11;
                            var9 = var10.bind(var4)(var9);
case 97: // try_end2
                            _fun0003_ip = 99; continue _fun0003;
case 96:
                            return var8;
case 92:
                            return var7;
case 100: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=10);
                            var3 = var11;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 27;
                            var7 = var9[var7];
                            var10 = var8.bind(var4)(var7);
                            var9 = var10.track;
                            var7 = _closure1_slot11;
                            var8 = var7.PAYMENT_FLOW_FAILED;
                            var7 = {};
                            var32 = var12;
                            var33 = var7;
                            var12 = copyDataProperties(var33, var32);
                            var12 = _closure1_slot13;
                            var12 = var12.GOOGLE;
                            var7[12] = var12;
                            var12 = var11.message;
                            var11 = 'error_message';
                            var7[10] = var12;
                            var7 = var9.bind(var10)(var8, var7);
                            var7 = var6;
                            if(!(var15 != var7)) { _fun0003_ip = 101; continue _fun0003 }
case 102:
                            var6 = var6.bind(var4)();
case 101:
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 25;
                            var6 = var8[var6];
                            var10 = var9.bind(var4)(var6);
                            var7 = var10.captureBillingException;
                            var6 = var3;
                            var7 = var7.bind(var10)(var6);
                            var10 = 11;
                            var7 = var8[var10];
                            var7 = var9.bind(var4)(var7);
                            var7 = var7.BillingError;
                            var7 = var6 instanceof var7;
                            var11 = var6;
                            if(var7) { _fun0003_ip = 103; continue _fun0003 }
case 104:
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var7 = var7[var10];
                            var7 = var9.bind(var4)(var7);
                            var7 = var7.BillingError;
                            var9 = var7.prototype;
                            var9 = Object.create(var9, {constructor: {value: var7}});
                            var34 = var9;
                            var33 = var6;
                            var7 = new var34[var7](var33, var32);
                            var11 = var7 instanceof Object ? var7 : var9;
case 103:
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var10 = 12;
                            var7 = var7[var10];
                            var9 = var9.bind(var4)(var7);
                            var7 = var9.isSpendingLimitError;
                            var12 = var7.bind(var9)(var11);
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            if(var12) { _fun0003_ip = 105; continue _fun0003 }
case 106:
                            var19 = 13;
                            var12 = var7[var19];
                            var12 = var9.bind(var4)(var12);
                            var14 = var12.intl;
                            var13 = var14.string;
                            var12 = var7[var19];
                            var12 = var9.bind(var4)(var12);
                            var12 = var12.t;
                            var12 = var12.LFFx5G;
                            var13 = var13.bind(var14)(var12);
                            var14 = var11.code;
                            var12 = 14;
                            var12 = var7[var12];
                            var12 = var9.bind(var4)(var12);
                            var12 = var12.ErrorCodes;
                            var12 = var12.UNKNOWN;
                            var12 = var14 !== var12;
                            if(!var12) { _fun0003_ip = 107; continue _fun0003 }
case 108:
                            var16 = var11.code;
                            var14 = -1;
                            var12 = var14 !== var16;
case 107:
                            if(!var12) { _fun0003_ip = 109; continue _fun0003 }
case 110:
                            var14 = var11.message;
                            var12 = var15 != var14;
case 109:
                            var14 = var13;
                            if(!var12) { _fun0003_ip = 111; continue _fun0003 }
case 112:
                            var14 = var11.message;
case 111:
                            var12 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var11 = 15;
                            var11 = var15[var11];
                            var13 = var12.bind(var4)(var11);
                            var12 = var13.show;
                            var11 = {};
                            var18 = _closure1_slot0;
                            var16 = var15[var19];
                            var16 = var18.bind(var4)(var16);
                            var17 = var16.intl;
                            var16 = var17.string;
                            var15 = var15[var19];
                            var15 = var18.bind(var4)(var15);
                            var15 = var15.t;
                            var15 = var15.U+H+kd;
                            var15 = var16.bind(var17)(var15);
                            var11['title'] = var15;
                            var11['body'] = var14;
                            var14 = true;
                            var11['isDismissable'] = var14;
                            var11 = var12.bind(var13)(var11);
                            _fun0003_ip = 113; continue _fun0003;
case 105:
                            var7 = var7[var10];
                            var9 = var9.bind(var4)(var7);
                            var7 = var9.showSpendingLimitReachedAlert;
                            var7 = var7.bind(var9)();
case 113:
                            var7 = _closure1_slot1;
                            var5 = 10;
                            var5 = var8[var5];
                            var5 = var7.bind(var4)(var5);
                            var5 = var6 instanceof var5;
                            if(var5) { _fun0003_ip = 114; continue _fun0003 }
case 99:
                            return var4;
case 114:
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