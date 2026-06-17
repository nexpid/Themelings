// app/modules/premium/PremiumSubscriptionInvoice.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var8 = function createSubscriptionInvoicePreview() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var8;
    var1 = function _createSubscriptionInvoicePreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var17 = var2.items;
                    var10 = var2.paymentSourceId;
                    var16 = var2.trialId;
                    var15 = var2.code;
                    var4 = var2.applyEntitlements;
                    var6 = undefined;
                    if(!(var4 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = false;
case 4:
                    var14 = var4;
                    var13 = var2.currency;
                    var12 = var2.renewal;
                    var8 = var2.metadata;
                    var7 = var2.loadId;
                    var11 = undefined;
                    var9 = undefined;
                    var5 = undefined;
                    SaveGenerator(address=87);
case 6:
                    return var6;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = {};
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var18 = 6;
                    var18 = var20[var18];
                    var20 = var19.bind(var6)(var18);
                    var19 = var20.coerceExistingItemsToNewItemInterval;
                    var18 = var17;
                    var19 = var19.bind(var20)(var18);
                    var17 = var19;
                    var18 = var19.map;
                    var17 = function(arg1) {
                        var4 = arg1;
                        var3 = var4.planId;
                        var1 = null;
                        var2 = Object.create(var1);
                        var1 = 0;
                        var2['planId'] = var1;
                        var7 = {};
                        var6 = var4;
                        var5 = var2;
                        var6 = copyDataProperties(var7, var6, var5);
                        var1 = {};
                        var7 = var1;
                        var2 = copyDataProperties(var7, var6);
                        var2 = 'plan_id';
                        var1[1] = var3;
                        return var1;
                    };
                    var17 = var18.bind(var19)(var17);
                    var4['items'] = var17;
                    var17 = var10;
                    var4['payment_source_id'] = var17;
                    var4['trial_id'] = var16;
                    var4['code'] = var15;
                    var4['apply_entitlements'] = var14;
                    var4['currency'] = var13;
                    var4['renewal'] = var12;
                    var4['metadata'] = var8;
                    var4['load_id'] = var7;
                    var11 = var4;
case 10: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var4 = var7.bind(var6)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.post;
                    var4 = {};
                    var12 = _closure1_slot12;
                    var12 = var12.BILLING_SUBSCRIPTIONS_PREVIEW;
                    var4['url'] = var12;
                    var4['body'] = var11;
                    var11 = true;
                    var4['oldFormErrors'] = var11;
                    var11 = false;
                    var4['rejectWithError'] = var11;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=278);
case 11:
                    return var4;
case 12:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var11 = _closure1_slot11;
                    var8 = var11.createInvoiceFromServer;
                    var7 = var4.body;
                    var7 = var8.bind(var11)(var7);
                    var5 = var7;
                    var7 = var7.checkoutContext;
                    var9 = var7;
                    var8 = null;
                    var11 = var8 == var7;
                    var7 = undefined;
                    if(var11) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var7 = var9.payment_sources;
case 15:
                    if(!(var8 != var7)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 8;
                    var7 = var9[var7];
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE';
                    var7['type'] = var11;
                    var11 = var5;
                    var11 = var11.checkoutContext;
                    var7['checkoutContext'] = var11;
                    var7['paymentSourceId'] = var10;
                    var7 = var8.bind(var9)(var7);
case 17: // try_end0
                    return var5;
case 13:
                    return var4;
case 19: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.BillingError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var22 = var4;
                    var21 = var5;
                    var3 = new var22[var3](var21, var20);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 8:
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
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var7 = function updateSubscriptionInvoicePreview() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var7;
    var1 = function _updateSubscriptionInvoicePreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 3:
                    var13 = var2.subscriptionId;
                    var18 = var2.items;
                    var9 = var2.paymentSourceId;
                    var16 = var2.renewal;
                    var7 = var2.currency;
                    var10 = var2.applyEntitlements;
                    var6 = undefined;
                    if(!(var10 === var6)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var10 = false;
case 21:
                    var8 = var10;
                    var14 = var2.analyticsLocations;
                    var15 = var2.analyticsLocation;
                    var5 = var2.userDiscountOfferId;
                    var12 = undefined;
                    var11 = undefined;
                    var4 = undefined;
                    SaveGenerator(address=90);
case 23:
                    return var6;
case 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var10 = null;
                    var20 = var18;
                    if(!(var10 != var20)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var17 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var3 = 6;
                    var3 = var19[var3];
                    var17 = var17.bind(var6)(var3);
                    var3 = var17.coerceExistingItemsToNewItemInterval;
                    var20 = var3.bind(var17)(var18);
case 27:
                    var3 = {};
                    var18 = var10 == var20;
                    var17 = undefined;
                    if(var18) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var19 = var20.map;
                    var18 = function(arg1) {
                        var4 = arg1;
                        var3 = var4.planId;
                        var1 = null;
                        var2 = Object.create(var1);
                        var1 = 0;
                        var2['planId'] = var1;
                        var7 = {};
                        var6 = var4;
                        var5 = var2;
                        var6 = copyDataProperties(var7, var6, var5);
                        var1 = {};
                        var7 = var1;
                        var2 = copyDataProperties(var7, var6);
                        var2 = 'plan_id';
                        var1[1] = var3;
                        return var1;
                    };
                    var17 = var19.bind(var20)(var18);
case 29:
                    var3['items'] = var17;
                    var17 = var9;
                    var3['payment_source_id'] = var17;
                    var3['renewal'] = var16;
                    var3['apply_entitlements'] = var8;
                    var3['currency'] = var7;
                    var3['user_discount_offer_id'] = var5;
                    var12 = var3;
case 31: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var8 = var3.HTTP;
                    var7 = var8.patch;
                    var3 = {};
                    var17 = _closure1_slot12;
                    var16 = var17.BILLING_SUBSCRIPTION_PREVIEW;
                    var13 = var16.bind(var17)(var13);
                    var3['url'] = var13;
                    var13 = {};
                    var13['location'] = var15;
                    var13['location_stack'] = var14;
                    var3['query'] = var13;
                    var3['body'] = var12;
                    var12 = true;
                    var3['oldFormErrors'] = var12;
                    var12 = false;
                    var3['rejectWithError'] = var12;
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=303);
case 32:
                    return var3;
case 33:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                    var12 = _closure1_slot11;
                    var8 = var12.createInvoiceFromServer;
                    var7 = var3.body;
                    var4 = var8.bind(var12)(var7);
                    var8 = var9;
                    var8 = var10 != var8;
                    var7 = var8;
                    if(!var8) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var8 = var4;
                    var8 = var8.checkoutContext;
                    var11 = var8;
                    var12 = var10 == var8;
                    var8 = undefined;
                    if(var12) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                    var8 = var11.payment_sources;
case 38:
                    var7 = var10 != var8;
case 36:
                    if(!var7) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 8;
                    var5 = var8[var5];
                    var8 = var7.bind(var6)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var10 = 'SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE';
                    var5['type'] = var10;
                    var10 = var4;
                    var10 = var10.checkoutContext;
                    var5['checkoutContext'] = var10;
                    var5['paymentSourceId'] = var9;
                    var5 = var7.bind(var8)(var5);
case 40: // try_end0
                    return var4;
case 34:
                    return var3;
case 42: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.BillingError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var22 = var4;
                    var21 = var5;
                    var3 = new var22[var3](var21, var20);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 25:
                    return var2;
case 20:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var6 = function createOneTimePurchaseInvoicePreview() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var6;
    var1 = function _createOneTimePurchaseInvoicePreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 3:
                    var13 = var2.paymentSourceId;
                    var8 = var2.skuId;
                    var12 = var2.subscriptionPlanId;
                    var11 = var2.currency;
                    var10 = var2.loadId;
                    var6 = undefined;
                    SaveGenerator(address=48);
case 43:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 44; continue _fun0003 }
case 21:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 10;
                    var4 = var7[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = var8;
                    var4 = 'SKU ID is missing for one time purchase gift invoice preview';
                    var4 = var7.bind(var6)(var5, var4);
case 45: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var4 = var7[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = var7.httpGetWithCountryCodeQuery;
                    var4 = {};
                    var14 = _closure1_slot12;
                    var9 = var14.STORE_SKU_PURCHASE;
                    var8 = var9.bind(var14)(var8);
                    var4['url'] = var8;
                    var9 = {};
                    var8 = true;
                    var9['gift'] = var8;
                    var9['payment_source_id'] = var13;
                    var9['sku_subscription_plan_id'] = var12;
                    var9['currency'] = var11;
                    var9['load_id'] = var10;
                    var4['query'] = var9;
                    var4['oldFormErrors'] = var8;
                    var8 = false;
                    var4['rejectWithError'] = var8;
                    var4 = var5.bind(var7)(var4);
                    SaveGenerator(address=196);
case 46:
                    return var4;
case 47:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 48; continue _fun0003 }
case 49:
                    var8 = _closure1_slot11;
                    var7 = var8.createInvoiceFromServer;
                    var5 = var4.body;
                    var5 = var7.bind(var8)(var5);
case 50: // try_end0
                    return var5;
case 48:
                    return var4;
case 51: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.BillingError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var17 = var4;
                    var16 = var5;
                    var3 = new var17[var3](var16, var15);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 44:
                    return var2;
case 14:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var5 = function getSubscriptionInvoice() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var5;
    var1 = function _getSubscriptionInvoice() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 30; continue _fun0004 }
case 3:
                    var9 = var2.subscriptionId;
                    var3 = var2.preventFetch;
                    var6 = undefined;
                    SaveGenerator(address=31);
case 52:
                    return var6;
case 53:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    if(var3) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 7;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var6 = var3.HTTP;
                    var5 = var6.get;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var8 = _closure1_slot12;
                    var7 = var8.BILLING_SUBSCRIPTION_INVOICE;
                    var7 = var7.bind(var8)(var9);
                    var3['url'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=113);
case 58:
                    return var3;
case 59:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 27; continue _fun0004 }
case 60:
                    var6 = _closure1_slot11;
                    var5 = var6.createInvoiceFromServer;
                    var4 = var3.body;
                    var4 = var5.bind(var6)(var4);
                    return var4;
case 27:
                    return var3;
case 56:
                    var3 = null;
                    return var3;
case 54:
                    return var2;
case 30:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var4 = function useFetchGenericInvoicePreview(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg2;
            var2 = arg1;
            var8 = var2.preventFetch;
            var6 = undefined;
            if(!(var8 === var6)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            var8 = false;
case 61:
            var _closure2_slot0 = var8;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var2 = _closure1_slot9;
            var10 = null;
            var3 = var2.bind(var6)(var10);
            var2 = _closure1_slot5;
            var11 = 2;
            var5 = var2.bind(var6)(var3, var11);
            var2 = 0;
            var3 = var5[var2];
            var9 = 1;
            var5 = var5[var9];
            _closure2_slot2 = var5;
            var5 = _closure1_slot9;
            var10 = var5.bind(var6)(var10);
            var5 = _closure1_slot5;
            var5 = var5.bind(var6)(var10, var11);
            var2 = var5[var2];
            var5 = var5[var9];
            _closure2_slot3 = var5;
            var5 = _closure1_slot8;
            var4 = new Array(3);
            var4[0] = var8;
            var4[1] = var7;
            var7 = arg3;
            var4[2] = var7;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = function _loadPreview() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot6;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0007_ip = 28; continue _fun0007 }
case 63:
                                    var2 = undefined;
                                    var5 = undefined;
case 64: // try_start_0
                                    var7 = _closure2_slot3;
                                    var3 = null;
                                    var3 = var7.bind(var2)(var3);
                                    var3 = _closure2_slot1;
                                    var3 = var3.bind(var2)();
                                    SaveGenerator(address=37);
case 65:
                                    return var3;
case 55:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                                    if(var7) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                                    var5 = var3;
                                    var7 = _closure3_slot0;
                                    if(var7) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                                    var6 = _closure2_slot2;
                                    var5 = var6.bind(var2)(var5);
case 68: // try_end0
                                    _fun0007_ip = 70; continue _fun0007;
case 66:
                                    return var3;
case 71: // catch_target0
                                    CatchBlockStart(arg_register=3);
                                    var3 = _closure3_slot0;
                                    if(var3) { _fun0007_ip = 70; continue _fun0007 }
case 72:
                                    var5 = _closure2_slot3;
                                    var4 = var5.bind(var2)(var4);
                                    var4 = _closure2_slot2;
                                    var3 = null;
                                    var3 = var4.bind(var2)(var3);
case 70:
                                    return var2;
case 28:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure3_slot1 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot1 = var2;
                    var2 = false;
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot0;
                    if(var2) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                    var3 = function loadPreview() {
                        var1 = undefined;
                        var4 = _closure3_slot1;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = undefined;
                    var2 = var3.bind(var2)();
case 73:
                    var1 = function() {
                        var1 = true;
                        _closure3_slot0 = var1;
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot21 = var4;
    var1 = function getPaymentSourceIdFromInvoiceRecord(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var1 = var1.checkoutContext;
            var2 = null;
            var4 = var2 == var1;
            var6 = undefined;
            if(var4) { _fun0008_ip = 75; continue _fun0008 }
case 62:
            var6 = var1.payment_sources;
case 75:
            var4 = var2 == var6;
            var1 = null;
            if(var4) { _fun0008_ip = 72; continue _fun0008 }
case 65:
            var5 = var6.find;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.enabled;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0008_ip = 66; continue _fun0008 }
case 76:
            var3 = var4.id;
case 66:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0008_ip = 77; continue _fun0008 }
case 78:
            var2 = var3;
case 77:
            var1 = var2;
case 72:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = ['subscriptionId'];
    var _closure1_slot3 = var1;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var11[var1];
    var1 = undefined;
    var9 = var12.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 1;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 3;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var13 = var9.useCallback;
    var _closure1_slot7 = var13;
    var13 = var9.useEffect;
    var _closure1_slot8 = var13;
    var13 = var9.useState;
    var _closure1_slot9 = var13;
    var9 = var9.useRef;
    var _closure1_slot10 = var9;
    var9 = 4;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var9 = 5;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.Endpoints;
    var _closure1_slot12 = var9;
    var9 = 12;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/premium/PremiumSubscriptionInvoice.tsx';
    var9 = var10.bind(var11)(var9);
    var3['createSubscriptionInvoicePreview'] = var8;
    var3['updateSubscriptionInvoicePreview'] = var7;
    var3['createOneTimePurchaseInvoicePreview'] = var6;
    var3['getSubscriptionInvoice'] = var5;
    var3['useFetchGenericInvoicePreview'] = var4;
    var4 = function useFetchSubscriptionGiftInvoicePreview(arg1, arg2) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot10;
        var4 = undefined;
        var3 = var6.bind(var4)(var5);
        var _closure2_slot1 = var3;
        var3 = false;
        var3 = var6.bind(var4)(var3);
        var _closure2_slot2 = var3;
        var6 = _closure1_slot8;
        var3 = function() {
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var6.bind(var4)(var3);
        var3 = global;
        var6 = var3.JSON;
        var3 = var6.stringify;
        var7 = var3.bind(var6)(var5);
        var6 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = _closure2_slot1;
                var4 = var2.current;
                var2 = _closure2_slot2;
                var2 = var2.current;
                var3 = var4;
                if(var2) { _fun0009_ip = 79; continue _fun0009 }
case 74:
                var2 = {};
                var7 = var2;
                var6 = var4;
                var4 = copyDataProperties(var7, var6);
                var5 = null;
                var4 = 'paymentSourceId';
                var2[3] = var5;
                var3 = var2;
case 79:
                var2 = _closure2_slot2;
                var1 = true;
                var2['current'] = var1;
                var2 = _closure1_slot17;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            }
        };
        var3 = var6.bind(var4)(var2, var3);
        var2 = _closure1_slot21;
        var1 = arg2;
        var1 = var2.bind(var4)(var5, var3, var1);
        return var1;
    };
    var3['useFetchSubscriptionGiftInvoicePreview'] = var4;
    var4 = function useFetchSubscriptionInvoicePreview(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var7 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var7;
            var1 = 'subscriptionId';
            var1 = var1 in var7;
            var4 = var7;
            if(!var1) { _fun0010_ip = 80; continue _fun0010 }
case 75:
            var3 = var7.subscriptionId;
            var1 = null;
            var4 = var7;
            if(!(var1 == var3)) { _fun0010_ip = 80; continue _fun0010 }
case 81:
            var1 = var7.subscriptionId;
            var6 = _closure1_slot4;
            var3 = _closure1_slot3;
            var1 = undefined;
            var1 = var6.bind(var1)(var7, var3);
            _closure2_slot0 = var1;
            var4 = var1;
case 80:
            var7 = _closure1_slot10;
            var3 = undefined;
            var6 = var7.bind(var3)(var4);
            var _closure2_slot1 = var6;
            var6 = false;
            var6 = var7.bind(var3)(var6);
            var _closure2_slot2 = var6;
            var6 = function useServerProvidedInvoiceCache(arg1) {
                var4 = _closure1_slot10;
                var6 = undefined;
                var3 = null;
                var4 = var4.bind(var6)(var3);
                var _closure3_slot0 = var4;
                var7 = _closure1_slot8;
                var5 = new Array(1);
                var3 = arg1;
                var5[0] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = null;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var3 = var7.bind(var6)(var3, var5);
                var5 = _closure1_slot7;
                var3 = function(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var1 = _closure3_slot0;
                        var2 = var1.current;
                        var5 = null;
                        var1 = var5 != var2;
                        if(!var1) { _fun0011_ip = 82; continue _fun0011 }
case 83:
                        var4 = var3.paymentSourceId;
                        var1 = var5 != var4;
case 82:
                        if(!var1) { _fun0011_ip = 79; continue _fun0011 }
case 55:
                        var4 = var3.paymentSourceId;
                        var3 = var2.serverSelectedPaymentSourceId;
                        var1 = var4 === var3;
case 79:
                        if(!var1) { _fun0011_ip = 84; continue _fun0011 }
case 69:
                        var3 = var2.dedupeKey;
                        var2 = arg2;
                        var1 = var2 === var3;
case 84:
                        return var1;
                    }
                };
                var2 = new Array(0);
                var3 = var5.bind(var6)(var3, var2);
                var2 = function(arg1, arg2, arg3) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var6 = arg1;
                        var2 = _closure3_slot0;
                        var1 = null;
                        var3 = arg3;
                        var3 = var1 == var3;
                        if(!var3) { _fun0012_ip = 85; continue _fun0012 }
case 61:
                        var3 = {};
                        var3['record'] = var6;
                        var4 = arg2;
                        var3['dedupeKey'] = var4;
                        var5 = _closure1_slot22;
                        var4 = undefined;
                        var4 = var5.bind(var4)(var6);
                        var3['serverSelectedPaymentSourceId'] = var4;
                        var1 = var3;
case 85:
                        var2['current'] = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = new Array(0);
                var2 = var5.bind(var6)(var2, var1);
                var1 = {};
                var1['serverPricedPreviewRef'] = var4;
                var1['shouldReturnInvoiceCache'] = var3;
                var1['updateServerPricedPreviewRef'] = var2;
                return var1;
            };
            var6 = var6.bind(var3)(var5);
            var10 = var6.serverPricedPreviewRef;
            var _closure2_slot3 = var10;
            var9 = var6.shouldReturnInvoiceCache;
            var _closure2_slot4 = var9;
            var8 = var6.updateServerPricedPreviewRef;
            var _closure2_slot5 = var8;
            var7 = _closure1_slot8;
            var6 = function() {
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = var7.bind(var3)(var6);
            var6 = global;
            var7 = var6.JSON;
            var6 = var7.stringify;
            var11 = var6.bind(var7)(var4);
            var7 = _closure1_slot7;
            var6 = new Array(4);
            var6[0] = var11;
            var6[1] = var10;
            var6[2] = var9;
            var6[3] = var8;
            var2 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var5 = var3.current;
                    var3 = _closure2_slot2;
                    var4 = var3.current;
                    var3 = var5;
                    if(var4) { _fun0013_ip = 22; continue _fun0013 }
case 52:
                    var4 = {};
                    var11 = var4;
                    var10 = var5;
                    var5 = copyDataProperties(var11, var10);
                    var6 = null;
                    var5 = 'paymentSourceId';
                    var4[4] = var6;
                    var3 = var4;
case 22:
                    var _closure3_slot0 = var3;
                    var4 = 'subscriptionId';
                    var4 = var4 in var3;
                    if(var4) { _fun0013_ip = 86; continue _fun0013 }
case 80:
                    var4 = 'items';
                    var4 = var4 in var3;
                    if(var4) { _fun0013_ip = 23; continue _fun0013 }
case 87:
                    var4 = null;
                    return var4;
case 23:
                    var5 = _closure2_slot2;
                    var4 = true;
                    var5['current'] = var4;
                    var5 = global;
                    var7 = var5.JSON;
                    var6 = var7.stringify;
                    var4 = {};
                    var11 = var4;
                    var10 = var3;
                    var8 = copyDataProperties(var11, var10);
                    var9 = 'exclude_from_dedupe';
                    var8 = 'paymentSourceId';
                    var4[7] = var9;
                    var8 = var6.bind(var7)(var4);
                    var _closure3_slot1 = var8;
                    var4 = _closure2_slot3;
                    var4 = var4.current;
                    var6 = null;
                    if(!(var6 != var4)) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                    var7 = _closure2_slot4;
                    var6 = undefined;
                    var6 = var7.bind(var6)(var3, var8);
                    if(var6) { _fun0013_ip = 90; continue _fun0013 }
case 88:
                    var7 = _closure1_slot13;
                    var6 = undefined;
                    var7 = var7.bind(var6)(var3);
                    var6 = var7.then;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var5 = _closure2_slot5;
                        var4 = _closure3_slot1;
                        var2 = _closure3_slot0;
                        var3 = var2.paymentSourceId;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var1, var4, var3);
                        return var1;
                    };
                    var2 = var6.bind(var7)(var2);
                    _fun0013_ip = 91; continue _fun0013;
case 90:
                    var6 = var5.Promise;
                    var5 = var6.resolve;
                    var4 = var4.record;
                    var2 = var5.bind(var6)(var4);
case 91:
                    return var2;
case 86:
                    var2 = _closure2_slot2;
                    var1 = true;
                    var2['current'] = var1;
                    var2 = _closure1_slot15;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var2 = var7.bind(var3)(var2, var6);
            var1 = _closure1_slot21;
            var1 = var1.bind(var3)(var4, var2, var5);
            return var1;
        }
    };
    var3['useFetchSubscriptionInvoicePreview'] = var4;
    var4 = function useGetSubscriptionInvoice(arg1, arg2) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot10;
        var4 = undefined;
        var3 = var3.bind(var4)(var5);
        var _closure2_slot1 = var3;
        var6 = _closure1_slot8;
        var3 = function() {
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var6.bind(var4)(var3);
        var3 = global;
        var6 = var3.JSON;
        var3 = var6.stringify;
        var7 = var3.bind(var6)(var5);
        var6 = _closure1_slot7;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() {
            var3 = _closure1_slot19;
            var1 = _closure2_slot1;
            var2 = var1.current;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var6.bind(var4)(var2, var3);
        var2 = _closure1_slot21;
        var1 = arg2;
        var1 = var2.bind(var4)(var5, var3, var1);
        return var1;
    };
    var3['useGetSubscriptionInvoice'] = var4;
    var2 = function getItemUnitPriceWithDiscount(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = var2.subscriptionPlanPrice;
        var _closure2_slot1 = var3;
        var4 = var2.discounts;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var1 = arg1;
            var3 = var1.amount;
            var1 = _closure2_slot0;
            var1 = var1.quantity;
            var3 = var3 / var1;
            var1 = _closure2_slot1;
            var1 = var1 - var3;
            _closure2_slot1 = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot1;
        return var1;
    };
    var3['getItemUnitPriceWithDiscount'] = var2;
    return var1;
})();