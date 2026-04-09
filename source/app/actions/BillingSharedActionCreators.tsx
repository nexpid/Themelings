// app/actions/BillingSharedActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _validatePaymentSourceBillingAddress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = arg1;
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot6;
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
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var3 = var2.body;
                    var3 = var3.token;
case 9: // try_end0
                    return var3;
case 7:
                    return var2;
case 10: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var2 = var6[var2];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.parseV8BillingAddressSkemaErrorToBillingError;
                    var2 = var2.bind(var4)(var7);
                    var4 = _closure1_slot1;
                    var3 = 6;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
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
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _popupBridgeState() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 4:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var9 = _closure1_slot6;
                    var8 = var9.BILLING_POPUP_BRIDGE;
                    var8 = var8.bind(var9)(var7);
                    var2['url'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=89);
case 12:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = var2.body;
                    var3 = var3.state;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 6;
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
case 14:
                    return var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _createPaymentSource() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[4];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 16; continue _fun0003 }
case 4:
                    var15 = arg1;
                    var13 = arg2;
                    var14 = arg3;
                    var12 = arg4;
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = false;
case 17:
                    var11 = var2;
                    var3 = undefined;
                    SaveGenerator(address=42);
case 19:
                    return var6;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var7 = 6;
                    var5 = var5[var7];
                    var9 = var8.bind(var6)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var10 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                    var5['type'] = var10;
                    var5 = var8.bind(var9)(var5);
case 23: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 4;
                    var5 = var9[var5];
                    var5 = var8.bind(var6)(var5);
                    var9 = var5.HTTP;
                    var8 = var9.post;
                    var5 = {};
                    var10 = _closure1_slot6;
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
case 24:
                    return var5;
case 25:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var10 = _closure1_slot4;
                    var9 = var10.createFromServer;
                    var8 = var5.body;
                    var8 = var9.bind(var10)(var8);
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var7];
                    var11 = var10.bind(var6)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var12 = 'BILLING_PAYMENT_SOURCE_CREATE_SUCCESS';
                    var9['type'] = var12;
                    var9['paymentSource'] = var8;
                    var9 = var10.bind(var11)(var9);
case 28: // try_end0
                    return var8;
case 26:
                    return var5;
case 29: // catch_target0
                    CatchBlockStart(arg_register=12);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 5;
                    var8 = var10[var5];
                    var11 = var9.bind(var6)(var8);
                    var8 = var11.parseV8BillingAddressSkemaErrorToBillingError;
                    var8 = var8.bind(var11)(var13);
                    var3 = var8;
                    var14 = null;
                    var11 = var14 != var13;
                    var12 = undefined;
                    if(!var11) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var15 = var13.body;
                    var11 = var14 != var15;
                    var12 = var15;
case 30:
                    if(!var11) { _fun0003_ip = 32; continue _fun0003 }
case 33:
                    var11 = var12.adyen_redirect_url;
case 32:
                    if(!var11) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    var12 = var8.fields;
                    var15 = var14 == var13;
                    var11 = undefined;
                    if(var15) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var13 = var13.body;
                    var14 = var14 == var13;
                    var11 = undefined;
                    if(var14) { _fun0003_ip = 36; continue _fun0003 }
case 38:
                    var11 = var13.adyen_redirect_url;
case 36:
                    var12['adyen_redirect_url'] = var11;
case 34:
                    var8 = var8.code;
                    var5 = var10[var5];
                    var5 = var9.bind(var6)(var5);
                    var5 = var5.ErrorCodes;
                    var5 = var5.CONFIRMATION_REQUIRED;
                    if(!(var8 !== var5)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
                    var4['type'] = var7;
                    var7 = var3;
                    var4['error'] = var7;
                    var4 = var5.bind(var6)(var4);
case 39:
                    throw var3;
case 21:
                    return var2;
case 16:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StripeErrorTypes;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/BillingSharedActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function validatePaymentSourceBillingAddress() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['validatePaymentSourceBillingAddress'] = var4;
    var4 = function dispatchConfirmationError(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var10 = arguments[1];
            var15 = arguments[2];
            var5 = arguments[3];
            var4 = undefined;
            if(!(var10 === var4)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var10 = true;
case 41:
            if(!(var15 === var4)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var2 = var7[var1];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.khEaRI;
            var15 = var2.bind(var3)(var1);
case 43:
            if(!(var5 === var4)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var5 = {};
case 45:
            var6 = _closure1_slot7;
            var3 = var6.includes;
            var1 = var8.type;
            var1 = var3.bind(var6)(var1);
            if(var1) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 9;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var7 = var3.BillingError;
            var9 = 'string';
            var6 = typeof var8;
            var3 = var8;
            if(!(var9 === var6)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var3 = var15;
case 49:
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
            if(!(var11 === var12)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var3 = false;
            var6 = var9;
            var7 = var1;
            _fun0004_ip = 51; continue _fun0004;
case 47:
            var1 = var8.message;
            var9 = null;
            var12 = var15;
            if(!(var9 != var1)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var14 = var8.message;
            var1 = global;
            var1 = var1.HermesInternal;
            var13 = var1.concat;
            var11 = '';
            var1 = ': ';
            var12 = var13.bind(var11)(var15, var1, var14);
case 53:
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
            if(var13) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var9 = var11.type;
case 55:
            var1['payment_source_type'] = var9;
            var11 = var8.type;
            var9 = 'card_error';
            if(!(var9 === var11)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 8;
            var9 = var13[var9];
            var14 = var11.bind(var4)(var9);
            var13 = var14.track;
            var9 = _closure1_slot5;
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
            var9[14] = var16;
            var9 = var13.bind(var14)(var11, var9);
            var10 = false;
case 57:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 9;
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
case 51:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 6;
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
            if(!(var10 !== var9)) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var8 = var6.message;
case 59:
            var6 = var1.prototype;
            var6 = Object.create(var6, {constructor: {value: var1}});
            var20 = var6;
            var19 = var8;
            var1 = new var20[var1](var19, var18);
            var1 = var1 instanceof Object ? var1 : var6;
            if(!var3) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 10;
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
            var2[4] = var6;
            var2 = var3.bind(var4)(var1, var2);
case 61:
            return var1;
        }
    };
    var3['dispatchConfirmationError'] = var4;
    var4 = function popupBridgeState() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['popupBridgeState'] = var4;
    var2 = function createPaymentSource() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createPaymentSource'] = var2;
    return var1;
})();