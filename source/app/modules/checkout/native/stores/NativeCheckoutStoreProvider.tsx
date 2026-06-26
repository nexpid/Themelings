// app/modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function NativeCheckoutStoreProvider(arg1) {
        var2 = arg1;
        var3 = var2.checkoutInitParameters;
        var _closure2_slot0 = var3;
        var7 = var2.order;
        var _closure2_slot1 = var7;
        var3 = var2.paymentGateway;
        var _closure2_slot2 = var3;
        var3 = var2.orderRequired;
        var _closure2_slot3 = var3;
        var8 = var2.children;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 8;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                var5 = var1 == var3;
                var4 = undefined;
                var3 = undefined;
                if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot1;
                var3 = var2.id;
case 2:
                if(!(var1 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 12;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.v4;
                var3 = var1.bind(var2)();
case 4:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 13;
                var1 = var5[var1];
                var5 = var2.bind(var4)(var1);
                var4 = var5.addBreadcrumb;
                var1 = {};
                var2 = global;
                var6 = var2.HermesInternal;
                var7 = var6.concat;
                var6 = 'Checkout session ID: ';
                var6 = var7.bind(var6)(var3);
                var1['message'] = var6;
                var1 = var4.bind(var5)(var1);
                var1 = {};
                var1['loadId'] = var3;
                var3 = var2.Date;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var1['startTime'] = var2;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var _closure2_slot4 = var2;
        var6 = _closure1_slot5;
        var3 = var6.useState;
        var2 = function() {
            var3 = _closure1_slot8;
            var2 = {};
            var4 = _closure2_slot1;
            var2['order'] = var4;
            var4 = _closure2_slot0;
            var2['checkoutInitParameters'] = var4;
            var4 = _closure2_slot4;
            var2['contextMetadata'] = var4;
            var4 = _closure2_slot2;
            var2['paymentGateway'] = var4;
            var1 = _closure2_slot3;
            var2['orderRequired'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var6 = var3.bind(var6)(var2);
        var3 = _closure1_slot4;
        var2 = 1;
        var3 = var3.bind(var4)(var6, var2);
        var2 = 0;
        var9 = var3[var2];
        var _closure2_slot5 = var9;
        var6 = _closure1_slot5;
        var3 = var6.useRef;
        var2 = null;
        var2 = var2 != var7;
        var2 = var3.bind(var6)(var2);
        var _closure2_slot6 = var2;
        var6 = _closure1_slot5;
        var3 = var6.useEffect;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var9;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot6;
                var2 = var2.current;
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var4 = _closure2_slot1;
                var3 = null;
                var2 = var3 == var4;
case 6:
                if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var3 = _closure2_slot5;
                var2 = var3.getState;
                var4 = var2.bind(var3)();
                var3 = var4.setOrder;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                var2 = _closure2_slot6;
                var1 = true;
                var2['current'] = var1;
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot12;
        var2 = _closure1_slot9;
        var1 = {};
        var1['value'] = var9;
        var7 = _closure1_slot12;
        var5 = _closure1_slot10;
        var6 = var5.Provider;
        var5 = {};
        var5['value'] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.createNativeStore;
    var _closure1_slot8 = var7;
    var7 = var4.NativeCheckoutStoreContext;
    var _closure1_slot9 = var7;
    var4 = var4.NativeCheckoutStoreContextOrNull;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ItemPurchaseType;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': '100%'};
    var4['loadingSpinnerContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkout/native/stores/NativeCheckoutStoreProvider.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NativeCheckoutStoreProviderWrapper(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.orderRequired;
            var _closure2_slot0 = var8;
            var15 = var1.skuIds;
            var9 = var1.paymentGateway;
            var _closure2_slot1 = var9;
            var14 = var1.isGift;
            var _closure2_slot2 = var14;
            var23 = var1.onOrderCreated;
            var _closure2_slot3 = var23;
            var13 = var1.activeSubscription;
            var _closure2_slot4 = var13;
            var4 = var1.children;
            var19 = var1.defaultPlans;
            var _closure2_slot5 = var19;
            var22 = var1.onOrderRetryCancellation;
            var _closure2_slot6 = var22;
            var17 = var1.initialSubscriptionFacet;
            var _closure2_slot7 = var17;
            var3 = undefined;
            var _closure2_slot11 = var3;
            var _closure2_slot12 = var3;
            var _closure2_slot13 = var3;
            var _closure2_slot14 = var3;
            var1 = _closure1_slot13;
            var7 = var1.bind(var3)();
            var5 = _closure1_slot5;
            var1 = var5.useState;
            var12 = null;
            var5 = var1.bind(var5)(var12);
            var1 = _closure1_slot4;
            var18 = 2;
            var1 = var1.bind(var3)(var5, var18);
            var16 = 0;
            var10 = var1[var16];
            var11 = 1;
            var1 = var1[var11];
            var _closure2_slot8 = var1;
            var5 = _closure1_slot5;
            var1 = var5.useState;
            var5 = var1.bind(var5)(var8);
            var1 = _closure1_slot4;
            var5 = var1.bind(var3)(var5, var18);
            var1 = var5[var16];
            var5 = var5[var11];
            var _closure2_slot9 = var5;
            var18 = _closure1_slot5;
            var11 = var18.useRef;
            var5 = false;
            var5 = var11.bind(var18)(var5);
            var _closure2_slot10 = var5;
            var11 = _closure1_slot1;
            var18 = _closure1_slot2;
            var5 = 8;
            var5 = var18[var5];
            var11 = var11.bind(var3)(var5);
            var5 = var15.length;
            var18 = var5 > var16;
            var5 = null;
            if(!var18) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var5 = var15[var16];
case 10:
            var21 = var11.bind(var3)(var5);
            _closure2_slot11 = var21;
            if(!(var12 == var21)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            if(!(var12 == var19)) { _fun0003_ip = 12; continue _fun0003 }
case 14:
            if(var8) { _fun0003_ip = 15; continue _fun0003 }
case 12:
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 9;
            var5 = var16[var5];
            var11 = var11.bind(var3)(var5);
            var5 = var11.useNativeIAPPayments;
            var5 = var5.bind(var11)();
            var18 = var5.storeFront;
            _closure2_slot12 = var18;
            var20 = _closure1_slot5;
            var16 = var20.useCallback;
            var5 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                            var5 = var2.orderLineItems;
                            var8 = var2.subscriptionFacet;
                            var4 = undefined;
                            SaveGenerator(address=31);
case 2:
                            return var4;
case 18:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 10;
                            var3 = var7[var3];
                            var7 = var6.bind(var4)(var3);
                            var6 = var7.createOrder;
                            var3 = {};
                            var3['orderLineItems'] = var5;
                            var9 = _closure2_slot1;
                            var3['paymentGateway'] = var9;
                            var9 = _closure2_slot2;
                            var3['isGift'] = var9;
                            var3['subscriptionFacet'] = var8;
                            var3 = var6.bind(var7)(var3);
                            SaveGenerator(address=111);
case 21:
                            return var3;
case 22:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(var6) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                            var6 = _closure2_slot8;
                            var6 = var6.bind(var4)(var3);
                            var7 = _closure2_slot3;
                            var6 = null;
                            if(!(var6 != var7)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                            var6 = _closure2_slot3;
                            var6 = var6.bind(var4)(var3);
case 25:
                            var6 = _closure2_slot9;
                            var5 = false;
                            var5 = var6.bind(var4)(var5);
                            return var4;
case 23:
                            return var3;
case 19:
                            return var2;
case 16:
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
            var11 = var5.bind(var3)();
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var23;
            var5[2] = var14;
            var23 = var16.bind(var20)(var11, var5);
            _closure2_slot13 = var23;
            var20 = _closure1_slot5;
            var16 = var20.useCallback;
            var5 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            StartGenerator();
                            var4 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                            if(var5) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                            var3 = var4;
                            var _closure5_slot0 = var4;
case 29: // try_start_0
                            var5 = _closure2_slot13;
                            var4 = var3;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            SaveGenerator(address=40);
case 30:
                            return var3;
case 20:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 31; continue _fun0005 }
case 32: // try_end0
                            _fun0005_ip = 33; continue _fun0005;
case 31:
                            return var3;
case 34: // catch_target0
                            CatchBlockStart(arg_register=2);
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 11;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.showCheckoutOrderErrorModal;
                            var3 = function() {
                                var3 = _closure2_slot13;
                                var2 = _closure5_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = function() {
                                var4 = _closure2_slot9;
                                var1 = undefined;
                                var3 = false;
                                var3 = var4.bind(var1)(var3);
                                var2 = _closure2_slot6;
                                var2 = var2.bind(var1)();
                                return var1;
                            };
                            var2 = var4.bind(var5)(var3, var2);
case 33:
                            var2 = undefined;
                            return var2;
case 27:
                            return var1;
                        }
                    };
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
            var11 = var5.bind(var3)();
            var5 = new Array(2);
            var5[0] = var23;
            var5[1] = var22;
            var20 = var16.bind(var20)(var11, var5);
            _closure2_slot14 = var20;
            var16 = _closure1_slot5;
            var11 = var16.useEffect;
            var5 = new Array(7);
            var5[0] = var21;
            var5[1] = var8;
            var5[2] = var20;
            var5[3] = var19;
            var5[4] = var18;
            var5[5] = var13;
            var5[6] = var17;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var1 = var1.current;
                    if(var1) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var1 = _closure2_slot12;
                    var7 = null;
                    if(!(var7 != var1)) { _fun0006_ip = 35; continue _fun0006 }
case 18:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0006_ip = 35; continue _fun0006 }
case 37:
                    var1 = _closure2_slot11;
                    if(!(var7 == var1)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var1 = _closure2_slot5;
                    if(!(var7 != var1)) { _fun0006_ip = 35; continue _fun0006 }
case 38:
                    var4 = new Array(0);
                    var1 = _closure2_slot5;
                    if(!(var7 == var1)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var1 = _closure2_slot11;
                    var5 = var7 != var1;
                    var1 = undefined;
                    if(!var5) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var6 = var4.push;
                    var5 = {};
                    var8 = _closure2_slot11;
                    var5['sku_id'] = var8;
                    var8 = 1;
                    var5['quantity'] = var8;
                    var8 = _closure1_slot11;
                    var8 = var8.ONE_TIME;
                    var5['purchase_type'] = var8;
                    var5 = var6.bind(var4)(var5);
                    var1 = undefined;
                    _fun0006_ip = 42; continue _fun0006;
case 40:
                    var5 = var4.push;
                    var8 = _closure2_slot5;
                    var6 = var8.map;
                    var3 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.skuId;
                        var1['sku_id'] = var3;
                        var3 = var2.subscriptionPlanId;
                        var1['subscription_plan_id'] = var3;
                        var2 = var2.quantity;
                        var1['quantity'] = var2;
                        var2 = _closure1_slot11;
                        var2 = var2.SUBSCRIPTION;
                        var1['purchase_type'] = var2;
                        return var1;
                    };
                    var10 = var6.bind(var8)(var3);
                    var3 = new Array(0);
                    var9 = 0;
                    var11 = var3;
                    var6 = arraySpread(var11, var10, var9);
                    var11 = var5;
                    var10 = var3;
                    var9 = var4;
                    var3 = apply(var11, var10, var9);
                    var3 = {};
                    var5 = {};
                    var6 = _closure2_slot12;
                    var6 = var6.currency;
                    var5['currency'] = var6;
                    var6 = _closure2_slot12;
                    var6 = var6.country;
                    var5['country_code'] = var6;
                    var3['subscription_preview'] = var5;
                    var5 = _closure2_slot4;
                    if(!(var7 != var5)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var5 = _closure2_slot4;
                    var5 = var5.id;
                    var3['subscription_id'] = var5;
case 44:
                    var5 = _closure2_slot7;
                    var5 = var7 != var5;
                    if(!var5) { _fun0006_ip = 46; continue _fun0006 }
case 10:
                    var6 = _closure2_slot7;
                    var6 = var6.subscription_preview;
                    var6 = var6.subscription_trial_id;
                    var5 = var7 != var6;
case 46:
                    var1 = var3;
                    if(!var5) { _fun0006_ip = 42; continue _fun0006 }
case 47:
                    var6 = var3.subscription_preview;
                    var5 = _closure2_slot7;
                    var5 = var5.subscription_preview;
                    var5 = var5.subscription_trial_id;
                    var6['subscription_trial_id'] = var5;
                    var1 = var3;
case 42:
                    var5 = _closure2_slot10;
                    var3 = true;
                    var5['current'] = var3;
                    var3 = _closure2_slot14;
                    var2 = {};
                    var2['orderLineItems'] = var4;
                    var2['subscriptionFacet'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var11.bind(var16)(var2, var5);
            var5 = _closure1_slot12;
            if(var1) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var2 = _closure1_slot14;
            var1 = {};
            var11 = {};
            var11['skuIds'] = var15;
            var11['isGift'] = var14;
            var11['activeSubscription'] = var13;
            var11['referralTrialOfferId'] = var12;
            var1['checkoutInitParameters'] = var11;
            var1['order'] = var10;
            var1['paymentGateway'] = var9;
            var1['orderRequired'] = var8;
            var1['children'] = var4;
            var1 = var5.bind(var3)(var2, var1);
            _fun0003_ip = 50; continue _fun0003;
case 48:
            var4 = _closure1_slot7;
            var2 = {};
            var7 = var7.loadingSpinnerContainer;
            var2['style'] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot6;
            var6 = {'animating': true, 'size': 'large'};
            var6 = var8.bind(var3)(var7, var6);
            var2['children'] = var6;
            var1 = var5.bind(var3)(var4, var2);
case 50:
            return var1;
case 15:
            var1 = global;
            var2 = var1.Error;
            var1 = 'SkuIDs needs to a specified!';
            var1 = var2.bind(var3)(var1);
            throw var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();