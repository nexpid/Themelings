// app/modules/premium/PremiumSubscriptionInvoice.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var11 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function createSubscriptionInvoicePreview() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var7;
    var1 = function _createSubscriptionInvoicePreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 350; continue _fun0001 }
 13:
                    var14 = var2.items;
                    var13 = var2.paymentSourceId;
                    var12 = var2.trialId;
                    var11 = var2.code;
                    var4 = var2.applyEntitlements;
                    var6 = undefined;
                    if(!(var4 === var6)) { _fun0001_ip = 50; continue _fun0001 }
 48:
                    var4 = false;
 50:
                    var10 = var4;
                    var9 = var2.currency;
                    var7 = var2.renewal;
                    var5 = var2.metadata;
                    var8 = undefined;
                    SaveGenerator(address=77);
 75:
                    return var6;
 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 347; continue _fun0001 }
 86:
                    var4 = {};
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var15 = 6;
                    var15 = var17[var15];
                    var17 = var16.bind(var6)(var15);
                    var16 = var17.coerceExistingItemsToNewItemInterval;
                    var15 = var14;
                    var16 = var16.bind(var17)(var15);
                    var14 = var16;
                    var15 = var16.map;
                    var14 = function(arg1) {
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
                        var1[var2] = var3;
                        return var1;
                    };
                    var14 = var15.bind(var16)(var14);
                    var4['items'] = var14;
                    var4['payment_source_id'] = var13;
                    var4['trial_id'] = var12;
                    var4['code'] = var11;
                    var4['apply_entitlements'] = var10;
                    var4['currency'] = var9;
                    var4['renewal'] = var7;
                    var4['metadata'] = var5;
                    var8 = var4;
 189: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 7;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var7 = var4.HTTP;
                    var5 = var7.post;
                    var4 = {};
                    var9 = _closure1_slot12;
                    var9 = var9.BILLING_SUBSCRIPTIONS_PREVIEW;
                    var4['url'] = var9;
                    var4['body'] = var8;
                    var8 = true;
                    var4['oldFormErrors'] = var8;
                    var8 = false;
                    var4['rejectWithError'] = var8;
                    var4 = var5.bind(var7)(var4);
                    SaveGenerator(address=262);
 260:
                    return var4;
 262:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 291; continue _fun0001 }
 268:
                    var8 = _closure1_slot11;
                    var7 = var8.createInvoiceFromServer;
                    var5 = var4.body;
                    var5 = var7.bind(var8)(var5);
 288: // try_end0
                    return var5;
 291:
                    return var4;
 294: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.BillingError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var19 = var4;
                    var18 = var5;
                    var3 = new var19[var3](var18, var17);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 347:
                    return var2;
 350:
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
    var6 = function updateSubscriptionInvoicePreview() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var6;
    var1 = function _updateSubscriptionInvoicePreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 388; continue _fun0002 }
 13:
                    var9 = var2.subscriptionId;
                    var16 = var2.items;
                    var13 = var2.paymentSourceId;
                    var12 = var2.renewal;
                    var5 = var2.currency;
                    var14 = var2.applyEntitlements;
                    var6 = undefined;
                    if(!(var14 === var6)) { _fun0002_ip = 57; continue _fun0002 }
 55:
                    var14 = false;
 57:
                    var7 = var14;
                    var10 = var2.analyticsLocations;
                    var11 = var2.analyticsLocation;
                    var4 = var2.userDiscountOfferId;
                    var8 = undefined;
                    SaveGenerator(address=86);
 84:
                    return var6;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 385; continue _fun0002 }
 95:
                    var14 = null;
                    var17 = var16;
                    if(!(var14 != var17)) { _fun0002_ip = 138; continue _fun0002 }
 104:
                    var15 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var3 = 6;
                    var3 = var18[var3];
                    var15 = var15.bind(var6)(var3);
                    var3 = var15.coerceExistingItemsToNewItemInterval;
                    var17 = var3.bind(var15)(var16);
 138:
                    var3 = {};
                    var15 = var14 == var17;
                    var14 = undefined;
                    if(var15) { _fun0002_ip = 168; continue _fun0002 }
 149:
                    var16 = var17.map;
                    var15 = function(arg1) {
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
                        var1[var2] = var3;
                        return var1;
                    };
                    var14 = var16.bind(var17)(var15);
 168:
                    var3['items'] = var14;
                    var3['payment_source_id'] = var13;
                    var3['renewal'] = var12;
                    var3['apply_entitlements'] = var7;
                    var3['currency'] = var5;
                    var3['user_discount_offer_id'] = var4;
                    var8 = var3;
 201: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 7;
                    var3 = var7[var3];
                    var3 = var5.bind(var6)(var3);
                    var7 = var3.HTTP;
                    var5 = var7.patch;
                    var3 = {};
                    var13 = _closure1_slot12;
                    var12 = var13.BILLING_SUBSCRIPTION_PREVIEW;
                    var9 = var12.bind(var13)(var9);
                    var3['url'] = var9;
                    var9 = {};
                    var9['location'] = var11;
                    var9['location_stack'] = var10;
                    var3['query'] = var9;
                    var3['body'] = var8;
                    var8 = true;
                    var3['oldFormErrors'] = var8;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=297);
 295:
                    return var3;
 297:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 326; continue _fun0002 }
 303:
                    var7 = _closure1_slot11;
                    var5 = var7.createInvoiceFromServer;
                    var4 = var3.body;
                    var4 = var5.bind(var7)(var4);
 323: // try_end0
                    return var4;
 326:
                    return var3;
 329: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.BillingError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var20 = var4;
                    var19 = var5;
                    var3 = new var20[var3](var19, var18);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 385:
                    return var2;
 388:
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
    var5 = function createOneTimePurchaseInvoicePreview() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var5;
    var1 = function _createOneTimePurchaseInvoicePreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 284; continue _fun0003 }
 13:
                    var13 = var2.paymentSourceId;
                    var8 = var2.skuId;
                    var12 = var2.subscriptionPlanId;
                    var11 = var2.currency;
                    var10 = var2.loadId;
                    var6 = undefined;
                    SaveGenerator(address=49);
 47:
                    return var6;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 281; continue _fun0003 }
 58:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var4 = var7[var4];
                    var7 = var5.bind(var6)(var4);
                    var5 = var8;
                    var4 = 'SKU ID is missing for one time purchase gift invoice preview';
                    var4 = var7.bind(var6)(var5, var4);
 96: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 10;
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
 194:
                    return var4;
 196:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 225; continue _fun0003 }
 202:
                    var8 = _closure1_slot11;
                    var7 = var8.createInvoiceFromServer;
                    var5 = var4.body;
                    var5 = var7.bind(var8)(var5);
 222: // try_end0
                    return var5;
 225:
                    return var4;
 228: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 8;
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
 281:
                    return var2;
 284:
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
    var4 = function getSubscriptionInvoice() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var4;
    var1 = function _getSubscriptionInvoice() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 153; continue _fun0004 }
 13:
                    var9 = var2.subscriptionId;
                    var3 = var2.preventFetch;
                    var6 = undefined;
                    SaveGenerator(address=31);
 29:
                    return var6;
 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 150; continue _fun0004 }
 37:
                    if(var3) { _fun0004_ip = 145; continue _fun0004 }
 40:
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
 111:
                    return var3;
 113:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 142; continue _fun0004 }
 119:
                    var6 = _closure1_slot11;
                    var5 = var6.createInvoiceFromServer;
                    var4 = var3.body;
                    var4 = var5.bind(var6)(var4);
                    return var4;
 142:
                    return var3;
 145:
                    var3 = null;
                    return var3;
 150:
                    return var2;
 153:
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
    var1 = function useGenericSubscriptionInvoicePreview(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg2;
            var2 = arg1;
            var8 = var2.preventFetch;
            var6 = undefined;
            if(!(var8 === var6)) { _fun0005_ip = 22; continue _fun0005 }
 20:
            var8 = false;
 22:
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
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var7;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = function _loadPreview() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot6;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0007_ip = 106; continue _fun0007 }
 7:
                                    var2 = undefined;
                                    var5 = undefined;
 11: // try_start_0
                                    var4 = _closure2_slot3;
                                    var7 = null;
                                    var4 = var4.bind(var2)(var7);
                                    var4 = _closure2_slot2;
                                    var4 = var4.bind(var2)(var7);
                                    var4 = _closure2_slot1;
                                    var4 = var4.bind(var2)();
                                    SaveGenerator(address=46);
 44:
                                    return var4;
 46:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                                    if(var7) { _fun0007_ip = 76; continue _fun0007 }
 52:
                                    var5 = var4;
                                    var7 = _closure3_slot0;
                                    if(var7) { _fun0007_ip = 74; continue _fun0007 }
 65:
                                    var6 = _closure2_slot2;
                                    var5 = var6.bind(var2)(var5);
 74: // try_end0
                                    _fun0007_ip = 103; continue _fun0007;
 76:
                                    return var4;
 79: // catch_target0
                                    CatchBlockStart(arg_register=2);
                                    var4 = _closure3_slot0;
                                    if(var4) { _fun0007_ip = 103; continue _fun0007 }
 91:
                                    var4 = _closure2_slot3;
                                    var3 = var4.bind(var2)(var3);
 103:
                                    return var2;
 106:
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
                    if(var2) { _fun0006_ip = 42; continue _fun0006 }
 29:
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
 42:
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
    var _closure1_slot21 = var1;
    var1 = ['subscriptionId'];
    var _closure1_slot3 = var1;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var12 = var8.useCallback;
    var _closure1_slot7 = var12;
    var12 = var8.useEffect;
    var _closure1_slot8 = var12;
    var12 = var8.useState;
    var _closure1_slot9 = var12;
    var8 = var8.useRef;
    var _closure1_slot10 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.Endpoints;
    var _closure1_slot12 = var8;
    var8 = 11;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/premium/PremiumSubscriptionInvoice.tsx';
    var8 = var9.bind(var10)(var8);
    var3['createSubscriptionInvoicePreview'] = var7;
    var3['updateSubscriptionInvoicePreview'] = var6;
    var3['createOneTimePurchaseInvoicePreview'] = var5;
    var3['getSubscriptionInvoice'] = var4;
    var4 = function useOneTimePurchaseInvoicePreview(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot10;
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var _closure2_slot1 = var5;
        var6 = _closure1_slot8;
        var5 = function() {
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var5 = var6.bind(var3)(var5);
        var5 = global;
        var6 = var5.JSON;
        var5 = var6.stringify;
        var7 = var5.bind(var6)(var4);
        var6 = _closure1_slot7;
        var5 = new Array(1);
        var5[0] = var7;
        var2 = function() {
            var3 = _closure1_slot17;
            var1 = _closure2_slot1;
            var2 = var1.current;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var6.bind(var3)(var2, var5);
        var1 = _closure1_slot21;
        var1 = var1.bind(var3)(var4, var2);
        return var1;
    };
    var3['useOneTimePurchaseInvoicePreview'] = var4;
    var4 = function useSubscriptionInvoicePreview(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var1 = 'subscriptionId';
            var1 = var1 in var6;
            var4 = var6;
            if(!var1) { _fun0008_ip = 70; continue _fun0008 }
 23:
            var3 = var6.subscriptionId;
            var1 = null;
            var4 = var6;
            if(!(var1 == var3)) { _fun0008_ip = 70; continue _fun0008 }
 38:
            var1 = var6.subscriptionId;
            var5 = _closure1_slot4;
            var3 = _closure1_slot3;
            var1 = undefined;
            var1 = var5.bind(var1)(var6, var3);
            _closure2_slot0 = var1;
            var4 = var1;
 70:
            var5 = _closure1_slot10;
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var _closure2_slot1 = var5;
            var6 = _closure1_slot8;
            var5 = function() {
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var5 = var6.bind(var3)(var5);
            var5 = global;
            var6 = var5.JSON;
            var5 = var6.stringify;
            var7 = var5.bind(var6)(var4);
            var6 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var7;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = var1.current;
                    var1 = 'subscriptionId';
                    var1 = var1 in var4;
                    if(var1) { _fun0009_ip = 52; continue _fun0009 }
 23:
                    var1 = 'items';
                    var2 = var1 in var4;
                    var1 = null;
                    if(!var2) { _fun0009_ip = 50; continue _fun0009 }
 36:
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var4);
 50:
                    _fun0009_ip = 66; continue _fun0009;
 52:
                    var3 = _closure1_slot15;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var4);
 66:
                    return var1;
                }
            };
            var2 = var6.bind(var3)(var2, var5);
            var1 = _closure1_slot21;
            var1 = var1.bind(var3)(var4, var2);
            return var1;
        }
    };
    var3['useSubscriptionInvoicePreview'] = var4;
    var4 = function useGetSubscriptionInvoice(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot10;
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var _closure2_slot1 = var5;
        var6 = _closure1_slot8;
        var5 = function() {
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var5 = var6.bind(var3)(var5);
        var5 = global;
        var6 = var5.JSON;
        var5 = var6.stringify;
        var7 = var5.bind(var6)(var4);
        var6 = _closure1_slot7;
        var5 = new Array(1);
        var5[0] = var7;
        var2 = function() {
            var3 = _closure1_slot19;
            var1 = _closure2_slot1;
            var2 = var1.current;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var6.bind(var3)(var2, var5);
        var1 = _closure1_slot21;
        var1 = var1.bind(var3)(var4, var2);
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