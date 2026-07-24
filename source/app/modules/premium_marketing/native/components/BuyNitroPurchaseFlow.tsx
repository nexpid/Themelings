// app/modules/premium_marketing/native/components/BuyNitroPurchaseFlow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function BuyNitroPurchaseRunner(arg1) {
        var2 = arg1;
        var11 = var2.item;
        var _closure2_slot0 = var11;
        var13 = var2.analyticsLocations;
        var _closure2_slot1 = var13;
        var15 = var2.analyticsLoadId;
        var _closure2_slot2 = var15;
        var14 = var2.hasEmittedPaymentFlowStartedRef;
        var _closure2_slot3 = var14;
        var12 = var2.applicationId;
        var _closure2_slot4 = var12;
        var10 = var2.expectedPriceString;
        var _closure2_slot5 = var10;
        var9 = var2.onExit;
        var _closure2_slot6 = var9;
        var8 = var2.onOrderPriceMismatch;
        var _closure2_slot7 = var8;
        var7 = var2.onHostSheetClose;
        var _closure2_slot8 = var7;
        var6 = var2.onPaymentSuccess;
        var _closure2_slot9 = var6;
        var5 = var2.onPaymentDismiss;
        var _closure2_slot10 = var5;
        var4 = _closure1_slot5;
        var16 = undefined;
        var3 = function(arg1) {
            var1 = arg1;
            var1 = var1.orderRecord;
            return var1;
        };
        var18 = var4.bind(var16)(var3);
        var _closure2_slot11 = var18;
        var4 = _closure1_slot5;
        var3 = function(arg1) {
            var1 = arg1;
            var1 = var1.orderRequired;
            return var1;
        };
        var17 = var4.bind(var16)(var3);
        var _closure2_slot12 = var17;
        var4 = _closure1_slot0;
        var19 = _closure1_slot2;
        var3 = 7;
        var3 = var19[var3];
        var4 = var4.bind(var16)(var3);
        var3 = var4.useHandlePremiumPurchase;
        var16 = var3.bind(var4)();
        var _closure2_slot13 = var16;
        var19 = _closure1_slot4;
        var4 = var19.useRef;
        var3 = false;
        var3 = var4.bind(var19)(var3);
        var _closure2_slot14 = var3;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(14);
        var2[0] = var18;
        var2[1] = var17;
        var2[2] = var16;
        var2[3] = var15;
        var2[4] = var14;
        var2[5] = var13;
        var2[6] = var12;
        var2[7] = var11;
        var2[8] = var10;
        var2[9] = var9;
        var2[10] = var8;
        var2[11] = var7;
        var2[12] = var6;
        var2[13] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = function _runPurchase() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                                var3 = _closure2_slot12;
                                if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                                var3 = _closure2_slot11;
                                var5 = null;
                                var3 = var5 == var3;
                                var4 = undefined;
                                var6 = undefined;
                                if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                                var3 = _closure2_slot11;
                                var8 = var3.checkoutContextRecord;
                                var3 = var5 == var8;
                                var6 = undefined;
                                if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                                var7 = var8.getAvailablePlanForItems;
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var3 = 16;
                                var3 = var10[var3];
                                var10 = var9.bind(var4)(var3);
                                var9 = var10.getSubscriptionItemsForProduct;
                                var3 = _closure2_slot0;
                                var3 = var3.productId;
                                var3 = var9.bind(var10)(var3);
                                var7 = var7.bind(var8)(var3);
                                var3 = var5 == var7;
                                var6 = undefined;
                                if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 9:
                                var3 = var7.getPriceString;
                                var6 = var3.bind(var7)();
case 6:
                                var7 = var5 != var6;
                                var3 = null;
                                if(!var7) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                                var3 = var6;
case 10:
                                var6 = _closure2_slot5;
                                if(!(var5 != var6)) { _fun0002_ip = 4; continue _fun0002 }
case 12:
                                if(!(var5 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 13:
                                var5 = _closure2_slot5;
                                if(!(var3 === var5)) { _fun0002_ip = 14; continue _fun0002 }
case 4:
                                var8 = _closure1_slot1;
                                var17 = _closure1_slot2;
                                var5 = 17;
                                var7 = var17[var5];
                                var5 = undefined;
                                var11 = var8.bind(var5)(var7);
                                var10 = var11.track;
                                var7 = _closure1_slot8;
                                var8 = var7.PAYMENT_FLOW_STEP;
                                var16 = _closure1_slot0;
                                var15 = 10;
                                var7 = var17[var15];
                                var14 = var16.bind(var5)(var7);
                                var13 = var14.getPaymentFlowStepAnalyticsFields;
                                var12 = _closure3_slot1;
                                var7 = {};
                                var18 = var17[var15];
                                var18 = var16.bind(var5)(var18);
                                var18 = var18.PaymentFlowStep;
                                var18 = var18.PLAN_SELECT;
                                var7['from_step'] = var18;
                                var15 = var17[var15];
                                var15 = var16.bind(var5)(var15);
                                var15 = var15.PaymentFlowStep;
                                var15 = var15.EXTERNAL_PAYMENT;
                                var7['to_step'] = var15;
                                var15 = _closure2_slot0;
                                var15 = var15.productId;
                                var7['subscription_plan_gateway_plan_id'] = var15;
                                var15 = _closure3_slot0;
                                var7['sku_id'] = var15;
                                var7 = var13.bind(var14)(var12, var7);
                                var7 = var10.bind(var11)(var8, var7);
case 15: // try_start_0
                                var8 = _closure2_slot13;
                                var7 = {};
                                var10 = _closure2_slot0;
                                var10 = var10.productId;
                                var7['productId'] = var10;
                                var9 = _closure3_slot1;
                                var9 = var9.location;
                                var7['analyticsLocation'] = var9;
                                var9 = _closure2_slot2;
                                var7['analyticsLoadId'] = var9;
                                var9 = _closure2_slot1;
                                var7['analyticsLocations'] = var9;
                                var10 = _closure2_slot11;
                                var9 = null;
                                var10 = var9 == var10;
                                var9 = undefined;
                                if(var10) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                                var10 = _closure2_slot11;
                                var9 = var10.id;
case 16:
                                var7['orderId'] = var9;
                                var7 = var8.bind(var5)(var7);
                                SaveGenerator(address=418);
case 18:
                                return var7;
case 19:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                                if(var8) { _fun0002_ip = 20; continue _fun0002 }
case 21: // try_end0
                                _fun0002_ip = 22; continue _fun0002;
case 20:
                                return var7;
case 23: // catch_target0
                                CatchBlockStart(arg_register=7);
                                var9 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var7 = 18;
                                var7 = var10[var7];
                                var7 = var9.bind(var5)(var7);
                                var7 = var8 instanceof var7;
                                if(!var7) { _fun0002_ip = 22; continue _fun0002 }
case 24:
                                var12 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var7 = 19;
                                var7 = var13[var7];
                                var8 = var12.bind(var5)(var7);
                                var7 = var8.fetchSubscriptions;
                                var7 = var7.bind(var8)();
                                var7 = _closure1_slot1;
                                var6 = 14;
                                var6 = var13[var6];
                                var8 = var7.bind(var5)(var6);
                                var7 = var8.show;
                                var6 = {};
                                var9 = 15;
                                var10 = var13[var9];
                                var10 = var12.bind(var5)(var10);
                                var14 = var10.intl;
                                var11 = var14.string;
                                var10 = var13[var9];
                                var10 = var12.bind(var5)(var10);
                                var10 = var10.t;
                                var10 = var10.U+H+kd;
                                var10 = var11.bind(var14)(var10);
                                var6['title'] = var10;
                                var10 = var13[var9];
                                var10 = var12.bind(var5)(var10);
                                var11 = var10.intl;
                                var10 = var11.string;
                                var9 = var13[var9];
                                var9 = var12.bind(var5)(var9);
                                var9 = var9.t;
                                var9 = var9.F9ktNa;
                                var9 = var10.bind(var11)(var9);
                                var6['body'] = var9;
                                var9 = true;
                                var6['hideActionSheet'] = var9;
                                var6 = var7.bind(var8)(var6);
case 22:
                                var6 = _closure2_slot6;
                                var6 = var6.bind(var5)();
                                return var5;
case 14:
                                var2 = _closure2_slot7;
                                var2 = var2.bind(var4)(var3);
                                var2 = undefined;
                                return var2;
case 2:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot2 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot2 = var2;
                var3 = _closure2_slot14;
                var3 = var3.current;
                if(var3) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                var3 = _closure2_slot12;
                if(!var3) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                var4 = _closure2_slot11;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 25; continue _fun0001 }
case 27:
                var3 = _closure2_slot14;
                var7 = true;
                var3['current'] = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var12 = 8;
                var4 = var9[var12];
                var5 = undefined;
                var6 = var8.bind(var5)(var4);
                var4 = var6.isMobileWebRedirectCheckoutEnabled;
                var4 = var4.bind(var6)();
                var6 = 9;
                var10 = var9[var6];
                var11 = var8.bind(var5)(var10);
                var10 = var11.castPremiumSubscriptionAsSkuId;
                var13 = _closure1_slot1;
                var6 = var9[var6];
                var14 = var13.bind(var5)(var6);
                var13 = var14.getSkuIdForPremiumType;
                var6 = _closure2_slot0;
                var6 = var6.premiumTier;
                var6 = var13.bind(var14)(var6);
                var10 = var10.bind(var11)(var6);
                var _closure3_slot0 = var10;
                var6 = 10;
                var6 = var9[var6];
                var9 = var8.bind(var5)(var6);
                var8 = var9.getBasePurchaseFlowAnalyticsFields;
                var6 = {};
                var11 = _closure2_slot2;
                var6['analyticsLoadId'] = var11;
                var11 = {};
                var13 = _closure1_slot9;
                var13 = var13.BUTTON_CTA;
                var11['object'] = var13;
                var13 = _closure1_slot10;
                var13 = var13.BUY;
                var11['objectType'] = var13;
                var13 = _closure1_slot11;
                var13 = var13.USER_SETTINGS;
                var11['page'] = var13;
                var13 = _closure1_slot12;
                var13 = var13.SETTINGS_PREMIUM;
                var11['section'] = var13;
                var6['analyticsLocation'] = var11;
                var11 = _closure2_slot1;
                var6['analyticsLocations'] = var11;
                var9 = var8.bind(var9)(var6);
                var _closure3_slot1 = var9;
                var6 = _closure2_slot3;
                var6 = var6.current;
                if(var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                var6 = _closure2_slot3;
                var6['current'] = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 11;
                var6 = var8[var6];
                var8 = var7.bind(var5)(var6);
                var7 = var8.trackPaymentFlowStartedAnalyticsAndCTP;
                var6 = {};
                var18 = var6;
                var17 = var9;
                var9 = copyDataProperties(var18, var17);
                var11 = _closure2_slot4;
                var9 = 'application_id';
                var6[8] = var11;
                var9 = _closure2_slot0;
                var11 = var9.basePlanId;
                var9 = 'subscription_plan_id';
                var6[8] = var11;
                var9 = 'sku_id';
                var6[8] = var10;
                var10 = undefined;
                if(!var4) { _fun0001_ip = 31; continue _fun0001 }
case 32:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var11 = var11.bind(var5)(var9);
                var9 = var11.getCustomCheckoutFlowForAnalytics;
                var10 = var9.bind(var11)();
case 31:
                var9 = 'custom_checkout_flow';
                var6[8] = var10;
                var6 = var7.bind(var8)(var6);
case 29:
                var7 = _closure1_slot7;
                var6 = {};
                var8 = _closure2_slot0;
                var8 = var8.productId;
                var6['productId'] = var8;
                var8 = function onPaymentSuccess(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure2_slot8;
                        var4 = null;
                        if(!(var4 != var1)) { _fun0003_ip = 5; continue _fun0003 }
case 33:
                        var3 = _closure2_slot8;
                        var1 = undefined;
                        var1 = var3.bind(var1)();
case 5:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 12;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.presentBuyNitroPurchaseSuccess;
                        var3 = _closure2_slot0;
                        var3 = var3.premiumTier;
                        var3 = var5.bind(var6)(var3);
                        var3 = _closure2_slot9;
                        if(!(var4 != var3)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                        var3 = _closure2_slot9;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
case 34:
                        return var1;
                    }
                };
                var6['onPaymentSuccess'] = var8;
                var8 = _closure2_slot10;
                var6['onPaymentDismiss'] = var8;
                var6 = var7.bind(var5)(var6);
                if(var4) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                var4 = function runPurchase() {
                    var1 = undefined;
                    var4 = _closure3_slot2;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var4 = var4.bind(var5)();
                _fun0001_ip = 25; continue _fun0001;
case 36:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 13;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var5 = var6.goToStandalonePremiumCheckoutFromMobileApp;
                var4 = {};
                var3 = _closure2_slot0;
                var3 = var3.basePlanId;
                var4['planId'] = var3;
                var3 = false;
                var4['isGift'] = var3;
                var2 = _closure2_slot2;
                var4['loadId'] = var2;
                var18 = 'premium_nitro_marketing_page';
                var16 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure1_slot6;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var3 = _closure2_slot6;
                        var3 = var3.bind(var1)();
                        var4 = _closure2_slot8;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                        var2 = _closure2_slot8;
                        var2 = var2.bind(var1)();
case 38:
                        return var1;
                    }
                };
                var15 = function() {
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 14;
                    var2 = var9[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var5 = 15;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.NrBVjw;
                    var6 = var7.bind(var10)(var6);
                    var2['title'] = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.gD+grx;
                    var5 = var6.bind(var7)(var5);
                    var2['body'] = var5;
                    var5 = true;
                    var2['hideActionSheet'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot6;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var19 = var6;
                var17 = var4;
                var1 = var19[var5](var18, var17, var16, var15, var14);
case 25:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = null;
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useNativeCheckoutStore;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.reset;
    var _closure1_slot6 = var7;
    var4 = var4.setInitiatedPurchaseFromNewFlow;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot9 = var7;
    var7 = var4.AnalyticsObjectTypes;
    var _closure1_slot10 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot11 = var7;
    var4 = var4.AnalyticsSections;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PaymentGateways;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot14 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_marketing/native/components/BuyNitroPurchaseFlow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BuyNitroPurchaseFlow(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var17 = var2.item;
            var _closure2_slot0 = var17;
            var16 = var2.analyticsLocations;
            var15 = var2.analyticsLoadId;
            var14 = var2.hasEmittedPaymentFlowStartedRef;
            var13 = var2.applicationId;
            var12 = var2.expectedPriceString;
            var11 = var2.onExit;
            var10 = var2.onOrderPriceMismatch;
            var9 = var2.onHostSheetClose;
            var8 = var2.onPaymentSuccess;
            var7 = var2.onPaymentDismiss;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 20;
            var2 = var3[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var19 = var2.NitroACOMSubscriptionExperiment;
            var18 = var19.useConfig;
            var2 = {};
            var20 = 'PremiumPlanSelectionActionSheetWithOrderCTX';
            var2['location'] = var20;
            var2 = var18.bind(var19)(var2);
            var2 = var2.enabled;
            var18 = 21;
            var3 = var3[var18];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            var6 = _closure1_slot13;
            if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var21 = var6.GOOGLE;
            _fun0005_ip = 42; continue _fun0005;
case 40:
            if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var3 = var6.APPLE;
            _fun0005_ip = 45; continue _fun0005;
case 43:
            var3 = var6.APPLE_ADVANCED_COMMERCE;
case 45:
            var21 = var3;
case 42:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var18];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var3 = var2;
case 46:
            var6 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 22;
            var2 = var18[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.usePremiumTrialOffer;
            var2 = var2.bind(var6)();
            var19 = undefined;
            if(var3) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var3 = null;
            var3 = var3 == var2;
            var19 = undefined;
            if(var3) { _fun0005_ip = 48; continue _fun0005 }
case 50:
            var19 = var2.trial_id;
case 48:
            var18 = null;
            var2 = var18 != var19;
            var6 = undefined;
            if(!var2) { _fun0005_ip = 51; continue _fun0005 }
case 30:
            var2 = {};
            var3 = {};
            var3['subscription_trial_id'] = var19;
            var2['subscription_preview'] = var3;
            var6 = var2;
case 51:
            var19 = _closure1_slot4;
            var3 = var19.useMemo;
            var20 = var17.productId;
            var2 = new Array(1);
            var2[0] = var20;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getSubscriptionItemsForProduct;
                var1 = _closure2_slot0;
                var1 = var1.productId;
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.planId;
                    var1['subscriptionPlanId'] = var3;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 9;
                    var4 = var8[var3];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.castPremiumSubscriptionAsSkuId;
                    var6 = _closure1_slot1;
                    var3 = var8[var3];
                    var7 = var6.bind(var7)(var3);
                    var6 = var7.getSkuIdForPlan;
                    var3 = var2.planId;
                    var3 = var6.bind(var7)(var3);
                    var3 = var4.bind(var5)(var3);
                    var1['skuId'] = var3;
                    var2 = var2.quantity;
                    var1['quantity'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var3.bind(var19)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 23;
            var1 = var20[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['paymentGateway'] = var21;
            var20 = _closure1_slot13;
            var20 = var20.APPLE_ADVANCED_COMMERCE;
            var20 = var21 === var20;
            var1['orderRequired'] = var20;
            var20 = new Array(0);
            var1['skuIds'] = var20;
            var1['defaultPlans'] = var19;
            var19 = false;
            var1['isGift'] = var19;
            var1['activeSubscription'] = var18;
            var1['initialSubscriptionFacet'] = var6;
            var1['onOrderRetryCancellation'] = var11;
            var6 = _closure1_slot15;
            var5 = {};
            var5['item'] = var17;
            var5['analyticsLocations'] = var16;
            var5['analyticsLoadId'] = var15;
            var5['hasEmittedPaymentFlowStartedRef'] = var14;
            var5['applicationId'] = var13;
            var5['expectedPriceString'] = var12;
            var5['onExit'] = var11;
            var5['onOrderPriceMismatch'] = var10;
            var5['onHostSheetClose'] = var9;
            var5['onPaymentSuccess'] = var8;
            var5['onPaymentDismiss'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();