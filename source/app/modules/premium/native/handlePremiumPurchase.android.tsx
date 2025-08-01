// app/modules/premium/native/handlePremiumPurchase.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _validatePurchase() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 182; continue _fun0001 }
 10:
                    var7 = arg1;
                    var8 = arg2;
 16: // try_start_0
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
                    var6['product_id'] = var7;
                    var9 = var8;
                    var7 = null;
                    var9 = var7 == var9;
                    var7 = undefined;
                    if(var9) { _fun0001_ip = 94; continue _fun0001 }
 89:
                    var7 = var8.id;
 94:
                    var6['subscription_id'] = var7;
                    var2['body'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=118);
 116:
                    return var2;
 118:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 127; continue _fun0001 }
 124: // try_end0
                    return var3;
 127:
                    return var2;
 130: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var11 = var3;
                    var10 = var4;
                    var2 = new var11[var2](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 182:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var4 = 20;
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
            var2 = 10;
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
            var4 = 11;
            var4 = var8[var4];
            var7 = var5.bind(var2)(var4);
            var4 = var7.usePremiumTrialOffer;
            var7 = var4.bind(var7)();
            var _closure2_slot1 = var7;
            var4 = 12;
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
                            if(var4) { _fun0003_ip = 1244; continue _fun0003 }
 13:
                            var19 = var2.productId;
                            var16 = var2.skuId;
                            var22 = var2.analyticsLoadId;
                            var20 = var2.analyticsLocation;
                            var18 = var2.analyticsLocations;
                            var8 = var2.isGift;
                            var4 = undefined;
                            if(!(var8 === var4)) { _fun0003_ip = 57; continue _fun0003 }
 55:
                            var8 = false;
 57:
                            var11 = var8;
                            var8 = var2.isOneTimePurchase;
                            if(!(var8 === var4)) { _fun0003_ip = 72; continue _fun0003 }
 70:
                            var8 = false;
 72:
                            var10 = var8;
                            var8 = var2.allowPlanChange;
                            if(!(var8 === var4)) { _fun0003_ip = 87; continue _fun0003 }
 85:
                            var8 = true;
 87:
                            var23 = var8;
                            var14 = var2.applicationId;
                            var13 = var2.giftInfoOptions;
                            var9 = var2.onPurchaseComplete;
                            var6 = var2.onPurchaseError;
                            var7 = undefined;
                            var21 = undefined;
                            var12 = undefined;
                            SaveGenerator(address=123);
 121:
                            return var4;
 123:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0003_ip = 1241; continue _fun0003 }
 132:
                            var15 = _closure1_slot6;
                            var8 = var15.getId;
                            var7 = var8.bind(var15)();
                            var15 = _closure1_slot8;
                            var8 = var15.getProduct;
                            var25 = var19;
                            var24 = var8.bind(var15)(var25);
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var8 = 13;
                            var8 = var17[var8];
                            var17 = var15.bind(var4)(var8);
                            var15 = var17.getBasePurchaseFlowAnalyticsFields;
                            var8 = {};
                            var26 = var11;
                            var8['isGift'] = var26;
                            var8['analyticsLoadId'] = var22;
                            var8['analyticsLocation'] = var20;
                            var8['analyticsLocations'] = var18;
                            var8 = var15.bind(var17)(var8);
                            var21 = var8;
                            var22 = _closure1_slot5;
                            var17 = {};
                            var32 = var17;
                            var31 = var8;
                            var8 = copyDataProperties(var32, var31);
                            var20 = 'subscription_plan_gateway_plan_id';
                            var17[var20] = var25;
                            var8 = var16;
                            var18 = 'sku_id';
                            var17[var18] = var8;
                            var8 = null;
                            var15 = var8 == var24;
                            var26 = undefined;
                            if(var15) { _fun0003_ip = 280; continue _fun0003 }
 274:
                            var26 = var24.price;
 280:
                            var15 = 'price';
                            var17[var15] = var26;
                            var15 = var8 == var24;
                            var26 = undefined;
                            if(var15) { _fun0003_ip = 304; continue _fun0003 }
 298:
                            var26 = var24.price;
 304:
                            var15 = 'regular_price';
                            var17[var15] = var26;
                            var15 = var8 == var24;
                            var26 = undefined;
                            if(var15) { _fun0003_ip = 338; continue _fun0003 }
 322:
                            var27 = var24.currencyCode;
                            var15 = var27.toLowerCase;
                            var26 = var15.bind(var27)();
 338:
                            var15 = 'currency';
                            var17[var15] = var26;
                            var26 = var14;
                            var15 = 'application_id';
                            var17[var15] = var26;
                            var17 = var22.bind(var4)(var25, var17);
                            var17 = _closure2_slot1;
                            if(!(var8 != var17)) { _fun0003_ip = 395; continue _fun0003 }
 376:
                            var25 = var8 == var24;
                            var17 = undefined;
                            if(var25) { _fun0003_ip = 391; continue _fun0003 }
 385:
                            var17 = var24.offerIds;
 391:
                            if(!(var8 == var17)) { _fun0003_ip = 470; continue _fun0003 }
 395:
                            var24 = _closure2_slot2;
                            var17 = null;
                            if(!var24) { _fun0003_ip = 468; continue _fun0003 }
 404:
                            var25 = var19;
                            var27 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var26 = 14;
                            var24 = var24[var26];
                            var24 = var27.bind(var4)(var24);
                            var24 = var24.ProductIds;
                            var24 = var24.PREMIUM_TIER_2_MONTHLY;
                            var17 = null;
                            if(!(var25 === var24)) { _fun0003_ip = 468; continue _fun0003 }
 445:
                            var25 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var24 = var24[var26];
                            var24 = var25.bind(var4)(var24);
                            var17 = var24.BOGO_OFFER_ID;
 468:
                            _fun0003_ip = 529; continue _fun0003;
 470:
                            var25 = _closure1_slot0;
                            var26 = _closure1_slot2;
                            var24 = 14;
                            var24 = var26[var24];
                            var24 = var25.bind(var4)(var24);
                            var25 = var24.TrialIdToProductOfferId;
                            var24 = _closure2_slot1;
                            var24 = var24.trial_id;
                            var26 = var25[var24];
                            var25 = var8 == var26;
                            var24 = undefined;
                            if(var25) { _fun0003_ip = 526; continue _fun0003 }
 519:
                            var25 = var19;
                            var24 = var26[var25];
 526:
                            var17 = var24;
 529:
                            var12 = var17;
                            var24 = _closure1_slot0;
                            var25 = _closure1_slot2;
                            var17 = 15;
                            var17 = var25[var17];
                            var26 = var24.bind(var4)(var17);
                            var25 = var26.trackPaymentFlowStartedAnalyticsAndCTP;
                            var24 = {};
                            var31 = var21;
                            var32 = var24;
                            var17 = copyDataProperties(var32, var31);
                            var17 = var19;
                            var24[var20] = var17;
                            var17 = var16;
                            var24[var18] = var17;
                            var17 = _closure1_slot11;
                            var27 = var17.GOOGLE;
                            var17 = 'payment_gateway';
                            var24[var17] = var27;
                            var27 = var14;
                            var24[var15] = var27;
                            var24 = var25.bind(var26)(var24);
 618: // try_start_0
                            var24 = var11;
                            if(var24) { _fun0003_ip = 838; continue _fun0003 }
 627:
                            if(var10) { _fun0003_ip = 838; continue _fun0003 }
 633:
                            var24 = _closure2_slot3;
                            var10 = var24;
                            if(!var24) { _fun0003_ip = 646; continue _fun0003 }
 643:
                            var10 = !var23;
 646:
                            if(var10) { _fun0003_ip = 1047; continue _fun0003 }
 652:
                            var24 = _closure2_slot5;
                            var24 = var8 != var24;
                            var23 = var24;
                            if(!var24) { _fun0003_ip = 674; continue _fun0003 }
 666:
                            var24 = _closure2_slot6;
                            var23 = var8 != var24;
 674:
                            var10 = var23;
                            if(!var23) { _fun0003_ip = 688; continue _fun0003 }
 680:
                            var23 = _closure2_slot4;
                            var10 = var8 != var23;
 688:
                            if(!var10) { _fun0003_ip = 739; continue _fun0003 }
 691:
                            var23 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var10 = 17;
                            var10 = var24[var10];
                            var27 = var23.bind(var4)(var10);
                            var26 = var27.updatePendingDowngrade;
                            var32 = var19;
                            var31 = _closure2_slot5;
                            var30 = _closure2_slot6;
                            var29 = _closure2_slot4;
                            var33 = var27;
                            var10 = var33[var26](var32, var31, var30, var29, var28);
 739:
                            var24 = var19;
                            var23 = _closure2_slot0;
                            var10 = function validatePurchase() {
                                var1 = undefined;
                                var4 = _closure1_slot12;
                                var3 = var4.apply;
                                var1 = arguments;
                                var2 = var1;
                                var1 = this;
                                var1 = var3.bind(var4)(var1, var2);
                                return var1;
                            };
                            var10 = var10.bind(var4)(var24, var23);
                            SaveGenerator(address=763);
 761:
                            return var10;
 763:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=22);
                            if(var23) { _fun0003_ip = 835; continue _fun0003 }
 769:
                            var24 = _closure1_slot0;
                            var25 = _closure1_slot2;
                            var23 = 17;
                            var23 = var25[var23];
                            var27 = var24.bind(var4)(var23);
                            var26 = var27.subscribe;
                            var32 = var19;
                            var31 = var7;
                            var30 = _closure2_slot5;
                            var29 = _closure2_slot6;
                            var28 = var12;
                            var33 = var27;
                            var12 = var33[var26](var32, var31, var30, var29, var28, var27);
                            SaveGenerator(address=823);
 821:
                            return var12;
 823:
                            ResumeGenerator(result_out_reg=11, return_bool_out_reg=21);
                            if(!var22) { _fun0003_ip = 1047; continue _fun0003 }
 832: // try_end0
                            return var12;
 835:
                            return var10;
 838: // try_start_1
                            var10 = var11;
                            if(!var11) { _fun0003_ip = 851; continue _fun0003 }
 844:
                            var11 = var13;
                            var10 = var8 != var11;
 851:
                            if(!var10) { _fun0003_ip = 1002; continue _fun0003 }
 857:
                            var22 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var12 = 16;
                            var11 = var11[var12];
                            var11 = var22.bind(var4)(var11);
                            var11 = var11.giftInfoOptionsCache;
                            var11 = var8 != var11;
                            var10 = var11;
                            if(!var11) { _fun0003_ip = 927; continue _fun0003 }
 893:
                            var22 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var11 = var11[var12];
                            var11 = var22.bind(var4)(var11);
                            var22 = var11.giftInfoOptionsCache;
                            var11 = var19;
                            var11 = var22[var11];
                            var10 = var8 != var11;
 927:
                            if(!var10) { _fun0003_ip = 960; continue _fun0003 }
 930:
                            var11 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var10 = var10[var12];
                            var10 = var11.bind(var4)(var10);
                            var11 = var10.giftInfoOptionsCache;
                            var10 = var19;
                            var10 = delete var11[var10];
 960:
                            var11 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var10 = var10[var12];
                            var10 = var11.bind(var4)(var10);
                            var12 = var10.giftInfoOptionsCache;
                            var11 = var19;
                            var10 = {};
                            var31 = var13;
                            var32 = var10;
                            var13 = copyDataProperties(var32, var31);
                            var12[var11] = var10;
 1002:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var10 = 17;
                            var10 = var12[var10];
                            var12 = var11.bind(var4)(var10);
                            var11 = var12.purchase;
                            var10 = var19;
                            var7 = var11.bind(var12)(var10, var7);
                            SaveGenerator(address=1041);
 1039:
                            return var7;
 1041:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                            if(var10) { _fun0003_ip = 1063; continue _fun0003 }
 1047:
                            var10 = var9;
                            if(!(var8 != var10)) { _fun0003_ip = 1058; continue _fun0003 }
 1054:
                            var9 = var9.bind(var4)();
 1058: // try_end1
                            _fun0003_ip = 1236; continue _fun0003;
 1063:
                            return var7;
 1066: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=9);
                            var3 = var10;
                            var9 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var7 = 18;
                            var7 = var11[var7];
                            var13 = var9.bind(var4)(var7);
                            var12 = var13.track;
                            var7 = _closure1_slot9;
                            var9 = var7.PAYMENT_FLOW_FAILED;
                            var7 = {};
                            var31 = var21;
                            var32 = var7;
                            var21 = copyDataProperties(var32, var31);
                            var7[var20] = var19;
                            var7[var18] = var16;
                            var16 = _closure1_slot11;
                            var16 = var16.GOOGLE;
                            var7[var17] = var16;
                            var7[var15] = var14;
                            var15 = var10.message;
                            var14 = 'error_message';
                            var7[var14] = var15;
                            var7 = var12.bind(var13)(var9, var7);
                            var9 = _closure1_slot0;
                            var7 = 19;
                            var7 = var11[var7];
                            var9 = var9.bind(var4)(var7);
                            var7 = var9.captureBillingException;
                            var7 = var7.bind(var9)(var10);
                            var7 = var6;
                            if(!(var8 != var7)) { _fun0003_ip = 1206; continue _fun0003 }
 1202:
                            var6 = var6.bind(var4)();
 1206:
                            var6 = var3;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var5 = 9;
                            var5 = var8[var5];
                            var5 = var7.bind(var4)(var5);
                            var5 = var6 instanceof var5;
                            if(var5) { _fun0003_ip = 1239; continue _fun0003 }
 1236:
                            return var4;
 1239:
                            throw var3;
 1241:
                            return var2;
 1244:
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