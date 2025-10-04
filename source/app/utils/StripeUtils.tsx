// app/utils/StripeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getStripe() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot2;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.loadStripe;
            var1 = _closure1_slot6;
            var1 = var1.STRIPE;
            var1 = var1.KEY;
            var4 = var3.bind(var4)(var1);
            var3 = var4.then;
            var1 = function(arg1) {
                var1 = arg1;
                var _closure1_slot2 = var1;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.resolve;
            var2 = _closure1_slot2;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = function _authenticatePaymentIntentForPaymentId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var13 = arg1;
                    var4 = undefined;
                    var7 = undefined;
                    var10 = undefined;
                    var6 = undefined;
                    var12 = undefined;
                    var5 = undefined;
                    var9 = undefined;
case 7: // try_start_0
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 5;
                    var2 = var8[var2];
                    var2 = var3.bind(var4)(var2);
                    var8 = var2.HTTP;
                    var3 = var8.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var15 = _closure1_slot5;
                    var14 = var15.BILLING_STRIPE_PAYMENT_INTENTS;
                    var13 = var14.bind(var15)(var13);
                    var2['url'] = var13;
                    var2 = var3.bind(var8)(var2);
                    SaveGenerator(address=104);
case 8:
                    return var2;
case 4:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var3 = var2.body;
                    var7 = var3.stripe_payment_intent_client_secret;
                    var3 = _closure1_slot9;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=136);
case 11:
                    return var3;
case 12:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var10 = var3;
                    var8 = null;
                    if(!(var8 != var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var14 = var10;
                    var13 = var14.retrievePaymentIntent;
                    var4 = var7;
                    var4 = var13.bind(var14)(var4);
                    SaveGenerator(address=178);
case 17:
                    return var4;
case 18:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=12);
                    if(var13) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var13 = var4.error;
                    var6 = var13;
                    var12 = var4.paymentIntent;
                    if(!(var8 == var13)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var13 = var12;
                    if(!(var8 != var13)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var5 = {};
                    var15 = var12;
                    var16 = var15.status;
                    var15 = _closure1_slot8;
                    var15 = var15.REQUIRES_PAYMENT_METHOD;
                    var15 = var16 === var15;
                    var14 = var15;
                    if(!var15) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var15 = var12;
                    var15 = var15.last_payment_error;
                    var14 = var8 != var15;
case 25:
                    var13 = var14;
                    if(!var14) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var14 = var12;
                    var14 = var14.last_payment_error;
                    var14 = var14.payment_method;
                    var13 = var8 != var14;
case 27:
                    if(!var13) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                    var14 = var5;
                    var13 = var12;
                    var13 = var13.last_payment_error;
                    var13 = var13.payment_method;
                    var13 = var13.id;
                    var14['payment_method'] = var13;
case 29:
                    var13 = var12;
                    var14 = var13.status;
                    var13 = _closure1_slot8;
                    var13 = var13.REQUIRES_PAYMENT_METHOD;
                    if(!(var13 !== var14)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var13 = _closure1_slot8;
                    var13 = var13.REQUIRES_CONFIRMATION;
                    if(!(var13 !== var14)) { _fun0002_ip = 31; continue _fun0002 }
case 33:
                    var13 = _closure1_slot8;
                    var13 = var13.REQUIRES_ACTION;
                    if(!(var13 !== var14)) { _fun0002_ip = 31; continue _fun0002 }
case 34:
                    var13 = _closure1_slot8;
                    var13 = var13.SUCCEEDED;
                    if(!(var13 !== var14)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var13 = _closure1_slot8;
                    var13 = var13.PROCESSING;
                    if(!(var13 !== var14)) { _fun0002_ip = 35; continue _fun0002 }
case 37:
                    var11 = _closure1_slot8;
                    var11 = var11.CANCELED;
                    var11 = {};
                    var14 = var12.status;
                    var12 = global;
                    var12 = var12.HermesInternal;
                    var13 = var12.concat;
                    var12 = 'Invalid Payment Intent status: ';
                    var12 = var13.bind(var12)(var14);
                    var11['error'] = var12;
case 38: // try_end0
                    return var11;
case 35:
                    var11 = {};
                    return var11;
case 31: // try_start_1
                    var11 = var10;
                    var10 = var11.confirmCardPayment;
                    var5 = var10.bind(var11)(var7, var5);
                    SaveGenerator(address=468);
case 39:
                    return var5;
case 40:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var7 = var5.error;
                    var9 = var7;
                    if(!(var8 == var7)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                    var7 = {};
                    _fun0002_ip = 45; continue _fun0002;
case 43:
                    var8 = {};
                    var9 = var9.message;
                    var8['error'] = var9;
                    var7 = var8;
case 45: // try_end1
                    return var7;
case 41:
                    return var5;
case 23: // try_start_2
                    var5 = {};
                    var7 = 'payment intent does not exist';
                    var5['error'] = var7;
case 46: // try_end2
                    return var5;
case 21: // try_start_3
                    var5 = {};
                    var6 = var6.message;
                    var5['error'] = var6;
case 47: // try_end3
                    return var5;
case 19:
                    return var4;
case 15: // try_start_4
                    var4 = {};
                    var5 = 'unable to load stripe';
                    var4['error'] = var5;
case 48: // try_end4
                    return var4;
case 13:
                    return var3;
case 9:
                    return var2;
case 49: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=2);
                    var2 = {};
                    var3 = var3.message;
                    var2['error'] = var3;
                    return var2;
case 5:
                    return var1;
                }
            };
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
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.Endpoints;
    var _closure1_slot5 = var9;
    var5 = var5.PaymentSettings;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var13 = 'StripeUtils';
    var14 = var8;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot7 = var5;
    var5 = {};
    var8 = 'requires_payment_method';
    var5['REQUIRES_PAYMENT_METHOD'] = var8;
    var8 = 'requires_confirmation';
    var5['REQUIRES_CONFIRMATION'] = var8;
    var8 = 'requires_action';
    var5['REQUIRES_ACTION'] = var8;
    var8 = 'processing';
    var5['PROCESSING'] = var8;
    var8 = 'canceled';
    var5['CANCELED'] = var8;
    var8 = 'succeeded';
    var5['SUCCEEDED'] = var8;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/StripeUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var6 = undefined;
            var2 = undefined;
            var3 = undefined;
case 50: // try_start_0
            var4 = var1;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var5 = function throwErr(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var1 = arg1;
                            var5 = _closure3_slot0;
                            var2 = null;
                            var2 = var2 != var1;
                            var4 = '';
                            if(!var2) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                            var4 = var1;
case 51:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var3 = var1.concat;
                            var2 = 'You passed an invalid expiration date ';
                            var1 = 'Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`';
                            var1 = var3.bind(var2)(var5, var4, var1);
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var5;
                    var3 = var4.split;
                    var2 = /[.\-\/\s]+/g;
                    var3 = var3.bind(var4)(var2);
                    var _closure3_slot2 = var3;
                    var2 = var3.length;
                    var7 = 2;
                    if(!(var7 !== var2)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var2 = undefined;
                    var2 = var5.bind(var2)();
case 53:
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var2 = global;
                            var3 = var2.parseInt;
                            var4 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var1);
                            var3 = var2.isNaN;
                            var3 = var3.bind(var4)(var1);
                            if(!var3) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                            var5 = _closure3_slot1;
                            var8 = _closure3_slot2;
                            var3 = var2.HermesInternal;
                            var7 = var3.concat;
                            var6 = '';
                            var3 = ' is not a number.';
                            var3 = var7.bind(var6)(var8, var3);
                            var3 = var5.bind(var4)(var3);
case 55:
                            var3 = 1;
                            if(!(var1 < var3)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                            var3 = _closure3_slot1;
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var5 = '';
                            var2 = ' is less than one.';
                            var2 = var6.bind(var5)(var1, var2);
                            var2 = var3.bind(var4)(var2);
case 57:
                            return var1;
                        }
                    };
                    var4 = var2.bind(var3)(var1);
                    var3 = 0;
                    var2 = var4[var3];
                    var1 = 12;
                    if(!(!(var2 > var1))) { _fun0004_ip = 59; continue _fun0004 }
case 60:
                    var2 = var4[var3];
                    var6 = new Array(2);
                    var6[0] = var2;
                    var2 = 1;
                    var2 = var4[var2];
                    var6[1] = var2;
                    _fun0004_ip = 61; continue _fun0004;
case 59:
                    var2 = 1;
                    var8 = var4[var2];
                    var2 = new Array(2);
                    var2[0] = var8;
                    var4 = var4[var3];
                    var2[1] = var4;
                    var6 = var2;
case 61:
                    var4 = _closure1_slot4;
                    var2 = undefined;
                    var6 = var4.bind(var2)(var6, var7);
                    var3 = var6[var3];
                    var4 = 1;
                    var4 = var6[var4];
                    if(!(var3 > var1)) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = 'Month must be a number 1-12, not ';
                    var1 = '.';
                    var1 = var7.bind(var6)(var3, var1);
                    var1 = var5.bind(var2)(var1);
case 62:
                    var1 = 100;
                    var2 = var4;
                    if(!(var2 < var1)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                    var1 = 2000;
                    var2 = var4 + var1;
case 64:
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var5 = var1.bind(var6)(var4);
            var4 = _closure1_slot4;
            var1 = 2;
            var1 = var4.bind(var6)(var5, var1);
            var4 = 0;
            var2 = var1[var4];
            var5 = 1;
            var3 = var1[var5];
case 66: // try_end0
            var1 = global;
            var6 = var1.Date;
            var8 = var3;
            var7 = var2;
            var3 = var6.prototype;
            var3 = Object.create(var3, {constructor: {value: var6}});
            var9 = var3;
            var2 = new var9[var6](var8, var7, var6);
            var2 = var2 instanceof Object ? var2 : var3;
            var1 = var1.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var9 = var3;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = var2.setMonth;
            var3 = var2.getMonth;
            var3 = var3.bind(var2)();
            var3 = var3 - var5;
            var3 = var4.bind(var2)(var3);
            var4 = var2.setMonth;
            var3 = var2.getMonth;
            var3 = var3.bind(var2)();
            var3 = var3 + var5;
            var3 = var4.bind(var2)(var3, var5);
            var1 = var2 > var1;
            return var1;
case 67: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = false;
            return var1;
        }
    };
    var3['validateExpiry'] = var5;
    var3['getStripe'] = var4;
    var4 = function getStripeClientMode() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot6;
            var1 = var1.STRIPE;
            var3 = var1.KEY;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var1 = _closure1_slot6;
            var1 = var1.STRIPE;
            var4 = var1.KEY;
            var3 = var4.startsWith;
            var1 = 'pk_live';
            var3 = var3.bind(var4)(var1);
            var1 = 'live';
            if(var3) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var3 = _closure1_slot6;
            var3 = var3.STRIPE;
            var5 = var3.KEY;
            var4 = var5.startsWith;
            var3 = 'pk_test';
            var4 = var4.bind(var5)(var3);
            var3 = 'test';
            if(var4) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var7 = _closure1_slot7;
            var6 = var7.warn;
            var4 = _closure1_slot6;
            var4 = var4.STRIPE;
            var5 = var4.KEY;
            var4 = 'Unexpected value for Stripe public key: ';
            var4 = var6.bind(var7)(var4, var5);
            var3 = 'unknown';
case 72:
            var1 = var3;
case 70:
            _fun0007_ip = 74; continue _fun0007;
case 68:
            var5 = _closure1_slot7;
            var4 = var5.warn;
            var2 = _closure1_slot6;
            var2 = var2.STRIPE;
            var3 = var2.KEY;
            var2 = 'getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ';
            var2 = var4.bind(var5)(var2, var3);
            var1 = 'unknown';
case 74:
            return var1;
        }
    };
    var3['getStripeClientMode'] = var4;
    var4 = function parseStripePaymentMethod(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var1 = var3.billing_details;
            var4 = var1.address;
            var5 = null;
            if(!(var5 == var4)) { _fun0008_ip = 52; continue _fun0008 }
case 75:
            var4 = {};
case 52:
            var2 = {};
            var7 = var1.name;
            var8 = var5 != var7;
            var1 = '';
            var6 = var1;
            if(!var8) { _fun0008_ip = 76; continue _fun0008 }
case 77:
            var6 = var7;
case 76:
            var2['name'] = var6;
            var7 = var4.line1;
            var8 = var5 != var7;
            var6 = var1;
            if(!var8) { _fun0008_ip = 78; continue _fun0008 }
case 79:
            var6 = var7;
case 78:
            var2['line1'] = var6;
            var7 = var4.line2;
            var8 = var5 != var7;
            var6 = var1;
            if(!var8) { _fun0008_ip = 80; continue _fun0008 }
case 81:
            var6 = var7;
case 80:
            var2['line2'] = var6;
            var7 = var4.city;
            var8 = var5 != var7;
            var6 = var1;
            if(!var8) { _fun0008_ip = 82; continue _fun0008 }
case 83:
            var6 = var7;
case 82:
            var2['city'] = var6;
            var7 = var4.state;
            var8 = var5 != var7;
            var6 = var1;
            if(!var8) { _fun0008_ip = 84; continue _fun0008 }
case 85:
            var6 = var7;
case 84:
            var2['state'] = var6;
            var7 = var4.country;
            var8 = var5 != var7;
            var6 = var1;
            if(!var8) { _fun0008_ip = 86; continue _fun0008 }
case 87:
            var6 = var7;
case 86:
            var2['country'] = var6;
            var4 = var4.postal_code;
            var5 = var5 != var4;
            if(!var5) { _fun0008_ip = 88; continue _fun0008 }
case 89:
            var1 = var4;
case 88:
            var2['postalCode'] = var1;
            var1 = {};
            var3 = var3.id;
            var1['token'] = var3;
            var1['billingAddressInfo'] = var2;
            return var1;
        }
    };
    var3['parseStripePaymentMethod'] = var4;
    var4 = function parseBillingAddressInfoToStripeBillingDetails(arg1) {
        var3 = arg1;
        var1 = {};
        var2 = var3.name;
        var1['name'] = var2;
        var2 = {};
        var4 = var3.line1;
        var2['line1'] = var4;
        var4 = var3.line2;
        var2['line2'] = var4;
        var4 = var3.city;
        var2['city'] = var4;
        var4 = var3.state;
        var2['state'] = var4;
        var4 = var3.postalCode;
        var2['postal_code'] = var4;
        var3 = var3.country;
        var2['country'] = var3;
        var1['address'] = var2;
        return var1;
    };
    var3['parseBillingAddressInfoToStripeBillingDetails'] = var4;
    var2 = function authenticatePaymentIntentForPaymentId() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['authenticatePaymentIntentForPaymentId'] = var2;
    return var1;
})();