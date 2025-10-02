// app/actions/BillingActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var19 = metroImportDefault;
    var3 = exports;
    var18 = dependencyMap;
    var _closure1_slot0 = var17;
    var _closure1_slot1 = var19;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var18;
    var1 = function _deletePaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var6 = 11;
                    var2 = var2[var6];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var2);
                    var3 = var7.dispatch;
                    var2 = {};
                    var8 = 'BILLING_PAYMENT_SOURCE_REMOVE_START';
                    var2['type'] = var8;
                    var2 = var3.bind(var7)(var2);
case 4: // try_start_0
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 12;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var3 = var7.del;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var11 = _closure1_slot12;
                    var10 = var11.BILLING_PAYMENT_SOURCE;
                    var8 = var9;
                    var8 = var10.bind(var11)(var8);
                    var2['url'] = var8;
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=134);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var6];
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var10 = 'BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS';
                    var3['type'] = var10;
                    var3['id'] = var9;
                    var3 = var7.bind(var8)(var3);
case 9: // try_end0
                    return var5;
case 7:
                    return var2;
case 10: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 13;
                    var2 = var3[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.BillingError;
                    var7 = var2.prototype;
                    var7 = Object.create(var7, {constructor: {value: var2}});
                    var13 = var7;
                    var12 = var8;
                    var2 = new var13[var2](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var7;
                    var4 = _closure1_slot1;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_PAYMENT_SOURCE_REMOVE_FAIL';
                    var3['type'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function _updatePaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 3:
                    var8 = arg1;
                    var2 = arg2;
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var6 = 11;
                    var3 = var3[var6];
                    var5 = undefined;
                    var9 = var7.bind(var5)(var3);
                    var7 = var9.dispatch;
                    var3 = {};
                    var10 = 'BILLING_PAYMENT_SOURCE_UPDATE_START';
                    var3['type'] = var10;
                    var3 = var7.bind(var9)(var3);
case 12: // try_start_0
                    var9 = var2;
                    var7 = var9.billingAddress;
                    var14 = var7.line1;
                    var13 = var7.line2;
                    var12 = var7.postalCode;
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot4;
                    var16 = var3.bind(var5)(var7, var2);
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 12;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var3 = var7.patch;
                    var2 = {};
                    var15 = _closure1_slot12;
                    var10 = var15.BILLING_PAYMENT_SOURCE;
                    var8 = var10.bind(var15)(var8);
                    var2['url'] = var8;
                    var8 = {};
                    var10 = {};
                    var17 = var10;
                    var11 = copyDataProperties(var17, var16);
                    var11 = 'line_1';
                    var10[var11] = var14;
                    var11 = 'line_2';
                    var10[var11] = var13;
                    var11 = 'postal_code';
                    var10[var11] = var12;
                    var8['billing_address'] = var10;
                    var10 = var9.expiresMonth;
                    var8['expires_month'] = var10;
                    var10 = var9.expiresYear;
                    var8['expires_year'] = var10;
                    var9 = var9.isDefault;
                    var8['default'] = var9;
                    var2['body'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=250);
case 13:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var8 = _closure1_slot7;
                    var7 = var8.createFromServer;
                    var3 = var2.body;
                    var9 = var7.bind(var8)(var3);
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var6];
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var10 = 'BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS';
                    var3['type'] = var10;
                    var3['paymentSource'] = var9;
                    var3 = var7.bind(var8)(var3);
case 17: // try_end0
                    return var5;
case 15:
                    return var2;
case 18: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 14;
                    var2 = var3[var2];
                    var7 = var7.bind(var5)(var2);
                    var2 = var7.parseV8BillingAddressSkemaErrorToBillingError;
                    var2 = var2.bind(var7)(var8);
                    var4 = _closure1_slot1;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_PAYMENT_SOURCE_UPDATE_FAIL';
                    var3['type'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function _getClientSecret() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var7 = _closure1_slot12;
                    var6 = var7.BILLING_STRIPE_PAYMENT_INTENTS;
                    var5 = arg1;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=85);
case 21:
                    return var2;
case 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var3 = var2.body;
                    var3 = var3.stripe_payment_intent_client_secret;
                    return var3;
case 23:
                    return var2;
case 19:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function _getPaymentIntentInfo() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 25; continue _fun0004 }
case 20:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var7 = _closure1_slot12;
                    var6 = var7.BILLING_STRIPE_PAYMENT_INTENTS;
                    var5 = arg1;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=85);
case 21:
                    return var2;
case 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 26; continue _fun0004 }
case 24:
                    var4 = var2.body;
                    var3 = {};
                    var5 = var4.stripe_payment_intent_client_secret;
                    var3['clientSecret'] = var5;
                    var4 = var4.stripe_payment_intent_payment_method_id;
                    var3['paymentMethodId'] = var4;
                    return var3;
case 26:
                    return var2;
case 25:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot32 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot32 = var1;
    var15 = function validatePaymentSourceBillingAddress() {
        var1 = undefined;
        var4 = _closure1_slot34;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot33 = var15;
    var1 = function _validatePaymentSourceBillingAddress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 27; continue _fun0005 }
case 3:
                    var7 = arg1;
case 28: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot12;
                    var5 = var5.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS;
                    var2['url'] = var5;
                    var5 = {};
                    var6 = {};
                    var8 = var7.name;
                    var6['name'] = var8;
                    var8 = var7.line1;
                    var6['line_1'] = var8;
                    var8 = var7.line2;
                    var6['line_2'] = var8;
                    var8 = var7.city;
                    var6['city'] = var8;
                    var8 = var7.state;
                    var6['state'] = var8;
                    var8 = var7.postalCode;
                    var6['postal_code'] = var8;
                    var8 = var7.country;
                    var6['country'] = var8;
                    var7 = var7.email;
                    var6['email'] = var7;
                    var5['billing_address'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=177);
case 29:
                    return var2;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                    var3 = var2.body;
                    var3 = var3.token;
case 33: // try_end0
                    return var3;
case 31:
                    return var2;
case 34: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 14;
                    var2 = var6[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.parseV8BillingAddressSkemaErrorToBillingError;
                    var2 = var2.bind(var4)(var7);
                    var4 = _closure1_slot1;
                    var3 = 11;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
                    var3['type'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 27:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot34 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot34 = var1;
    var14 = function createAdyenPaymentSourceToken(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot16;
            var2 = var3.has;
            var1 = var6.type;
            var2 = var2.bind(var3)(var1);
            var5 = null;
            var1 = null;
            if(var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var2 = global;
            var4 = var2.JSON;
            var3 = var4.stringify;
            var2 = {};
            var8 = _closure1_slot19;
            var7 = var8.get;
            var6 = var6.type;
            var6 = var7.bind(var8)(var6);
            var7 = var5 != var6;
            var5 = null;
            if(!var7) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var5 = var6;
case 37:
            var2['type'] = var5;
            var1 = var3.bind(var4)(var2);
case 35:
            return var1;
        }
    };
    var _closure1_slot35 = var14;
    var13 = function createPaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot37;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot36 = var13;
    var1 = function _createPaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[4];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 39; continue _fun0007 }
case 28:
                    var15 = arg1;
                    var13 = arg2;
                    var14 = arg3;
                    var12 = arg4;
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var2 = false;
case 40:
                    var11 = var2;
                    var3 = undefined;
                    SaveGenerator(address=42);
case 42:
                    return var6;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var7 = 11;
                    var5 = var5[var7];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var10 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var5['type'] = var10;
                    var5 = var8.bind(var9)(var5);
case 46: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 12;
                    var5 = var9[var5];
                    var5 = var8.bind(var6)(var5);
                    var9 = var5.HTTP;
                    var8 = var9.post;
                    var5 = {};
                    var10 = _closure1_slot12;
                    var10 = var10.BILLING_PAYMENT_SOURCES;
                    var5['url'] = var10;
                    var10 = {};
                    var16 = var12.analyticsLocation;
                    var10['location'] = var16;
                    var5['query'] = var10;
                    var10 = {};
                    var10['payment_gateway'] = var15;
                    var10['token'] = var13;
                    var13 = {};
                    var15 = var14.name;
                    var13['name'] = var15;
                    var15 = var14.line1;
                    var13['line_1'] = var15;
                    var15 = var14.line2;
                    var13['line_2'] = var15;
                    var15 = var14.city;
                    var13['city'] = var15;
                    var15 = var14.state;
                    var13['state'] = var15;
                    var15 = var14.postalCode;
                    var13['postal_code'] = var15;
                    var15 = var14.country;
                    var13['country'] = var15;
                    var14 = var14.email;
                    var13['email'] = var14;
                    var10['billing_address'] = var13;
                    var13 = var12.billingAddressToken;
                    var10['billing_address_token'] = var13;
                    var13 = var12.bank;
                    var10['bank'] = var13;
                    var12 = var12.returnUrl;
                    var10['return_url'] = var12;
                    var10['default'] = var11;
                    var5['body'] = var10;
                    var10 = false;
                    var5['rejectWithError'] = var10;
                    var5 = var8.bind(var9)(var5);
                    SaveGenerator(address=321);
case 47:
                    return var5;
case 15:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var10 = _closure1_slot7;
                    var9 = var10.createFromServer;
                    var8 = var5.body;
                    var8 = var9.bind(var10)(var8);
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var9 = var9[var7];
                    var11 = var10.bind(var6)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var12 = 'BILLING_PAYMENT_SOURCE_CREATE_SUCCESS';
                    var9['type'] = var12;
                    var9['paymentSource'] = var8;
                    var9 = var10.bind(var11)(var9);
case 50: // try_end0
                    return var8;
case 48:
                    return var5;
case 51: // catch_target0
                    CatchBlockStart(arg_register=12);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var5 = 14;
                    var8 = var10[var5];
                    var11 = var9.bind(var6)(var8);
                    var8 = var11.parseV8BillingAddressSkemaErrorToBillingError;
                    var8 = var8.bind(var11)(var13);
                    var3 = var8;
                    var14 = null;
                    var11 = var14 != var13;
                    var12 = undefined;
                    if(!var11) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    var15 = var13.body;
                    var11 = var14 != var15;
                    var12 = var15;
case 52:
                    if(!var11) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                    var11 = var12.adyen_redirect_url;
case 54:
                    if(!var11) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var12 = var8.fields;
                    var15 = var14 == var13;
                    var11 = undefined;
                    if(var15) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                    var13 = var13.body;
                    var14 = var14 == var13;
                    var11 = undefined;
                    if(var14) { _fun0007_ip = 58; continue _fun0007 }
case 60:
                    var11 = var13.adyen_redirect_url;
case 58:
                    var12['adyen_redirect_url'] = var11;
case 56:
                    var8 = var8.code;
                    var5 = var10[var5];
                    var5 = var9.bind(var6)(var5);
                    var5 = var5.ErrorCodes;
                    var5 = var5.CONFIRMATION_REQUIRED;
                    if(!(var8 !== var5)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
                    var4['type'] = var7;
                    var7 = var3;
                    var4['error'] = var7;
                    var4 = var5.bind(var6)(var4);
case 61:
                    throw var3;
case 44:
                    return var2;
case 39:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot37 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot37 = var1;
    var12 = function dispatchPaymentElementsConfirmationError(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arguments[1];
            var5 = arguments[2];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
            var6 = true;
case 63:
            if(!(var5 === var4)) { _fun0008_ip = 38; continue _fun0008 }
case 65:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 15;
            var2 = var8[var1];
            var2 = var7.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.khEaRE;
            var5 = var2.bind(var3)(var1);
case 38:
            var3 = _closure1_slot39;
            var2 = {};
            var1 = {};
            var7 = 'payment_elements';
            var1['source'] = var7;
            var2['tags'] = var1;
            var12 = arg1;
            var13 = undefined;
            var11 = var6;
            var10 = var5;
            var9 = var2;
            var1 = var13[var3](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var _closure1_slot38 = var12;
    var11 = function dispatchConfirmationError(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var8 = arg1;
            var10 = arguments[1];
            var15 = arguments[2];
            var5 = arguments[3];
            var4 = undefined;
            if(!(var10 === var4)) { _fun0009_ip = 66; continue _fun0009 }
case 65:
            var10 = true;
case 66:
            if(!(var15 === var4)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 15;
            var2 = var7[var1];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.khEaRE;
            var15 = var2.bind(var3)(var1);
case 67:
            if(!(var5 === var4)) { _fun0009_ip = 35; continue _fun0009 }
case 69:
            var5 = {};
case 35:
            var6 = _closure1_slot18;
            var3 = var6.includes;
            var1 = var8.type;
            var1 = var3.bind(var6)(var1);
            if(var1) { _fun0009_ip = 70; continue _fun0009 }
case 71:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 13;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var7 = var3.BillingError;
            var9 = 'string';
            var6 = typeof var8;
            var3 = var8;
            if(!(var9 === var6)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var3 = var15;
case 72:
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var20 = var6;
            var19 = var3;
            var3 = new var20[var7](var19, var18);
            var9 = var3 instanceof Object ? var3 : var6;
            var3 = var9.message;
            var1['failure_message'] = var3;
            var3 = var9.code;
            var1['status_code'] = var3;
            var12 = var9.code;
            var11 = 429;
            var3 = var10;
            var6 = var9;
            var7 = var1;
            if(!(var11 === var12)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            var3 = false;
            var6 = var9;
            var7 = var1;
            _fun0009_ip = 74; continue _fun0009;
case 70:
            var1 = var8.message;
            var9 = null;
            var12 = var15;
            if(!(var9 != var1)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
            var14 = var8.message;
            var1 = global;
            var1 = var1.HermesInternal;
            var13 = var1.concat;
            var11 = '';
            var1 = ': ';
            var12 = var13.bind(var11)(var15, var1, var14);
case 76:
            var1 = {};
            var1['failure_message'] = var12;
            var11 = var8.type;
            var1['error_type'] = var11;
            var11 = var8.code;
            var1['failure_code'] = var11;
            var11 = var8.decline_code;
            var1['failure_sub_code'] = var11;
            var11 = var8.payment_method;
            var13 = var9 == var11;
            var9 = undefined;
            if(var13) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var9 = var11.type;
case 78:
            var1['payment_source_type'] = var9;
            var11 = var8.type;
            var9 = 'card_error';
            if(!(var9 === var11)) { _fun0009_ip = 80; continue _fun0009 }
case 81:
            var11 = _closure1_slot1;
            var13 = _closure1_slot3;
            var9 = 16;
            var9 = var13[var9];
            var14 = var11.bind(var4)(var9);
            var13 = var14.track;
            var9 = _closure1_slot11;
            var11 = var9.PAYMENT_SOURCE_CREATION_FAILED;
            var9 = {};
            var19 = var9;
            var18 = var1;
            var15 = copyDataProperties(var19, var18);
            var15 = global;
            var15 = var15.Error;
            var16 = var15.prototype;
            var16 = Object.create(var16, {constructor: {value: var15}});
            var20 = var16;
            var15 = new var20[var15](var19);
            var15 = var15 instanceof Object ? var15 : var16;
            var16 = var15.stack;
            var15 = 'stacktrace';
            var9[var15] = var16;
            var9 = var13.bind(var14)(var11, var9);
            var10 = false;
case 80:
            var11 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 13;
            var9 = var13[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.BillingError;
            var11 = var9.prototype;
            var11 = Object.create(var11, {constructor: {value: var9}});
            var20 = var11;
            var19 = var12;
            var9 = new var20[var9](var19, var18);
            var6 = var9 instanceof Object ? var9 : var11;
            var3 = var10;
            var7 = var1;
case 74:
            var9 = _closure1_slot1;
            var10 = _closure1_slot3;
            var1 = 11;
            var1 = var10[var1];
            var10 = var9.bind(var4)(var1);
            var9 = var10.dispatch;
            var1 = {};
            var11 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
            var1['type'] = var11;
            var1['error'] = var6;
            var1 = var9.bind(var10)(var1);
            var1 = global;
            var1 = var1.Error;
            var10 = 'string';
            var9 = typeof var8;
            if(!(var10 !== var9)) { _fun0009_ip = 82; continue _fun0009 }
case 83:
            var8 = var6.message;
case 82:
            var6 = var1.prototype;
            var6 = Object.create(var6, {constructor: {value: var1}});
            var20 = var6;
            var19 = var8;
            var1 = new var20[var1](var19, var18);
            var1 = var1 instanceof Object ? var1 : var6;
            if(!var3) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 17;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.captureBillingException;
            var2 = {};
            var19 = var2;
            var18 = var5;
            var6 = copyDataProperties(var19, var18);
            var6 = {};
            var19 = var6;
            var18 = var7;
            var7 = copyDataProperties(var19, var18);
            var18 = var5.extra;
            var19 = var6;
            var5 = copyDataProperties(var19, var18);
            var5 = 'extra';
            var2[var5] = var6;
            var2 = var3.bind(var4)(var1, var2);
case 84:
            return var1;
        }
    };
    var _closure1_slot39 = var11;
    var1 = function _createCardToken() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                    var7 = null;
                    if(!(var7 != var6)) { _fun0010_ip = 88; continue _fun0010 }
case 89:
                    if(!(var7 != var8)) { _fun0010_ip = 88; continue _fun0010 }
case 36:
                    var5 = var8.getElement;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 18;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var9.bind(var4)(var3);
                    var3 = var3.CardNumberElement;
                    var5 = var5.bind(var8)(var3);
                    if(!(var7 != var5)) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                    var3 = var6.createToken;
                    var3 = var3.bind(var6)(var5);
                    SaveGenerator(address=95);
case 92:
                    return var3;
case 93:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 94; continue _fun0010 }
case 95:
                    var5 = var3.token;
                    var6 = var3.error;
                    if(!(var7 == var6)) { _fun0010_ip = 96; continue _fun0010 }
case 71:
                    if(!(var7 != var5)) { _fun0010_ip = 25; continue _fun0010 }
case 97:
                    var5 = var5.id;
                    return var5;
case 25:
                    var7 = _closure1_slot39;
                    var5 = 'token not available with successful stripe call';
                    var5 = var7.bind(var4)(var5);
                    throw var5;
case 96:
                    var5 = _closure1_slot39;
                    var5 = var5.bind(var4)(var6);
                    throw var5;
case 94:
                    return var3;
case 90:
                    var3 = _closure1_slot39;
                    var2 = 'Unable to load card elements from Stripe';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 88:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'Stripe or elements not loaded';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 86:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot40 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot40 = var1;
    var1 = function _confirmEPS() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var12 = arg2;
                    var11 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 98; continue _fun0011 }
case 99:
                    var8 = null;
                    if(!(var8 != var7)) { _fun0011_ip = 100; continue _fun0011 }
case 101:
                    if(!(var8 != var12)) { _fun0011_ip = 102; continue _fun0011 }
case 103:
                    var10 = var11.email;
                    var13 = var11.name;
                    var20 = var11.line1;
                    var19 = var11.line2;
                    var18 = var11.city;
                    var17 = var11.state;
                    var16 = var11.postalCode;
                    var15 = var11.country;
                    if(!(var8 != var13)) { _fun0011_ip = 104; continue _fun0011 }
case 35:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 11;
                    var2 = var5[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.dispatch;
                    var2 = {};
                    var9 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var2['type'] = var9;
                    var2 = var3.bind(var5)(var2);
                    var2 = _closure1_slot33;
                    var2 = var2.bind(var6)(var11);
                    SaveGenerator(address=148);
case 105:
                    return var2;
case 106:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 107; continue _fun0011 }
case 108:
                    var5 = var7.createPaymentMethod;
                    var3 = {};
                    var9 = 'eps';
                    var3['type'] = var9;
                    var9 = {};
                    var9['bank'] = var12;
                    var3['eps'] = var9;
                    var9 = {};
                    var14 = {};
                    var14['line1'] = var20;
                    var14['line2'] = var19;
                    var14['city'] = var18;
                    var14['state'] = var17;
                    var14['postal_code'] = var16;
                    var14['country'] = var15;
                    var9['address'] = var14;
                    var9['name'] = var13;
                    var9['email'] = var10;
                    var3['billing_details'] = var9;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=246);
case 70:
                    return var3;
case 109:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 110; continue _fun0011 }
case 111:
                    var7 = var3.paymentMethod;
                    var5 = var3.error;
                    if(!(var8 == var5)) { _fun0011_ip = 112; continue _fun0011 }
case 113:
                    if(!(var8 != var7)) { _fun0011_ip = 114; continue _fun0011 }
case 115:
                    var10 = _closure1_slot36;
                    var8 = _closure1_slot13;
                    var24 = var8.STRIPE;
                    var23 = var7.id;
                    var7 = {};
                    var7['billingAddressToken'] = var2;
                    var13 = arg4;
                    var7['analyticsLocation'] = var13;
                    var7['bank'] = var12;
                    var25 = undefined;
                    var22 = var11;
                    var21 = var7;
                    var7 = var25[var10](var24, var23, var22, var21, var20);
                    return var7;
case 114:
                    var8 = _closure1_slot39;
                    var7 = 'paymentMethod not available with successful stripe call';
                    var7 = var8.bind(var6)(var7);
                    throw var7;
case 112:
                    var4 = _closure1_slot39;
                    var4 = var4.bind(var6)(var5);
                    throw var4;
case 110:
                    return var3;
case 107:
                    return var2;
case 104:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'Name required for EPS';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 102:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'Bank required for EPS';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 100:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'Stripe not loaded';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 98:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot41 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot41 = var1;
    var1 = function _confirmIdeal() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var11 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 116; continue _fun0012 }
case 87:
                    var8 = null;
                    if(!(var8 != var7)) { _fun0012_ip = 117; continue _fun0012 }
case 89:
                    var10 = var11.email;
                    var12 = var11.name;
                    var19 = var11.line1;
                    var18 = var11.line2;
                    var17 = var11.city;
                    var16 = var11.state;
                    var15 = var11.postalCode;
                    var14 = var11.country;
                    if(!(var8 != var12)) { _fun0012_ip = 118; continue _fun0012 }
case 119:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 11;
                    var2 = var5[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.dispatch;
                    var2 = {};
                    var9 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var2['type'] = var9;
                    var2 = var3.bind(var5)(var2);
                    var2 = _closure1_slot33;
                    var2 = var2.bind(var6)(var11);
                    SaveGenerator(address=138);
case 120:
                    return var2;
case 121:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 122; continue _fun0012 }
case 123:
                    var5 = var7.createPaymentMethod;
                    var3 = {};
                    var9 = 'ideal';
                    var3['type'] = var9;
                    var9 = {};
                    var3['ideal'] = var9;
                    var9 = {};
                    var13 = {};
                    var13['line1'] = var19;
                    var13['line2'] = var18;
                    var13['city'] = var17;
                    var13['state'] = var16;
                    var13['postal_code'] = var15;
                    var13['country'] = var14;
                    var9['address'] = var13;
                    var9['name'] = var12;
                    var9['email'] = var10;
                    var3['billing_details'] = var9;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=231);
case 124:
                    return var3;
case 75:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0012_ip = 125; continue _fun0012 }
case 126:
                    var7 = var3.paymentMethod;
                    var5 = var3.error;
                    if(!(var8 == var5)) { _fun0012_ip = 127; continue _fun0012 }
case 111:
                    if(!(var8 != var7)) { _fun0012_ip = 128; continue _fun0012 }
case 16:
                    var10 = _closure1_slot36;
                    var8 = _closure1_slot13;
                    var23 = var8.STRIPE;
                    var22 = var7.id;
                    var7 = {};
                    var7['billingAddressToken'] = var2;
                    var12 = arg3;
                    var7['analyticsLocation'] = var12;
                    var24 = undefined;
                    var21 = var11;
                    var20 = var7;
                    var7 = var24[var10](var23, var22, var21, var20, var19);
                    return var7;
case 128:
                    var8 = _closure1_slot39;
                    var7 = 'paymentMethod not available with successful stripe call';
                    var7 = var8.bind(var6)(var7);
                    throw var7;
case 127:
                    var4 = _closure1_slot39;
                    var4 = var4.bind(var6)(var5);
                    throw var4;
case 125:
                    return var3;
case 122:
                    return var2;
case 118:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'Name required for iDEAL';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 117:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'Stripe not loaded';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 116:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot42 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function _confirmPrzelewy() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var11 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 129; continue _fun0013 }
case 87:
                    var8 = null;
                    if(!(var8 != var7)) { _fun0013_ip = 130; continue _fun0013 }
case 89:
                    var10 = var11.email;
                    var13 = var11.name;
                    var20 = var11.line1;
                    var19 = var11.line2;
                    var18 = var11.city;
                    var17 = var11.state;
                    var16 = var11.postalCode;
                    var15 = var11.country;
                    if(!(var8 != var10)) { _fun0013_ip = 131; continue _fun0013 }
case 119:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 11;
                    var2 = var5[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.dispatch;
                    var2 = {};
                    var9 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var2['type'] = var9;
                    var2 = var3.bind(var5)(var2);
                    var2 = _closure1_slot33;
                    var2 = var2.bind(var6)(var11);
                    SaveGenerator(address=138);
case 120:
                    return var2;
case 121:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 132; continue _fun0013 }
case 123:
                    var3 = arg2;
                    var12 = var3.p24Bank;
                    var5 = var7.createPaymentMethod;
                    var3 = {};
                    var9 = 'p24';
                    var3['type'] = var9;
                    var9 = {};
                    var9['bank'] = var12;
                    var3['p24'] = var9;
                    var9 = {};
                    var14 = {};
                    var14['line1'] = var20;
                    var14['line2'] = var19;
                    var14['city'] = var18;
                    var14['state'] = var17;
                    var14['postal_code'] = var16;
                    var14['country'] = var15;
                    var9['address'] = var14;
                    var9['name'] = var13;
                    var9['email'] = var10;
                    var3['billing_details'] = var9;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=247);
case 133:
                    return var3;
case 134:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0013_ip = 135; continue _fun0013 }
case 136:
                    var7 = var3.paymentMethod;
                    var5 = var3.error;
                    if(!(var8 == var5)) { _fun0013_ip = 137; continue _fun0013 }
case 138:
                    if(!(var8 != var7)) { _fun0013_ip = 139; continue _fun0013 }
case 140:
                    var10 = _closure1_slot36;
                    var8 = _closure1_slot13;
                    var24 = var8.STRIPE;
                    var23 = var7.id;
                    var7 = {};
                    var7['billingAddressToken'] = var2;
                    var13 = arg4;
                    var7['analyticsLocation'] = var13;
                    var7['bank'] = var12;
                    var25 = undefined;
                    var22 = var11;
                    var21 = var7;
                    var7 = var25[var10](var24, var23, var22, var21, var20);
                    return var7;
case 139:
                    var8 = _closure1_slot39;
                    var7 = 'paymentMethod not available with successful stripe call';
                    var7 = var8.bind(var6)(var7);
                    throw var7;
case 137:
                    var4 = _closure1_slot39;
                    var4 = var4.bind(var6)(var5);
                    throw var4;
case 135:
                    return var3;
case 132:
                    return var2;
case 131:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'Email required for Przelewy24';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 130:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'Stripe not loaded';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 129:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot43 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot43 = var1;
    var1 = function _confirmPaymentElementSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    var14 = arg1;
                    var13 = arg2;
                    var15 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 141; continue _fun0014 }
case 99:
                    var9 = null;
                    if(!(var9 != var14)) { _fun0014_ip = 142; continue _fun0014 }
case 101:
                    if(!(var9 != var15)) { _fun0014_ip = 143; continue _fun0014 }
case 103:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 11;
                    var2 = var4[var2];
                    var12 = undefined;
                    var4 = var3.bind(var12)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure1_slot33;
                    var2 = var2.bind(var12)(var13);
                    SaveGenerator(address=95);
case 92:
                    return var2;
case 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 144; continue _fun0014 }
case 145:
                    var3 = _closure1_slot28;
                    var3 = var3.bind(var12)(var15);
                    SaveGenerator(address=117);
case 146:
                    return var3;
case 147:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0014_ip = 148; continue _fun0014 }
case 149:
                    var4 = _closure1_slot21;
                    var5 = var4.CARD;
                    var4 = arg3;
                    if(!(var4 !== var5)) { _fun0014_ip = 126; continue _fun0014 }
case 150:
                    var5 = var14.createPaymentMethod;
                    var4 = {};
                    var4['elements'] = var15;
                    var4 = var5.bind(var14)(var4);
                    SaveGenerator(address=165);
case 151:
                    return var4;
case 152:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 153; continue _fun0014 }
case 154:
                    var5 = var4.paymentMethod;
                    var7 = var4.error;
                    if(!(var9 == var7)) { _fun0014_ip = 155; continue _fun0014 }
case 156:
                    if(!(var9 != var5)) { _fun0014_ip = 34; continue _fun0014 }
case 157:
                    var11 = var5.id;
                    _fun0014_ip = 158; continue _fun0014;
case 34:
                    var10 = _closure1_slot38;
                    var6 = 'paymentMethod not available with successful stripe call';
                    var5 = true;
                    var5 = var10.bind(var12)(var6, var5);
                    throw var5;
case 155:
                    var6 = _closure1_slot38;
                    var5 = true;
                    var5 = var6.bind(var12)(var7, var5);
                    throw var5;
case 153:
                    return var4;
case 126:
                    var5 = var14.confirmSetup;
                    var4 = {};
                    var16 = 'if_required';
                    var4['redirect'] = var16;
                    var4['elements'] = var15;
                    var4 = var5.bind(var14)(var4);
                    SaveGenerator(address=270);
case 138:
                    return var4;
case 159:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 160; continue _fun0014 }
case 2:
                    var6 = var4.error;
                    var5 = var9 != var6;
                    if(!var5) { _fun0014_ip = 161; continue _fun0014 }
case 162:
                    var10 = var6.code;
                    var7 = 'setup_intent_unexpected_state';
                    var5 = var7 === var10;
case 161:
                    if(!var5) { _fun0014_ip = 47; continue _fun0014 }
case 163:
                    var7 = var6.setup_intent;
                    var5 = var9 != var7;
case 47:
                    if(!var5) { _fun0014_ip = 137; continue _fun0014 }
case 127:
                    var6 = var6.setup_intent;
                    var7 = var6.status;
                    var6 = 'succeeded';
                    var5 = var6 === var7;
case 137:
                    var9 = var4;
                    if(!var5) { _fun0014_ip = 164; continue _fun0014 }
case 165:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 20;
                    var5 = var7[var5];
                    var6 = var6.bind(var12)(var5);
                    var5 = var6.createSetupIntentForPaymentElements;
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=383);
case 102:
                    return var5;
case 116:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0014_ip = 166; continue _fun0014 }
case 48:
                    var6 = _closure1_slot28;
                    var6 = var6.bind(var12)(var15);
                    SaveGenerator(address=405);
case 100:
                    return var6;
case 167:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0014_ip = 168; continue _fun0014 }
case 169:
                    var10 = var14.confirmSetup;
                    var7 = {};
                    var7['redirect'] = var16;
                    var7['clientSecret'] = var5;
                    var7['elements'] = var15;
                    var7 = var10.bind(var14)(var7);
                    SaveGenerator(address=446);
case 170:
                    return var7;
case 171:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    var9 = var7;
                    if(var10) { _fun0014_ip = 172; continue _fun0014 }
case 164:
                    var15 = _closure1_slot27;
                    var14 = var9.setupIntent;
                    var10 = var9.error;
                    var9 = function(arg1) {
                        var4 = _closure1_slot38;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var9 = var15.bind(var12)(var14, var10, var9);
                    var9 = var9.setupIntent;
                    var11 = var9.payment_method;
case 158:
                    var10 = _closure1_slot36;
                    var8 = _closure1_slot13;
                    var20 = var8.STRIPE;
                    var8 = {};
                    var8['billingAddressToken'] = var2;
                    var14 = arg5;
                    var8['analyticsLocation'] = var14;
                    var21 = undefined;
                    var19 = var11;
                    var18 = var13;
                    var17 = var8;
                    var8 = var21[var10](var20, var19, var18, var17, var16);
                    return var8;
case 172:
                    return var7;
case 168:
                    return var6;
case 166:
                    return var5;
case 160:
                    return var4;
case 148:
                    return var3;
case 144:
                    return var2;
case 143:
                    var5 = _closure1_slot38;
                    var4 = undefined;
                    var3 = 'Stripe Elements not loaded';
                    var2 = true;
                    var2 = var5.bind(var4)(var3, var2);
                    throw var2;
case 142:
                    var5 = _closure1_slot38;
                    var4 = undefined;
                    var3 = 'Stripe not loaded';
                    var2 = true;
                    var2 = var5.bind(var4)(var3, var2);
                    throw var2;
case 141:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot44 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot44 = var1;
    var1 = function _confirmCardPaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 173; continue _fun0015 }
case 28:
                    var8 = var2;
                    var16 = arg2;
                    var7 = arg3;
                    var12 = arg4;
                    var4 = undefined;
                    var6 = undefined;
                    var13 = undefined;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0015_ip = 174; continue _fun0015 }
case 42:
                    var2 = var16;
                    if(!(var3 != var2)) { _fun0015_ip = 174; continue _fun0015 }
case 175:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var5 = 11;
                    var5 = var10[var5];
                    var10 = var9.bind(var4)(var5);
                    var9 = var10.dispatch;
                    var5 = {};
                    var11 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var5['type'] = var11;
                    var5 = var9.bind(var10)(var5);
                    var6 = null;
case 176: // try_start_0
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 20;
                    var3 = var9[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.getSetupIntentSecret;
                    var3 = var3.bind(var5)();
                    SaveGenerator(address=131);
case 177:
                    return var3;
case 178:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0015_ip = 165; continue _fun0015 }
case 8:
                    var6 = var3;
case 150: // try_end0
                    var9 = _closure1_slot33;
                    var5 = var7;
                    var5 = var9.bind(var4)(var5);
                    SaveGenerator(address=159);
case 108:
                    return var5;
case 90:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0015_ip = 179; continue _fun0015 }
case 180:
                    var13 = var5;
                    var10 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var9 = 21;
                    var9 = var11[var9];
                    var11 = var10.bind(var4)(var9);
                    var10 = var11.parseBillingAddressInfoToStripeBillingDetails;
                    var9 = var7;
                    var14 = var10.bind(var11)(var9);
                    var10 = var8;
                    var9 = var10.confirmCardSetup;
                    var8 = var6;
                    var6 = {};
                    var11 = {};
                    var15 = {};
                    var15['token'] = var16;
                    var11['card'] = var15;
                    var11['billing_details'] = var14;
                    var6['payment_method'] = var11;
                    var6 = var9.bind(var10)(var8, var6);
                    SaveGenerator(address=255);
case 136:
                    return var6;
case 181:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 137; continue _fun0015 }
case 182:
                    var11 = var6.setupIntent;
                    var10 = var6.error;
                    var9 = _closure1_slot27;
                    var8 = function(arg1) {
                        var3 = _closure1_slot39;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var8 = var9.bind(var4)(var11, var10, var8);
                    var8 = var8.setupIntent;
                    var11 = _closure1_slot36;
                    var9 = _closure1_slot13;
                    var20 = var9.STRIPE;
                    var19 = var8.payment_method;
                    var18 = var7;
                    var7 = {};
                    var7['billingAddressToken'] = var13;
                    var7['analyticsLocation'] = var12;
                    var21 = undefined;
                    var17 = var7;
                    var7 = var21[var11](var20, var19, var18, var17, var16);
                    return var7;
case 137:
                    return var6;
case 179:
                    return var5;
case 165:
                    return var3;
case 183: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var2 = _closure1_slot39;
                    var2 = var2.bind(var4)(var3);
                    throw var2;
case 174:
                    var3 = _closure1_slot39;
                    var2 = 'Stripe or token not loaded';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 173:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot45 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot45 = var1;
    var1 = function _createStripePaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var11 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 137; continue _fun0016 }
case 87:
                    var8 = null;
                    if(!(var8 != var7)) { _fun0016_ip = 15; continue _fun0016 }
case 89:
                    var2 = _closure1_slot33;
                    var6 = undefined;
                    var2 = var2.bind(var6)(var11);
                    SaveGenerator(address=43);
case 184:
                    return var2;
case 185:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 17; continue _fun0016 }
case 186:
                    var10 = var11.name;
                    var18 = var11.line1;
                    var17 = var11.line2;
                    var16 = var11.city;
                    var15 = var11.state;
                    var14 = var11.postalCode;
                    var13 = var11.country;
                    var9 = _closure1_slot24;
                    var5 = var9.get;
                    var3 = arg3;
                    var9 = var5.bind(var9)(var3);
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var3 = 19;
                    var3 = var12[var3];
                    var12 = var5.bind(var6)(var3);
                    var5 = var8 != var9;
                    var3 = 'unsupported payment method type';
                    var3 = var12.bind(var6)(var5, var3);
                    var5 = var7.createPaymentMethod;
                    var3 = {};
                    var3['type'] = var9;
                    var9 = {};
                    var12 = {};
                    var12['line1'] = var18;
                    var12['line2'] = var17;
                    var12['city'] = var16;
                    var12['state'] = var15;
                    var12['postal_code'] = var14;
                    var12['country'] = var13;
                    var9['address'] = var12;
                    var9['name'] = var10;
                    var3['billing_details'] = var9;
                    var3 = var5.bind(var7)(var3);
                    SaveGenerator(address=213);
case 187:
                    return var3;
case 188:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 189; continue _fun0016 }
case 190:
                    var7 = var3.paymentMethod;
                    var5 = var3.error;
                    if(!(var8 == var5)) { _fun0016_ip = 191; continue _fun0016 }
case 153:
                    if(!(var8 != var7)) { _fun0016_ip = 192; continue _fun0016 }
case 193:
                    var10 = _closure1_slot36;
                    var8 = _closure1_slot13;
                    var22 = var8.STRIPE;
                    var21 = var7.id;
                    var7 = {};
                    var7['billingAddressToken'] = var2;
                    var12 = arg4;
                    var7['analyticsLocation'] = var12;
                    var23 = undefined;
                    var20 = var11;
                    var19 = var7;
                    var7 = var23[var10](var22, var21, var20, var19, var18);
                    return var7;
case 192:
                    var8 = _closure1_slot39;
                    var7 = 'stripePaymentMethod not available with successful stripe call';
                    var7 = var8.bind(var6)(var7);
                    throw var7;
case 191:
                    var4 = _closure1_slot39;
                    var4 = var4.bind(var6)(var5);
                    throw var4;
case 189:
                    return var3;
case 17:
                    return var2;
case 15:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'Stripe not loaded';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 137:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot46 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot46 = var1;
    var1 = function _createAdyenPrepaidPaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0017_ip = 149; continue _fun0017 }
case 3:
                    var2 = _closure1_slot33;
                    var7 = undefined;
                    var2 = var2.bind(var7)(var8);
                    SaveGenerator(address=28);
case 194:
                    return var2;
case 101:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0017_ip = 195; continue _fun0017 }
case 196:
                    var9 = {};
                    var6 = _closure1_slot19;
                    var5 = var6.get;
                    var4 = arg2;
                    var4 = var5.bind(var6)(var4);
                    var9['type'] = var4;
                    var6 = _closure1_slot36;
                    var3 = _closure1_slot13;
                    var5 = var3.ADYEN;
                    var3 = global;
                    var4 = var3.JSON;
                    var3 = var4.stringify;
                    var12 = var3.bind(var4)(var9);
                    var3 = {};
                    var3['billingAddressToken'] = var2;
                    var9 = arg3;
                    var3['analyticsLocation'] = var9;
                    var14 = undefined;
                    var13 = var5;
                    var11 = var8;
                    var10 = var3;
                    var3 = var14[var6](var13, var12, var11, var10, var9);
                    return var3;
case 195:
                    return var2;
case 149:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot47 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot47 = var1;
    var1 = function _createAdyenVaultablePaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    var21 = arg2;
                    var14 = arg4;
                    var2 = arguments[4];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 197; continue _fun0018 }
case 99:
                    var10 = arg1;
                    var18 = arg3;
                    var13 = undefined;
                    if(!(var2 === var13)) { _fun0018_ip = 40; continue _fun0018 }
case 41:
                    var2 = false;
case 40:
                    var7 = var2;
                    var19 = undefined;
                    var12 = undefined;
                    var17 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=48);
case 198:
                    return var13;
case 199:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0018_ip = 200; continue _fun0018 }
case 201:
                    var4 = _closure1_slot33;
                    var3 = var10;
                    var3 = var4.bind(var13)(var3);
                    SaveGenerator(address=76);
case 202:
                    return var3;
case 38:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0018_ip = 203; continue _fun0018 }
case 22:
                    var19 = var3;
                    var4 = {};
                    var11 = _closure1_slot19;
                    var8 = var11.get;
                    var8 = var8.bind(var11)(var21);
                    var4['type'] = var8;
                    var11 = null;
                    var15 = var11 == var14;
                    var8 = undefined;
                    if(var15) { _fun0018_ip = 26; continue _fun0018 }
case 204:
                    var8 = var14.paymentMethod;
case 26:
                    if(!(var11 == var8)) { _fun0018_ip = 178; continue _fun0018 }
case 177:
                    var8 = {};
case 178:
                    var26 = var4;
                    var25 = var8;
                    var8 = copyDataProperties(var26, var25);
                    var12 = var4;
                    var4 = _closure1_slot76;
                    var4 = var4.bind(var13)(var21);
                    SaveGenerator(address=157);
case 205:
                    return var4;
case 108:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0018_ip = 206; continue _fun0018 }
case 207:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var8 = 12;
                    var8 = var15[var8];
                    var14 = var14.bind(var13)(var8);
                    var8 = var14.getAPIBaseURL;
                    var14 = var8.bind(var14)();
                    var20 = _closure1_slot12;
                    var16 = var20.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    var8 = var11 != var4;
                    var15 = '';
                    if(!var8) { _fun0018_ip = 155; continue _fun0018 }
case 208:
                    var15 = var4;
case 155:
                    var8 = 'success';
                    var8 = var16.bind(var20)(var21, var15, var8);
                    var17 = var14 + var8;
case 209: // try_start_0
                    var8 = {};
                    var16 = _closure1_slot36;
                    var14 = _closure1_slot13;
                    var15 = var14.ADYEN;
                    var14 = global;
                    var20 = var14.JSON;
                    var14 = var20.stringify;
                    var25 = var14.bind(var20)(var12);
                    var24 = var10;
                    var10 = {};
                    var10['billingAddressToken'] = var19;
                    var10['analyticsLocation'] = var18;
                    var10['returnUrl'] = var17;
                    var22 = var7;
                    var27 = undefined;
                    var26 = var15;
                    var23 = var10;
                    var7 = var27[var16](var26, var25, var24, var23, var22, var21);
                    SaveGenerator(address=309);
case 210:
                    return var7;
case 163:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=9);
                    if(var10) { _fun0018_ip = 211; continue _fun0018 }
case 189:
                    var8['paymentSource'] = var7;
                    var10 = false;
                    var8['redirectConfirmation'] = var10;
case 49: // try_end0
                    return var8;
case 211:
                    return var7;
case 125: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var5 = var7;
                    var8 = var7.code;
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var7 = 14;
                    var7 = var12[var7];
                    var7 = var10.bind(var13)(var7);
                    var7 = var7.ErrorCodes;
                    var7 = var7.CONFIRMATION_REQUIRED;
                    if(!(var8 === var7)) { _fun0018_ip = 212; continue _fun0018 }
case 213:
                    var7 = var5;
                    var7 = var7.fields;
                    var7 = var7.adyen_redirect_url;
                    var6 = var7;
                    if(!(var11 != var7)) { _fun0018_ip = 214; continue _fun0018 }
case 215:
                    var7 = _closure1_slot69;
                    var6 = var7.bind(var13)(var6);
                    var6 = {};
                    var7 = true;
                    var6['redirectConfirmation'] = var7;
                    return var6;
case 214:
                    var7 = _closure1_slot39;
                    var6 = 'redirect url cannot be null on a redirect for adyen.';
                    var6 = var7.bind(var13)(var6);
                    throw var6;
case 212:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var6 = 11;
                    var6 = var10[var6];
                    var8 = var7.bind(var13)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var12 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
                    var6['type'] = var12;
                    var12 = _closure1_slot0;
                    var14 = 13;
                    var10 = var10[var14];
                    var10 = var12.bind(var13)(var10);
                    var12 = var10.BillingError;
                    var10 = var5;
                    var10 = var11 == var10;
                    var17 = undefined;
                    if(var10) { _fun0018_ip = 216; continue _fun0018 }
case 217:
                    var10 = var5;
                    var17 = var10.code;
case 216:
                    var10 = var5;
                    var10 = var11 == var10;
                    var16 = undefined;
                    if(var10) { _fun0018_ip = 218; continue _fun0018 }
case 219:
                    var10 = var5;
                    var16 = var10.message;
case 218:
                    var10 = global;
                    var10 = var10.HermesInternal;
                    var15 = var10.concat;
                    var11 = 'Unable to create payment source token: code: ';
                    var10 = ' message: ';
                    var11 = var15.bind(var11)(var17, var10, var16);
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var14];
                    var9 = var10.bind(var13)(var9);
                    var9 = var9.BillingError;
                    var9 = var9.ErrorCodes;
                    var25 = var9.UNKNOWN;
                    var10 = var12.prototype;
                    var10 = Object.create(var10, {constructor: {value: var12}});
                    var27 = var10;
                    var26 = var11;
                    var9 = new var27[var12](var26, var25, var24);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var6['error'] = var9;
                    var6 = var7.bind(var8)(var6);
                    throw var5;
case 206:
                    return var4;
case 203:
                    return var3;
case 200:
                    return var2;
case 197:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot48 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot48 = var1;
    var10 = function createStripePaymentSourceToken() {
        var1 = undefined;
        var4 = _closure1_slot50;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot49 = var10;
    var1 = function _createStripePaymentSourceToken() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 220; continue _fun0019 }
case 28:
                    var5 = _closure1_slot16;
                    var4 = var5.has;
                    var2 = var9.type;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0019_ip = 221; continue _fun0019 }
case 184:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 21;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getStripe;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=77);
case 222:
                    return var2;
case 223:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0019_ip = 224; continue _fun0019 }
case 69:
                    var7 = null;
                    if(!(var7 != var2)) { _fun0019_ip = 225; continue _fun0019 }
case 93:
                    var4 = var9.billingAddress;
                    var8 = var4.email;
                    var11 = var4.name;
                    var17 = var4.line1;
                    var16 = var4.line2;
                    var15 = var4.city;
                    var14 = var4.state;
                    var13 = var4.postalCode;
                    var10 = var4.country;
                    var6 = {};
                    var4 = {};
                    var12 = {};
                    var12['line1'] = var17;
                    var12['line2'] = var16;
                    var12['city'] = var15;
                    var12['state'] = var14;
                    var12['postal_code'] = var13;
                    var12['country'] = var10;
                    var4['address'] = var12;
                    var4['name'] = var11;
                    var6['billing_details'] = var4;
                    var11 = var9.type;
                    var4 = _closure1_slot21;
                    var4 = var4.GIROPAY;
                    if(!(var4 !== var11)) { _fun0019_ip = 226; continue _fun0019 }
case 227:
                    var4 = _closure1_slot21;
                    var4 = var4.SOFORT;
                    if(!(var4 !== var11)) { _fun0019_ip = 228; continue _fun0019 }
case 209:
                    var4 = _closure1_slot21;
                    var4 = var4.BANCONTACT;
                    if(!(var4 !== var11)) { _fun0019_ip = 229; continue _fun0019 }
case 111:
                    var4 = _closure1_slot21;
                    var4 = var4.IDEAL;
                    if(!(var4 !== var11)) { _fun0019_ip = 230; continue _fun0019 }
case 231:
                    var4 = _closure1_slot21;
                    var4 = var4.PRZELEWY24;
                    if(!(var4 !== var11)) { _fun0019_ip = 232; continue _fun0019 }
case 233:
                    var4 = _closure1_slot21;
                    var4 = var4.EPS;
                    if(!(var4 === var11)) { _fun0019_ip = 234; continue _fun0019 }
case 235:
                    var4 = var9.bank;
                    if(!(var7 != var4)) { _fun0019_ip = 236; continue _fun0019 }
case 237:
                    var4 = 'eps';
                    var6['type'] = var4;
                    var4 = {};
                    var11 = var9.bank;
                    var4['bank'] = var11;
                    var6['eps'] = var4;
                    _fun0019_ip = 234; continue _fun0019;
case 236:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var4 = 13;
                    var13 = var12[var4];
                    var13 = var11.bind(var5)(var13);
                    var13 = var13.BillingError;
                    var4 = var12[var4];
                    var4 = var11.bind(var5)(var4);
                    var4 = var4.BillingError;
                    var4 = var4.ErrorCodes;
                    var19 = var4.UNKNOWN_PAYMENT_SOURCE;
                    var4 = var13.prototype;
                    var11 = Object.create(var4, {constructor: {value: var13}});
                    var20 = 'EPS missing bank information';
                    var21 = var11;
                    var4 = new var21[var13](var20, var19, var18);
                    var4 = var4 instanceof Object ? var4 : var11;
                    throw var4;
case 232:
                    var4 = var9.bank;
                    if(!(var7 != var4)) { _fun0019_ip = 238; continue _fun0019 }
case 239:
                    var4 = 'p24';
                    var6['type'] = var4;
                    var4 = {};
                    var11 = var9.bank;
                    var4['bank'] = var11;
                    var6['p24'] = var4;
                    var11 = var6.billing_details;
                    var4 = var9.email;
                    var11['email'] = var4;
                    _fun0019_ip = 234; continue _fun0019;
case 238:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var4 = 13;
                    var13 = var12[var4];
                    var13 = var11.bind(var5)(var13);
                    var13 = var13.BillingError;
                    var4 = var12[var4];
                    var4 = var11.bind(var5)(var4);
                    var4 = var4.BillingError;
                    var4 = var4.ErrorCodes;
                    var19 = var4.UNKNOWN_PAYMENT_SOURCE;
                    var4 = var13.prototype;
                    var11 = Object.create(var4, {constructor: {value: var13}});
                    var20 = 'p24 missing bank information';
                    var21 = var11;
                    var4 = new var21[var13](var20, var19, var18);
                    var4 = var4 instanceof Object ? var4 : var11;
                    throw var4;
case 230:
                    var4 = 'ideal';
                    var6['type'] = var4;
                    var4 = {};
                    var9 = var9.bank;
                    var4['bank'] = var9;
                    var6['ideal'] = var4;
                    _fun0019_ip = 234; continue _fun0019;
case 229:
                    var4 = 'bancontact';
                    var6['type'] = var4;
                    _fun0019_ip = 234; continue _fun0019;
case 228:
                    var4 = 'sofort';
                    var6['type'] = var4;
                    var4 = {};
                    var11 = var7 != var10;
                    var9 = '';
                    if(!var11) { _fun0019_ip = 203; continue _fun0019 }
case 206:
                    var9 = var10;
case 203:
                    var4['country'] = var9;
                    var6['sofort'] = var4;
                    var4 = var6.billing_details;
                    var4['email'] = var8;
                    _fun0019_ip = 234; continue _fun0019;
case 226:
                    var4 = 'giropay';
                    var6['type'] = var4;
case 234:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var4 = 19;
                    var4 = var9[var4];
                    var9 = var8.bind(var5)(var4);
                    var4 = var6.type;
                    var8 = var7 != var4;
                    var4 = 'unsupported payment method type';
                    var4 = var9.bind(var5)(var8, var4);
                    var4 = var2.createPaymentMethod;
                    var4 = var4.bind(var2)(var6);
                    SaveGenerator(address=735);
case 240:
                    return var4;
case 241:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0019_ip = 242; continue _fun0019 }
case 243:
                    var8 = var4.paymentMethod;
                    var6 = var4.error;
                    if(!(var7 == var6)) { _fun0019_ip = 244; continue _fun0019 }
case 245:
                    if(!(var7 != var8)) { _fun0019_ip = 244; continue _fun0019 }
case 246:
                    var8 = var8.id;
                    return var8;
case 244:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var10 = 13;
                    var8 = var8[var10];
                    var8 = var9.bind(var5)(var8);
                    var9 = var8.BillingError;
                    var8 = var7 == var6;
                    var12 = undefined;
                    if(var8) { _fun0019_ip = 247; continue _fun0019 }
case 248:
                    var12 = var6.code;
case 247:
                    var7 = var7 == var6;
                    var11 = undefined;
                    if(var7) { _fun0019_ip = 249; continue _fun0019 }
case 250:
                    var11 = var6.message;
case 249:
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var8 = var6.concat;
                    var7 = 'Unable to create payment source token: code: ';
                    var6 = ' message: ';
                    var8 = var8.bind(var7)(var12, var6, var11);
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var10];
                    var6 = var7.bind(var5)(var6);
                    var6 = var6.BillingError;
                    var6 = var6.ErrorCodes;
                    var19 = var6.UNKNOWN;
                    var7 = var9.prototype;
                    var7 = Object.create(var7, {constructor: {value: var9}});
                    var21 = var7;
                    var20 = var8;
                    var6 = new var21[var9](var20, var19, var18);
                    var6 = var6 instanceof Object ? var6 : var7;
                    throw var6;
case 242:
                    return var4;
case 225:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 13;
                    var6 = var7[var3];
                    var6 = var4.bind(var5)(var6);
                    var6 = var6.BillingError;
                    var3 = var7[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.BillingError;
                    var3 = var3.ErrorCodes;
                    var19 = var3.UNKNOWN;
                    var3 = var6.prototype;
                    var4 = Object.create(var3, {constructor: {value: var6}});
                    var20 = 'Stripe not loaded';
                    var21 = var4;
                    var3 = new var21[var6](var20, var19, var18);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 224:
                    return var2;
case 221:
                    var2 = null;
                    return var2;
case 220:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot50 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot50 = var1;
    var9 = function createPaymentSourceToken(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot16;
            var2 = var4.has;
            var1 = var5.type;
            var2 = var2.bind(var4)(var1);
            var1 = null;
            if(var2) { _fun0020_ip = 37; continue _fun0020 }
case 251:
            var6 = _closure1_slot19;
            var4 = var6.has;
            var2 = var5.type;
            var2 = var4.bind(var6)(var2);
            if(var2) { _fun0020_ip = 252; continue _fun0020 }
case 186:
            var4 = _closure1_slot49;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            _fun0020_ip = 38; continue _fun0020;
case 252:
            var4 = _closure1_slot35;
            var3 = undefined;
            var2 = var4.bind(var3)(var5);
case 38:
            var1 = var2;
case 37:
            return var1;
        }
    };
    var _closure1_slot51 = var9;
    var1 = function _fetchPaymentSources() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 109; continue _fun0021 }
case 64:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var3 = _closure1_slot9;
                    var3 = var3.isPaymentSourceFetching;
                    if(var3) { _fun0021_ip = 253; continue _fun0021 }
case 254: // try_start_0
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 12;
                    var3 = var6[var3];
                    var3 = var7.bind(var2)(var3);
                    var8 = var3.HTTP;
                    var7 = var8.get;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var9 = _closure1_slot12;
                    var9 = var9.BILLING_PAYMENT_SOURCES;
                    var3['url'] = var9;
                    var3 = var7.bind(var8)(var3);
                    _closure4_slot0 = var3;
                    var8 = _closure1_slot1;
                    var7 = 11;
                    var6 = var6[var7];
                    var8 = var8.bind(var2)(var6);
                    var6 = var8.wait;
                    var5 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'BILLING_PAYMENT_SOURCES_FETCH_START';
                        var1['type'] = var4;
                        var4 = _closure4_slot0;
                        var1['request'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var6.bind(var8)(var5);
                    SaveGenerator(address=138);
case 120:
                    return var3;
case 121:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0021_ip = 33; continue _fun0021 }
case 255:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var7];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'BILLING_PAYMENT_SOURCES_FETCH_SUCCESS';
                    var5['type'] = var8;
                    var8 = var3.body;
                    var5['paymentSources'] = var8;
                    var5 = var6.bind(var7)(var5);
case 256: // try_end0
                    return var3;
case 33:
                    return var3;
case 31: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 11;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'BILLING_PAYMENT_SOURCES_FETCH_FAIL';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 253:
                    return var2;
case 109:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot52 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot52 = var1;
    var1 = function _fetchPaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0022_ip = 227; continue _fun0022 }
case 3:
                    var7 = arg1;
case 28: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 12;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var9 = _closure1_slot12;
                    var8 = var9.BILLING_PAYMENT_SOURCE;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=88);
case 69:
                    return var2;
case 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0022_ip = 257; continue _fun0022 }
case 258:
                    var7 = _closure1_slot7;
                    var6 = var7.createFromServer;
                    var4 = var2.body;
                    var6 = var6.bind(var7)(var4);
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 11;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'BILLING_PAYMENT_SOURCE_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['paymentSource'] = var6;
                    var3 = var4.bind(var5)(var3);
case 72: // try_end0
                    return var2;
case 257:
                    return var2;
case 259: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_PAYMENT_SOURCE_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 227:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot53 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot53 = var1;
    var8 = function fetchPayment() {
        var1 = undefined;
        var4 = _closure1_slot55;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot54 = var8;
    var1 = function _fetchPayment() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0023_ip = 106; continue _fun0023 }
case 3:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 12;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot12;
                    var8 = var9.BILLING_PAYMENT;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=84);
case 67:
                    return var2;
case 260:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0023_ip = 96; continue _fun0023 }
case 261:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 11;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_PAYMENT_FETCH_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var3['payment'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 96:
                    return var2;
case 106:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot55 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot55 = var1;
    var1 = function _fetchPayments() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0024_ip = 262; continue _fun0024 }
case 28:
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0024_ip = 263; continue _fun0024 }
case 99:
                    var2 = 10;
case 263:
                    var11 = var2;
                    var10 = arguments[1];
                    SaveGenerator(address=32);
case 251:
                    return var6;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0024_ip = 264; continue _fun0024 }
case 184:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var7 = 11;
                    var3 = var3[var7];
                    var8 = var5.bind(var6)(var3);
                    var5 = var8.dispatch;
                    var3 = {};
                    var9 = 'BILLING_PAYMENTS_FETCH_START';
                    var3['type'] = var9;
                    var3 = var5.bind(var8)(var3);
case 69: // try_start_0
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 12;
                    var3 = var8[var3];
                    var3 = var5.bind(var6)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.get;
                    var3 = {};
                    var9 = _closure1_slot12;
                    var9 = var9.BILLING_PAYMENTS;
                    var3['url'] = var9;
                    var9 = {};
                    var9['limit'] = var11;
                    var9['before'] = var10;
                    var3['query'] = var9;
                    var9 = true;
                    var3['oldFormErrors'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=170);
case 180:
                    return var3;
case 265:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0024_ip = 266; continue _fun0024 }
case 88:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var5 = var5[var7];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var10 = 'BILLING_PAYMENTS_FETCH_SUCCESS';
                    var5['type'] = var10;
                    var10 = var3.body;
                    var5['payments'] = var10;
                    var5 = var8.bind(var9)(var5);
case 267: // try_end0
                    return var3;
case 266:
                    return var3;
case 75: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'BILLING_PAYMENTS_FETCH_FAIL';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 264:
                    return var2;
case 262:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot56 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot56 = var1;
    var1 = function _fetchSubscriptions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0025_ip = 268; continue _fun0025 }
case 3:
                    var5 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var4 = undefined;
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var6 = 11;
                    var2 = var2[var6];
                    var8 = var7.bind(var5)(var2);
                    var7 = var8.wait;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_SUBSCRIPTION_FETCH_START';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var7.bind(var8)(var2);
case 269: // try_start_0
                    var2 = _closure1_slot17;
                    var12 = var2.ADD_PERKS_IF_DETECTED;
                    var7 = _closure1_slot10;
                    var2 = var7.getLastLazyPerkSync;
                    var7 = var2.bind(var7)();
                    var11 = var7;
                    var8 = null;
                    var7 = var8 == var7;
                    var2 = var7;
                    if(var7) { _fun0025_ip = 270; continue _fun0025 }
case 271:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var7 = 22;
                    var7 = var10[var7];
                    var7 = var9.bind(var5)(var7);
                    var13 = var7.bind(var5)();
                    var10 = var13.diff;
                    var9 = var11;
                    var7 = 'hours';
                    var9 = var10.bind(var13)(var9, var7);
                    var7 = 1;
                    var2 = var9 >= var7;
case 270:
                    if(!var2) { _fun0025_ip = 10; continue _fun0025 }
case 272:
                    var2 = _closure1_slot17;
                    var12 = var2.FULL_RESYNC;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var2 = 22;
                    var2 = var9[var2];
                    var2 = var7.bind(var5)(var2);
                    var11 = var2.bind(var5)();
case 10:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 12;
                    var2 = var9[var2];
                    var2 = var7.bind(var5)(var2);
                    var9 = var2.HTTP;
                    var7 = var9.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var10 = _closure1_slot12;
                    var10 = var10.BILLING_SUBSCRIPTIONS;
                    var2['url'] = var10;
                    var10 = {};
                    var10['sync_level'] = var12;
                    var2['query'] = var10;
                    var2 = var7.bind(var9)(var2);
                    SaveGenerator(address=266);
case 273:
                    return var2;
case 274:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0025_ip = 212; continue _fun0025 }
case 275:
                    var4 = var2;
                    var7 = var2.body;
                    if(!(var8 != var7)) { _fun0025_ip = 276; continue _fun0025 }
case 192:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var6];
                    var10 = var8.bind(var5)(var7);
                    var9 = var10.dispatch;
                    var8 = {};
                    var7 = 'BILLING_SUBSCRIPTION_FETCH_SUCCESS';
                    var8['type'] = var7;
                    var7 = var4;
                    var12 = var7.body;
                    var8['subscriptions'] = var12;
                    var8['lastLazyPerkSync'] = var11;
                    var8 = var9.bind(var10)(var8);
case 112: // try_end0
                    return var7;
case 276: // try_start_1
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var7 = 13;
                    var7 = var9[var7];
                    var7 = var8.bind(var5)(var7);
                    var9 = var7.BillingError;
                    var7 = global;
                    var10 = var7.JSON;
                    var8 = var10.stringify;
                    var10 = var8.bind(var10)(var4);
                    var7 = var7.HermesInternal;
                    var8 = var7.concat;
                    var7 = 'response body is null, response: ';
                    var15 = var8.bind(var7)(var10);
                    var14 = var4.status;
                    var7 = var9.prototype;
                    var7 = Object.create(var7, {constructor: {value: var9}});
                    var16 = var7;
                    var4 = new var16[var9](var15, var14, var13);
                    var4 = var4 instanceof Object ? var4 : var7;
                    throw var4;
case 212: // try_end1
                    return var2;
case 53: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_SUBSCRIPTION_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 268:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot57 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot57 = var1;
    var1 = function _getPerksRelevance() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0026_ip = 227; continue _fun0026 }
case 3:
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var5 = 11;
                    var4 = var2[var5];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.wait;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_PERKS_RELEVANCE_FETCH_START';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var6.bind(var7)(var4);
case 277: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 12;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.get;
                    var4 = {};
                    var8 = _closure1_slot12;
                    var8 = var8.BILLING_PERKS_RELEVANCE;
                    var4['url'] = var8;
                    var8 = true;
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=114);
case 278:
                    return var4;
case 279:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0026_ip = 154; continue _fun0026 }
case 97:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var6 = var6[var5];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'BILLING_PERKS_RELEVANCE_FETCH_SUCCESS';
                    var6['type'] = var9;
                    var9 = var4.body;
                    var6['res'] = var9;
                    var6 = var7.bind(var8)(var6);
case 280: // try_end0
                    _fun0026_ip = 281; continue _fun0026;
case 154:
                    return var4;
case 282: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_PERKS_RELEVANCE_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
case 281:
                    return var2;
case 227:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot58 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot58 = var1;
    var1 = function _getNitroAffinity() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0027_ip = 283; continue _fun0027 }
case 3: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 12;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot12;
                    var7 = var7.BILLING_NITRO_AFFINITY;
                    var2['url'] = var7;
                    var7 = true;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=76);
case 202:
                    return var2;
case 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0027_ip = 284; continue _fun0027 }
case 67:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var7 = 11;
                    var4 = var4[var7];
                    var8 = var6.bind(var5)(var4);
                    var6 = var8.dispatch;
                    var4 = {};
                    var9 = 'BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED';
                    var4['type'] = var9;
                    var11 = var2.body;
                    var10 = var11.map;
                    var9 = function(arg1) {
                        var3 = _closure1_slot8;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {constructor: {value: var3}});
                        var4 = arg1;
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var9 = var10.bind(var11)(var9);
                    var4['res'] = var9;
                    var4 = var6.bind(var8)(var4);
case 285: // try_end0
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var8 = 'BILLING_NITRO_AFFINITY_FETCHED';
                    var4['type'] = var8;
                    var4 = var6.bind(var7)(var4);
                    return var5;
case 284:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 11;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_NITRO_AFFINITY_FETCHED';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 193: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_NITRO_AFFINITY_FETCHED';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 283:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot59 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot59 = var1;
    var1 = function _fetchMostRecentSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0028_ip = 286; continue _fun0028 }
case 3:
                    var2 = undefined;
                    var6 = undefined;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 11;
                    var4 = var4[var5];
                    var8 = var7.bind(var2)(var4);
                    var7 = var8.wait;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var7.bind(var8)(var4);
case 287: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var4 = 12;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var8 = var4.HTTP;
                    var7 = var8.get;
                    var4 = {};
                    var9 = _closure1_slot12;
                    var9 = var9.BILLING_SUBSCRIPTIONS;
                    var4['url'] = var9;
                    var10 = {'include_inactive': true, 'limit': 2, 'exclude_unpaid_statuses': true};
                    var9 = true;
                    var11 = _closure1_slot25;
                    var11 = var11.PREMIUM;
                    var10['subscription_type'] = var11;
                    var4['query'] = var10;
                    var4['oldFormErrors'] = var9;
                    var4['rejectWithError'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=155);
case 272:
                    return var4;
case 205:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0028_ip = 131; continue _fun0028 }
case 257:
                    var6 = var4;
                    var7 = var4.ok;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var8 = var8[var5];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.dispatch;
                    if(var7) { _fun0028_ip = 155; continue _fun0028 }
case 86:
                    var7 = {};
                    var10 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL';
                    var7['type'] = var10;
                    var7 = var8.bind(var9)(var7);
                    _fun0028_ip = 132; continue _fun0028;
case 155:
                    var7 = {};
                    var10 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS';
                    var7['type'] = var10;
                    var10 = var6;
                    var10 = var10.body;
                    var10 = var10.length;
                    var13 = 0;
                    var12 = var10 > var13;
                    var11 = null;
                    if(!var12) { _fun0028_ip = 274; continue _fun0028 }
case 288:
                    var12 = var6;
                    var12 = var12.body;
                    var11 = var12[var13];
case 274:
                    var7['subscription'] = var11;
                    var7 = var8.bind(var9)(var7);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS';
                    var7['type'] = var11;
                    var11 = var6;
                    var11 = var11.body;
                    var11 = var11.length;
                    var12 = 1;
                    var11 = var11 > var12;
                    var10 = null;
                    if(!var11) { _fun0028_ip = 236; continue _fun0028 }
case 289:
                    var11 = var6;
                    var11 = var11.body;
                    var10 = var11[var12];
case 236:
                    var7['subscription'] = var10;
                    var7 = var8.bind(var9)(var7);
case 132: // try_end0
                    return var6;
case 131:
                    return var4;
case 290: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 286:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot60 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot60 = var1;
    var1 = function _createSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0029_ip = 291; continue _fun0029 }
case 28:
                    var9 = var2.items;
                    var5 = var2.paymentSource;
                    var24 = var2.trialId;
                    var20 = var2.code;
                    var21 = var2.currency;
                    var11 = var2.metadata;
                    var19 = var2.referralCode;
                    var18 = var2.loadId;
                    var17 = var2.expectedInvoicePrice;
                    var16 = var2.expectedRenewalPrice;
                    var8 = undefined;
                    var23 = undefined;
                    var4 = undefined;
                    SaveGenerator(address=88);
case 69:
                    return var8;
case 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0029_ip = 292; continue _fun0029 }
case 176:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var10 = 11;
                    var3 = var13[var10];
                    var14 = var12.bind(var8)(var3);
                    var12 = var14.dispatch;
                    var3 = {};
                    var15 = 'BILLING_SUBSCRIPTION_UPDATE_START';
                    var3['type'] = var15;
                    var3 = var12.bind(var14)(var3);
                    var12 = _closure1_slot0;
                    var3 = 23;
                    var3 = var13[var3];
                    var13 = var12.bind(var8)(var3);
                    var12 = var13.coerceExistingItemsToNewItemInterval;
                    var3 = var9;
                    var9 = var12.bind(var13)(var3);
                    var22 = null;
                    var23 = null;
                    var3 = var5;
                    if(!(var22 != var3)) { _fun0029_ip = 293; continue _fun0029 }
case 32:
                    var13 = _closure1_slot19;
                    var12 = var13.has;
                    var3 = var5;
                    var3 = var3.type;
                    var3 = var12.bind(var13)(var3);
                    if(var3) { _fun0029_ip = 294; continue _fun0029 }
case 293:
                    _fun0029_ip = 295; continue _fun0029;
case 294:
                    var12 = _closure1_slot76;
                    var3 = var5;
                    var3 = var3.type;
                    var3 = var12.bind(var8)(var3);
                    SaveGenerator(address=231);
case 124:
                    return var3;
case 75:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=11);
                    if(var12) { _fun0029_ip = 296; continue _fun0029 }
case 297:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var12 = 12;
                    var12 = var14[var12];
                    var13 = var13.bind(var8)(var12);
                    var12 = var13.getAPIBaseURL;
                    var13 = var12.bind(var13)();
                    var26 = _closure1_slot12;
                    var25 = var26.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    var12 = var5;
                    var15 = var12.type;
                    var12 = var22 != var3;
                    var14 = '';
                    if(!var12) { _fun0029_ip = 298; continue _fun0029 }
case 299:
                    var14 = var3;
case 298:
                    var12 = 'success';
                    var12 = var25.bind(var26)(var15, var14, var12);
                    var23 = var13 + var12;
case 295: // try_start_0
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var12 = 12;
                    var12 = var14[var12];
                    var12 = var13.bind(var8)(var12);
                    var15 = var12.HTTP;
                    var13 = var15.post;
                    var12 = {};
                    var14 = _closure1_slot12;
                    var14 = var14.BILLING_SUBSCRIPTIONS;
                    var12['url'] = var14;
                    var14 = {};
                    var26 = var9;
                    var25 = var26.map;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.planId;
                        var2 = var1.quantity;
                        var1 = {};
                        var1['plan_id'] = var3;
                        var1['quantity'] = var2;
                        return var1;
                    };
                    var9 = var25.bind(var26)(var9);
                    var14['items'] = var9;
                    var9 = var5;
                    var25 = var22 != var9;
                    var9 = null;
                    if(!var25) { _fun0029_ip = 300; continue _fun0029 }
case 100:
                    var25 = var5;
                    var9 = var25.id;
case 300:
                    var14['payment_source_id'] = var9;
                    var9 = var5;
                    var9 = var22 != var9;
                    var25 = null;
                    if(!var9) { _fun0029_ip = 301; continue _fun0029 }
case 232:
                    var26 = _closure1_slot51;
                    var9 = var5;
                    var9 = var26.bind(var8)(var9);
                    SaveGenerator(address=444);
case 53:
                    return var9;
case 170:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=25);
                    var25 = var9;
                    if(var26) { _fun0029_ip = 302; continue _fun0029 }
case 301:
                    var14['payment_source_token'] = var25;
                    var14['trial_id'] = var24;
                    var14['return_url'] = var23;
                    var14['code'] = var20;
                    var20 = var5;
                    if(!(var22 == var20)) { _fun0029_ip = 303; continue _fun0029 }
case 304:
                    var20 = _closure1_slot20;
                    var20 = var20.USD;
                    _fun0029_ip = 305; continue _fun0029;
case 303:
                    var20 = var21;
case 305:
                    var14['currency'] = var20;
                    var14['metadata'] = var11;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var11 = 17;
                    var11 = var21[var11];
                    var21 = var20.bind(var8)(var11);
                    var20 = var21.createGatewayCheckoutContext;
                    var11 = var5;
                    var11 = var20.bind(var21)(var11);
                    SaveGenerator(address=545);
case 172:
                    return var11;
case 306:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=19);
                    if(var20) { _fun0029_ip = 307; continue _fun0029 }
case 308:
                    var14['gateway_checkout_context'] = var11;
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var20 = 24;
                    var20 = var22[var20];
                    var21 = var21.bind(var8)(var20);
                    var20 = var21.getPurchaseToken;
                    var20 = var20.bind(var21)();
                    var14['purchase_token'] = var20;
                    var14['referral_code'] = var19;
                    var14['load_id'] = var18;
                    var14['expected_invoice_price'] = var17;
                    var14['expected_renewal_price'] = var16;
                    var12['body'] = var14;
                    var14 = true;
                    var12['oldFormErrors'] = var14;
                    var14 = false;
                    var12['rejectWithError'] = var14;
                    var12 = var13.bind(var15)(var12);
                    SaveGenerator(address=642);
case 309:
                    return var12;
case 203:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                    if(var13) { _fun0029_ip = 310; continue _fun0029 }
case 197:
                    var15 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var13 = var13[var10];
                    var16 = var15.bind(var8)(var13);
                    var15 = var16.dispatch;
                    var13 = {};
                    var17 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                    var13['type'] = var17;
                    var17 = var12.body;
                    var13['subscription'] = var17;
                    var13 = var15.bind(var16)(var13);
                    var13 = {};
                    var15 = var12.body;
                    var13['subscription'] = var15;
                    var13['redirectConfirmation'] = var14;
case 311: // try_end0
                    return var13;
case 310:
                    return var12;
case 307:
                    return var11;
case 302:
                    return var9;
case 312: // catch_target0
                    CatchBlockStart(arg_register=10);
                    var6 = var11;
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var12 = 13;
                    var9 = var9[var12];
                    var9 = var13.bind(var8)(var9);
                    var9 = var9.BillingError;
                    var9 = var11 instanceof var9;
                    if(var9) { _fun0029_ip = 313; continue _fun0029 }
case 314:
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var9 = var9[var12];
                    var9 = var11.bind(var8)(var9);
                    var12 = var9.BillingError;
                    var29 = var6;
                    var11 = var12.prototype;
                    var11 = Object.create(var11, {constructor: {value: var12}});
                    var30 = var11;
                    var9 = new var30[var12](var29, var28);
                    var9 = var9 instanceof Object ? var9 : var11;
                    _fun0029_ip = 315; continue _fun0029;
case 313:
                    var9 = var6;
case 315:
                    var4 = var9;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var10 = var12[var10];
                    var13 = var11.bind(var8)(var10);
                    var11 = var13.dispatch;
                    var10 = {};
                    var14 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                    var10['type'] = var14;
                    var10['error'] = var9;
                    var10 = var11.bind(var13)(var10);
                    var10 = var9.code;
                    var11 = _closure1_slot0;
                    var9 = 14;
                    var9 = var12[var9];
                    var9 = var11.bind(var8)(var9);
                    var9 = var9.ErrorCodes;
                    var9 = var9.CONFIRMATION_REQUIRED;
                    if(!(var10 === var9)) { _fun0029_ip = 316; continue _fun0029 }
case 317:
                    var9 = var6;
                    var9 = var9.body;
                    var9 = var9.payment_id;
                    if(var9) { _fun0029_ip = 318; continue _fun0029 }
case 319:
                    var10 = _closure1_slot39;
                    var9 = 'payment id cannot be null on redirected confirmations.';
                    var9 = var10.bind(var8)(var9);
                    throw var9;
case 318:
                    var7 = _closure1_slot63;
                    var6 = var6.body;
                    var5 = var7.bind(var8)(var6, var5);
                    return var5;
case 316:
                    throw var4;
case 296:
                    return var3;
case 292:
                    return var2;
case 291:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot61 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot61 = var1;
    var1 = function _payInvoiceManually() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    StartGenerator();
                    var2 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0030_ip = 302; continue _fun0030 }
case 28:
                    var12 = arg1;
                    var4 = arg2;
                    var5 = var2;
                    var13 = arg4;
                    var6 = undefined;
                    var3 = undefined;
                    var15 = null;
                    var14 = null;
                    if(!(var15 != var2)) { _fun0030_ip = 252; continue _fun0030 }
case 254:
                    var10 = _closure1_slot23;
                    var9 = var10.has;
                    var2 = var5;
                    var2 = var2.type;
                    var2 = var9.bind(var10)(var2);
                    if(var2) { _fun0030_ip = 320; continue _fun0030 }
case 252:
                    _fun0030_ip = 282; continue _fun0030;
case 320:
                    var9 = _closure1_slot76;
                    var2 = var5;
                    var2 = var2.type;
                    var2 = var9.bind(var6)(var2);
                    SaveGenerator(address=88);
case 69:
                    return var2;
case 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                    if(var9) { _fun0030_ip = 307; continue _fun0030 }
case 176:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var9 = 12;
                    var9 = var11[var9];
                    var10 = var10.bind(var6)(var9);
                    var9 = var10.getAPIBaseURL;
                    var9 = var9.bind(var10)();
                    var17 = _closure1_slot12;
                    var16 = var17.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    var8 = var5;
                    var11 = var8.type;
                    var8 = var15 != var2;
                    var10 = '';
                    if(!var8) { _fun0030_ip = 90; continue _fun0030 }
case 94:
                    var10 = var2;
case 90:
                    var8 = 'success';
                    var8 = var16.bind(var17)(var11, var10, var8);
                    var14 = var9 + var8;
case 282: // try_start_0
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var8 = 12;
                    var8 = var11[var8];
                    var8 = var9.bind(var6)(var8);
                    var11 = var8.HTTP;
                    var9 = var11.post;
                    var8 = {};
                    var17 = _closure1_slot12;
                    var16 = var17.BILLING_INVOICE_MANUAL_PAYMENT;
                    var12 = var12.id;
                    var4 = var16.bind(var17)(var12, var4);
                    var8['url'] = var4;
                    var12 = {};
                    var4 = var5;
                    var16 = var15 != var4;
                    var4 = null;
                    if(!var16) { _fun0030_ip = 321; continue _fun0030 }
case 322:
                    var16 = var5;
                    var4 = var16.id;
case 321:
                    var12['payment_source_id'] = var4;
                    var4 = var5;
                    var4 = var15 != var4;
                    var15 = null;
                    if(!var4) { _fun0030_ip = 298; continue _fun0030 }
case 264:
                    var16 = _closure1_slot51;
                    var4 = var5;
                    var4 = var16.bind(var6)(var4);
                    SaveGenerator(address=290);
case 323:
                    return var4;
case 324:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=15);
                    var15 = var4;
                    if(var16) { _fun0030_ip = 325; continue _fun0030 }
case 298:
                    var12['payment_source_token'] = var15;
                    var12['return_url'] = var14;
                    var12['currency'] = var13;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var13 = 24;
                    var13 = var15[var13];
                    var14 = var14.bind(var6)(var13);
                    var13 = var14.getPurchaseToken;
                    var13 = var13.bind(var14)();
                    var12['purchase_token'] = var13;
                    var8['body'] = var12;
                    var12 = true;
                    var8['oldFormErrors'] = var12;
                    var12 = false;
                    var8['rejectWithError'] = var12;
                    var8 = var9.bind(var11)(var8);
                    SaveGenerator(address=378);
case 326:
                    return var8;
case 327:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0030_ip = 328; continue _fun0030 }
case 329:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var9 = 11;
                    var9 = var12[var9];
                    var12 = var11.bind(var6)(var9);
                    var11 = var12.dispatch;
                    var9 = {};
                    var13 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                    var9['type'] = var13;
                    var13 = var8.body;
                    var9['subscription'] = var13;
                    var9 = var11.bind(var12)(var9);
                    var9 = {};
                    var11 = var8.body;
                    var9['subscription'] = var11;
                    var12 = _closure1_slot14;
                    var11 = var12.has;
                    var10 = var5;
                    var10 = var10.type;
                    var10 = var11.bind(var12)(var10);
                    var9['redirectConfirmation'] = var10;
case 80: // try_end0
                    return var9;
case 328:
                    return var8;
case 325:
                    return var4;
case 304: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var7 = var9;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var10 = 13;
                    var8 = var8[var10];
                    var8 = var11.bind(var6)(var8);
                    var8 = var8.BillingError;
                    var8 = var9 instanceof var8;
                    if(var8) { _fun0030_ip = 230; continue _fun0030 }
case 330:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var8 = var8[var10];
                    var8 = var9.bind(var6)(var8);
                    var10 = var8.BillingError;
                    var20 = var7;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var21 = var9;
                    var8 = new var21[var10](var20, var19);
                    var8 = var8 instanceof Object ? var8 : var9;
                    _fun0030_ip = 331; continue _fun0030;
case 230:
                    var8 = var7;
case 331:
                    var3 = var8;
                    var9 = var8.code;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var8 = 14;
                    var8 = var11[var8];
                    var8 = var10.bind(var6)(var8);
                    var8 = var8.ErrorCodes;
                    var8 = var8.CONFIRMATION_REQUIRED;
                    if(!(var9 === var8)) { _fun0030_ip = 332; continue _fun0030 }
case 333:
                    var8 = var7;
                    var8 = var8.body;
                    var8 = var8.payment_id;
                    if(var8) { _fun0030_ip = 334; continue _fun0030 }
case 335:
                    var9 = _closure1_slot39;
                    var8 = 'payment id cannot be null on redirected confirmations.';
                    var8 = var9.bind(var6)(var8);
                    throw var8;
case 334:
                    var8 = _closure1_slot63;
                    var7 = var7.body;
                    var5 = var8.bind(var6)(var7, var5);
                    return var5;
case 332:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 11;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                    var4['type'] = var7;
                    var4['error'] = var3;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 307:
                    return var2;
case 302:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot62 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot62 = var1;
    var7 = function handleConfirmation(arg1, arg2) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0031_ip = 336; continue _fun0031 }
case 63:
            var6 = _closure1_slot19;
            var4 = var6.has;
            var1 = var5.type;
            var1 = var4.bind(var6)(var1);
            if(var1) { _fun0031_ip = 4; continue _fun0031 }
case 336:
            var6 = var3.payment_id;
            var4 = function handleStripeConfirmation() {
                var1 = undefined;
                var4 = _closure1_slot65;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = undefined;
            var1 = var4.bind(var1)(var6, var5);
            _fun0031_ip = 37; continue _fun0031;
case 4:
            var4 = var3.adyen_redirect_url;
            var3 = function handleAdyenConfirmation() {
                var1 = undefined;
                var4 = _closure1_slot64;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = undefined;
            var1 = var3.bind(var2)(var4, var5);
case 37:
            return var1;
        }
    };
    var _closure1_slot63 = var7;
    var1 = function _handleAdyenConfirmation() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var2 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0032_ip = 150; continue _fun0032 }
case 87:
                    var3 = null;
                    if(!(var3 != var4)) { _fun0032_ip = 337; continue _fun0032 }
case 263:
                    if(!(var3 != var2)) { _fun0032_ip = 338; continue _fun0032 }
case 194:
                    var6 = _closure1_slot14;
                    var3 = var6.has;
                    var2 = var2.type;
                    var2 = var3.bind(var6)(var2);
                    var3 = {};
                    if(var2) { _fun0032_ip = 339; continue _fun0032 }
case 277:
                    var2 = false;
                    var3['redirectConfirmation'] = var2;
                    var3['redirectURL'] = var4;
                    var2 = var3;
                    _fun0032_ip = 46; continue _fun0032;
case 339:
                    var6 = _closure1_slot69;
                    var5 = undefined;
                    var5 = var6.bind(var5)(var4);
                    var5 = true;
                    var3['redirectConfirmation'] = var5;
                    var3['redirectURL'] = var4;
                    var2 = var3;
case 46:
                    return var2;
case 338:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'Payment source cannot be null on a redirect.';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 337:
                    var4 = _closure1_slot39;
                    var3 = undefined;
                    var2 = 'redirect url cannot be null on a redirect for adyen.';
                    var2 = var4.bind(var3)(var2);
                    throw var2;
case 150:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot64 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot64 = var1;
    var1 = function _handleStripeConfirmation() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    StartGenerator();
                    var11 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0033_ip = 340; continue _fun0033 }
case 341:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 21;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getStripe;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=54);
case 186:
                    return var2;
case 342:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0033_ip = 114; continue _fun0033 }
case 12:
                    var8 = null;
                    if(!(var8 != var11)) { _fun0033_ip = 343; continue _fun0033 }
case 344:
                    var6 = function getPaymentIntentInfo() {
                        var1 = undefined;
                        var4 = _closure1_slot32;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = arg1;
                    var4 = var6.bind(var5)(var4);
                    SaveGenerator(address=89);
case 345:
                    return var4;
case 346:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0033_ip = 128; continue _fun0033 }
case 347:
                    var10 = var4.clientSecret;
                    var6 = var4.paymentMethodId;
                    if(!(var8 != var2)) { _fun0033_ip = 323; continue _fun0033 }
case 147:
                    var12 = _closure1_slot14;
                    var9 = var12.has;
                    var8 = var11.type;
                    var8 = var9.bind(var12)(var8);
                    if(var8) { _fun0033_ip = 348; continue _fun0033 }
case 349:
                    var8 = {};
                    var8['stripe'] = var2;
                    var8['clientSecret'] = var10;
                    var8['paymentMethodId'] = var6;
                    var8['paymentSource'] = var11;
                    var6 = function confirmPayments() {
                        var1 = undefined;
                        var4 = _closure1_slot70;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var6 = var6.bind(var5)(var8);
                    SaveGenerator(address=175);
case 350:
                    return var6;
case 29:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0033_ip = 284; continue _fun0033 }
case 9:
                    var8 = {};
                    var9 = false;
                    var8['redirectConfirmation'] = var9;
                    return var8;
case 284:
                    return var6;
case 348:
                    var8 = _closure1_slot76;
                    var6 = var11.type;
                    var6 = var8.bind(var5)(var6);
                    SaveGenerator(address=214);
case 351:
                    return var6;
case 352:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0033_ip = 353; continue _fun0033 }
case 155:
                    var8 = _closure1_slot69;
                    var9 = {};
                    var9['stripe'] = var2;
                    var9['paymentSource'] = var11;
                    var9['clientSecret'] = var10;
                    var9['state'] = var6;
                    var7 = function getStripeRedirect() {
                        var1 = undefined;
                        var4 = _closure1_slot71;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var7 = var7.bind(var5)(var9);
                    SaveGenerator(address=259);
case 321:
                    return var7;
case 354:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0033_ip = 27; continue _fun0033 }
case 355:
                    var8 = var8.bind(var5)(var7);
                    var8 = {};
                    var9 = true;
                    var8['redirectConfirmation'] = var9;
                    return var8;
case 27:
                    return var7;
case 353:
                    return var6;
case 323:
                    var7 = _closure1_slot39;
                    var6 = 'Stripe cannot be null on a redirect.';
                    var6 = var7.bind(var5)(var6);
                    throw var6;
case 128:
                    return var4;
case 343:
                    var4 = _closure1_slot39;
                    var3 = 'Payment source cannot be null on a redirect.';
                    var3 = var4.bind(var5)(var3);
                    throw var3;
case 114:
                    return var2;
case 340:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot65 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot65 = var1;
    var1 = function _redirectedPaymentSucceeded() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0034_ip = 70; continue _fun0034 }
case 28:
                    var2 = _closure1_slot54;
                    var5 = undefined;
                    var2 = var2.bind(var5)(var7);
                    SaveGenerator(address=31);
case 356:
                    return var2;
case 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0034_ip = 357; continue _fun0034 }
case 42:
                    var9 = null;
                    var6 = var9 == var2;
                    var4 = undefined;
                    if(var6) { _fun0034_ip = 358; continue _fun0034 }
case 45:
                    var4 = var2.body;
case 358:
                    if(!(var9 != var4)) { _fun0034_ip = 359; continue _fun0034 }
case 12:
                    var8 = _closure1_slot7;
                    var6 = var8.createFromServer;
                    var4 = var2.body;
                    var4 = var4.payment_source;
                    var4 = var6.bind(var8)(var4);
                    var10 = _closure1_slot14;
                    var8 = var10.has;
                    var6 = var4.type;
                    var6 = var8.bind(var10)(var6);
                    if(var6) { _fun0034_ip = 360; continue _fun0034 }
case 361:
                    var8 = _closure1_slot39;
                    var6 = 'unsupported redirect payment source';
                    var6 = var8.bind(var5)(var6);
                    throw var6;
case 360:
                    var6 = var9 == var2;
                    var8 = undefined;
                    if(var6) { _fun0034_ip = 73; continue _fun0034 }
case 349:
                    var6 = var2.body;
                    var9 = var9 == var6;
                    var8 = undefined;
                    if(var9) { _fun0034_ip = 73; continue _fun0034 }
case 272:
                    var8 = var6.status;
case 73:
                    var6 = _closure1_slot22;
                    var6 = var6.FAILED;
                    if(!(var8 !== var6)) { _fun0034_ip = 362; continue _fun0034 }
case 363:
                    var6 = var4.paymentGateway;
                    var4 = _closure1_slot13;
                    var4 = var4.STRIPE;
                    var4 = var6 !== var4;
                    if(var4) { _fun0034_ip = 364; continue _fun0034 }
case 365:
                    var6 = _closure1_slot67;
                    var4 = var6.bind(var5)(var7);
case 364:
                    return var4;
case 362:
                    var6 = _closure1_slot39;
                    var4 = 'payment failed';
                    var4 = var6.bind(var5)(var4);
                    throw var4;
case 359:
                    var4 = _closure1_slot39;
                    var3 = 'could not fetch payment';
                    var3 = var4.bind(var5)(var3);
                    throw var3;
case 357:
                    return var2;
case 70:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot66 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot66 = var1;
    var6 = function paymentIntentSucceeded() {
        var1 = undefined;
        var4 = _closure1_slot68;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot67 = var6;
    var1 = function _paymentIntentSucceeded() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0035_ip = 231; continue _fun0035 }
case 28:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 21;
                    var2 = var5[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.getStripe;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=52);
case 175:
                    return var2;
case 186:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0035_ip = 274; continue _fun0035 }
case 366:
                    var10 = null;
                    if(!(var10 != var2)) { _fun0035_ip = 322; continue _fun0035 }
case 339:
                    if(!(var10 != var6)) { _fun0035_ip = 367; continue _fun0035 }
case 223:
                    var4 = function getClientSecret() {
                        var1 = undefined;
                        var4 = _closure1_slot31;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var6);
                    SaveGenerator(address=93);
case 24:
                    return var4;
case 92:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0035_ip = 124; continue _fun0035 }
case 368:
                    var6 = var2.retrievePaymentIntent;
                    var6 = var6.bind(var2)(var4);
                    SaveGenerator(address=117);
case 146:
                    return var6;
case 147:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0035_ip = 369; continue _fun0035 }
case 195:
                    var7 = var6.paymentIntent;
                    var8 = var6.error;
                    if(!(var10 == var8)) { _fun0035_ip = 281; continue _fun0035 }
case 121:
                    if(!(var10 != var7)) { _fun0035_ip = 86; continue _fun0035 }
case 370:
                    var9 = var7.last_payment_error;
                    if(!(var10 == var9)) { _fun0035_ip = 108; continue _fun0035 }
case 371:
                    var9 = true;
                    return var9;
case 108:
                    var9 = _closure1_slot39;
                    var11 = var7.last_payment_error;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var10 = var7.concat;
                    var7 = 'unable to retrieve payment intent ';
                    var7 = var10.bind(var7)(var11);
                    var7 = var9.bind(var5)(var7);
                    throw var7;
case 86:
                    var9 = _closure1_slot39;
                    var7 = 'paymentIntent not available with successful stripe call';
                    var7 = var9.bind(var5)(var7);
                    throw var7;
case 281:
                    var7 = _closure1_slot39;
                    var7 = var7.bind(var5)(var8);
                    throw var7;
case 369:
                    return var6;
case 124:
                    return var4;
case 367:
                    var6 = _closure1_slot39;
                    var4 = 'payment intent id cannot be null.';
                    var4 = var6.bind(var5)(var4);
                    throw var4;
case 322:
                    var4 = _closure1_slot39;
                    var3 = 'Stripe has not loaded.';
                    var3 = var4.bind(var5)(var3);
                    throw var3;
case 274:
                    return var2;
case 231:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot68 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot68 = var1;
    var1 = function performRedirect(arg1) {
        var1 = global;
        var3 = var1.window;
        var2 = var3.open;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot69 = var1;
    var1 = function _confirmPayments() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0036_ip = 372; continue _fun0036 }
case 28:
                    var4 = var2.stripe;
                    var3 = var2.paymentSource;
                    var9 = var2.paymentMethodId;
                    var7 = var2.clientSecret;
                    var5 = undefined;
                    SaveGenerator(address=43);
case 184:
                    return var5;
case 185:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0036_ip = 373; continue _fun0036 }
case 186:
                    var6 = {};
                    var10 = var3.type;
                    var8 = _closure1_slot21;
                    var8 = var8.SEPA_DEBIT;
                    if(!(var10 === var8)) { _fun0036_ip = 374; continue _fun0036 }
case 38:
                    var8 = null;
                    if(!(var8 != var9)) { _fun0036_ip = 152; continue _fun0036 }
case 67:
                    var6['payment_method'] = var9;
                    var4 = var4.confirmSepaDebitPayment;
                    var4 = var4.bind(var5)(var7, var6);
                    SaveGenerator(address=106);
case 145:
                    return var4;
case 375:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0036_ip = 376; continue _fun0036 }
case 278:
                    var6 = var4.paymentIntent;
                    var7 = var4.error;
                    if(!(var8 == var7)) { _fun0036_ip = 285; continue _fun0036 }
case 377:
                    if(!(var8 != var6)) { _fun0036_ip = 6; continue _fun0036 }
case 178:
                    return var5;
case 6:
                    var8 = _closure1_slot39;
                    var6 = 'paymentIntent not available with successful stripe call';
                    var6 = var8.bind(var5)(var6);
                    throw var6;
case 285:
                    var6 = _closure1_slot39;
                    var6 = var6.bind(var5)(var7);
                    throw var6;
case 376:
                    return var4;
case 152:
                    var6 = _closure1_slot39;
                    var4 = 'On a sepa payment payment method id cannot be null';
                    var4 = var6.bind(var5)(var4);
                    throw var4;
case 374:
                    var4 = _closure1_slot39;
                    var3 = 'Unsupported redirected payment source type.';
                    var3 = var4.bind(var5)(var3);
                    throw var3;
case 373:
                    return var2;
case 372:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot70 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot70 = var1;
    var1 = function _getStripeRedirect() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0037_ip = 378; continue _fun0037 }
case 28:
                    var11 = var2.stripe;
                    var9 = var2.paymentSource;
                    var8 = var2.clientSecret;
                    var3 = var2.state;
                    var6 = undefined;
                    SaveGenerator(address=42);
case 42:
                    return var6;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0037_ip = 379; continue _fun0037 }
case 45:
                    var7 = var9.type;
                    var5 = _closure1_slot21;
                    var5 = var5.GIROPAY;
                    if(!(var5 !== var7)) { _fun0037_ip = 380; continue _fun0037 }
case 38:
                    var5 = _closure1_slot21;
                    var5 = var5.BANCONTACT;
                    if(!(var5 !== var7)) { _fun0037_ip = 381; continue _fun0037 }
case 92:
                    var5 = _closure1_slot21;
                    var5 = var5.SOFORT;
                    if(!(var5 !== var7)) { _fun0037_ip = 382; continue _fun0037 }
case 383:
                    var5 = _closure1_slot21;
                    var5 = var5.PRZELEWY24;
                    if(!(var5 !== var7)) { _fun0037_ip = 384; continue _fun0037 }
case 377:
                    var5 = _closure1_slot21;
                    var5 = var5.EPS;
                    if(!(var5 !== var7)) { _fun0037_ip = 134; continue _fun0037 }
case 385:
                    var5 = _closure1_slot21;
                    var5 = var5.IDEAL;
                    if(!(var5 !== var7)) { _fun0037_ip = 363; continue _fun0037 }
case 205:
                    var7 = _closure1_slot39;
                    var5 = 'Unsupported redirected payment source type.';
                    var5 = var7.bind(var6)(var5);
                    throw var5;
case 363:
                    var10 = {};
                    var5 = {};
                    var10['ideal'] = var5;
                    var5 = {};
                    var7 = var9.billingAddress;
                    var7 = var7.name;
                    var5['name'] = var7;
                    var10['billing_details'] = var5;
                    var7 = var9.bank;
                    var5 = null;
                    if(!(var5 != var7)) { _fun0037_ip = 153; continue _fun0037 }
case 281:
                    var5 = {};
                    var7 = var9.bank;
                    var5['bank'] = var7;
                    var10['ideal'] = var5;
case 153:
                    var7 = var11.confirmIdealPayment;
                    _fun0037_ip = 386; continue _fun0037;
case 134:
                    var12 = var9.bank;
                    var5 = null;
                    if(!(var5 != var12)) { _fun0037_ip = 295; continue _fun0037 }
case 354:
                    var5 = {};
                    var12 = {};
                    var13 = var9.bank;
                    var12['bank'] = var13;
                    var5['eps'] = var12;
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.name;
                    var12['name'] = var13;
                    var5['billing_details'] = var12;
                    var7 = var11.confirmEpsPayment;
                    var10 = var5;
                    _fun0037_ip = 386; continue _fun0037;
case 295:
                    var12 = _closure1_slot39;
                    var15 = var9.id;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var14 = var5.concat;
                    var13 = 'PaymentSource (';
                    var5 = ') missing bank info for EPS.';
                    var5 = var14.bind(var13)(var15, var5);
                    var5 = var12.bind(var6)(var5);
                    throw var5;
case 384:
                    var12 = var9.bank;
                    var5 = null;
                    if(!(var5 != var12)) { _fun0037_ip = 387; continue _fun0037 }
case 326:
                    var5 = {};
                    var12 = {};
                    var13 = var9.bank;
                    var12['bank'] = var13;
                    var5['p24'] = var12;
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.name;
                    var12['name'] = var13;
                    var13 = var9.email;
                    var12['email'] = var13;
                    var5['billing_details'] = var12;
                    var7 = var11.confirmP24Payment;
                    var10 = var5;
                    _fun0037_ip = 386; continue _fun0037;
case 387:
                    var12 = _closure1_slot39;
                    var15 = var9.id;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var14 = var5.concat;
                    var13 = 'PaymentSource (';
                    var5 = ') missing bank info for p24.';
                    var5 = var14.bind(var13)(var15, var5);
                    var5 = var12.bind(var6)(var5);
                    throw var5;
case 382:
                    var5 = {};
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.country;
                    var12['country'] = var13;
                    var5['sofort'] = var12;
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.name;
                    var12['name'] = var13;
                    var13 = var9.email;
                    var12['email'] = var13;
                    var5['billing_details'] = var12;
                    var7 = var11.confirmSofortPayment;
                    var10 = var5;
                    _fun0037_ip = 386; continue _fun0037;
case 381:
                    var5 = {};
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.name;
                    var12['name'] = var13;
                    var13 = var9.email;
                    var12['email'] = var13;
                    var5['billing_details'] = var12;
                    var7 = var11.confirmBancontactPayment;
                    var10 = var5;
                    _fun0037_ip = 386; continue _fun0037;
case 380:
                    var5 = {};
                    var12 = {};
                    var13 = var9.billingAddress;
                    var13 = var13.name;
                    var12['name'] = var13;
                    var5['billing_details'] = var12;
                    var7 = var11.confirmGiropayPayment;
                    var10 = var5;
case 386:
                    var5 = {};
                    var5['payment_method'] = var10;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var10 = 12;
                    var10 = var12[var10];
                    var11 = var11.bind(var6)(var10);
                    var10 = var11.getAPIBaseURL;
                    var10 = var10.bind(var11)();
                    var14 = _closure1_slot12;
                    var13 = var14.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    var12 = var9.type;
                    var9 = null;
                    var15 = var9 != var3;
                    var11 = '';
                    if(!var15) { _fun0037_ip = 310; continue _fun0037 }
case 311:
                    var11 = var3;
case 310:
                    var3 = 'success';
                    var3 = var13.bind(var14)(var12, var11, var3);
                    var3 = var10 + var3;
                    var5['return_url'] = var3;
                    var3 = {};
                    var10 = false;
                    var3['handleActions'] = var10;
                    var3 = var7.bind(var6)(var8, var5, var3);
                    SaveGenerator(address=757);
case 388:
                    return var3;
case 389:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0037_ip = 390; continue _fun0037 }
case 391:
                    var7 = var3.paymentIntent;
                    var5 = var3.error;
                    if(!(var9 == var5)) { _fun0037_ip = 392; continue _fun0037 }
case 393:
                    if(!(var9 != var7)) { _fun0037_ip = 394; continue _fun0037 }
case 395:
                    var10 = var7.next_action;
                    var11 = var9 == var10;
                    var8 = undefined;
                    if(var11) { _fun0037_ip = 250; continue _fun0037 }
case 396:
                    var10 = var10.redirect_to_url;
                    var11 = var9 == var10;
                    var8 = undefined;
                    if(var11) { _fun0037_ip = 250; continue _fun0037 }
case 397:
                    var8 = var10.url;
case 250:
                    if(!(var9 != var8)) { _fun0037_ip = 398; continue _fun0037 }
case 399:
                    var7 = var7.next_action;
                    var7 = var7.redirect_to_url;
                    var7 = var7.url;
                    return var7;
case 398:
                    var8 = _closure1_slot39;
                    var7 = 'confirm payment did not return a redirect url';
                    var7 = var8.bind(var6)(var7);
                    throw var7;
case 394:
                    var8 = _closure1_slot39;
                    var7 = 'paymentIntent not available with successful api call';
                    var7 = var8.bind(var6)(var7);
                    throw var7;
case 392:
                    var4 = _closure1_slot39;
                    var4 = var4.bind(var6)(var5);
                    throw var4;
case 390:
                    return var3;
case 379:
                    return var2;
case 378:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot71 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot71 = var1;
    var1 = function _cancelSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0038_ip = 299; continue _fun0038 }
case 3:
                    var8 = arg1;
                    var9 = arg2;
                    var10 = arg3;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var6 = 11;
                    var2 = var2[var6];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var2);
                    var3 = var7.dispatch;
                    var2 = {};
                    var11 = 'BILLING_SUBSCRIPTION_CANCEL_START';
                    var2['type'] = var11;
                    var2 = var3.bind(var7)(var2);
case 400: // try_start_0
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 12;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var3 = var7.del;
                    var2 = {};
                    var12 = _closure1_slot12;
                    var11 = var12.BILLING_SUBSCRIPTION;
                    var8 = var11.bind(var12)(var8);
                    var2['url'] = var8;
                    var8 = {};
                    var8['location'] = var10;
                    var8['location_stack'] = var9;
                    var2['query'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=156);
case 401:
                    return var2;
case 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0038_ip = 364; continue _fun0038 }
case 376:
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var6];
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var9 = 'BILLING_SUBSCRIPTION_CANCEL_SUCCESS';
                    var3['type'] = var9;
                    var3 = var7.bind(var8)(var3);
case 402: // try_end0
                    return var2;
case 364:
                    return var2;
case 362: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 13;
                    var2 = var3[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.BillingError;
                    var7 = var2.prototype;
                    var7 = Object.create(var7, {constructor: {value: var2}});
                    var14 = var7;
                    var13 = var8;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var7;
                    var4 = _closure1_slot1;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_SUBSCRIPTION_CANCEL_FAIL';
                    var3['type'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 299:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot72 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot72 = var1;
    var5 = function updateSubscription() {
        var1 = undefined;
        var4 = _closure1_slot74;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot73 = var5;
    var1 = function _updateSubscription() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    StartGenerator();
                    var3 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0039_ip = 403; continue _fun0039 }
case 28:
                    var15 = arg1;
                    var5 = var3;
                    var19 = arg3;
                    var18 = arg4;
                    var16 = arg5;
                    var17 = arg6;
                    var10 = arg7;
                    var4 = undefined;
                    var9 = undefined;
                    var13 = undefined;
                    var11 = undefined;
                    var2 = undefined;
                    var3 = var3.paymentSource;
                    var12 = null;
                    if(!(var12 != var3)) { _fun0039_ip = 344; continue _fun0039 }
case 358:
                    var3 = var5;
                    var3 = var3.currency;
                    if(!(var12 != var3)) { _fun0039_ip = 404; continue _fun0039 }
case 344:
                    var14 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 11;
                    var8 = var8[var6];
                    var20 = var14.bind(var4)(var8);
                    var14 = var20.dispatch;
                    var8 = {};
                    var21 = 'BILLING_SUBSCRIPTION_UPDATE_START';
                    var8['type'] = var21;
                    var8 = var14.bind(var20)(var8);
case 147: // try_start_0
                    var14 = {};
                    var8 = var5;
                    var20 = var8.status;
                    var14['status'] = var20;
                    var8 = var8.paymentSource;
                    var9 = var8;
                    var20 = var12 == var8;
                    var8 = undefined;
                    if(var20) { _fun0039_ip = 401; continue _fun0039 }
case 405:
                    var8 = var9.id;
case 401:
                    var14['payment_source_id'] = var8;
                    var8 = var5;
                    var8 = var8.paymentSource;
                    var8 = var12 != var8;
                    var9 = null;
                    if(!var8) { _fun0039_ip = 187; continue _fun0039 }
case 30:
                    var20 = _closure1_slot51;
                    var8 = var5;
                    var8 = var8.paymentSource;
                    var8 = var20.bind(var4)(var8);
                    SaveGenerator(address=199);
case 31:
                    return var8;
case 373:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=19);
                    var9 = var8;
                    if(var20) { _fun0039_ip = 406; continue _fun0039 }
case 187:
                    var14['payment_source_token'] = var9;
                    var9 = var5;
                    var20 = var9.currency;
                    var14['currency'] = var20;
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var20 = 17;
                    var20 = var22[var20];
                    var21 = var21.bind(var4)(var20);
                    var20 = var21.createGatewayCheckoutContext;
                    var9 = var9.paymentSource;
                    var9 = var20.bind(var21)(var9);
                    SaveGenerator(address=271);
case 231:
                    return var9;
case 115:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=19);
                    if(var20) { _fun0039_ip = 407; continue _fun0039 }
case 408:
                    var14['gateway_checkout_context'] = var9;
                    var14['load_id'] = var10;
                    var10 = var5;
                    var20 = var10.pauseDuration;
                    var14['pause_duration'] = var20;
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var20 = 24;
                    var20 = var22[var20];
                    var21 = var21.bind(var4)(var20);
                    var20 = var21.getPurchaseToken;
                    var20 = var20.bind(var21)();
                    var14['purchase_token'] = var20;
                    var14['expected_invoice_price'] = var19;
                    var14['expected_renewal_price'] = var18;
                    var13 = var14;
                    var10 = var10.paymentSource;
                    if(!(var12 != var10)) { _fun0039_ip = 409; continue _fun0039 }
case 410:
                    var18 = _closure1_slot19;
                    var14 = var18.has;
                    var10 = var5;
                    var10 = var10.paymentSource;
                    var10 = var10.type;
                    var10 = var14.bind(var18)(var10);
                    if(!var10) { _fun0039_ip = 409; continue _fun0039 }
case 215:
                    var14 = _closure1_slot76;
                    var10 = var5;
                    var10 = var10.paymentSource;
                    var10 = var10.type;
                    var10 = var14.bind(var4)(var10);
                    SaveGenerator(address=428);
case 411:
                    return var10;
case 232:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=13);
                    if(var14) { _fun0039_ip = 412; continue _fun0039 }
case 413:
                    var11 = var10;
                    var14 = var13;
                    var19 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var18 = 12;
                    var18 = var20[var18];
                    var19 = var19.bind(var4)(var18);
                    var18 = var19.getAPIBaseURL;
                    var18 = var18.bind(var19)();
                    var22 = _closure1_slot12;
                    var21 = var22.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    var19 = var5;
                    var19 = var19.paymentSource;
                    var20 = var19.type;
                    var23 = var12 != var10;
                    var19 = '';
                    if(!var23) { _fun0039_ip = 414; continue _fun0039 }
case 415:
                    var19 = var11;
case 414:
                    var11 = 'success';
                    var11 = var21.bind(var22)(var20, var19, var11);
                    var11 = var18 + var11;
                    var14['return_url'] = var11;
case 409:
                    var11 = var5;
                    var11 = var11.items;
                    if(!(var12 != var11)) { _fun0039_ip = 141; continue _fun0039 }
case 306:
                    var12 = var13;
                    var14 = _closure1_slot0;
                    var18 = _closure1_slot3;
                    var11 = 23;
                    var11 = var18[var11];
                    var18 = var14.bind(var4)(var11);
                    var14 = var18.coerceExistingItemsToNewItemInterval;
                    var11 = var5;
                    var11 = var11.items;
                    var18 = var14.bind(var18)(var11);
                    var14 = var18.map;
                    var11 = function(arg1) {
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
                    var11 = var14.bind(var18)(var11);
                    var12['items'] = var11;
case 141:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var11 = 12;
                    var11 = var14[var11];
                    var11 = var12.bind(var4)(var11);
                    var14 = var11.HTTP;
                    var12 = var14.patch;
                    var11 = {};
                    var19 = _closure1_slot12;
                    var18 = var19.BILLING_SUBSCRIPTION;
                    var15 = var15.id;
                    var15 = var18.bind(var19)(var15);
                    var11['url'] = var15;
                    var15 = {};
                    var15['location'] = var17;
                    var15['location_stack'] = var16;
                    var11['query'] = var15;
                    var11['body'] = var13;
                    var13 = true;
                    var11['oldFormErrors'] = var13;
                    var13 = false;
                    var11['rejectWithError'] = var13;
                    var11 = var12.bind(var14)(var11);
                    SaveGenerator(address=710);
case 416:
                    return var11;
case 417:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0039_ip = 418; continue _fun0039 }
case 419:
                    var14 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var12 = var12[var6];
                    var15 = var14.bind(var4)(var12);
                    var14 = var15.dispatch;
                    var12 = {};
                    var16 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                    var12['type'] = var16;
                    var16 = var11.body;
                    var12['subscription'] = var16;
                    var12 = var14.bind(var15)(var12);
                    var12 = {};
                    var14 = var11.body;
                    var12['subscription'] = var14;
                    var12['redirectConfirmation'] = var13;
case 420: // try_end0
                    return var12;
case 418:
                    return var11;
case 412:
                    return var10;
case 407:
                    return var9;
case 406:
                    return var8;
case 421: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var7 = var9;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var10 = 13;
                    var8 = var8[var10];
                    var8 = var11.bind(var4)(var8);
                    var8 = var8.BillingError;
                    var8 = var9 instanceof var8;
                    if(var8) { _fun0039_ip = 422; continue _fun0039 }
case 423:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var8 = var8[var10];
                    var8 = var9.bind(var4)(var8);
                    var10 = var8.BillingError;
                    var26 = var7;
                    var9 = var10.prototype;
                    var9 = Object.create(var9, {constructor: {value: var10}});
                    var27 = var9;
                    var8 = new var27[var10](var26, var25);
                    var8 = var8 instanceof Object ? var8 : var9;
                    _fun0039_ip = 424; continue _fun0039;
case 422:
                    var8 = var7;
case 424:
                    var2 = var8;
                    var9 = var8.code;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var8 = 14;
                    var8 = var11[var8];
                    var8 = var10.bind(var4)(var8);
                    var8 = var8.ErrorCodes;
                    var8 = var8.CONFIRMATION_REQUIRED;
                    if(!(var9 === var8)) { _fun0039_ip = 425; continue _fun0039 }
case 426:
                    var8 = var7;
                    var8 = var8.body;
                    var8 = var8.payment_id;
                    if(var8) { _fun0039_ip = 427; continue _fun0039 }
case 428:
                    var9 = _closure1_slot39;
                    var8 = 'payment id cannot be null on redirected confirmations.';
                    var8 = var9.bind(var4)(var8);
                    throw var8;
case 427:
                    var8 = _closure1_slot63;
                    var7 = var7.body;
                    var5 = var5.paymentSource;
                    var5 = var8.bind(var4)(var7, var5);
                    return var5;
case 425:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var6];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.dispatch;
                    var3 = {};
                    var7 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                    var3['type'] = var7;
                    var3['error'] = var2;
                    var3 = var5.bind(var6)(var3);
                    throw var2;
case 404:
                    var2 = global;
                    var3 = var2.Error;
                    var2 = 'Currency must be specified with payment source';
                    var2 = var3.bind(var4)(var2);
                    throw var2;
case 403:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot74 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot74 = var1;
    var1 = function _voidPendingPayment() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0040_ip = 347; continue _fun0040 }
case 20:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 12;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var8 = _closure1_slot12;
                    var7 = var8.BILLING_PAYMENTS_VOID;
                    var6 = arg1;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=86);
case 260:
                    return var2;
case 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0040_ip = 93; continue _fun0040 }
case 429:
                    return var3;
case 93:
                    return var2;
case 347:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot75 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot75 = var1;
    var4 = function popupBridgeState() {
        var1 = undefined;
        var4 = _closure1_slot77;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot76 = var4;
    var1 = function _popupBridgeState() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0041_ip = 376; continue _fun0041 }
case 28:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 12;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var9 = _closure1_slot12;
                    var8 = var9.BILLING_POPUP_BRIDGE;
                    var8 = var8.bind(var9)(var7);
                    var2['url'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=89);
case 345:
                    return var2;
case 346:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0041_ip = 90; continue _fun0041 }
case 93:
                    var3 = var2.body;
                    var3 = var3.state;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var4 = 11;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'BILLING_POPUP_BRIDGE_STATE_UPDATE';
                    var4['type'] = var8;
                    var4['state'] = var3;
                    var4['paymentSourceType'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 90:
                    return var2;
case 376:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot77 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot77 = var1;
    var1 = function _fetchIpCountryCode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                    StartGenerator();
                    var3 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0042_ip = 430; continue _fun0042 }
case 341:
                    var6 = undefined;
                    if(!(var3 === var6)) { _fun0042_ip = 431; continue _fun0042 }
case 432:
                    var3 = false;
case 431:
                    var _closure4_slot0 = var6;
                    SaveGenerator(address=31);
case 356:
                    return var6;
case 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0042_ip = 433; continue _fun0042 }
case 42:
                    if(var3) { _fun0042_ip = 222; continue _fun0042 }
case 185:
                    var4 = _closure1_slot9;
                    var7 = var4.ipCountryCodeRequest;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0042_ip = 222; continue _fun0042 }
case 434:
                    var3 = _closure1_slot9;
                    var3 = var3.ipCountryCodeRequest;
                    return var3;
case 222: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 12;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var9 = var3.HTTP;
                    var7 = var9.get;
                    var3 = {};
                    var10 = _closure1_slot12;
                    var10 = var10.BILLING_COUNTRY_CODE;
                    var3['url'] = var10;
                    var10 = false;
                    var3['rejectWithError'] = var10;
                    var3 = var7.bind(var9)(var3);
                    _closure4_slot0 = var3;
                    var9 = _closure1_slot1;
                    var7 = 11;
                    var8 = var8[var7];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.wait;
                    var5 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'BILLING_IP_COUNTRY_CODE_FETCH_START';
                        var1['type'] = var4;
                        var4 = _closure4_slot0;
                        var1['request'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var8.bind(var9)(var5);
                    SaveGenerator(address=175);
case 350:
                    return var3;
case 29:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0042_ip = 435; continue _fun0042 }
case 9:
                    var5 = var3.body;
                    var8 = var5.country_code;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var7 = var5.bind(var6)(var4);
                    var5 = var7.dispatch;
                    var4 = {};
                    var9 = 'BILLING_SET_IP_COUNTRY_CODE';
                    var4['type'] = var9;
                    var4['countryCode'] = var8;
                    var4 = var5.bind(var7)(var4);
case 436: // try_end0
                    return var3;
case 435:
                    return var3;
case 437: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 11;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'BILLING_IP_COUNTRY_CODE_FAILURE';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 433:
                    return var2;
case 430:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot78 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot78 = var1;
    var1 = function _fetchIpLocation() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                    StartGenerator();
                    var3 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0043_ip = 438; continue _fun0043 }
case 341:
                    var6 = undefined;
                    if(!(var3 === var6)) { _fun0043_ip = 431; continue _fun0043 }
case 432:
                    var3 = false;
case 431:
                    var _closure4_slot0 = var6;
                    SaveGenerator(address=31);
case 356:
                    return var6;
case 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0043_ip = 439; continue _fun0043 }
case 42:
                    if(var3) { _fun0043_ip = 222; continue _fun0043 }
case 185:
                    var4 = _closure1_slot9;
                    var7 = var4.ipLocationRequest;
                    var4 = null;
                    if(!(var4 != var7)) { _fun0043_ip = 222; continue _fun0043 }
case 434:
                    var3 = _closure1_slot9;
                    var3 = var3.ipLocationRequest;
                    return var3;
case 222: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 12;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var9 = var3.HTTP;
                    var7 = var9.get;
                    var3 = {};
                    var10 = _closure1_slot12;
                    var10 = var10.BILLING_LOCATION;
                    var3['url'] = var10;
                    var10 = false;
                    var3['rejectWithError'] = var10;
                    var3 = var7.bind(var9)(var3);
                    _closure4_slot0 = var3;
                    var9 = _closure1_slot1;
                    var7 = 11;
                    var8 = var8[var7];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.wait;
                    var5 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'BILLING_IP_LOCATION_FETCH_START';
                        var1['type'] = var4;
                        var4 = _closure4_slot0;
                        var1['request'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var8.bind(var9)(var5);
                    SaveGenerator(address=175);
case 350:
                    return var3;
case 29:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0043_ip = 299; continue _fun0043 }
case 9:
                    var5 = var3.body;
                    var8 = var5.country_code;
                    var5 = var3.body;
                    var13 = var5.subdivision_code;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var9 = var4[var7];
                    var11 = var5.bind(var6)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var12 = 'BILLING_SET_IP_LOCATION';
                    var9['type'] = var12;
                    var12 = {};
                    var12['countryCode'] = var8;
                    var12['subdivisionCode'] = var13;
                    var9['location'] = var12;
                    var9 = var10.bind(var11)(var9);
                    var4 = var4[var7];
                    var7 = var5.bind(var6)(var4);
                    var5 = var7.dispatch;
                    var4 = {};
                    var9 = 'BILLING_SET_IP_COUNTRY_CODE';
                    var4['type'] = var9;
                    var4['countryCode'] = var8;
                    var4 = var5.bind(var7)(var4);
case 440: // try_end0
                    return var3;
case 299:
                    return var3;
case 298: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var8 = 16;
                    var8 = var7[var8];
                    var10 = var5.bind(var6)(var8);
                    var9 = var10.track;
                    var4 = _closure1_slot11;
                    var8 = var4.BILLING_IP_LOCATION_FETCH_ERROR;
                    var4 = {};
                    var11 = var3.message;
                    var4['error_message'] = var11;
                    var4 = var9.bind(var10)(var8, var4);
                    var4 = 11;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'BILLING_IP_LOCATION_FAILURE';
                    var4['type'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 439:
                    return var2;
case 438:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot79 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot79 = var1;
    var1 = function _redeemReactivationOffer() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0044_ip = 343; continue _fun0044 }
case 3:
                    var9 = arg1;
                    var8 = arg2;
case 87: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 12;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var5.bind(var6)(var2);
                    var7 = var2.HTTP;
                    var5 = var7.post;
                    var2 = {};
                    var11 = _closure1_slot12;
                    var10 = var11.REACTIVATION_OFFER_REDEEM;
                    var9 = var9.id;
                    var8 = var8.id;
                    var8 = var10.bind(var11)(var9, var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=99);
case 176:
                    return var2;
case 338:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0044_ip = 441; continue _fun0044 }
case 23:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 11;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                    var4['type'] = var7;
                    var7 = var2.body;
                    var4['subscription'] = var7;
                    var4 = var5.bind(var6)(var4);
case 205: // try_end0
                    _fun0044_ip = 235; continue _fun0044;
case 441:
                    return var2;
case 151: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var3 = var6;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var7 = 13;
                    var5 = var4[var7];
                    var4 = undefined;
                    var5 = var8.bind(var4)(var5);
                    var5 = var5.BillingError;
                    var5 = var6 instanceof var5;
                    if(var5) { _fun0044_ip = 288; continue _fun0044 }
case 442:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var7];
                    var5 = var6.bind(var4)(var5);
                    var7 = var5.BillingError;
                    var13 = var3;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var14 = var6;
                    var5 = new var14[var7](var13, var12);
                    var5 = var5 instanceof Object ? var5 : var6;
                    _fun0044_ip = 321; continue _fun0044;
case 288:
                    var5 = var3;
case 321:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 11;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var6 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                    var2['type'] = var6;
                    var2['error'] = var5;
                    var2 = var3.bind(var4)(var2);
case 235:
                    var2 = undefined;
                    return var2;
case 343:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot80 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot80 = var1;
    var1 = ['line1', 'line2', 'postalCode'];
    var _closure1_slot4 = var1;
    var1 = global;
    var21 = var1.Object;
    var20 = var21.defineProperty;
    var16 = {};
    var1 = true;
    var16['value'] = var1;
    var1 = '__esModule';
    var1 = var20.bind(var21)(var3, var1, var16);
    var1 = 0;
    var16 = var18[var1];
    var1 = undefined;
    var16 = var19.bind(var1)(var16);
    var _closure1_slot5 = var16;
    var16 = 1;
    var16 = var18[var16];
    var16 = var19.bind(var1)(var16);
    var _closure1_slot6 = var16;
    var16 = 2;
    var16 = var18[var16];
    var16 = var19.bind(var1)(var16);
    var _closure1_slot7 = var16;
    var16 = 3;
    var16 = var18[var16];
    var16 = var19.bind(var1)(var16);
    var _closure1_slot8 = var16;
    var16 = 4;
    var16 = var18[var16];
    var16 = var19.bind(var1)(var16);
    var _closure1_slot9 = var16;
    var16 = 5;
    var16 = var18[var16];
    var16 = var19.bind(var1)(var16);
    var _closure1_slot10 = var16;
    var16 = 6;
    var16 = var18[var16];
    var16 = var17.bind(var1)(var16);
    var20 = var16.AnalyticEvents;
    var _closure1_slot11 = var20;
    var20 = var16.Endpoints;
    var _closure1_slot12 = var20;
    var20 = var16.PaymentGateways;
    var _closure1_slot13 = var20;
    var20 = var16.REDIRECTED_PAYMENT_SOURCES;
    var _closure1_slot14 = var20;
    var20 = var16.SubscriptionStatusTypes;
    var _closure1_slot15 = var20;
    var16 = var16.VAULTABLE_PAYMENT_SOURCES;
    var _closure1_slot16 = var16;
    var16 = 7;
    var16 = var18[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.UserLazyPerkSyncLevels;
    var _closure1_slot17 = var16;
    var16 = 8;
    var16 = var18[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.StripeErrorTypes;
    var _closure1_slot18 = var16;
    var16 = 9;
    var16 = var18[var16];
    var16 = var17.bind(var1)(var16);
    var20 = var16.ADYEN_PAYMENT_SOURCES;
    var _closure1_slot19 = var20;
    var20 = var16.CurrencyCodes;
    var _closure1_slot20 = var20;
    var20 = var16.PaymentSourceTypes;
    var _closure1_slot21 = var20;
    var20 = var16.PaymentStatusTypes;
    var _closure1_slot22 = var20;
    var20 = var16.PREPAID_PAYMENT_SOURCES;
    var _closure1_slot23 = var20;
    var20 = var16.STRIPE_PAYMENT_SOURCES;
    var _closure1_slot24 = var20;
    var16 = var16.SubscriptionTypes;
    var _closure1_slot25 = var16;
    var16 = 10;
    var16 = var18[var16];
    var20 = var19.bind(var1)(var16);
    var16 = var20.prototype;
    var19 = Object.create(var16, {constructor: {value: var20}});
    var24 = 'BillingActionCreators.tsx';
    var25 = var19;
    var16 = new var25[var20](var24, var23);
    var16 = var16 instanceof Object ? var16 : var19;
    var _closure1_slot26 = var16;
    var16 = function validateSetupIntentResponse(arg1, arg2, arg3) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = arg3;
            var5 = null;
            if(!(var5 == var3)) { _fun0045_ip = 149; continue _fun0045 }
case 341:
            if(!(var5 != var4)) { _fun0045_ip = 443; continue _fun0045 }
case 99:
            var1 = var4.payment_method;
            if(!(var5 != var1)) { _fun0045_ip = 46; continue _fun0045 }
case 356:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 19;
            var1 = var6[var1];
            var7 = undefined;
            var6 = var5.bind(var7)(var1);
            var1 = var4.payment_method;
            var5 = 'string';
            var1 = typeof var1;
            var5 = var5 === var1;
            var1 = 'setupIntent.payment_method expanded not supported';
            var1 = var6.bind(var7)(var5, var1);
            var1 = {};
            var1['setupIntent'] = var4;
            var1['error'] = var3;
            return var1;
case 46:
            var4 = undefined;
            var1 = 'setupIntent.payment_method not available with successful stripe call';
            var1 = var2.bind(var4)(var1);
            throw var1;
case 443:
            var4 = undefined;
            var1 = 'SetupIntent not created';
            var1 = var2.bind(var4)(var1);
            throw var1;
case 149:
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            throw var1;
        }
    };
    var _closure1_slot27 = var16;
    var16 = function() {
        var4 = _closure1_slot6;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0046_ip = 337; continue _fun0046 }
case 3:
                    var2 = var3.submit;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=24);
case 263:
                    return var2;
case 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0046_ip = 444; continue _fun0046 }
case 251:
                    var6 = _closure1_slot26;
                    var5 = var6.info;
                    var4 = 'Stripe Elements submit response: ';
                    var4 = var5.bind(var6)(var4, var2);
                    var5 = var2.error;
                    var4 = null;
                    if(!(var4 == var5)) { _fun0046_ip = 445; continue _fun0046 }
case 400:
                    var4 = undefined;
                    return var4;
case 445:
                    var7 = _closure1_slot26;
                    var6 = var7.error;
                    var5 = var2.error;
                    var4 = 'Stripe Elements submit error: ';
                    var4 = var6.bind(var7)(var4, var5);
                    var6 = _closure1_slot38;
                    var5 = var2.error;
                    var4 = undefined;
                    var3 = true;
                    var3 = var6.bind(var4)(var5, var3);
                    throw var3;
case 444:
                    return var2;
case 337:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var16 = var16.bind(var1)();
    var _closure1_slot28 = var16;
    var16 = 25;
    var16 = var18[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = 'actions/BillingActionCreators.tsx';
    var16 = var17.bind(var18)(var16);
    var16 = function deletePaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot29;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deletePaymentSource'] = var16;
    var16 = function updatePaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updatePaymentSource'] = var16;
    var3['validatePaymentSourceBillingAddress'] = var15;
    var3['createAdyenPaymentSourceToken'] = var14;
    var3['createPaymentSource'] = var13;
    var3['dispatchPaymentElementsConfirmationError'] = var12;
    var3['dispatchConfirmationError'] = var11;
    var11 = function createCardToken() {
        var1 = undefined;
        var4 = _closure1_slot40;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createCardToken'] = var11;
    var11 = function confirmEPS() {
        var1 = undefined;
        var4 = _closure1_slot41;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmEPS'] = var11;
    var11 = function confirmIdeal() {
        var1 = undefined;
        var4 = _closure1_slot42;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmIdeal'] = var11;
    var11 = function confirmPrzelewy24() {
        var1 = undefined;
        var4 = _closure1_slot43;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmPrzelewy24'] = var11;
    var11 = function confirmPaymentElementSource() {
        var1 = undefined;
        var4 = _closure1_slot44;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmPaymentElementSource'] = var11;
    var11 = function confirmCardPaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot45;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmCardPaymentSource'] = var11;
    var11 = function createPaymentRequestPaymentSource(arg1, arg2, arg3) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var1 = arg2;
            var4 = _closure1_slot2;
            var5 = _closure1_slot3;
            var3 = 21;
            var3 = var5[var3];
            var6 = undefined;
            var5 = var4.bind(var6)(var3);
            var4 = var5.parseStripePaymentMethod;
            var3 = arg1;
            var3 = var4.bind(var5)(var3);
            var5 = var3.token;
            var4 = var3.billingAddressInfo;
            var3 = _closure1_slot36;
            var2 = _closure1_slot13;
            var2 = var2.STRIPE;
            var7 = null;
            if(!(var7 != var1)) { _fun0047_ip = 223; continue _fun0047 }
case 202:
            var4 = var1;
case 223:
            var1 = {};
            var7 = arg3;
            var1['analyticsLocation'] = var7;
            var12 = undefined;
            var11 = var2;
            var10 = var5;
            var9 = var4;
            var8 = var1;
            var1 = var12[var3](var11, var10, var9, var8, var7);
            return var1;
        }
    };
    var3['createPaymentRequestPaymentSource'] = var11;
    var11 = function createBraintreePaymentSource(arg1, arg2, arg3) {
        var6 = _closure1_slot36;
        var1 = _closure1_slot13;
        var10 = var1.BRAINTREE;
        var4 = {};
        var1 = arg3;
        var4['analyticsLocation'] = var1;
        var11 = undefined;
        var9 = arg1;
        var8 = arg2;
        var7 = var4;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['createBraintreePaymentSource'] = var11;
    var11 = function createStripePaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot46;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createStripePaymentSource'] = var11;
    var11 = function createAdyenPrepaidPaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot47;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createAdyenPrepaidPaymentSource'] = var11;
    var11 = function createAdyenVaultablePaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot48;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createAdyenVaultablePaymentSource'] = var11;
    var3['createStripePaymentSourceToken'] = var10;
    var3['createPaymentSourceToken'] = var9;
    var9 = function fetchPaymentSources() {
        var1 = undefined;
        var4 = _closure1_slot52;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchPaymentSources'] = var9;
    var9 = function fetchPaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot53;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchPaymentSource'] = var9;
    var3['fetchPayment'] = var8;
    var8 = function fetchPayments() {
        var1 = undefined;
        var4 = _closure1_slot56;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchPayments'] = var8;
    var8 = function fetchSubscriptions() {
        var1 = undefined;
        var4 = _closure1_slot57;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSubscriptions'] = var8;
    var8 = function getPerksRelevance() {
        var1 = undefined;
        var4 = _closure1_slot58;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getPerksRelevance'] = var8;
    var8 = function getNitroAffinity() {
        var1 = undefined;
        var4 = _closure1_slot59;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getNitroAffinity'] = var8;
    var8 = function fetchMostRecentSubscription() {
        var1 = undefined;
        var4 = _closure1_slot60;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchMostRecentSubscription'] = var8;
    var8 = function createSubscription() {
        var1 = undefined;
        var4 = _closure1_slot61;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createSubscription'] = var8;
    var8 = function payInvoiceManually() {
        var1 = undefined;
        var4 = _closure1_slot62;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['payInvoiceManually'] = var8;
    var3['handleConfirmation'] = var7;
    var7 = function redirectedPaymentSucceeded() {
        var1 = undefined;
        var4 = _closure1_slot66;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['redirectedPaymentSucceeded'] = var7;
    var3['paymentIntentSucceeded'] = var6;
    var6 = function cancelSubscription() {
        var1 = undefined;
        var4 = _closure1_slot72;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['cancelSubscription'] = var6;
    var6 = function deleteRenewalMutation(arg1, arg2) {
        var7 = arg1;
        var6 = _closure1_slot73;
        var5 = {};
        var2 = var7.items;
        var5['items'] = var2;
        var4 = {};
        var2 = 0;
        var4['amount'] = var2;
        var2 = var7.currency;
        var4['currency'] = var2;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 23;
        var1 = var3[var1];
        var3 = undefined;
        var10 = var2.bind(var3)(var1);
        var9 = var10.getItemPlansTotalServerPrice;
        var8 = var7.items;
        var2 = var7.currency;
        var1 = var7.paymentSourceId;
        var12 = var9.bind(var10)(var8, var2, var1);
        var11 = arg2;
        var16 = undefined;
        var15 = var7;
        var14 = var5;
        var13 = var4;
        var1 = var16[var6](var15, var14, var13, var12, var11, var10);
        return var1;
    };
    var3['deleteRenewalMutation'] = var6;
    var3['updateSubscription'] = var5;
    var5 = function resubscribeToSubscription(arg1, arg2, arg3, arg4, arg5) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var8 = arg1;
            var11 = arg3;
            var7 = _closure1_slot73;
            var6 = {};
            var2 = _closure1_slot15;
            var2 = var2.ACTIVE;
            var6['status'] = var2;
            var6['paymentSource'] = var11;
            var2 = arg4;
            var6['currency'] = var2;
            var5 = {};
            var2 = 0;
            var5['amount'] = var2;
            var2 = var8.currency;
            var5['currency'] = var2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 23;
            var1 = var3[var1];
            var4 = undefined;
            var10 = var2.bind(var4)(var1);
            var9 = var10.getItemPlansTotalServerPrice;
            var3 = var8.items;
            var2 = var8.currency;
            var1 = null;
            var12 = var1 == var11;
            var1 = undefined;
            if(var12) { _fun0048_ip = 444; continue _fun0048 }
case 361:
            var1 = var11.id;
case 444:
            var15 = var9.bind(var10)(var3, var2, var1);
            var14 = arg2;
            var13 = arg5;
            var19 = undefined;
            var18 = var8;
            var17 = var6;
            var16 = var5;
            var1 = var19[var7](var18, var17, var16, var15, var14, var13, var12);
            return var1;
        }
    };
    var3['resubscribeToSubscription'] = var5;
    var5 = function upgradeSubscription(arg1, arg2, arg3, arg4, arg5, arg6) {
        var8 = arg1;
        var3 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = 23;
        var1 = var4[var1];
        var7 = undefined;
        var4 = var3.bind(var7)(var1);
        var3 = var4.getItemsWithUpsertedPremiumPlanId;
        var1 = arg2;
        var1 = var3.bind(var4)(var8, var1);
        var6 = _closure1_slot73;
        var5 = {};
        var2 = _closure1_slot15;
        var2 = var2.ACTIVE;
        var5['status'] = var2;
        var5['items'] = var1;
        var12 = arg3;
        var11 = arg4;
        var10 = arg5;
        var9 = arg6;
        var15 = undefined;
        var14 = var8;
        var13 = var5;
        var1 = var15[var6](var14, var13, var12, var11, var10, var9, var8);
        return var1;
    };
    var3['upgradeSubscription'] = var5;
    var5 = function changeSubscriptionCurrency(arg1, arg2, arg3, arg4, arg5) {
        var2 = arg2;
        var8 = _closure1_slot73;
        var7 = {};
        var7['currency'] = var2;
        var6 = {};
        var1 = 0;
        var6['amount'] = var1;
        var1 = var2.toLowerCase;
        var1 = var1.bind(var2)();
        var6['currency'] = var1;
        var15 = undefined;
        var14 = arg1;
        var11 = arg3;
        var10 = arg4;
        var9 = arg5;
        var13 = var7;
        var12 = var6;
        var1 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
        return var1;
    };
    var3['changeSubscriptionCurrency'] = var5;
    var5 = function changePaymentSource(arg1, arg2, arg3, arg4, arg5, arg6) {
        var2 = arg3;
        var8 = _closure1_slot73;
        var7 = {};
        var1 = arg2;
        var7['paymentSource'] = var1;
        var7['currency'] = var2;
        var6 = {};
        var1 = 0;
        var6['amount'] = var1;
        var1 = var2.toLowerCase;
        var1 = var1.bind(var2)();
        var6['currency'] = var1;
        var15 = undefined;
        var14 = arg1;
        var11 = arg4;
        var10 = arg5;
        var9 = arg6;
        var13 = var7;
        var12 = var6;
        var1 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
        return var1;
    };
    var3['changePaymentSource'] = var5;
    var5 = function clearUpdatePaymentSourceError() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearUpdatePaymentSourceError'] = var5;
    var5 = function clearRemovePaymentSourceError() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearRemovePaymentSourceError'] = var5;
    var5 = function clearPaymentAuthenticationError() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'PAYMENT_AUTHENTICATION_CLEAR_ERROR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearPaymentAuthenticationError'] = var5;
    var5 = function voidPendingPayment() {
        var1 = undefined;
        var4 = _closure1_slot75;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['voidPendingPayment'] = var5;
    var3['popupBridgeState'] = var4;
    var4 = function popupBridgeCallback(arg1) {
        var2 = arg1;
        var11 = var2.paymentSourceType;
        var _closure2_slot0 = var11;
        var9 = var2.state;
        var8 = var2.path;
        var7 = var2.query;
        var6 = var2.insecure;
        var3 = _closure1_slot1;
        var10 = _closure1_slot3;
        var2 = 11;
        var2 = var10[var2];
        var4 = undefined;
        var12 = var3.bind(var4)(var2);
        var3 = var12.dispatch;
        var2 = {};
        var13 = 'BILLING_POPUP_BRIDGE_CALLBACK_START';
        var2['type'] = var13;
        var2['paymentSourceType'] = var11;
        var2 = var3.bind(var12)(var2);
        var3 = _closure1_slot0;
        var2 = 12;
        var2 = var10[var2];
        var2 = var3.bind(var4)(var2);
        var4 = var2.HTTP;
        var3 = var4.post;
        var2 = {};
        var10 = _closure1_slot12;
        var5 = var10.BILLING_POPUP_BRIDGE_CALLBACK;
        var5 = var5.bind(var10)(var11);
        var2['url'] = var5;
        var5 = {};
        var5['state'] = var9;
        var5['path'] = var8;
        var5['query'] = var7;
        var5['insecure'] = var6;
        var2['body'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'BILLING_POPUP_BRIDGE_CALLBACK_END';
            var1['type'] = var4;
            var4 = _closure2_slot0;
            var1['paymentSourceType'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = arg1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['popupBridgeCallback'] = var4;
    var4 = function fetchIpCountryCode() {
        var1 = undefined;
        var4 = _closure1_slot78;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchIpCountryCode'] = var4;
    var4 = function fetchIpLocation() {
        var1 = undefined;
        var4 = _closure1_slot79;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchIpLocation'] = var4;
    var4 = function resetPaymentIntentId() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'RESET_PAYMENT_ID';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetPaymentIntentId'] = var4;
    var4 = function resetSubscriptionStore() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'BILLING_SUBSCRIPTION_RESET';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetSubscriptionStore'] = var4;
    var4 = function startBrowserCheckout(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_PAYMENT_BROWSER_CHECKOUT_STARTED';
        var2['type'] = var5;
        var5 = arg1;
        var2['loadId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['startBrowserCheckout'] = var4;
    var2 = function redeemReactivationOffer() {
        var1 = undefined;
        var4 = _closure1_slot80;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['redeemReactivationOffer'] = var2;
    return var1;
})();