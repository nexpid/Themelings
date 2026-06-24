// app/modules/payments/native/hooks/NativePaymentHooks.ios.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var7 = function useNativeIAPPayments() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var6 = undefined;
            var7 = var3.bind(var6)(var2);
            var5 = var7.useStateFromStoresArray;
            var2 = _closure1_slot6;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot9;
            var3[1] = var2;
            var2 = function() {
                var3 = _closure1_slot6;
                var1 = var3.isGenericIapConnected;
                var3 = var1.bind(var3)();
                var1 = new Array(4);
                var1[0] = var3;
                var4 = _closure1_slot6;
                var3 = var4.genericProductsLoaded;
                var3 = var3.bind(var4)();
                var1[1] = var3;
                var4 = _closure1_slot6;
                var3 = var4.getStoreFront;
                var3 = var3.bind(var4)();
                var1[2] = var3;
                var3 = _closure1_slot9;
                var2 = var3.getProducts;
                var2 = var2.bind(var3)();
                var1[3] = var2;
                return var1;
            };
            var5 = var5.bind(var7)(var3, var2);
            var3 = _closure1_slot4;
            var2 = 4;
            var8 = var3.bind(var6)(var5, var2);
            var2 = 0;
            var3 = var8[var2];
            var _closure2_slot0 = var3;
            var2 = 1;
            var5 = var8[var2];
            var _closure2_slot1 = var5;
            var2 = 2;
            var2 = var8[var2];
            var _closure2_slot2 = var2;
            var7 = 3;
            var7 = var8[var7];
            var _closure2_slot3 = var7;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5;
case 2:
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = null;
            var3 = var7 != var2;
case 4:
            var _closure2_slot4 = var3;
            var9 = _closure1_slot5;
            var8 = var9.useEffect;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.loadProducts;
                    var1 = var1.bind(var2)();
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var8.bind(var9)(var5, var7);
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 11;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 7:
                    var1 = _closure1_slot15;
case 8:
                    if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var2 = true;
                    _closure1_slot15 = var2;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var6 = undefined;
                    var4 = var2.bind(var6)(var1);
                    var3 = var4.captureBillingMessage;
                    var2 = {};
                    var1 = {};
                    var7 = '0';
                    var1['alertPriority'] = var7;
                    var2['tags'] = var1;
                    var1 = {};
                    var8 = _closure2_slot3;
                    var7 = null;
                    var8 = var7 == var8;
                    if(var8) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var10 = _closure2_slot3;
                    var9 = var10.map;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.identifier;
                        return var1;
                    };
                    var6 = var9.bind(var10)(var8);
case 11:
                    if(!(var7 == var6)) { _fun0003_ip = 2; continue _fun0003 }
case 13:
                    var6 = new Array(0);
case 2:
                    var1['loadedProducts'] = var6;
                    var6 = _closure2_slot0;
                    var1['connected'] = var6;
                    var6 = _closure2_slot1;
                    var1['genericProductsLoaded'] = var6;
                    var5 = _closure2_slot2;
                    var1['storeFront'] = var5;
                    var2['extra'] = var1;
                    var1 = 'useNativeIAPPayments failed to load required context';
                    var1 = var3.bind(var4)(var1, var2);
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = 5000;
            var1 = var5.bind(var6)(var4, var1);
            var1 = {};
            var1['nativePaymentsConnected'] = var3;
            var1['storeFront'] = var2;
            return var1;
        }
    };
    var _closure1_slot16 = var7;
    var1 = function computeCanUpdateSubscription(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var1 = var4 != var2;
case 14:
            if(!var1) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var3 = var3.currency;
            var2 = var2.currency;
            var1 = var3 === var2;
case 16:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var6 = function useCreateSubscription(arg1) {
        var2 = arg1;
        var10 = var2.planId;
        var _closure2_slot0 = var10;
        var1 = var2.skuId;
        var _closure2_slot1 = var1;
        var11 = var2.applicationId;
        var _closure2_slot2 = var11;
        var12 = var2.analyticsLocation;
        var _closure2_slot3 = var12;
        var2 = _closure1_slot16;
        var9 = undefined;
        var5 = var2.bind(var9)();
        var2 = var5.nativePaymentsConnected;
        var _closure2_slot4 = var2;
        var13 = var5.storeFront;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var5 = 9;
        var5 = var7[var5];
        var15 = var6.bind(var9)(var5);
        var14 = var15.useStateFromStores;
        var5 = _closure1_slot7;
        var8 = new Array(1);
        var8[0] = var5;
        var6 = new Array(1);
        var6[0] = var10;
        var5 = function() {
            var3 = _closure1_slot7;
            var2 = var3.get;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8 = var14.bind(var15)(var8, var5, var6);
        var6 = _closure1_slot1;
        var5 = 13;
        var5 = var7[var5];
        var5 = var6.bind(var9)(var5);
        var8 = var5.bind(var9)(var8, var13);
        var _closure2_slot5 = var8;
        var5 = 14;
        var5 = var7[var5];
        var6 = var6.bind(var9)(var5);
        var5 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getNewAnalyticsLoadId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var13 = var6.bind(var9)(var5);
        var _closure2_slot6 = var13;
        var7 = _closure1_slot5;
        var6 = var7.useCallback;
        var5 = new Array(5);
        var5[0] = var13;
        var5[1] = var12;
        var5[2] = var11;
        var5[3] = var10;
        var5[4] = var1;
        var1 = function() {
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 16;
            var2 = var9[var1];
            var1 = undefined;
            var4 = var8.bind(var1)(var2);
            var3 = var4.trackPaymentFlowStartedAnalyticsAndCTP;
            var2 = {};
            var7 = _closure2_slot6;
            var2['load_id'] = var7;
            var10 = _closure1_slot10;
            var7 = _closure1_slot11;
            var7 = var7.SUBSCRIPTION;
            var7 = var10[var7];
            var2['payment_type'] = var7;
            var7 = 17;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.ProductIds;
            var7 = var7.GENERIC_SUBSCRIPTION;
            var2['subscription_plan_gateway_plan_id'] = var7;
            var6 = _closure1_slot12;
            var6 = var6.GUILD;
            var2['subscription_type'] = var6;
            var6 = false;
            var2['is_gift'] = var6;
            var6 = _closure2_slot3;
            var2['location'] = var6;
            var6 = _closure2_slot2;
            var2['application_id'] = var6;
            var6 = _closure2_slot0;
            var2['subscription_plan_id'] = var6;
            var5 = _closure2_slot1;
            var2['sku_id'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var7 = var6.bind(var7)(var1, var5);
        var _closure2_slot7 = var7;
        var1 = {};
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 18; continue _fun0005 }
case 7:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 18;
                    var2 = var7[var5];
                    var4 = undefined;
                    var10 = var6.bind(var4)(var2);
                    var9 = _closure2_slot4;
                    var8 = 'cannot connect to IAP API';
                    var8 = var10.bind(var4)(var9, var8);
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = _closure2_slot5;
                    var5 = null;
                    var6 = var5 != var6;
                    var5 = 'plan not found';
                    var5 = var7.bind(var4)(var6, var5);
case 19: // try_start_0
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 10;
                    var5 = var7[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.restoreAndApplyPurchases;
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=119);
case 20:
                    return var5;
case 21:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0005_ip = 22; continue _fun0005 }
case 23: // try_end0
                    _fun0005_ip = 24; continue _fun0005;
case 22:
                    return var5;
case 25: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var7 = _closure1_slot13;
                    var6 = var7.error;
                    var5 = "error consuming pending purchases but we'll try to let user purchase";
                    var5 = var6.bind(var7)(var5);
case 24:
                    var5 = _closure2_slot7;
                    var5 = var5.bind(var4)();
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 10;
                    var5 = var7[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.createGenericSubscription;
                    var2 = _closure2_slot5;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=199);
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.fetchSubscriptions;
                    var3 = var3.bind(var5)();
                    SaveGenerator(address=239);
case 30:
                    return var3;
case 31:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    return var4;
case 32:
                    return var3;
case 28:
                    return var2;
case 18:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var9)(var3);
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var2;
        var3[2] = var7;
        var3 = var5.bind(var6)(var4, var3);
        var1['createSubscription'] = var3;
        var1['nativePaymentsConnected'] = var2;
        return var1;
    };
    var5 = function useCancelSubscription(arg1, arg2) {
        var5 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var7;
        var1 = _closure1_slot16;
        var10 = undefined;
        var1 = var1.bind(var10)();
        var2 = var1.nativePaymentsConnected;
        var _closure2_slot2 = var2;
        var12 = var1.storeFront;
        var _closure2_slot3 = var12;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 9;
        var1 = var8[var1];
        var13 = var6.bind(var10)(var1);
        var11 = var13.useStateFromStores;
        var1 = _closure1_slot8;
        var9 = new Array(1);
        var9[0] = var1;
        var6 = new Array(1);
        var6[0] = var5;
        var1 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getSubscriptionById;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var11.bind(var13)(var9, var1, var6);
        var _closure2_slot4 = var1;
        var11 = _closure1_slot5;
        var9 = var11.useMemo;
        var6 = new Array(2);
        var6[0] = var12;
        var6[1] = var1;
        var1 = function() {
            var4 = _closure1_slot17;
            var3 = _closure2_slot4;
            var2 = _closure2_slot3;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var9 = var9.bind(var11)(var1, var6);
        var _closure2_slot5 = var9;
        var6 = _closure1_slot1;
        var1 = 20;
        var1 = var8[var1];
        var1 = var6.bind(var10)(var1);
        var8 = var1.bind(var10)(var5);
        var _closure2_slot6 = var8;
        var1 = {};
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 34; continue _fun0006 }
case 7:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 18;
                    var2 = var8[var4];
                    var5 = undefined;
                    var10 = var6.bind(var5)(var2);
                    var9 = _closure2_slot5;
                    var7 = 'Cannot update subscription';
                    var7 = var10.bind(var5)(var9, var7);
                    var7 = var8[var4];
                    var10 = var6.bind(var5)(var7);
                    var9 = _closure2_slot2;
                    var7 = 'Cannot connect to IAP API';
                    var7 = var10.bind(var5)(var9, var7);
                    var4 = var8[var4];
                    var9 = var6.bind(var5)(var4);
                    var4 = _closure2_slot6;
                    var6 = null;
                    var7 = var6 != var4;
                    var6 = 'Subscription not found';
                    var6 = var9.bind(var5)(var7, var6);
                    var7 = _closure1_slot0;
                    var6 = 10;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.cancelGenericSubscription;
                    var6 = var4.requestIdentifier;
                    var4 = var4.subscriptionId;
                    var2 = _closure2_slot1;
                    var2 = var7.bind(var8)(var6, var4, var2);
                    SaveGenerator(address=159);
case 35:
                    return var2;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.fetchSubscriptions;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=199);
case 26:
                    return var3;
case 27:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 39; continue _fun0006 }
case 29:
                    return var2;
case 39:
                    return var3;
case 37:
                    return var2;
case 34:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var10)(var3);
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var2;
        var3[3] = var7;
        var3 = var5.bind(var6)(var4, var3);
        var1['cancelSubscription'] = var3;
        var1['nativePaymentsConnected'] = var2;
        return var1;
    };
    var4 = function useResubscribeSubscription(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var1 = _closure1_slot16;
        var10 = undefined;
        var1 = var1.bind(var10)();
        var2 = var1.nativePaymentsConnected;
        var _closure2_slot1 = var2;
        var1 = var1.storeFront;
        var _closure2_slot2 = var1;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var6 = 9;
        var6 = var8[var6];
        var12 = var7.bind(var10)(var6);
        var11 = var12.useStateFromStores;
        var6 = _closure1_slot8;
        var9 = new Array(1);
        var9[0] = var6;
        var7 = new Array(1);
        var7[0] = var5;
        var6 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getSubscriptionById;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var11.bind(var12)(var9, var6, var7);
        var _closure2_slot3 = var7;
        var11 = _closure1_slot5;
        var9 = var11.useMemo;
        var6 = new Array(2);
        var6[0] = var1;
        var6[1] = var7;
        var1 = function() {
            var4 = _closure1_slot17;
            var3 = _closure2_slot3;
            var2 = _closure2_slot2;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var9 = var9.bind(var11)(var1, var6);
        var _closure2_slot4 = var9;
        var6 = _closure1_slot1;
        var1 = 21;
        var1 = var8[var1];
        var1 = var6.bind(var10)(var1);
        var8 = var1.bind(var10)(var5);
        var _closure2_slot5 = var8;
        var1 = {};
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 40; continue _fun0007 }
case 7:
                    var10 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 18;
                    var2 = var8[var6];
                    var5 = undefined;
                    var9 = var10.bind(var5)(var2);
                    var7 = _closure2_slot4;
                    var4 = 'Cannot update subscription';
                    var4 = var9.bind(var5)(var7, var4);
                    var4 = var8[var6];
                    var9 = var10.bind(var5)(var4);
                    var7 = _closure2_slot1;
                    var4 = 'Cannot connect to IAP API';
                    var4 = var9.bind(var5)(var7, var4);
                    var4 = var8[var6];
                    var12 = var10.bind(var5)(var4);
                    var7 = _closure2_slot5;
                    var4 = null;
                    var11 = var4 != var7;
                    var9 = 'Subscription not found';
                    var11 = var12.bind(var5)(var11, var9);
                    var6 = var8[var6];
                    var6 = var10.bind(var5)(var6);
                    var2 = _closure2_slot3;
                    var4 = var4 != var2;
                    var4 = var6.bind(var5)(var4, var9);
                    var6 = _closure1_slot0;
                    var4 = 10;
                    var4 = var8[var4];
                    var6 = var6.bind(var5)(var4);
                    var4 = var6.resubscribeGenericSubscription;
                    var2 = var2.isACOM;
                    var2 = var4.bind(var6)(var7, var2);
                    SaveGenerator(address=171);
case 41:
                    return var2;
case 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 43; continue _fun0007 }
case 9:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.fetchSubscriptions;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=211);
case 44:
                    return var3;
case 37:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                    return var2;
case 45:
                    return var3;
case 43:
                    return var2;
case 40:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var10)(var3);
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var2;
        var3[2] = var8;
        var3[3] = var7;
        var3 = var5.bind(var6)(var4, var3);
        var1['resubscribeSubscription'] = var3;
        var1['nativePaymentsConnected'] = var2;
        return var1;
    };
    var2 = function useGoogleSkuIds() {
        var1 = _closure1_slot14;
        return var1;
    };
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var8);
    var1 = 0;
    var8 = var11[var1];
    var1 = undefined;
    var8 = var12.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var13 = var11[var8];
    var8 = metroImportAll;
    var8 = var8.bind(var1)(var13);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var13 = var8.PurchaseTypeToAnalyticsPaymentType;
    var _closure1_slot10 = var13;
    var13 = var8.PurchaseTypes;
    var _closure1_slot11 = var13;
    var8 = var8.SubscriptionTypes;
    var _closure1_slot12 = var8;
    var8 = 8;
    var8 = var11[var8];
    var13 = var12.bind(var1)(var8);
    var8 = var13.prototype;
    var12 = Object.create(var8, {constructor: {value: var13}});
    var17 = 'NativePaymentHooks.ios.tsx';
    var18 = var12;
    var8 = new var18[var13](var17, var16);
    var8 = var8 instanceof Object ? var8 : var12;
    var _closure1_slot13 = var8;
    var8 = false;
    var12 = {'isFetchingGoogleSkus': false, 'fetchError': null};
    var _closure1_slot14 = var12;
    var _closure1_slot15 = var8;
    var8 = {};
    var8['useNativeIAPPayments'] = var7;
    var8['useGoogleSkuIds'] = var2;
    var8['useCreateSubscription'] = var6;
    var8['useCancelSubscription'] = var5;
    var8['useResubscribeSubscription'] = var4;
    var9 = 22;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/payments/native/hooks/NativePaymentHooks.ios.tsx';
    var9 = var10.bind(var11)(var9);
    var3['default'] = var8;
    var3['useNativeIAPPayments'] = var7;
    var3['useCreateSubscription'] = var6;
    var3['useCancelSubscription'] = var5;
    var3['useResubscribeSubscription'] = var4;
    var3['useGoogleSkuIds'] = var2;
    return var1;
})();