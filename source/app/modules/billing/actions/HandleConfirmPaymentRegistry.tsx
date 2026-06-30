// app/modules/billing/actions/HandleConfirmPaymentRegistry.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var11;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot16;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var11[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var11[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var11[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var11[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var11[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var11[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var5 = var4.Endpoints;
    var _closure1_slot9 = var5;
    var4 = var4.REDIRECTED_PAYMENT_SOURCES;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var11[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var4.PaymentSourceTypes;
    var8 = {};
    var6 = var4.GIROPAY;
    var5 = {};
    var7 = 'stripe_redirect_confirmation';
    var5['confirmationType'] = var7;
    var9 = function constructStripeConfirmPaymentHandler(arg1) {
        var1 = arg1;
        var3 = var1.stripe;
        var4 = var1.paymentSource;
        var2 = {};
        var1 = {};
        var4 = var4.billingAddress;
        var4 = var4.name;
        var1['name'] = var4;
        var2['billing_details'] = var1;
        var1 = {};
        var3 = var3.confirmGiropayPayment;
        var1['stripeConfirmPayment'] = var3;
        var1['paymentMethod'] = var2;
        return var1;
    };
    var5['constructStripeConfirmPaymentHandler'] = var9;
    var8[5] = var5;
    var6 = var4.SOFORT;
    var5 = {};
    var5['confirmationType'] = var7;
    var9 = function constructStripeConfirmPaymentHandler(arg1) {
        var1 = arg1;
        var4 = var1.paymentSource;
        var3 = var1.stripe;
        var2 = {};
        var1 = {};
        var5 = var4.billingAddress;
        var5 = var5.country;
        var1['country'] = var5;
        var2['sofort'] = var1;
        var1 = {};
        var5 = var4.billingAddress;
        var5 = var5.name;
        var1['name'] = var5;
        var4 = var4.email;
        var1['email'] = var4;
        var2['billing_details'] = var1;
        var1 = {};
        var3 = var3.confirmSofortPayment;
        var1['stripeConfirmPayment'] = var3;
        var1['paymentMethod'] = var2;
        return var1;
    };
    var5['constructStripeConfirmPaymentHandler'] = var9;
    var8[5] = var5;
    var6 = var4.PRZELEWY24;
    var5 = {};
    var5['confirmationType'] = var7;
    var9 = function constructStripeConfirmPaymentHandler(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = var2.paymentSource;
            var4 = var2.stripe;
            var3 = var1.bank;
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = {};
            var2 = {};
            var5 = var1.bank;
            var2['bank'] = var5;
            var3['p24'] = var2;
            var2 = {};
            var5 = var1.billingAddress;
            var5 = var5.name;
            var2['name'] = var5;
            var5 = var1.email;
            var2['email'] = var5;
            var3['billing_details'] = var2;
            var2 = {};
            var4 = var4.confirmP24Payment;
            var2['stripeConfirmPayment'] = var4;
            var2['paymentMethod'] = var3;
            return var2;
case 11:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.dispatchConfirmationError;
            var6 = var1.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = 'PaymentSource (';
            var1 = ') missing bank info for p24.';
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
            throw var1;
        }
    };
    var5['constructStripeConfirmPaymentHandler'] = var9;
    var8[5] = var5;
    var6 = var4.BANCONTACT;
    var5 = {};
    var5['confirmationType'] = var7;
    var9 = function constructStripeConfirmPaymentHandler(arg1) {
        var1 = arg1;
        var4 = var1.paymentSource;
        var3 = var1.stripe;
        var2 = {};
        var1 = {};
        var5 = var4.billingAddress;
        var5 = var5.name;
        var1['name'] = var5;
        var4 = var4.email;
        var1['email'] = var4;
        var2['billing_details'] = var1;
        var1 = {};
        var3 = var3.confirmBancontactPayment;
        var1['stripeConfirmPayment'] = var3;
        var1['paymentMethod'] = var2;
        return var1;
    };
    var5['constructStripeConfirmPaymentHandler'] = var9;
    var8[5] = var5;
    var6 = var4.EPS;
    var5 = {};
    var5['confirmationType'] = var7;
    var9 = function constructStripeConfirmPaymentHandler(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.paymentSource;
            var4 = var2.stripe;
            var3 = var1.bank;
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 13; continue _fun0004 }
case 12:
            var3 = {};
            var2 = {};
            var5 = var1.bank;
            var2['bank'] = var5;
            var3['eps'] = var2;
            var2 = {};
            var5 = var1.billingAddress;
            var5 = var5.name;
            var2['name'] = var5;
            var3['billing_details'] = var2;
            var2 = {};
            var4 = var4.confirmEpsPayment;
            var2['stripeConfirmPayment'] = var4;
            var2['paymentMethod'] = var3;
            return var2;
case 13:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.dispatchConfirmationError;
            var6 = var1.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = 'PaymentSource (';
            var1 = ') missing bank info for EPS.';
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
            throw var1;
        }
    };
    var5['constructStripeConfirmPaymentHandler'] = var9;
    var8[5] = var5;
    var6 = var4.IDEAL;
    var5 = {};
    var5['confirmationType'] = var7;
    var7 = function constructStripeConfirmPaymentHandler(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var4 = var1.paymentSource;
            var3 = var1.stripe;
            var2 = {};
            var1 = {};
            var2['ideal'] = var1;
            var1 = {};
            var5 = var4.billingAddress;
            var5 = var5.name;
            var1['name'] = var5;
            var2['billing_details'] = var1;
            var5 = var4.bank;
            var1 = null;
            if(!(var1 != var5)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            var1 = {};
            var4 = var4.bank;
            var1['bank'] = var4;
            var2['ideal'] = var1;
case 14:
            var1 = {};
            var3 = var3.confirmIdealPayment;
            var1['stripeConfirmPayment'] = var3;
            var1['paymentMethod'] = var2;
            return var1;
        }
    };
    var5['constructStripeConfirmPaymentHandler'] = var7;
    var8[5] = var5;
    var _closure1_slot11 = var8;
    var7 = function getIsStripeRedirectedPaymentSource(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot10;
            var1 = var4.has;
            var1 = var1.bind(var4)(var3);
            if(!var1) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var2 = _closure1_slot11;
            var1 = var3 in var2;
case 16:
            return var1;
        }
    };
    var _closure1_slot12 = var7;
    var6 = {};
    var12 = var4.SEPA_DEBIT;
    var5 = {};
    var9 = 'stripe_direct_confirmation';
    var5['confirmationType'] = var9;
    var13 = function constructStripeConfirmPaymentHandler(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.stripe;
            var2 = var1.paymentMethodId;
            var1 = null;
            if(!(var1 != var2)) { _fun0007_ip = 18; continue _fun0007 }
case 19:
            var1 = {};
            var3 = var3.confirmSepaDebitPayment;
            var1['stripeConfirmPayment'] = var3;
            var1['paymentMethod'] = var2;
            return var1;
case 18:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatchConfirmationError;
            var1 = 'On a sepa payment payment method id cannot be null';
            var1 = var2.bind(var3)(var1);
            throw var1;
        }
    };
    var5['constructStripeConfirmPaymentHandler'] = var13;
    var6[11] = var5;
    var5 = var4.PIX;
    var4 = {};
    var4['confirmationType'] = var9;
    var9 = function constructStripeConfirmPaymentHandler(arg1) {
        var1 = arg1;
        var3 = var1.stripe;
        var2 = var1.paymentMethodId;
        var1 = {};
        var3 = var3.confirmPixPayment;
        var1['stripeConfirmPayment'] = var3;
        var1['paymentMethod'] = var2;
        var2 = true;
        var1['pendingCustomerAction'] = var2;
        return var1;
    };
    var4['constructStripeConfirmPaymentHandler'] = var9;
    var6[4] = var4;
    var _closure1_slot13 = var6;
    var5 = function getIsStripeDirectConfirmationPaymentSource(arg1) {
        var2 = _closure1_slot13;
        var1 = arg1;
        var1 = var1 in var2;
        return var1;
    };
    var _closure1_slot14 = var5;
    var4 = function() {
        var4 = _closure1_slot8;
        var3 = function PaymentConfirmationHandler(arg1, arg2) {
            var4 = arg1;
            var2 = arg2;
            var3 = this;
            var6 = _closure1_slot7;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var3['paymentSource'] = var4;
            var3['payment'] = var2;
            var4 = var4.type;
            var3['paymentSourceType'] = var4;
            var2 = var2.payment_id;
            var3['paymentId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'performRedirect';
        var1['key'] = var5;
        var2 = function value(arg1) {
            var1 = global;
            var3 = var1.window;
            var2 = var3.open;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var9 = var4.bind(var1)();
    var4 = function(arg1) {
        var4 = function StripePaymentConfirmationHandler(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var8 = arg1;
                var7 = this;
                var5 = _closure1_slot7;
                var4 = _closure2_slot6;
                var3 = undefined;
                var4 = var5.bind(var3)(var7, var4);
                var4 = null;
                if(!(var4 != var8)) { _fun0008_ip = 20; continue _fun0008 }
case 21:
                var6 = _closure1_slot15;
                var5 = _closure2_slot6;
                var2 = new Array(2);
                var2[0] = var8;
                var8 = arg2;
                var2[1] = var8;
                var2 = var6.bind(var3)(var7, var5, var2);
                var2['stripe'] = var4;
                var5 = _closure1_slot12;
                var4 = var2.paymentSourceType;
                var4 = var5.bind(var3)(var4);
                if(var4) { _fun0008_ip = 22; continue _fun0008 }
case 13:
                var5 = _closure1_slot14;
                var4 = var2.paymentSourceType;
                var4 = var5.bind(var3)(var4);
                if(var4) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 8;
                var4 = var6[var4];
                var6 = var5.bind(var3)(var4);
                var5 = var6.dispatchConfirmationError;
                var4 = 'Invalid Payment Source Type - redirect or direct confirmation handlers not found.';
                var4 = var5.bind(var6)(var4);
                throw var4;
case 23:
                var5 = _closure1_slot13;
                var4 = var2.paymentSourceType;
                var4 = var5[var4];
                var2['handlerRegistry'] = var4;
                _fun0008_ip = 25; continue _fun0008;
case 22:
                var5 = _closure1_slot11;
                var4 = var2.paymentSourceType;
                var4 = var5[var4];
                var2['handlerRegistry'] = var4;
case 25:
                return var2;
case 20:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatchConfirmationError;
                var1 = 'Payment source cannot be null on a redirect.';
                var1 = var2.bind(var3)(var1);
                throw var1;
            }
        };
        var _closure2_slot6 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var7 = 'getStripe';
        var5['key'] = var7;
        var8 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                    var2 = var3.stripe;
                    var5 = null;
                    if(!(var5 == var2)) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.getStripe;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=64);
case 30:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0009_ip = 32; continue _fun0009 }
case 8:
                    var3['stripe'] = var2;
case 28:
                    var4 = var3.stripe;
                    if(!(var5 != var4)) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                    var3 = var3.stripe;
                    return var3;
case 33:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.dispatchConfirmationError;
                    var3 = 'Stripe cannot be null on a redirect.';
                    var3 = var4.bind(var5)(var3);
                    throw var3;
case 32:
                    return var2;
case 26:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var3)(var1);
        var _closure2_slot5 = var1;
        var1 = function getStripe() {
            var1 = undefined;
            var4 = _closure2_slot5;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getPaymentIntentInfo';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 35; continue _fun0010 }
case 36:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var7 = _closure1_slot9;
                    var6 = var7.BILLING_STRIPE_PAYMENT_INTENTS;
                    var5 = this;
                    var5 = var5.paymentId;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=94);
case 4:
                    return var2;
case 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                    var4 = var2.body;
                    var3 = {};
                    var5 = var4.stripe_payment_intent_client_secret;
                    var3['clientSecret'] = var5;
                    var4 = var4.stripe_payment_intent_payment_method_id;
                    var3['paymentMethodId'] = var4;
                    return var3;
case 38:
                    return var2;
case 35:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot4 = var7;
        var7 = function getPaymentIntentInfo() {
            var1 = undefined;
            var4 = _closure2_slot4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getStripeRedirect';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    var10 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 40; continue _fun0011 }
case 41:
                    var9 = var2.clientSecret;
                    var4 = var2.state;
                    var11 = var2.paymentMethodId;
                    var8 = undefined;
                    SaveGenerator(address=39);
case 21:
                    return var8;
case 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 43; continue _fun0011 }
case 44:
                    var3 = var10.getStripe;
                    var3 = var3.bind(var10)();
                    SaveGenerator(address=62);
case 45:
                    return var3;
case 30:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 46; continue _fun0011 }
case 5:
                    var7 = var10.handlerRegistry;
                    var6 = var7.constructStripeConfirmPaymentHandler;
                    var5 = {};
                    var5['stripe'] = var3;
                    var12 = var10.paymentSource;
                    var5['paymentSource'] = var12;
                    var5['paymentMethodId'] = var11;
                    var5 = var6.bind(var7)(var5);
                    var7 = var5.stripeConfirmPayment;
                    var5 = var5.paymentMethod;
                    var6 = {};
                    var6['payment_method'] = var5;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 10;
                    var11 = var13[var11];
                    var12 = var12.bind(var8)(var11);
                    var11 = var12.getAPIBaseURL;
                    var11 = var11.bind(var12)();
                    var15 = _closure1_slot9;
                    var14 = var15.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                    var13 = var10.paymentSourceType;
                    var10 = null;
                    var16 = var10 != var4;
                    var12 = '';
                    if(!var16) { _fun0011_ip = 47; continue _fun0011 }
case 20:
                    var12 = var4;
case 47:
                    var4 = 'success';
                    var4 = var14.bind(var15)(var13, var12, var4);
                    var4 = var11 + var4;
                    var6['return_url'] = var4;
                    var4 = {};
                    var11 = false;
                    var4['handleActions'] = var11;
                    var4 = var7.bind(var8)(var9, var6, var4);
                    SaveGenerator(address=237);
case 48:
                    return var4;
case 49:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0011_ip = 50; continue _fun0011 }
case 51:
                    var6 = var4.paymentIntent;
                    var7 = var4.error;
                    if(!(var10 == var7)) { _fun0011_ip = 52; continue _fun0011 }
case 53:
                    if(!(var10 != var6)) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                    var11 = var6.next_action;
                    var12 = var10 == var11;
                    var9 = undefined;
                    if(var12) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                    var11 = var11.redirect_to_url;
                    var12 = var10 == var11;
                    var9 = undefined;
                    if(var12) { _fun0011_ip = 56; continue _fun0011 }
case 58:
                    var9 = var11.url;
case 56:
                    if(!(var10 != var9)) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                    var6 = var6.next_action;
                    var6 = var6.redirect_to_url;
                    var6 = var6.url;
                    return var6;
case 59:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 8;
                    var6 = var10[var6];
                    var10 = var9.bind(var8)(var6);
                    var9 = var10.dispatchConfirmationError;
                    var6 = 'confirm payment did not return a redirect url';
                    var6 = var9.bind(var10)(var6);
                    throw var6;
case 54:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 8;
                    var6 = var10[var6];
                    var10 = var9.bind(var8)(var6);
                    var9 = var10.dispatchConfirmationError;
                    var6 = 'paymentIntent not available with successful api call';
                    var6 = var9.bind(var10)(var6);
                    throw var6;
case 52:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 8;
                    var5 = var9[var5];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.dispatchConfirmationError;
                    var5 = var5.bind(var6)(var7);
                    throw var5;
case 50:
                    return var4;
case 46:
                    return var3;
case 43:
                    return var2;
case 40:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot3 = var7;
        var7 = function getStripeRedirect() {
            var1 = undefined;
            var4 = _closure2_slot3;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'confirmRedirectedPaymentSource';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    var7 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 61; continue _fun0012 }
case 41:
                    var9 = var2.clientSecret;
                    var8 = var2.paymentMethodId;
                    var5 = undefined;
                    SaveGenerator(address=34);
case 62:
                    return var5;
case 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.popupBridgeState;
                    var3 = var7.paymentSourceType;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=84);
case 66:
                    return var3;
case 67:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                    var6 = var7.getStripeRedirect;
                    var4 = {};
                    var4['clientSecret'] = var9;
                    var4['state'] = var3;
                    var4['paymentMethodId'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=123);
case 70:
                    return var4;
case 71:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0012_ip = 72; continue _fun0012 }
case 73:
                    var6 = var7.performRedirect;
                    var6 = var6.bind(var7)(var4);
                    return var5;
case 72:
                    return var4;
case 68:
                    return var3;
case 64:
                    return var2;
case 61:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot2 = var7;
        var7 = function confirmRedirectedPaymentSource() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'confirmDirectPaymentSource';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    var10 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 74; continue _fun0013 }
case 41:
                    var7 = var2.clientSecret;
                    var9 = var2.paymentMethodId;
                    var8 = undefined;
                    SaveGenerator(address=34);
case 62:
                    return var8;
case 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 75; continue _fun0013 }
case 18:
                    var3 = var10.getStripe;
                    var3 = var3.bind(var10)();
                    SaveGenerator(address=57);
case 76:
                    return var3;
case 77:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 78; continue _fun0013 }
case 79:
                    var6 = var10.handlerRegistry;
                    var5 = var6.constructStripeConfirmPaymentHandler;
                    var4 = {};
                    var4['stripe'] = var3;
                    var10 = var10.paymentSource;
                    var4['paymentSource'] = var10;
                    var4['paymentMethodId'] = var9;
                    var4 = var5.bind(var6)(var4);
                    var5 = var4.stripeConfirmPayment;
                    var9 = var4.paymentMethod;
                    var6 = var4.pendingCustomerAction;
                    var4 = {};
                    var4['payment_method'] = var9;
                    var4 = var5.bind(var8)(var7, var4);
                    SaveGenerator(address=141);
case 32:
                    return var4;
case 80:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                    var9 = var4.paymentIntent;
                    var7 = var4.error;
                    var5 = null;
                    if(!(var5 == var7)) { _fun0013_ip = 83; continue _fun0013 }
case 84:
                    if(!(var5 != var9)) { _fun0013_ip = 85; continue _fun0013 }
case 86:
                    var5 = {};
                    var5['pendingCustomerAction'] = var6;
                    return var5;
case 85:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 8;
                    var5 = var9[var5];
                    var9 = var6.bind(var8)(var5);
                    var6 = var9.dispatchConfirmationError;
                    var5 = 'paymentIntent not available with successful stripe call';
                    var5 = var6.bind(var9)(var5);
                    throw var5;
case 83:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 8;
                    var5 = var9[var5];
                    var6 = var6.bind(var8)(var5);
                    var5 = var6.dispatchConfirmationError;
                    var5 = var5.bind(var6)(var7);
                    throw var5;
case 81:
                    return var4;
case 78:
                    return var3;
case 75:
                    return var2;
case 74:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = function confirmDirectPaymentSource() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'confirmPayment';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 87; continue _fun0014 }
case 27:
                    var2 = var6.getPaymentIntentInfo;
                    var2 = var2.bind(var6)();
                    SaveGenerator(address=29);
case 12:
                    return var2;
case 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 89; continue _fun0014 }
case 3:
                    var8 = var2.clientSecret;
                    var7 = var2.paymentMethodId;
                    var3 = var6.handlerRegistry;
                    var4 = var3.confirmationType;
                    var3 = 'stripe_redirect_confirmation';
                    if(!(var3 !== var4)) { _fun0014_ip = 90; continue _fun0014 }
case 10:
                    var4 = {};
                    var3 = false;
                    var4['redirectConfirmation'] = var3;
                    var5 = var6.confirmDirectPaymentSource;
                    var3 = {};
                    var3['clientSecret'] = var8;
                    var3['paymentMethodId'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=110);
case 91:
                    return var3;
case 92:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 73; continue _fun0014 }
case 93:
                    var5 = var3.pendingCustomerAction;
                    var4['pendingCustomerAction'] = var5;
                    _fun0014_ip = 94; continue _fun0014;
case 73:
                    return var3;
case 90:
                    var5 = var6.confirmRedirectedPaymentSource;
                    var3 = {};
                    var3['clientSecret'] = var8;
                    var3['paymentMethodId'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=161);
case 95:
                    return var3;
case 96:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 97; continue _fun0014 }
case 98:
                    var5 = {};
                    var6 = true;
                    var5['redirectConfirmation'] = var6;
                    var4 = var5;
case 94:
                    return var4;
case 97:
                    return var3;
case 89:
                    return var2;
case 87:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function confirmPayment() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var9);
    var2 = function(arg1) {
        var4 = function AdyenPaymentConfirmationHandler(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var7 = arg1;
                var6 = this;
                var5 = _closure1_slot7;
                var4 = _closure2_slot0;
                var3 = undefined;
                var4 = var5.bind(var3)(var6, var4);
                var4 = null;
                if(!(var4 != var7)) { _fun0015_ip = 79; continue _fun0015 }
case 63:
                var5 = _closure1_slot15;
                var4 = _closure2_slot0;
                var2 = new Array(2);
                var2[0] = var7;
                var7 = arg2;
                var2[1] = var7;
                var2 = var5.bind(var3)(var6, var4, var2);
                return var2;
case 79:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatchConfirmationError;
                var1 = 'Payment source cannot be null on a redirect.';
                var1 = var2.bind(var3)(var1);
                throw var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'handleAdyenConfirmation';
        var5['key'] = var1;
        var1 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = this;
                var1 = var5.payment;
                var3 = var1.adyen_redirect_url;
                var1 = null;
                if(!(var1 != var3)) { _fun0016_ip = 99; continue _fun0016 }
case 19:
                var4 = _closure1_slot10;
                var2 = var4.has;
                var1 = var5.paymentSource;
                var1 = var1.type;
                var1 = var2.bind(var4)(var1);
                var2 = {};
                if(var1) { _fun0016_ip = 5; continue _fun0016 }
case 100:
                var1 = false;
                var2['redirectConfirmation'] = var1;
                var2['redirectURL'] = var3;
                var1 = var2;
                _fun0016_ip = 101; continue _fun0016;
case 5:
                var4 = var5.performRedirect;
                var4 = var4.bind(var5)(var3);
                var4 = true;
                var2['redirectConfirmation'] = var4;
                var2['redirectURL'] = var3;
                var1 = var2;
case 101:
                return var1;
case 99:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatchConfirmationError;
                var1 = 'redirect url cannot be null on a redirect for adyen.';
                var1 = var2.bind(var3)(var1);
                throw var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'confirmPayment';
        var5['key'] = var7;
        var6 = function value() {
            var4 = this;
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = var4.handleAdyenConfirmation;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var9);
    var9 = 11;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/billing/actions/HandleConfirmPaymentRegistry.tsx';
    var9 = var10.bind(var11)(var9);
    var3['STRIPE_REDIRECTED_PAYMENT_METHOD_REGISTRY'] = var8;
    var3['getIsStripeRedirectedPaymentSource'] = var7;
    var3['STRIPE_DIRECT_CONFIRM_PAYMENT_METHOD_REGISTRY'] = var6;
    var3['getIsStripeDirectConfirmationPaymentSource'] = var5;
    var3['StripePaymentConfirmationHandler'] = var4;
    var3['AdyenPaymentConfirmationHandler'] = var2;
    return var1;
})();