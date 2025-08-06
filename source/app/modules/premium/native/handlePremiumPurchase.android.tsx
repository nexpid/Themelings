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
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 198; continue _fun0001 }
 10:
                    var9 = arg1;
                    var10 = arg2;
                    var8 = arg3;
                    var7 = arg4;
 22: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var6 = _closure1_slot10;
                    var6 = var6.GOOGLE_PLAY_VALIDATE_PURCHASE;
                    var2['url'] = var6;
                    var6 = {};
                    var6['product_id'] = var9;
                    var11 = var10;
                    var9 = null;
                    var11 = var9 == var11;
                    var9 = undefined;
                    if(var11) { _fun0001_ip = 100; continue _fun0001 }
 95:
                    var9 = var10.id;
 100:
                    var6['subscription_id'] = var9;
                    var6['currency'] = var8;
                    var6['is_gift'] = var7;
                    var2['body'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=134);
 132:
                    return var2;
 134:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 143; continue _fun0001 }
 140: // try_end0
                    return var3;
 143:
                    return var2;
 146: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var13 = var3;
                    var12 = var4;
                    var2 = new var13[var2](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 198:
                    return var1;
                }
            };
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
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/handlePremiumPurchase.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHandlePremiumPurchase() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 12;
            var4 = var8[var2];
            var2 = undefined;
            var9 = var5.bind(var2)(var4);
            var7 = var9.useStateFromStores;
            var4 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var7.bind(var9)(var6, var4);
            var _closure2_slot0 = var6;
            var4 = 13;
            var4 = var8[var4];
            var7 = var5.bind(var2)(var4);
            var4 = var7.usePremiumTrialOffer;
            var7 = var4.bind(var7)();
            var _closure2_slot1 = var7;
            var4 = 14;
            var4 = var8[var4];
            var8 = var5.bind(var2)(var4);
            var5 = var8.useIsEligibleForBogoPromotion;
            var4 = false;
            var5 = var5.bind(var8)(var4);
            var _closure2_slot2 = var5;
            var4 = null;
            var11 = var4 != var6;
            var _closure2_slot3 = var11;
            var9 = var4 == var6;
            var8 = undefined;
            if(var9) { _fun0002_ip = 138; continue _fun0002 }
 133:
            var8 = var6.id;
 138:
            var _closure2_slot4 = var8;
            var9 = var4 == var6;
            var10 = undefined;
            if(var9) { _fun0002_ip = 157; continue _fun0002 }
 151:
            var10 = var6.paymentGatewayPlanId;
 157:
            var _closure2_slot5 = var10;
            var4 = var4 == var6;
            var9 = undefined;
            if(var4) { _fun0002_ip = 176; continue _fun0002 }
 170:
            var9 = var6.paymentGatewaySubscriptionId;
 176:
            var _closure2_slot6 = var9;
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 1488; continue _fun0003 }
 13:
                            var18 = var2.productId;
                            var15 = var2.skuId;
                            var27 = var2.analyticsLoadId;
                            var19 = var2.analyticsLocation;
                            var17 = var2.analyticsLocations;
                            var8 = var2.isGift;
                            var4 = undefined;
                            if(!(var8 === var4)) { _fun0003_ip = 57; continue _fun0003 }
 55:
                            var8 = false;
 57:
                            var7 = var8;
                            var8 = var2.isOneTimePurchase;
                            if(!(var8 === var4)) { _fun0003_ip = 72; continue _fun0003 }
 70:
                            var8 = false;
 72:
                            var12 = var8;
                            var8 = var2.allowPlanChange;
                            if(!(var8 === var4)) { _fun0003_ip = 87; continue _fun0003 }
 85:
                            var8 = true;
 87:
                            var22 = var8;
                            var13 = var2.applicationId;
                            var25 = var2.giftInfoOptions;
                            var10 = var2.onPurchaseComplete;
                            var6 = var2.onPurchaseError;
                            var9 = undefined;
                            var24 = undefined;
                            var20 = undefined;
                            var21 = undefined;
                            var23 = undefined;
                            SaveGenerator(address=127);
 125:
                            return var4;
 127:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0003_ip = 1485; continue _fun0003 }
 136:
                            var11 = _closure1_slot6;
                            var8 = var11.getId;
                            var9 = var8.bind(var11)();
                            var11 = _closure1_slot8;
                            var8 = var11.getProduct;
                            var26 = var18;
                            var14 = var8.bind(var11)(var26);
                            var24 = var14;
                            var11 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var8 = 15;
                            var8 = var16[var8];
                            var16 = var11.bind(var4)(var8);
                            var11 = var16.getBasePurchaseFlowAnalyticsFields;
                            var8 = {};
                            var28 = var7;
                            var8['isGift'] = var28;
                            var8['analyticsLoadId'] = var27;
                            var8['analyticsLocation'] = var19;
                            var8['analyticsLocations'] = var17;
                            var8 = var11.bind(var16)(var8);
                            var20 = var8;
                            var16 = _closure1_slot5;
                            var11 = {};
                            var35 = var11;
                            var34 = var8;
                            var8 = copyDataProperties(var35, var34);
                            var19 = 'subscription_plan_gateway_plan_id';
                            var11[var19] = var26;
                            var8 = var15;
                            var17 = 'sku_id';
                            var11[var17] = var8;
                            var8 = null;
                            var14 = var8 == var14;
                            var27 = undefined;
                            if(var14) { _fun0003_ip = 290; continue _fun0003 }
 281:
                            var14 = var24;
                            var27 = var14.price;
 290:
                            var14 = 'price';
                            var11[var14] = var27;
                            var14 = var24;
                            var14 = var8 == var14;
                            var27 = undefined;
                            if(var14) { _fun0003_ip = 320; continue _fun0003 }
 311:
                            var14 = var24;
                            var27 = var14.price;
 320:
                            var14 = 'regular_price';
                            var11[var14] = var27;
                            var14 = var24;
                            var14 = var8 == var14;
                            var27 = undefined;
                            if(var14) { _fun0003_ip = 360; continue _fun0003 }
 341:
                            var14 = var24;
                            var28 = var14.currencyCode;
                            var14 = var28.toLowerCase;
                            var27 = var14.bind(var28)();
 360:
                            var14 = 'currency';
                            var11[var14] = var27;
                            var27 = var13;
                            var14 = 'application_id';
                            var11[var14] = var27;
                            var11 = var16.bind(var4)(var26, var11);
                            var16 = _closure2_slot1;
                            if(!(var8 != var16)) { _fun0003_ip = 423; continue _fun0003 }
 398:
                            var16 = var24;
                            var26 = var8 == var16;
                            var16 = undefined;
                            if(var26) { _fun0003_ip = 419; continue _fun0003 }
 410:
                            var26 = var24;
                            var16 = var26.offerIds;
 419:
                            if(!(var8 == var16)) { _fun0003_ip = 498; continue _fun0003 }
 423:
                            var26 = _closure2_slot2;
                            var16 = null;
                            if(!var26) { _fun0003_ip = 496; continue _fun0003 }
 432:
                            var27 = var18;
                            var29 = _closure1_slot0;
                            var26 = _closure1_slot2;
                            var28 = 16;
                            var26 = var26[var28];
                            var26 = var29.bind(var4)(var26);
                            var26 = var26.ProductIds;
                            var26 = var26.PREMIUM_TIER_2_MONTHLY;
                            var16 = null;
                            if(!(var27 === var26)) { _fun0003_ip = 496; continue _fun0003 }
 473:
                            var27 = _closure1_slot0;
                            var26 = _closure1_slot2;
                            var26 = var26[var28];
                            var26 = var27.bind(var4)(var26);
                            var16 = var26.BOGO_OFFER_ID;
 496:
                            _fun0003_ip = 557; continue _fun0003;
 498:
                            var27 = _closure1_slot0;
                            var28 = _closure1_slot2;
                            var26 = 16;
                            var26 = var28[var26];
                            var26 = var27.bind(var4)(var26);
                            var27 = var26.TrialIdToProductOfferId;
                            var26 = _closure2_slot1;
                            var26 = var26.trial_id;
                            var28 = var27[var26];
                            var27 = var8 == var28;
                            var26 = undefined;
                            if(var27) { _fun0003_ip = 554; continue _fun0003 }
 547:
                            var27 = var18;
                            var26 = var28[var27];
 554:
                            var16 = var26;
 557:
                            var21 = var16;
                            var26 = _closure1_slot0;
                            var27 = _closure1_slot2;
                            var16 = 17;
                            var16 = var27[var16];
                            var28 = var26.bind(var4)(var16);
                            var27 = var28.trackPaymentFlowStartedAnalyticsAndCTP;
                            var26 = {};
                            var34 = var20;
                            var35 = var26;
                            var16 = copyDataProperties(var35, var34);
                            var16 = var18;
                            var26[var19] = var16;
                            var16 = var15;
                            var26[var17] = var16;
                            var16 = _closure1_slot11;
                            var29 = var16.GOOGLE;
                            var16 = 'payment_gateway';
                            var26[var16] = var29;
                            var29 = var13;
                            var26[var14] = var29;
                            var26 = var27.bind(var28)(var26);
 646: // try_start_0
                            var26 = var7;
                            if(var26) { _fun0003_ip = 863; continue _fun0003 }
 655:
                            if(var12) { _fun0003_ip = 863; continue _fun0003 }
 661:
                            var26 = _closure2_slot3;
                            var12 = var26;
                            if(!var26) { _fun0003_ip = 674; continue _fun0003 }
 671:
                            var12 = !var22;
 674:
                            if(var12) { _fun0003_ip = 1157; continue _fun0003 }
 680:
                            var26 = _closure2_slot5;
                            var26 = var8 != var26;
                            var22 = var26;
                            if(!var26) { _fun0003_ip = 702; continue _fun0003 }
 694:
                            var26 = _closure2_slot6;
                            var22 = var8 != var26;
 702:
                            var12 = var22;
                            if(!var22) { _fun0003_ip = 716; continue _fun0003 }
 708:
                            var22 = _closure2_slot4;
                            var12 = var8 != var22;
 716:
                            if(!var12) { _fun0003_ip = 767; continue _fun0003 }
 719:
                            var22 = _closure1_slot0;
                            var26 = _closure1_slot2;
                            var12 = 19;
                            var12 = var26[var12];
                            var29 = var22.bind(var4)(var12);
                            var28 = var29.updatePendingDowngrade;
                            var35 = var18;
                            var34 = _closure2_slot5;
                            var33 = _closure2_slot6;
                            var32 = _closure2_slot4;
                            var36 = var29;
                            var12 = var36[var28](var35, var34, var33, var32, var31);
 767:
                            var26 = _closure1_slot12;
                            var22 = var18;
                            var12 = _closure2_slot0;
                            var12 = var26.bind(var4)(var22, var12);
                            SaveGenerator(address=788);
 786:
                            return var12;
 788:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=21);
                            if(var22) { _fun0003_ip = 860; continue _fun0003 }
 794:
                            var26 = _closure1_slot0;
                            var27 = _closure1_slot2;
                            var22 = 19;
                            var22 = var27[var22];
                            var30 = var26.bind(var4)(var22);
                            var29 = var30.subscribe;
                            var35 = var18;
                            var34 = var9;
                            var33 = _closure2_slot5;
                            var32 = _closure2_slot6;
                            var31 = var21;
                            var36 = var30;
                            var21 = var36[var29](var35, var34, var33, var32, var31, var30);
                            SaveGenerator(address=848);
 846:
                            return var21;
 848:
                            ResumeGenerator(result_out_reg=20, return_bool_out_reg=21);
                            if(!var22) { _fun0003_ip = 1157; continue _fun0003 }
 857: // try_end0
                            return var21;
 860:
                            return var12;
 863: // try_start_1
                            var21 = var7;
                            var12 = var21;
                            if(!var21) { _fun0003_ip = 879; continue _fun0003 }
 872:
                            var21 = var25;
                            var12 = var8 != var21;
 879:
                            if(!var12) { _fun0003_ip = 1030; continue _fun0003 }
 885:
                            var26 = _closure1_slot1;
                            var21 = _closure1_slot2;
                            var22 = 18;
                            var21 = var21[var22];
                            var21 = var26.bind(var4)(var21);
                            var21 = var21.giftInfoOptionsCache;
                            var21 = var8 != var21;
                            var12 = var21;
                            if(!var21) { _fun0003_ip = 955; continue _fun0003 }
 921:
                            var26 = _closure1_slot1;
                            var21 = _closure1_slot2;
                            var21 = var21[var22];
                            var21 = var26.bind(var4)(var21);
                            var26 = var21.giftInfoOptionsCache;
                            var21 = var18;
                            var21 = var26[var21];
                            var12 = var8 != var21;
 955:
                            if(!var12) { _fun0003_ip = 988; continue _fun0003 }
 958:
                            var21 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var12 = var12[var22];
                            var12 = var21.bind(var4)(var12);
                            var21 = var12.giftInfoOptionsCache;
                            var12 = var18;
                            var12 = delete var21[var12];
 988:
                            var21 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var12 = var12[var22];
                            var12 = var21.bind(var4)(var12);
                            var22 = var12.giftInfoOptionsCache;
                            var21 = var18;
                            var12 = {};
                            var34 = var25;
                            var35 = var12;
                            var25 = copyDataProperties(var35, var34);
                            var22[var21] = var12;
 1030:
                            var22 = _closure1_slot12;
                            var21 = var18;
                            var12 = _closure2_slot0;
                            var11 = var24;
                            var25 = var8 == var11;
                            var11 = undefined;
                            if(var25) { _fun0003_ip = 1084; continue _fun0003 }
 1053:
                            var24 = var24.currencyCode;
                            var23 = var24;
                            var24 = var8 == var24;
                            var11 = undefined;
                            if(var24) { _fun0003_ip = 1084; continue _fun0003 }
 1071:
                            var24 = var23;
                            var23 = var24.toLowerCase;
                            var11 = var23.bind(var24)();
 1084:
                            var32 = var7;
                            var36 = undefined;
                            var35 = var21;
                            var34 = var12;
                            var33 = var11;
                            var7 = var36[var22](var35, var34, var33, var32, var31);
                            SaveGenerator(address=1106);
 1104:
                            return var7;
 1106:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=10);
                            if(var11) { _fun0003_ip = 1176; continue _fun0003 }
 1112:
                            var12 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var11 = 19;
                            var11 = var21[var11];
                            var21 = var12.bind(var4)(var11);
                            var12 = var21.purchase;
                            var11 = var18;
                            var9 = var12.bind(var21)(var11, var9);
                            SaveGenerator(address=1151);
 1149:
                            return var9;
 1151:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                            if(var11) { _fun0003_ip = 1173; continue _fun0003 }
 1157:
                            var11 = var10;
                            if(!(var8 != var11)) { _fun0003_ip = 1168; continue _fun0003 }
 1164:
                            var10 = var10.bind(var4)();
 1168: // try_end1
                            _fun0003_ip = 1480; continue _fun0003;
 1173:
                            return var9;
 1176:
                            return var7;
 1179: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=11);
                            var3 = var12;
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var7 = 20;
                            var7 = var10[var7];
                            var11 = var9.bind(var4)(var7);
                            var10 = var11.track;
                            var7 = _closure1_slot9;
                            var9 = var7.PAYMENT_FLOW_FAILED;
                            var7 = {};
                            var34 = var20;
                            var35 = var7;
                            var20 = copyDataProperties(var35, var34);
                            var7[var19] = var18;
                            var7[var17] = var15;
                            var15 = _closure1_slot11;
                            var15 = var15.GOOGLE;
                            var7[var16] = var15;
                            var7[var14] = var13;
                            var13 = var12.message;
                            var12 = 'error_message';
                            var7[var12] = var13;
                            var7 = var10.bind(var11)(var9, var7);
                            var7 = var6;
                            if(!(var8 != var7)) { _fun0003_ip = 1292; continue _fun0003 }
 1288:
                            var6 = var6.bind(var4)();
 1292:
                            var14 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 21;
                            var6 = var8[var6];
                            var9 = var14.bind(var4)(var6);
                            var7 = var9.captureBillingException;
                            var6 = var3;
                            var7 = var7.bind(var9)(var6);
                            var7 = _closure1_slot1;
                            var5 = 10;
                            var5 = var8[var5];
                            var10 = var7.bind(var4)(var5);
                            var9 = var10.show;
                            var5 = {};
                            var11 = 11;
                            var12 = var8[var11];
                            var12 = var14.bind(var4)(var12);
                            var15 = var12.intl;
                            var13 = var15.string;
                            var12 = var8[var11];
                            var12 = var14.bind(var4)(var12);
                            var12 = var12.t;
                            var12 = var12.U+H+kZ;
                            var12 = var13.bind(var15)(var12);
                            var5['title'] = var12;
                            var12 = var8[var11];
                            var12 = var14.bind(var4)(var12);
                            var13 = var12.intl;
                            var12 = var13.string;
                            var11 = var8[var11];
                            var11 = var14.bind(var4)(var11);
                            var11 = var11.t;
                            var11 = var11.LFFx5O;
                            var11 = var12.bind(var13)(var11);
                            var5['body'] = var11;
                            var11 = true;
                            var5['isDismissable'] = var11;
                            var5 = var9.bind(var10)(var5);
                            var5 = 9;
                            var5 = var8[var5];
                            var5 = var7.bind(var4)(var5);
                            var5 = var6 instanceof var5;
                            if(var5) { _fun0003_ip = 1483; continue _fun0003 }
 1480:
                            return var4;
 1483:
                            throw var3;
 1485:
                            return var2;
 1488:
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
            var1 = new Array(7);
            var1[0] = var11;
            var1[1] = var10;
            var1[2] = var9;
            var1[3] = var8;
            var1[4] = var7;
            var1[5] = var6;
            var1[6] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useHandlePremiumPurchase'] = var2;
    return var1;
})();